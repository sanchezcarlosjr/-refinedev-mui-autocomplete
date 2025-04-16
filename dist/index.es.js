import { useSelect as An } from "@refinedev/core";
var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var W, Jr;
function Rn() {
  if (Jr) return W;
  Jr = 1;
  function r() {
    this.__data__ = [], this.size = 0;
  }
  return W = r, W;
}
var z, Yr;
function tn() {
  if (Yr) return z;
  Yr = 1;
  function r(e, t) {
    return e === t || e !== e && t !== t;
  }
  return z = r, z;
}
var $, Qr;
function G() {
  if (Qr) return $;
  Qr = 1;
  var r = tn();
  function e(t, a) {
    for (var n = t.length; n--; )
      if (r(t[n][0], a))
        return n;
    return -1;
  }
  return $ = e, $;
}
var V, Xr;
function Tn() {
  if (Xr) return V;
  Xr = 1;
  var r = G(), e = Array.prototype, t = e.splice;
  function a(n) {
    var i = this.__data__, u = r(i, n);
    if (u < 0)
      return !1;
    var s = i.length - 1;
    return u == s ? i.pop() : t.call(i, u, 1), --this.size, !0;
  }
  return V = a, V;
}
var J, Zr;
function Sn() {
  if (Zr) return J;
  Zr = 1;
  var r = G();
  function e(t) {
    var a = this.__data__, n = r(a, t);
    return n < 0 ? void 0 : a[n][1];
  }
  return J = e, J;
}
var Y, et;
function Cn() {
  if (et) return Y;
  et = 1;
  var r = G();
  function e(t) {
    return r(this.__data__, t) > -1;
  }
  return Y = e, Y;
}
var Q, rt;
function On() {
  if (rt) return Q;
  rt = 1;
  var r = G();
  function e(t, a) {
    var n = this.__data__, i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, a])) : n[i][1] = a, this;
  }
  return Q = e, Q;
}
var X, tt;
function F() {
  if (tt) return X;
  tt = 1;
  var r = Rn(), e = Tn(), t = Sn(), a = Cn(), n = On();
  function i(u) {
    var s = -1, f = u == null ? 0 : u.length;
    for (this.clear(); ++s < f; ) {
      var o = u[s];
      this.set(o[0], o[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, X = i, X;
}
var Z, at;
function In() {
  if (at) return Z;
  at = 1;
  var r = F();
  function e() {
    this.__data__ = new r(), this.size = 0;
  }
  return Z = e, Z;
}
var ee, nt;
function mn() {
  if (nt) return ee;
  nt = 1;
  function r(e) {
    var t = this.__data__, a = t.delete(e);
    return this.size = t.size, a;
  }
  return ee = r, ee;
}
var re, it;
function wn() {
  if (it) return re;
  it = 1;
  function r(e) {
    return this.__data__.get(e);
  }
  return re = r, re;
}
var te, ut;
function jn() {
  if (ut) return te;
  ut = 1;
  function r(e) {
    return this.__data__.has(e);
  }
  return te = r, te;
}
var ae, st;
function an() {
  if (st) return ae;
  st = 1;
  var r = typeof M == "object" && M && M.Object === Object && M;
  return ae = r, ae;
}
var ne, ot;
function j() {
  if (ot) return ne;
  ot = 1;
  var r = an(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return ne = t, ne;
}
var ie, ft;
function N() {
  if (ft) return ie;
  ft = 1;
  var r = j(), e = r.Symbol;
  return ie = e, ie;
}
var ue, ct;
function Pn() {
  if (ct) return ue;
  ct = 1;
  var r = N(), e = Object.prototype, t = e.hasOwnProperty, a = e.toString, n = r ? r.toStringTag : void 0;
  function i(u) {
    var s = t.call(u, n), f = u[n];
    try {
      u[n] = void 0;
      var o = !0;
    } catch {
    }
    var c = a.call(u);
    return o && (s ? u[n] = f : delete u[n]), c;
  }
  return ue = i, ue;
}
var se, vt;
function xn() {
  if (vt) return se;
  vt = 1;
  var r = Object.prototype, e = r.toString;
  function t(a) {
    return e.call(a);
  }
  return se = t, se;
}
var oe, _t;
function H() {
  if (_t) return oe;
  _t = 1;
  var r = N(), e = Pn(), t = xn(), a = "[object Null]", n = "[object Undefined]", i = r ? r.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? n : a : i && i in Object(s) ? e(s) : t(s);
  }
  return oe = u, oe;
}
var fe, lt;
function nn() {
  if (lt) return fe;
  lt = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return fe = r, fe;
}
var ce, ht;
function un() {
  if (ht) return ce;
  ht = 1;
  var r = H(), e = nn(), t = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function u(s) {
    if (!e(s))
      return !1;
    var f = r(s);
    return f == a || f == n || f == t || f == i;
  }
  return ce = u, ce;
}
var ve, dt;
function En() {
  if (dt) return ve;
  dt = 1;
  var r = j(), e = r["__core-js_shared__"];
  return ve = e, ve;
}
var _e, pt;
function Ln() {
  if (pt) return _e;
  pt = 1;
  var r = En(), e = function() {
    var a = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }();
  function t(a) {
    return !!e && e in a;
  }
  return _e = t, _e;
}
var le, gt;
function sn() {
  if (gt) return le;
  gt = 1;
  var r = Function.prototype, e = r.toString;
  function t(a) {
    if (a != null) {
      try {
        return e.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  return le = t, le;
}
var he, yt;
function Dn() {
  if (yt) return he;
  yt = 1;
  var r = un(), e = Ln(), t = nn(), a = sn(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, u = Function.prototype, s = Object.prototype, f = u.toString, o = s.hasOwnProperty, c = RegExp(
    "^" + f.call(o).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function _(b) {
    if (!t(b) || e(b))
      return !1;
    var R = r(b) ? c : i;
    return R.test(a(b));
  }
  return he = _, he;
}
var de, qt;
function Mn() {
  if (qt) return de;
  qt = 1;
  function r(e, t) {
    return e == null ? void 0 : e[t];
  }
  return de = r, de;
}
var pe, bt;
function P() {
  if (bt) return pe;
  bt = 1;
  var r = Dn(), e = Mn();
  function t(a, n) {
    var i = e(a, n);
    return r(i) ? i : void 0;
  }
  return pe = t, pe;
}
var ge, At;
function $r() {
  if (At) return ge;
  At = 1;
  var r = P(), e = j(), t = r(e, "Map");
  return ge = t, ge;
}
var ye, Rt;
function U() {
  if (Rt) return ye;
  Rt = 1;
  var r = P(), e = r(Object, "create");
  return ye = e, ye;
}
var qe, Tt;
function Gn() {
  if (Tt) return qe;
  Tt = 1;
  var r = U();
  function e() {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  }
  return qe = e, qe;
}
var be, St;
function Fn() {
  if (St) return be;
  St = 1;
  function r(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  return be = r, be;
}
var Ae, Ct;
function Nn() {
  if (Ct) return Ae;
  Ct = 1;
  var r = U(), e = "__lodash_hash_undefined__", t = Object.prototype, a = t.hasOwnProperty;
  function n(i) {
    var u = this.__data__;
    if (r) {
      var s = u[i];
      return s === e ? void 0 : s;
    }
    return a.call(u, i) ? u[i] : void 0;
  }
  return Ae = n, Ae;
}
var Re, Ot;
function Hn() {
  if (Ot) return Re;
  Ot = 1;
  var r = U(), e = Object.prototype, t = e.hasOwnProperty;
  function a(n) {
    var i = this.__data__;
    return r ? i[n] !== void 0 : t.call(i, n);
  }
  return Re = a, Re;
}
var Te, It;
function Un() {
  if (It) return Te;
  It = 1;
  var r = U(), e = "__lodash_hash_undefined__";
  function t(a, n) {
    var i = this.__data__;
    return this.size += this.has(a) ? 0 : 1, i[a] = r && n === void 0 ? e : n, this;
  }
  return Te = t, Te;
}
var Se, mt;
function Kn() {
  if (mt) return Se;
  mt = 1;
  var r = Gn(), e = Fn(), t = Nn(), a = Hn(), n = Un();
  function i(u) {
    var s = -1, f = u == null ? 0 : u.length;
    for (this.clear(); ++s < f; ) {
      var o = u[s];
      this.set(o[0], o[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, Se = i, Se;
}
var Ce, wt;
function Bn() {
  if (wt) return Ce;
  wt = 1;
  var r = Kn(), e = F(), t = $r();
  function a() {
    this.size = 0, this.__data__ = {
      hash: new r(),
      map: new (t || e)(),
      string: new r()
    };
  }
  return Ce = a, Ce;
}
var Oe, jt;
function kn() {
  if (jt) return Oe;
  jt = 1;
  function r(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  return Oe = r, Oe;
}
var Ie, Pt;
function K() {
  if (Pt) return Ie;
  Pt = 1;
  var r = kn();
  function e(t, a) {
    var n = t.__data__;
    return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
  }
  return Ie = e, Ie;
}
var me, xt;
function Wn() {
  if (xt) return me;
  xt = 1;
  var r = K();
  function e(t) {
    var a = r(this, t).delete(t);
    return this.size -= a ? 1 : 0, a;
  }
  return me = e, me;
}
var we, Et;
function zn() {
  if (Et) return we;
  Et = 1;
  var r = K();
  function e(t) {
    return r(this, t).get(t);
  }
  return we = e, we;
}
var je, Lt;
function $n() {
  if (Lt) return je;
  Lt = 1;
  var r = K();
  function e(t) {
    return r(this, t).has(t);
  }
  return je = e, je;
}
var Pe, Dt;
function Vn() {
  if (Dt) return Pe;
  Dt = 1;
  var r = K();
  function e(t, a) {
    var n = r(this, t), i = n.size;
    return n.set(t, a), this.size += n.size == i ? 0 : 1, this;
  }
  return Pe = e, Pe;
}
var xe, Mt;
function on() {
  if (Mt) return xe;
  Mt = 1;
  var r = Bn(), e = Wn(), t = zn(), a = $n(), n = Vn();
  function i(u) {
    var s = -1, f = u == null ? 0 : u.length;
    for (this.clear(); ++s < f; ) {
      var o = u[s];
      this.set(o[0], o[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, xe = i, xe;
}
var Ee, Gt;
function Jn() {
  if (Gt) return Ee;
  Gt = 1;
  var r = F(), e = $r(), t = on(), a = 200;
  function n(i, u) {
    var s = this.__data__;
    if (s instanceof r) {
      var f = s.__data__;
      if (!e || f.length < a - 1)
        return f.push([i, u]), this.size = ++s.size, this;
      s = this.__data__ = new t(f);
    }
    return s.set(i, u), this.size = s.size, this;
  }
  return Ee = n, Ee;
}
var Le, Ft;
function Yn() {
  if (Ft) return Le;
  Ft = 1;
  var r = F(), e = In(), t = mn(), a = wn(), n = jn(), i = Jn();
  function u(s) {
    var f = this.__data__ = new r(s);
    this.size = f.size;
  }
  return u.prototype.clear = e, u.prototype.delete = t, u.prototype.get = a, u.prototype.has = n, u.prototype.set = i, Le = u, Le;
}
var De, Nt;
function Qn() {
  if (Nt) return De;
  Nt = 1;
  var r = "__lodash_hash_undefined__";
  function e(t) {
    return this.__data__.set(t, r), this;
  }
  return De = e, De;
}
var Me, Ht;
function Xn() {
  if (Ht) return Me;
  Ht = 1;
  function r(e) {
    return this.__data__.has(e);
  }
  return Me = r, Me;
}
var Ge, Ut;
function fn() {
  if (Ut) return Ge;
  Ut = 1;
  var r = on(), e = Qn(), t = Xn();
  function a(n) {
    var i = -1, u = n == null ? 0 : n.length;
    for (this.__data__ = new r(); ++i < u; )
      this.add(n[i]);
  }
  return a.prototype.add = a.prototype.push = e, a.prototype.has = t, Ge = a, Ge;
}
var Fe, Kt;
function Zn() {
  if (Kt) return Fe;
  Kt = 1;
  function r(e, t) {
    for (var a = -1, n = e == null ? 0 : e.length; ++a < n; )
      if (t(e[a], a, e))
        return !0;
    return !1;
  }
  return Fe = r, Fe;
}
var Ne, Bt;
function cn() {
  if (Bt) return Ne;
  Bt = 1;
  function r(e, t) {
    return e.has(t);
  }
  return Ne = r, Ne;
}
var He, kt;
function vn() {
  if (kt) return He;
  kt = 1;
  var r = fn(), e = Zn(), t = cn(), a = 1, n = 2;
  function i(u, s, f, o, c, _) {
    var b = f & a, R = u.length, T = s.length;
    if (R != T && !(b && T > R))
      return !1;
    var g = _.get(u), l = _.get(s);
    if (g && l)
      return g == s && l == u;
    var y = -1, v = !0, A = f & n ? new r() : void 0;
    for (_.set(u, s), _.set(s, u); ++y < R; ) {
      var h = u[y], S = s[y];
      if (o)
        var q = b ? o(S, h, y, s, u, _) : o(h, S, y, u, s, _);
      if (q !== void 0) {
        if (q)
          continue;
        v = !1;
        break;
      }
      if (A) {
        if (!e(s, function(d, C) {
          if (!t(A, C) && (h === d || c(h, d, f, o, _)))
            return A.push(C);
        })) {
          v = !1;
          break;
        }
      } else if (!(h === S || c(h, S, f, o, _))) {
        v = !1;
        break;
      }
    }
    return _.delete(u), _.delete(s), v;
  }
  return He = i, He;
}
var Ue, Wt;
function ei() {
  if (Wt) return Ue;
  Wt = 1;
  var r = j(), e = r.Uint8Array;
  return Ue = e, Ue;
}
var Ke, zt;
function ri() {
  if (zt) return Ke;
  zt = 1;
  function r(e) {
    var t = -1, a = Array(e.size);
    return e.forEach(function(n, i) {
      a[++t] = [i, n];
    }), a;
  }
  return Ke = r, Ke;
}
var Be, $t;
function Vr() {
  if ($t) return Be;
  $t = 1;
  function r(e) {
    var t = -1, a = Array(e.size);
    return e.forEach(function(n) {
      a[++t] = n;
    }), a;
  }
  return Be = r, Be;
}
var ke, Vt;
function ti() {
  if (Vt) return ke;
  Vt = 1;
  var r = N(), e = ei(), t = tn(), a = vn(), n = ri(), i = Vr(), u = 1, s = 2, f = "[object Boolean]", o = "[object Date]", c = "[object Error]", _ = "[object Map]", b = "[object Number]", R = "[object RegExp]", T = "[object Set]", g = "[object String]", l = "[object Symbol]", y = "[object ArrayBuffer]", v = "[object DataView]", A = r ? r.prototype : void 0, h = A ? A.valueOf : void 0;
  function S(q, d, C, O, m, p, w) {
    switch (C) {
      case v:
        if (q.byteLength != d.byteLength || q.byteOffset != d.byteOffset)
          return !1;
        q = q.buffer, d = d.buffer;
      case y:
        return !(q.byteLength != d.byteLength || !p(new e(q), new e(d)));
      case f:
      case o:
      case b:
        return t(+q, +d);
      case c:
        return q.name == d.name && q.message == d.message;
      case R:
      case g:
        return q == d + "";
      case _:
        var I = n;
      case T:
        var k = O & u;
        if (I || (I = i), q.size != d.size && !k)
          return !1;
        var D = w.get(q);
        if (D)
          return D == d;
        O |= s, w.set(q, d);
        var bn = a(I(q), I(d), O, m, p, w);
        return w.delete(q), bn;
      case l:
        if (h)
          return h.call(q) == h.call(d);
    }
    return !1;
  }
  return ke = S, ke;
}
var We, Jt;
function _n() {
  if (Jt) return We;
  Jt = 1;
  function r(e, t) {
    for (var a = -1, n = t.length, i = e.length; ++a < n; )
      e[i + a] = t[a];
    return e;
  }
  return We = r, We;
}
var ze, Yt;
function B() {
  if (Yt) return ze;
  Yt = 1;
  var r = Array.isArray;
  return ze = r, ze;
}
var $e, Qt;
function ai() {
  if (Qt) return $e;
  Qt = 1;
  var r = _n(), e = B();
  function t(a, n, i) {
    var u = n(a);
    return e(a) ? u : r(u, i(a));
  }
  return $e = t, $e;
}
var Ve, Xt;
function ni() {
  if (Xt) return Ve;
  Xt = 1;
  function r(e, t) {
    for (var a = -1, n = e == null ? 0 : e.length, i = 0, u = []; ++a < n; ) {
      var s = e[a];
      t(s, a, e) && (u[i++] = s);
    }
    return u;
  }
  return Ve = r, Ve;
}
var Je, Zt;
function ii() {
  if (Zt) return Je;
  Zt = 1;
  function r() {
    return [];
  }
  return Je = r, Je;
}
var Ye, ea;
function ui() {
  if (ea) return Ye;
  ea = 1;
  var r = ni(), e = ii(), t = Object.prototype, a = t.propertyIsEnumerable, n = Object.getOwnPropertySymbols, i = n ? function(u) {
    return u == null ? [] : (u = Object(u), r(n(u), function(s) {
      return a.call(u, s);
    }));
  } : e;
  return Ye = i, Ye;
}
var Qe, ra;
function si() {
  if (ra) return Qe;
  ra = 1;
  function r(e, t) {
    for (var a = -1, n = Array(e); ++a < e; )
      n[a] = t(a);
    return n;
  }
  return Qe = r, Qe;
}
var Xe, ta;
function L() {
  if (ta) return Xe;
  ta = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return Xe = r, Xe;
}
var Ze, aa;
function oi() {
  if (aa) return Ze;
  aa = 1;
  var r = H(), e = L(), t = "[object Arguments]";
  function a(n) {
    return e(n) && r(n) == t;
  }
  return Ze = a, Ze;
}
var er, na;
function ln() {
  if (na) return er;
  na = 1;
  var r = oi(), e = L(), t = Object.prototype, a = t.hasOwnProperty, n = t.propertyIsEnumerable, i = r(/* @__PURE__ */ function() {
    return arguments;
  }()) ? r : function(u) {
    return e(u) && a.call(u, "callee") && !n.call(u, "callee");
  };
  return er = i, er;
}
var x = { exports: {} }, rr, ia;
function fi() {
  if (ia) return rr;
  ia = 1;
  function r() {
    return !1;
  }
  return rr = r, rr;
}
x.exports;
var ua;
function hn() {
  return ua || (ua = 1, function(r, e) {
    var t = j(), a = fi(), n = e && !e.nodeType && e, i = n && !0 && r && !r.nodeType && r, u = i && i.exports === n, s = u ? t.Buffer : void 0, f = s ? s.isBuffer : void 0, o = f || a;
    r.exports = o;
  }(x, x.exports)), x.exports;
}
var tr, sa;
function ci() {
  if (sa) return tr;
  sa = 1;
  var r = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function t(a, n) {
    var i = typeof a;
    return n = n ?? r, !!n && (i == "number" || i != "symbol" && e.test(a)) && a > -1 && a % 1 == 0 && a < n;
  }
  return tr = t, tr;
}
var ar, oa;
function dn() {
  if (oa) return ar;
  oa = 1;
  var r = 9007199254740991;
  function e(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= r;
  }
  return ar = e, ar;
}
var nr, fa;
function vi() {
  if (fa) return nr;
  fa = 1;
  var r = H(), e = dn(), t = L(), a = "[object Arguments]", n = "[object Array]", i = "[object Boolean]", u = "[object Date]", s = "[object Error]", f = "[object Function]", o = "[object Map]", c = "[object Number]", _ = "[object Object]", b = "[object RegExp]", R = "[object Set]", T = "[object String]", g = "[object WeakMap]", l = "[object ArrayBuffer]", y = "[object DataView]", v = "[object Float32Array]", A = "[object Float64Array]", h = "[object Int8Array]", S = "[object Int16Array]", q = "[object Int32Array]", d = "[object Uint8Array]", C = "[object Uint8ClampedArray]", O = "[object Uint16Array]", m = "[object Uint32Array]", p = {};
  p[v] = p[A] = p[h] = p[S] = p[q] = p[d] = p[C] = p[O] = p[m] = !0, p[a] = p[n] = p[l] = p[i] = p[y] = p[u] = p[s] = p[f] = p[o] = p[c] = p[_] = p[b] = p[R] = p[T] = p[g] = !1;
  function w(I) {
    return t(I) && e(I.length) && !!p[r(I)];
  }
  return nr = w, nr;
}
var ir, ca;
function _i() {
  if (ca) return ir;
  ca = 1;
  function r(e) {
    return function(t) {
      return e(t);
    };
  }
  return ir = r, ir;
}
var E = { exports: {} };
E.exports;
var va;
function li() {
  return va || (va = 1, function(r, e) {
    var t = an(), a = e && !e.nodeType && e, n = a && !0 && r && !r.nodeType && r, i = n && n.exports === a, u = i && t.process, s = function() {
      try {
        var f = n && n.require && n.require("util").types;
        return f || u && u.binding && u.binding("util");
      } catch {
      }
    }();
    r.exports = s;
  }(E, E.exports)), E.exports;
}
var ur, _a;
function pn() {
  if (_a) return ur;
  _a = 1;
  var r = vi(), e = _i(), t = li(), a = t && t.isTypedArray, n = a ? e(a) : r;
  return ur = n, ur;
}
var sr, la;
function hi() {
  if (la) return sr;
  la = 1;
  var r = si(), e = ln(), t = B(), a = hn(), n = ci(), i = pn(), u = Object.prototype, s = u.hasOwnProperty;
  function f(o, c) {
    var _ = t(o), b = !_ && e(o), R = !_ && !b && a(o), T = !_ && !b && !R && i(o), g = _ || b || R || T, l = g ? r(o.length, String) : [], y = l.length;
    for (var v in o)
      (c || s.call(o, v)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
      (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      R && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      T && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
      n(v, y))) && l.push(v);
    return l;
  }
  return sr = f, sr;
}
var or, ha;
function di() {
  if (ha) return or;
  ha = 1;
  var r = Object.prototype;
  function e(t) {
    var a = t && t.constructor, n = typeof a == "function" && a.prototype || r;
    return t === n;
  }
  return or = e, or;
}
var fr, da;
function pi() {
  if (da) return fr;
  da = 1;
  function r(e, t) {
    return function(a) {
      return e(t(a));
    };
  }
  return fr = r, fr;
}
var cr, pa;
function gi() {
  if (pa) return cr;
  pa = 1;
  var r = pi(), e = r(Object.keys, Object);
  return cr = e, cr;
}
var vr, ga;
function yi() {
  if (ga) return vr;
  ga = 1;
  var r = di(), e = gi(), t = Object.prototype, a = t.hasOwnProperty;
  function n(i) {
    if (!r(i))
      return e(i);
    var u = [];
    for (var s in Object(i))
      a.call(i, s) && s != "constructor" && u.push(s);
    return u;
  }
  return vr = n, vr;
}
var _r, ya;
function gn() {
  if (ya) return _r;
  ya = 1;
  var r = un(), e = dn();
  function t(a) {
    return a != null && e(a.length) && !r(a);
  }
  return _r = t, _r;
}
var lr, qa;
function qi() {
  if (qa) return lr;
  qa = 1;
  var r = hi(), e = yi(), t = gn();
  function a(n) {
    return t(n) ? r(n) : e(n);
  }
  return lr = a, lr;
}
var hr, ba;
function bi() {
  if (ba) return hr;
  ba = 1;
  var r = ai(), e = ui(), t = qi();
  function a(n) {
    return r(n, t, e);
  }
  return hr = a, hr;
}
var dr, Aa;
function Ai() {
  if (Aa) return dr;
  Aa = 1;
  var r = bi(), e = 1, t = Object.prototype, a = t.hasOwnProperty;
  function n(i, u, s, f, o, c) {
    var _ = s & e, b = r(i), R = b.length, T = r(u), g = T.length;
    if (R != g && !_)
      return !1;
    for (var l = R; l--; ) {
      var y = b[l];
      if (!(_ ? y in u : a.call(u, y)))
        return !1;
    }
    var v = c.get(i), A = c.get(u);
    if (v && A)
      return v == u && A == i;
    var h = !0;
    c.set(i, u), c.set(u, i);
    for (var S = _; ++l < R; ) {
      y = b[l];
      var q = i[y], d = u[y];
      if (f)
        var C = _ ? f(d, q, y, u, i, c) : f(q, d, y, i, u, c);
      if (!(C === void 0 ? q === d || o(q, d, s, f, c) : C)) {
        h = !1;
        break;
      }
      S || (S = y == "constructor");
    }
    if (h && !S) {
      var O = i.constructor, m = u.constructor;
      O != m && "constructor" in i && "constructor" in u && !(typeof O == "function" && O instanceof O && typeof m == "function" && m instanceof m) && (h = !1);
    }
    return c.delete(i), c.delete(u), h;
  }
  return dr = n, dr;
}
var pr, Ra;
function Ri() {
  if (Ra) return pr;
  Ra = 1;
  var r = P(), e = j(), t = r(e, "DataView");
  return pr = t, pr;
}
var gr, Ta;
function Ti() {
  if (Ta) return gr;
  Ta = 1;
  var r = P(), e = j(), t = r(e, "Promise");
  return gr = t, gr;
}
var yr, Sa;
function yn() {
  if (Sa) return yr;
  Sa = 1;
  var r = P(), e = j(), t = r(e, "Set");
  return yr = t, yr;
}
var qr, Ca;
function Si() {
  if (Ca) return qr;
  Ca = 1;
  var r = P(), e = j(), t = r(e, "WeakMap");
  return qr = t, qr;
}
var br, Oa;
function Ci() {
  if (Oa) return br;
  Oa = 1;
  var r = Ri(), e = $r(), t = Ti(), a = yn(), n = Si(), i = H(), u = sn(), s = "[object Map]", f = "[object Object]", o = "[object Promise]", c = "[object Set]", _ = "[object WeakMap]", b = "[object DataView]", R = u(r), T = u(e), g = u(t), l = u(a), y = u(n), v = i;
  return (r && v(new r(new ArrayBuffer(1))) != b || e && v(new e()) != s || t && v(t.resolve()) != o || a && v(new a()) != c || n && v(new n()) != _) && (v = function(A) {
    var h = i(A), S = h == f ? A.constructor : void 0, q = S ? u(S) : "";
    if (q)
      switch (q) {
        case R:
          return b;
        case T:
          return s;
        case g:
          return o;
        case l:
          return c;
        case y:
          return _;
      }
    return h;
  }), br = v, br;
}
var Ar, Ia;
function Oi() {
  if (Ia) return Ar;
  Ia = 1;
  var r = Yn(), e = vn(), t = ti(), a = Ai(), n = Ci(), i = B(), u = hn(), s = pn(), f = 1, o = "[object Arguments]", c = "[object Array]", _ = "[object Object]", b = Object.prototype, R = b.hasOwnProperty;
  function T(g, l, y, v, A, h) {
    var S = i(g), q = i(l), d = S ? c : n(g), C = q ? c : n(l);
    d = d == o ? _ : d, C = C == o ? _ : C;
    var O = d == _, m = C == _, p = d == C;
    if (p && u(g)) {
      if (!u(l))
        return !1;
      S = !0, O = !1;
    }
    if (p && !O)
      return h || (h = new r()), S || s(g) ? e(g, l, y, v, A, h) : t(g, l, d, y, v, A, h);
    if (!(y & f)) {
      var w = O && R.call(g, "__wrapped__"), I = m && R.call(l, "__wrapped__");
      if (w || I) {
        var k = w ? g.value() : g, D = I ? l.value() : l;
        return h || (h = new r()), A(k, D, y, v, h);
      }
    }
    return p ? (h || (h = new r()), a(g, l, y, v, A, h)) : !1;
  }
  return Ar = T, Ar;
}
var Rr, ma;
function Ii() {
  if (ma) return Rr;
  ma = 1;
  var r = Oi(), e = L();
  function t(a, n, i, u, s) {
    return a === n ? !0 : a == null || n == null || !e(a) && !e(n) ? a !== a && n !== n : r(a, n, i, u, t, s);
  }
  return Rr = t, Rr;
}
var Tr, wa;
function mi() {
  if (wa) return Tr;
  wa = 1;
  var r = Ii();
  function e(t, a) {
    return r(t, a);
  }
  return Tr = e, Tr;
}
var wi = mi();
const ja = /* @__PURE__ */ rn(wi);
var Sr, Pa;
function ji() {
  if (Pa) return Sr;
  Pa = 1;
  var r = N(), e = ln(), t = B(), a = r ? r.isConcatSpreadable : void 0;
  function n(i) {
    return t(i) || e(i) || !!(a && i && i[a]);
  }
  return Sr = n, Sr;
}
var Cr, xa;
function Pi() {
  if (xa) return Cr;
  xa = 1;
  var r = _n(), e = ji();
  function t(a, n, i, u, s) {
    var f = -1, o = a.length;
    for (i || (i = e), s || (s = []); ++f < o; ) {
      var c = a[f];
      n > 0 && i(c) ? n > 1 ? t(c, n - 1, i, u, s) : r(s, c) : u || (s[s.length] = c);
    }
    return s;
  }
  return Cr = t, Cr;
}
var Or, Ea;
function qn() {
  if (Ea) return Or;
  Ea = 1;
  function r(e) {
    return e;
  }
  return Or = r, Or;
}
var Ir, La;
function xi() {
  if (La) return Ir;
  La = 1;
  function r(e, t, a) {
    switch (a.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, a[0]);
      case 2:
        return e.call(t, a[0], a[1]);
      case 3:
        return e.call(t, a[0], a[1], a[2]);
    }
    return e.apply(t, a);
  }
  return Ir = r, Ir;
}
var mr, Da;
function Ei() {
  if (Da) return mr;
  Da = 1;
  var r = xi(), e = Math.max;
  function t(a, n, i) {
    return n = e(n === void 0 ? a.length - 1 : n, 0), function() {
      for (var u = arguments, s = -1, f = e(u.length - n, 0), o = Array(f); ++s < f; )
        o[s] = u[n + s];
      s = -1;
      for (var c = Array(n + 1); ++s < n; )
        c[s] = u[s];
      return c[n] = i(o), r(a, this, c);
    };
  }
  return mr = t, mr;
}
var wr, Ma;
function Li() {
  if (Ma) return wr;
  Ma = 1;
  function r(e) {
    return function() {
      return e;
    };
  }
  return wr = r, wr;
}
var jr, Ga;
function Di() {
  if (Ga) return jr;
  Ga = 1;
  var r = P(), e = function() {
    try {
      var t = r(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return jr = e, jr;
}
var Pr, Fa;
function Mi() {
  if (Fa) return Pr;
  Fa = 1;
  var r = Li(), e = Di(), t = qn(), a = e ? function(n, i) {
    return e(n, "toString", {
      configurable: !0,
      enumerable: !1,
      value: r(i),
      writable: !0
    });
  } : t;
  return Pr = a, Pr;
}
var xr, Na;
function Gi() {
  if (Na) return xr;
  Na = 1;
  var r = 800, e = 16, t = Date.now;
  function a(n) {
    var i = 0, u = 0;
    return function() {
      var s = t(), f = e - (s - u);
      if (u = s, f > 0) {
        if (++i >= r)
          return arguments[0];
      } else
        i = 0;
      return n.apply(void 0, arguments);
    };
  }
  return xr = a, xr;
}
var Er, Ha;
function Fi() {
  if (Ha) return Er;
  Ha = 1;
  var r = Mi(), e = Gi(), t = e(r);
  return Er = t, Er;
}
var Lr, Ua;
function Ni() {
  if (Ua) return Lr;
  Ua = 1;
  var r = qn(), e = Ei(), t = Fi();
  function a(n, i) {
    return t(e(n, i, r), n + "");
  }
  return Lr = a, Lr;
}
var Dr, Ka;
function Hi() {
  if (Ka) return Dr;
  Ka = 1;
  function r(e, t, a, n) {
    for (var i = e.length, u = a + (n ? 1 : -1); n ? u-- : ++u < i; )
      if (t(e[u], u, e))
        return u;
    return -1;
  }
  return Dr = r, Dr;
}
var Mr, Ba;
function Ui() {
  if (Ba) return Mr;
  Ba = 1;
  function r(e) {
    return e !== e;
  }
  return Mr = r, Mr;
}
var Gr, ka;
function Ki() {
  if (ka) return Gr;
  ka = 1;
  function r(e, t, a) {
    for (var n = a - 1, i = e.length; ++n < i; )
      if (e[n] === t)
        return n;
    return -1;
  }
  return Gr = r, Gr;
}
var Fr, Wa;
function Bi() {
  if (Wa) return Fr;
  Wa = 1;
  var r = Hi(), e = Ui(), t = Ki();
  function a(n, i, u) {
    return i === i ? t(n, i, u) : r(n, e, u);
  }
  return Fr = a, Fr;
}
var Nr, za;
function ki() {
  if (za) return Nr;
  za = 1;
  var r = Bi();
  function e(t, a) {
    var n = t == null ? 0 : t.length;
    return !!n && r(t, a, 0) > -1;
  }
  return Nr = e, Nr;
}
var Hr, $a;
function Wi() {
  if ($a) return Hr;
  $a = 1;
  function r(e, t, a) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
      if (a(t, e[n]))
        return !0;
    return !1;
  }
  return Hr = r, Hr;
}
var Ur, Va;
function zi() {
  if (Va) return Ur;
  Va = 1;
  function r() {
  }
  return Ur = r, Ur;
}
var Kr, Ja;
function $i() {
  if (Ja) return Kr;
  Ja = 1;
  var r = yn(), e = zi(), t = Vr(), a = 1 / 0, n = r && 1 / t(new r([, -0]))[1] == a ? function(i) {
    return new r(i);
  } : e;
  return Kr = n, Kr;
}
var Br, Ya;
function Vi() {
  if (Ya) return Br;
  Ya = 1;
  var r = fn(), e = ki(), t = Wi(), a = cn(), n = $i(), i = Vr(), u = 200;
  function s(f, o, c) {
    var _ = -1, b = e, R = f.length, T = !0, g = [], l = g;
    if (c)
      T = !1, b = t;
    else if (R >= u) {
      var y = o ? null : n(f);
      if (y)
        return i(y);
      T = !1, b = a, l = new r();
    } else
      l = o ? [] : g;
    e:
      for (; ++_ < R; ) {
        var v = f[_], A = o ? o(v) : v;
        if (v = c || v !== 0 ? v : 0, T && A === A) {
          for (var h = l.length; h--; )
            if (l[h] === A)
              continue e;
          o && l.push(A), g.push(v);
        } else b(l, A, c) || (l !== g && l.push(A), g.push(v));
      }
    return g;
  }
  return Br = s, Br;
}
var kr, Qa;
function Ji() {
  if (Qa) return kr;
  Qa = 1;
  var r = gn(), e = L();
  function t(a) {
    return e(a) && r(a);
  }
  return kr = t, kr;
}
var Wr, Xa;
function Yi() {
  if (Xa) return Wr;
  Xa = 1;
  function r(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0;
  }
  return Wr = r, Wr;
}
var zr, Za;
function Qi() {
  if (Za) return zr;
  Za = 1;
  var r = Pi(), e = Ni(), t = Vi(), a = Ji(), n = Yi(), i = e(function(u) {
    var s = n(u);
    return s = typeof s == "function" ? s : void 0, t(r(u, 1, a, !0), void 0, s);
  });
  return zr = i, zr;
}
var Xi = Qi();
const en = /* @__PURE__ */ rn(Xi), eu = (r) => {
  var i, u, s, f;
  const { query: e, defaultValueQuery: t, onSearch: a, overtime: n } = An(r);
  return {
    autocompleteProps: {
      options: r.selectedOptionsOrder === "selected-first" ? en(
        ((i = t.data) == null ? void 0 : i.data) || [],
        ((u = e.data) == null ? void 0 : u.data) || [],
        ja
      ) : en(
        ((s = e.data) == null ? void 0 : s.data) || [],
        ((f = t.data) == null ? void 0 : f.data) || [],
        ja
      ),
      loading: e.isFetching || t.isFetching,
      onInputChange: (o, c) => {
        (o == null ? void 0 : o.type) === "change" ? a(c) : (o == null ? void 0 : o.type) === "click" && a("");
      },
      filterOptions: (o) => o
    },
    onSearch: a,
    query: e,
    defaultValueQuery: t,
    queryResult: e,
    defaultValueQueryResult: t,
    overtime: n
  };
};
export {
  eu as useAutocomplete
};
