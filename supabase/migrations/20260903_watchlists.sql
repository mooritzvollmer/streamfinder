-- Additive migration: existing accounts and watchlist_items are preserved.
create table if not exists public.watchlists (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 80),
  is_default boolean not null default false,
  is_public boolean not null default false,
  share_token uuid not null default gen_random_uuid() unique,
  created_at timestamptz not null default now()
);

alter table public.watchlist_items add column if not exists watchlist_id uuid references public.watchlists(id) on delete cascade;
alter table public.watchlist_items add column if not exists watched boolean not null default false;

insert into public.watchlists (owner_id, name, is_default)
select distinct user_id, 'Meine Watchlist', true
from public.watchlist_items wi
where not exists (select 1 from public.watchlists wl where wl.owner_id = wi.user_id and wl.is_default);

update public.watchlist_items wi
set watchlist_id = wl.id
from public.watchlists wl
where wi.watchlist_id is null and wl.owner_id = wi.user_id and wl.is_default;

insert into public.watchlists (owner_id, name, is_default)
select id, 'Meine Watchlist', true from auth.users u
where not exists (select 1 from public.watchlists wl where wl.owner_id = u.id and wl.is_default);

alter table public.watchlist_items drop constraint if exists watchlist_items_user_id_tmdb_id_media_type_key;
alter table public.watchlist_items alter column watchlist_id set not null;
create unique index if not exists watchlist_items_per_list_unique on public.watchlist_items(watchlist_id, tmdb_id, media_type);
create unique index if not exists one_default_watchlist_per_user on public.watchlists(owner_id) where is_default;

alter table public.watchlists enable row level security;
drop policy if exists "Owners manage watchlists" on public.watchlists;
create policy "Owners manage watchlists" on public.watchlists for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
drop policy if exists "Public watchlists are readable" on public.watchlists;
drop policy if exists "Public watchlist items are readable" on public.watchlist_items;

create or replace function public.shared_watchlist(requested_token uuid)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'name', wl.name,
    'items', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', wi.id,
        'tmdb_id', wi.tmdb_id,
        'media_type', wi.media_type,
        'title', wi.title,
        'year', wi.year,
        'poster', wi.poster,
        'overview', wi.overview,
        'watched', wi.watched,
        'watchlist_id', wi.watchlist_id
      ) order by wi.created_at desc)
      from public.watchlist_items wi where wi.watchlist_id = wl.id
    ), '[]'::jsonb)
  )
  from public.watchlists wl
  where wl.share_token = requested_token and wl.is_public = true;
$$;

revoke all on function public.shared_watchlist(uuid) from public;
grant execute on function public.shared_watchlist(uuid) to anon, authenticated;

-- Existing watchlist_items RLS policies remain in place. They continue to protect rows by user_id.
