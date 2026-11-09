// Current PHP/session-based live application recovered on 2026-11-09.
import "./current-style.css";
(function() {
  const N = document.createElement("link").relList;
  if (N && N.supports && N.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) o(R);
  new MutationObserver((R) => {
    for (const Y of R) if (Y.type === "childList") for (const el of Y.addedNodes) el.tagName === "LINK" && el.rel === "modulepreload" && o(el);
  }).observe(document, { childList: true, subtree: true });
  function H(R) {
    const Y = {};
    return R.integrity && (Y.integrity = R.integrity), R.referrerPolicy && (Y.referrerPolicy = R.referrerPolicy), R.crossOrigin === "use-credentials" ? Y.credentials = "include" : R.crossOrigin === "anonymous" ? Y.credentials = "omit" : Y.credentials = "same-origin", Y;
  }
  function o(R) {
    if (R.ep) return;
    R.ep = true;
    const Y = H(R);
    fetch(R.href, Y);
  }
})();
var cf = { exports: {} }, Eu = {};
var ro;
function Pv() {
  if (ro) return Eu;
  ro = 1;
  var T = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.fragment");
  function H(o, R, Y) {
    var el = null;
    if (Y !== void 0 && (el = "" + Y), R.key !== void 0 && (el = "" + R.key), "key" in R) {
      Y = {};
      for (var yl in R) yl !== "key" && (Y[yl] = R[yl]);
    } else Y = R;
    return R = Y.ref, { $$typeof: T, type: o, key: el, ref: R !== void 0 ? R : null, props: Y };
  }
  return Eu.Fragment = N, Eu.jsx = H, Eu.jsxs = H, Eu;
}
var go;
function ly() {
  return go || (go = 1, cf.exports = Pv()), cf.exports;
}
var S = ly(), ff = { exports: {} }, X = {};
var So;
function ty() {
  if (So) return X;
  So = 1;
  var T = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), H = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), R = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.consumer"), el = /* @__PURE__ */ Symbol.for("react.context"), yl = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), K = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), cl = Symbol.iterator;
  function J(f) {
    return f === null || typeof f != "object" ? null : (f = cl && f[cl] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var bl = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, il = Object.assign, Pl = {};
  function Xl(f, g, O) {
    this.props = f, this.context = g, this.refs = Pl, this.updater = O || bl;
  }
  Xl.prototype.isReactComponent = {}, Xl.prototype.setState = function(f, g) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, g, "setState");
  }, Xl.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function lt() {
  }
  lt.prototype = Xl.prototype;
  function Nl(f, g, O) {
    this.props = f, this.context = g, this.refs = Pl, this.updater = O || bl;
  }
  var gl = Nl.prototype = new lt();
  gl.constructor = Nl, il(gl, Xl.prototype), gl.isPureReactComponent = true;
  var mt = Array.isArray;
  function xl() {
  }
  var Q = { H: null, A: null, T: null, S: null }, Rl = Object.prototype.hasOwnProperty;
  function vt(f, g, O) {
    var j = O.ref;
    return { $$typeof: T, type: f, key: g, ref: j !== void 0 ? j : null, props: O };
  }
  function Pt(f, g) {
    return vt(f.type, g, f.props);
  }
  function yt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === T;
  }
  function Ql(f) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(O) {
      return g[O];
    });
  }
  var xt = /\/+/g;
  function _t(f, g) {
    return typeof f == "object" && f !== null && f.key != null ? Ql("" + f.key) : g.toString(36);
  }
  function tt(f) {
    switch (f.status) {
      case "fulfilled":
        return f.value;
      case "rejected":
        throw f.reason;
      default:
        switch (typeof f.status == "string" ? f.then(xl, xl) : (f.status = "pending", f.then(function(g) {
          f.status === "pending" && (f.status = "fulfilled", f.value = g);
        }, function(g) {
          f.status === "pending" && (f.status = "rejected", f.reason = g);
        })), f.status) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
        }
    }
    throw f;
  }
  function z(f, g, O, j, Z) {
    var w = typeof f;
    (w === "undefined" || w === "boolean") && (f = null);
    var nl = false;
    if (f === null) nl = true;
    else switch (w) {
      case "bigint":
      case "string":
      case "number":
        nl = true;
        break;
      case "object":
        switch (f.$$typeof) {
          case T:
          case N:
            nl = true;
            break;
          case K:
            return nl = f._init, z(nl(f._payload), g, O, j, Z);
        }
    }
    if (nl) return Z = Z(f), nl = j === "" ? "." + _t(f, 0) : j, mt(Z) ? (O = "", nl != null && (O = nl.replace(xt, "$&/") + "/"), z(Z, g, O, "", function(De) {
      return De;
    })) : Z != null && (yt(Z) && (Z = Pt(Z, O + (Z.key == null || f && f.key === Z.key ? "" : ("" + Z.key).replace(xt, "$&/") + "/") + nl)), g.push(Z)), 1;
    nl = 0;
    var Ll = j === "" ? "." : j + ":";
    if (mt(f)) for (var Tl = 0; Tl < f.length; Tl++) j = f[Tl], w = Ll + _t(j, Tl), nl += z(j, g, O, w, Z);
    else if (Tl = J(f), typeof Tl == "function") for (f = Tl.call(f), Tl = 0; !(j = f.next()).done; ) j = j.value, w = Ll + _t(j, Tl++), nl += z(j, g, O, w, Z);
    else if (w === "object") {
      if (typeof f.then == "function") return z(tt(f), g, O, j, Z);
      throw g = String(f), Error("Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead.");
    }
    return nl;
  }
  function M(f, g, O) {
    if (f == null) return f;
    var j = [], Z = 0;
    return z(f, j, "", "", function(w) {
      return g.call(O, w, Z++);
    }), j;
  }
  function G(f) {
    if (f._status === -1) {
      var g = f._result;
      g = g(), g.then(function(O) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = O);
      }, function(O) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = O);
      }), f._status === -1 && (f._status = 0, f._result = g);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ul = typeof reportError == "function" ? reportError : function(f) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var g = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f), error: f });
      if (!window.dispatchEvent(g)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", f);
      return;
    }
    console.error(f);
  }, _ = { map: M, forEach: function(f, g, O) {
    M(f, function() {
      g.apply(this, arguments);
    }, O);
  }, count: function(f) {
    var g = 0;
    return M(f, function() {
      g++;
    }), g;
  }, toArray: function(f) {
    return M(f, function(g) {
      return g;
    }) || [];
  }, only: function(f) {
    if (!yt(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } };
  return X.Activity = C, X.Children = _, X.Component = Xl, X.Fragment = H, X.Profiler = R, X.PureComponent = Nl, X.StrictMode = o, X.Suspense = U, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, X.__COMPILER_RUNTIME = { __proto__: null, c: function(f) {
    return Q.H.useMemoCache(f);
  } }, X.cache = function(f) {
    return function() {
      return f.apply(null, arguments);
    };
  }, X.cacheSignal = function() {
    return null;
  }, X.cloneElement = function(f, g, O) {
    if (f == null) throw Error("The argument must be a React element, but you passed " + f + ".");
    var j = il({}, f.props), Z = f.key;
    if (g != null) for (w in g.key !== void 0 && (Z = "" + g.key), g) !Rl.call(g, w) || w === "key" || w === "__self" || w === "__source" || w === "ref" && g.ref === void 0 || (j[w] = g[w]);
    var w = arguments.length - 2;
    if (w === 1) j.children = O;
    else if (1 < w) {
      for (var nl = Array(w), Ll = 0; Ll < w; Ll++) nl[Ll] = arguments[Ll + 2];
      j.children = nl;
    }
    return vt(f.type, Z, j);
  }, X.createContext = function(f) {
    return f = { $$typeof: el, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null }, f.Provider = f, f.Consumer = { $$typeof: Y, _context: f }, f;
  }, X.createElement = function(f, g, O) {
    var j, Z = {}, w = null;
    if (g != null) for (j in g.key !== void 0 && (w = "" + g.key), g) Rl.call(g, j) && j !== "key" && j !== "__self" && j !== "__source" && (Z[j] = g[j]);
    var nl = arguments.length - 2;
    if (nl === 1) Z.children = O;
    else if (1 < nl) {
      for (var Ll = Array(nl), Tl = 0; Tl < nl; Tl++) Ll[Tl] = arguments[Tl + 2];
      Z.children = Ll;
    }
    if (f && f.defaultProps) for (j in nl = f.defaultProps, nl) Z[j] === void 0 && (Z[j] = nl[j]);
    return vt(f, w, Z);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(f) {
    return { $$typeof: yl, render: f };
  }, X.isValidElement = yt, X.lazy = function(f) {
    return { $$typeof: K, _payload: { _status: -1, _result: f }, _init: G };
  }, X.memo = function(f, g) {
    return { $$typeof: A, type: f, compare: g === void 0 ? null : g };
  }, X.startTransition = function(f) {
    var g = Q.T, O = {};
    Q.T = O;
    try {
      var j = f(), Z = Q.S;
      Z !== null && Z(O, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then(xl, ul);
    } catch (w) {
      ul(w);
    } finally {
      g !== null && O.types !== null && (g.types = O.types), Q.T = g;
    }
  }, X.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, X.use = function(f) {
    return Q.H.use(f);
  }, X.useActionState = function(f, g, O) {
    return Q.H.useActionState(f, g, O);
  }, X.useCallback = function(f, g) {
    return Q.H.useCallback(f, g);
  }, X.useContext = function(f) {
    return Q.H.useContext(f);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(f, g) {
    return Q.H.useDeferredValue(f, g);
  }, X.useEffect = function(f, g) {
    return Q.H.useEffect(f, g);
  }, X.useEffectEvent = function(f) {
    return Q.H.useEffectEvent(f);
  }, X.useId = function() {
    return Q.H.useId();
  }, X.useImperativeHandle = function(f, g, O) {
    return Q.H.useImperativeHandle(f, g, O);
  }, X.useInsertionEffect = function(f, g) {
    return Q.H.useInsertionEffect(f, g);
  }, X.useLayoutEffect = function(f, g) {
    return Q.H.useLayoutEffect(f, g);
  }, X.useMemo = function(f, g) {
    return Q.H.useMemo(f, g);
  }, X.useOptimistic = function(f, g) {
    return Q.H.useOptimistic(f, g);
  }, X.useReducer = function(f, g, O) {
    return Q.H.useReducer(f, g, O);
  }, X.useRef = function(f) {
    return Q.H.useRef(f);
  }, X.useState = function(f) {
    return Q.H.useState(f);
  }, X.useSyncExternalStore = function(f, g, O) {
    return Q.H.useSyncExternalStore(f, g, O);
  }, X.useTransition = function() {
    return Q.H.useTransition();
  }, X.version = "19.2.8", X;
}
var bo;
function vf() {
  return bo || (bo = 1, ff.exports = ty()), ff.exports;
}
var P = vf(), sf = { exports: {} }, Tu = {}, df = { exports: {} }, of = {};
var zo;
function ay() {
  return zo || (zo = 1, (function(T) {
    function N(z, M) {
      var G = z.length;
      z.push(M);
      l: for (; 0 < G; ) {
        var ul = G - 1 >>> 1, _ = z[ul];
        if (0 < R(_, M)) z[ul] = M, z[G] = _, G = ul;
        else break l;
      }
    }
    function H(z) {
      return z.length === 0 ? null : z[0];
    }
    function o(z) {
      if (z.length === 0) return null;
      var M = z[0], G = z.pop();
      if (G !== M) {
        z[0] = G;
        l: for (var ul = 0, _ = z.length, f = _ >>> 1; ul < f; ) {
          var g = 2 * (ul + 1) - 1, O = z[g], j = g + 1, Z = z[j];
          if (0 > R(O, G)) j < _ && 0 > R(Z, O) ? (z[ul] = Z, z[j] = G, ul = j) : (z[ul] = O, z[g] = G, ul = g);
          else if (j < _ && 0 > R(Z, G)) z[ul] = Z, z[j] = G, ul = j;
          else break l;
        }
      }
      return M;
    }
    function R(z, M) {
      var G = z.sortIndex - M.sortIndex;
      return G !== 0 ? G : z.id - M.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Y = performance;
      T.unstable_now = function() {
        return Y.now();
      };
    } else {
      var el = Date, yl = el.now();
      T.unstable_now = function() {
        return el.now() - yl;
      };
    }
    var U = [], A = [], K = 1, C = null, cl = 3, J = false, bl = false, il = false, Pl = false, Xl = typeof setTimeout == "function" ? setTimeout : null, lt = typeof clearTimeout == "function" ? clearTimeout : null, Nl = typeof setImmediate < "u" ? setImmediate : null;
    function gl(z) {
      for (var M = H(A); M !== null; ) {
        if (M.callback === null) o(A);
        else if (M.startTime <= z) o(A), M.sortIndex = M.expirationTime, N(U, M);
        else break;
        M = H(A);
      }
    }
    function mt(z) {
      if (il = false, gl(z), !bl) if (H(U) !== null) bl = true, xl || (xl = true, Ql());
      else {
        var M = H(A);
        M !== null && tt(mt, M.startTime - z);
      }
    }
    var xl = false, Q = -1, Rl = 5, vt = -1;
    function Pt() {
      return Pl ? true : !(T.unstable_now() - vt < Rl);
    }
    function yt() {
      if (Pl = false, xl) {
        var z = T.unstable_now();
        vt = z;
        var M = true;
        try {
          l: {
            bl = false, il && (il = false, lt(Q), Q = -1), J = true;
            var G = cl;
            try {
              t: {
                for (gl(z), C = H(U); C !== null && !(C.expirationTime > z && Pt()); ) {
                  var ul = C.callback;
                  if (typeof ul == "function") {
                    C.callback = null, cl = C.priorityLevel;
                    var _ = ul(C.expirationTime <= z);
                    if (z = T.unstable_now(), typeof _ == "function") {
                      C.callback = _, gl(z), M = true;
                      break t;
                    }
                    C === H(U) && o(U), gl(z);
                  } else o(U);
                  C = H(U);
                }
                if (C !== null) M = true;
                else {
                  var f = H(A);
                  f !== null && tt(mt, f.startTime - z), M = false;
                }
              }
              break l;
            } finally {
              C = null, cl = G, J = false;
            }
            M = void 0;
          }
        } finally {
          M ? Ql() : xl = false;
        }
      }
    }
    var Ql;
    if (typeof Nl == "function") Ql = function() {
      Nl(yt);
    };
    else if (typeof MessageChannel < "u") {
      var xt = new MessageChannel(), _t = xt.port2;
      xt.port1.onmessage = yt, Ql = function() {
        _t.postMessage(null);
      };
    } else Ql = function() {
      Xl(yt, 0);
    };
    function tt(z, M) {
      Q = Xl(function() {
        z(T.unstable_now());
      }, M);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, T.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Rl = 0 < z ? Math.floor(1e3 / z) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return cl;
    }, T.unstable_next = function(z) {
      switch (cl) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = cl;
      }
      var G = cl;
      cl = M;
      try {
        return z();
      } finally {
        cl = G;
      }
    }, T.unstable_requestPaint = function() {
      Pl = true;
    }, T.unstable_runWithPriority = function(z, M) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var G = cl;
      cl = z;
      try {
        return M();
      } finally {
        cl = G;
      }
    }, T.unstable_scheduleCallback = function(z, M, G) {
      var ul = T.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ul + G : ul) : G = ul, z) {
        case 1:
          var _ = -1;
          break;
        case 2:
          _ = 250;
          break;
        case 5:
          _ = 1073741823;
          break;
        case 4:
          _ = 1e4;
          break;
        default:
          _ = 5e3;
      }
      return _ = G + _, z = { id: K++, callback: M, priorityLevel: z, startTime: G, expirationTime: _, sortIndex: -1 }, G > ul ? (z.sortIndex = G, N(A, z), H(U) === null && z === H(A) && (il ? (lt(Q), Q = -1) : il = true, tt(mt, G - ul))) : (z.sortIndex = _, N(U, z), bl || J || (bl = true, xl || (xl = true, Ql()))), z;
    }, T.unstable_shouldYield = Pt, T.unstable_wrapCallback = function(z) {
      var M = cl;
      return function() {
        var G = cl;
        cl = M;
        try {
          return z.apply(this, arguments);
        } finally {
          cl = G;
        }
      };
    };
  })(of)), of;
}
var Eo;
function ey() {
  return Eo || (Eo = 1, df.exports = ay()), df.exports;
}
var mf = { exports: {} }, Zl = {};
var To;
function uy() {
  if (To) return Zl;
  To = 1;
  var T = vf();
  function N(U) {
    var A = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var K = 2; K < arguments.length; K++) A += "&args[]=" + encodeURIComponent(arguments[K]);
    }
    return "Minified React error #" + U + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function H() {
  }
  var o = { d: { f: H, r: function() {
    throw Error(N(522));
  }, D: H, C: H, L: H, m: H, X: H, S: H, M: H }, p: 0, findDOMNode: null }, R = /* @__PURE__ */ Symbol.for("react.portal");
  function Y(U, A, K) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: R, key: C == null ? null : "" + C, children: U, containerInfo: A, implementation: K };
  }
  var el = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function yl(U, A) {
    if (U === "font") return "";
    if (typeof A == "string") return A === "use-credentials" ? A : "";
  }
  return Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Zl.createPortal = function(U, A) {
    var K = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11) throw Error(N(299));
    return Y(U, A, null, K);
  }, Zl.flushSync = function(U) {
    var A = el.T, K = o.p;
    try {
      if (el.T = null, o.p = 2, U) return U();
    } finally {
      el.T = A, o.p = K, o.d.f();
    }
  }, Zl.preconnect = function(U, A) {
    typeof U == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, o.d.C(U, A));
  }, Zl.prefetchDNS = function(U) {
    typeof U == "string" && o.d.D(U);
  }, Zl.preinit = function(U, A) {
    if (typeof U == "string" && A && typeof A.as == "string") {
      var K = A.as, C = yl(K, A.crossOrigin), cl = typeof A.integrity == "string" ? A.integrity : void 0, J = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      K === "style" ? o.d.S(U, typeof A.precedence == "string" ? A.precedence : void 0, { crossOrigin: C, integrity: cl, fetchPriority: J }) : K === "script" && o.d.X(U, { crossOrigin: C, integrity: cl, fetchPriority: J, nonce: typeof A.nonce == "string" ? A.nonce : void 0 });
    }
  }, Zl.preinitModule = function(U, A) {
    if (typeof U == "string") if (typeof A == "object" && A !== null) {
      if (A.as == null || A.as === "script") {
        var K = yl(A.as, A.crossOrigin);
        o.d.M(U, { crossOrigin: K, integrity: typeof A.integrity == "string" ? A.integrity : void 0, nonce: typeof A.nonce == "string" ? A.nonce : void 0 });
      }
    } else A == null && o.d.M(U);
  }, Zl.preload = function(U, A) {
    if (typeof U == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var K = A.as, C = yl(K, A.crossOrigin);
      o.d.L(U, K, { crossOrigin: C, integrity: typeof A.integrity == "string" ? A.integrity : void 0, nonce: typeof A.nonce == "string" ? A.nonce : void 0, type: typeof A.type == "string" ? A.type : void 0, fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0, referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0, imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0, imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0, media: typeof A.media == "string" ? A.media : void 0 });
    }
  }, Zl.preloadModule = function(U, A) {
    if (typeof U == "string") if (A) {
      var K = yl(A.as, A.crossOrigin);
      o.d.m(U, { as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0, crossOrigin: K, integrity: typeof A.integrity == "string" ? A.integrity : void 0 });
    } else o.d.m(U);
  }, Zl.requestFormReset = function(U) {
    o.d.r(U);
  }, Zl.unstable_batchedUpdates = function(U, A) {
    return U(A);
  }, Zl.useFormState = function(U, A, K) {
    return el.H.useFormState(U, A, K);
  }, Zl.useFormStatus = function() {
    return el.H.useHostTransitionStatus();
  }, Zl.version = "19.2.8", Zl;
}
var Ao;
function ny() {
  if (Ao) return mf.exports;
  Ao = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
    } catch (N) {
      console.error(N);
    }
  }
  return T(), mf.exports = uy(), mf.exports;
}
var po;
function cy() {
  if (po) return Tu;
  po = 1;
  var T = ey(), N = vf(), H = ny();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function R(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Y(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function el(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function yl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (Y(l) !== l) throw Error(o(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (t = Y(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return U(u), l;
          if (n === e) return U(u), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var c = false, i = u.child; i; ) {
          if (i === a) {
            c = true, a = u, e = n;
            break;
          }
          if (i === e) {
            c = true, e = u, a = n;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              c = true, a = n, e = u;
              break;
            }
            if (i === e) {
              c = true, e = n, a = u;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (a.alternate !== e) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function K(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = K(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign, cl = /* @__PURE__ */ Symbol.for("react.element"), J = /* @__PURE__ */ Symbol.for("react.transitional.element"), bl = /* @__PURE__ */ Symbol.for("react.portal"), il = /* @__PURE__ */ Symbol.for("react.fragment"), Pl = /* @__PURE__ */ Symbol.for("react.strict_mode"), Xl = /* @__PURE__ */ Symbol.for("react.profiler"), lt = /* @__PURE__ */ Symbol.for("react.consumer"), Nl = /* @__PURE__ */ Symbol.for("react.context"), gl = /* @__PURE__ */ Symbol.for("react.forward_ref"), mt = /* @__PURE__ */ Symbol.for("react.suspense"), xl = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), Rl = /* @__PURE__ */ Symbol.for("react.lazy"), vt = /* @__PURE__ */ Symbol.for("react.activity"), Pt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), yt = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object" ? null : (l = yt && l[yt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var xt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function _t(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === xt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case il:
        return "Fragment";
      case Xl:
        return "Profiler";
      case Pl:
        return "StrictMode";
      case mt:
        return "Suspense";
      case xl:
        return "SuspenseList";
      case vt:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case bl:
        return "Portal";
      case Nl:
        return l.displayName || "Context";
      case lt:
        return (l._context.displayName || "Context") + ".Consumer";
      case gl:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case Q:
        return t = l.displayName || null, t !== null ? t : _t(l.type) || "Memo";
      case Rl:
        t = l._payload, l = l._init;
        try {
          return _t(l(t));
        } catch {
        }
    }
    return null;
  }
  var tt = Array.isArray, z = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = { pending: false, data: null, method: null, action: null }, ul = [], _ = -1;
  function f(l) {
    return { current: l };
  }
  function g(l) {
    0 > _ || (l.current = ul[_], ul[_] = null, _--);
  }
  function O(l, t) {
    _++, ul[_] = l.current, l.current = t;
  }
  var j = f(null), Z = f(null), w = f(null), nl = f(null);
  function Ll(l, t) {
    switch (O(w, t), O(Z, l), O(j, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Y0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = Y0(t), l = G0(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    g(j), O(j, l);
  }
  function Tl() {
    g(j), g(Z), g(w);
  }
  function De(l) {
    l.memoizedState !== null && O(nl, l);
    var t = j.current, a = G0(t, l.type);
    t !== a && (O(Z, l), O(j, a));
  }
  function Au(l) {
    Z.current === l && (g(j), g(Z)), nl.current === l && (g(nl), gu._currentValue = G);
  }
  var Zn, yf;
  function _a(l) {
    if (Zn === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Zn = t && t[1] || "", yf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Zn + l + yf;
  }
  var Ln = false;
  function Vn(l, t) {
    if (!l || Ln) return "";
    Ln = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var p = function() {
              throw Error();
            };
            if (Object.defineProperty(p.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(p, []);
              } catch (r) {
                var h = r;
              }
              Reflect.construct(l, [], p);
            } else {
              try {
                p.call();
              } catch (r) {
                h = r;
              }
              l.call(p.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (r) {
              h = r;
            }
            (p = l()) && typeof p.catch == "function" && p.catch(function() {
            });
          }
        } catch (r) {
          if (r && h && typeof r.stack == "string") return [r.stack, h.stack];
        }
        return [null, null];
      } };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(e.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = e.DetermineComponentFrameRoot(), c = n[0], i = n[1];
      if (c && i) {
        var s = c.split(`
`), y = i.split(`
`);
        for (u = e = 0; e < s.length && !s[e].includes("DetermineComponentFrameRoot"); ) e++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (e === s.length || u === y.length) for (e = s.length - 1, u = y.length - 1; 1 <= e && 0 <= u && s[e] !== y[u]; ) u--;
        for (; 1 <= e && 0 <= u; e--, u--) if (s[e] !== y[u]) {
          if (e !== 1 || u !== 1) do
            if (e--, u--, 0 > u || s[e] !== y[u]) {
              var b = `
` + s[e].replace(" at new ", " at ");
              return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
            }
          while (1 <= e && 0 <= u);
          break;
        }
      }
    } finally {
      Ln = false, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? _a(a) : "";
  }
  function Uo(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return _a(l.type);
      case 16:
        return _a("Lazy");
      case 13:
        return l.child !== t && t !== null ? _a("Suspense Fallback") : _a("Suspense");
      case 19:
        return _a("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, false);
      case 11:
        return Vn(l.type.render, false);
      case 1:
        return Vn(l.type, true);
      case 31:
        return _a("Activity");
      default:
        return "";
    }
  }
  function hf(l) {
    try {
      var t = "", a = null;
      do
        t += Uo(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Kn = Object.prototype.hasOwnProperty, Jn = T.unstable_scheduleCallback, wn = T.unstable_cancelCallback, jo = T.unstable_shouldYield, Ho = T.unstable_requestPaint, at = T.unstable_now, xo = T.unstable_getCurrentPriorityLevel, rf = T.unstable_ImmediatePriority, gf = T.unstable_UserBlockingPriority, pu = T.unstable_NormalPriority, Ro = T.unstable_LowPriority, Sf = T.unstable_IdlePriority, Co = T.log, qo = T.unstable_setDisableYieldValue, Ne = null, et = null;
  function la(l) {
    if (typeof Co == "function" && qo(l), et && typeof et.setStrictMode == "function") try {
      et.setStrictMode(Ne, l);
    } catch {
    }
  }
  var ut = Math.clz32 ? Math.clz32 : Go, Bo = Math.log, Yo = Math.LN2;
  function Go(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Bo(l) / Yo | 0) | 0;
  }
  var _u = 256, Ou = 262144, Mu = 4194304;
  function Oa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Du(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return i !== 0 ? (e = i & ~n, e !== 0 ? u = Oa(e) : (c &= i, c !== 0 ? u = Oa(c) : a || (a = i & ~l, a !== 0 && (u = Oa(a))))) : (i = e & ~n, i !== 0 ? u = Oa(i) : c !== 0 ? u = Oa(c) : a || (a = e & ~l, a !== 0 && (u = Oa(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Ue(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Xo(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bf() {
    var l = Mu;
    return Mu <<= 1, (Mu & 62914560) === 0 && (Mu = 4194304), l;
  }
  function Wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function je(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Qo(l, t, a, e, u, n) {
    var c = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, s = l.expirationTimes, y = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var b = 31 - ut(a), p = 1 << b;
      i[b] = 0, s[b] = -1;
      var h = y[b];
      if (h !== null) for (y[b] = null, b = 0; b < h.length; b++) {
        var r = h[b];
        r !== null && (r.lane &= -536870913);
      }
      a &= ~p;
    }
    e !== 0 && zf(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function zf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - ut(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function Ef(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - ut(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function Tf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : $n(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function $n(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Fn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Af() {
    var l = M.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fo(l.type));
  }
  function pf(l, t) {
    var a = M.p;
    try {
      return M.p = l, t();
    } finally {
      M.p = a;
    }
  }
  var ta = Math.random().toString(36).slice(2), Cl = "__reactFiber$" + ta, Kl = "__reactProps$" + ta, Va = "__reactContainer$" + ta, kn = "__reactEvents$" + ta, Zo = "__reactListeners$" + ta, Lo = "__reactHandles$" + ta, _f = "__reactResources$" + ta, He = "__reactMarker$" + ta;
  function In(l) {
    delete l[Cl], delete l[Kl], delete l[kn], delete l[Zo], delete l[Lo];
  }
  function Ka(l) {
    var t = l[Cl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Va] || a[Cl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = J0(l); l !== null; ) {
          if (a = l[Cl]) return a;
          l = J0(l);
        }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Ja(l) {
    if (l = l[Cl] || l[Va]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function xe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function wa(l) {
    var t = l[_f];
    return t || (t = l[_f] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function jl(l) {
    l[He] = true;
  }
  var Of = /* @__PURE__ */ new Set(), Mf = {};
  function Ma(l, t) {
    Wa(l, t), Wa(l + "Capture", t);
  }
  function Wa(l, t) {
    for (Mf[l] = t, l = 0; l < t.length; l++) Of.add(t[l]);
  }
  var Vo = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Df = {}, Nf = {};
  function Ko(l) {
    return Kn.call(Nf, l) ? true : Kn.call(Df, l) ? false : Vo.test(l) ? Nf[l] = true : (Df[l] = true, false);
  }
  function Nu(l, t, a) {
    if (Ko(t)) if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var e = t.toLowerCase().slice(0, 5);
          if (e !== "data-" && e !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Uu(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Rt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function ht(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Uf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Jo(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return u.call(this);
      }, set: function(c) {
        a = "" + c, n.call(this, c);
      } }), Object.defineProperty(l, t, { enumerable: e.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(c) {
        a = "" + c;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function Pn(l) {
    if (!l._valueTracker) {
      var t = Uf(l) ? "checked" : "value";
      l._valueTracker = Jo(l, t, "" + l[t]);
    }
  }
  function jf(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var a = t.getValue(), e = "";
    return l && (e = Uf(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), true) : false;
  }
  function ju(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var wo = /[\n"\\]/g;
  function rt(l) {
    return l.replace(wo, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l, t, a, e, u, n, c, i) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ht(t)) : l.value !== "" + ht(t) && (l.value = "" + ht(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? tc(l, c, ht(t)) : a != null ? tc(l, c, ht(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + ht(i) : l.removeAttribute("name");
  }
  function Hf(l, t, a, e, u, n, c, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Pn(l);
        return;
      }
      a = a != null ? "" + ht(a) : "", t = t != null ? "" + ht(t) : a, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = i ? l.checked : !!e, l.defaultChecked = !!e, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), Pn(l);
  }
  function tc(l, t, a) {
    t === "number" && ju(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function $a(l, t, a, e) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = true;
      for (a = 0; a < l.length; a++) u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = true);
    } else {
      for (a = "" + ht(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = true, e && (l[u].defaultSelected = true);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = true);
    }
  }
  function xf(l, t, a) {
    if (t != null && (t = "" + ht(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ht(a) : "";
  }
  function Rf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(o(92));
        if (tt(e)) {
          if (1 < e.length) throw Error(o(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = ht(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), Pn(l);
  }
  function Fa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Wo = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Cf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Wo.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function qf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (l = l.style, a != null) {
      for (var e in a) !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var u in t) e = t[u], t.hasOwnProperty(u) && a[u] !== e && Cf(l, u, e);
    } else for (var n in t) t.hasOwnProperty(n) && Cf(l, n, t[n]);
  }
  function ac(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var $o = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Fo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hu(l) {
    return Fo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ct() {
  }
  var ec = null;
  function uc(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ka = null, Ia = null;
  function Bf(l) {
    var t = Ja(l);
    if (t && (l = t.stateNode)) {
      var a = l[Kl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (lc(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + rt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Kl] || null;
                if (!u) throw Error(o(90));
                lc(e, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (t = 0; t < a.length; t++) e = a[t], e.form === l.form && jf(e);
          }
          break l;
        case "textarea":
          xf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && $a(l, !!a.multiple, t, false);
      }
    }
  }
  var nc = false;
  function Yf(l, t, a) {
    if (nc) return l(t, a);
    nc = true;
    try {
      var e = l(t);
      return e;
    } finally {
      if (nc = false, (ka !== null || Ia !== null) && (zn(), ka && (t = ka, l = Ia, Ia = ka = null, Bf(t), l))) for (t = 0; t < l.length; t++) Bf(l[t]);
    }
  }
  function Re(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Kl] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cc = false;
  if (qt) try {
    var Ce = {};
    Object.defineProperty(Ce, "passive", { get: function() {
      cc = true;
    } }), window.addEventListener("test", Ce, Ce), window.removeEventListener("test", Ce, Ce);
  } catch {
    cc = false;
  }
  var aa = null, ic = null, xu = null;
  function Gf() {
    if (xu) return xu;
    var l, t = ic, a = t.length, e, u = "value" in aa ? aa.value : aa.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var c = a - l;
    for (e = 1; e <= c && t[a - e] === u[n - e]; e++) ;
    return xu = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function Ru(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Cu() {
    return true;
  }
  function Xf() {
    return false;
  }
  function Jl(l) {
    function t(a, e, u, n, c) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var i in l) l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Cu : Xf, this.isPropagationStopped = Xf, this;
    }
    return C(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = Cu);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = Cu);
    }, persist: function() {
    }, isPersistent: Cu }), t;
  }
  var Da = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qu = Jl(Da), qe = C({}, Da, { view: 0, detail: 0 }), ko = Jl(qe), fc, sc, Be, Bu = C({}, qe, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: oc, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== Be && (Be && l.type === "mousemove" ? (fc = l.screenX - Be.screenX, sc = l.screenY - Be.screenY) : sc = fc = 0, Be = l), fc);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : sc;
  } }), Qf = Jl(Bu), Io = C({}, Bu, { dataTransfer: 0 }), Po = Jl(Io), lm = C({}, qe, { relatedTarget: 0 }), dc = Jl(lm), tm = C({}, Da, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), am = Jl(tm), em = C({}, Da, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), um = Jl(em), nm = C({}, Da, { data: 0 }), Zf = Jl(nm), cm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, im = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, fm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function sm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = fm[l]) ? !!t[l] : false;
  }
  function oc() {
    return sm;
  }
  var dm = C({}, qe, { key: function(l) {
    if (l.key) {
      var t = cm[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = Ru(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? im[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: oc, charCode: function(l) {
    return l.type === "keypress" ? Ru(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? Ru(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), om = Jl(dm), mm = C({}, Bu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lf = Jl(mm), vm = C({}, qe, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: oc }), ym = Jl(vm), hm = C({}, Da, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rm = Jl(hm), gm = C({}, Bu, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Sm = Jl(gm), bm = C({}, Da, { newState: 0, oldState: 0 }), zm = Jl(bm), Em = [9, 13, 27, 32], mc = qt && "CompositionEvent" in window, Ye = null;
  qt && "documentMode" in document && (Ye = document.documentMode);
  var Tm = qt && "TextEvent" in window && !Ye, Vf = qt && (!mc || Ye && 8 < Ye && 11 >= Ye), Kf = " ", Jf = false;
  function wf(l, t) {
    switch (l) {
      case "keyup":
        return Em.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Wf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Pa = false;
  function Am(l, t) {
    switch (l) {
      case "compositionend":
        return Wf(t);
      case "keypress":
        return t.which !== 32 ? null : (Jf = true, Kf);
      case "textInput":
        return l = t.data, l === Kf && Jf ? null : l;
      default:
        return null;
    }
  }
  function pm(l, t) {
    if (Pa) return l === "compositionend" || !mc && wf(l, t) ? (l = Gf(), xu = ic = aa = null, Pa = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _m = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function $f(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!_m[l.type] : t === "textarea";
  }
  function Ff(l, t, a, e) {
    ka ? Ia ? Ia.push(e) : Ia = [e] : ka = e, t = Mn(t, "onChange"), 0 < t.length && (a = new qu("onChange", "change", null, a, e), l.push({ event: a, listeners: t }));
  }
  var Ge = null, Xe = null;
  function Om(l) {
    H0(l, 0);
  }
  function Yu(l) {
    var t = xe(l);
    if (jf(t)) return l;
  }
  function kf(l, t) {
    if (l === "change") return t;
  }
  var If = false;
  if (qt) {
    var vc;
    if (qt) {
      var yc = "oninput" in document;
      if (!yc) {
        var Pf = document.createElement("div");
        Pf.setAttribute("oninput", "return;"), yc = typeof Pf.oninput == "function";
      }
      vc = yc;
    } else vc = false;
    If = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function ls() {
    Ge && (Ge.detachEvent("onpropertychange", ts), Xe = Ge = null);
  }
  function ts(l) {
    if (l.propertyName === "value" && Yu(Xe)) {
      var t = [];
      Ff(t, Xe, l, uc(l)), Yf(Om, t);
    }
  }
  function Mm(l, t, a) {
    l === "focusin" ? (ls(), Ge = t, Xe = a, Ge.attachEvent("onpropertychange", ts)) : l === "focusout" && ls();
  }
  function Dm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return Yu(Xe);
  }
  function Nm(l, t) {
    if (l === "click") return Yu(t);
  }
  function Um(l, t) {
    if (l === "input" || l === "change") return Yu(t);
  }
  function jm(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var nt = typeof Object.is == "function" ? Object.is : jm;
  function Qe(l, t) {
    if (nt(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return false;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Kn.call(t, u) || !nt(l[u], t[u])) return false;
    }
    return true;
  }
  function as(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function es(l, t) {
    var a = as(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= t && e >= t) return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = as(a);
    }
  }
  function us(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? us(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function ns(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = ju(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) l = t.contentWindow;
      else break;
      t = ju(l.document);
    }
    return t;
  }
  function hc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Hm = qt && "documentMode" in document && 11 >= document.documentMode, le = null, rc = null, Ze = null, gc = false;
  function cs(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gc || le == null || le !== ju(e) || (e = le, "selectionStart" in e && hc(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = { anchorNode: e.anchorNode, anchorOffset: e.anchorOffset, focusNode: e.focusNode, focusOffset: e.focusOffset }), Ze && Qe(Ze, e) || (Ze = e, e = Mn(rc, "onSelect"), 0 < e.length && (t = new qu("onSelect", "select", null, t, a), l.push({ event: t, listeners: e }), t.target = le)));
  }
  function Na(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var te = { animationend: Na("Animation", "AnimationEnd"), animationiteration: Na("Animation", "AnimationIteration"), animationstart: Na("Animation", "AnimationStart"), transitionrun: Na("Transition", "TransitionRun"), transitionstart: Na("Transition", "TransitionStart"), transitioncancel: Na("Transition", "TransitionCancel"), transitionend: Na("Transition", "TransitionEnd") }, Sc = {}, is = {};
  qt && (is = document.createElement("div").style, "AnimationEvent" in window || (delete te.animationend.animation, delete te.animationiteration.animation, delete te.animationstart.animation), "TransitionEvent" in window || delete te.transitionend.transition);
  function Ua(l) {
    if (Sc[l]) return Sc[l];
    if (!te[l]) return l;
    var t = te[l], a;
    for (a in t) if (t.hasOwnProperty(a) && a in is) return Sc[l] = t[a];
    return l;
  }
  var fs = Ua("animationend"), ss = Ua("animationiteration"), ds = Ua("animationstart"), xm = Ua("transitionrun"), Rm = Ua("transitionstart"), Cm = Ua("transitioncancel"), os = Ua("transitionend"), ms = /* @__PURE__ */ new Map(), bc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  bc.push("scrollEnd");
  function Ot(l, t) {
    ms.set(l, t), Ma(t, [l]);
  }
  var Gu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, gt = [], ae = 0, zc = 0;
  function Xu() {
    for (var l = ae, t = zc = ae = 0; t < l; ) {
      var a = gt[t];
      gt[t++] = null;
      var e = gt[t];
      gt[t++] = null;
      var u = gt[t];
      gt[t++] = null;
      var n = gt[t];
      if (gt[t++] = null, e !== null && u !== null) {
        var c = e.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), e.pending = u;
      }
      n !== 0 && vs(a, u, n);
    }
  }
  function Qu(l, t, a, e) {
    gt[ae++] = l, gt[ae++] = t, gt[ae++] = a, gt[ae++] = e, zc |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function Ec(l, t, a, e) {
    return Qu(l, t, a, e), Zu(l);
  }
  function ja(l, t) {
    return Qu(l, null, null, t), Zu(l);
  }
  function vs(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = false, n = l.return; n !== null; ) n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ut(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function Zu(l) {
    if (50 < du) throw du = 0, Ui = null, Error(o(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ee = {};
  function qm(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(l, t, a, e) {
    return new qm(l, t, a, e);
  }
  function Tc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Bt(l, t) {
    var a = l.alternate;
    return a === null ? (a = ct(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ys(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function Lu(l, t, a, e, u, n) {
    var c = 0;
    if (e = l, typeof l == "function") Tc(l) && (c = 1);
    else if (typeof l == "string") c = Qv(l, a, j.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case vt:
        return l = ct(31, a, t, u), l.elementType = vt, l.lanes = n, l;
      case il:
        return Ha(a.children, u, n, t);
      case Pl:
        c = 8, u |= 24;
        break;
      case Xl:
        return l = ct(12, a, t, u | 2), l.elementType = Xl, l.lanes = n, l;
      case mt:
        return l = ct(13, a, t, u), l.elementType = mt, l.lanes = n, l;
      case xl:
        return l = ct(19, a, t, u), l.elementType = xl, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Nl:
            c = 10;
            break l;
          case lt:
            c = 9;
            break l;
          case gl:
            c = 11;
            break l;
          case Q:
            c = 14;
            break l;
          case Rl:
            c = 16, e = null;
            break l;
        }
        c = 29, a = Error(o(130, l === null ? "null" : typeof l, "")), e = null;
    }
    return t = ct(c, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function Ha(l, t, a, e) {
    return l = ct(7, l, e, t), l.lanes = a, l;
  }
  function Ac(l, t, a) {
    return l = ct(6, l, null, t), l.lanes = a, l;
  }
  function hs(l) {
    var t = ct(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function pc(l, t, a) {
    return t = ct(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var rs = /* @__PURE__ */ new WeakMap();
  function St(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = rs.get(l);
      return a !== void 0 ? a : (t = { value: l, source: t, stack: hf(t) }, rs.set(l, t), t);
    }
    return { value: l, source: t, stack: hf(t) };
  }
  var ue = [], ne = 0, Vu = null, Le = 0, bt = [], zt = 0, ea = null, Nt = 1, Ut = "";
  function Yt(l, t) {
    ue[ne++] = Le, ue[ne++] = Vu, Vu = l, Le = t;
  }
  function gs(l, t, a) {
    bt[zt++] = Nt, bt[zt++] = Ut, bt[zt++] = ea, ea = l;
    var e = Nt;
    l = Ut;
    var u = 32 - ut(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - ut(t) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (e & (1 << c) - 1).toString(32), e >>= c, u -= c, Nt = 1 << 32 - ut(t) + u | a << u | e, Ut = n + l;
    } else Nt = 1 << n | a << u | e, Ut = l;
  }
  function _c(l) {
    l.return !== null && (Yt(l, 1), gs(l, 1, 0));
  }
  function Oc(l) {
    for (; l === Vu; ) Vu = ue[--ne], ue[ne] = null, Le = ue[--ne], ue[ne] = null;
    for (; l === ea; ) ea = bt[--zt], bt[zt] = null, Ut = bt[--zt], bt[zt] = null, Nt = bt[--zt], bt[zt] = null;
  }
  function Ss(l, t) {
    bt[zt++] = Nt, bt[zt++] = Ut, bt[zt++] = ea, Nt = t.id, Ut = t.overflow, ea = l;
  }
  var ql = null, hl = null, I = false, ua = null, Et = false, Mc = Error(o(519));
  function na(l) {
    var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Ve(St(t, l)), Mc;
  }
  function bs(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[Cl] = l, t[Kl] = e, a) {
      case "dialog":
        $("cancel", t), $("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mu.length; a++) $(mu[a], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        $("error", t), $("load", t);
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        $("invalid", t), Hf(t, e.value, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name, true);
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        $("invalid", t), Rf(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === true || q0(t.textContent, a) ? (e.popover != null && ($("beforetoggle", t), $("toggle", t)), e.onScroll != null && $("scroll", t), e.onScrollEnd != null && $("scrollend", t), e.onClick != null && (t.onclick = Ct), t = true) : t = false, t || na(l, true);
  }
  function zs(l) {
    for (ql = l.return; ql; ) switch (ql.tag) {
      case 5:
      case 31:
      case 13:
        Et = false;
        return;
      case 27:
      case 3:
        Et = true;
        return;
      default:
        ql = ql.return;
    }
  }
  function ce(l) {
    if (l !== ql) return false;
    if (!I) return zs(l), I = true, false;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Ki(l.type, l.memoizedProps)), a = !a), a && hl && na(l), zs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      hl = K0(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      hl = K0(l);
    } else t === 27 ? (t = hl, ba(l.type) ? (l = Fi, Fi = null, hl = l) : hl = t) : hl = ql ? At(l.stateNode.nextSibling) : null;
    return true;
  }
  function xa() {
    hl = ql = null, I = false;
  }
  function Dc() {
    var l = ua;
    return l !== null && (Fl === null ? Fl = l : Fl.push.apply(Fl, l), ua = null), l;
  }
  function Ve(l) {
    ua === null ? ua = [l] : ua.push(l);
  }
  var Nc = f(null), Ra = null, Gt = null;
  function ca(l, t, a) {
    O(Nc, t._currentValue), t._currentValue = a;
  }
  function Xt(l) {
    l._currentValue = Nc.current, g(Nc);
  }
  function Uc(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function jc(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var s = 0; s < t.length; s++) if (i.context === t[s]) {
            n.lanes |= a, i = n.alternate, i !== null && (i.lanes |= a), Uc(n.return, a, l), e || (c = null);
            break l;
          }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(o(341));
        c.lanes |= a, n = c.alternate, n !== null && (n.lanes |= a), Uc(c, a, l), c = null;
      } else c = u.child;
      if (c !== null) c.return = u;
      else for (c = u; c !== null; ) {
        if (c === l) {
          c = null;
          break;
        }
        if (u = c.sibling, u !== null) {
          u.return = c.return, c = u;
          break;
        }
        c = c.return;
      }
      u = c;
    }
  }
  function ie(l, t, a, e) {
    l = null;
    for (var u = t, n = false; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = true;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(o(387));
        if (c = c.memoizedProps, c !== null) {
          var i = u.type;
          nt(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (u === nl.current) {
        if (c = u.alternate, c === null) throw Error(o(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(gu) : l = [gu]);
      }
      u = u.return;
    }
    l !== null && jc(t, l, a, e), t.flags |= 262144;
  }
  function Ku(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Ca(l) {
    Ra = l, Gt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Bl(l) {
    return Es(Ra, l);
  }
  function Ju(l, t) {
    return Ra === null && Ca(l), Es(l, t);
  }
  function Es(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Gt === null) {
      if (l === null) throw Error(o(308));
      Gt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Gt = Gt.next = t;
    return a;
  }
  var Bm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(a, e) {
      l.push(e);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(a) {
        return a();
      });
    };
  }, Ym = T.unstable_scheduleCallback, Gm = T.unstable_NormalPriority, _l = { $$typeof: Nl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Hc() {
    return { controller: new Bm(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Ke(l) {
    l.refCount--, l.refCount === 0 && Ym(Gm, function() {
      l.controller.abort();
    });
  }
  var Je = null, xc = 0, fe = 0, se = null;
  function Xm(l, t) {
    if (Je === null) {
      var a = Je = [];
      xc = 0, fe = qi(), se = { status: "pending", value: void 0, then: function(e) {
        a.push(e);
      } };
    }
    return xc++, t.then(Ts, Ts), t;
  }
  function Ts() {
    if (--xc === 0 && Je !== null) {
      se !== null && (se.status = "fulfilled");
      var l = Je;
      Je = null, fe = 0, se = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Qm(l, t) {
    var a = [], e = { status: "pending", value: null, reason: null, then: function(u) {
      a.push(u);
    } };
    return l.then(function() {
      e.status = "fulfilled", e.value = t;
      for (var u = 0; u < a.length; u++) (0, a[u])(t);
    }, function(u) {
      for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++) (0, a[u])(void 0);
    }), e;
  }
  var As = z.S;
  z.S = function(l, t) {
    c0 = at(), typeof t == "object" && t !== null && typeof t.then == "function" && Xm(l, t), As !== null && As(l, t);
  };
  var qa = f(null);
  function Rc() {
    var l = qa.current;
    return l !== null ? l : vl.pooledCache;
  }
  function wu(l, t) {
    t === null ? O(qa, qa.current) : O(qa, t.pool);
  }
  function ps() {
    var l = Rc();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var de = Error(o(460)), Cc = Error(o(474)), Wu = Error(o(542)), $u = { then: function() {
  } };
  function _s(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Os(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Ct, Ct), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ds(l), l;
      default:
        if (typeof t.status == "string") t.then(Ct, Ct);
        else {
          if (l = vl, l !== null && 100 < l.shellSuspendCounter) throw Error(o(482));
          l = t, l.status = "pending", l.then(function(e) {
            if (t.status === "pending") {
              var u = t;
              u.status = "fulfilled", u.value = e;
            }
          }, function(e) {
            if (t.status === "pending") {
              var u = t;
              u.status = "rejected", u.reason = e;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ds(l), l;
        }
        throw Ya = t, de;
    }
  }
  function Ba(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ya = a, de) : a;
    }
  }
  var Ya = null;
  function Ms() {
    if (Ya === null) throw Error(o(459));
    var l = Ya;
    return Ya = null, l;
  }
  function Ds(l) {
    if (l === de || l === Wu) throw Error(o(483));
  }
  var oe = null, we = 0;
  function Fu(l) {
    var t = we;
    return we += 1, oe === null && (oe = []), Os(oe, l, t);
  }
  function We(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function ku(l, t) {
    throw t.$$typeof === cl ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Ns(l) {
    function t(m, d) {
      if (l) {
        var v = m.deletions;
        v === null ? (m.deletions = [d], m.flags |= 16) : v.push(d);
      }
    }
    function a(m, d) {
      if (!l) return null;
      for (; d !== null; ) t(m, d), d = d.sibling;
      return null;
    }
    function e(m) {
      for (var d = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? d.set(m.key, m) : d.set(m.index, m), m = m.sibling;
      return d;
    }
    function u(m, d) {
      return m = Bt(m, d), m.index = 0, m.sibling = null, m;
    }
    function n(m, d, v) {
      return m.index = v, l ? (v = m.alternate, v !== null ? (v = v.index, v < d ? (m.flags |= 67108866, d) : v) : (m.flags |= 67108866, d)) : (m.flags |= 1048576, d);
    }
    function c(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function i(m, d, v, E) {
      return d === null || d.tag !== 6 ? (d = Ac(v, m.mode, E), d.return = m, d) : (d = u(d, v), d.return = m, d);
    }
    function s(m, d, v, E) {
      var q = v.type;
      return q === il ? b(m, d, v.props.children, E, v.key) : d !== null && (d.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Rl && Ba(q) === d.type) ? (d = u(d, v.props), We(d, v), d.return = m, d) : (d = Lu(v.type, v.key, v.props, null, m.mode, E), We(d, v), d.return = m, d);
    }
    function y(m, d, v, E) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = pc(v, m.mode, E), d.return = m, d) : (d = u(d, v.children || []), d.return = m, d);
    }
    function b(m, d, v, E, q) {
      return d === null || d.tag !== 7 ? (d = Ha(v, m.mode, E, q), d.return = m, d) : (d = u(d, v), d.return = m, d);
    }
    function p(m, d, v) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = Ac("" + d, m.mode, v), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case J:
            return v = Lu(d.type, d.key, d.props, null, m.mode, v), We(v, d), v.return = m, v;
          case bl:
            return d = pc(d, m.mode, v), d.return = m, d;
          case Rl:
            return d = Ba(d), p(m, d, v);
        }
        if (tt(d) || Ql(d)) return d = Ha(d, m.mode, v, null), d.return = m, d;
        if (typeof d.then == "function") return p(m, Fu(d), v);
        if (d.$$typeof === Nl) return p(m, Ju(m, d), v);
        ku(m, d);
      }
      return null;
    }
    function h(m, d, v, E) {
      var q = d !== null ? d.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return q !== null ? null : i(m, d, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case J:
            return v.key === q ? s(m, d, v, E) : null;
          case bl:
            return v.key === q ? y(m, d, v, E) : null;
          case Rl:
            return v = Ba(v), h(m, d, v, E);
        }
        if (tt(v) || Ql(v)) return q !== null ? null : b(m, d, v, E, null);
        if (typeof v.then == "function") return h(m, d, Fu(v), E);
        if (v.$$typeof === Nl) return h(m, d, Ju(m, v), E);
        ku(m, v);
      }
      return null;
    }
    function r(m, d, v, E, q) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return m = m.get(v) || null, i(d, m, "" + E, q);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case J:
            return m = m.get(E.key === null ? v : E.key) || null, s(d, m, E, q);
          case bl:
            return m = m.get(E.key === null ? v : E.key) || null, y(d, m, E, q);
          case Rl:
            return E = Ba(E), r(m, d, v, E, q);
        }
        if (tt(E) || Ql(E)) return m = m.get(v) || null, b(d, m, E, q, null);
        if (typeof E.then == "function") return r(m, d, v, Fu(E), q);
        if (E.$$typeof === Nl) return r(m, d, v, Ju(d, E), q);
        ku(d, E);
      }
      return null;
    }
    function D(m, d, v, E) {
      for (var q = null, ll = null, x = d, V = d = 0, k = null; x !== null && V < v.length; V++) {
        x.index > V ? (k = x, x = null) : k = x.sibling;
        var tl = h(m, x, v[V], E);
        if (tl === null) {
          x === null && (x = k);
          break;
        }
        l && x && tl.alternate === null && t(m, x), d = n(tl, d, V), ll === null ? q = tl : ll.sibling = tl, ll = tl, x = k;
      }
      if (V === v.length) return a(m, x), I && Yt(m, V), q;
      if (x === null) {
        for (; V < v.length; V++) x = p(m, v[V], E), x !== null && (d = n(x, d, V), ll === null ? q = x : ll.sibling = x, ll = x);
        return I && Yt(m, V), q;
      }
      for (x = e(x); V < v.length; V++) k = r(x, m, V, v[V], E), k !== null && (l && k.alternate !== null && x.delete(k.key === null ? V : k.key), d = n(k, d, V), ll === null ? q = k : ll.sibling = k, ll = k);
      return l && x.forEach(function(pa) {
        return t(m, pa);
      }), I && Yt(m, V), q;
    }
    function B(m, d, v, E) {
      if (v == null) throw Error(o(151));
      for (var q = null, ll = null, x = d, V = d = 0, k = null, tl = v.next(); x !== null && !tl.done; V++, tl = v.next()) {
        x.index > V ? (k = x, x = null) : k = x.sibling;
        var pa = h(m, x, tl.value, E);
        if (pa === null) {
          x === null && (x = k);
          break;
        }
        l && x && pa.alternate === null && t(m, x), d = n(pa, d, V), ll === null ? q = pa : ll.sibling = pa, ll = pa, x = k;
      }
      if (tl.done) return a(m, x), I && Yt(m, V), q;
      if (x === null) {
        for (; !tl.done; V++, tl = v.next()) tl = p(m, tl.value, E), tl !== null && (d = n(tl, d, V), ll === null ? q = tl : ll.sibling = tl, ll = tl);
        return I && Yt(m, V), q;
      }
      for (x = e(x); !tl.done; V++, tl = v.next()) tl = r(x, m, V, tl.value, E), tl !== null && (l && tl.alternate !== null && x.delete(tl.key === null ? V : tl.key), d = n(tl, d, V), ll === null ? q = tl : ll.sibling = tl, ll = tl);
      return l && x.forEach(function(Iv) {
        return t(m, Iv);
      }), I && Yt(m, V), q;
    }
    function ml(m, d, v, E) {
      if (typeof v == "object" && v !== null && v.type === il && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case J:
            l: {
              for (var q = v.key; d !== null; ) {
                if (d.key === q) {
                  if (q = v.type, q === il) {
                    if (d.tag === 7) {
                      a(m, d.sibling), E = u(d, v.props.children), E.return = m, m = E;
                      break l;
                    }
                  } else if (d.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Rl && Ba(q) === d.type) {
                    a(m, d.sibling), E = u(d, v.props), We(E, v), E.return = m, m = E;
                    break l;
                  }
                  a(m, d);
                  break;
                } else t(m, d);
                d = d.sibling;
              }
              v.type === il ? (E = Ha(v.props.children, m.mode, E, v.key), E.return = m, m = E) : (E = Lu(v.type, v.key, v.props, null, m.mode, E), We(E, v), E.return = m, m = E);
            }
            return c(m);
          case bl:
            l: {
              for (q = v.key; d !== null; ) {
                if (d.key === q) if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                  a(m, d.sibling), E = u(d, v.children || []), E.return = m, m = E;
                  break l;
                } else {
                  a(m, d);
                  break;
                }
                else t(m, d);
                d = d.sibling;
              }
              E = pc(v, m.mode, E), E.return = m, m = E;
            }
            return c(m);
          case Rl:
            return v = Ba(v), ml(m, d, v, E);
        }
        if (tt(v)) return D(m, d, v, E);
        if (Ql(v)) {
          if (q = Ql(v), typeof q != "function") throw Error(o(150));
          return v = q.call(v), B(m, d, v, E);
        }
        if (typeof v.then == "function") return ml(m, d, Fu(v), E);
        if (v.$$typeof === Nl) return ml(m, d, Ju(m, v), E);
        ku(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, d !== null && d.tag === 6 ? (a(m, d.sibling), E = u(d, v), E.return = m, m = E) : (a(m, d), E = Ac(v, m.mode, E), E.return = m, m = E), c(m)) : a(m, d);
    }
    return function(m, d, v, E) {
      try {
        we = 0;
        var q = ml(m, d, v, E);
        return oe = null, q;
      } catch (x) {
        if (x === de || x === Wu) throw x;
        var ll = ct(29, x, null, m.mode);
        return ll.lanes = E, ll.return = m, ll;
      }
    };
  }
  var Ga = Ns(true), Us = Ns(false), ia = false;
  function qc(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Bc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function fa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function sa(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (al & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = Zu(l), vs(l, null, a), t;
    }
    return Qu(l, e, t, a), Zu(l);
  }
  function $e(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Ef(l, a);
    }
  }
  function Yc(l, t) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          n === null ? u = n = c : n = n.next = c, a = a.next;
        } while (a !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      a = { baseState: e.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: e.shared, callbacks: e.callbacks }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Gc = false;
  function Fe() {
    if (Gc) {
      var l = se;
      if (l !== null) throw l;
    }
  }
  function ke(l, t, a, e) {
    Gc = false;
    var u = l.updateQueue;
    ia = false;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var s = i, y = s.next;
      s.next = null, c === null ? n = y : c.next = y, c = s;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, i = b.lastBaseUpdate, i !== c && (i === null ? b.firstBaseUpdate = y : i.next = y, b.lastBaseUpdate = s));
    }
    if (n !== null) {
      var p = u.baseState;
      c = 0, b = y = s = null, i = n;
      do {
        var h = i.lane & -536870913, r = h !== i.lane;
        if (r ? (F & h) === h : (e & h) === h) {
          h !== 0 && h === fe && (Gc = true), b !== null && (b = b.next = { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null });
          l: {
            var D = l, B = i;
            h = t;
            var ml = a;
            switch (B.tag) {
              case 1:
                if (D = B.payload, typeof D == "function") {
                  p = D.call(ml, p, h);
                  break l;
                }
                p = D;
                break l;
              case 3:
                D.flags = D.flags & -65537 | 128;
              case 0:
                if (D = B.payload, h = typeof D == "function" ? D.call(ml, p, h) : D, h == null) break l;
                p = C({}, p, h);
                break l;
              case 2:
                ia = true;
            }
          }
          h = i.callback, h !== null && (l.flags |= 64, r && (l.flags |= 8192), r = u.callbacks, r === null ? u.callbacks = [h] : r.push(h));
        } else r = { lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, b === null ? (y = b = r, s = p) : b = b.next = r, c |= h;
        if (i = i.next, i === null) {
          if (i = u.shared.pending, i === null) break;
          r = i, i = r.next, r.next = null, u.lastBaseUpdate = r, u.shared.pending = null;
        }
      } while (true);
      b === null && (s = p), u.baseState = s, u.firstBaseUpdate = y, u.lastBaseUpdate = b, n === null && (u.shared.lanes = 0), ya |= c, l.lanes = c, l.memoizedState = p;
    }
  }
  function js(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function Hs(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) js(a[l], t);
  }
  var me = f(null), Iu = f(0);
  function xs(l, t) {
    l = $t, O(Iu, l), O(me, t), $t = l | t.baseLanes;
  }
  function Xc() {
    O(Iu, $t), O(me, me.current);
  }
  function Qc() {
    $t = Iu.current, g(me), g(Iu);
  }
  var it = f(null), Tt = null;
  function da(l) {
    var t = l.alternate;
    O(Al, Al.current & 1), O(it, l), Tt === null && (t === null || me.current !== null || t.memoizedState !== null) && (Tt = l);
  }
  function Zc(l) {
    O(Al, Al.current), O(it, l), Tt === null && (Tt = l);
  }
  function Rs(l) {
    l.tag === 22 ? (O(Al, Al.current), O(it, l), Tt === null && (Tt = l)) : oa();
  }
  function oa() {
    O(Al, Al.current), O(it, it.current);
  }
  function ft(l) {
    g(it), Tt === l && (Tt = null), g(Al);
  }
  var Al = f(0);
  function Pu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Wi(a) || $i(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Qt = 0, L = null, dl = null, Ol = null, ln = false, ve = false, Xa = false, tn = 0, Ie = 0, ye = null, Zm = 0;
  function zl() {
    throw Error(o(321));
  }
  function Lc(l, t) {
    if (t === null) return false;
    for (var a = 0; a < t.length && a < l.length; a++) if (!nt(l[a], t[a])) return false;
    return true;
  }
  function Vc(l, t, a, e, u, n) {
    return Qt = n, L = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = l === null || l.memoizedState === null ? gd : ni, Xa = false, n = a(e, u), Xa = false, ve && (n = qs(t, a, e, u)), Cs(l), n;
  }
  function Cs(l) {
    z.H = tu;
    var t = dl !== null && dl.next !== null;
    if (Qt = 0, Ol = dl = L = null, ln = false, Ie = 0, ye = null, t) throw Error(o(300));
    l === null || Ml || (l = l.dependencies, l !== null && Ku(l) && (Ml = true));
  }
  function qs(l, t, a, e) {
    L = l;
    var u = 0;
    do {
      if (ve && (ye = null), Ie = 0, ve = false, 25 <= u) throw Error(o(301));
      if (u += 1, Ol = dl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = Sd, n = t(a, e);
    } while (ve);
    return n;
  }
  function Lm() {
    var l = z.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Pe(t) : t, l = l.useState()[0], (dl !== null ? dl.memoizedState : null) !== l && (L.flags |= 1024), t;
  }
  function Kc() {
    var l = tn !== 0;
    return tn = 0, l;
  }
  function Jc(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function wc(l) {
    if (ln) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      ln = false;
    }
    Qt = 0, Ol = dl = L = null, ve = false, Ie = tn = 0, ye = null;
  }
  function Vl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ol === null ? L.memoizedState = Ol = l : Ol = Ol.next = l, Ol;
  }
  function pl() {
    if (dl === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = dl.next;
    var t = Ol === null ? L.memoizedState : Ol.next;
    if (t !== null) Ol = t, dl = l;
    else {
      if (l === null) throw L.alternate === null ? Error(o(467)) : Error(o(310));
      dl = l, l = { memoizedState: dl.memoizedState, baseState: dl.baseState, baseQueue: dl.baseQueue, queue: dl.queue, next: null }, Ol === null ? L.memoizedState = Ol = l : Ol = Ol.next = l;
    }
    return Ol;
  }
  function an() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pe(l) {
    var t = Ie;
    return Ie += 1, ye === null && (ye = []), l = Os(ye, l, t), t = L, (Ol === null ? t.memoizedState : Ol.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? gd : ni), l;
  }
  function en(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Pe(l);
      if (l.$$typeof === Nl) return Bl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Wc(l) {
    var t = null, a = L.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = L.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = { data: e.data.map(function(u) {
        return u.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = an(), L.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Pt;
    return t.index++, a;
  }
  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = pl();
    return $c(t, dl, l);
  }
  function $c(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      t.baseQueue = u = n, e.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var i = c = null, s = null, y = t, b = false;
      do {
        var p = y.lane & -536870913;
        if (p !== y.lane ? (F & p) === p : (Qt & p) === p) {
          var h = y.revertLane;
          if (h === 0) s !== null && (s = s.next = { lane: 0, revertLane: 0, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), p === fe && (b = true);
          else if ((Qt & h) === h) {
            y = y.next, h === fe && (b = true);
            continue;
          } else p = { lane: 0, revertLane: y.revertLane, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, s === null ? (i = s = p, c = n) : s = s.next = p, L.lanes |= h, ya |= h;
          p = y.action, Xa && a(n, p), n = y.hasEagerState ? y.eagerState : a(n, p);
        } else h = { lane: p, revertLane: y.revertLane, gesture: y.gesture, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, s === null ? (i = s = h, c = n) : s = s.next = h, L.lanes |= p, ya |= p;
        y = y.next;
      } while (y !== null && y !== t);
      if (s === null ? c = n : s.next = i, !nt(n, l.memoizedState) && (Ml = true, b && (a = se, a !== null))) throw a;
      l.memoizedState = n, l.baseState = c, l.baseQueue = s, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Fc(l) {
    var t = pl(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var c = u = u.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== u);
      nt(n, t.memoizedState) || (Ml = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function Bs(l, t, a) {
    var e = L, u = pl(), n = I;
    if (n) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var c = !nt((dl || u).memoizedState, a);
    if (c && (u.memoizedState = a, Ml = true), u = u.queue, Pc(Xs.bind(null, e, u, l), [l]), u.getSnapshot !== t || c || Ol !== null && Ol.memoizedState.tag & 1) {
      if (e.flags |= 2048, he(9, { destroy: void 0 }, Gs.bind(null, e, u, a, t), null), vl === null) throw Error(o(349));
      n || (Qt & 127) !== 0 || Ys(e, t, a);
    }
    return a;
  }
  function Ys(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = L.updateQueue, t === null ? (t = an(), L.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Gs(l, t, a, e) {
    t.value = a, t.getSnapshot = e, Qs(t) && Zs(l);
  }
  function Xs(l, t, a) {
    return a(function() {
      Qs(t) && Zs(l);
    });
  }
  function Qs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !nt(l, a);
    } catch {
      return true;
    }
  }
  function Zs(l) {
    var t = ja(l, 2);
    t !== null && kl(t, l, 2);
  }
  function kc(l) {
    var t = Vl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Xa) {
        la(true);
        try {
          a();
        } finally {
          la(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: l }, t;
  }
  function Ls(l, t, a, e) {
    return l.baseState = a, $c(l, dl, typeof e == "function" ? e : Zt);
  }
  function Vm(l, t, a, e, u) {
    if (fn(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = { payload: u, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
        n.listeners.push(c);
      } };
      z.T !== null ? a(true) : n.isTransition = false, e(n), a = t.pending, a === null ? (n.next = t.pending = n, Vs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Vs(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = z.T, c = {};
      z.T = c;
      try {
        var i = a(u, e), s = z.S;
        s !== null && s(c, i), Ks(l, t, i);
      } catch (y) {
        Ic(l, t, y);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), z.T = n;
      }
    } else try {
      n = a(u, e), Ks(l, t, n);
    } catch (y) {
      Ic(l, t, y);
    }
  }
  function Ks(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(e) {
      Js(l, t, e);
    }, function(e) {
      return Ic(l, t, e);
    }) : Js(l, t, a);
  }
  function Js(l, t, a) {
    t.status = "fulfilled", t.value = a, ws(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Vs(l, a)));
  }
  function Ic(l, t, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = a, ws(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function ws(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ws(l, t) {
    return t;
  }
  function $s(l, t) {
    if (I) {
      var a = vl.formState;
      if (a !== null) {
        l: {
          var e = L;
          if (I) {
            if (hl) {
              t: {
                for (var u = hl, n = Et; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = At(u.nextSibling), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                hl = At(u.nextSibling), e = u.data === "F!";
                break l;
              }
            }
            na(e);
          }
          e = false;
        }
        e && (t = a[0]);
      }
    }
    return a = Vl(), a.memoizedState = a.baseState = t, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ws, lastRenderedState: t }, a.queue = e, a = yd.bind(null, L, e), e.dispatch = a, e = kc(false), n = ui.bind(null, L, false, e.queue), e = Vl(), u = { state: t, dispatch: null, action: l, pending: null }, e.queue = u, a = Vm.bind(null, L, u, n, a), u.dispatch = a, e.memoizedState = l, [t, a, false];
  }
  function Fs(l) {
    var t = pl();
    return ks(t, dl, l);
  }
  function ks(l, t, a) {
    if (t = $c(l, t, Ws)[0], l = un(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var e = Pe(t);
    } catch (c) {
      throw c === de ? Wu : c;
    }
    else e = t;
    t = pl();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (L.flags |= 2048, he(9, { destroy: void 0 }, Km.bind(null, u, a), null)), [e, n, l];
  }
  function Km(l, t) {
    l.action = t;
  }
  function Is(l) {
    var t = pl(), a = dl;
    if (a !== null) return ks(t, a, l);
    pl(), t = t.memoizedState, a = pl();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, false];
  }
  function he(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = L.updateQueue, t === null && (t = an(), L.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function Ps() {
    return pl().memoizedState;
  }
  function nn(l, t, a, e) {
    var u = Vl();
    L.flags |= l, u.memoizedState = he(1 | t, { destroy: void 0 }, a, e === void 0 ? null : e);
  }
  function cn(l, t, a, e) {
    var u = pl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    dl !== null && e !== null && Lc(e, dl.memoizedState.deps) ? u.memoizedState = he(t, n, a, e) : (L.flags |= l, u.memoizedState = he(1 | t, n, a, e));
  }
  function ld(l, t) {
    nn(8390656, 8, l, t);
  }
  function Pc(l, t) {
    cn(2048, 8, l, t);
  }
  function Jm(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null) t = an(), L.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function td(l) {
    var t = pl().memoizedState;
    return Jm({ ref: t, nextImpl: l }), function() {
      if ((al & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ad(l, t) {
    return cn(4, 2, l, t);
  }
  function ed(l, t) {
    return cn(4, 4, l, t);
  }
  function ud(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function nd(l, t, a) {
    a = a != null ? a.concat([l]) : null, cn(4, 4, ud.bind(null, t, l), a);
  }
  function li() {
  }
  function cd(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Lc(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function id(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Lc(t, e[1])) return e[0];
    if (e = l(), Xa) {
      la(true);
      try {
        l();
      } finally {
        la(false);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function ti(l, t, a) {
    return a === void 0 || (Qt & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = f0(), L.lanes |= l, ya |= l, a);
  }
  function fd(l, t, a, e) {
    return nt(a, t) ? a : me.current !== null ? (l = ti(l, a, e), nt(l, t) || (Ml = true), l) : (Qt & 42) === 0 || (Qt & 1073741824) !== 0 && (F & 261930) === 0 ? (Ml = true, l.memoizedState = a) : (l = f0(), L.lanes |= l, ya |= l, t);
  }
  function sd(l, t, a, e, u) {
    var n = M.p;
    M.p = n !== 0 && 8 > n ? n : 8;
    var c = z.T, i = {};
    z.T = i, ui(l, false, t, a);
    try {
      var s = u(), y = z.S;
      if (y !== null && y(i, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var b = Qm(s, e);
        lu(l, t, b, ot(l));
      } else lu(l, t, e, ot(l));
    } catch (p) {
      lu(l, t, { then: function() {
      }, status: "rejected", reason: p }, ot());
    } finally {
      M.p = n, c !== null && i.types !== null && (c.types = i.types), z.T = c;
    }
  }
  function wm() {
  }
  function ai(l, t, a, e) {
    if (l.tag !== 5) throw Error(o(476));
    var u = dd(l).queue;
    sd(l, u, t, G, a === null ? wm : function() {
      return od(l), a(e);
    });
  }
  function dd(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: G, baseState: G, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: G }, next: null };
    var a = {};
    return t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: a }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function od(l) {
    var t = dd(l);
    t.next === null && (t = l.alternate.memoizedState), lu(l, t.next.queue, {}, ot());
  }
  function ei() {
    return Bl(gu);
  }
  function md() {
    return pl().memoizedState;
  }
  function vd() {
    return pl().memoizedState;
  }
  function Wm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ot();
          l = fa(a);
          var e = sa(t, l, a);
          e !== null && (kl(e, t, a), $e(e, t, a)), t = { cache: Hc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function $m(l, t, a) {
    var e = ot();
    a = { lane: e, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, fn(l) ? hd(t, a) : (a = Ec(l, t, a, e), a !== null && (kl(a, l, e), rd(a, t, e)));
  }
  function yd(l, t, a) {
    var e = ot();
    lu(l, t, a, e);
  }
  function lu(l, t, a, e) {
    var u = { lane: e, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null };
    if (fn(l)) hd(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var c = t.lastRenderedState, i = n(c, a);
        if (u.hasEagerState = true, u.eagerState = i, nt(i, c)) return Qu(l, t, u, 0), vl === null && Xu(), false;
      } catch {
      }
      if (a = Ec(l, t, u, e), a !== null) return kl(a, l, e), rd(a, t, e), true;
    }
    return false;
  }
  function ui(l, t, a, e) {
    if (e = { lane: 2, revertLane: qi(), gesture: null, action: e, hasEagerState: false, eagerState: null, next: null }, fn(l)) {
      if (t) throw Error(o(479));
    } else t = Ec(l, a, e, 2), t !== null && kl(t, l, 2);
  }
  function fn(l) {
    var t = l.alternate;
    return l === L || t !== null && t === L;
  }
  function hd(l, t) {
    ve = ln = true;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function rd(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Ef(l, a);
    }
  }
  var tu = { readContext: Bl, use: en, useCallback: zl, useContext: zl, useEffect: zl, useImperativeHandle: zl, useLayoutEffect: zl, useInsertionEffect: zl, useMemo: zl, useReducer: zl, useRef: zl, useState: zl, useDebugValue: zl, useDeferredValue: zl, useTransition: zl, useSyncExternalStore: zl, useId: zl, useHostTransitionStatus: zl, useFormState: zl, useActionState: zl, useOptimistic: zl, useMemoCache: zl, useCacheRefresh: zl };
  tu.useEffectEvent = zl;
  var gd = { readContext: Bl, use: en, useCallback: function(l, t) {
    return Vl().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: Bl, useEffect: ld, useImperativeHandle: function(l, t, a) {
    a = a != null ? a.concat([l]) : null, nn(4194308, 4, ud.bind(null, t, l), a);
  }, useLayoutEffect: function(l, t) {
    return nn(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    nn(4, 2, l, t);
  }, useMemo: function(l, t) {
    var a = Vl();
    t = t === void 0 ? null : t;
    var e = l();
    if (Xa) {
      la(true);
      try {
        l();
      } finally {
        la(false);
      }
    }
    return a.memoizedState = [e, t], e;
  }, useReducer: function(l, t, a) {
    var e = Vl();
    if (a !== void 0) {
      var u = a(t);
      if (Xa) {
        la(true);
        try {
          a(t);
        } finally {
          la(false);
        }
      }
    } else u = t;
    return e.memoizedState = e.baseState = u, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }, e.queue = l, l = l.dispatch = $m.bind(null, L, l), [e.memoizedState, l];
  }, useRef: function(l) {
    var t = Vl();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = kc(l);
    var t = l.queue, a = yd.bind(null, L, t);
    return t.dispatch = a, [l.memoizedState, a];
  }, useDebugValue: li, useDeferredValue: function(l, t) {
    var a = Vl();
    return ti(a, l, t);
  }, useTransition: function() {
    var l = kc(false);
    return l = sd.bind(null, L, l.queue, true, false), Vl().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, a) {
    var e = L, u = Vl();
    if (I) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else {
      if (a = t(), vl === null) throw Error(o(349));
      (F & 127) !== 0 || Ys(e, t, a);
    }
    u.memoizedState = a;
    var n = { value: a, getSnapshot: t };
    return u.queue = n, ld(Xs.bind(null, e, n, l), [l]), e.flags |= 2048, he(9, { destroy: void 0 }, Gs.bind(null, e, n, a, t), null), a;
  }, useId: function() {
    var l = Vl(), t = vl.identifierPrefix;
    if (I) {
      var a = Ut, e = Nt;
      a = (e & ~(1 << 32 - ut(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = tn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
    } else a = Zm++, t = "_" + t + "r_" + a.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: ei, useFormState: $s, useActionState: $s, useOptimistic: function(l) {
    var t = Vl();
    t.memoizedState = t.baseState = l;
    var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = a, t = ui.bind(null, L, true, a), a.dispatch = t, [l, t];
  }, useMemoCache: Wc, useCacheRefresh: function() {
    return Vl().memoizedState = Wm.bind(null, L);
  }, useEffectEvent: function(l) {
    var t = Vl(), a = { impl: l };
    return t.memoizedState = a, function() {
      if ((al & 2) !== 0) throw Error(o(440));
      return a.impl.apply(void 0, arguments);
    };
  } }, ni = { readContext: Bl, use: en, useCallback: cd, useContext: Bl, useEffect: Pc, useImperativeHandle: nd, useInsertionEffect: ad, useLayoutEffect: ed, useMemo: id, useReducer: un, useRef: Ps, useState: function() {
    return un(Zt);
  }, useDebugValue: li, useDeferredValue: function(l, t) {
    var a = pl();
    return fd(a, dl.memoizedState, l, t);
  }, useTransition: function() {
    var l = un(Zt)[0], t = pl().memoizedState;
    return [typeof l == "boolean" ? l : Pe(l), t];
  }, useSyncExternalStore: Bs, useId: md, useHostTransitionStatus: ei, useFormState: Fs, useActionState: Fs, useOptimistic: function(l, t) {
    var a = pl();
    return Ls(a, dl, l, t);
  }, useMemoCache: Wc, useCacheRefresh: vd };
  ni.useEffectEvent = td;
  var Sd = { readContext: Bl, use: en, useCallback: cd, useContext: Bl, useEffect: Pc, useImperativeHandle: nd, useInsertionEffect: ad, useLayoutEffect: ed, useMemo: id, useReducer: Fc, useRef: Ps, useState: function() {
    return Fc(Zt);
  }, useDebugValue: li, useDeferredValue: function(l, t) {
    var a = pl();
    return dl === null ? ti(a, l, t) : fd(a, dl.memoizedState, l, t);
  }, useTransition: function() {
    var l = Fc(Zt)[0], t = pl().memoizedState;
    return [typeof l == "boolean" ? l : Pe(l), t];
  }, useSyncExternalStore: Bs, useId: md, useHostTransitionStatus: ei, useFormState: Is, useActionState: Is, useOptimistic: function(l, t) {
    var a = pl();
    return dl !== null ? Ls(a, dl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
  }, useMemoCache: Wc, useCacheRefresh: vd };
  Sd.useEffectEvent = td;
  function ci(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : C({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var ii = { enqueueSetState: function(l, t, a) {
    l = l._reactInternals;
    var e = ot(), u = fa(e);
    u.payload = t, a != null && (u.callback = a), t = sa(l, u, e), t !== null && (kl(t, l, e), $e(t, l, e));
  }, enqueueReplaceState: function(l, t, a) {
    l = l._reactInternals;
    var e = ot(), u = fa(e);
    u.tag = 1, u.payload = t, a != null && (u.callback = a), t = sa(l, u, e), t !== null && (kl(t, l, e), $e(t, l, e));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var a = ot(), e = fa(a);
    e.tag = 2, t != null && (e.callback = t), t = sa(l, e, a), t !== null && (kl(t, l, a), $e(t, l, a));
  } };
  function bd(l, t, a, e, u, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Qe(a, e) || !Qe(u, n) : true;
  }
  function zd(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && ii.enqueueReplaceState(t, t.state, null);
  }
  function Qa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = C({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function Ed(l) {
    Gu(l);
  }
  function Td(l) {
    console.error(l);
  }
  function Ad(l) {
    Gu(l);
  }
  function sn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function pd(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function fi(l, t, a) {
    return a = fa(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      sn(l, t);
    }, a;
  }
  function _d(l) {
    return l = fa(l), l.tag = 3, l;
  }
  function Od(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        pd(t, a, e);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      pd(t, a, e), typeof u != "function" && (ha === null ? ha = /* @__PURE__ */ new Set([this]) : ha.add(this));
      var i = e.stack;
      this.componentDidCatch(e.value, { componentStack: i !== null ? i : "" });
    });
  }
  function Fm(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && ie(t, a, u, true), a = it.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Tt === null ? En() : a.alternate === null && El === 0 && (El = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === $u ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), xi(l, e, u)), false;
          case 22:
            return a.flags |= 65536, e === $u ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([e]) }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), xi(l, e, u)), false;
        }
        throw Error(o(435, a.tag));
      }
      return xi(l, e, u), En(), false;
    }
    if (I) return t = it.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== Mc && (l = Error(o(422), { cause: e }), Ve(St(l, a)))) : (e !== Mc && (t = Error(o(423), { cause: e }), Ve(St(t, a))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = St(e, a), u = fi(l.stateNode, e, u), Yc(l, u), El !== 4 && (El = 2)), false;
    var n = Error(o(520), { cause: e });
    if (n = St(n, a), su === null ? su = [n] : su.push(n), El !== 4 && (El = 2), t === null) return true;
    e = St(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = fi(a.stateNode, e, l), Yc(a, l), false;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ha === null || !ha.has(n)))) return a.flags |= 65536, u &= -u, a.lanes |= u, u = _d(u), Od(u, l, a, e), Yc(a, u), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var si = Error(o(461)), Ml = false;
  function Yl(l, t, a, e) {
    t.child = l === null ? Us(t, null, a, e) : Ga(t, l.child, a, e);
  }
  function Md(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e) i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return Ca(t), e = Vc(l, t, a, c, n, u), i = Kc(), l !== null && !Ml ? (Jc(l, t, u), Lt(l, t, u)) : (I && i && _c(t), t.flags |= 1, Yl(l, t, e, u), t.child);
  }
  function Dd(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Tc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Nd(l, t, n, e, u)) : (l = Lu(a.type, null, e, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gi(l, u)) {
      var c = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Qe, a(c, e) && l.ref === t.ref) return Lt(l, t, u);
    }
    return t.flags |= 1, l = Bt(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Nd(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Qe(n, e) && l.ref === t.ref) if (Ml = false, t.pendingProps = e = n, gi(l, u)) (l.flags & 131072) !== 0 && (Ml = true);
      else return t.lanes = l.lanes, Lt(l, t, u);
    }
    return di(l, t, a, e, u);
  }
  function Ud(l, t, a, e) {
    var u = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, u = 0; e !== null; ) u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, t.child = null;
        return jd(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && wu(t, n !== null ? n.cachePool : null), n !== null ? xs(t, n) : Xc(), Rs(t);
      else return e = t.lanes = 536870912, jd(l, t, n !== null ? n.baseLanes | a : a, a, e);
    } else n !== null ? (wu(t, n.cachePool), xs(t, n), oa(), t.memoizedState = null) : (l !== null && wu(t, null), Xc(), oa());
    return Yl(l, t, u, a), t.child;
  }
  function au(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function jd(l, t, a, e, u) {
    var n = Rc();
    return n = n === null ? null : { parent: _l._currentValue, pool: n }, t.memoizedState = { baseLanes: a, cachePool: n }, l !== null && wu(t, null), Xc(), Rs(t), l !== null && ie(l, t, e, true), t.childLanes = u, null;
  }
  function dn(l, t) {
    return t = mn({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Hd(l, t, a) {
    return Ga(t, l.child, null, a), l = dn(t, t.pendingProps), l.flags |= 2, ft(t), t.memoizedState = null, l;
  }
  function km(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (I) {
        if (e.mode === "hidden") return l = dn(t, e), t.lanes = 536870912, au(null, l);
        if (Zc(t), (l = hl) ? (l = V0(l, Et), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: ea !== null ? { id: Nt, overflow: Ut } : null, retryLane: 536870912, hydrationErrors: null }, a = hs(l), a.return = t, t.child = a, ql = t, hl = null)) : l = null, l === null) throw na(t);
        return t.lanes = 536870912, null;
      }
      return dn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (Zc(t), u) if (t.flags & 256) t.flags &= -257, t = Hd(l, t, a);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if (Ml || ie(l, t, a, false), u = (a & l.childLanes) !== 0, Ml || u) {
        if (e = vl, e !== null && (c = Tf(e, a), c !== 0 && c !== n.retryLane)) throw n.retryLane = c, ja(l, c), kl(e, l, c), si;
        En(), t = Hd(l, t, a);
      } else l = n.treeContext, hl = At(c.nextSibling), ql = t, I = true, ua = null, Et = false, l !== null && Ss(t, l), t = dn(t, e), t.flags |= 4096;
      return t;
    }
    return l = Bt(l.child, { mode: e.mode, children: e.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function on(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function di(l, t, a, e, u) {
    return Ca(t), a = Vc(l, t, a, e, void 0, u), e = Kc(), l !== null && !Ml ? (Jc(l, t, u), Lt(l, t, u)) : (I && e && _c(t), t.flags |= 1, Yl(l, t, a, u), t.child);
  }
  function xd(l, t, a, e, u, n) {
    return Ca(t), t.updateQueue = null, a = qs(t, e, a, u), Cs(l), e = Kc(), l !== null && !Ml ? (Jc(l, t, n), Lt(l, t, n)) : (I && e && _c(t), t.flags |= 1, Yl(l, t, a, n), t.child);
  }
  function Rd(l, t, a, e, u) {
    if (Ca(t), t.stateNode === null) {
      var n = ee, c = a.contextType;
      typeof c == "object" && c !== null && (n = Bl(c)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ii, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, qc(t), c = a.contextType, n.context = typeof c == "object" && c !== null ? Bl(c) : ee, n.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (ci(t, a, c, e), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && ii.enqueueReplaceState(n, n.state, null), ke(t, e, n, u), Fe(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = true;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, s = Qa(a, i);
      n.props = s;
      var y = n.context, b = a.contextType;
      c = ee, typeof b == "object" && b !== null && (c = Bl(b));
      var p = a.getDerivedStateFromProps;
      b = typeof p == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || y !== c) && zd(t, n, e, c), ia = false;
      var h = t.memoizedState;
      n.state = h, ke(t, e, n, u), Fe(), y = t.memoizedState, i || h !== y || ia ? (typeof p == "function" && (ci(t, a, p, e), y = t.memoizedState), (s = ia || bd(t, a, s, e, h, y, c)) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = y), n.props = e, n.state = y, n.context = c, e = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = false);
    } else {
      n = t.stateNode, Bc(l, t), c = t.memoizedProps, b = Qa(a, c), n.props = b, p = t.pendingProps, h = n.context, y = a.contextType, s = ee, typeof y == "object" && y !== null && (s = Bl(y)), i = a.getDerivedStateFromProps, (y = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== p || h !== s) && zd(t, n, e, s), ia = false, h = t.memoizedState, n.state = h, ke(t, e, n, u), Fe();
      var r = t.memoizedState;
      c !== p || h !== r || ia || l !== null && l.dependencies !== null && Ku(l.dependencies) ? (typeof i == "function" && (ci(t, a, i, e), r = t.memoizedState), (b = ia || bd(t, a, b, e, h, r, s) || l !== null && l.dependencies !== null && Ku(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, r, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(e, r, s)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = r), n.props = e, n.state = r, n.context = s, e = b) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), e = false);
    }
    return n = e, on(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = Ga(t, l.child, null, u), t.child = Ga(t, null, a, u)) : Yl(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Lt(l, t, u), l;
  }
  function Cd(l, t, a, e) {
    return xa(), t.flags |= 256, Yl(l, t, a, e), t.child;
  }
  var oi = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function mi(l) {
    return { baseLanes: l, cachePool: ps() };
  }
  function vi(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= dt), l;
  }
  function qd(l, t, a) {
    var e = t.pendingProps, u = false, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? false : (Al.current & 2) !== 0), c && (u = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (I) {
        if (u ? da(t) : oa(), (l = hl) ? (l = V0(l, Et), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: ea !== null ? { id: Nt, overflow: Ut } : null, retryLane: 536870912, hydrationErrors: null }, a = hs(l), a.return = t, t.child = a, ql = t, hl = null)) : l = null, l === null) throw na(t);
        return $i(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var i = e.children;
      return e = e.fallback, u ? (oa(), u = t.mode, i = mn({ mode: "hidden", children: i }, u), e = Ha(e, u, a, null), i.return = t, e.return = t, i.sibling = e, t.child = i, e = t.child, e.memoizedState = mi(a), e.childLanes = vi(l, c, a), t.memoizedState = oi, au(null, e)) : (da(t), yi(t, i));
    }
    var s = l.memoizedState;
    if (s !== null && (i = s.dehydrated, i !== null)) {
      if (n) t.flags & 256 ? (da(t), t.flags &= -257, t = hi(l, t, a)) : t.memoizedState !== null ? (oa(), t.child = l.child, t.flags |= 128, t = null) : (oa(), i = e.fallback, u = t.mode, e = mn({ mode: "visible", children: e.children }, u), i = Ha(i, u, a, null), i.flags |= 2, e.return = t, i.return = t, e.sibling = i, t.child = e, Ga(t, l.child, null, a), e = t.child, e.memoizedState = mi(a), e.childLanes = vi(l, c, a), t.memoizedState = oi, t = au(null, e));
      else if (da(t), $i(i)) {
        if (c = i.nextSibling && i.nextSibling.dataset, c) var y = c.dgst;
        c = y, e = Error(o(419)), e.stack = "", e.digest = c, Ve({ value: e, source: null, stack: null }), t = hi(l, t, a);
      } else if (Ml || ie(l, t, a, false), c = (a & l.childLanes) !== 0, Ml || c) {
        if (c = vl, c !== null && (e = Tf(c, a), e !== 0 && e !== s.retryLane)) throw s.retryLane = e, ja(l, e), kl(c, l, e), si;
        Wi(i) || En(), t = hi(l, t, a);
      } else Wi(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = s.treeContext, hl = At(i.nextSibling), ql = t, I = true, ua = null, Et = false, l !== null && Ss(t, l), t = yi(t, e.children), t.flags |= 4096);
      return t;
    }
    return u ? (oa(), i = e.fallback, u = t.mode, s = l.child, y = s.sibling, e = Bt(s, { mode: "hidden", children: e.children }), e.subtreeFlags = s.subtreeFlags & 65011712, y !== null ? i = Bt(y, i) : (i = Ha(i, u, a, null), i.flags |= 2), i.return = t, e.return = t, e.sibling = i, t.child = e, au(null, e), e = t.child, i = l.child.memoizedState, i === null ? i = mi(a) : (u = i.cachePool, u !== null ? (s = _l._currentValue, u = u.parent !== s ? { parent: s, pool: s } : u) : u = ps(), i = { baseLanes: i.baseLanes | a, cachePool: u }), e.memoizedState = i, e.childLanes = vi(l, c, a), t.memoizedState = oi, au(l.child, e)) : (da(t), a = l.child, l = a.sibling, a = Bt(a, { mode: "visible", children: e.children }), a.return = t, a.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function yi(l, t) {
    return t = mn({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function mn(l, t) {
    return l = ct(22, l, null, t), l.lanes = 0, l;
  }
  function hi(l, t, a) {
    return Ga(t, l.child, null, a), l = yi(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function Bd(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Uc(l.return, t, a);
  }
  function ri(l, t, a, e, u, n) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: e, tail: a, tailMode: u, treeForkCount: n } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = e, c.tail = a, c.tailMode = u, c.treeForkCount = n);
  }
  function Yd(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var c = Al.current, i = (c & 2) !== 0;
    if (i ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, O(Al, c), Yl(l, t, e, a), e = I ? Le : 0, !i && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && Bd(l, a, t);
      else if (l.tag === 19) Bd(l, a, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; ) l = a.alternate, l !== null && Pu(l) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), ri(t, false, u, a, n, e);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && Pu(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        ri(t, true, a, null, n, e);
        break;
      case "together":
        ri(t, false, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Lt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ya |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
      if (ie(l, t, a, false), (a & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, a = Bt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = Bt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function gi(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Ku(l)));
  }
  function Im(l, t, a) {
    switch (t.tag) {
      case 3:
        Ll(t, t.stateNode.containerInfo), ca(t, _l, l.memoizedState.cache), xa();
        break;
      case 27:
      case 5:
        De(t);
        break;
      case 4:
        Ll(t, t.stateNode.containerInfo);
        break;
      case 10:
        ca(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Zc(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null) return e.dehydrated !== null ? (da(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? qd(l, t, a) : (da(t), l = Lt(l, t, a), l !== null ? l.sibling : null);
        da(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (e = (a & t.childLanes) !== 0, e || (ie(l, t, a, false), e = (a & t.childLanes) !== 0), u) {
          if (e) return Yd(l, t, a);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), O(Al, Al.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, Ud(l, t, a, t.pendingProps);
      case 24:
        ca(t, _l, l.memoizedState.cache);
    }
    return Lt(l, t, a);
  }
  function Gd(l, t, a) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Ml = true;
    else {
      if (!gi(l, a) && (t.flags & 128) === 0) return Ml = false, Im(l, t, a);
      Ml = (l.flags & 131072) !== 0;
    }
    else Ml = false, I && (t.flags & 1048576) !== 0 && gs(t, Le, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = Ba(t.elementType), t.type = l, typeof l == "function") Tc(l) ? (e = Qa(l, e), t.tag = 1, t = Rd(null, t, l, e, a)) : (t.tag = 0, t = di(null, t, l, e, a));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === gl) {
                t.tag = 11, t = Md(null, t, l, e, a);
                break l;
              } else if (u === Q) {
                t.tag = 14, t = Dd(null, t, l, e, a);
                break l;
              }
            }
            throw t = _t(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return di(l, t, t.type, t.pendingProps, a);
      case 1:
        return e = t.type, u = Qa(e, t.pendingProps), Rd(l, t, e, u, a);
      case 3:
        l: {
          if (Ll(t, t.stateNode.containerInfo), l === null) throw Error(o(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Bc(l, t), ke(t, e, null, a);
          var c = t.memoizedState;
          if (e = c.cache, ca(t, _l, e), e !== n.cache && jc(t, [_l], a, true), Fe(), e = c.element, n.isDehydrated) if (n = { element: e, isDehydrated: false, cache: c.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = Cd(l, t, e, a);
            break l;
          } else if (e !== u) {
            u = St(Error(o(424)), t), Ve(u), t = Cd(l, t, e, a);
            break l;
          } else for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, hl = At(l.firstChild), ql = t, I = true, ua = null, Et = true, a = Us(t, null, e, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (xa(), e === u) {
              t = Lt(l, t, a);
              break l;
            }
            Yl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return on(l, t), l === null ? (a = F0(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : I || (a = t.type, l = t.pendingProps, e = Dn(w.current).createElement(a), e[Cl] = t, e[Kl] = l, Gl(e, a, l), jl(e), t.stateNode = e) : t.memoizedState = F0(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return De(t), l === null && I && (e = t.stateNode = w0(t.type, t.pendingProps, w.current), ql = t, Et = true, u = hl, ba(t.type) ? (Fi = u, hl = At(e.firstChild)) : hl = u), Yl(l, t, t.pendingProps.children, a), on(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && I && ((u = e = hl) && (e = Dv(e, t.type, t.pendingProps, Et), e !== null ? (t.stateNode = e, ql = t, hl = At(e.firstChild), Et = false, u = true) : u = false), u || na(t)), De(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, e = n.children, Ki(u, n) ? e = null : c !== null && Ki(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = Vc(l, t, Lm, null, null, a), gu._currentValue = u), on(l, t), Yl(l, t, e, a), t.child;
      case 6:
        return l === null && I && ((l = a = hl) && (a = Nv(a, t.pendingProps, Et), a !== null ? (t.stateNode = a, ql = t, hl = null, l = true) : l = false), l || na(t)), null;
      case 13:
        return qd(l, t, a);
      case 4:
        return Ll(t, t.stateNode.containerInfo), e = t.pendingProps, l === null ? t.child = Ga(t, null, e, a) : Yl(l, t, e, a), t.child;
      case 11:
        return Md(l, t, t.type, t.pendingProps, a);
      case 7:
        return Yl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Yl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Yl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return e = t.pendingProps, ca(t, t.type, e.value), Yl(l, t, e.children, a), t.child;
      case 9:
        return u = t.type._context, e = t.pendingProps.children, Ca(t), u = Bl(u), e = e(u), t.flags |= 1, Yl(l, t, e, a), t.child;
      case 14:
        return Dd(l, t, t.type, t.pendingProps, a);
      case 15:
        return Nd(l, t, t.type, t.pendingProps, a);
      case 19:
        return Yd(l, t, a);
      case 31:
        return km(l, t, a);
      case 22:
        return Ud(l, t, a, t.pendingProps);
      case 24:
        return Ca(t), e = Bl(_l), l === null ? (u = Rc(), u === null && (u = vl, n = Hc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, qc(t), ca(t, _l, u)) : ((l.lanes & a) !== 0 && (Bc(l, t), ke(t, null, null, a), Fe()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ca(t, _l, e)) : (e = n.cache, ca(t, _l, e), e !== u.cache && jc(t, [_l], a, true))), Yl(l, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Vt(l) {
    l.flags |= 4;
  }
  function Si(l, t, a, e, u) {
    if ((t = (l.mode & 32) !== 0) && (t = false), t) {
      if (l.flags |= 16777216, (u & 335544128) === u) if (l.stateNode.complete) l.flags |= 8192;
      else if (m0()) l.flags |= 8192;
      else throw Ya = $u, Cc;
    } else l.flags &= -16777217;
  }
  function Xd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !to(t)) if (m0()) l.flags |= 8192;
    else throw Ya = $u, Cc;
  }
  function vn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bf() : 536870912, l.lanes |= t, be |= t);
  }
  function eu(l, t) {
    if (!I) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? l.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = l.tail;
        for (var e = null; a !== null; ) a.alternate !== null && (e = a), a = a.sibling;
        e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
    }
  }
  function rl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t) for (var u = l.child; u !== null; ) a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
    else for (u = l.child; u !== null; ) a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function Pm(l, t, a) {
    var e = t.pendingProps;
    switch (Oc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rl(t), null;
      case 1:
        return rl(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Xt(_l), Tl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (ce(t) ? Vt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dc())), rl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Vt(t), n !== null ? (rl(t), Xd(t, n)) : (rl(t), Si(t, u, null, e, a))) : n ? n !== l.memoizedState ? (Vt(t), rl(t), Xd(t, n)) : (rl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && Vt(t), rl(t), Si(t, u, l, e, a)), null;
      case 27:
        if (Au(t), a = w.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== e && Vt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(o(166));
            return rl(t), null;
          }
          l = j.current, ce(t) ? bs(t) : (l = w0(u, e, a), t.stateNode = l, Vt(t));
        }
        return rl(t), null;
      case 5:
        if (Au(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== e && Vt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(o(166));
            return rl(t), null;
          }
          if (n = j.current, ce(t)) bs(t);
          else {
            var c = Dn(w.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    n = c.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof e.is == "string" ? c.createElement("select", { is: e.is }) : c.createElement("select"), e.multiple ? n.multiple = true : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? c.createElement(u, { is: e.is }) : c.createElement(u);
                }
            }
            n[Cl] = t, n[Kl] = e;
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = n;
            l: switch (Gl(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = true;
                break l;
              default:
                e = false;
            }
            e && Vt(t);
          }
        }
        return rl(t), Si(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && Vt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(o(166));
          if (l = w.current, ce(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = ql, u !== null) switch (u.tag) {
              case 27:
              case 5:
                e = u.memoizedProps;
            }
            l[Cl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === true || q0(l.nodeValue, a)), l || na(t, true);
          } else l = Dn(l).createTextNode(e), l[Cl] = t, t.stateNode = l;
        }
        return rl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = ce(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Cl] = t;
            } else xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rl(t), l = false;
          } else a = Dc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = true;
          if (!l) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return rl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = ce(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Cl] = t;
            } else xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rl(t), u = false;
          } else u = Dc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = true;
          if (!u) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
        }
        return ft(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), vn(t, t.updateQueue), rl(t), null);
      case 4:
        return Tl(), l === null && Xi(t.stateNode.containerInfo), rl(t), null;
      case 10:
        return Xt(t.type), rl(t), null;
      case 19:
        if (g(Al), e = t.memoizedState, e === null) return rl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null) if (u) eu(e, false);
        else {
          if (El !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = Pu(l), n !== null) {
              for (t.flags |= 128, eu(e, false), l = n.updateQueue, t.updateQueue = l, vn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) ys(a, l), a = a.sibling;
              return O(Al, Al.current & 1 | 2), I && Yt(t, e.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          e.tail !== null && at() > Sn && (t.flags |= 128, u = true, eu(e, false), t.lanes = 4194304);
        }
        else {
          if (!u) if (l = Pu(n), l !== null) {
            if (t.flags |= 128, u = true, l = l.updateQueue, t.updateQueue = l, vn(t, l), eu(e, true), e.tail === null && e.tailMode === "hidden" && !n.alternate && !I) return rl(t), null;
          } else 2 * at() - e.renderingStartTime > Sn && a !== 536870912 && (t.flags |= 128, u = true, eu(e, false), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = at(), l.sibling = null, a = Al.current, O(Al, u ? a & 1 | 2 : a & 1), I && Yt(t, e.treeForkCount), l) : (rl(t), null);
      case 22:
      case 23:
        return ft(t), Qc(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (rl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rl(t), a = t.updateQueue, a !== null && vn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && g(qa), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Xt(_l), rl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function lv(l, t) {
    switch (Oc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Xt(_l), Tl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Au(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ft(t), t.alternate === null) throw Error(o(340));
          xa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ft(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          xa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return g(Al), null;
      case 4:
        return Tl(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return ft(t), Qc(), l !== null && g(qa), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Xt(_l), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qd(l, t) {
    switch (Oc(t), t.tag) {
      case 3:
        Xt(_l), Tl();
        break;
      case 26:
      case 27:
      case 5:
        Au(t);
        break;
      case 4:
        Tl();
        break;
      case 31:
        t.memoizedState !== null && ft(t);
        break;
      case 13:
        ft(t);
        break;
      case 19:
        g(Al);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        ft(t), Qc(), l !== null && g(qa);
        break;
      case 24:
        Xt(_l);
    }
  }
  function uu(l, t) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create, c = a.inst;
            e = n(), c.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (i) {
      sl(t, t.return, i);
    }
  }
  function ma(l, t, a) {
    try {
      var e = t.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, u = t;
              var s = a, y = i;
              try {
                y();
              } catch (b) {
                sl(u, s, b);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (b) {
      sl(t, t.return, b);
    }
  }
  function Zd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Hs(t, a);
      } catch (e) {
        sl(l, l.return, e);
      }
    }
  }
  function Ld(l, t, a) {
    a.props = Qa(l.type, l.memoizedProps), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      sl(l, t, e);
    }
  }
  function nu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (u) {
      sl(l, t, u);
    }
  }
  function jt(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null) if (typeof e == "function") try {
      e();
    } catch (u) {
      sl(l, t, u);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (u) {
      sl(l, t, u);
    }
    else a.current = null;
  }
  function Vd(l) {
    var t = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function bi(l, t, a) {
    try {
      var e = l.stateNode;
      Tv(e, l.type, a, t), e[Kl] = t;
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function Kd(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ba(l.type) || l.tag === 4;
  }
  function zi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Kd(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ba(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ei(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ct));
    else if (e !== 4 && (e === 27 && ba(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (Ei(l, t, a), l = l.sibling; l !== null; ) Ei(l, t, a), l = l.sibling;
  }
  function yn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && ba(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (yn(l, t, a), l = l.sibling; l !== null; ) yn(l, t, a), l = l.sibling;
  }
  function Jd(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      Gl(t, e, a), t[Cl] = l, t[Kl] = a;
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  var Kt = false, Dl = false, Ti = false, wd = typeof WeakSet == "function" ? WeakSet : Set, Hl = null;
  function tv(l, t) {
    if (l = l.containerInfo, Li = Cn, l = ns(l), hc(l)) {
      if ("selectionStart" in l) var a = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var e = a.getSelection && a.getSelection();
        if (e && e.rangeCount !== 0) {
          a = e.anchorNode;
          var u = e.anchorOffset, n = e.focusNode;
          e = e.focusOffset;
          try {
            a.nodeType, n.nodeType;
          } catch {
            a = null;
            break l;
          }
          var c = 0, i = -1, s = -1, y = 0, b = 0, p = l, h = null;
          t: for (; ; ) {
            for (var r; p !== a || u !== 0 && p.nodeType !== 3 || (i = c + u), p !== n || e !== 0 && p.nodeType !== 3 || (s = c + e), p.nodeType === 3 && (c += p.nodeValue.length), (r = p.firstChild) !== null; ) h = p, p = r;
            for (; ; ) {
              if (p === l) break t;
              if (h === a && ++y === u && (i = c), h === n && ++b === e && (s = c), (r = p.nextSibling) !== null) break;
              p = h, h = p.parentNode;
            }
            p = r;
          }
          a = i === -1 || s === -1 ? null : { start: i, end: s };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Vi = { focusedElem: l, selectionRange: a }, Cn = false, Hl = t; Hl !== null; ) if (t = Hl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Hl = l;
    else for (; Hl !== null; ) {
      switch (t = Hl, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (a = 0; a < l.length; a++) u = l[a], u.ref.impl = u.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, a = t, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
            try {
              var D = Qa(a.type, u);
              l = e.getSnapshotBeforeUpdate(D, n), e.__reactInternalSnapshotBeforeUpdate = l;
            } catch (B) {
              sl(a, a.return, B);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) wi(l);
            else if (a === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                wi(l);
                break;
              default:
                l.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l & 1024) !== 0) throw Error(o(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Hl = l;
        break;
      }
      Hl = t.return;
    }
  }
  function Wd(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        wt(l, a), e & 4 && uu(5, a);
        break;
      case 1:
        if (wt(l, a), e & 4) if (l = a.stateNode, t === null) try {
          l.componentDidMount();
        } catch (c) {
          sl(a, a.return, c);
        }
        else {
          var u = Qa(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            sl(a, a.return, c);
          }
        }
        e & 64 && Zd(a), e & 512 && nu(a, a.return);
        break;
      case 3:
        if (wt(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            Hs(l, t);
          } catch (c) {
            sl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Jd(a);
      case 26:
      case 5:
        wt(l, a), t === null && e & 4 && Vd(a), e & 512 && nu(a, a.return);
        break;
      case 12:
        wt(l, a);
        break;
      case 31:
        wt(l, a), e & 4 && kd(l, a);
        break;
      case 13:
        wt(l, a), e & 4 && Id(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = dv.bind(null, a), Uv(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || Kt, !e) {
          t = t !== null && t.memoizedState !== null || Dl, u = Kt;
          var n = Dl;
          Kt = e, (Dl = t) && !n ? Wt(l, a, (a.subtreeFlags & 8772) !== 0) : wt(l, a), Kt = u, Dl = n;
        }
        break;
      case 30:
        break;
      default:
        wt(l, a);
    }
  }
  function $d(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, $d(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && In(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Sl = null, wl = false;
  function Jt(l, t, a) {
    for (a = a.child; a !== null; ) Fd(l, t, a), a = a.sibling;
  }
  function Fd(l, t, a) {
    if (et && typeof et.onCommitFiberUnmount == "function") try {
      et.onCommitFiberUnmount(Ne, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Dl || jt(a, t), Jt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Dl || jt(a, t);
        var e = Sl, u = wl;
        ba(a.type) && (Sl = a.stateNode, wl = false), Jt(l, t, a), yu(a.stateNode), Sl = e, wl = u;
        break;
      case 5:
        Dl || jt(a, t);
      case 6:
        if (e = Sl, u = wl, Sl = null, Jt(l, t, a), Sl = e, wl = u, Sl !== null) if (wl) try {
          (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(a.stateNode);
        } catch (n) {
          sl(a, t, n);
        }
        else try {
          Sl.removeChild(a.stateNode);
        } catch (n) {
          sl(a, t, n);
        }
        break;
      case 18:
        Sl !== null && (wl ? (l = Sl, Z0(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), Me(l)) : Z0(Sl, a.stateNode));
        break;
      case 4:
        e = Sl, u = wl, Sl = a.stateNode.containerInfo, wl = true, Jt(l, t, a), Sl = e, wl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ma(2, a, t), Dl || ma(4, a, t), Jt(l, t, a);
        break;
      case 1:
        Dl || (jt(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && Ld(a, t, e)), Jt(l, t, a);
        break;
      case 21:
        Jt(l, t, a);
        break;
      case 22:
        Dl = (e = Dl) || a.memoizedState !== null, Jt(l, t, a), Dl = e;
        break;
      default:
        Jt(l, t, a);
    }
  }
  function kd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Me(l);
      } catch (a) {
        sl(t, t.return, a);
      }
    }
  }
  function Id(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Me(l);
    } catch (a) {
      sl(t, t.return, a);
    }
  }
  function av(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new wd()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new wd()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function hn(l, t) {
    var a = av(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = ov.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Wl(l, t) {
    var a = t.deletions;
    if (a !== null) for (var e = 0; e < a.length; e++) {
      var u = a[e], n = l, c = t, i = c;
      l: for (; i !== null; ) {
        switch (i.tag) {
          case 27:
            if (ba(i.type)) {
              Sl = i.stateNode, wl = false;
              break l;
            }
            break;
          case 5:
            Sl = i.stateNode, wl = false;
            break l;
          case 3:
          case 4:
            Sl = i.stateNode.containerInfo, wl = true;
            break l;
        }
        i = i.return;
      }
      if (Sl === null) throw Error(o(160));
      Fd(n, c, u), Sl = null, wl = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Pd(t, l), t = t.sibling;
  }
  var Mt = null;
  function Pd(l, t) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Wl(t, l), $l(l), e & 4 && (ma(3, l, l.return), uu(3, l), ma(5, l, l.return));
        break;
      case 1:
        Wl(t, l), $l(l), e & 512 && (Dl || a === null || jt(a, a.return)), e & 64 && Kt && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = Mt;
        if (Wl(t, l), $l(l), e & 512 && (Dl || a === null || jt(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null) if (e === null) if (l.stateNode === null) {
            l: {
              e = l.type, a = l.memoizedProps, u = u.ownerDocument || u;
              t: switch (e) {
                case "title":
                  n = u.getElementsByTagName("title")[0], (!n || n[He] || n[Cl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(n, u.querySelector("head > title"))), Gl(n, e, a), n[Cl] = l, jl(n), e = n;
                  break l;
                case "link":
                  var c = P0("link", "href", u).get(e + (a.href || ""));
                  if (c) {
                    for (var i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      c.splice(i, 1);
                      break t;
                    }
                  }
                  n = u.createElement(e), Gl(n, e, a), u.head.appendChild(n);
                  break;
                case "meta":
                  if (c = P0("meta", "content", u).get(e + (a.content || ""))) {
                    for (i = 0; i < c.length; i++) if (n = c[i], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      c.splice(i, 1);
                      break t;
                    }
                  }
                  n = u.createElement(e), Gl(n, e, a), u.head.appendChild(n);
                  break;
                default:
                  throw Error(o(468, e));
              }
              n[Cl] = l, jl(n), e = n;
            }
            l.stateNode = e;
          } else lo(u, l.type, l.stateNode);
          else l.stateNode = I0(u, e, l.memoizedProps);
          else n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? lo(u, l.type, l.stateNode) : I0(u, e, l.memoizedProps)) : e === null && l.stateNode !== null && bi(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Wl(t, l), $l(l), e & 512 && (Dl || a === null || jt(a, a.return)), a !== null && e & 4 && bi(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Wl(t, l), $l(l), e & 512 && (Dl || a === null || jt(a, a.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Fa(u, "");
          } catch (D) {
            sl(l, l.return, D);
          }
        }
        e & 4 && l.stateNode != null && (u = l.memoizedProps, bi(l, u, a !== null ? a.memoizedProps : u)), e & 1024 && (Ti = true);
        break;
      case 6:
        if (Wl(t, l), $l(l), e & 4) {
          if (l.stateNode === null) throw Error(o(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (D) {
            sl(l, l.return, D);
          }
        }
        break;
      case 3:
        if (jn = null, u = Mt, Mt = Nn(t.containerInfo), Wl(t, l), Mt = u, $l(l), e & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Me(t.containerInfo);
        } catch (D) {
          sl(l, l.return, D);
        }
        Ti && (Ti = false, l0(l));
        break;
      case 4:
        e = Mt, Mt = Nn(l.stateNode.containerInfo), Wl(t, l), $l(l), Mt = e;
        break;
      case 12:
        Wl(t, l), $l(l);
        break;
      case 31:
        Wl(t, l), $l(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, hn(l, e)));
        break;
      case 13:
        Wl(t, l), $l(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gn = at()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, hn(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, y = Kt, b = Dl;
        if (Kt = y || u, Dl = b || s, Wl(t, l), Dl = b, Kt = y, $l(l), e & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || s || Kt || Dl || Za(l)), a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              s = a = t;
              try {
                if (n = s.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  i = s.stateNode;
                  var p = s.memoizedProps.style, h = p != null && p.hasOwnProperty("display") ? p.display : null;
                  i.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                }
              } catch (D) {
                sl(s, s.return, D);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              s = t;
              try {
                s.stateNode.nodeValue = u ? "" : s.memoizedProps;
              } catch (D) {
                sl(s, s.return, D);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              s = t;
              try {
                var r = s.stateNode;
                u ? L0(r, true) : L0(s.stateNode, false);
              } catch (D) {
                sl(s, s.return, D);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, hn(l, a))));
        break;
      case 19:
        Wl(t, l), $l(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, hn(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Wl(t, l), $l(l);
    }
  }
  function $l(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Kd(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, n = zi(l);
            yn(l, n, u);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Fa(c, ""), a.flags &= -33);
            var i = zi(l);
            yn(l, i, c);
            break;
          case 3:
          case 4:
            var s = a.stateNode.containerInfo, y = zi(l);
            Ei(l, y, s);
            break;
          default:
            throw Error(o(161));
        }
      } catch (b) {
        sl(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function l0(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      l0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function wt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Wd(l, t.alternate, t), t = t.sibling;
  }
  function Za(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ma(4, t, t.return), Za(t);
          break;
        case 1:
          jt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Ld(t, t.return, a), Za(t);
          break;
        case 27:
          yu(t.stateNode);
        case 26:
        case 5:
          jt(t, t.return), Za(t);
          break;
        case 22:
          t.memoizedState === null && Za(t);
          break;
        case 30:
          Za(t);
          break;
        default:
          Za(t);
      }
      l = l.sibling;
    }
  }
  function Wt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate, u = l, n = t, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wt(u, n, a), uu(4, n);
          break;
        case 1:
          if (Wt(u, n, a), e = n, u = e.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (y) {
            sl(e, e.return, y);
          }
          if (e = n, u = e.updateQueue, u !== null) {
            var i = e.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++) js(s[u], i);
            } catch (y) {
              sl(e, e.return, y);
            }
          }
          a && c & 64 && Zd(n), nu(n, n.return);
          break;
        case 27:
          Jd(n);
        case 26:
        case 5:
          Wt(u, n, a), a && e === null && c & 4 && Vd(n), nu(n, n.return);
          break;
        case 12:
          Wt(u, n, a);
          break;
        case 31:
          Wt(u, n, a), a && c & 4 && kd(u, n);
          break;
        case 13:
          Wt(u, n, a), a && c & 4 && Id(u, n);
          break;
        case 22:
          n.memoizedState === null && Wt(u, n, a), nu(n, n.return);
          break;
        case 30:
          break;
        default:
          Wt(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Ai(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Ke(a));
  }
  function pi(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ke(l));
  }
  function Dt(l, t, a, e) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) t0(l, t, a, e), t = t.sibling;
  }
  function t0(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(l, t, a, e), u & 2048 && uu(9, t);
        break;
      case 1:
        Dt(l, t, a, e);
        break;
      case 3:
        Dt(l, t, a, e), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ke(l)));
        break;
      case 12:
        if (u & 2048) {
          Dt(l, t, a, e), l = t.stateNode;
          try {
            var n = t.memoizedProps, c = n.id, i = n.onPostCommit;
            typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (s) {
            sl(t, t.return, s);
          }
        } else Dt(l, t, a, e);
        break;
      case 31:
        Dt(l, t, a, e);
        break;
      case 13:
        Dt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Dt(l, t, a, e) : cu(l, t) : n._visibility & 2 ? Dt(l, t, a, e) : (n._visibility |= 2, re(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Ai(c, t);
        break;
      case 24:
        Dt(l, t, a, e), u & 2048 && pi(t.alternate, t);
        break;
      default:
        Dt(l, t, a, e);
    }
  }
  function re(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, c = t, i = a, s = e, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          re(n, c, i, s, u), uu(8, c);
          break;
        case 23:
          break;
        case 22:
          var b = c.stateNode;
          c.memoizedState !== null ? b._visibility & 2 ? re(n, c, i, s, u) : cu(n, c) : (b._visibility |= 2, re(n, c, i, s, u)), u && y & 2048 && Ai(c.alternate, c);
          break;
        case 24:
          re(n, c, i, s, u), u && y & 2048 && pi(c.alternate, c);
          break;
        default:
          re(n, c, i, s, u);
      }
      t = t.sibling;
    }
  }
  function cu(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = l, e = t, u = e.flags;
      switch (e.tag) {
        case 22:
          cu(a, e), u & 2048 && Ai(e.alternate, e);
          break;
        case 24:
          cu(a, e), u & 2048 && pi(e.alternate, e);
          break;
        default:
          cu(a, e);
      }
      t = t.sibling;
    }
  }
  var iu = 8192;
  function ge(l, t, a) {
    if (l.subtreeFlags & iu) for (l = l.child; l !== null; ) a0(l, t, a), l = l.sibling;
  }
  function a0(l, t, a) {
    switch (l.tag) {
      case 26:
        ge(l, t, a), l.flags & iu && l.memoizedState !== null && Zv(a, Mt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ge(l, t, a);
        break;
      case 3:
      case 4:
        var e = Mt;
        Mt = Nn(l.stateNode.containerInfo), ge(l, t, a), Mt = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = iu, iu = 16777216, ge(l, t, a), iu = e) : ge(l, t, a));
        break;
      default:
        ge(l, t, a);
    }
  }
  function e0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var e = t[a];
        Hl = e, n0(e, l);
      }
      e0(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) u0(l), l = l.sibling;
  }
  function u0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fu(l), l.flags & 2048 && ma(9, l, l.return);
        break;
      case 3:
        fu(l);
        break;
      case 12:
        fu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, rn(l)) : fu(l);
        break;
      default:
        fu(l);
    }
  }
  function rn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var e = t[a];
        Hl = e, n0(e, l);
      }
      e0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ma(8, t, t.return), rn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, rn(t));
          break;
        default:
          rn(t);
      }
      l = l.sibling;
    }
  }
  function n0(l, t) {
    for (; Hl !== null; ) {
      var a = Hl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ma(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ke(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Hl = e;
      else l: for (a = l; Hl !== null; ) {
        e = Hl;
        var u = e.sibling, n = e.return;
        if ($d(e), e === a) {
          Hl = null;
          break l;
        }
        if (u !== null) {
          u.return = n, Hl = u;
          break l;
        }
        Hl = n;
      }
    }
  }
  var ev = { getCacheForType: function(l) {
    var t = Bl(_l), a = t.data.get(l);
    return a === void 0 && (a = l(), t.data.set(l, a)), a;
  }, cacheSignal: function() {
    return Bl(_l).controller.signal;
  } }, uv = typeof WeakMap == "function" ? WeakMap : Map, al = 0, vl = null, W = null, F = 0, fl = 0, st = null, va = false, Se = false, _i = false, $t = 0, El = 0, ya = 0, La = 0, Oi = 0, dt = 0, be = 0, su = null, Fl = null, Mi = false, gn = 0, c0 = 0, Sn = 1 / 0, bn = null, ha = null, Ul = 0, ra = null, ze = null, Ft = 0, Di = 0, Ni = null, i0 = null, du = 0, Ui = null;
  function ot() {
    return (al & 2) !== 0 && F !== 0 ? F & -F : z.T !== null ? qi() : Af();
  }
  function f0() {
    if (dt === 0) if ((F & 536870912) === 0 || I) {
      var l = Ou;
      Ou <<= 1, (Ou & 3932160) === 0 && (Ou = 262144), dt = l;
    } else dt = 536870912;
    return l = it.current, l !== null && (l.flags |= 32), dt;
  }
  function kl(l, t, a) {
    (l === vl && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) && (Ee(l, 0), ga(l, F, dt, false)), je(l, a), ((al & 2) === 0 || l !== vl) && (l === vl && ((al & 2) === 0 && (La |= a), El === 4 && ga(l, F, dt, false)), Ht(l));
  }
  function s0(l, t, a) {
    if ((al & 6) !== 0) throw Error(o(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ue(l, t), u = e ? iv(l, t) : Hi(l, t, true), n = e;
    do {
      if (u === 0) {
        Se && !e && ga(l, t, 0, false);
        break;
      } else {
        if (a = l.current.alternate, n && !nv(a)) {
          u = Hi(l, t, false), n = false;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var c = 0;
          else c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              u = su;
              var s = i.current.memoizedState.isDehydrated;
              if (s && (Ee(i, c).flags |= 256), c = Hi(i, c, false), c !== 2) {
                if (_i && !s) {
                  i.errorRecoveryDisabledLanes |= n, La |= n, u = 4;
                  break l;
                }
                n = Fl, Fl = u, n !== null && (Fl === null ? Fl = n : Fl.push.apply(Fl, n));
              }
              u = c;
            }
            if (n = false, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ee(l, 0), ga(l, t, 0, true);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ga(e, t, dt, !va);
              break l;
            case 2:
              Fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = gn + 300 - at(), 10 < u)) {
            if (ga(e, t, dt, !va), Du(e, 0, true) !== 0) break l;
            Ft = t, e.timeoutHandle = X0(d0.bind(null, e, a, Fl, bn, Mi, t, dt, La, be, va, n, "Throttled", -0, 0), u);
            break l;
          }
          d0(e, a, Fl, bn, Mi, t, dt, La, be, va, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    Ht(l);
  }
  function d0(l, t, a, e, u, n, c, i, s, y, b, p, h, r) {
    if (l.timeoutHandle = -1, p = t.subtreeFlags, p & 8192 || (p & 16785408) === 16785408) {
      p = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Ct }, a0(t, n, p);
      var D = (n & 62914560) === n ? gn - at() : (n & 4194048) === n ? c0 - at() : 0;
      if (D = Lv(p, D), D !== null) {
        Ft = n, l.cancelPendingCommit = D(S0.bind(null, l, t, n, a, e, u, c, i, s, b, p, null, h, r)), ga(l, n, c, !y);
        return;
      }
    }
    S0(l, t, n, a, e, u, c, i, s);
  }
  function nv(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var e = 0; e < a.length; e++) {
        var u = a[e], n = u.getSnapshot;
        u = u.value;
        try {
          if (!nt(n(), u)) return false;
        } catch {
          return false;
        }
      }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function ga(l, t, a, e) {
    t &= ~Oi, t &= ~La, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - ut(u), c = 1 << n;
      e[n] = -1, u &= ~c;
    }
    a !== 0 && zf(l, a, t);
  }
  function zn() {
    return (al & 6) === 0 ? (ou(0), false) : true;
  }
  function ji() {
    if (W !== null) {
      if (fl === 0) var l = W.return;
      else l = W, Gt = Ra = null, wc(l), oe = null, we = 0, l = W;
      for (; l !== null; ) Qd(l.alternate, l), l = l.return;
      W = null;
    }
  }
  function Ee(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, _v(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Ft = 0, ji(), vl = l, W = a = Bt(l.current, null), F = t, fl = 0, st = null, va = false, Se = Ue(l, t), _i = false, be = dt = Oi = La = ya = El = 0, Fl = su = null, Mi = false, (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0) for (l = l.entanglements, e &= t; 0 < e; ) {
      var u = 31 - ut(e), n = 1 << u;
      t |= l[u], e &= ~n;
    }
    return $t = t, Xu(), a;
  }
  function o0(l, t) {
    L = null, z.H = tu, t === de || t === Wu ? (t = Ms(), fl = 3) : t === Cc ? (t = Ms(), fl = 4) : fl = t === si ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, st = t, W === null && (El = 1, sn(l, St(t, l.current)));
  }
  function m0() {
    var l = it.current;
    return l === null ? true : (F & 4194048) === F ? Tt === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === Tt : false;
  }
  function v0() {
    var l = z.H;
    return z.H = tu, l === null ? tu : l;
  }
  function y0() {
    var l = z.A;
    return z.A = ev, l;
  }
  function En() {
    El = 4, va || (F & 4194048) !== F && it.current !== null || (Se = true), (ya & 134217727) === 0 && (La & 134217727) === 0 || vl === null || ga(vl, F, dt, false);
  }
  function Hi(l, t, a) {
    var e = al;
    al |= 2;
    var u = v0(), n = y0();
    (vl !== l || F !== t) && (bn = null, Ee(l, t)), t = false;
    var c = El;
    l: do
      try {
        if (fl !== 0 && W !== null) {
          var i = W, s = st;
          switch (fl) {
            case 8:
              ji(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              it.current === null && (t = true);
              var y = fl;
              if (fl = 0, st = null, Te(l, i, s, y), a && Se) {
                c = 0;
                break l;
              }
              break;
            default:
              y = fl, fl = 0, st = null, Te(l, i, s, y);
          }
        }
        cv(), c = El;
        break;
      } catch (b) {
        o0(l, b);
      }
    while (true);
    return t && l.shellSuspendCounter++, Gt = Ra = null, al = e, z.H = u, z.A = n, W === null && (vl = null, F = 0, Xu()), c;
  }
  function cv() {
    for (; W !== null; ) h0(W);
  }
  function iv(l, t) {
    var a = al;
    al |= 2;
    var e = v0(), u = y0();
    vl !== l || F !== t ? (bn = null, Sn = at() + 500, Ee(l, t)) : Se = Ue(l, t);
    l: do
      try {
        if (fl !== 0 && W !== null) {
          t = W;
          var n = st;
          t: switch (fl) {
            case 1:
              fl = 0, st = null, Te(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_s(n)) {
                fl = 0, st = null, r0(t);
                break;
              }
              t = function() {
                fl !== 2 && fl !== 9 || vl !== l || (fl = 7), Ht(l);
              }, n.then(t, t);
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              _s(n) ? (fl = 0, st = null, r0(t)) : (fl = 0, st = null, Te(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (W.tag) {
                case 26:
                  c = W.memoizedState;
                case 5:
                case 27:
                  var i = W;
                  if (c ? to(c) : i.stateNode.complete) {
                    fl = 0, st = null;
                    var s = i.sibling;
                    if (s !== null) W = s;
                    else {
                      var y = i.return;
                      y !== null ? (W = y, Tn(y)) : W = null;
                    }
                    break t;
                  }
              }
              fl = 0, st = null, Te(l, t, n, 5);
              break;
            case 6:
              fl = 0, st = null, Te(l, t, n, 6);
              break;
            case 8:
              ji(), El = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        fv();
        break;
      } catch (b) {
        o0(l, b);
      }
    while (true);
    return Gt = Ra = null, z.H = e, z.A = u, al = a, W !== null ? 0 : (vl = null, F = 0, Xu(), El);
  }
  function fv() {
    for (; W !== null && !jo(); ) h0(W);
  }
  function h0(l) {
    var t = Gd(l.alternate, l, $t);
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : W = t;
  }
  function r0(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = xd(a, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = xd(a, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        wc(t);
      default:
        Qd(a, t), t = W = ys(t, $t), t = Gd(a, t, $t);
    }
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : W = t;
  }
  function Te(l, t, a, e) {
    Gt = Ra = null, wc(t), oe = null, we = 0;
    var u = t.return;
    try {
      if (Fm(l, u, t, a, F)) {
        El = 1, sn(l, St(a, l.current)), W = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw W = u, n;
      El = 1, sn(l, St(a, l.current)), W = null;
      return;
    }
    t.flags & 32768 ? (I || e === 1 ? l = true : Se || (F & 536870912) !== 0 ? l = false : (va = l = true, (e === 2 || e === 9 || e === 3 || e === 6) && (e = it.current, e !== null && e.tag === 13 && (e.flags |= 16384))), g0(t, l)) : Tn(t);
  }
  function Tn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        g0(t, va);
        return;
      }
      l = t.return;
      var a = Pm(t.alternate, t, $t);
      if (a !== null) {
        W = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    El === 0 && (El = 5);
  }
  function g0(l, t) {
    do {
      var a = lv(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, W = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        W = l;
        return;
      }
      W = l = a;
    } while (l !== null);
    El = 6, W = null;
  }
  function S0(l, t, a, e, u, n, c, i, s) {
    l.cancelPendingCommit = null;
    do
      An();
    while (Ul !== 0);
    if ((al & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= zc, Qo(l, a, n, c, i, s), l === vl && (W = vl = null, F = 0), ze = t, ra = l, Ft = a, Di = n, Ni = u, i0 = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, mv(pu, function() {
        return A0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
        e = z.T, z.T = null, u = M.p, M.p = 2, c = al, al |= 4;
        try {
          tv(l, t, a);
        } finally {
          al = c, M.p = u, z.T = e;
        }
      }
      Ul = 1, b0(), z0(), E0();
    }
  }
  function b0() {
    if (Ul === 1) {
      Ul = 0;
      var l = ra, t = ze, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null;
        var e = M.p;
        M.p = 2;
        var u = al;
        al |= 4;
        try {
          Pd(t, l);
          var n = Vi, c = ns(l.containerInfo), i = n.focusedElem, s = n.selectionRange;
          if (c !== i && i && i.ownerDocument && us(i.ownerDocument.documentElement, i)) {
            if (s !== null && hc(i)) {
              var y = s.start, b = s.end;
              if (b === void 0 && (b = y), "selectionStart" in i) i.selectionStart = y, i.selectionEnd = Math.min(b, i.value.length);
              else {
                var p = i.ownerDocument || document, h = p && p.defaultView || window;
                if (h.getSelection) {
                  var r = h.getSelection(), D = i.textContent.length, B = Math.min(s.start, D), ml = s.end === void 0 ? B : Math.min(s.end, D);
                  !r.extend && B > ml && (c = ml, ml = B, B = c);
                  var m = es(i, B), d = es(i, ml);
                  if (m && d && (r.rangeCount !== 1 || r.anchorNode !== m.node || r.anchorOffset !== m.offset || r.focusNode !== d.node || r.focusOffset !== d.offset)) {
                    var v = p.createRange();
                    v.setStart(m.node, m.offset), r.removeAllRanges(), B > ml ? (r.addRange(v), r.extend(d.node, d.offset)) : (v.setEnd(d.node, d.offset), r.addRange(v));
                  }
                }
              }
            }
            for (p = [], r = i; r = r.parentNode; ) r.nodeType === 1 && p.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < p.length; i++) {
              var E = p[i];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          Cn = !!Li, Vi = Li = null;
        } finally {
          al = u, M.p = e, z.T = a;
        }
      }
      l.current = t, Ul = 2;
    }
  }
  function z0() {
    if (Ul === 2) {
      Ul = 0;
      var l = ra, t = ze, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = z.T, z.T = null;
        var e = M.p;
        M.p = 2;
        var u = al;
        al |= 4;
        try {
          Wd(l, t.alternate, t);
        } finally {
          al = u, M.p = e, z.T = a;
        }
      }
      Ul = 3;
    }
  }
  function E0() {
    if (Ul === 4 || Ul === 3) {
      Ul = 0, Ho();
      var l = ra, t = ze, a = Ft, e = i0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ul = 5 : (Ul = 0, ze = ra = null, T0(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (ha = null), Fn(a), t = t.stateNode, et && typeof et.onCommitFiberRoot == "function") try {
        et.onCommitFiberRoot(Ne, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (e !== null) {
        t = z.T, u = M.p, M.p = 2, z.T = null;
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          z.T = t, M.p = u;
        }
      }
      (Ft & 3) !== 0 && An(), Ht(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === Ui ? du++ : (du = 0, Ui = l) : du = 0, ou(0);
    }
  }
  function T0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ke(t)));
  }
  function An() {
    return b0(), z0(), E0(), A0();
  }
  function A0() {
    if (Ul !== 5) return false;
    var l = ra, t = Di;
    Di = 0;
    var a = Fn(Ft), e = z.T, u = M.p;
    try {
      M.p = 32 > a ? 32 : a, z.T = null, a = Ni, Ni = null;
      var n = ra, c = Ft;
      if (Ul = 0, ze = ra = null, Ft = 0, (al & 6) !== 0) throw Error(o(331));
      var i = al;
      if (al |= 4, u0(n.current), t0(n, n.current, c, a), al = i, ou(0, false), et && typeof et.onPostCommitFiberRoot == "function") try {
        et.onPostCommitFiberRoot(Ne, n);
      } catch {
      }
      return true;
    } finally {
      M.p = u, z.T = e, T0(l, t);
    }
  }
  function p0(l, t, a) {
    t = St(a, t), t = fi(l.stateNode, t, 2), l = sa(l, t, 2), l !== null && (je(l, 2), Ht(l));
  }
  function sl(l, t, a) {
    if (l.tag === 3) p0(l, l, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        p0(t, l, a);
        break;
      } else if (t.tag === 1) {
        var e = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (ha === null || !ha.has(e))) {
          l = St(a, l), a = _d(2), e = sa(t, a, 2), e !== null && (Od(a, e, t, l), je(e, 2), Ht(e));
          break;
        }
      }
      t = t.return;
    }
  }
  function xi(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new uv();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (_i = true, u.add(a), l = sv.bind(null, l, t, a), t.then(l, l));
  }
  function sv(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, vl === l && (F & a) === a && (El === 4 || El === 3 && (F & 62914560) === F && 300 > at() - gn ? (al & 2) === 0 && Ee(l, 0) : Oi |= a, be === F && (be = 0)), Ht(l);
  }
  function _0(l, t) {
    t === 0 && (t = bf()), l = ja(l, t), l !== null && (je(l, t), Ht(l));
  }
  function dv(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), _0(l, a);
  }
  function ov(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    e !== null && e.delete(t), _0(l, a);
  }
  function mv(l, t) {
    return Jn(l, t);
  }
  var pn = null, Ae = null, Ri = false, _n = false, Ci = false, Sa = 0;
  function Ht(l) {
    l !== Ae && l.next === null && (Ae === null ? pn = Ae = l : Ae = Ae.next = l), _n = true, Ri || (Ri = true, yv());
  }
  function ou(l, t) {
    if (!Ci && _n) {
      Ci = true;
      do
        for (var a = false, e = pn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes, i = e.pingedLanes;
              n = (1 << 31 - ut(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = true, N0(e, n));
          } else n = F, n = Du(e, e === vl ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), (n & 3) === 0 || Ue(e, n) || (a = true, N0(e, n));
          e = e.next;
        }
      while (a);
      Ci = false;
    }
  }
  function vv() {
    O0();
  }
  function O0() {
    _n = Ri = false;
    var l = 0;
    Sa !== 0 && pv() && (l = Sa);
    for (var t = at(), a = null, e = pn; e !== null; ) {
      var u = e.next, n = M0(e, t);
      n === 0 ? (e.next = null, a === null ? pn = u : a.next = u, u === null && (Ae = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (_n = true)), e = u;
    }
    Ul !== 0 && Ul !== 5 || ou(l), Sa !== 0 && (Sa = 0);
  }
  function M0(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - ut(n), i = 1 << c, s = u[c];
      s === -1 ? ((i & a) === 0 || (i & e) !== 0) && (u[c] = Xo(i, t)) : s <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = vl, a = F, a = Du(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), e = l.callbackNode, a === 0 || l === t && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) return e !== null && e !== null && wn(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Ue(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && wn(e), Fn(a)) {
        case 2:
        case 8:
          a = gf;
          break;
        case 32:
          a = pu;
          break;
        case 268435456:
          a = Sf;
          break;
        default:
          a = pu;
      }
      return e = D0.bind(null, l), a = Jn(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && wn(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function D0(l, t) {
    if (Ul !== 0 && Ul !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (An() && l.callbackNode !== a) return null;
    var e = F;
    return e = Du(l, l === vl ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), e === 0 ? null : (s0(l, e, t), M0(l, at()), l.callbackNode != null && l.callbackNode === a ? D0.bind(null, l) : null);
  }
  function N0(l, t) {
    if (An()) return null;
    s0(l, t, true);
  }
  function yv() {
    Ov(function() {
      (al & 6) !== 0 ? Jn(rf, vv) : O0();
    });
  }
  function qi() {
    if (Sa === 0) {
      var l = fe;
      l === 0 && (l = _u, _u <<= 1, (_u & 261888) === 0 && (_u = 256)), Sa = l;
    }
    return Sa;
  }
  function U0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Hu("" + l);
  }
  function j0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function hv(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = U0((u[Kl] || null).action), c = e.submitter;
      c && (t = (t = c[Kl] || null) ? U0(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var i = new qu("action", "action", null, e, u);
      l.push({ event: i, listeners: [{ instance: null, listener: function() {
        if (e.defaultPrevented) {
          if (Sa !== 0) {
            var s = c ? j0(u, c) : new FormData(u);
            ai(a, { pending: true, data: s, method: u.method, action: n }, null, s);
          }
        } else typeof n == "function" && (i.preventDefault(), s = c ? j0(u, c) : new FormData(u), ai(a, { pending: true, data: s, method: u.method, action: n }, n, s));
      }, currentTarget: u }] });
    }
  }
  for (var Bi = 0; Bi < bc.length; Bi++) {
    var Yi = bc[Bi], rv = Yi.toLowerCase(), gv = Yi[0].toUpperCase() + Yi.slice(1);
    Ot(rv, "on" + gv);
  }
  Ot(fs, "onAnimationEnd"), Ot(ss, "onAnimationIteration"), Ot(ds, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(xm, "onTransitionRun"), Ot(Rm, "onTransitionStart"), Ot(Cm, "onTransitionCancel"), Ot(os, "onTransitionEnd"), Wa("onMouseEnter", ["mouseout", "mouseover"]), Wa("onMouseLeave", ["mouseout", "mouseover"]), Wa("onPointerEnter", ["pointerout", "pointerover"]), Wa("onPointerLeave", ["pointerout", "pointerover"]), Ma("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ma("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ma("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ma("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ma("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var mu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Sv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mu));
  function H0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t) for (var c = e.length - 1; 0 <= c; c--) {
          var i = e[c], s = i.instance, y = i.currentTarget;
          if (i = i.listener, s !== n && u.isPropagationStopped()) break l;
          n = i, u.currentTarget = y;
          try {
            n(u);
          } catch (b) {
            Gu(b);
          }
          u.currentTarget = null, n = s;
        }
        else for (c = 0; c < e.length; c++) {
          if (i = e[c], s = i.instance, y = i.currentTarget, i = i.listener, s !== n && u.isPropagationStopped()) break l;
          n = i, u.currentTarget = y;
          try {
            n(u);
          } catch (b) {
            Gu(b);
          }
          u.currentTarget = null, n = s;
        }
      }
    }
  }
  function $(l, t) {
    var a = t[kn];
    a === void 0 && (a = t[kn] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (x0(t, l, 2, false), a.add(e));
  }
  function Gi(l, t, a) {
    var e = 0;
    t && (e |= 4), x0(a, l, e, t);
  }
  var On = "_reactListening" + Math.random().toString(36).slice(2);
  function Xi(l) {
    if (!l[On]) {
      l[On] = true, Of.forEach(function(a) {
        a !== "selectionchange" && (Sv.has(a) || Gi(a, false, l), Gi(a, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[On] || (t[On] = true, Gi("selectionchange", false, t));
    }
  }
  function x0(l, t, a, e) {
    switch (fo(t)) {
      case 2:
        var u = Jv;
        break;
      case 8:
        u = wv;
        break;
      default:
        u = tf;
    }
    a = u.bind(null, t, a, l), u = void 0, !cc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = true), e ? u !== void 0 ? l.addEventListener(t, a, { capture: true, passive: u }) : l.addEventListener(t, a, true) : u !== void 0 ? l.addEventListener(t, a, { passive: u }) : l.addEventListener(t, a, false);
  }
  function Qi(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null) l: for (; ; ) {
      if (e === null) return;
      var c = e.tag;
      if (c === 3 || c === 4) {
        var i = e.stateNode.containerInfo;
        if (i === u) break;
        if (c === 4) for (c = e.return; c !== null; ) {
          var s = c.tag;
          if ((s === 3 || s === 4) && c.stateNode.containerInfo === u) return;
          c = c.return;
        }
        for (; i !== null; ) {
          if (c = Ka(i), c === null) return;
          if (s = c.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            e = n = c;
            continue l;
          }
          i = i.parentNode;
        }
      }
      e = e.return;
    }
    Yf(function() {
      var y = n, b = uc(a), p = [];
      l: {
        var h = ms.get(l);
        if (h !== void 0) {
          var r = qu, D = l;
          switch (l) {
            case "keypress":
              if (Ru(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = om;
              break;
            case "focusin":
              D = "focus", r = dc;
              break;
            case "focusout":
              D = "blur", r = dc;
              break;
            case "beforeblur":
            case "afterblur":
              r = dc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = Po;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = ym;
              break;
            case fs:
            case ss:
            case ds:
              r = am;
              break;
            case os:
              r = rm;
              break;
            case "scroll":
            case "scrollend":
              r = ko;
              break;
            case "wheel":
              r = Sm;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = um;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Lf;
              break;
            case "toggle":
            case "beforetoggle":
              r = zm;
          }
          var B = (t & 4) !== 0, ml = !B && (l === "scroll" || l === "scrollend"), m = B ? h !== null ? h + "Capture" : null : h;
          B = [];
          for (var d = y, v; d !== null; ) {
            var E = d;
            if (v = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || v === null || m === null || (E = Re(d, m), E != null && B.push(vu(d, E, v))), ml) break;
            d = d.return;
          }
          0 < B.length && (h = new r(h, D, null, a, b), p.push({ event: h, listeners: B }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && a !== ec && (D = a.relatedTarget || a.fromElement) && (Ka(D) || D[Va])) break l;
          if ((r || h) && (h = b.window === b ? b : (h = b.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (D = a.relatedTarget || a.toElement, r = y, D = D ? Ka(D) : null, D !== null && (ml = Y(D), B = D.tag, D !== ml || B !== 5 && B !== 27 && B !== 6) && (D = null)) : (r = null, D = y), r !== D)) {
            if (B = Qf, E = "onMouseLeave", m = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (B = Lf, E = "onPointerLeave", m = "onPointerEnter", d = "pointer"), ml = r == null ? h : xe(r), v = D == null ? h : xe(D), h = new B(E, d + "leave", r, a, b), h.target = ml, h.relatedTarget = v, E = null, Ka(b) === y && (B = new B(m, d + "enter", D, a, b), B.target = v, B.relatedTarget = ml, E = B), ml = E, r && D) t: {
              for (B = bv, m = r, d = D, v = 0, E = m; E; E = B(E)) v++;
              E = 0;
              for (var q = d; q; q = B(q)) E++;
              for (; 0 < v - E; ) m = B(m), v--;
              for (; 0 < E - v; ) d = B(d), E--;
              for (; v--; ) {
                if (m === d || d !== null && m === d.alternate) {
                  B = m;
                  break t;
                }
                m = B(m), d = B(d);
              }
              B = null;
            }
            else B = null;
            r !== null && R0(p, h, r, B, false), D !== null && ml !== null && R0(p, ml, D, B, true);
          }
        }
        l: {
          if (h = y ? xe(y) : window, r = h.nodeName && h.nodeName.toLowerCase(), r === "select" || r === "input" && h.type === "file") var ll = kf;
          else if ($f(h)) if (If) ll = Um;
          else {
            ll = Dm;
            var x = Mm;
          }
          else r = h.nodeName, !r || r.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && ac(y.elementType) && (ll = kf) : ll = Nm;
          if (ll && (ll = ll(l, y))) {
            Ff(p, ll, a, b);
            break l;
          }
          x && x(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && tc(h, "number", h.value);
        }
        switch (x = y ? xe(y) : window, l) {
          case "focusin":
            ($f(x) || x.contentEditable === "true") && (le = x, rc = y, Ze = null);
            break;
          case "focusout":
            Ze = rc = le = null;
            break;
          case "mousedown":
            gc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gc = false, cs(p, a, b);
            break;
          case "selectionchange":
            if (Hm) break;
          case "keydown":
          case "keyup":
            cs(p, a, b);
        }
        var V;
        if (mc) l: {
          switch (l) {
            case "compositionstart":
              var k = "onCompositionStart";
              break l;
            case "compositionend":
              k = "onCompositionEnd";
              break l;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break l;
          }
          k = void 0;
        }
        else Pa ? wf(l, a) && (k = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (k = "onCompositionStart");
        k && (Vf && a.locale !== "ko" && (Pa || k !== "onCompositionStart" ? k === "onCompositionEnd" && Pa && (V = Gf()) : (aa = b, ic = "value" in aa ? aa.value : aa.textContent, Pa = true)), x = Mn(y, k), 0 < x.length && (k = new Zf(k, l, null, a, b), p.push({ event: k, listeners: x }), V ? k.data = V : (V = Wf(a), V !== null && (k.data = V)))), (V = Tm ? Am(l, a) : pm(l, a)) && (k = Mn(y, "onBeforeInput"), 0 < k.length && (x = new Zf("onBeforeInput", "beforeinput", null, a, b), p.push({ event: x, listeners: k }), x.data = V)), hv(p, l, y, a, b);
      }
      H0(p, t);
    });
  }
  function vu(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Re(l, a), u != null && e.unshift(vu(l, u, n)), u = Re(l, t), u != null && e.push(vu(l, u, n))), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function bv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function R0(l, t, a, e, u) {
    for (var n = t._reactName, c = []; a !== null && a !== e; ) {
      var i = a, s = i.alternate, y = i.stateNode;
      if (i = i.tag, s !== null && s === e) break;
      i !== 5 && i !== 26 && i !== 27 || y === null || (s = y, u ? (y = Re(a, n), y != null && c.unshift(vu(a, y, s))) : u || (y = Re(a, n), y != null && c.push(vu(a, y, s)))), a = a.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var zv = /\r\n?/g, Ev = /\u0000|\uFFFD/g;
  function C0(l) {
    return (typeof l == "string" ? l : "" + l).replace(zv, `
`).replace(Ev, "");
  }
  function q0(l, t) {
    return t = C0(t), C0(l) === t;
  }
  function ol(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? t === "body" || t === "textarea" && e === "" || Fa(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && Fa(l, "" + e);
        break;
      case "className":
        Uu(l, "class", e);
        break;
      case "tabIndex":
        Uu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Uu(l, a, e);
        break;
      case "style":
        qf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Uu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Hu("" + e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (a === "formAction" ? (t !== "input" && ol(l, t, "name", u.name, u, null), ol(l, t, "formEncType", u.formEncType, u, null), ol(l, t, "formMethod", u.formMethod, u, null), ol(l, t, "formTarget", u.formTarget, u, null)) : (ol(l, t, "encType", u.encType, u, null), ol(l, t, "method", u.method, u, null), ol(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Hu("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = Ct);
        break;
      case "onScroll":
        e != null && $("scroll", l);
        break;
      case "onScrollEnd":
        e != null && $("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(o(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Hu("" + e), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === true ? l.setAttribute(a, "") : e !== false && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        $("beforetoggle", l), $("toggle", l), Nu(l, "popover", e);
        break;
      case "xlinkActuate":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Nu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = $o.get(a) || a, Nu(l, a, e));
    }
  }
  function Zi(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        qf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(o(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? Fa(l, e) : (typeof e == "number" || typeof e == "bigint") && Fa(l, "" + e);
        break;
      case "onScroll":
        e != null && $("scroll", l);
        break;
      case "onScrollEnd":
        e != null && $("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Ct);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mf.hasOwnProperty(a)) l: {
          if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[Kl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
            typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
            break l;
          }
          a in l ? l[a] = e : e === true ? l.setAttribute(a, "") : Nu(l, a, e);
        }
    }
  }
  function Gl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        $("error", l), $("load", l);
        var e = false, u = false, n;
        for (n in a) if (a.hasOwnProperty(n)) {
          var c = a[n];
          if (c != null) switch (n) {
            case "src":
              e = true;
              break;
            case "srcSet":
              u = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              ol(l, t, n, c, a, null);
          }
        }
        u && ol(l, t, "srcSet", a.srcSet, a, null), e && ol(l, t, "src", a.src, a, null);
        return;
      case "input":
        $("invalid", l);
        var i = n = c = u = null, s = null, y = null;
        for (e in a) if (a.hasOwnProperty(e)) {
          var b = a[e];
          if (b != null) switch (e) {
            case "name":
              u = b;
              break;
            case "type":
              c = b;
              break;
            case "checked":
              s = b;
              break;
            case "defaultChecked":
              y = b;
              break;
            case "value":
              n = b;
              break;
            case "defaultValue":
              i = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(o(137, t));
              break;
            default:
              ol(l, t, e, b, a, null);
          }
        }
        Hf(l, n, i, s, y, c, u, false);
        return;
      case "select":
        $("invalid", l), e = c = n = null;
        for (u in a) if (a.hasOwnProperty(u) && (i = a[u], i != null)) switch (u) {
          case "value":
            n = i;
            break;
          case "defaultValue":
            c = i;
            break;
          case "multiple":
            e = i;
          default:
            ol(l, t, u, i, a, null);
        }
        t = n, a = c, l.multiple = !!e, t != null ? $a(l, !!e, t, false) : a != null && $a(l, !!e, a, true);
        return;
      case "textarea":
        $("invalid", l), n = u = e = null;
        for (c in a) if (a.hasOwnProperty(c) && (i = a[c], i != null)) switch (c) {
          case "value":
            e = i;
            break;
          case "defaultValue":
            u = i;
            break;
          case "children":
            n = i;
            break;
          case "dangerouslySetInnerHTML":
            if (i != null) throw Error(o(91));
            break;
          default:
            ol(l, t, c, i, a, null);
        }
        Rf(l, e, u, n);
        return;
      case "option":
        for (s in a) a.hasOwnProperty(s) && (e = a[s], e != null) && (s === "selected" ? l.selected = e && typeof e != "function" && typeof e != "symbol" : ol(l, t, s, e, a, null));
        return;
      case "dialog":
        $("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l);
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < mu.length; e++) $(mu[e], l);
        break;
      case "image":
        $("error", l), $("load", l);
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        $("error", l), $("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a) if (a.hasOwnProperty(y) && (e = a[y], e != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(137, t));
          default:
            ol(l, t, y, e, a, null);
        }
        return;
      default:
        if (ac(t)) {
          for (b in a) a.hasOwnProperty(b) && (e = a[b], e !== void 0 && Zi(l, t, b, e, a, void 0));
          return;
        }
    }
    for (i in a) a.hasOwnProperty(i) && (e = a[i], e != null && ol(l, t, i, e, a, null));
  }
  function Tv(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, c = null, i = null, s = null, y = null, b = null;
        for (r in a) {
          var p = a[r];
          if (a.hasOwnProperty(r) && p != null) switch (r) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = p;
            default:
              e.hasOwnProperty(r) || ol(l, t, r, null, e, p);
          }
        }
        for (var h in e) {
          var r = e[h];
          if (p = a[h], e.hasOwnProperty(h) && (r != null || p != null)) switch (h) {
            case "type":
              n = r;
              break;
            case "name":
              u = r;
              break;
            case "checked":
              y = r;
              break;
            case "defaultChecked":
              b = r;
              break;
            case "value":
              c = r;
              break;
            case "defaultValue":
              i = r;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(o(137, t));
              break;
            default:
              r !== p && ol(l, t, h, r, e, p);
          }
        }
        lc(l, c, i, s, y, b, n, u);
        return;
      case "select":
        r = c = i = h = null;
        for (n in a) if (s = a[n], a.hasOwnProperty(n) && s != null) switch (n) {
          case "value":
            break;
          case "multiple":
            r = s;
          default:
            e.hasOwnProperty(n) || ol(l, t, n, null, e, s);
        }
        for (u in e) if (n = e[u], s = a[u], e.hasOwnProperty(u) && (n != null || s != null)) switch (u) {
          case "value":
            h = n;
            break;
          case "defaultValue":
            i = n;
            break;
          case "multiple":
            c = n;
          default:
            n !== s && ol(l, t, u, n, e, s);
        }
        t = i, a = c, e = r, h != null ? $a(l, !!a, h, false) : !!e != !!a && (t != null ? $a(l, !!a, t, true) : $a(l, !!a, a ? [] : "", false));
        return;
      case "textarea":
        r = h = null;
        for (i in a) if (u = a[i], a.hasOwnProperty(i) && u != null && !e.hasOwnProperty(i)) switch (i) {
          case "value":
            break;
          case "children":
            break;
          default:
            ol(l, t, i, null, e, u);
        }
        for (c in e) if (u = e[c], n = a[c], e.hasOwnProperty(c) && (u != null || n != null)) switch (c) {
          case "value":
            h = u;
            break;
          case "defaultValue":
            r = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(o(91));
            break;
          default:
            u !== n && ol(l, t, c, u, e, n);
        }
        xf(l, h, r);
        return;
      case "option":
        for (var D in a) h = a[D], a.hasOwnProperty(D) && h != null && !e.hasOwnProperty(D) && (D === "selected" ? l.selected = false : ol(l, t, D, null, e, h));
        for (s in e) h = e[s], r = a[s], e.hasOwnProperty(s) && h !== r && (h != null || r != null) && (s === "selected" ? l.selected = h && typeof h != "function" && typeof h != "symbol" : ol(l, t, s, h, e, r));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var B in a) h = a[B], a.hasOwnProperty(B) && h != null && !e.hasOwnProperty(B) && ol(l, t, B, null, e, h);
        for (y in e) if (h = e[y], r = a[y], e.hasOwnProperty(y) && h !== r && (h != null || r != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(o(137, t));
            break;
          default:
            ol(l, t, y, h, e, r);
        }
        return;
      default:
        if (ac(t)) {
          for (var ml in a) h = a[ml], a.hasOwnProperty(ml) && h !== void 0 && !e.hasOwnProperty(ml) && Zi(l, t, ml, void 0, e, h);
          for (b in e) h = e[b], r = a[b], !e.hasOwnProperty(b) || h === r || h === void 0 && r === void 0 || Zi(l, t, b, h, e, r);
          return;
        }
    }
    for (var m in a) h = a[m], a.hasOwnProperty(m) && h != null && !e.hasOwnProperty(m) && ol(l, t, m, null, e, h);
    for (p in e) h = e[p], r = a[p], !e.hasOwnProperty(p) || h === r || h == null && r == null || ol(l, t, p, h, e, r);
  }
  function B0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function Av() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, c = u.initiatorType, i = u.duration;
        if (n && i && B0(c)) {
          for (c = 0, i = u.responseEnd, e += 1; e < a.length; e++) {
            var s = a[e], y = s.startTime;
            if (y > i) break;
            var b = s.transferSize, p = s.initiatorType;
            b && B0(p) && (s = s.responseEnd, c += b * (s < i ? 1 : (i - y) / (s - y)));
          }
          if (--e, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Li = null, Vi = null;
  function Dn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Y0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function G0(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Ki(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ji = null;
  function pv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ji ? false : (Ji = l, true) : (Ji = null, false);
  }
  var X0 = typeof setTimeout == "function" ? setTimeout : void 0, _v = typeof clearTimeout == "function" ? clearTimeout : void 0, Q0 = typeof Promise == "function" ? Promise : void 0, Ov = typeof queueMicrotask == "function" ? queueMicrotask : typeof Q0 < "u" ? function(l) {
    return Q0.resolve(null).then(l).catch(Mv);
  } : X0;
  function Mv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ba(l) {
    return l === "head";
  }
  function Z0(l, t) {
    var a = t, e = 0;
    do {
      var u = a.nextSibling;
      if (l.removeChild(a), u && u.nodeType === 8) if (a = u.data, a === "/$" || a === "/&") {
        if (e === 0) {
          l.removeChild(u), Me(t);
          return;
        }
        e--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") e++;
      else if (a === "html") yu(l.ownerDocument.documentElement);
      else if (a === "head") {
        a = l.ownerDocument.head, yu(a);
        for (var n = a.firstChild; n; ) {
          var c = n.nextSibling, i = n.nodeName;
          n[He] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = c;
        }
      } else a === "body" && yu(l.ownerDocument.body);
      a = u;
    } while (a);
    Me(t);
  }
  function L0(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8) if (a = e.data, a === "/$") {
        if (l === 0) break;
        l--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = e;
    } while (a);
  }
  function wi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wi(a), In(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Dv(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[He]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = At(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Nv(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function V0(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function Wi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $i(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Uv(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function() {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function At(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Fi = null;
  function K0(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return At(l.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function J0(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function w0(l, t, a) {
    switch (t = Dn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function yu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    In(l);
  }
  var pt = /* @__PURE__ */ new Map(), W0 = /* @__PURE__ */ new Set();
  function Nn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var kt = M.d;
  M.d = { f: jv, r: Hv, D: xv, C: Rv, L: Cv, m: qv, X: Yv, S: Bv, M: Gv };
  function jv() {
    var l = kt.f(), t = zn();
    return l || t;
  }
  function Hv(l) {
    var t = Ja(l);
    t !== null && t.tag === 5 && t.type === "form" ? od(t) : kt.r(l);
  }
  var pe = typeof document > "u" ? null : document;
  function $0(l, t, a) {
    var e = pe;
    if (e && typeof t == "string" && t) {
      var u = rt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), W0.has(u) || (W0.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), Gl(t, "link", l), jl(t), e.head.appendChild(t)));
    }
  }
  function xv(l) {
    kt.D(l), $0("dns-prefetch", l, null);
  }
  function Rv(l, t) {
    kt.C(l, t), $0("preconnect", l, t);
  }
  function Cv(l, t, a) {
    kt.L(l, t, a);
    var e = pe;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + rt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + rt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + rt(a.imageSizes) + '"]')) : u += '[href="' + rt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = _e(l);
          break;
        case "script":
          n = Oe(l);
      }
      pt.has(n) || (l = C({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : l, as: t }, a), pt.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(hu(n)) || t === "script" && e.querySelector(ru(n)) || (t = e.createElement("link"), Gl(t, "link", l), jl(t), e.head.appendChild(t)));
    }
  }
  function qv(l, t) {
    kt.m(l, t);
    var a = pe;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + rt(e) + '"][href="' + rt(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Oe(l);
      }
      if (!pt.has(n) && (l = C({ rel: "modulepreload", href: l }, t), pt.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ru(n))) return;
        }
        e = a.createElement("link"), Gl(e, "link", l), jl(e), a.head.appendChild(e);
      }
    }
  }
  function Bv(l, t, a) {
    kt.S(l, t, a);
    var e = pe;
    if (e && l) {
      var u = wa(e).hoistableStyles, n = _e(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if (c = e.querySelector(hu(n))) i.loading = 5;
        else {
          l = C({ rel: "stylesheet", href: l, "data-precedence": t }, a), (a = pt.get(n)) && ki(l, a);
          var s = c = e.createElement("link");
          jl(s), Gl(s, "link", l), s._p = new Promise(function(y, b) {
            s.onload = y, s.onerror = b;
          }), s.addEventListener("load", function() {
            i.loading |= 1;
          }), s.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Un(c, t, e);
        }
        c = { type: "stylesheet", instance: c, count: 1, state: i }, u.set(n, c);
      }
    }
  }
  function Yv(l, t) {
    kt.X(l, t);
    var a = pe;
    if (a && l) {
      var e = wa(a).hoistableScripts, u = Oe(l), n = e.get(u);
      n || (n = a.querySelector(ru(u)), n || (l = C({ src: l, async: true }, t), (t = pt.get(u)) && Ii(l, t), n = a.createElement("script"), jl(n), Gl(n, "link", l), a.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, e.set(u, n));
    }
  }
  function Gv(l, t) {
    kt.M(l, t);
    var a = pe;
    if (a && l) {
      var e = wa(a).hoistableScripts, u = Oe(l), n = e.get(u);
      n || (n = a.querySelector(ru(u)), n || (l = C({ src: l, async: true, type: "module" }, t), (t = pt.get(u)) && Ii(l, t), n = a.createElement("script"), jl(n), Gl(n, "link", l), a.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, e.set(u, n));
    }
  }
  function F0(l, t, a, e) {
    var u = (u = w.current) ? Nn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = _e(a.href), a = wa(u).hoistableStyles, e = a.get(t), e || (e = { type: "style", instance: null, count: 0, state: null }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = _e(a.href);
          var n = wa(u).hoistableStyles, c = n.get(l);
          if (c || (u = u.ownerDocument || u, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, c), (n = u.querySelector(hu(l))) && !n._p && (c.instance = n, c.state.loading = 5), pt.has(l) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, pt.set(l, a), n || Xv(u, l, a, c.state))), t && e === null) throw Error(o(528, ""));
          return c;
        }
        if (t && e !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oe(a), a = wa(u).hoistableScripts, e = a.get(t), e || (e = { type: "script", instance: null, count: 0, state: null }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function _e(l) {
    return 'href="' + rt(l) + '"';
  }
  function hu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function k0(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Xv(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    }), Gl(t, "link", a), jl(t), l.head.appendChild(t));
  }
  function Oe(l) {
    return '[src="' + rt(l) + '"]';
  }
  function ru(l) {
    return "script[async]" + l;
  }
  function I0(l, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var e = l.querySelector('style[data-href~="' + rt(a.href) + '"]');
        if (e) return t.instance = e, jl(e), e;
        var u = C({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
        return e = (l.ownerDocument || l).createElement("style"), jl(e), Gl(e, "style", u), Un(e, a.precedence, l), t.instance = e;
      case "stylesheet":
        u = _e(a.href);
        var n = l.querySelector(hu(u));
        if (n) return t.state.loading |= 4, t.instance = n, jl(n), n;
        e = k0(a), (u = pt.get(u)) && ki(e, u), n = (l.ownerDocument || l).createElement("link"), jl(n);
        var c = n;
        return c._p = new Promise(function(i, s) {
          c.onload = i, c.onerror = s;
        }), Gl(n, "link", e), t.state.loading |= 4, Un(n, a.precedence, l), t.instance = n;
      case "script":
        return n = Oe(a.src), (u = l.querySelector(ru(n))) ? (t.instance = u, jl(u), u) : (e = a, (u = pt.get(n)) && (e = C({}, a), Ii(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), jl(u), Gl(u, "link", e), l.head.appendChild(u), t.instance = u);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Un(e, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (var e = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = e.length ? e[e.length - 1] : null, n = u, c = 0; c < e.length; c++) {
      var i = e[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function ki(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ii(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var jn = null;
  function P0(l, t, a) {
    if (jn === null) {
      var e = /* @__PURE__ */ new Map(), u = jn = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else u = jn, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[He] || n[Cl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = e.get(c);
        i ? i.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function lo(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
  }
  function Qv(l, t, a) {
    if (a === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : true;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function to(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Zv(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== false) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = _e(e.href), n = t.querySelector(hu(u));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, jl(n);
          return;
        }
        n = t.ownerDocument || t, e = k0(e), (u = pt.get(u)) && ki(e, u), n = n.createElement("link"), jl(n);
        var c = n;
        c._p = new Promise(function(i, s) {
          c.onload = i, c.onerror = s;
        }), Gl(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Hn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Pi = 0;
  function Lv(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Pi === 0 && (Pi = 62500 * Av());
      var u = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > Pi ? 50 : 800) + t);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var xn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, xn = /* @__PURE__ */ new Map(), t.forEach(Vv, l), xn = null, Hn.call(l));
  }
  function Vv(l, t) {
    if (!(t.state.loading & 4)) {
      var a = xn.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), xn.set(l, a);
        for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), e = c);
        }
        e && a.set(null, e);
      }
      u = t.instance, c = u.getAttribute("data-precedence"), n = a.get(c) || e, n === e && a.set(null, u), a.set(c, u), this.count++, e = Hn.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var gu = { $$typeof: Nl, Provider: null, Consumer: null, _currentValue: G, _currentValue2: G, _threadCount: 0 };
  function Kv(l, t, a, e, u, n, c, i, s) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wn(0), this.hiddenUpdates = Wn(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ao(l, t, a, e, u, n, c, i, s, y, b, p) {
    return l = new Kv(l, t, a, c, s, y, b, p, i), t = 1, n === true && (t |= 24), n = ct(3, null, null, t), l.current = n, n.stateNode = l, t = Hc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: e, isDehydrated: a, cache: t }, qc(n), l;
  }
  function eo(l) {
    return l ? (l = ee, l) : ee;
  }
  function uo(l, t, a, e, u, n) {
    u = eo(u), e.context === null ? e.context = u : e.pendingContext = u, e = fa(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = sa(l, e, t), a !== null && (kl(a, l, t), $e(a, l, t));
  }
  function no(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function lf(l, t) {
    no(l, t), (l = l.alternate) && no(l, t);
  }
  function co(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ja(l, 67108864);
      t !== null && kl(t, l, 67108864), lf(l, 67108864);
    }
  }
  function io(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ot();
      t = $n(t);
      var a = ja(l, t);
      a !== null && kl(a, l, t), lf(l, t);
    }
  }
  var Cn = true;
  function Jv(l, t, a, e) {
    var u = z.T;
    z.T = null;
    var n = M.p;
    try {
      M.p = 2, tf(l, t, a, e);
    } finally {
      M.p = n, z.T = u;
    }
  }
  function wv(l, t, a, e) {
    var u = z.T;
    z.T = null;
    var n = M.p;
    try {
      M.p = 8, tf(l, t, a, e);
    } finally {
      M.p = n, z.T = u;
    }
  }
  function tf(l, t, a, e) {
    if (Cn) {
      var u = af(e);
      if (u === null) Qi(l, t, e, qn, a), so(l, e);
      else if ($v(u, l, t, a, e)) e.stopPropagation();
      else if (so(l, e), t & 4 && -1 < Wv.indexOf(l)) {
        for (; u !== null; ) {
          var n = Ja(u);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var c = Oa(n.pendingLanes);
                if (c !== 0) {
                  var i = n;
                  for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                    var s = 1 << 31 - ut(c);
                    i.entanglements[1] |= s, c &= ~s;
                  }
                  Ht(n), (al & 6) === 0 && (Sn = at() + 500, ou(0));
                }
              }
              break;
            case 31:
            case 13:
              i = ja(n, 2), i !== null && kl(i, n, 2), zn(), lf(n, 2);
          }
          if (n = af(e), n === null && Qi(l, t, e, qn, a), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Qi(l, t, e, null, a);
    }
  }
  function af(l) {
    return l = uc(l), ef(l);
  }
  var qn = null;
  function ef(l) {
    if (qn = null, l = Ka(l), l !== null) {
      var t = Y(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = el(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = yl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return qn = l, null;
  }
  function fo(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (xo()) {
          case rf:
            return 2;
          case gf:
            return 8;
          case pu:
          case Ro:
            return 32;
          case Sf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uf = false, za = null, Ea = null, Ta = null, Su = /* @__PURE__ */ new Map(), bu = /* @__PURE__ */ new Map(), Aa = [], Wv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function so(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        za = null;
        break;
      case "dragenter":
      case "dragleave":
        Ea = null;
        break;
      case "mouseover":
      case "mouseout":
        Ta = null;
        break;
      case "pointerover":
      case "pointerout":
        Su.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bu.delete(t.pointerId);
    }
  }
  function zu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: a, eventSystemFlags: e, nativeEvent: n, targetContainers: [u] }, t !== null && (t = Ja(t), t !== null && co(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function $v(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return za = zu(za, l, t, a, e, u), true;
      case "dragenter":
        return Ea = zu(Ea, l, t, a, e, u), true;
      case "mouseover":
        return Ta = zu(Ta, l, t, a, e, u), true;
      case "pointerover":
        var n = u.pointerId;
        return Su.set(n, zu(Su.get(n) || null, l, t, a, e, u)), true;
      case "gotpointercapture":
        return n = u.pointerId, bu.set(n, zu(bu.get(n) || null, l, t, a, e, u)), true;
    }
    return false;
  }
  function oo(l) {
    var t = Ka(l.target);
    if (t !== null) {
      var a = Y(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = el(a), t !== null) {
            l.blockedOn = t, pf(l.priority, function() {
              io(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = yl(a), t !== null) {
            l.blockedOn = t, pf(l.priority, function() {
              io(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = af(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ec = e, a.target.dispatchEvent(e), ec = null;
      } else return t = Ja(a), t !== null && co(t), l.blockedOn = a, false;
      t.shift();
    }
    return true;
  }
  function mo(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function Fv() {
    uf = false, za !== null && Bn(za) && (za = null), Ea !== null && Bn(Ea) && (Ea = null), Ta !== null && Bn(Ta) && (Ta = null), Su.forEach(mo), bu.forEach(mo);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, uf || (uf = true, T.unstable_scheduleCallback(T.unstable_NormalPriority, Fv)));
  }
  var Gn = null;
  function vo(l) {
    Gn !== l && (Gn = l, T.unstable_scheduleCallback(T.unstable_NormalPriority, function() {
      Gn === l && (Gn = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], e = l[t + 1], u = l[t + 2];
        if (typeof e != "function") {
          if (ef(e || a) === null) continue;
          break;
        }
        var n = Ja(a);
        n !== null && (l.splice(t, 3), t -= 3, ai(n, { pending: true, data: u, method: a.method, action: e }, e, u));
      }
    }));
  }
  function Me(l) {
    function t(s) {
      return Yn(s, l);
    }
    za !== null && Yn(za, l), Ea !== null && Yn(Ea, l), Ta !== null && Yn(Ta, l), Su.forEach(t), bu.forEach(t);
    for (var a = 0; a < Aa.length; a++) {
      var e = Aa[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Aa.length && (a = Aa[0], a.blockedOn === null); ) oo(a), a.blockedOn === null && Aa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (e = 0; e < a.length; e += 3) {
      var u = a[e], n = a[e + 1], c = u[Kl] || null;
      if (typeof n == "function") c || vo(a);
      else if (c) {
        var i = null;
        if (n && n.hasAttribute("formAction")) {
          if (u = n, c = n[Kl] || null) i = c.formAction;
          else if (ef(u) !== null) continue;
        } else i = c.action;
        typeof i == "function" ? a[e + 1] = i : (a.splice(e, 3), e -= 3), vo(a);
      }
    }
  }
  function yo() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(c) {
          return u = c;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var e = false, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        e = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function nf(l) {
    this._internalRoot = l;
  }
  Xn.prototype.render = nf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, e = ot();
    uo(a, e, l, t, null, null);
  }, Xn.prototype.unmount = nf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      uo(l.current, 2, null, l, null, null), zn(), t[Va] = null;
    }
  };
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Af();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Aa.length && t !== 0 && t < Aa[a].priority; a++) ;
      Aa.splice(a, 0, l), a === 0 && oo(l);
    }
  };
  var ho = N.version;
  if (ho !== "19.2.8") throw Error(o(527, ho, "19.2.8"));
  M.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = A(t), l = l !== null ? K(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var kv = { bundleType: 0, version: "19.2.8", rendererPackageName: "react-dom", currentDispatcherRef: z, reconcilerVersion: "19.2.8" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber) try {
      Ne = Qn.inject(kv), et = Qn;
    } catch {
    }
  }
  return Tu.createRoot = function(l, t) {
    if (!R(l)) throw Error(o(299));
    var a = false, e = "", u = Ed, n = Td, c = Ad;
    return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ao(l, 1, false, null, null, a, e, null, u, n, c, yo), l[Va] = t.current, Xi(l), new nf(t);
  }, Tu.hydrateRoot = function(l, t, a) {
    if (!R(l)) throw Error(o(299));
    var e = false, u = "", n = Ed, c = Td, i = Ad, s = null;
    return a != null && (a.unstable_strictMode === true && (e = true), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (i = a.onRecoverableError), a.formState !== void 0 && (s = a.formState)), t = ao(l, 1, true, t, a ?? null, e, u, s, n, c, i, yo), t.context = eo(null), a = t.current, e = ot(), e = $n(e), u = fa(e), u.callback = null, sa(a, u, e), a = e, t.current.lanes = a, je(t, a), Ht(t), l[Va] = t.current, Xi(l), new Xn(t);
  }, Tu.version = "19.2.8", Tu;
}
var _o;
function iy() {
  if (_o) return sf.exports;
  _o = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
    } catch (N) {
      console.error(N);
    }
  }
  return T(), sf.exports = cy(), sf.exports;
}
var fy = iy();
const It = (T) => `${T.type}-${T.id}`, Do = "streamfinder-watchlist";
let Oo = "";
async function Il(T, N = {}) {
  const H = N.method || "GET", o = N.query ? `&${new URLSearchParams(N.query)}` : "", R = await fetch(`/api/index.php?action=${encodeURIComponent(T)}${o}`, { method: H, credentials: "same-origin", headers: { ...H !== "GET" ? { "Content-Type": "application/json", "X-CSRF-Token": Oo } : {}, ...N.headers || {} }, body: N.body === void 0 ? void 0 : JSON.stringify(N.body), signal: N.signal }), Y = await R.json().catch(() => ({}));
  if (!R.ok) throw new Error(Y.error || "Anfrage fehlgeschlagen");
  return Y.csrf && (Oo = Y.csrf), Y;
}
async function sy() {
  return Il("session");
}
function Mo() {
  try {
    return JSON.parse(localStorage.getItem(Do) || "[]");
  } catch {
    return [];
  }
}
function dy(T) {
  localStorage.setItem(Do, JSON.stringify(T));
}
function oy(T) {
  return { rowId: Number(T.id), id: T.media_id, type: T.media_type, title: T.title, year: T.year || "", poster: T.poster, overview: T.overview || "", watched: !!T.watched, watchlistId: T.watchlist_id || null };
}
function my() {
  const [, T] = P.useState(0);
  P.useEffect(() => {
    const H = () => T((o) => o + 1);
    return addEventListener("popstate", H), () => removeEventListener("popstate", H);
  }, []);
  const N = new URLSearchParams(location.search);
  return location.pathname.replace(/\/+$/, "") === "/title" && N.get("id") ? S.jsx(ry, {}) : S.jsx(yy, {});
}
function vy({ user: T, onLogin: N, onLogout: H }) {
  return S.jsxs("nav", { className: "topbar", children: [S.jsxs("a", { className: "brand", href: "/", "aria-label": "Streamfinder Startseite", children: [S.jsx("img", { src: "/logo/mv_logo.svg", alt: "" }), S.jsxs("span", { children: ["Stream", S.jsx("strong", { children: "Finder" })] })] }), T ? S.jsxs("div", { className: "account", children: [S.jsxs("span", { className: "account-name", children: [S.jsx(Ay, {}), S.jsxs("span", { children: ["Hallo, ", S.jsx("b", { children: T.username })] })] }), S.jsxs("button", { className: "quiet logout-button", onClick: H, children: [S.jsx(py, {}), S.jsx("span", { children: "Logout" })] })] }) : S.jsx("button", { className: "primary small", onClick: N, children: "Login" })] });
}
function yy() {
  const T = new URLSearchParams(location.search), [N, H] = P.useState(T.get("q") || ""), [o, R] = P.useState(T.get("tab") || "search"), [Y, el] = P.useState(T.get("filter") || "all"), [yl, U] = P.useState([]), [A, K] = P.useState(Mo), [C, cl] = P.useState([]), [J, bl] = P.useState(null), [il, Pl] = P.useState(null), [Xl, lt] = P.useState(false), [Nl, gl] = P.useState(""), [mt, xl] = P.useState(false);
  P.useEffect(() => {
    sy().then(({ user: _ }) => Pl(_)).catch((_) => gl(_.message));
  }, []), P.useEffect(() => {
    il ? Q() : (cl([]), bl(null), K(Mo()));
  }, [il]), P.useEffect(() => {
    il && J && Rl(J);
  }, [il, J]), P.useEffect(() => {
    il || dy(A);
  }, [A, il]);
  async function Q(_) {
    try {
      const { lists: f, default_list_id: d } = await Il("lists");
      cl(f), bl((g) => _ || (f.some((O) => O.id === g) ? g : d || f[0]?.id || null));
    } catch (f) {
      gl(f.message);
    }
  }
  async function Rl(_) {
    lt(true);
    try {
      const { items: f } = await Il("items", { query: { list_id: _ } });
      K(f.map(oy));
    } catch (f) {
      gl(f.message);
    } finally {
      lt(false);
    }
  }
  P.useEffect(() => {
    if (N.trim().length < 2) {
      U([]);
      return;
    }
    const _ = new AbortController(), f = setTimeout(async () => {
      lt(true), gl("");
      try {
        const { results: g } = await Il("search", { query: { q: N.trim() }, signal: _.signal });
        U(g || []);
      } catch (g) {
        g.name !== "AbortError" && gl(g.message);
      } finally {
        lt(false);
      }
    }, 280);
    return () => {
      clearTimeout(f), _.abort();
    };
  }, [N]), P.useEffect(() => {
    const _ = new URLSearchParams();
    N && _.set("q", N), o !== "search" && _.set("tab", o), Y !== "all" && _.set("filter", Y), history.replaceState(history.state || {}, "", `/${_.size ? `?${_}` : ""}`);
  }, [N, o, Y]);
  async function vt(_, targetList) {
    const f = { ..._, watched: false };
    if (!il) {
      K((g) => g.some((O) => It(O) === It(_)) ? g : [f, ...g]);
      return;
    }
    try {
      await Il("items", { method: "POST", body: { list_id: targetList || 0, media_id: _.id, media_type: _.type, title: _.title, year: _.year, poster: _.poster, overview: _.overview } }), await Rl(J), await Q(J);
      gl(`In „${C.find((l) => l.id === targetList)?.name || "watchlist"}“ gespeichert.`);
    } catch (g) {
      gl(g.message);
      throw g;
    }
  }
  async function Pt(_) {
    if (K((f) => f.filter((g) => It(g) !== It(_))), !!il) try {
      await Il("item", { method: "DELETE", body: { list_id: J, media_id: _.id, media_type: _.type } }), await Q(J);
    } catch (f) {
      gl(f.message);
    }
  }
  async function yt(_) {
    const f = !_.watched;
    if (K((g) => g.map((O) => It(O) === It(_) ? { ...O, watched: f } : O)), il) try {
      await Il("item", { method: "PATCH", body: { id: _.rowId, watched: f } });
    } catch (g) {
      gl(g.message);
    }
  }
  async function Ql() {
    const _ = prompt("Wie soll die neue Liste heißen?")?.trim();
    if (_) try {
      const { list: f } = await Il("lists", { method: "POST", body: { name: _ } });
      await Q(f.id), R("watchlist");
    } catch (f) {
      gl(f.message);
    }
  }
  async function xt() {
    const _ = C.find((g) => g.id === J);
    if (!_) return;
    const f = prompt("Neuer Name der Liste:", _.name)?.trim();
    if (!(!f || f === _.name)) try {
      await Il("list", { method: "PATCH", body: { id: J, name: f } }), await Q(J);
    } catch (g) {
      gl(g.message);
    }
  }
  async function _t() {
    const _ = C.find((f) => f.id === J);
    if (!(!_ || !confirm(`Liste „${_.name}“ wirklich löschen?`))) try {
      await Il("list", { method: "DELETE", body: { id: J } }), await Q();
    } catch (f) {
      gl(f.message);
    }
  }
  async function tt() {
    try {
      await Il("logout", { method: "POST", body: {} });
    } finally {
      Pl(null), R("search");
    }
  }
  const z = il && C.find((_) => _.id === J)?.item_count || A.length, M = (o === "search" ? yl : A).filter((_) => Y === "all" || _.type === Y), G = P.useMemo(() => new Set(A.map(It)), [A]), ul = (_) => {
    history.pushState({ detail: true }, "", `/title?type=${_.type}&id=${_.id}`), dispatchEvent(new PopStateEvent("popstate"));
  };
  return S.jsxs(No, { children: [S.jsx(vy, { user: il, onLogin: () => xl(true), onLogout: tt }), mt && S.jsx(Sy, { onClose: () => xl(false), onAuthenticated: Pl }), S.jsxs("section", { className: "hero-grid", children: [S.jsxs("div", { className: "intro", children: [S.jsx("p", { className: "eyebrow", children: "Streamen, leihen, kaufen" }), S.jsxs("h1", { children: ["Was willst du ", S.jsx("em", { children: "heute" }), " sehen?"] }), S.jsx("p", { children: il ? `Organisiere Filme und Serien in beliebig vielen benannten Listen. Aktuell geöffnet: ${C.find((_) => _.id === J)?.name || "Watchlist"}.` : "Finde Filme und Serien und speichere deine Watchlist lokal. Mit einem Account kannst du mehrere benannte Listen geräteübergreifend verwalten." })] }), S.jsxs("div", { className: "panel", children: [S.jsxs("div", { className: "tabs", children: [S.jsx("button", { className: o === "search" ? "active" : "", onClick: () => R("search"), children: "Entdecken" }), S.jsxs("button", { className: o === "watchlist" ? "active" : "", onClick: () => R("watchlist"), children: ["Listen ", S.jsx("b", { children: z })] })] }), il && S.jsxs("div", { className: "listbar", children: [S.jsx("select", { value: J || "", onChange: (_) => bl(Number(_.target.value)), "aria-label": "Liste auswählen", children: C.map((_) => S.jsxs("option", { value: _.id, children: [_.name, " (", _.item_count, ")"] }, _.id)) }), S.jsx("button", { onClick: Ql, children: "+ Neue Liste" }), S.jsx("button", { onClick: xt, disabled: C.find((l) => l.id === J)?.name === "watchlist", children: "Umbenennen" }), S.jsx("button", { onClick: _t, disabled: C.length < 2 || C.find((l) => l.id === J)?.name === "watchlist", children: "Löschen" })] }), o === "search" && S.jsxs("div", { className: "searchbox", children: [S.jsx("input", { value: N, onChange: (_) => H(_.target.value), placeholder: "Film oder Serie suchen ..." }), S.jsx("span", { children: "⌕" })] }), S.jsx("div", { className: "filters", children: [["all", "Alle"], ["movie", "Filme"], ["tv", "Serien"]].map(([_, f]) => S.jsx("button", { className: Y === _ ? "active" : "", onClick: () => el(_), children: f }, _)) }), Nl && S.jsx("p", { className: "notice", role: "status", children: Nl }), Xl && S.jsx("p", { className: "notice", children: "Lädt …" }), S.jsxs("div", { className: "cards", children: [M.map((_) => S.jsx(hy, { item: _, lists: C, inList: o === "watchlist" && G.has(It(_)), watchlist: o === "watchlist", onOpen: () => ul(_), onAdd: (id) => vt(_, id), onRemove: () => Pt(_), onWatched: () => yt(_) }, It(_))), !Xl && !M.length && S.jsx("p", { className: "notice", children: o === "watchlist" ? "Diese Liste ist leer." : N.length >= 2 ? "Keine Treffer gefunden." : "Gib einen Film oder eine Serie ein." })] })] })] })] });
}
function hy({ item: T, lists = [], inList: N, watchlist: H, onOpen: o, onAdd: R, onRemove: Y, onWatched: el }) {
  return S.jsxs("article", { className: `card ${H ? "watchlist-card" : ""} ${T.watched ? "watched" : ""}`, onClick: o, onKeyDown: (e) => {
    if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      o();
    }
  }, tabIndex: "0", children: [S.jsx("div", { className: "poster", children: T.poster && S.jsx("img", { src: T.poster, alt: "" }) }), S.jsxs("div", { className: "card-copy", children: [S.jsxs("div", { className: "card-head", children: [S.jsxs("div", { children: [S.jsx("h3", { children: T.title }), S.jsxs("p", { children: [T.year || "Unbekannt", " · ", T.type === "movie" ? "Film" : "Serie", T.watched ? " · Angesehen" : ""] })] }), S.jsxs("div", { className: "card-actions", children: [H && S.jsxs("button", { onClick: (yl) => {
    yl.stopPropagation(), el();
  }, className: `card-action watched-action ${T.watched ? "checked" : ""}`, children: [S.jsx(zy, { checked: T.watched }), S.jsx("span", { className: "action-label", children: T.watched ? "Angesehen" : "Als gesehen" })] }), S.jsxs("button", { className: `card-action ${N ? "remove-action" : "add-action"}`, onClick: (yl) => {
    yl.stopPropagation(), Promise.resolve(N ? Y() : R()).catch(() => {
    });
  }, children: [N ? S.jsx(Ey, {}) : S.jsx(Ty, {}), S.jsx("span", { className: "action-label", children: N ? "Entfernen" : "In watchlist" })] })] })] }), lists.length > 0 && S.jsx(MVListAssignment, { item: T, lists, onAdd: R }), T.overview && S.jsx("p", { className: "overview", children: T.overview })] }), S.jsx("span", { className: "providers", children: "Details und Streamingdienste ansehen →" })] });
}
function ry() {
  const T = new URLSearchParams(location.search), N = T.get("type"), H = T.get("id"), [o, R] = P.useState(null), [Y, el] = P.useState(""), [yl, U] = P.useState(true);
  return P.useEffect(() => {
    Il("title", { query: { type: N, id: H } }).then((A) => R(A.title)).catch((A) => el(A.message)).finally(() => U(false));
  }, [N, H]), S.jsxs(No, { narrow: true, children: [S.jsx("button", { className: "back", onClick: () => history.length > 1 ? history.back() : location.assign("/"), children: "← Zurück zur Suche" }), S.jsxs("section", { className: "detail", children: [yl && S.jsx("p", { className: "notice", children: "Titel wird geladen …" }), Y && S.jsx("p", { className: "notice error", children: Y }), o && S.jsxs(S.Fragment, { children: [o.backdrop && S.jsx("img", { className: "backdrop", src: o.backdrop, alt: "" }), S.jsxs("div", { className: "detail-grid", children: [S.jsx("div", { className: "detail-poster", children: o.poster && S.jsx("img", { src: o.poster, alt: "" }) }), S.jsxs("div", { className: "detail-copy", children: [S.jsxs("p", { className: "eyebrow", children: [o.type === "movie" ? "Film" : "Serie", " · ", o.year || "Unbekannt"] }), S.jsx("h1", { children: o.title }), S.jsx("div", { className: "genres", children: o.genres?.map((A) => S.jsx("span", { children: A }, A)) }), o.overview && S.jsx("p", { className: "detail-overview", children: o.overview }), S.jsx(MVDetailAssignment, { item: o }), S.jsx(gy, { providers: o.providers })] })] })] })] })] });
}
function gy({ providers: T = [] }) {
  return T.length ? S.jsxs("div", { className: "provider-groups", children: [S.jsx("h3", { children: "Verfügbar bei" }), S.jsx("div", { children: T.map((N, H) => S.jsxs("a", { className: "provider", href: N.link, target: "_blank", rel: "noreferrer", children: [S.jsx("b", { children: N.provider_name }), N.offer && S.jsx("span", { children: N.offer })] }, `${N.provider_name}-${H}`)) }), S.jsx("p", { className: "provider-note", children: "Verfügbarkeit bitte beim Anbieter prüfen." })] }) : S.jsx("p", { className: "notice", children: "Aktuell wurden keine deutschen Anbieterlinks gefunden." });
}
function Sy({ onClose: T, onAuthenticated: N }) {
  const [H, o] = P.useState("login"), [R, Y] = P.useState(""), [el, yl] = P.useState(""), [U, A] = P.useState(""), [K, C] = P.useState("");
  async function cl(J) {
    J.preventDefault(), C("");
    try {
      const bl = await Il(H === "signup" ? "signup" : "login", { method: "POST", body: H === "signup" ? { username: R, email: el, password: U } : { login: R, password: U } });
      N(bl.user), T();
    } catch (bl) {
      C(bl.message);
    }
  }
  return S.jsx("div", { className: "modal", children: S.jsxs("div", { className: "modal-card", children: [S.jsx("button", { className: "close", onClick: T, children: "×" }), S.jsx("p", { className: "eyebrow", children: "Streamfinder Account" }), S.jsx("h2", { children: H === "login" ? "Einloggen" : "Account erstellen" }), S.jsxs("div", { className: "auth-tabs", children: [S.jsx("button", { className: H === "login" ? "active" : "", onClick: () => o("login"), children: "Login" }), S.jsx("button", { className: H === "signup" ? "active" : "", onClick: () => o("signup"), children: "Neu" })] }), S.jsxs("form", { onSubmit: cl, children: [S.jsx("input", { value: R, onChange: (J) => Y(J.target.value), placeholder: H === "login" ? "Username oder E-Mail" : "Benutzername", required: true }), H === "signup" && S.jsx("input", { type: "email", value: el, onChange: (J) => yl(J.target.value), placeholder: "E-Mail", required: true }), S.jsx("input", { type: "password", value: U, onChange: (J) => A(J.target.value), placeholder: "Passwort", minLength: "8", required: true }), S.jsx("button", { className: "primary", type: "submit", children: H === "login" ? "Login" : "Registrieren" }), K && S.jsx("p", { className: "notice error", children: K })] })] }) });
}
function No({ children: T, narrow: N }) {
  const [H, o] = P.useState(null);
  return P.useEffect(() => {
    Il("stats").then((R) => o(R.users)).catch(() => {
    });
  }, []), S.jsxs("main", { className: N ? "page narrow" : "page", children: [S.jsx(by, {}), T, S.jsxs("footer", { children: [S.jsxs("div", { children: [S.jsx("img", { src: "/logo/mv_logo.svg", alt: "" }), S.jsx("b", { children: "StreamFinder" })] }), S.jsxs("nav", { children: [S.jsx("a", { href: "https://moritzvollmer.de/", children: "Portfolio" }), S.jsx("a", { href: "https://moritzvollmer.de/impressum/", children: "Impressum" }), S.jsx("a", { href: "https://moritzvollmer.de/datenschutz/", children: "Datenschutz" })] }), H !== null && S.jsxs("p", { className: "user-count", children: [H.toLocaleString("de-DE"), " registrierte Nutzer:innen"] }), S.jsx("p", { children: "Datenquellen: IMDb, Cinemeta und WatchHub. Anbieterinformationen können sich kurzfristig ändern." })] })] });
}
function by() {
  const [T, N] = P.useState({ x: 0, y: 0, interactive: false, ready: false });
  P.useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const o = (R) => N({ x: R.clientX, y: R.clientY, interactive: !!(R.target instanceof Element && R.target.closest("button,a,input,select,textarea")), ready: true });
    return addEventListener("pointermove", o, { passive: true }), () => removeEventListener("pointermove", o);
  }, []);
  const H = { "--mouse-x": T.ready ? `${T.x}px` : "50vw", "--mouse-y": T.ready ? `${T.y}px` : "50vh" };
  return S.jsxs(S.Fragment, { children: [S.jsx("div", { className: "mouse-glow", style: { ...H, "--mouse-glow-opacity": T.interactive ? 0.42 : 0.72 } }), S.jsx("div", { className: "cursor-dot", style: { ...H, "--cursor-size": T.interactive ? "20px" : "10px", "--cursor-color": T.interactive ? "rgba(255,95,162,.8)" : "#fb64b6" } })] });
}
function zy({ checked: T }) {
  return T ? S.jsx("svg", { className: "action-icon", viewBox: "0 0 24 24", children: S.jsx("path", { d: "m5 12 4 4L19 6" }) }) : S.jsxs("svg", { className: "action-icon", viewBox: "0 0 24 24", children: [S.jsx("path", { d: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" }), S.jsx("circle", { cx: "12", cy: "12", r: "2.5" })] });
}
function Ey() {
  return S.jsx("svg", { className: "action-icon", viewBox: "0 0 24 24", children: S.jsx("path", { d: "M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5" }) });
}
function Ty() {
  return S.jsx("svg", { className: "action-icon", viewBox: "0 0 24 24", children: S.jsx("path", { d: "M12 5v14M5 12h14" }) });
}
function Ay() {
  return S.jsx("svg", { className: "nav-icon hand-icon", viewBox: "0 0 24 24", children: S.jsx("path", { d: "M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v7M10 10.5V6a2 2 0 0 0-4 0v8M6 13V8a2 2 0 0 0-4 0v9a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8v-2a2 2 0 0 0-4 0v1" }) });
}
function py() {
  return S.jsx("svg", { className: "nav-icon", viewBox: "0 0 24 24", children: S.jsx("path", { d: "M10 17l5-5-5-5m5 5H3m11-9h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" }) });
}
fy.createRoot(document.getElementById("root")).render(S.jsx(P.StrictMode, { children: S.jsx(my, {}) }));
function MVListAssignment({ item, lists = [], onAdd }) {
  const [busy, setBusy] = P.useState(false);
  return S.jsxs("label", { className: "list-assignment", onClick: (e) => e.stopPropagation(), children: [
    S.jsx("span", { children: "Zu Liste hinzufügen" }),
    S.jsxs("select", { "aria-label": `Liste für ${item.title}`, value: "", disabled: busy, onChange: async (e) => {
      const id = Number(e.target.value);
      if (!id) return;
      setBusy(true);
      try {
        await onAdd(id);
      } catch {
      } finally {
        setBusy(false);
      }
    }, children: [
      S.jsx("option", { value: "", children: busy ? "Wird gespeichert …" : "Liste auswählen …" }),
      ...lists.map((list) => S.jsx("option", { value: list.id, children: list.name }, list.id))
    ] })
  ] });
}
function MVDetailAssignment({ item }) {
  const [lists, setLists] = P.useState([]), [message, setMessage] = P.useState(""), [error, setError] = P.useState(false), [busy, setBusy] = P.useState(false);
  P.useEffect(() => {
    let mounted = true;
    sy().then(async ({ user }) => {
      if (user) {
        const data = await Il("lists");
        if (mounted) setLists(data.lists);
      }
    }).catch(() => {
    });
    return () => {
      mounted = false;
    };
  }, []);
  async function add(listId) {
    setBusy(true);
    setMessage("");
    setError(false);
    try {
      const { user } = await sy();
      if (user) {
        await Il("items", { method: "POST", body: { list_id: listId || 0, media_id: item.id, media_type: item.type, title: item.title, year: item.year, poster: item.poster, overview: item.overview } });
      } else {
        const items = Mo();
        if (!items.some((i) => It(i) === It(item))) dy([{ ...item, watched: false }, ...items]);
      }
      setMessage(`In „${lists.find((l) => l.id === listId)?.name || "watchlist"}“ gespeichert.`);
    } catch (e) {
      setError(true);
      setMessage(e.message);
    } finally {
      setBusy(false);
    }
  }
  return S.jsxs("div", { className: "detail-assignment", children: [
    S.jsx("button", { className: "primary", disabled: busy, onClick: () => add(), children: busy ? "Wird gespeichert …" : "In watchlist speichern" }),
    lists.length > 0 && S.jsx(MVListAssignment, { item, lists, onAdd: add }),
    message && S.jsx("p", { role: "status", className: error ? "notice error" : "notice", children: message })
  ] });
}
