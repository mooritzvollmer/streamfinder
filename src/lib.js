import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL = 'https://szlnivfniekwofrubauw.supabase.co'
export const SUPABASE_KEY = 'sb_publishable_zbfx5td-WTI39OwbWieHqA_Frd1f_3P'
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
export const apiHeaders = { apikey: SUPABASE_KEY }
export const edgeUrl = (name) => `${SUPABASE_URL}/functions/v1/${name}`
export const itemKey = (item) => `${item.type}-${item.id}`
export const LOCAL_KEY = 'streamfinder-watchlist'

export function readLocalItems() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]') } catch { return [] }
}

export function writeLocalItems(items) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(items))
}

export function fromRow(row) {
  return {
    rowId: row.id,
    id: row.tmdb_id,
    type: row.media_type,
    title: row.title,
    year: row.year || '',
    poster: row.poster,
    overview: row.overview || '',
    watched: Boolean(row.watched),
    watchlistId: row.watchlist_id || null,
  }
}
