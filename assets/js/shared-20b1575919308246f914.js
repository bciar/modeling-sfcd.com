! function(t) {
    function e(n) { if (i[n]) return i[n].exports; var r = i[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(o, s) { for (var a, u, c = 0, l = []; c < o.length; c++) u = o[c], r[u] && l.push.apply(l, r[u]), r[u] = 0; for (a in s) t[a] = s[a]; for (n && n(o, s); l.length;) l.shift().call(null, e); if (s[0]) return i[0] = 0, e(0) };
    var i = {},
        r = { 5: 0 };
    e.e = function(t, n) {
        if (0 === r[t]) return n.call(null, e);
        if (void 0 !== r[t]) r[t].push(n);
        else {
            r[t] = [n];
            var i = document.getElementsByTagName("head")[0],
                o = document.createElement("script");
            o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = e.p + "" + t + "." + ({ 0: "blog", 1: "index", 2: "landing", 3: "notFound", 4: "work" }[t] || t) + "-20b1575919308246f914.js", i.appendChild(o)
        }
    }, e.m = t, e.c = i, e.p = "js/"
}([, , , function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r(t) {
        function e() { return l.DOCUMENT.readyState === t }
        var n = "readystatechange",
            i = u["default"].defer();
        return e() ? i.resolve() : ! function() {
            var t = function r() { e() && ((0, c.removeEventListener)(l.DOCUMENT, n, r), i.resolve()) };
            (0, c.addEventListener)(l.DOCUMENT, n, t)
        }(), i.promise
    }

    function o() { return r("complete") }

    function s() { return r("interactive") }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.domReady = o, e.windowReady = s;
    var a = n(4),
        u = i(a),
        c = n(8),
        l = n(9)
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(5),
        o = i(r);
    e["default"] = o["default"], t.exports = e["default"]
}, function(t, e, n) {
    (function(e, n) {
        /*!
         *
         * Copyright 2009-2012 Kris Kowal under the terms of the MIT
         * license found at http://github.com/kriskowal/q/raw/master/LICENSE
         *
         * With parts by Tyler Close
         * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
         * at http://www.opensource.org/licenses/mit-license.html
         * Forked at ref_send.js version: 2009-05-11
         *
         * With parts by Mark Miller
         * Copyright (C) 2011 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         */
        ! function(e) {
            "use strict";
            if ("function" == typeof bootstrap) bootstrap("promise", e);
            else { t.exports = e() }
        }(function() {
            "use strict";

            function t(t) { return function() { return $.apply(t, arguments) } }

            function i(t) { return t === Object(t) }

            function r(t) { return "[object StopIteration]" === rt(t) || t instanceof Y }

            function o(t, e) {
                if (U && e.stack && "object" == typeof t && null !== t && t.stack && t.stack.indexOf(ot) === -1) {
                    for (var n = [], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
                    n.unshift(t.stack);
                    var r = n.join("\n" + ot + "\n");
                    t.stack = s(r)
                }
            }

            function s(t) {
                for (var e = t.split("\n"), n = [], i = 0; i < e.length; ++i) {
                    var r = e[i];
                    c(r) || a(r) || !r || n.push(r)
                }
                return n.join("\n")
            }

            function a(t) { return t.indexOf("(module.js:") !== -1 || t.indexOf("(node.js:") !== -1 }

            function u(t) { var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t); if (e) return [e[1], Number(e[2])]; var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t); if (n) return [n[1], Number(n[2])]; var i = /.*@(.+):(\d+)$/.exec(t); return i ? [i[1], Number(i[2])] : void 0 }

            function c(t) {
                var e = u(t);
                if (!e) return !1;
                var n = e[0],
                    i = e[1];
                return n === q && i >= W && i <= lt
            }

            function l() {
                if (U) try { throw new Error } catch (t) {
                    var e = t.stack.split("\n"),
                        n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                        i = u(n);
                    if (!i) return;
                    return q = i[0], i[1]
                }
            }

            function f(t, e, n) { return function() { return "undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + n + " instead.", new Error("").stack), t.apply(t, arguments) } }

            function h(t) { return t instanceof y ? t : b(t) ? C(t) : P(t) }

            function d() {
                function t(t) { e = t, o.source = t, Z(n, function(e, n) { h.nextTick(function() { t.promiseDispatch.apply(t, n) }) }, void 0), n = void 0, i = void 0 }
                var e, n = [],
                    i = [],
                    r = et(d.prototype),
                    o = et(y.prototype);
                if (o.promiseDispatch = function(t, r, o) {
                        var s = Q(arguments);
                        n ? (n.push(s), "when" === r && o[1] && i.push(o[1])) : h.nextTick(function() { e.promiseDispatch.apply(e, s) })
                    }, o.valueOf = function() { if (n) return o; var t = g(e); return w(t) && (e = t), t }, o.inspect = function() { return e ? e.inspect() : { state: "pending" } }, h.longStackSupport && U) try { throw new Error } catch (s) { o.stack = s.stack.substring(s.stack.indexOf("\n") + 1) }
                return r.promise = o, r.resolve = function(n) { e || t(h(n)) }, r.fulfill = function(n) { e || t(P(n)) }, r.reject = function(n) { e || t(A(n)) }, r.notify = function(t) { e || Z(i, function(e, n) { h.nextTick(function() { n(t) }) }, void 0) }, r
            }

            function p(t) { if ("function" != typeof t) throw new TypeError("resolver must be a function."); var e = d(); try { t(e.resolve, e.reject, e.notify) } catch (n) { e.reject(n) } return e.promise }

            function v(t) { return p(function(e, n) { for (var i = 0, r = t.length; i < r; i++) h(t[i]).then(e, n) }) }

            function y(t, e, n) {
                void 0 === e && (e = function(t) { return A(new Error("Promise does not support operation: " + t)) }), void 0 === n && (n = function() { return { state: "unknown" } });
                var i = et(y.prototype);
                if (i.promiseDispatch = function(n, r, o) {
                        var s;
                        try { s = t[r] ? t[r].apply(i, o) : e.call(i, r, o) } catch (a) { s = A(a) }
                        n && n(s)
                    }, i.inspect = n, n) { var r = n(); "rejected" === r.state && (i.exception = r.reason), i.valueOf = function() { var t = n(); return "pending" === t.state || "rejected" === t.state ? i : t.value } }
                return i
            }

            function m(t, e, n, i) { return h(t).then(e, n, i) }

            function g(t) { if (w(t)) { var e = t.inspect(); if ("fulfilled" === e.state) return e.value } return t }

            function w(t) { return t instanceof y }

            function b(t) { return i(t) && "function" == typeof t.then }

            function _(t) { return w(t) && "pending" === t.inspect().state }

            function k(t) { return !w(t) || "fulfilled" === t.inspect().state }

            function O(t) { return w(t) && "rejected" === t.inspect().state }

            function E() { st.length = 0, at.length = 0, ct || (ct = !0) }

            function S(t, n) { ct && ("object" == typeof e && "function" == typeof e.emit && h.nextTick.runAfter(function() { J(at, t) !== -1 && (e.emit("unhandledRejection", n, t), ut.push(t)) }), at.push(t), n && "undefined" != typeof n.stack ? st.push(n.stack) : st.push("(no stack) " + n)) }

            function T(t) {
                if (ct) {
                    var n = J(at, t);
                    n !== -1 && ("object" == typeof e && "function" == typeof e.emit && h.nextTick.runAfter(function() {
                        var i = J(ut, t);
                        i !== -1 && (e.emit("rejectionHandled", st[n], t), ut.splice(i, 1))
                    }), at.splice(n, 1), st.splice(n, 1))
                }
            }

            function A(t) { var e = y({ when: function(e) { return e && T(this), e ? e(t) : this } }, function() { return this }, function() { return { state: "rejected", reason: t } }); return S(e, t), e }

            function P(t) { return y({ when: function() { return t }, get: function(e) { return t[e] }, set: function(e, n) { t[e] = n }, "delete": function(e) { delete t[e] }, post: function(e, n) { return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n) }, apply: function(e, n) { return t.apply(e, n) }, keys: function() { return it(t) } }, void 0, function() { return { state: "fulfilled", value: t } }) }

            function C(t) { var e = d(); return h.nextTick(function() { try { t.then(e.resolve, e.reject, e.notify) } catch (n) { e.reject(n) } }), e.promise }

            function j(t) { return y({ isDef: function() {} }, function(e, n) { return V(t, e, n) }, function() { return h(t).inspect() }) }

            function L(t, e, n) { return h(t).spread(e, n) }

            function N(t) {
                return function() {
                    function e(t, e) { var s; if ("undefined" == typeof StopIteration) { try { s = n[t](e) } catch (a) { return A(a) } return s.done ? h(s.value) : m(s.value, i, o) } try { s = n[t](e) } catch (a) { return r(a) ? h(a.value) : A(a) } return m(s, i, o) }
                    var n = t.apply(this, arguments),
                        i = e.bind(e, "next"),
                        o = e.bind(e, "throw");
                    return i()
                }
            }

            function I(t) { h.done(h.async(t)()) }

            function M(t) { throw new Y(t) }

            function x(t) { return function() { return L([this, R(arguments)], function(e, n) { return t.apply(e, n) }) } }

            function V(t, e, n) { return h(t).dispatch(e, n) }

            function R(t) {
                return m(t, function(t) {
                    var e = 0,
                        n = d();
                    return Z(t, function(i, r, o) {
                        var s;
                        w(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, m(r, function(i) { t[o] = i, 0 === --e && n.resolve(t) }, n.reject, function(t) { n.notify({ index: o, value: t }) }))
                    }, void 0), 0 === e && n.resolve(t), n.promise
                })
            }

            function D(t) {
                if (0 === t.length) return h.resolve();
                var e = h.defer(),
                    n = 0;
                return Z(t, function(i, r, o) {
                    function s(t) { e.resolve(t) }

                    function a() { n--, 0 === n && e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected.")) }

                    function u(t) { e.notify({ index: o, value: t }) }
                    var c = t[o];
                    n++, m(c, s, a, u)
                }, void 0), e.promise
            }

            function H(t) { return m(t, function(t) { return t = tt(t, h), m(R(tt(t, function(t) { return m(t, K, K) })), function() { return t }) }) }

            function B(t) { return h(t).allSettled() }

            function F(t, e) { return h(t).then(void 0, void 0, e) }

            function G(t, e) { return h(t).nodeify(e) }
            var U = !1;
            try { throw new Error } catch (z) { U = !!z.stack }
            var q, Y, W = l(),
                K = function() {},
                X = function() {
                    function t() {
                        for (var t, e; r.next;) r = r.next, t = r.task, r.task = void 0, e = r.domain, e && (r.domain = void 0, e.enter()), i(t, e);
                        for (; c.length;) t = c.pop(), i(t);
                        s = !1
                    }

                    function i(e, n) {
                        try { e() } catch (i) {
                            if (u) throw n && n.exit(), setTimeout(t, 0), n && n.enter(), i;
                            setTimeout(function() { throw i }, 0)
                        }
                        n && n.exit()
                    }
                    var r = { task: void 0, next: null },
                        o = r,
                        s = !1,
                        a = void 0,
                        u = !1,
                        c = [];
                    if (X = function(t) { o = o.next = { task: t, domain: u && e.domain, next: null }, s || (s = !0, a()) }, "object" == typeof e && "[object process]" === e.toString() && e.nextTick) u = !0, a = function() { e.nextTick(t) };
                    else if ("function" == typeof n) a = "undefined" != typeof window ? n.bind(window, t) : function() { n(t) };
                    else if ("undefined" != typeof MessageChannel) {
                        var l = new MessageChannel;
                        l.port1.onmessage = function() { a = f, l.port1.onmessage = t, t() };
                        var f = function() { l.port2.postMessage(0) };
                        a = function() { setTimeout(t, 0), f() }
                    } else a = function() { setTimeout(t, 0) };
                    return X.runAfter = function(t) { c.push(t), s || (s = !0, a()) }, X
                }(),
                $ = Function.call,
                Q = t(Array.prototype.slice),
                Z = t(Array.prototype.reduce || function(t, e) {
                    var n = 0,
                        i = this.length;
                    if (1 === arguments.length)
                        for (;;) { if (n in this) { e = this[n++]; break } if (++n >= i) throw new TypeError }
                    for (; n < i; n++) n in this && (e = t(e, this[n], n));
                    return e
                }),
                J = t(Array.prototype.indexOf || function(t) {
                    for (var e = 0; e < this.length; e++)
                        if (this[e] === t) return e;
                    return -1
                }),
                tt = t(Array.prototype.map || function(t, e) {
                    var n = this,
                        i = [];
                    return Z(n, function(r, o, s) { i.push(t.call(e, o, s, n)) }, void 0), i
                }),
                et = Object.create || function(t) {
                    function e() {}
                    return e.prototype = t, new e
                },
                nt = t(Object.prototype.hasOwnProperty),
                it = Object.keys || function(t) { var e = []; for (var n in t) nt(t, n) && e.push(n); return e },
                rt = t(Object.prototype.toString);
            Y = "undefined" != typeof ReturnValue ? ReturnValue : function(t) { this.value = t };
            var ot = "From previous event:";
            h.resolve = h, h.nextTick = X, h.longStackSupport = !1, "object" == typeof e && e && { NODE_ENV: "production" }.Q_DEBUG && (h.longStackSupport = !0), h.defer = d, d.prototype.makeNodeResolver = function() { var t = this; return function(e, n) { e ? t.reject(e) : arguments.length > 2 ? t.resolve(Q(arguments, 1)) : t.resolve(n) } }, h.Promise = p, h.promise = p, p.race = v, p.all = R, p.reject = A, p.resolve = h, h.passByCopy = function(t) { return t }, y.prototype.passByCopy = function() { return this }, h.join = function(t, e) { return h(t).join(e) }, y.prototype.join = function(t) { return h([this, t]).spread(function(t, e) { if (t === e) return t; throw new Error("Can't join: not the same: " + t + " " + e) }) }, h.race = v, y.prototype.race = function() { return this.then(h.race) }, h.makePromise = y, y.prototype.toString = function() { return "[object Promise]" }, y.prototype.then = function(t, e, n) {
                function i(e) { try { return "function" == typeof t ? t(e) : e } catch (n) { return A(n) } }

                function r(t) { if ("function" == typeof e) { o(t, a); try { return e(t) } catch (n) { return A(n) } } return A(t) }

                function s(t) { return "function" == typeof n ? n(t) : t }
                var a = this,
                    u = d(),
                    c = !1;
                return h.nextTick(function() { a.promiseDispatch(function(t) { c || (c = !0, u.resolve(i(t))) }, "when", [function(t) { c || (c = !0, u.resolve(r(t))) }]) }), a.promiseDispatch(void 0, "when", [void 0, function(t) {
                    var e, n = !1;
                    try { e = s(t) } catch (i) {
                        if (n = !0, !h.onerror) throw i;
                        h.onerror(i)
                    }
                    n || u.notify(e)
                }]), u.promise
            }, h.tap = function(t, e) { return h(t).tap(e) }, y.prototype.tap = function(t) { return t = h(t), this.then(function(e) { return t.fcall(e).thenResolve(e) }) }, h.when = m, y.prototype.thenResolve = function(t) { return this.then(function() { return t }) }, h.thenResolve = function(t, e) { return h(t).thenResolve(e) }, y.prototype.thenReject = function(t) { return this.then(function() { throw t }) }, h.thenReject = function(t, e) { return h(t).thenReject(e) }, h.nearer = g, h.isPromise = w, h.isPromiseAlike = b, h.isPending = _, y.prototype.isPending = function() { return "pending" === this.inspect().state }, h.isFulfilled = k, y.prototype.isFulfilled = function() { return "fulfilled" === this.inspect().state }, h.isRejected = O, y.prototype.isRejected = function() { return "rejected" === this.inspect().state };
            var st = [],
                at = [],
                ut = [],
                ct = !0;
            h.resetUnhandledRejections = E, h.getUnhandledReasons = function() { return st.slice() }, h.stopUnhandledRejectionTracking = function() { E(), ct = !1 }, E(), h.reject = A, h.fulfill = P, h.master = j, h.spread = L, y.prototype.spread = function(t, e) { return this.all().then(function(e) { return t.apply(void 0, e) }, e) }, h.async = N, h.spawn = I, h["return"] = M, h.promised = x, h.dispatch = V, y.prototype.dispatch = function(t, e) {
                var n = this,
                    i = d();
                return h.nextTick(function() { n.promiseDispatch(i.resolve, t, e) }), i.promise
            }, h.get = function(t, e) { return h(t).dispatch("get", [e]) }, y.prototype.get = function(t) { return this.dispatch("get", [t]) }, h.set = function(t, e, n) { return h(t).dispatch("set", [e, n]) }, y.prototype.set = function(t, e) { return this.dispatch("set", [t, e]) }, h.del = h["delete"] = function(t, e) { return h(t).dispatch("delete", [e]) }, y.prototype.del = y.prototype["delete"] = function(t) { return this.dispatch("delete", [t]) }, h.mapply = h.post = function(t, e, n) { return h(t).dispatch("post", [e, n]) }, y.prototype.mapply = y.prototype.post = function(t, e) { return this.dispatch("post", [t, e]) }, h.send = h.mcall = h.invoke = function(t, e) { return h(t).dispatch("post", [e, Q(arguments, 2)]) }, y.prototype.send = y.prototype.mcall = y.prototype.invoke = function(t) { return this.dispatch("post", [t, Q(arguments, 1)]) }, h.fapply = function(t, e) { return h(t).dispatch("apply", [void 0, e]) }, y.prototype.fapply = function(t) { return this.dispatch("apply", [void 0, t]) }, h["try"] = h.fcall = function(t) { return h(t).dispatch("apply", [void 0, Q(arguments, 1)]) }, y.prototype.fcall = function() { return this.dispatch("apply", [void 0, Q(arguments)]) }, h.fbind = function(t) {
                var e = h(t),
                    n = Q(arguments, 1);
                return function() { return e.dispatch("apply", [this, n.concat(Q(arguments))]) }
            }, y.prototype.fbind = function() {
                var t = this,
                    e = Q(arguments);
                return function() { return t.dispatch("apply", [this, e.concat(Q(arguments))]) }
            }, h.keys = function(t) { return h(t).dispatch("keys", []) }, y.prototype.keys = function() { return this.dispatch("keys", []) }, h.all = R, y.prototype.all = function() { return R(this) }, h.any = D, y.prototype.any = function() { return D(this) }, h.allResolved = f(H, "allResolved", "allSettled"), y.prototype.allResolved = function() { return H(this) }, h.allSettled = B, y.prototype.allSettled = function() {
                return this.then(function(t) {
                    return R(tt(t, function(t) {
                        function e() { return t.inspect() }
                        return t = h(t), t.then(e, e)
                    }))
                })
            }, h.fail = h["catch"] = function(t, e) { return h(t).then(void 0, e) }, y.prototype.fail = y.prototype["catch"] = function(t) { return this.then(void 0, t) }, h.progress = F, y.prototype.progress = function(t) { return this.then(void 0, void 0, t) }, h.fin = h["finally"] = function(t, e) { return h(t)["finally"](e) }, y.prototype.fin = y.prototype["finally"] = function(t) { return t = h(t), this.then(function(e) { return t.fcall().then(function() { return e }) }, function(e) { return t.fcall().then(function() { throw e }) }) }, h.done = function(t, e, n, i) { return h(t).done(e, n, i) }, y.prototype.done = function(t, n, i) {
                var r = function(t) {
                        h.nextTick(function() {
                            if (o(t, s), !h.onerror) throw t;
                            h.onerror(t)
                        })
                    },
                    s = t || n || i ? this.then(t, n, i) : this;
                "object" == typeof e && e && e.domain && (r = e.domain.bind(r)), s.then(void 0, r)
            }, h.timeout = function(t, e, n) { return h(t).timeout(e, n) }, y.prototype.timeout = function(t, e) {
                var n = d(),
                    i = setTimeout(function() { e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e) }, t);
                return this.then(function(t) { clearTimeout(i), n.resolve(t) }, function(t) { clearTimeout(i), n.reject(t) }, n.notify), n.promise
            }, h.delay = function(t, e) { return void 0 === e && (e = t, t = void 0), h(t).delay(e) }, y.prototype.delay = function(t) { return this.then(function(e) { var n = d(); return setTimeout(function() { n.resolve(e) }, t), n.promise }) }, h.nfapply = function(t, e) { return h(t).nfapply(e) }, y.prototype.nfapply = function(t) {
                var e = d(),
                    n = Q(t);
                return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
            }, h.nfcall = function(t) { var e = Q(arguments, 1); return h(t).nfapply(e) }, y.prototype.nfcall = function() {
                var t = Q(arguments),
                    e = d();
                return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
            }, h.nfbind = h.denodeify = function(t) {
                var e = Q(arguments, 1);
                return function() {
                    var n = e.concat(Q(arguments)),
                        i = d();
                    return n.push(i.makeNodeResolver()), h(t).fapply(n).fail(i.reject), i.promise
                }
            }, y.prototype.nfbind = y.prototype.denodeify = function() { var t = Q(arguments); return t.unshift(this), h.denodeify.apply(void 0, t) }, h.nbind = function(t, e) {
                var n = Q(arguments, 2);
                return function() {
                    function i() { return t.apply(e, arguments) }
                    var r = n.concat(Q(arguments)),
                        o = d();
                    return r.push(o.makeNodeResolver()), h(i).fapply(r).fail(o.reject), o.promise
                }
            }, y.prototype.nbind = function() { var t = Q(arguments, 0); return t.unshift(this), h.nbind.apply(void 0, t) }, h.nmapply = h.npost = function(t, e, n) { return h(t).npost(e, n) }, y.prototype.nmapply = y.prototype.npost = function(t, e) {
                var n = Q(e || []),
                    i = d();
                return n.push(i.makeNodeResolver()), this.dispatch("post", [t, n]).fail(i.reject), i.promise
            }, h.nsend = h.nmcall = h.ninvoke = function(t, e) {
                var n = Q(arguments, 2),
                    i = d();
                return n.push(i.makeNodeResolver()), h(t).dispatch("post", [e, n]).fail(i.reject), i.promise
            }, y.prototype.nsend = y.prototype.nmcall = y.prototype.ninvoke = function(t) {
                var e = Q(arguments, 1),
                    n = d();
                return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
            }, h.nodeify = G, y.prototype.nodeify = function(t) { return t ? void this.then(function(e) { h.nextTick(function() { t(null, e) }) }, function(e) { h.nextTick(function() { t(e) }) }) : this }, h.noConflict = function() { throw new Error("Q.noConflict only works when Q is used as a global") };
            var lt = l();
            return h
        })
    }).call(e, n(6), n(7).setImmediate)
}, function(t, e) {
    function n() { f && c && (f = !1, c.length ? l = c.concat(l) : h = -1, l.length && i()) }

    function i() {
        if (!f) {
            var t = s(n);
            f = !0;
            for (var e = l.length; e;) {
                for (c = l, l = []; ++h < e;) c && c[h].run();
                h = -1, e = l.length
            }
            c = null, f = !1, a(t)
        }
    }

    function r(t, e) { this.fun = t, this.array = e }

    function o() {}
    var s, a, u = t.exports = {};
    ! function() { try { s = setTimeout } catch (t) { s = function() { throw new Error("setTimeout is not defined") } } try { a = clearTimeout } catch (t) { a = function() { throw new Error("clearTimeout is not defined") } } }();
    var c, l = [],
        f = !1,
        h = -1;
    u.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new r(t, e)), 1 !== l.length || f || s(i, 0)
    }, r.prototype.run = function() { this.fun.apply(null, this.array) }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = o, u.addListener = o, u.once = o, u.off = o, u.removeListener = o, u.removeAllListeners = o, u.emit = o, u.binding = function(t) { throw new Error("process.binding is not supported") }, u.cwd = function() { return "/" }, u.chdir = function(t) { throw new Error("process.chdir is not supported") }, u.umask = function() { return 0 }
}, function(t, e, n) {
    (function(t, i) {
        function r(t, e) { this._id = t, this._clearFn = e }
        var o = n(6).nextTick,
            s = Function.prototype.apply,
            a = Array.prototype.slice,
            u = {},
            c = 0;
        e.setTimeout = function() { return new r(s.call(setTimeout, window, arguments), clearTimeout) }, e.setInterval = function() { return new r(s.call(setInterval, window, arguments), clearInterval) }, e.clearTimeout = e.clearInterval = function(t) { t.close() }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() { this._clearFn.call(window, this._id) }, e.enroll = function(t, e) { clearTimeout(t._idleTimeoutId), t._idleTimeout = e }, e.unenroll = function(t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() { t._onTimeout && t._onTimeout() }, e))
        }, e.setImmediate = "function" == typeof t ? t : function(t) {
            var n = c++,
                i = !(arguments.length < 2) && a.call(arguments, 1);
            return u[n] = !0, o(function() { u[n] && (i ? t.apply(null, i) : t.call(null), e.clearImmediate(n)) }), n
        }, e.clearImmediate = "function" == typeof i ? i : function(t) { delete u[t] }
    }).call(e, n(7).setImmediate, n(7).clearImmediate)
}, function(t, e) {
    "use strict";

    function n(t, e, n) {
        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent("on" + e, n)
    }

    function i(t, e, n) {
        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3],
            r = [],
            o = [];
        t instanceof NodeList ? r = Array.prototype.slice.call(t) : t instanceof Array ? r = t : r.push(t), "string" == typeof e ? o.push(e) : o = e, r.forEach(function(t) { o.forEach(function(e) { t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent("on" + e, n) }) })
    }

    function r(t) { t = t || window.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault && t.preventDefault(), t.returnValue = !1, t.stopped = !0 }

    function o(t, e, r, o) {
        function s(i) { return n(t, e, s, o), r(i) }
        i(t, e, s, o)
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.removeEventListener = n, e.addEventListener = i, e.stop = r, e.once = o
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = document;
    e.DOCUMENT = n;
    var i = document.body;
    e.BODY = i;
    var r = window;
    e.WINDOW = r;
    var o = document.documentElement;
    e.HTML = o
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(11),
        o = i(r),
        s = n(12),
        a = i(s),
        u = n(9);
    e["default"] = { querySelector: o["default"], querySelectorAll: a["default"], DOCUMENT: u.DOCUMENT, BODY: u.BODY, WINDOW: u.WINDOW, HTML: u.HTML }, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(9);
    e["default"] = function(t, e) { return e = e || i.DOCUMENT, e.querySelector(t) }, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(9);
    e["default"] = function(t, e) { return e = e || i.DOCUMENT, Array.prototype.slice.call(e.querySelectorAll(t)) }, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        a = function(t, e, n) {
            for (var i = !0; i;) {
                var r = t,
                    o = e,
                    s = n;
                i = !1, null === r && (r = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== a) { if ("value" in a) return a.value; var u = a.get; if (void 0 === u) return; return u.call(s) }
                var c = Object.getPrototypeOf(r);
                if (null === c) return;
                t = c, e = o, n = s, i = !0, a = c = void 0
            }
        },
        u = n(10),
        c = n(8),
        l = n(14),
        f = n(18),
        h = i(f),
        d = n(20),
        p = i(d),
        v = n(15),
        y = n(22),
        m = i(y),
        g = n(27),
        w = i(g),
        b = n(28),
        _ = n(29),
        k = n(30),
        O = i(k),
        E = n(32),
        S = function(t) {
            function e(t) {
                r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.el = t, this.elClassList = this.el.classList;
                var n = (0, O["default"])(this.el, ["startPos"]),
                    i = 14;
                n.startPos && (i = parseInt(n.startPos)), this.triggerRatio = 1 - i / 100, this.classChecker = new E.ClassChecker(this), this.classChecker.on("update", this._notify.bind(this))
            }
            return o(e, t), s(e, [{
                key: "update",
                value: function(t) {
                    this.classChecker.checkClassStatus();
                    var e = (0, v.boundingBox)(this.el).top,
                        n = t.getSize().height,
                        i = n * this.triggerRatio;
                    e <= i ? this.classChecker.add() : n < e && this.classChecker.remove()
                }
            }, { key: "_notify", value: function(t) { this.emit("update", t) } }]), e
        }(_.TrackingElement);
    e["default"] = function() {
        var t = new T((0, u.querySelectorAll)(".nav__control a")),
            e = new A((0, u.querySelector)(".open-menu"));
        return w["default"].mobile ? e.setMode(new C) : e.setMode(new P), t.on("update", function() { e.toggle() }), e
    };
    var T = function(t) {
            function e(t) { r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this._bindEvents(t) }
            return o(e, t), s(e, [{
                key: "_bindEvents",
                value: function(t) {
                    (0, c.addEventListener)(t, "click", this.onClick.bind(this))
                }
            }, { key: "onClick", value: function(t) { return (0, c.stop)(t), this.emit("update"), !1 } }]), e
        }(h["default"]),
        A = function(t) {
            function e(t) { r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.root = t, this.state = "close", this.modeView = null, this._setupElements(), this._bindEvents() }
            return o(e, t), s(e, [{ key: "setMode", value: function(t) { null !== this.modeView && (this.modeView["delete"](), this.modeView = null), this.modeView = t, t.setParentView(this) } }, { key: "_setupElements", value: function() { this.pageLayoutView = (0, u.querySelector)(".layout", this.root), this.contactsView = (0, u.querySelector)(".open-menu__contacts", this.root), this.worksView = (0, u.querySelector)(".open-menu__works", this.root) } }, { key: "_bindEvents", value: function() { p["default"].on("update", this.onResize.bind(this)), this.onResize() } }, {
                key: "_setLeftPartSize",
                value: function() {
                    var t = (0, l.getViewPort)(),
                        e = Math.round((t.width - (0, v.width)(this.pageLayoutView)) / 2),
                        n = t.width - ((0, v.width)(this.contactsView, !0) + e);
                    n = n % 2 != 0 ? n + 1 : n, this.worksView.style.width = n + "px"
                }
            }, { key: "_changeState", value: function(t) { this.state = t, this.emit("update", { state: this.state }) } }, { key: "onResize", value: function() { this._setLeftPartSize() } }, { key: "toggle", value: function() { "open" === this.state ? this.close() : "close" === this.state && this.open() } }, { key: "open", value: function() { "open" !== this.state && this.modeView.open() } }, { key: "close", value: function() { "close" !== this.state && this.modeView.close() } }]), e
        }(h["default"]),
        P = function() {
            function t() { r(this, t), this.parentView = null, this.OPENED_CLASS = "j-menu-opened", this.OPENING_CLASS = "j-menu-opening", this.CLOSING_CLASS = "j-menu-closing", this.VISIBILITY_CLASS = "j-menu-visible", this.MODE_CLASS = "j-normal-mode" }
            return s(t, [{ key: "setParentView", value: function(t) { null !== this.parentView && this.destroy(), this.parentView = t, this.parentView.root.classList.add(this.MODE_CLASS), this.fontSpirationVideo = (0, u.querySelector)("video", this.parentView.root), this._bindEvents() } }, {
                key: "_bindEvents",
                value: function() {
                    (0, c.addEventListener)(u.DOCUMENT, "keydown", this.onKeyDown.bind(this)), (0, c.addEventListener)(this.parentView.root, (0, m["default"])("transitionend"), this.onTransitionEnd.bind(this)), this.scrollHandler = new b.ScrollHandler(new b.ElementScrollStrategy(this.parentView.root)), this._createScrollTrigger()
                }
            }, {
                key: "_createScrollTrigger",
                value: function() {
                    for (var t = (0, u.querySelectorAll)(".j-menu-trigger-show", this.root), e = new _.ViewportTracker(this.scrollHandler), n = 0; n < t.length; n++) e.addTrackingElement(new S(t[n]));
                    e.start()
                }
            }, { key: "onKeyDown", value: function(e) { t.isEscapeKey(e.keyCode) && this.close() } }, {
                key: "onTransitionEnd",
                value: function(t) {
                    var e = this.parentView;
                    e.root.isEqualNode(t.target) && ("opening" === e.state ? (e._changeState("open"), this.parentView.root.classList.add(this.OPENED_CLASS), this.parentView.root.classList.remove(this.OPENING_CLASS), this.fontSpirationVideo.play()) : "closing" === e.state && (e._changeState("close"), this.scrollHandler.moveTo(0), this.parentView.root.classList.remove(this.CLOSING_CLASS), this.parentView.root.classList.remove(this.VISIBILITY_CLASS), this.parentView.root.classList.remove(this.OPENED_CLASS)))
                }
            }, { key: "open", value: function() { null !== this.parentView && (this.parentView._changeState("opening"), this.parentView.root.classList.add(this.OPENING_CLASS), this.parentView.root.classList.add(this.VISIBILITY_CLASS)) } }, { key: "close", value: function() { null !== this.parentView && (this.parentView._changeState("closing"), this.parentView.root.classList.add(this.CLOSING_CLASS), this.fontSpirationVideo.pause()) } }, { key: "destroy", value: function() { null !== this.parentView && (this.parentView.root.classList.remove(this.MODE_CLASS), this.scrollHandler.destroy(), (0, c.removeEventListener)(u.DOCUMENT, "keydown", this.onKeyDown.bind(this)), (0, c.removeEventListener)(this.parentView.root, (0, m["default"])("transitionend"), this.onTransitionEnd.bind(this)), this.scrollHandler = null, this.parentView = null) } }], [{ key: "isEscapeKey", value: function(t) { return 27 === t } }]), t
        }(),
        C = function() {
            function t() { r(this, t), this.parentView = null, this.OPENED_CLASS = "j-menu-opened", this.VISIBILITY_CLASS = "j-menu-visible", this.MODE_CLASS = "j-light-mode" }
            return s(t, [{ key: "setParentView", value: function(t) { null !== this.parentView && this.destroy(), this.parentView = t, this.parentView.root.classList.add(this.MODE_CLASS) } }, { key: "open", value: function() { null !== this.parentView && (this.parentView._changeState("open"), this.parentView.root.classList.add(this.OPENED_CLASS), this.parentView.root.classList.add(this.VISIBILITY_CLASS)) } }, { key: "close", value: function() { null !== this.parentView && (this.parentView._changeState("close"), this.parentView.root.classList.remove(this.OPENED_CLASS), this.parentView.root.classList.remove(this.VISIBILITY_CLASS)) } }, { key: "destroy", value: function() { null !== this.parentView && (this.parentView.root.classList.add(this.MODE_CLASS), this.parentView = null) } }]), t
        }();
    t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function i() { return { height: c.WINDOW.innerHeight || c.HTML.clientHeight, width: c.WINDOW.innerWidth || c.HTML.clientWidth } }

    function r(t, e) {
        var n = i(),
            r = 0,
            o = t.getAttribute("data-viewport-position-extra") || 0;
        e = e || (0, a.boundingBox)(t);
        var s = e.top + parseInt(o);
        return s >= 0 ? (r = n.height - s, r > e.height && (r = e.height)) : r = e.height + s, r < 0 && (r = 0), r > n.height && (r = n.height), console.log(t.getAttribute("class") + ": " + r), r
    }

    function o(t, e) { var n = e || (0, a.boundingBox)(t); return r(t, n) / n.height }

    function s(t) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
            n = o(t);
        return 1 === n || n > (0, u.clamp)(e, 0, 1)
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getViewPort = i, e.pxInViewPort = r, e.percentInViewPort = o, e.isInViewPort = s;
    var a = n(15),
        u = n(17),
        c = n(9)
}, function(t, e, n) {
    "use strict";

    function i(t) { if (!t.getBoundingClientRect) throw new Error("Implement getBoundingClientRect for this browser"); var e = t.getBoundingClientRect(); return { width: e.width, height: e.height, top: e.top, bottom: e.bottom, left: e.left, right: e.right } }

    function r(t) { var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]; if ("undefined" != typeof window.getComputedStyle) return window.getComputedStyle(t, e); if ("undefined" != typeof t.currentStyle) return t.currentStyle; throw new Error("Implement document.getComputedStyle for this browser") }

    function o(t) {
        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
            n = t.clientWidth;
        if (e) return n;
        var i = r(t);
        return n -= parseInt(i.paddingLeft) + parseInt(i.paddingRight)
    }

    function s(t) {
        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
            n = t.offsetWidth;
        if (!e) return n;
        var i = r(t);
        return n += parseInt(i.marginLeft) + parseInt(i.marginRight)
    }

    function a(t) {
        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
            n = t.clientHeight;
        if (e) return n;
        var i = r(t);
        return n -= parseInt(i.paddingLeft) + parseInt(i.paddingRight)
    }

    function u(t) {
        var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
            n = t.offsetHeight;
        if (!e) return n;
        var i = r(t);
        return n += parseInt(i.marginLeft) + parseInt(i.marginRight)
    }

    function c(t) { "IMG" === t.nodeName && t.setAttribute("src", t.getAttribute("src")) }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.boundingBox = i, e.computedStyle = r, e.width = o, e.outerWidth = s, e.height = a, e.outerHeight = u, e.touchImageSrc = c, n(16)
}, function(t, e) {
    "use strict";
    Array.prototype.map || (Array.prototype.map = function(t, e) {
        var n = void 0,
            i = void 0,
            r = void 0;
        if (null == this) throw new TypeError(" this is null or not defined");
        var o = Object(this),
            s = o.length >>> 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (arguments.length > 1 && (n = e), i = new Array(s), r = 0; r < s;) {
            var a = void 0,
                u = void 0;
            r in o && (a = o[r], u = t.call(n, a, r, o), i[r] = u), r++
        }
        return i
    })
}, function(t, e) {
    "use strict";

    function n(t, e, n, o, s) { return i(r(t, e, n), o, s) }

    function i(t, e, n) { return e + (n - e) * t }

    function r(t, e, n) { return (t - e) / (n - e) }

    function o(t, e, n) { return t < e ? e : t > n ? n : t }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.map = n, e.lerp = i, e.norm = r, e.clamp = o
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(19),
        o = i(r);
    e["default"] = o["default"], t.exports = e["default"]
}, function(t, e, n) {
    var i;
    (function() {
        "use strict";

        function e() {}

        function r(t, e) {
            for (var n = t.length; n--;)
                if (t[n].listener === e) return n;
            return -1
        }

        function o(t) { return function() { return this[t].apply(this, arguments) } }
        var s = e.prototype,
            a = this,
            u = a.EventEmitter;
        s.getListeners = function(t) { var e, n, i = this._getEvents(); if (t instanceof RegExp) { e = {}; for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]) } else e = i[t] || (i[t] = []); return e }, s.flattenListeners = function(t) { var e, n = []; for (e = 0; e < t.length; e += 1) n.push(t[e].listener); return n }, s.getListenersAsObject = function(t) { var e, n = this.getListeners(t); return n instanceof Array && (e = {}, e[t] = n), e || n }, s.addListener = function(t, e) {
            var n, i = this.getListenersAsObject(t),
                o = "object" == typeof e;
            for (n in i) i.hasOwnProperty(n) && r(i[n], e) === -1 && i[n].push(o ? e : { listener: e, once: !1 });
            return this
        }, s.on = o("addListener"), s.addOnceListener = function(t, e) { return this.addListener(t, { listener: e, once: !0 }) }, s.once = o("addOnceListener"), s.defineEvent = function(t) { return this.getListeners(t), this }, s.defineEvents = function(t) { for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]); return this }, s.removeListener = function(t, e) { var n, i, o = this.getListenersAsObject(t); for (i in o) o.hasOwnProperty(i) && (n = r(o[i], e), n !== -1 && o[i].splice(n, 1)); return this }, s.off = o("removeListener"), s.addListeners = function(t, e) { return this.manipulateListeners(!1, t, e) }, s.removeListeners = function(t, e) { return this.manipulateListeners(!0, t, e) }, s.manipulateListeners = function(t, e, n) {
            var i, r, o = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (i = n.length; i--;) o.call(this, e, n[i]);
            else
                for (i in e) e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this
        }, s.removeEvent = function(t) {
            var e, n = typeof t,
                i = this._getEvents();
            if ("string" === n) delete i[t];
            else if (t instanceof RegExp)
                for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
            else delete this._events;
            return this
        }, s.removeAllListeners = o("removeEvent"), s.emitEvent = function(t, e) {
            var n, i, r, o, s = this.getListenersAsObject(t);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(t, n.listener), o = n.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
            return this
        }, s.trigger = o("emitEvent"), s.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, s.setOnceReturnValue = function(t) { return this._onceReturnValue = t, this }, s._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, s._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return a.EventEmitter = u, e }, i = function() { return e }.call(a, n, a, t), !(void 0 !== i && (t.exports = i))
    }).call(this)
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        a = function(t, e, n) {
            for (var i = !0; i;) {
                var r = t,
                    o = e,
                    s = n;
                i = !1, null === r && (r = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== a) { if ("value" in a) return a.value; var u = a.get; if (void 0 === u) return; return u.call(s) }
                var c = Object.getPrototypeOf(r);
                if (null === c) return;
                t = c, e = o, n = s, i = !0, a = c = void 0
            }
        };
    n(21);
    var u = n(8),
        c = n(18),
        l = i(c),
        f = function(t) {
            function e() { r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.ticking = !1, (0, u.addEventListener)(window, "resize", this.onResize.bind(this)) }
            return o(e, t), s(e, [{ key: "onResize", value: function() { this.requestTick() } }, { key: "requestTick", value: function() { this.ticking || window.requestAnimationFrame(this.callbackWrapper.bind(this)), this.ticking = !0 } }, { key: "callbackWrapper", value: function() { this.ticking = !1, this.emit("update") } }]), e
        }(l["default"]);
    e.ResizeHandler = f, e["default"] = new f
}, function(t, e) {
    "use strict";
    window.requestAnimationFrame || ! function() {
        for (var t = 0, e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
            var i = (new Date).getTime(),
                r = Math.max(0, 16 - (i - t)),
                o = window.setTimeout(function() { e(i + r) }, r);
            return t = i + r, o
        })
    }(), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(23),
        r = n(25),
        o = n(26);
    e["default"] = function(t) {
        switch (t) {
            case "transition":
                return (0, r.getPrefixedTransition)();
            case "transform":
                return (0, i.getPrefixedTransform)();
            case "transitionend":
                return (0, r.getPrefixedTransitionEndEvent)();
            case "animationend":
                return (0, o.getPrefixedAnimationEndEvent)();
            default:
                return t
        }
    }, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r() { return ("-moz-" != s["default"].css ? s["default"].css : "") + "transform" }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(24),
        s = i(o);
    e.getPrefixedTransform = r
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(10),
        r = n(15),
        o = function() {
            var t = (0, r.computedStyle)(i.DOCUMENT.documentElement),
                e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1],
                n = "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")", "i"))[1];
            return { dom: n, lowercase: e, css: "-" + e + "-", js: e[0].toUpperCase() + e.substr(1) }
        }();
    e["default"] = o, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r() { return ("-moz-" != a["default"].css ? a["default"].css : "") + "transition" }

    function o() { return "webkit" == a["default"].lowercase ? a["default"].lowercase + "TransitionEnd" : "transitionend" }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = n(24),
        a = i(s);
    e.getPrefixedTransition = r, e.getPrefixedTransitionEndEvent = o
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r() { return "webkit" == s["default"].lowercase ? s["default"].lowercase + "AnimationEnd" : "animationend" }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getPrefixedAnimationEndEvent = r;
    var o = n(24),
        s = i(o)
}, function(t, e, n) {
    "use strict";

    function i() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
        null === t && (t = s.WINDOW.navigator.userAgent), t = t.toLowerCase();
        var e = /(edge)\/([\w.]+)/.exec(t) || /(opr)[\/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [],
            n = /(ipad)/.exec(t) || /(ipod)/.exec(t) || /(iphone)/.exec(t) || /(kindle)/.exec(t) || /(silk)/.exec(t) || /(android)/.exec(t) || /(windows phone)/.exec(t) || /(win)/.exec(t) || /(mac)/.exec(t) || /(linux)/.exec(t) || /(cros)/.exec(t) || /(playbook)/.exec(t) || /(bb)/.exec(t) || /(blackberry)/.exec(t) || [],
            i = {},
            r = { browser: e[5] || e[3] || e[1] || "", version: e[2] || e[4] || "0", versionNumber: e[4] || e[2] || "0", platform: n[0] || "" };
        if (r.browser && (i[r.browser] = !0, i.version = r.version, i.versionNumber = parseInt(r.versionNumber, 10)), r.platform && (i[r.platform] = !0), (i.android || i.bb || i.blackberry || i.ipad || i.iphone || i.ipod || i.kindle || i.playbook || i.silk || i["windows phone"]) && (i.mobile = !0), (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0), (i.chrome || i.opr || i.safari) && (i.webkit = !0), i.rv || i.edge) {
            var o = "msie";
            r.browser = o, i[o] = !0
        }
        if (i.safari && i.blackberry) {
            var a = "blackberry";
            r.browser = a, i[a] = !0
        }
        if (i.safari && i.playbook) {
            var u = "playbook";
            r.browser = u, i[u] = !0
        }
        if (i.bb) {
            var c = "blackberry";
            r.browser = c, i[c] = !0
        }
        if (i.opr) {
            var l = "opera";
            r.browser = l, i[l] = !0
        }
        if (i.safari && i.android) {
            var f = "android";
            r.browser = f, i[f] = !0
        }
        if (i.safari && i.kindle) {
            var h = "kindle";
            r.browser = h, i[h] = !0
        }
        if (i.safari && i.silk) {
            var d = "silk";
            r.browser = d, i[d] = !0
        }
        return i.name = r.browser, i.platform = r.platform, i
    }

    function r() { return s.WINDOW.devicePixelRatio >= 1.5 }

    function o() { var t = i(); return t.isHighRes = r(), t }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.uaMatch = i;
    var s = n(10);
    e["default"] = o()
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s() { var t = d.WINDOW.pageYOffset || d.BODY.scrollTop; return t >= 0 ? t : 0 }

    function a() { return null === m && (m = s()), m }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        c = function(t, e, n) {
            for (var i = !0; i;) {
                var r = t,
                    o = e,
                    s = n;
                i = !1, null === r && (r = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== a) { if ("value" in a) return a.value; var u = a.get; if (void 0 === u) return; return u.call(s) }
                var c = Object.getPrototypeOf(r);
                if (null === c) return;
                t = c, e = o, n = s, i = !0, a = c = void 0
            }
        };
    e.getYOffset = s, e.getInitYOffset = a, n(21);
    var l = n(8),
        f = n(18),
        h = i(f),
        d = n(10),
        p = function(t) {
            function e(t) { r(this, e), c(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.strategy = t, this.latestKnownScrollY = t.getLatestPosition(), this.ticking = !1, this.stackContextCounter = 0, this.b = d.BODY, this.PAGE_LOCKED_CLASS = "homepage_locked", this.savedBodyValues = {}, this.isScrollStartedByUser = !1, (0, l.addEventListener)(t.getScrollableElement(), "scroll", this.onScroll.bind(this)) }
            return o(e, t), u(e, [{
                key: "onScroll",
                value: function() {
                    this.isScrollStartedByUser = !0;
                    var t = this.strategy.getLatestPosition();
                    this.latestKnownScrollY = t < 0 ? 0 : t, this.requestTick()
                }
            }, { key: "requestTick", value: function() { this.ticking || d.WINDOW.requestAnimationFrame(this.callbackWrapper.bind(this)), this.ticking = !0 } }, { key: "lock", value: function() { this._increase(), this._canLock() && (this.savedBodyValues = { bodyOverflow: this.b.style.overflow, bodyHeight: this.b.style.height }, this.b.style.overflow = "hidden", this.b.style.height = "100%", (0, l.addEventListener)(d.DOCUMENT, "keydown", this._onKeyDown.bind(this))) } }, { key: "unlock", value: function() { this._decrease(), this._canUnlock() && (this.b.classList.remove(this.PAGE_LOCKED_CLASS), "undefined" != typeof this.savedBodyValues.bodyOverflow && (this.b.style.overflow = this.savedBodyValues.bodyOverflow), "undefined" != typeof this.savedBodyValues.bodyHeight && (this.b.style.height = this.savedBodyValues.bodyHeight), (0, l.removeEventListener)(d.DOCUMENT, "keydown", this._onKeyDown)) } }, { key: "moveTo", value: function(t) { this.strategy.moveTo(t) } }, { key: "callbackWrapper", value: function() { this.ticking = !1, this.emit("update", this.latestKnownScrollY) } }, {
                key: "destroy",
                value: function() {
                    (0, l.removeEventListener)(this.strategy.getScrollableElement(), "scroll", this.onScroll)
                }
            }, { key: "_canLock", value: function() { return 1 === this.stackContextCounter } }, { key: "_canUnlock", value: function() { return 0 === this.stackContextCounter } }, { key: "_increase", value: function() { this.stackContextCounter++ } }, { key: "_decrease", value: function() { 0 !== this.stackContextCounter && this.stackContextCounter-- } }, { key: "_onKeyDown", value: function(t) { if (e.isArrowKey(t.keyCode)) return !1 } }], [{ key: "isArrowKey", value: function(t) { return 38 === t || 40 === t } }]), e
        }(h["default"]);
    e.ScrollHandler = p;
    var v = function() {
        function t() { r(this, t), this.element = d.WINDOW }
        return u(t, [{ key: "getScrollableElement", value: function() { return this.element } }, { key: "getLatestPosition", value: function() { return s() } }, { key: "moveTo", value: function(t) { this.element.scrollTo(0, t) } }]), t
    }();
    e.WindowScrollStrategy = v;
    var y = function() {
        function t(e) { r(this, t), this.element = e }
        return u(t, [{ key: "getScrollableElement", value: function() { return this.element } }, { key: "getLatestPosition", value: function() { return this.element.scrollTop } }, { key: "moveTo", value: function(t) { this.element.scrollTop = t + "px" } }]), t
    }();
    e.ElementScrollStrategy = y;
    var m = null;
    e["default"] = new p(new v)
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        a = function(t, e, n) {
            for (var i = !0; i;) {
                var r = t,
                    o = e,
                    s = n;
                i = !1, null === r && (r = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== a) { if ("value" in a) return a.value; var u = a.get; if (void 0 === u) return; return u.call(s) }
                var c = Object.getPrototypeOf(r);
                if (null === c) return;
                t = c, e = o, n = s, i = !0, a = c = void 0
            }
        },
        u = n(14),
        c = n(20),
        l = i(c),
        f = n(28),
        h = i(f),
        d = n(18),
        p = i(d),
        v = function(t) {
            function e() { r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments) }
            return o(e, t), s(e, [{ key: "update", value: function(t) {} }]), e
        }(p["default"]);
    e.TrackingElement = v;
    var y = function() {
        function t(e) { r(this, t), this.trackingElements = [], this.scrollHandler = e || h["default"] }
        return s(t, [{ key: "start", value: function() { l["default"].on("update", this.onResize.bind(this)), this.scrollHandler.on("update", this.onScroll.bind(this)), this._updateAll() } }, { key: "addTrackingElement", value: function(t) { this.trackingElements.push(t) } }, { key: "getSize", value: function() { return this._viewPortSize } }, { key: "getScrollPosition", value: function() { return this._lastScrollPosition } }, { key: "onResize", value: function() { this._viewPortSize = (0, u.getViewPort)(), this._updateTrackingElements() } }, { key: "onScroll", value: function(t) { this._lastScrollPosition = t, this._updateTrackingElements() } }, { key: "_updateTrackingElements", value: function() { for (var t = 0; t < this.trackingElements.length; t++) this.trackingElements[t].update(this) } }, { key: "_updateAll", value: function() { this._viewPortSize = (0, u.getViewPort)(), this._lastScrollPosition = this.scrollHandler.latestKnownScrollY, this._updateTrackingElements() } }]), t
    }();
    e.ViewportTracker = y
}, function(t, e, n) {
    "use strict";

    function i(t, e) { console.assert(!(null === e || "object" != typeof e), "Attributes must be an object"); for (var n in e) t.dataset[n] = e[n] }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setAttrs = i, n(31), e["default"] = function(t) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
        console.assert(!(null !== e && "string" != typeof e && e.constructor !== Array), "Attributes must be either a string or an array");
        var n = {};
        if (null === e)
            for (var i in t.dataset) n[i] = t.dataset[i];
        else { "string" == typeof e && (e = [e]); for (var i in e) n[e[i]] = t.dataset[e[i]] }
        return n
    }
}, function(t, e) {
    "use strict";
    if (Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                n = this,
                i = function() {},
                r = function() { return n.apply(this instanceof i && t ? this : t, e.concat(Array.prototype.slice.call(arguments))) };
            return i.prototype = this.prototype, r.prototype = new i, r
        }), /*! @source http://purl.eligrey.com/github/Xccessors/blob/master/xccessors-standard.js*/
        function() {
            var t = Object.prototype,
                e = t.__defineGetter__,
                n = t.__defineSetter__,
                i = t.__lookupGetter__,
                r = t.__lookupSetter__,
                o = t.hasOwnProperty;
            e && n && i && r && (Object.defineProperty || (Object.defineProperty = function(t, s, a) { if (arguments.length < 3) throw new TypeError("Arguments not optional"); if (s += "", o.call(a, "value") && (i.call(t, s) || r.call(t, s) || (t[s] = a.value), o.call(a, "get") || o.call(a, "set"))) throw new TypeError("Cannot specify an accessor and a value"); if (!(a.writable && a.enumerable && a.configurable)) throw new TypeError("This implementation of Object.defineProperty does not support false for configurable, enumerable, or writable."); return a.get && e.call(t, s, a.get), a.set && n.call(t, s, a.set), t }), Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function(t, e) {
                if (arguments.length < 2) throw new TypeError("Arguments not optional.");
                e += "";
                var n = { configurable: !0, enumerable: !0, writable: !0 },
                    s = i.call(t, e),
                    a = r.call(t, e);
                return o.call(t, e) ? s || a ? (delete n.writable, n.get = n.set = void 0, s && (n.get = s), a && (n.set = a), n) : (n.value = t[e], n) : n
            }), Object.defineProperties || (Object.defineProperties = function(t, e) { var n; for (n in e) o.call(e, n) && Object.defineProperty(t, n, e[n]) }))
        }(), !(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
        var n = {
            enumerable: !0,
            get: function() {
                var t, e, n, i, r, o, s = this,
                    a = this.attributes,
                    u = a.length,
                    c = function(t) { return t.charAt(1).toUpperCase() },
                    l = function() { return this },
                    f = function(t, e) { return "undefined" != typeof e ? this.setAttribute(t, e) : this.removeAttribute(t) };
                try {
                    ({}).__defineGetter__("test", function() {}), e = {}
                } catch (h) { e = document.createElement("div") }
                for (t = 0; t < u; t++)
                    if (o = a[t], o && o.name && /^data-\w[\w\-]*$/.test(o.name)) { n = o.value, i = o.name, r = i.substr(5).replace(/-./g, c); try { Object.defineProperty(e, r, { enumerable: this.enumerable, get: l.bind(n || ""), set: f.bind(s, i) }) } catch (d) { e[r] = n } }
                return e
            }
        };
        try { Object.defineProperty(Element.prototype, "dataset", n) } catch (i) { n.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", n) }
    }
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) { if (t.element && "undefined" != typeof t.classAdded) { var e = t.element; "IMG" === e.nodeName && t.classAdded === !1 && e.setAttribute("src", e.getAttribute("src")) } }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        u = function(t, e, n) {
            for (var i = !0; i;) {
                var r = t,
                    o = e,
                    s = n;
                i = !1, null === r && (r = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== a) { if ("value" in a) return a.value; var u = a.get; if (void 0 === u) return; return u.call(s) }
                var c = Object.getPrototypeOf(r);
                if (null === c) return;
                t = c, e = o, n = s, i = !0, a = c = void 0
            }
        };
    e.checkImage = s;
    var c = n(17),
        l = n(10),
        f = n(15),
        h = n(30),
        d = i(h),
        p = n(33),
        v = i(p),
        y = n(29),
        m = n(18),
        g = i(m),
        w = n(22),
        b = i(w),
        _ = function(t) {
            function e(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? "j-visible" : arguments[1];
                r(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.trackingSection = t, this.className = n, this._isClassAdded = !1
            }
            return o(e, t), a(e, [{ key: "checkClassStatus", value: function() {} }, {
                key: "add",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    this._isClassAdded || (this.trackingSection.elClassList.add(this.className), this._isClassAdded = !0, t && this.notify())
                }
            }, {
                key: "remove",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    this._isClassAdded && (this.trackingSection.elClassList.remove(this.className), this._isClassAdded = !1, t && this.notify())
                }
            }, { key: "notify", value: function() { this.emit("update", { classAdded: this._isClassAdded, element: this.trackingSection.el }) } }]), e
        }(g["default"]);
    e.ClassChecker = _;
    var k = function(t) {
        function e(t) {
            r(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.el = t, this.elClassList = this.el.classList;
            var n = (0, d["default"])(this.el, ["startPos"]),
                i = parseInt(n.startPos);
            this.triggerRatio = 1 - i / 100, this.classChecker = new _(this), this.classChecker.on("update", this._notify.bind(this))
        }
        return o(e, t), a(e, [{
            key: "update",
            value: function(t) {
                this.classChecker.checkClassStatus();
                var e = (0, f.boundingBox)(this.el).top,
                    n = t.getSize().height,
                    i = n * this.triggerRatio;
                e <= i ? this.classChecker.add() : n < e && this.classChecker.remove()
            }
        }, { key: "_notify", value: function(t) { this.emit("update", t) } }]), e
    }(y.TrackingElement);
    e.FadeInTrackingSection = k;
    var O = function(t) {
        function e(t) {
            r(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.el = t, this.elClassList = this.el.classList;
            var n = (0, d["default"])(this.el, ["trackingPos"]);
            if (this.trackingHeightRatio = .5, "undefined" != typeof n.trackingPos) {
                var i = parseInt(n.trackingPos);
                console.assert(isNaN(i), "Can't parse trackingPos parameter"), !isNaN(i) && i >= 0 && i <= 100 && (this.trackingHeightRatio = 1 - i / 100)
            }
            this._isTracked = !1
        }
        return o(e, t), a(e, [{
            key: "update",
            value: function(t) {
                if (!this._isTracked) {
                    var e = (0, f.boundingBox)(this.el).top,
                        n = t.getSize().height,
                        i = n * this.trackingHeightRatio;
                    if (e <= i) {
                        this._isTracked = !0;
                        var r = this.el.getAttribute("data-section-name");
                        r && v["default"].sectionVisible(r)
                    }
                }
            }
        }]), e
    }(y.TrackingElement);
    e.OnceTrackedSection = O;
    var E = function(t) {
        function e(t) {
            r(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.el = t, this.elClassList = this.el.classList;
            var n = (0, d["default"])(this.el, ["startPos", "scrollOutPos", "scrollEndPos"]),
                i = parseInt(n.startPos),
                o = parseInt(n.scrollOutPos);
            if (this.opacityHeightRatio = 1 - o / 100, this.opacityEndHeightRatio = 0, this.triggerRatio = 1 - i / 100, n.scrollEndPos) { var s = parseInt(n.scrollEndPos);!isNaN(s) && s >= 0 && s <= 100 && (this.opacityEndHeightRatio = 1 - s / 100) }
            this._isVisible = !1, this._isOnGPU = !1, this._cachedOpacity = this.el.style.opacity, this.classChecker = new _(this), this.classChecker.on("update", this._notify.bind(this))
        }
        return o(e, t), a(e, [{
            key: "update",
            value: function(t) {
                this.classChecker.checkClassStatus();
                var e = (0, f.boundingBox)(this.el).top,
                    n = t.getSize().height,
                    i = n * this.opacityHeightRatio,
                    r = n * this.opacityEndHeightRatio,
                    o = n * this.triggerRatio;
                n >= e && e >= 0 ? (this._isVisible ? e <= i ? (this.classChecker.remove(!1), this.setOpacity(1 - (0, c.clamp)((0, c.map)(e, i, r, 0, 1), 0, 1))) : this.setOpacity(1) : e <= o ? (this._isVisible = !0, this.classChecker.add()) : this.setOpacity(0), this.addToGPU()) : (n < e && (this._isVisible = !1), this.classChecker.remove(), this.setOpacity(0), this.removeFromGPU())
            }
        }, { key: "setOpacity", value: function(t) { this._cachedOpacity !== t && (this.el.style.opacity = t) } }, { key: "addToGPU", value: function() { this._isOnGPU || (this.el.style[(0, b["default"])("transform")] = "translate3d(0, 0, 0)", this._isOnGPU = !0) } }, { key: "removeFromGPU", value: function() { this._isOnGPU && (this.el.style[(0, b["default"])("transform")] = "none", this._isOnGPU = !1) } }, { key: "_notify", value: function(t) { this.emit("update", t) } }]), e
    }(y.TrackingElement);
    e.FadeInScrollOutTrackingSection = E, e["default"] = function() {
        for (var t = (0, l.querySelectorAll)(".j-fadeslidein-scrollout-trigger, .j-fadein-scrollout-trigger"), e = (0, l.querySelectorAll)(".j-adp-devices-trigger, .j-fadein-trigger, .j-fadeslidein-trigger, .j-discipline-icon-trigger, .j-spinrilla-covers-trigger"), n = (0, l.querySelectorAll)("[data-section-name]"), i = new y.ViewportTracker, r = 0; r < t.length; r++) { var o = new E(t[r]); "IMG" === t[r].nodeName && o.on("update", s), i.addTrackingElement(o) }
        for (var r = 0; r < e.length; r++) { var o = new k(e[r]); "IMG" === e[r].nodeName && o.on("update", s), i.addTrackingElement(o) }
        for (var r = 0; r < n.length; r++) i.addTrackingElement(new O(n[r]));
        i.start()
    }
}, function(t, e, n) {
    "use strict";

    function i(t) { if (Array.isArray(t)) { for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]; return n } return Array.from(t) }

    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        s = n(10),
        a = n(8),
        u = function() {
            function t(e) { r(this, t), this.ANIMATION_CATEGORY_NAME = "Animation", this.ANIMATION_STOP_ACTION_NAME = "stop", this.SECTIONS_CATEGORY_NAME = "Section", this.SECTIONS_VISIBLE_ACTION_NAME = "visible", this.ANIMATION_FPS_ACTION_NAME = "FPS", this.ANIMATION_GLITCH_FPS_ACTION_NAME = "Glitch FPS", this.CONTACT_FROM_SENT_CATEGORY_NAME = "Form", this.CONTACT_FROM_SENT_ACTION_NAME = "Contact form sent", this.EXTERNAL_LINK_CATEGORY_NAME = "External link", this.EXTERNAL_LINK_ACTION_NAME = "Click" }
            return o(t, [{ key: "event", value: function(t, e, n, i) { ga("send", "event", t, e, n, i) } }, {
                key: "animationStopped",
                value: function(t, e) {
                    e = e || 0;
                    var n = Math.round(e / 1e3);
                    this.event(this.ANIMATION_CATEGORY_NAME, this.ANIMATION_STOP_ACTION_NAME, t, n)
                }
            }, { key: "sectionVisible", value: function(t) { this.event(this.SECTIONS_CATEGORY_NAME, this.SECTIONS_VISIBLE_ACTION_NAME, t) } }, { key: "fps", value: function(t) { t = Math.round(t), this.event(this.ANIMATION_CATEGORY_NAME, this.ANIMATION_FPS_ACTION_NAME, this.ANIMATION_GLITCH_FPS_ACTION_NAME, t) } }, { key: "getExternalLinks", value: function() { var t = []; return t.push.apply(t, i((0, s.querySelectorAll)('a[href^="http"]'))), t.push.apply(t, i((0, s.querySelectorAll)('a[href^="//"]'))), t } }, {
                key: "trackExternalLinks",
                value: function() {
                    var t = this.getExternalLinks(),
                        e = this;
                    (0, a.addEventListener)(t, "click", function(t) { e.onExternalLinkClick(this, t) })
                }
            }, {
                key: "onExternalLinkClick",
                value: function(t, e) {
                    e.preventDefault();
                    var n = t.getAttribute("href");
                    if (this.event(this.EXTERNAL_LINK_CATEGORY_NAME, this.EXTERNAL_LINK_ACTION_NAME, "url", n), "_blank" === t.getAttribute("target")) {
                        var i = window.open(n, "_blank");
                        i.focus()
                    } else window.location = n
                }
            }, { key: "formSent", value: function() { this.event(this.CONTACT_FROM_SENT_CATEGORY_NAME, this.CONTACT_FROM_SENT_ACTION_NAME) } }]), t
        }();
    e["default"] = new u, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = function(t, e, n) {
            for (var i = !0; i;) {
                var r = t,
                    o = e,
                    s = n;
                i = !1, null === r && (r = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== a) { if ("value" in a) return a.value; var u = a.get; if (void 0 === u) return; return u.call(s) }
                var c = Object.getPrototypeOf(r);
                if (null === c) return;
                t = c, e = o, n = s, i = !0, a = c = void 0
            }
        },
        a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        u = n(28),
        c = i(u),
        l = n(20),
        f = i(l),
        h = n(10),
        d = n(18),
        p = i(d),
        v = n(15),
        y = n(22),
        m = i(y),
        g = { ON_THE_TOP: 0, HIDDEN: 1, VISIBLE: 2, READY: 3 },
        w = function() {
            function t() { o(this, t), this.TOGGLE_CLASS = "toggle-menu-mode", this.MENU_MODE_DATA_ATTRIBUTE_NAME = "data-menu-mode", this.MENU_MODE_CLASS_PREFIX = "j__menu_mode_", this.clsList = (0, h.querySelector)(".nav").classList }
            return a(t, [{
                key: "findElementTops",
                value: function() {
                    var t = (0, h.querySelectorAll)("." + this.TOGGLE_CLASS),
                        e = [];
                    for (var n in t) e.push({ mode: t[n].getAttribute(this.MENU_MODE_DATA_ATTRIBUTE_NAME), top: (0, v.boundingBox)(t[n]).top });
                    return e
                }
            }, { key: "changeDisplayMode", value: function(t) { this.resetMode(), t.mode && this.setMode(t.mode) } }, { key: "setMode", value: function(t) { this.clsList.add(this.MENU_MODE_CLASS_PREFIX + t) } }, {
                key: "resetMode",
                value: function() {
                    var t = this,
                        e = [].slice.call(this.clsList);
                    e.forEach(function(e) { e && e.indexOf(t.MENU_MODE_CLASS_PREFIX) > -1 && t.clsList.remove(e) })
                }
            }]), t
        }(),
        b = function() {
            function t() { o(this, t), this.BODY_CLASS = "show-fixed-menu", this.clsList = h.BODY.classList, this.menu = (0, h.querySelector)(".nav"), this.menuHeight = (0, v.height)(this.menu), this.menu.style[(0, m["default"])("transition")] = (0, m["default"])("transform") + " 0.49s cubic-bezier(.2,.46,.41,1), opacity .7s, background-color .7s" }
            return a(t, [{
                key: "update",
                value: function(t) {
                    switch (t) {
                        case g.HIDDEN:
                            this.ready();
                            break;
                        case g.ON_THE_TOP:
                            this.onTop();
                            break;
                        case g.VISIBLE:
                            this.show();
                            break;
                        case g.READY:
                            this.ready()
                    }
                }
            }, { key: "onTop", value: function() { this.menu.style[(0, m["default"])("transform")] = "translate3d(0, 0, 0)" } }, { key: "show", value: function() { this.menu.style[(0, m["default"])("transform")] = "translate3d(0, 0, 0)" } }, { key: "ready", value: function() { this.menu.style[(0, m["default"])("transform")] = "translate3d(0, -" + this.menuHeight + "px, 0)" } }]), t
        }(),
        _ = function(t) {
            function e(t) { o(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.height = t, this.SCROLLBACK_SIZE = 100, this.currentState = g.ON_THE_TOP, this.hidden = !1, this.lastPosition = 0 }
            return r(e, t), a(e, [{ key: "finishSetup", value: function() { this.update((0, u.getInitYOffset)()) } }, {
                key: "update",
                value: function(t) {
                    if (t <= this.height) return void(this.currentState == g.VISIBLE ? t <= 0 && (this.currentState = g.ON_THE_TOP, this.emit("update", this.currentState)) : this.currentState !== g.ON_THE_TOP && (this.currentState = g.ON_THE_TOP, this.emit("update", this.currentState)));
                    var e = t - this.lastPosition;
                    e > 0 ? this.hidden ? this.lastPosition = t : Math.abs(e) > this.SCROLLBACK_SIZE && (this.hidden = !0, this.currentState = g.HIDDEN, this.lastPosition = t, this.emit("update", this.currentState)) : this.hidden ? Math.abs(e) > this.SCROLLBACK_SIZE ? (this.hidden = !1, this.currentState = g.VISIBLE, this.lastPosition = t, this.emit("update", this.currentState)) : this.currentState !== g.READY && (this.currentState = g.READY, this.emit("update", this.currentState)) : this.lastPosition = t
                }
            }]), e
        }(p["default"]),
        k = function(t) {
            function e(t, n) { o(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.halfHeight = t / 2, this.normalizedValues = [], this.values = n, this.values.sort(function(t, e) { return t.top - e.top }), this.currentSection = null }
            return r(e, t), a(e, [{
                key: "finishSetup",
                value: function() {
                    var t = (0, u.getInitYOffset)();
                    this.initializeNormalizerValues(t), this.update(t)
                }
            }, { key: "initializeNormalizerValues", value: function(t) { for (var e in this.values) this.normalizedValues.push({ mode: this.values[e].mode, top: this.values[e].top + t - this.halfHeight }) } }, {
                key: "updateCurrentSection",
                value: function(t) {
                    var e = this.normalizedValues;
                    this.currentSection = 0;
                    for (var n in e) {
                        if (t <= e[n].top) break;
                        this.currentSection = e[n]
                    }
                }
            }, { key: "sendSignal", value: function() { this.emit("update", { mode: this.mode }) } }, {
                key: "update",
                value: function(t) {
                    var e = this.currentSection;
                    this.updateCurrentSection(t), this.currentSection !== e && (this.mode = this.currentSection.mode, this.sendSignal())
                }
            }]), e
        }(p["default"]),
        O = function() {
            function t() { o(this, t), this.initElements(), this.registerEvents() }
            return a(t, [{ key: "initElements", value: function() { this.view = new b, this.blockView = new w, this.showingModeModel = new _(this.view.menuHeight), this.displayModeModel = new k(this.view.menuHeight, this.blockView.findElementTops()) } }, { key: "registerEvents", value: function() { c["default"].on("update", this.onScroll.bind(this)), f["default"].on("update", this.onResize.bind(this)), this.showingModeModel.on("update", this.view.update.bind(this.view)), this.displayModeModel.on("update", this.blockView.changeDisplayMode.bind(this.blockView)), this.showingModeModel.finishSetup(), this.displayModeModel.finishSetup() } }, { key: "onScroll", value: function(t) { this.showingModeModel.update(t), this.displayModeModel.update(t) } }, {
                key: "onResize",
                value: function() {
                    var t = (0, u.getInitYOffset)();
                    this.displayModeModel.initializeNormalizerValues(t), this.displayModeModel.update(t)
                }
            }, { key: "underPageMenu", value: function() { this.view.menu.classList.add("j-under-page-menu") } }, { key: "underPage", value: function() { this.view.menu.classList.remove("j-under-page-menu") } }]), t
        }();
    e["default"] = O, t.exports = e["default"]
}, , , function(t, e, n) {
    "use strict";

    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        o = n(10),
        s = function() {
            function t(e) {
                var n = this,
                    r = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1],
                    o = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2];
                if (i(this, t), this.selectorPrefix = r, this.selectorSuffix = o, this.hiresSrcAttribute = "data-hires-src", this.lowresSrcAttribute = "data-lowres-src", this.stubSrcAttribute = "data-stub-src", this.ratioToSwitchOn = 1.5, e) { var s = this.getStubImages(); return void s.forEach(function(t) { t.setAttribute("src", t.getAttribute(n.stubSrcAttribute)) }) }
                if (this.checkConditions()) {
                    var s = this.getHiresImages();
                    s.forEach(function(t) { t.setAttribute("src", t.getAttribute(n.hiresSrcAttribute)) })
                } else {
                    var s = this.getLowresImages();
                    s.forEach(function(t) { t.setAttribute("src", t.getAttribute(n.lowresSrcAttribute)) })
                }
            }
            return r(t, [{ key: "getHiresImages", value: function() { return (0, o.querySelectorAll)(this.selectorPrefix + "img[" + this.hiresSrcAttribute + "]" + this.selectorSuffix) } }, { key: "getLowresImages", value: function() { return (0, o.querySelectorAll)(this.selectorPrefix + "img[" + this.lowresSrcAttribute + "]" + this.selectorSuffix) } }, { key: "getStubImages", value: function() { return (0, o.querySelectorAll)(this.selectorPrefix + "img[" + this.stubSrcAttribute + "]" + this.selectorSuffix) } }, { key: "checkConditions", value: function() { return window.devicePixelRatio >= this.ratioToSwitchOn } }]), t
        }();
    e["default"] = s, t.exports = e["default"]
}, , , , , , function(t, e, n) {
    "use strict";

    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
        }(),
        o = n(10),
        s = function() {
            function t(e) { i(this, t), this.el = e, this.classesToAdd = [], this.classesToRemove = [] }
            return r(t, [{ key: "add", value: function(t) { this.classesToAdd.push(t) } }, { key: "remove", value: function(t) { this.classesToRemove.push(t) } }, { key: "flush", value: function() { this.classesToAdd.length > 0 && (this.el.classList.add.apply(this.el.classList, this.classesToAdd), this.classesToAdd = []), this.classesToRemove.length > 0 && (this.el.classList.remove.apply(this.el.classList, this.classesToRemove), this.classesToRemove = []) } }]), t
        }();
    e["default"] = s;
    var a = new s(o.HTML);
    e.htmlClassAdder = a
}, function(t, e, n) {
    "use strict";

    function i(t) { return t && t.__esModule ? t : { "default": t } }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(45),
        o = n(27),
        s = i(o),
        a = n(43),
        u = n(10),
        c = n(14);
    e["default"] = function() {
        var t = 767,
            e = (0, c.getViewPort)().width;
        if ((0, r.isTouch)() && a.htmlClassAdder.add("touch"), s["default"].mobile) {
            a.htmlClassAdder.add("mobile");
            var n = (0, u.querySelectorAll)("video");
            for (var i in n) {
                var o = n[i];
                o.parentNode.removeChild(o)
            }
            s["default"].iphone || e <= t ? a.htmlClassAdder.add("phone") : a.htmlClassAdder.add("tablet")
        }
        s["default"].safari || a.htmlClassAdder.remove("disable-safari-blending"), s["default"].safari && a.htmlClassAdder.add("safari"), s["default"].android && a.htmlClassAdder.add("android"), (s["default"].mozilla || s["default"].msie) && a.htmlClassAdder.add("j-disable-fixed-positions"), s["default"].msie && a.htmlClassAdder.add("j__env_IE")
    }, t.exports = e["default"]
}, function(t, e, n) {
    "use strict";

    function i() { return "ontouchstart" in r.WINDOW || r.WINDOW.DocumentTouch && r.DOCUMENT instanceof DocumentTouch }
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isTouch = i;
    var r = n(10)
}]);