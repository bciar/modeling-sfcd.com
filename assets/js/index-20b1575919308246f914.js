webpackJsonp([1], [function(e, t, i) { e.exports = i(50) }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function o() {
        var e = u.DOCUMENT.createElement("p");
        e.style.width = "100%", e.style.height = "200px";
        var t = u.DOCUMENT.createElement("div");
        t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), u.BODY.appendChild(t);
        var i = e.offsetWidth;
        t.style.overflow = "scroll";
        var n = e.offsetWidth;
        return i == n && (n = t.clientWidth), u.BODY.removeChild(t), i - n
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }();
    t.getScrollBarWidth = o;
    var u = i(10),
        c = i(20),
        h = n(c),
        f = i(36),
        d = function() {
            function e() { r(this, e), this.savedParameters = {} }
            return l(e, [{ key: "apply", value: function(e) {} }, { key: "restore", value: function() {} }]), e
        }();
    t.AScrollBarStrategy = d;
    var m = function(e) {
        function t() { r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.pageElement = (0, u.querySelector)(".page"), this.navElement = (0, u.querySelector)(".nav"), this.contactsView = (0, u.querySelector)(".open-menu__contacts") }
        return a(t, e), l(t, [{ key: "restore", value: function() { this.pageElement.style.marginRight = this.savedParameters.pageElementMargin, this.navElement.style.left = this.savedParameters.navElementLeft, this.contactsView.style.marginLeft = this.savedParameters.contactElementMargin } }, { key: "apply", value: function(e) { this.savedParameters.pageElementMargin = this.pageElement.style.marginRight, this.savedParameters.navElementLeft = this.navElement.style.left, this.savedParameters.contactElementMargin = this.contactsView.style.marginLeft, this.pageElement.style.marginRight = e + "px", this.navElement.style.left = -1 * e + "px", this.contactsView.style.marginLeft = -1 * e / 2 + "px" } }]), t
    }(d);
    t.DefaultWideScreenScrollBarStrategy = m;
    var p = function(e) {
        function t() { r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.pageElement = (0, u.querySelector)(".page"), this.contactsView = (0, u.querySelector)(".open-menu__contacts"), this.navElement = (0, u.querySelector)(".nav") }
        return a(t, e), l(t, [{ key: "restore", value: function() { this.pageElement.style.marginRight = this.savedParameters.pageElementMargin, this.contactsView.style.marginLeft = this.savedParameters.contactElementMargin, this.navElement.style.right = this.savedParameters.navElementRight } }, { key: "apply", value: function(e) { this.savedParameters.pageElementMargin = this.pageElement.style.marginRight, this.savedParameters.contactElementMargin = this.contactsView.style.marginLeft, this.savedParameters.navElementRight = this.navElement.style.right, this.pageElement.style.marginRight = e + "px", this.contactsView.style.marginLeft = -1 * e / 2 + "px", this.navElement.style.right = e + "px" } }]), t
    }(d);
    t.DefaultSmallScreenScrollBarStrategy = p;
    var v = function() {
        function e(t, i) { r(this, e), console.assert(t instanceof d || !(i instanceof d), "Scrollbar strategy doesn't implement ScrollBarStrategyInterface"), this.smallScreenStrategy = t, this.wideScreenStrategy = i, this.SMALLSCREENBREAKPOINT = 1308, this.isWideScreenSet = null, this.inFixedMode = null, this.context = new y, h["default"].on("update", this.onResize.bind(this)), this.onResize() }
        return l(e, [{ key: "fix", value: function() { this.context.fix(), this.inFixedMode = !0 } }, { key: "unfix", value: function() { this.context.unfix(), this.inFixedMode = !1 } }, { key: "onResize", value: function() { this.isScreenWide() ? this.isWideScreenSet !== !0 && (this.context.reset(), this.context.setStrategy(this.wideScreenStrategy), this.isWideScreenSet = !0, null !== this.inFixedMode && this.inFixedMode && this.fix()) : this.isWideScreenSet !== !1 && (this.context.reset(), this.context.setStrategy(this.smallScreenStrategy), this.isWideScreenSet = !1, null !== this.inFixedMode && this.inFixedMode && this.fix()) } }, { key: "isScreenWide", value: function() { return (0, f.width)() > this.SMALLSCREENBREAKPOINT } }]), e
    }();
    t.ScrollBarFixer = v;
    var y = function() {
        function e() { r(this, e), this.strategy = null, this.scrollbarWidth = o(), this.stackContextCounter = 0 }
        return l(e, [{ key: "setStrategy", value: function(e) { this.strategy = e } }, { key: "fix", value: function() { 0 !== this.scrollbarWidth && null !== this.strategy && (this._increase(), this._canFix() && this.strategy.apply(this.scrollbarWidth)) } }, { key: "unfix", value: function() { 0 !== this.scrollbarWidth && null !== this.strategy && (this._decrease(), this._canUnfix() && this.strategy.restore(this.scrollbarWidth)) } }, { key: "reset", value: function() { null !== this.strategy && this.strategy.restore(this.scrollbarWidth), this.stackContextCounter = 0 } }, { key: "_canFix", value: function() { return 1 === this.stackContextCounter } }, { key: "_canUnfix", value: function() { return 0 === this.stackContextCounter } }, { key: "_increase", value: function() { this.stackContextCounter++ } }, { key: "_decrease", value: function() { 0 !== this.stackContextCounter && this.stackContextCounter-- } }]), e
    }();
    t.ScrollBarFixerContext = y, t["default"] = function() { return new v(new p, new m) }
}, function(e, t, i) {
    "use strict";

    function n() { return Math.max(r.BODY.scrollHeight, r.BODY.offsetHeight, r.HTML.clientHeight, r.HTML.scrollHeight, r.HTML.offsetHeight) }

    function a() { return Math.max(r.BODY.scrollWidth, r.BODY.offsetWidth, r.HTML.clientWidth, r.HTML.scrollWidth, r.HTML.offsetWidth) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.height = n, t.width = a;
    var r = i(9)
}, , , , , , , , , , function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = i(28),
        s = n(o),
        l = i(20),
        u = n(l),
        c = function() {
            function e(t) { a(this, e), this.view = t, this.view.update((0, o.getInitYOffset)()), s["default"].on("update", this.onScroll.bind(this)), u["default"].on("update", this.onScroll.bind(this)) }
            return r(e, [{ key: "onScroll", value: function(e) { this.view.update(e) } }]), e
        }();
    t["default"] = c, e.exports = t["default"]
}, , function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = i(15),
        s = i(28),
        l = i(49),
        u = (n(l), function() {
            function e(t, i, n) { a(this, e), this.el = t, this.trackingSection = i, this.delegate = n, n.view = this, this.setupInitialPosition() }
            return r(e, [{ key: "setupInitialPosition", value: function() { this.delegate.init(), this.update((0, s.getInitYOffset)()) } }, { key: "update", value: function(e) { this.move(e) } }, {
                key: "move",
                value: function() {
                    var e = (0, o.boundingBox)(this.trackingSection),
                        t = e.top / e.height,
                        i = Math.abs(t);
                    this.delegate.isMovingIn(t) ? this.moveIn(1 - i) : this.moveOut(i)
                }
            }, { key: "moveIn", value: function(e) { this.delegate.moveIn(e) } }, { key: "moveOut", value: function(e) { this.delegate.moveOut(e) } }]), e
        }());
    t["default"] = u, e.exports = t["default"]
}, function(e, t) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        a = function() {
            function e() { i(this, e), this.view = null }
            return n(e, [{ key: "init", value: function() {} }, { key: "isMovingIn", value: function(e) { return e > 0 } }, { key: "moveIn", value: function() {} }, { key: "moveOut", value: function() {} }]), e
        }();
    t["default"] = a, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }
    var a = i(51),
        r = i(27),
        o = n(r),
        s = void 0;
    s = o["default"].mobile ? new a.MobileIndexPage : new a.IndexPage, s.run()
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = i(3),
        s = i(10),
        l = i(46),
        u = n(l),
        c = i(28),
        h = n(c),
        f = i(27);
    n(f), i(8);
    i(52);
    var d = i(13),
        m = n(d),
        p = i(34),
        v = n(p),
        y = i(53),
        _ = n(y),
        g = i(37),
        S = n(g),
        O = i(35),
        b = i(43),
        w = i(44),
        P = n(w),
        T = i(32),
        k = n(T),
        E = i(55),
        x = n(E),
        A = i(56),
        M = n(A),
        F = i(62),
        j = i(63),
        C = n(j),
        I = i(65),
        B = n(I),
        q = i(66),
        L = n(q),
        D = i(67),
        R = n(D),
        U = i(81),
        G = n(U),
        V = i(82),
        N = n(V),
        W = i(83),
        H = n(W),
        Y = i(84),
        z = n(Y),
        Q = i(85),
        X = n(Q),
        Z = i(86),
        J = n(Z),
        K = i(87),
        $ = n(K),
        ee = i(33),
        te = n(ee),
        ie = i(61),
        ne = (n(ie), function() {
            function e() { a(this, e), this.animationsLoop = new R["default"], this.videos = new L["default"], this.workSectionView = new J["default"], (0, P["default"])(), b.htmlClassAdder.flush(), this.pageMenu = null, this.isMenuOpened = !1 }
            return r(e, [{
                key: "onWindowReady",
                value: function() {
                    var e = this,
                        t = new O.ScrollBarFixer(new F.SmallScreenScrollBarFixerStrategy, new F.WideScreenScrollBarFixerStrategy),
                        i = new A.HeroAppearance;
                    this.pageMenu = (0, m["default"])();
                    var n = new v["default"];
                    te["default"].trackExternalLinks(), this.pageMenu.on("update", function(i) { "opening" === i.state ? (h["default"].lock(), t.fix(), e.isMenuOpened = !0, e.animationsLoop.pause(), e.videos.stopAll()) : "close" === i.state && (h["default"].unlock(), t.unfix(), e.isMenuOpened = !1, e.animationsLoop.fireWireframeAnimation().then(a, e.animationsLoop.resume), e.videos.start()), "opening" === i.state || "open" === i.state ? n.underPageMenu() : n.underPage() }), this.videos.on("update", function(t) {
                        var i = (0, s.querySelector)(".home-header video");
                        i.isEqualNode(t.video) && (t.play ? e.animationsLoop.resume() : e.animationsLoop.pause())
                    });
                    var a = function() { setTimeout(function() { e.loadHeavyResourses(), e.workSectionView.show(), e.isMenuOpened || e.animationsLoop.run() }, 1e3), setTimeout(function() { h["default"].unlock(), t.unfix() }, 1500) };
                    i.on("update", function(i) {
                        var n = i.step;
                        if ("startAnimations" === n) h["default"].lock(), t.fix();
                        else if ("videoTimeout" === n || "videoLoaded" === n) {
                            if (e.isMenuOpened) return;
                            e.animationsLoop.fireWireframeAnimation().then(a)
                        } else "skipAnimations" === n && (a(), e.animationsLoop.run())
                    }), (0, $["default"])().then(function() { return i.run() }).then(function() {
                        (0, o.domReady)().then(e.onDomReady.bind(e))
                    })
                }
            }, { key: "loadHeavyResourses", value: function() { new S["default"], this.videos.load() } }, {
                key: "onDomReady",
                value: function() {
                    var e = this,
                        t = new M["default"];
                    t.on("update", function(i) { i.on ? (t.root.classList.add("home-header_faded"), e.animationsLoop.pause()) : (t.root.classList.remove("home-header_faded"), e.animationsLoop.resume()) }), (0, k["default"])(), (0, B["default"])(), (0, N["default"])(), new u["default"](t), new u["default"](new x["default"]), new u["default"](new G["default"]), new u["default"](new H["default"]), new u["default"](new X["default"]), new u["default"](new z["default"]), new C["default"](".home-disciplines", { triggerElementName: "list-itm", contentElementName: "text", hoverDelay: 0 }), new _["default"]
                }
            }, {
                key: "run",
                value: function() {
                    (0, o.windowReady)().then(this.onWindowReady.bind(this))
                }
            }]), e
        }());
    t.IndexPage = ne;
    var ae = function() {
        function e() { a(this, e), (0, P["default"])(), b.htmlClassAdder.flush(), this.PAGE_LOCKED_CLASS = "homepage_locked", this.pageMenu = null, this.unlockScroll() }
        return r(e, [{ key: "unlockScroll", value: function() { document.body.classList.remove(this.PAGE_LOCKED_CLASS) } }, {
            key: "onDomReady",
            value: function() {
                new S["default"]((!1), "html.tablet ", ".home-disciplines__icon"), new S["default"]((!0)), te["default"].trackExternalLinks(), this.pageMenu = (0, m["default"])();
                var e = new v["default"];
                this.pageMenu.on("update", function(t) { "opening" === t.state ? h["default"].lock() : "closing" === t.state && h["default"].unlock(), "opening" === t.state || "open" === t.state ? e.underPageMenu() : e.underPage() });
                var t = (0, s.querySelectorAll)(".j-hero-hide-menu, .j-hero-title-hidden, .j-hero-subtitle-hidden, .j-hero-bg-hidden, .j-spinrilla-covers-trigger, .j-trigger-show, .j-fadeout-trigger, .j-fadeout-trigger__fadeIn, .j-fadein-trigger");
                for (var i in t) t[i].classList.remove("j-hero-hide-menu", "j-hero-title-hidden", "j-hero-subtitle-hidden", "j-hero-bg-hidden", "j-spinrilla-covers-trigger", "j-trigger-show", "j-fadeout-trigger", "j-fadeout-trigger__fadeIn", "j-fadein-trigger");
                new C["default"](".home-disciplines", { triggerElementName: "list-itm", contentElementName: "text", hoverDelay: 0 })
            }
        }, {
            key: "run",
            value: function() {
                (0, $["default"])().then(o.domReady).then(this.onDomReady.bind(this))
            }
        }]), e
    }();
    t.MobileIndexPage = ae
}, function(e, t) { /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
    "use strict";
    "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || ! function(e) {
        if ("Element" in e) {
            var t = "classList",
                i = "prototype",
                n = e.Element[i],
                a = Object,
                r = String[i].trim || function() { return this.replace(/^\s+|\s+$/g, "") },
                o = Array[i].indexOf || function(e) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                s = function(e, t) { this.name = e, this.code = DOMException[e], this.message = t },
                l = function(e, t) { if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified"); if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character"); return o.call(e, t) },
                u = function(e) {
                    for (var t = r.call(e.getAttribute("class") || ""), i = t ? t.split(/\s+/) : [], n = 0, a = i.length; n < a; n++) this.push(i[n]);
                    this._updateClassName = function() { e.setAttribute("class", this.toString()) }
                },
                c = u[i] = [],
                h = function() { return new u(this) };
            if (s[i] = Error[i], c.item = function(e) { return this[e] || null }, c.contains = function(e) { return e += "", l(this, e) !== -1 }, c.add = function() {
                    var e, t = arguments,
                        i = 0,
                        n = t.length,
                        a = !1;
                    do e = t[i] + "", l(this, e) === -1 && (this.push(e), a = !0); while (++i < n);
                    a && this._updateClassName()
                }, c.remove = function() {
                    var e, t, i = arguments,
                        n = 0,
                        a = i.length,
                        r = !1;
                    do
                        for (e = i[n] + "", t = l(this, e); t !== -1;) this.splice(t, 1), r = !0, t = l(this, e); while (++n < a);
                    r && this._updateClassName()
                }, c.toggle = function(e, t) {
                    e += "";
                    var i = this.contains(e),
                        n = i ? t !== !0 && "remove" : t !== !1 && "add";
                    return n && this[n](e), t === !0 || t === !1 ? t : !i
                }, c.toString = function() { return this.join(" ") }, a.defineProperty) { var f = { get: h, enumerable: !0, configurable: !0 }; try { a.defineProperty(n, t, f) } catch (d) { d.number === -2146823252 && (f.enumerable = !1, a.defineProperty(n, t, f)) } } else a[i].__defineGetter__ && n.__defineGetter__(t, h)
        }
    }(self), function() {
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function(e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function(e) { var i, n = arguments.length; for (i = 0; i < n; i++) e = arguments[i], t.call(this, e) }
            };
            t("add"), t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var i = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) { return 1 in arguments && !this.contains(e) == !t ? t : i.call(this, e) }
        }
        e = null
    }())
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = i(54),
        s = n(o),
        l = i(10),
        u = function() {
            function e() { a(this, e), this.init(), s["default"].on("update", this.onUpdate.bind(this)) }
            return r(e, [{
                key: "init",
                value: function() {
                    var e = (0, l.querySelectorAll)("video");
                    this.videoStates = [];
                    for (var t in e) this.videoStates[t] = { video: e[t], state: !1 }
                }
            }, { key: "onUpdate", value: function(e) { e.isHidden ? this.disactivate() : this.activate() } }, {
                key: "disactivate",
                value: function() {
                    for (var e in this.videoStates) {
                        var t = this.videoStates[e];
                        t.video.paused || (t.state = !0, t.video.pause())
                    }
                }
            }, {
                key: "activate",
                value: function() {
                    for (var e in this.videoStates) {
                        var t = this.videoStates[e];
                        t.state && (t.video.play(), t.state = !1)
                    }
                }
            }]), e
        }();
    t["default"] = u, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(10),
        u = i(8),
        c = i(18),
        h = n(c),
        f = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.hiddenProperty = null; var e = void 0; "undefined" != typeof l.DOCUMENT.hidden ? (this.hiddenProperty = "hidden", e = "visibilitychange") : "undefined" != typeof l.DOCUMENT.mozHidden ? (this.hiddenProperty = "mozHidden", e = "mozvisibilitychange") : "undefined" != typeof l.DOCUMENT.msHidden ? (this.hiddenProperty = "msHidden", e = "msvisibilitychange") : "undefined" != typeof l.DOCUMENT.webkitHidden && (this.hiddenProperty = "webkitHidden", e = "webkitvisibilitychange"), null !== this.hiddenProperty && ((0, u.addEventListener)(l.DOCUMENT, e, this.onUpdate.bind(this)), this.onUpdate()) }
            return r(t, e), o(t, [{ key: "onUpdate", value: function() { this.emit("update", { isHidden: l.DOCUMENT[this.hiddenProperty] }) } }]), t
        }(h["default"]);
    t.CurrentTab = f, t["default"] = new f
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        l = i(30),
        u = n(l),
        c = i(22),
        h = n(c),
        f = i(10),
        d = i(17),
        m = i(48),
        p = n(m),
        v = i(49),
        y = n(v),
        _ = function() {
            function e(t) {
                r(this, e), this.el = t, this.opacity = 1;
                var i = (0, u["default"])(t, ["startPos", "endPos"]);
                this.startPosition = parseFloat(i.startPos), this.endPosition = parseFloat(i.endPos), console.assert(!(isNaN(this.startPosition) || isNaN(this.endPosition)), "Cannot parse startPos and/or endPos as double")
            }
            return s(e, [{ key: "movingIn", value: function() { this.opacity = 1, this.update() } }, { key: "movingOut", value: function(e) { e < this.startPosition ? this.opacity = 1 : e > this.endPosition ? this.opacity = 0 : this.opacity = 1 - (0, d.clamp)((0, d.map)(e, this.startPosition, this.endPosition, 0, 1), 0, 1), this.update() } }, { key: "update", value: function() { this.el.style.opacity = this.opacity } }]), e
        }(),
        g = function() {
            function e(t) {
                r(this, e);
                var i = t.el;
                this.bluePart = (0, f.querySelector)(".home-works__bg_blue", i), this.redPart = (0, f.querySelector)(".home-works__bg_red", i), this.yellowPart = (0, f.querySelector)(".home-works__bg_yellow", i), this._cachedBluePartOpacity = -1, this._cachedRedPartOpacity = -1, this._cachedYellowPartOpacity = -1, this.moveToGPU(), this._onTheTop = !0
            }
            return s(e, [{ key: "moveIn", value: function() { this.moveToGPU(), this._onTheTop || (this.setBluePartStyle(1), this.setRedPartStyle(0), this.setYellowPartStyle(0), this._onTheTop = !0) } }, {
                key: "moveOut",
                value: function(e) {
                    if (this._onTheTop = !1, e > 1.1) this.deleteFromGPU();
                    else if (e <= 1.1)
                        if (this.moveToGPU(), e < .1) this.setBluePartStyle(1), this.setRedPartStyle(0), this.setYellowPartStyle(0);
                        else if (e >= .1 && e <= .33) {
                        var t = (0, d.clamp)((0, d.map)(e, .1, .33, 0, 1), 0, 1);
                        this.setBluePartStyle(1 - t), this.setRedPartStyle(t), this.setYellowPartStyle(0)
                    } else if (e > .33 && e < .4) this.setBluePartStyle(0), this.setRedPartStyle(1), this.setYellowPartStyle(0);
                    else if (e >= .4 && e <= .63) {
                        var t = (0, d.clamp)((0, d.map)(e, .4, .63, 0, 1), 0, 1);
                        this.setBluePartStyle(0), this.setRedPartStyle(1 - t), this.setYellowPartStyle(t)
                    } else if (e > .63 && e < .8) this.setBluePartStyle(0), this.setRedPartStyle(0), this.setYellowPartStyle(1);
                    else if (e > .8) {
                        var t = (0, d.clamp)((0, d.map)(e, .8, 1, 0, 1), 0, 1);
                        this.setBluePartStyle(0), this.setRedPartStyle(0), this.setYellowPartStyle(1 - t)
                    }
                }
            }, { key: "setBluePartStyle", value: function(e) { this._cachedBluePartOpacity != e && (this.bluePart.style.opacity = e) } }, { key: "setRedPartStyle", value: function(e) { this._cachedRedPartOpacity != e && (this.redPart.style.opacity = e) } }, { key: "setYellowPartStyle", value: function(e) { this._cachedYellowPartOpacity != e && (this.yellowPart.style.opacity = e) } }, { key: "moveToGPU", value: function() { this._hasMovedToGPU || (this.bluePart.style[(0, h["default"])("transform")] = "translate3d(0, 0, 0)", this.redPart.style[(0, h["default"])("transform")] = "translate3d(0, 0, 0)", this.yellowPart.style[(0, h["default"])("transform")] = "translate3d(0, 0, 0)", this._hasMovedToGPU = !0) } }, { key: "deleteFromGPU", value: function() { this._hasMovedToGPU && (this.bluePart.style[(0, h["default"])("transform")] = "none", this.redPart.style[(0, h["default"])("transform")] = "none", this.yellowPart.style[(0, h["default"])("transform")] = "none", this._hasMovedToGPU = !1) } }]), e
        }(),
        S = function() {
            function e() { r(this, e), this.elements = [] }
            return s(e, [{ key: "addElement", value: function(e) { this.elements.push(e) } }, { key: "moveIn", value: function(e) { for (var t = 0; t < this.elements.length; t++) this.elements[t].movingIn(e) } }, { key: "moveOut", value: function(e) { for (var t = 0; t < this.elements.length; t++) this.elements[t].movingOut(e) } }]), e
        }(),
        O = function(e) {
            function t() { r(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return a(t, e), s(t, [{ key: "init", value: function() { this.colorParallax = new g(this.view), this.textParallax = new S(this.view); for (var e = (0, f.querySelectorAll)(".j-scroll-fadeout", this.view.el), t = 0; t < e.length; t++) this.textParallax.addElement(new _(e[t])) } }, { key: "moveIn", value: function(e) { this.colorParallax.moveIn(e), this.textParallax.moveIn(e) } }, { key: "moveOut", value: function(e) { this.colorParallax.moveOut(e), this.textParallax.moveOut(e) } }]), t
        }(y["default"]),
        b = function(e) {
            function t() { r(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return a(t, e), s(t, [{ key: "init", value: function() { this.TEXT_START_POSITION = 200, this.TEXT_SPEED_RATIO_ON_MOVEOUT = .8, this.TEXT_OPACITY_RATIO_ON_MOVEOUT = 1.4, this.SHADOW_RATIO = 100, this.textElement = (0, f.querySelector)(".home-works__text", this.view.el), this.shadowElement = (0, f.querySelector)(".home-works__device-shade", this.view.el) } }, {
                key: "moveIn",
                value: function(e) {
                    var t = (0, d.clamp)(e, 0, 1),
                        i = this.TEXT_START_POSITION * t;
                    this.setTextStyle(i);
                    var n = this.SHADOW_RATIO * (1 - t);
                    this.setShadowStyle(n)
                }
            }, {
                key: "moveOut",
                value: function(e) {
                    var t = (0, d.clamp)(e, 0, 1),
                        i = this.TEXT_START_POSITION * (1 + this.TEXT_SPEED_RATIO_ON_MOVEOUT * t),
                        n = 1 - t * this.TEXT_OPACITY_RATIO_ON_MOVEOUT;
                    this.setTextStyle(i, n);
                    var a = -1 * this.SHADOW_RATIO * t;
                    this.setShadowStyle(a)
                }
            }, { key: "setTextStyle", value: function(e) { this.textElement.style[(0, h["default"])("transform")] = "translate3d(0, " + Math.round(e) + "px, 0)" } }, { key: "setShadowStyle", value: function(e) { this.shadowElement.style[(0, h["default"])("transform")] = "translate3d(0, " + e + "px, 0)" } }]), t
        }(y["default"]),
        w = function() {
            function e() {
                r(this, e);
                var t = (0, f.querySelector)(".home-works"),
                    i = (0, f.querySelector)(".home-works__list", t),
                    n = (0, f.querySelector)(".home-works__itm_1", i),
                    a = (0, f.querySelector)(".home-works__itm_2", i),
                    o = (0, f.querySelector)(".home-works__itm_3", i);
                this.firstWork = new p["default"](n, n, new b), this.secondWork = new p["default"](a, a, new b), this.thirdWork = new p["default"](o, o, new b), this.wholeSectionView = new p["default"](t, t, new O)
            }
            return s(e, [{ key: "update", value: function(e) { this.firstWork.update(e), this.secondWork.update(e), this.thirdWork.update(e), this.wholeSectionView.update(e) } }]), e
        }();
    t["default"] = w, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(22),
        u = n(l),
        c = i(10),
        h = i(15),
        f = i(17),
        d = i(48),
        m = n(d),
        p = i(49),
        v = n(p),
        y = i(4),
        _ = n(y),
        g = i(57),
        S = n(g),
        O = i(14),
        b = i(30),
        w = n(b),
        P = i(58),
        T = n(P),
        k = i(18),
        E = n(k),
        x = i(20),
        A = n(x),
        M = i(8),
        F = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.deferred = _["default"].defer(), this.homeHeader = (0, c.querySelector)(".home-header"), this.timer = new S["default"](1e3), this.timer.on("update", this.onTimerTick.bind(this)), this.videoLoaded = !1, this.videoEl = (0, c.querySelector)(".section-fixed__bg-video", this.homeHeader), this.onVideoLoaded = null, this.subTitle = (0, c.querySelector)(".home-header__subtitle", this.homeHeader), this.subTitleSecond = (0, c.querySelector)(".second", this.subTitle), this.bgInner = (0, c.querySelector)(".home-header .section-fixed__bg_header-inner") }
            return r(t, e), o(t, [{
                key: "run",
                value: function() {
                    var e = this;
                    (0, O.percentInViewPort)(this.homeHeader) > .5 ? this.animate() : this.skip();
                    var t = (0, T["default"])(this.videoEl, JSON.parse((0, w["default"])(this.videoEl, "options").options));
                    return t.load().then(this.onVideoLoaded.bind(this)), (0, M.once)(this.subTitleSecond, (0, u["default"])("transitionend"), function(t) { e.subTitle.classList.remove("j-hero-subtitle-animate"), e.subTitle = null, e.subTitleSecond = null }), this.deferred.promise
                }
            }, { key: "animate", value: function() { this.timer.start(), this.emit("update", { step: "startAnimations" }), this.onVideoLoaded = this.onVideoLoadedWithAnimation } }, { key: "skip", value: function() { this.showMenu(), this.showBackground(), this.deferred.resolve(), this.emit("update", { step: "skipAnimations" }), this.onVideoLoaded = this.onVideoLoadedWithSkip } }, { key: "clean", value: function() { this.deferred = null, this.timer = null, this.videoEl = null, this.homeHeader = null } }, { key: "destroy", value: function() { this.timer.stop(), this.deferred.resolve(), this.emit("update", { step: "destroy" }), this.clean() } }, { key: "onTimerTick", value: function(e) { e.tickCounter >= 5 && this.destroy(), 1 == e.tickCounter && this.showMenu(), 3 == e.tickCounter && (this.videoLoaded || (this.showAfterTheVideoLoaded(), this.emit("update", { step: "videoTimeout" }))) } }, { key: "showAfterTheVideoLoaded", value: function() { this.showBackground() } }, { key: "onVideoLoadedWithAnimation", value: function() { this.videoLoaded = !0, this.videoEl.play(), this.showAfterTheVideoLoaded(), this.bgInner.classList.remove("j-hero-placeholder-shown"), this.emit("update", { step: "videoLoaded" }) } }, { key: "onVideoLoadedWithSkip", value: function() { this.videoLoaded = !0, this.clean() } }, {
                key: "showMenu",
                value: function() {
                    var e = (0, c.querySelector)(".j-menu-state");
                    e.classList.remove("j-hero-hide-menu"), this.emit("update", { step: "showMenu" })
                }
            }, {
                key: "showBackground",
                value: function() {
                    var e = (0, c.querySelector)(".home-header__title");
                    e.classList.remove("j-hero-title-hidden");
                    var t = (0, c.querySelector)(".home-header__subtitle");
                    t.classList.remove("j-hero-subtitle-hidden"), this.bgInner.classList.remove("j-hero-bg-hidden")
                }
            }]), t
        }(E["default"]);
    t.HeroAppearance = F;
    var j = function(e) {
            function t(e) { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.evEmitter = e }
            return r(t, e), o(t, [{ key: "init", value: function() { this.mainTitle = (0, c.querySelector)(".home-header__title-inner", this.view.el), this.subTitleFirst = (0, c.querySelector)(".home-header__subtitle .first", this.view.el), this.subTitleSecond = (0, c.querySelector)(".home-header__subtitle .second", this.view.el), this.background = (0, c.querySelector)(".section-fixed__bg_header", this.view.el), this.fadeBlock = (0, c.querySelector)(".home-header__fade", this.view.el), A["default"].on("update", this.onResize.bind(this)), this.onResize(), this.moveToGPU(), this._isStartedFading = !1 } }, { key: "onResize", value: function() { this.trackingSectionHeight = (0, h.height)(this.view.trackingSection), this.quarterTrackingSectionHeight = this.trackingSectionHeight / 4 } }, {
                key: "moveOut",
                value: function(e) {
                    if (e <= .58) {
                        var t = 1,
                            i = (0, f.clamp)((0, f.map)(e, 0, .58, 0, 1), 0, 1);
                        e >= .44 && (t = 1 - (0, f.clamp)((0, f.map)(e, .44, .58, 0, 1), 0, 1)), this.setMainTitleStyle(-1 * this.quarterTrackingSectionHeight * i, t)
                    } else this.setMainTitleStyle(1e3, 0);
                    if (e < .2) this.setSubTitleFirstStyle(1);
                    else if (e >= .2 && e <= .3) {
                        var i = (0, f.clamp)((0, f.map)(e, .2, .3, 0, 1), 0, 1);
                        this.setSubTitleFirstStyle(1 - i)
                    } else this.setSubTitleFirstStyle(0);
                    if (e < .3) this.setSubTitleSecondStyle(1);
                    else if (e >= .3 && e <= .4) {
                        var i = (0, f.clamp)((0, f.map)(e, .3, .4, 0, 1), 0, 1);
                        this.setSubTitleSecondStyle(1 - i)
                    } else this.setSubTitleSecondStyle(0);
                    if (this.setBackgroundStyle(-1 * (this.trackingSectionHeight - 300) * (0, f.clamp)(e, 0, 1)), e > .54 ? this._isStartedFading || (this._isStartedFading = !0, this.evEmitter.emit("update", { on: this._isStartedFading })) : e < .54 && this._isStartedFading && (this._isStartedFading = !1, this.evEmitter.emit("update", { on: this._isStartedFading })), e < .5) this.setFadeBlockStyle(0), this.removeAbsoluteBGPositioning();
                    else if (e >= .5 && e <= .9) {
                        var i = (0, f.clamp)((0, f.map)(e, .5, .9, 0, 1), 0, 1);
                        this.setFadeBlockStyle(i), this.removeAbsoluteBGPositioning()
                    } else e > .9 && (this.setFadeBlockStyle(1), this.setAbsoluteBGPositioning());
                    e > 1.4 ? this.deleteFromGPU() : this.moveToGPU()
                }
            }, { key: "setMainTitleStyle", value: function(e, t) { this.mainTitle.style[(0, u["default"])("transform")] = "translate3d(0, " + Math.round(e) + "px, 0)", this.mainTitle.style.opacity = t } }, { key: "setSubTitleFirstStyle", value: function(e) { this._previousSubTitleFirstOpacity && this._previousSubTitleFirstOpacity === e || (this.subTitleFirst.style.opacity = e, this._previousSubTitleFirstOpacity = e) } }, { key: "setSubTitleSecondStyle", value: function(e) { this._previousSubTitleSecondOpacity && this._previousSubTitleSecondOpacity === e || (this.subTitleSecond.style.opacity = e, this._previousSubTitleSecondOpacity = e) } }, { key: "setBackgroundStyle", value: function(e) { this._previousBgY && this._previousBgY === e || (this.background.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)", this._previousBgY = e) } }, { key: "setFadeBlockStyle", value: function(e) { this.fadeBlock.style.opacity = e } }, { key: "setAbsoluteBGPositioning", value: function() { this.background.style.position = "absolute" } }, { key: "removeAbsoluteBGPositioning", value: function() { this.background.style.position = "fixed" } }, { key: "moveToGPU", value: function() { this._hasMovedToGPU || (this.mainTitle.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.background.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.fadeBlock.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this._hasMovedToGPU = !0) } }, { key: "deleteFromGPU", value: function() { this._hasMovedToGPU && (this.mainTitle.style[(0, u["default"])("transform")] = "none", this.background.style[(0, u["default"])("transform")] = "none", this.fadeBlock.style[(0, u["default"])("transform")] = "none", this._hasMovedToGPU = !1) } }]), t
        }(v["default"]),
        C = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.root = (0, c.querySelector)(".home-header"), this.mainTitleView = new m["default"](this.root, this.root, new j(this)) }
            return r(t, e), o(t, [{ key: "update", value: function(e) { this.mainTitleView.update(e) } }]), t
        }(E["default"]);
    t["default"] = C
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(18),
        u = n(l),
        c = function(e) {
            function t(e) { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.tickTime = e, this.isEnabled = !1, this.timer = null, this.now = Date.now(), this.tickCounter = 0 }
            return r(t, e), o(t, [{ key: "start", value: function() { this.isEnabled = !0, this._update() } }, { key: "_update", value: function() { this.isEnabled && (this.timer = setTimeout(function() { this.emit("update", { since: Date.now() - this.now, tickCounter: ++this.tickCounter }), this._update() }.bind(this), this.tickTime)) } }, { key: "stop", value: function() { this.isEnabled = !1, clearTimeout(this.timer) } }]), t
        }(u["default"]);
    t["default"] = c, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) { return (0, h.canSplitFiles)() ? new v(e, t) : new p(e, t) }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
    }();
    t["default"] = r;
    var s = i(10),
        l = i(8),
        u = i(4),
        c = n(u),
        h = i(59),
        f = i(60),
        d = n(f),
        m = s.WINDOW.URL || s.WINDOW.webkitURL,
        p = function() {
            function e(t, i) { a(this, e), this.el = t, this.urls = (0, h.buildUrls)(i) }
            return o(e, [{ key: "load", value: function() { var e = c["default"].defer(); return this.el.src = this.urls[0], e.resolve(), e.promise } }]), e
        }(),
        v = function() {
            function e(t, i) { a(this, e), this.el = t, this.urls = (0, h.buildUrls)(i) }
            return o(e, [{
                key: "load",
                value: function() {
                    for (var e = this, t = c["default"].defer(), i = [], n = 0, a = function(a) {
                            var r = a,
                                o = new d["default"](e.urls[a]);
                            o.load().then(function(a) {
                                if (i[r] = a, n++, n == e.urls.length) {
                                    (0, l.once)(e.el, "load", function() { m.revokeObjectURL(e.el.src) });
                                    var o = new Blob(i, { type: "video/mp4" });
                                    e.el.src = m.createObjectURL(o), t.resolve()
                                }
                            })
                        }, r = 0; r < this.urls.length; r++) a(r);
                    return t.promise
                }
            }]), e
        }();
    e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0],
            t = "undefined" != typeof o.WINDOW.devicePixelRatio ? o.WINDOW.devicePixelRatio : 1;
        return t > 1 || null !== e && o.WINDOW.outerWidth > e
    }

    function a(e) {
        if (!e.baseUrl || "string" != typeof e.baseUrl) return [];
        var t = "undefined" != typeof e.minWidth ? e.minWidth : null,
            i = n(t),
            a = e.baseUrl,
            o = 0;
        if (i ? "undefined" != typeof e.parts2x && null !== e.parts2x ? (o = parseInt(e.parts2x, 10), a = e.baseUrl + s) : "undefined" != typeof e.parts && null !== e.parts2x ? o = parseInt(e.parts, 10) : a = e.baseUrl + s : "undefined" != typeof e.parts && null !== e.parts ? o = parseInt(e.parts, 10) : "undefined" != typeof e.parts2x && null !== e.parts && (o = parseInt(e.parts2x, 10), a = e.baseUrl + s), o > 0 && r()) { for (var u = [], c = 1; c <= o; c++) u.push(a + (".part" + c) + l); return u }
        return [a + l]
    }

    function r() { var e = o.WINDOW.URL || o.WINDOW.webkitURL; return "undefined" != typeof o.WINDOW.Blob || "undefined" != typeof e }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.buildUrls = a, t.canSplitFiles = r;
    var o = i(10),
        s = "@2x",
        l = ".mp4"
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = i(61),
        s = n(o),
        l = i(4),
        u = n(l),
        c = function() {
            function e(t) { a(this, e), this.url = t }
            return r(e, [{
                key: "load",
                value: function() {
                    var e = this,
                        t = u["default"].defer(),
                        i = new s["default"](this.url, o.METHODS.GET, { responseType: "arraybuffer", async: !0 });
                    return i.send().then(function(e) { t.resolve(e) }, function() { t.reject(new Error("Error on load video " + e.url)) }), t.promise
                }
            }]), e
        }();
    t["default"] = c, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        l = i(4),
        u = n(l),
        c = { GET: "get", POST: "post" };
    t.METHODS = c;
    var f = function() {
        function e(t, i, n) { r(this, e), this.url = t, this.method = i.toUpperCase(), this.options = n, this.headers = n.headers, this.async = n.async, this.data = n.data }
        return s(e, [{
            key: "send",
            value: function() {
                var e = u["default"].defer(),
                    t = new XMLHttpRequest;
                t.open(this.method, this.url, this.async);
                for (var i in this.options) "undefined" != typeof t[i] && (t[i] = this.options[i]);
                for (var n in this.headers) {
                    var a = this.headers[h];
                    t.setRequestHeader(a.key, a.value)
                }
                return t.onload = function() { t.status >= 200 && t.status < 400 ? e.resolve(t.response) : e.reject(new d("Can't XHR " + JSON.stringify(t.url), t)) }, t.onerror = function() { e.reject(new d("Can't XHR " + JSON.stringify(t.url))) }, t.onprogress = function(t) { e.notify(t.loaded / t.total) }, "POST" == this.method ? t.send(this.data) : t.send(), e.promise
            }
        }]), e
    }();
    t["default"] = f;
    var d = function(e) {
        function t(e, i) { r(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.name = "RequestError", this.message = e || "Can't do XHR", this.xhrObject = i }
        return a(t, e), t
    }(Error)
}, function(e, t, i) {
    "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        s = i(10),
        l = i(35),
        u = function(e) {
            function t() { n(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.pageElement = (0, s.querySelector)(".page"), this.navElement = (0, s.querySelector)(".nav"), this.pageHeader = (0, s.querySelector)(".home-header__title"), this.fixedSection = (0, s.querySelectorAll)(".section-fixed__bg"), this.contactsView = (0, s.querySelector)(".open-menu__contacts-wrap") }
            return a(t, e), r(t, [{ key: "apply", value: function(e) { this.savedParameters.pageElementMargin = this.pageElement.style.marginRight, this.savedParameters.navElementLeft = this.navElement.style.left, this.savedParameters.contactElementMargin = this.contactsView.style.marginLeft, this.savedParameters.pageTitleLeft = this.pageHeader.style.left, this.savedParameters.fixedSectionsRight = this.fixedSection[0].style.right, this.pageElement.style.marginRight = e + "px", this.navElement.style.left = -1 * e + "px", this.contactsView.style.marginLeft = -1 * e / 2 + "px", this.pageHeader.style.left = -1 * e / 2 + "px"; for (var t in this.fixedSection) this.fixedSection[t].style.right = e + "px" } }, {
                key: "restore",
                value: function() {
                    if ("undefined" != typeof this.savedParameters.pageElementMargin && (this.pageElement.style.marginRight = this.savedParameters.pageElementMargin), "undefined" != typeof this.savedParameters.navElementLeft && (this.navElement.style.left = this.savedParameters.navElementLeft), "undefined" != typeof this.savedParameters.contactElementMargin && (this.contactsView.style.marginLeft = this.savedParameters.contactElementMargin), "undefined" != typeof this.savedParameters.pageTitleLeft && (this.pageHeader.style.left = this.savedParameters.pageTitleLeft), "undefined" != typeof this.savedParameters.fixedSectionsRight)
                        for (var e in this.fixedSection) this.fixedSection[e].style.right = this.savedParameters.fixedSectionsRight;
                    this.savedParameters = {}
                }
            }]), t
        }(l.AScrollBarStrategy);
    t.WideScreenScrollBarFixerStrategy = u;
    var c = function(e) {
        function t() { n(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.pageElement = (0, s.querySelector)(".page"), this.fixedSection = (0, s.querySelectorAll)(".section-fixed__bg"), this.navElement = (0, s.querySelector)(".nav") }
        return a(t, e), r(t, [{ key: "apply", value: function(e) { this.savedParameters.fixedSectionsRight = this.fixedSection[0].style.right, this.savedParameters.navElementRight = this.navElement.style.right, this.savedParameters.pageElementMargin = this.pageElement.style.marginRight, this.pageElement.style.marginRight = e + "px", this.navElement.style.right = e + "px"; for (var t in this.fixedSection) this.fixedSection[t].style.right = e + "px" } }, {
            key: "restore",
            value: function() {
                if ("undefined" != typeof this.savedParameters.pageElementMargin && (this.pageElement.style.marginRight = this.savedParameters.pageElementMargin), "undefined" != typeof this.savedParameters.navElementRight && (this.navElement.style.right = this.savedParameters.navElementRight), "undefined" != typeof this.savedParameters.fixedSectionsRight)
                    for (var e in this.fixedSection) this.fixedSection[e].style.right = this.savedParameters.fixedSectionsRight;
                this.savedParameters = {}
            }
        }]), t
    }(l.AScrollBarStrategy);
    t.SmallScreenScrollBarFixerStrategy = c
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(10),
        u = i(64),
        c = n(u),
        h = i(15),
        f = function(e) {
            function t(e) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, i)
            }
            return r(t, e), o(t, [{
                key: "showElement",
                value: function(e) {
                    s(Object.getPrototypeOf(t.prototype), "showElement", this).call(this, e);
                    var i = e.getAttribute("data-target"),
                        n = this.elementSelector + "__" + this.settings.contentElementName + "_name_" + i + " .home-disciplines__icon",
                        a = (0, l.querySelector)(n);
                    a && (0, h.touchImageSrc)(a)
                }
            }]), t
        }(c["default"]);
    t["default"] = f, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e },
        o = i(10),
        s = i(8),
        l = function() {
            function e(t) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                n(this, e), this.delayTimer, this.elementSelector = t, this.domElement = (0, o.querySelector)(t), this.domElement && (this.defaulSettings = { hoverDelay: 150, triggerElementName: "control", contentElementName: "data", activeElementModifier: "active", mouseEvent: "hover" }, this.settings = r({}, this.defaulSettings, i), this.onMouseover(), this.onMouseout())
            }
            return a(e, [{
                key: "onMouseover",
                value: function() {
                    var e = this.elementSelector + "__" + this.settings.triggerElementName,
                        t = (0, o.querySelectorAll)(e, this.domElement),
                        i = this;
                    (0, s.addEventListener)(t, "mouseover", function() {
                        var e = this;
                        this.delayTimer = setTimeout(function() { i.showElement(e) }, i.settings.hoverDelay)
                    })
                }
            }, {
                key: "onMouseout",
                value: function() {
                    var e = (0, o.querySelectorAll)(this.elementSelector + "__" + this.settings.triggerElementName);
                    (0, s.addEventListener)(e, "mouseout", function() { clearTimeout(this.delayTimer) })
                }
            }, {
                key: "showElement",
                value: function(e) {
                    if (this.hideActiveElement(), e) {
                        var t = e.getAttribute("data-target"),
                            i = this.elementSelector + "__" + this.settings.contentElementName + "_name_" + t,
                            n = (0, o.querySelector)(i);
                        n && (e.classList.add(this.elementSelector.slice(1) + "__" + this.settings.triggerElementName + "_" + this.settings.activeElementModifier), n.classList.add(this.elementSelector.slice(1) + "__" + this.settings.contentElementName + "_" + this.settings.activeElementModifier))
                    }
                }
            }, { key: "hideActiveElement", value: function() { this.activeDomElement && this.activeTriggerDomElement && (this.activeDomElement.classList.remove(this.elementSelector.slice(1) + "__" + this.settings.contentElementName + "_" + this.settings.activeElementModifier), this.activeTriggerDomElement.classList.remove(this.elementSelector.slice(1) + "__" + this.settings.triggerElementName + "_" + this.settings.activeElementModifier)) } }, { key: "activeDomElement", get: function() { return (0, o.querySelector)(this.elementSelector + "__" + this.settings.contentElementName + "_" + this.settings.activeElementModifier) } }, { key: "activeTriggerDomElement", get: function() { return (0, o.querySelector)(this.elementSelector + "__" + this.settings.triggerElementName + "_" + this.settings.activeElementModifier) } }]), e
        }();
    t["default"] = l, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = (i(15), i(11)),
        u = n(l),
        c = i(28),
        h = (n(c), i(48)),
        f = n(h),
        d = i(49),
        m = n(d),
        p = i(46),
        v = n(p),
        y = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return r(t, e), o(t, [{ key: "init", value: function() { this.areasSection = (0, u["default"])(".home-areas"), this.areUserSection = (0, u["default"])(".home-are-used"), this.spinrillaSection = (0, u["default"])(".home-spinrilla"), this.isOff = !1 } }, { key: "moveIn", value: function(e) { e < .5 ? this.deleteFromGPU() : this.moveToGPU(), e >= .9 ? this.lightOff() : this.lightOn() } }, { key: "moveOut", value: function(e) { e >= 0 && this.lightOff(), e > 1.5 ? this.deleteFromGPU() : this.moveToGPU() } }, { key: "lightOff", value: function() { this.isOff || (this.areasSection.classList.add("j-dark"), this.areUserSection.classList.remove("j-light"), this.spinrillaSection.classList.remove("j-light"), this.isOff = !0) } }, { key: "lightOn", value: function() { this.isOff && (this.areasSection.classList.remove("j-dark"), this.areUserSection.classList.add("j-light"), this.spinrillaSection.classList.add("j-light"), this.isOff = !1) } }, { key: "moveToGPU", value: function() { this._hasMovedToGPU || (this.areasSection.classList.add("j-move-to-gpu"), this.areUserSection.classList.add("j-move-to-gpu"), this._hasMovedToGPU = !0) } }, { key: "deleteFromGPU", value: function() { this._hasMovedToGPU && (this.areasSection.classList.remove("j-move-to-gpu"), this.areUserSection.classList.remove("j-move-to-gpu"), this._hasMovedToGPU = !1) } }]), t
        }(m["default"]),
        _ = function() {
            function e() {
                a(this, e);
                var t = (0, u["default"])(".home-areas__itm_miranda");
                this.phoneView = new f["default"](t, t, new y)
            }
            return o(e, [{ key: "update", value: function(e) { this.phoneView.update(e) } }]), e
        }();
    t["default"] = function() { return new v["default"](new _) }, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(10),
        u = i(30),
        c = n(u),
        h = i(58),
        f = n(h),
        d = i(14),
        m = i(28),
        p = n(m),
        v = i(18),
        y = n(v),
        _ = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.videosList = (0, l.querySelectorAll)(".j-autoloaded-video"), this.videosToWatch = (0, l.querySelectorAll)(".j-start-video-in-vp"), this.videoElements = (0, l.querySelectorAll)("video"), this.oceanSection = (0, l.querySelector)(".home-approach video"), this.fixedVideos = (0, l.querySelectorAll)(".j-fixed-video"), p["default"].on("update", this.onScroll.bind(this)), this.onScroll() }
            return r(t, e), o(t, [{
                key: "load",
                value: function() {
                    var e = this.videosList.slice();
                    e.push(this.oceanSection);
                    for (var t in e) {
                        var i = (0, f["default"])(e[t], JSON.parse((0, c["default"])(e[t], "options").options));
                        i.load()
                    }
                }
            }, {
                key: "onScroll",
                value: function() {
                    var e = this.videosToWatch;
                    for (var t in e) {
                        var i = e[t];
                        (0, d.isInViewPort)(i, .6) ? i.paused && (i.play(), this.emit("update", { video: i, play: !0 })): i.paused || (i.pause(), this.emit("update", { video: i, play: !1 }))
                    }
                    for (var t in this.fixedVideos) {
                        var i = this.fixedVideos[t],
                            n = (0, l.querySelector)("video", i);
                        (0, d.isInViewPort)(i, .3) ? (n.paused && (n.play(), this.emit("update", { video: n, play: !0 })), i.style.pointerEvents = "auto") : (n.paused || (n.pause(), this.emit("update", { video: n, play: !1 })), i.style.pointerEvents = "none")
                    }
                }
            }, { key: "stopAll", value: function() { var e = this.videoElements; for (var t in e) e[t].pause() } }, { key: "start", value: function() { this.onScroll() } }]), t
        }(y["default"]);
    t["default"] = _, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = i(68),
        s = (n(o), i(4)),
        l = n(s),
        u = i(10),
        c = i(8),
        h = i(70),
        f = i(22),
        d = n(f),
        m = i(33),
        p = n(m),
        v = i(27),
        y = n(v),
        _ = i(71),
        g = function() {
            function e(t) { a(this, e), this._rootElement = (0, u.querySelector)(".home-header"), this.wireframeAnimationFired = !1, this.changeAnimationBehaviourFPS = 25, this.disableBlendModeFPS = 30, this.pauseBetweenAnimations = 1500, this.measurePerfomanceOn = "glitch", this._isBlendModeDisabledForever = !1, this.isSlowBrowser = !1, this.startTime = 0, this._isRunned = !1, this._isPaused = !1, this._stat = {}, this.disableBlendMode(), this.fastAnimations = ["asteroid", "crosses", "linesAndDots", "rotatingCircle", "glitch", "shadowSquares", "scalingBlocks"], y["default"].msie || this.fastAnimations.push("triangle"), this.slowAnimations = ["interference"], this.queue = [], this.animations = {}, this.currentAnimation, this._pauseCount = 0, this.animations = null }
            return r(e, [{ key: "degradateForSlowBrowsers", value: function(e) { this._stat[this.currentAnimation] || (e < this.changeAnimationBehaviourFPS && (this._rootElement.classList.add("j_simplified-animations"), this.isSlowBrowser = !0), e < this.disableBlendModeFPS && (this._isBlendModeDisabledForever = !0)) } }, {
                key: "fireWireframeAnimation",
                value: function() {
                    var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                        t = l["default"].defer();
                    return this.wireframeAnimationSVGEl = (0, u.querySelector)(".home-header__animation_type_wireframe", this._rootElement), this.centerLineEl = (0, u.querySelector)(".home-header__animation-part.line-center", this._rootElement), this.wireframeAnimationFired ? t.reject(new Error("Already fired")) : (this.wireframeAnimationFired = !0, (0, c.addEventListener)(this.centerLineEl, (0, d["default"])("animationend"), function i(n) { t.resolve(), e && this.run(), (0, c.removeEventListener)(this.centerLineEl, (0, d["default"])("animationend"), i), this.wireframeAnimationSVGEl.parentNode.removeChild(this.wireframeAnimationSVGEl) }.bind(this)), this.wireframeAnimationSVGEl.classList.add("home-header__animation_active")), t.promise
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = { after: function(t) { e.afterCallback(t) }, slow: function(t) { e.slowCallback(t) } };
                    this.animations = { asteroid: (0, _.asteroidAnimation)(t), triangle: (0, _.triangleAnimation)(t), shadowSquares: (0, _.shadowSquaresAnimation)(t), rotatingCircle: (0, _.rotatingCircleAnimation)(t), crosses: (0, _.crossesAnimation)(t), interference: (0, _.interferenceAnimation)(t), linesAndDots: (0, _.linesAndDotsAnimation)(t), glitch: (0, _.glitchAnimation)(t), scalingBlocks: (0, _.scalingBlocksAnimation)(t) }
                }
            }, {
                key: "run",
                value: function() {
                    var e = this;
                    if (this.animations || this.init(), !this._isRunned) {
                        this._isRunned = !0, this.wireframeAnimationFired = !0, this.startTime = Date.now();
                        var t = this.animations[this.measurePerfomanceOn];
                        t ? ! function() {
                            var i = t.settings.after;
                            t.settings.isMeasureMode = !0, t.settings.after = function(n) { e.degradateForSlowBrowsers(n.fps), t.settings.isMeasureMode = !1, p["default"].fps(n.fps), i(n) }, e.currentAnimation = e.measurePerfomanceOn, t.run()
                        }() : this.runNextAnimation()
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    if (this._isRunned) {
                        var e = this.animations[this.currentAnimation];
                        if (e && !this._isPaused) {
                            console.log("Pause() ", this.currentAnimation);
                            var t = Date.now() - this.startTime;
                            1 === e.runCount && p["default"].animationStopped(this.currentAnimation, t), e.pause(), this._isPaused = !0
                        }
                        this._increasePauseCount()
                    }
                }
            }, {
                key: "resume",
                value: function() {
                    if (!this._isRunned) return void this.run();
                    this.startTime = Date.now();
                    var e = this.animations[this.currentAnimation];
                    e && this._canResume() && (e.resume(), this._isPaused = !1), this._decreasePauseCount()
                }
            }, { key: "_decreasePauseCount", value: function() { this._pauseCount > 0 && this._pauseCount-- } }, { key: "_increasePauseCount", value: function() { this._pauseCount++ } }, { key: "_canResume", value: function() { return 1 === this._pauseCount } }, { key: "disableBlendMode", value: function() { this._rootElement.classList.add("j_no-anim-blending") } }, { key: "enableBlendMode", value: function() { this._rootElement.classList.remove("j_no-anim-blending") } }, {
                key: "runNextAnimation",
                value: function(e) {
                    this.queue.length || this.fillQueue(this.currentAnimation);
                    var t = this.queue.shift(),
                        i = this.animations[t];
                    this.currentAnimation = t, !this._isBlendModeDisabledForever && i.settings.useBlendMode ? this.enableBlendMode() : this.disableBlendMode(), this.pauseBetweenAnimations > 0 ? setTimeout(function() { i.run({ reset: !0 }) }, this.pauseBetweenAnimations) : i.run({ reset: !0 })
                }
            }, {
                key: "afterCallback",
                value: function(e) {
                    var t = this._stat[this.currentAnimation];
                    this.currentAnimation && !t && (t = this._stat[this.currentAnimation] = { runCount: 0, avgFPS: 0, FPSStat: [] }), t.runCount++, t.FPSStat.push(e.fps);
                    var i = t.FPSStat.reduce(function(e, t) { return e + t });
                    t.avgFPS = i / t.FPSStat.length, this.runNextAnimation(e)
                }
            }, { key: "slowCallback", value: function(e) {} }, { key: "fillQueue", value: function(e) { this.queue = this.shuffleAnimations(e) } }, { key: "shuffleAnimations", value: function(e) { var t = (0, h.arrayShuffle)(this.enabledAnimations); return e && t.length > 1 && t[0] === e && (t = this.shuffleAnimations(e)), t } }, { key: "enabledAnimations", get: function() { return this.isSlowBrowser ? this.fastAnimations : this.fastAnimations.concat(this.slowAnimations) } }]), e
        }();
    t["default"] = g, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e },
        s = i(10),
        l = i(22),
        u = n(l),
        c = i(69),
        h = n(c),
        f = function() {
            function e(t) { a(this, e), this.runCount = 0, this._animationsCache = [], this._isPaused = !1, this._transformAnimations = ["rotate", "translate", "scale"], this._CSSAnimations = ["translate3d", "CSSrotate", "CSSscale"], this._colorAnimations = ["fill", "stroke"], this._initialValues = [], this._isSlowCallbackFired = !1, this.defaultSettings = { baseCSSClass: "animation", activeCSSClassSuffix: "_active", slowCallbackPercentThreshold: 10, slowCallbackFPSThreshold: 30, before: function() {}, after: function() {}, slow: function(e) {} }, this.settings = o({}, this.defaultSettings, t), this._unitsRegexp = /^-?\d+([%a-z]*)$/i, this._initialTimestamp = null, this._lastTimestamp = 0, t.animations && t.animations instanceof Array && (this._svg = (0, s.querySelector)(t.svgElementSelector), this._svg && (this._fillAnimationsCache(t.animations), this._saveInitialValues(), this._totalFrames = this._animationsCache.reduce(function(e, t) { var i = t.startFrame + t.duration; return i > e ? i : e }, 0), this._currentFrame = 0)) }
            return r(e, [{ key: "_setActiveClass", value: function() { this._svg.classList.add(this.settings.baseCSSClass + this.settings.activeCSSClassSuffix) } }, { key: "_removeActiveClass", value: function() { this._svg.classList.remove(this.settings.baseCSSClass + this.settings.activeCSSClassSuffix) } }, { key: "run", value: function(e) { e && e.reset && this.reset(), this.runCount++, this._setActiveClass(), this._initialTimestamp = this._lastTimestamp = Date.now(), this.settings.before.call(this), this._loop() } }, { key: "pause", value: function() { this._isPaused = !0 } }, { key: "resume", value: function() { this._isPaused = !1, this._loop() } }, { key: "reset", value: function() { this._restoreInitialValues(), this._currentFrame = 0, this._initialTimestamp = null } }, {
                key: "_buildTransformString",
                value: function(e) {
                    var t = "";
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var n = e[i],
                                a = i.replace("CSS", "");
                            t += a + "(" + n.join(", ") + ") "
                        }
                    return t
                }
            }, {
                key: "_parseTransformString",
                value: function(e) {
                    if (!e) return {};
                    e = this._stripPrefixes(e);
                    var t = {};
                    for (var i in e = e.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*(px|%)?,?\s*)+\))+/g)) {
                        var n = e[i].match(/[\w\.\-]+/g);
                        t[n.shift()] = n
                    }
                    return t
                }
            }, { key: "_stripPrefixes", value: function(e) { return e.replace(/(-\w+-)/gi, "") } }, {
                key: "_fillAnimationsCache",
                value: function(e) {
                    this._animationsCache = e.map(function(e, t) {
                        var i = e.element;
                        if (i.nodeName || (i = (0, s.querySelector)(e.element, this._svg)), !i) return e;
                        e.domElement = i, e.transforms = this._parseTransformString(i.getAttribute("transform")), e.CSStransforms = this._parseTransformString(i.getAttribute("style"));
                        var n = {};
                        for (var a in e.valuesToAnimate)
                            if (e.valuesToAnimate.hasOwnProperty(a)) {
                                var r = {},
                                    o = i.getAttribute(a),
                                    l = e.valuesToAnimate[a];
                                r.units = this._getUnits(o), r.to = this.normalizeValue(l, a), l.from || 0 === l.from ? (r.to = l.to, r.from = l.from) : this._transformAnimations.indexOf(a) > -1 ? r.from = e.transforms[a] : this._CSSAnimations.indexOf(a) > -1 ? r.from = e.CSStransforms[a] : this._colorAnimations.indexOf(a) > -1 ? 0 === o.indexOf("#") ? r.from = this.hexToRgb(o) : r.from = this._parseTransformString(o).rgb : r.from = parseFloat(o), n[a] = r
                            }
                        return e.valuesToAnimate = n, e
                    }, this)
                }
            }, { key: "_saveInitialValues", value: function() { this._initialValues = this._animationsCache.map(function(e) { var t = {}; return t.domElement = e.domElement, t.attributes = Array.prototype.slice.call(e.domElement.attributes).map(function(e) { return { name: e.name, value: e.value } }), t }) } }, { key: "normalizeValue", value: function(e, t) { return this._colorAnimations.indexOf(t) > -1 && "string" == typeof e && 0 === e.indexOf("#") && (e = this.hexToRgb(e)), e } }, {
                key: "_restoreInitialValues",
                value: function() {
                    this._initialValues.forEach(function(e) {
                        var t = e.domElement;
                        e.attributes.forEach(function(e) { t.setAttribute(e.name, e.value) })
                    })
                }
            }, { key: "_getUnits", value: function(e) { var t = this._unitsRegexp.exec(e); return t && t[1] ? t[1] : "" } }, {
                key: "_loop",
                value: function(e) {
                    this._lastTimestamp = Date.now();
                    var t = this._lastTimestamp - this._initialTimestamp;
                    this.FPS = (this._currentFrame + 1) / (t / 1e3);
                    var i = this._currentFrame / this._totalFrames * 100;
                    return i > this.settings.slowCallbackPercentThreshold && this.FPS < this.settings.slowCallbackFPSThreshold && !this._isSlowCallbackFired && this.settings.slow instanceof Function && (this._isSlowCallbackFired = !0, this.settings.slow(this)), this._currentFrame > this._totalFrames ? (this._removeActiveClass(), void(this.settings.after instanceof Function && this.settings.after({ fps: this.FPS }))) : void(this._isPaused || (this._animationsCache.forEach(function(e) { this._doAnimate.call(this, e) }, this), this._currentFrame++, this._handle = window.requestAnimationFrame(this._loop.bind(this))))
                }
            }, {
                key: "_doAnimate",
                value: function(e) {
                    if (e.domElement) {
                        var t = void 0;
                        t = e.easing && this.easing[e.easing] ? this.easing[e.easing] : e.easing && e.easing instanceof Object ? this.easing.bezier : this.easing.easeInQuad;
                        var i = e.domElement,
                            n = e.startFrame,
                            a = e.duration,
                            r = n + a;
                        if (this._currentFrame >= n && this._currentFrame <= r)
                            for (var o in e.valuesToAnimate)
                                if (e.valuesToAnimate.hasOwnProperty(o)) {
                                    var s = e.valuesToAnimate[o].from,
                                        l = e.valuesToAnimate[o].to,
                                        c = e.valuesToAnimate[o].units;
                                    s instanceof Array || (s = [s], l = [l]);
                                    for (var h = [], f = 0; f < s.length; f++) {
                                        var d = this._getUnits(l[f]),
                                            m = parseFloat(s[f]),
                                            p = parseFloat(l[f]),
                                            v = p - m;
                                        0 !== v ? h[f] = t(e, this._currentFrame - n, m, v, a) + d : h[f] = m + d
                                    }
                                    if (this._transformAnimations.indexOf(o) > -1) {
                                        var y = e.transforms;
                                        y[o] = h, i.setAttribute("transform", this._buildTransformString(y))
                                    } else if (this._CSSAnimations.indexOf(o) > -1) {
                                        var _ = i.getAttribute("style") || "",
                                            g = _.replace("transform: ", ""),
                                            y = e.CSStransforms = this._parseTransformString(g);
                                        y[o] = h, i.setAttribute("style", (0, u["default"])("transform") + ": " + this._buildTransformString(y))
                                    } else if (this._colorAnimations.indexOf(o) > -1) {
                                        for (var S = 0; S < 3; S++) h[S] = Math.round(h[S]);
                                        var y = { rgb: h };
                                        i.setAttribute(o, this._buildTransformString(y))
                                    } else i.setAttribute(o, h[0] + c)
                                }
                    }
                }
            }, {
                key: "hexToRgb",
                value: function(e) {
                    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                    e = e.replace(t, function(e, t, i, n) { return t + t + i + i + n + n });
                    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return i ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : null
                }
            }, {
                key: "easing",
                get: function() {
                    return {
                        easeInQuad: function(e, t, i, n, a) { return n * (t /= a) * t + i },
                        linear: function(e, t, i, n, a) {
                            var r = t / a,
                                o = i + n * r;
                            return o
                        },
                        easeInOutQuart: function(e, t, i, n, a) { return (t /= a / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i },
                        easeOutQuint: function(e, t, i, n, a) { return n * ((t = t / a - 1) * t * t * t * t + 1) + i },
                        easeInOutElastic: function(e, t, i, n, a) {
                            var r = 1.70158,
                                o = 0,
                                s = n;
                            return 0 == t ? i : 2 == (t /= a / 2) ? i + n : (o || (o = a * (.3 * 1.5)), s < Math.abs(n) ? (s = n, r = o / 4) : r = o / (2 * Math.PI) * Math.asin(n / s), t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o)) + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o) * .5 + n + i)
                        },
                        easeInOutExpo: function(e, t, i, n, a) { return 0 == t ? i : t == a ? i + n : (t /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i },
                        easeOutExpo: function(e, t, i, n, a) { return t == a ? i + n : n * (-Math.pow(2, -10 * t / a) + 1) + i },
                        easeInExpo: function(e, t, i, n, a) { return 0 == t ? i : n * Math.pow(2, 10 * (t / a - 1)) + i },
                        bezier: function(e, t, i, n, a) {
                            var r = h["default"].apply(this, e.easing),
                                o = t / a,
                                s = r.get(o);
                            return i + n * s
                        }
                    }
                }
            }]), e
        }();
    t["default"] = f, e.exports = t["default"]
}, function(e, t) {
    function i(e, t) { return 1 - 3 * t + 3 * e }

    function n(e, t) { return 3 * t - 6 * e }

    function a(e) { return 3 * e }

    function r(e, t, r) { return ((i(t, r) * e + n(t, r)) * e + a(t)) * e }

    function o(e, t, r) { return 3 * i(t, r) * e * e + 2 * n(t, r) * e + a(t) }

    function s(e, t, i, n, a) {
        var o, s, l = 0;
        do s = t + (i - t) / 2, o = r(s, n, a) - e, o > 0 ? i = s : t = s; while (Math.abs(o) > f && ++l < d);
        return s
    }

    function l(e, t, i, n) {
        for (var a = 0; a < c; ++a) {
            var s = o(t, i, n);
            if (0 === s) return t;
            var l = r(t, i, n) - e;
            t -= l / s
        }
        return t
    }

    function u(e, t, i, n) {
        if (4 === arguments.length) return new u([e, t, i, n]);
        if (!(this instanceof u)) return new u(e);
        if (!e || 4 !== e.length) throw new Error("BezierEasing: points must contains 4 values");
        for (var a = 0; a < 4; ++a)
            if ("number" != typeof e[a] || isNaN(e[a]) || !isFinite(e[a])) throw new Error("BezierEasing: points should be integers.");
        if (e[0] < 0 || e[0] > 1 || e[2] < 0 || e[2] > 1) throw new Error("BezierEasing x values must be in [0, 1] range.");
        this._str = "BezierEasing(" + e + ")", this._css = "cubic-bezier(" + e + ")", this._p = e, this._mSampleValues = v ? new Float32Array(m) : new Array(m), this._precomputed = !1, this.get = this.get.bind(this)
    }
    var c = 4,
        h = .001,
        f = 1e-7,
        d = 10,
        m = 11,
        p = 1 / (m - 1),
        v = "function" == typeof Float32Array;
    u.prototype = {
        get: function(e) {
            var t = this._p[0],
                i = this._p[1],
                n = this._p[2],
                a = this._p[3];
            return this._precomputed || this._precompute(), t === i && n === a ? e : 0 === e ? 0 : 1 === e ? 1 : r(this._getTForX(e), i, a)
        },
        getPoints: function() { return this._p },
        toString: function() { return this._str },
        toCSS: function() { return this._css },
        _precompute: function() {
            var e = this._p[0],
                t = this._p[1],
                i = this._p[2],
                n = this._p[3];
            this._precomputed = !0, e === t && i === n || this._calcSampleValues()
        },
        _calcSampleValues: function() { for (var e = this._p[0], t = this._p[2], i = 0; i < m; ++i) this._mSampleValues[i] = r(i * p, e, t) },
        _getTForX: function(e) {
            for (var t = this._p[0], i = this._p[2], n = this._mSampleValues, a = 0, r = 1, u = m - 1; r !== u && n[r] <= e; ++r) a += p;
            --r;
            var c = (e - n[r]) / (n[r + 1] - n[r]),
                f = a + c * p,
                d = o(f, t, i);
            return d >= h ? l(e, f, t, i) : 0 === d ? f : s(e, a, a + p, t, i)
        }
    }, u.css = { ease: u.ease = u(.25, .1, .25, 1), linear: u.linear = u(0, 0, 1, 1), "ease-in": u.easeIn = u(.42, 0, 1, 1), "ease-out": u.easeOut = u(0, 0, .58, 1), "ease-in-out": u.easeInOut = u(.42, 0, .58, 1) }, e.exports = u
}, function(e, t) {
    "use strict";

    function i(e) { for (var t = e.slice(), i = t.length, n = void 0, a = void 0; i;) a = Math.floor(Math.random() * i--), n = t[i], t[i] = t[a], t[a] = n; return t }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.arrayShuffle = i
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = i(72),
        a = i(73),
        r = i(74),
        o = i(75),
        s = i(76),
        l = i(77),
        u = i(78),
        c = i(79),
        h = i(80);
    t.asteroidAnimation = n.asteroid, t.rotatingCircleAnimation = a.rotatingCircle, t.shadowSquaresAnimation = r.shadowSquares, t.triangleAnimation = o.triangle, t.interferenceAnimation = s.interference, t.crossesAnimation = l.crosses, t.linesAndDotsAnimation = u.linesAndDots, t.glitchAnimation = c.glitch, t.scalingBlocksAnimation = h.scalingBlocks
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        var t = 54,
            i = 90,
            n = 90,
            a = 144,
            r = 210,
            s = 209,
            l = 1,
            u = 210,
            c = 90,
            h = 0,
            f = 210,
            d = [{ element: ".circle_primary", valuesToAnimate: { r: 400 }, startFrame: 0, duration: n, easing: "easeOutExpo" }, { element: ".circle_primary", valuesToAnimate: { "stroke-width": 0 }, startFrame: 0, duration: a, easing: "linear" }, { element: ".circle_primary", valuesToAnimate: { opacity: 0 }, startFrame: t, duration: i, easing: "linear" }, { element: ".circle_secondary", valuesToAnimate: { r: 75 }, startFrame: 0, duration: r, easing: "easeOutExpo" }, { element: ".circle_secondary", valuesToAnimate: { fill: "#ffffff" }, startFrame: s, duration: l, easing: "easeOutExpo" }, { element: ".circle_secondary", valuesToAnimate: { opacity: 0 }, startFrame: u, duration: c, easing: "easeOutExpo" }, { element: ".circle_secondary", valuesToAnimate: { cx: 207, cy: 970 }, startFrame: h, duration: f, easing: "easeInOutExpo" }, { element: ".line", valuesToAnimate: { x1: 207, y1: 970 }, startFrame: h, duration: f, easing: "easeInOutExpo" }, { element: ".line", valuesToAnimate: { x1: 207, y1: 970 }, startFrame: h, duration: f, easing: "easeInOutExpo" }, { element: ".line", valuesToAnimate: { x2: 207, y2: 970 }, startFrame: h, duration: f, easing: "easeInExpo" }];
        return new o["default"]({ svgElementSelector: ".home-header__animation_type_asteroid", baseCSSClass: "home-header__animation", animations: d, useBlendMode: !1, after: e.after, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(68),
        o = n(r);
    t.asteroid = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        for (var t = 1.5, i = 10, n = 60 * t, a = 10 * t, r = 90 * t, s = 10 * t, l = n + (a * i - 1) + r, u = 30 * t, c = [{ element: ".circles", valuesToAnimate: { opacity: 1 }, startFrame: 0, duration: n, easing: "linear" }], h = 1; h <= i; h++) {
            var f = h - 1,
                d = 1 - .1 * f,
                m = { element: ".circle" + h + "-wrap", valuesToAnimate: { translate: { from: [20 * f, 20 * f], to: [20 * f, 20 * f] }, scale: { from: [d], to: [d] }, rotate: { from: [0, 200, 200], to: [180, 200, 200] } }, startFrame: n + h * a, duration: r, easing: "easeInOutExpo" };
            c.push(m), c.push({ element: ".circle" + h + "-wrap", valuesToAnimate: { opacity: { from: 1, to: 0 }, rotate: { from: [180, 200, 200], to: [360, 200, 200] } }, startFrame: l + h * s, duration: u })
        }
        return new o["default"]({ svgElementSelector: ".home-header__animation_type_rotating-circles", baseCSSClass: "home-header__animation", animations: c, useBlendMode: !0, after: e.after, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(68),
        o = n(r);
    t.rotatingCircle = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        var t = (0, r.querySelector)(".home-header__animation_type_shadow-square-back .square4"),
            i = (0, r.querySelector)(".home-header__animation_type_shadow-square-back .square5"),
            n = ({ wrapInner: (0, r.querySelector)(".wrap-inner", t), shadow: (0, r.querySelector)(".shadow", t), squareWrap: (0, r.querySelector)(".square-wrap", t), square: (0, r.querySelector)(".square", t), wrap: (0, r.querySelector)(".wrap", t) }, { wrapInner: (0, r.querySelector)(".wrap-inner", i), shadow: (0, r.querySelector)(".shadow", i), squareWrap: (0, r.querySelector)(".square-wrap", i), square: (0, r.querySelector)(".square", i), wrap: (0, r.querySelector)(".wrap", i) }, []),
            a = (0, r.querySelector)(".home-header__animation_type_shadow-square-back"),
            o = function(e, t) {
                var i = 132,
                    n = (0, r.querySelector)(".home-header__animation_type_shadow-square-" + e + " .home-header__animation_type_shadow-square-inner-shadow"),
                    a = (0, r.querySelector)(".home-header__animation_type_shadow-square-" + e + " .home-header__animation_type_shadow-square-inner-square"),
                    o = [];
                return o.push({ element: n, valuesToAnimate: { CSSscale: { from: [1, 1], to: [0, 1] } }, startFrame: t, duration: i, easing: "easeInExpo" }), o.push({ element: n, valuesToAnimate: { translate3d: { from: [0, "100%", 0], to: [0, "0%", 0] } }, startFrame: t, duration: i, easing: "easeOutExpo" }), o.push({ element: a, valuesToAnimate: { CSSscale: { from: [1], to: [0] } }, startFrame: t, duration: i, easing: "easeInExpo" }), o.push({ element: a, valuesToAnimate: { translate3d: { from: [0, "100%", 0], to: [0, "0%", 0] } }, startFrame: t, duration: i, easing: "easeOutExpo" }), o
            };
        return n = n.concat(o(1, 0)), n = n.concat(o(2, 14)), n = n.concat(o(3, 68)), n = n.concat(o(4, 25)), n = n.concat(o(5, 47)), new s["default"]({ svgElementSelector: ".home-header__animation_type_shadow-square-front", baseCSSClass: "home-header__animation", animations: n, useBlendMode: !0, before: function() { a.classList.add("home-header__animation_active") }, after: function(t) { a.classList.remove("home-header__animation_active"), e.after(t) }, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        o = i(68),
        s = n(o);
    t.shadowSquares = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        var t = 1,
            i = 212,
            n = 15,
            a = t + i + 6 * n,
            r = { x: "100px", y: "0px" },
            s = { x: 800 * Math.cos(120 * Math.PI / 180) + parseFloat(r.x) + "px", y: 800 * Math.sin(120 * Math.PI / 180) + parseFloat(r.y) + "px" },
            l = [{ element: ".triangle__part-wrapper", valuesToAnimate: { opacity: 1 }, startFrame: t, duration: i, easing: "easeOutExpo" }, { element: ".triangle__part_1", valuesToAnimate: { translate3d: { from: [s.x, s.y, 0], to: [r.x, r.y, "0px"] }, fill: "#63e98f", stroke: "#63e98f" }, startFrame: t, duration: i, easing: "easeOutExpo" }, { element: ".triangle__part_2", valuesToAnimate: { translate3d: { from: [s.x, s.y, 0], to: [r.x, r.y, "0px"] }, fill: "#63e98f", stroke: "#63e98f" }, startFrame: t, duration: i + n, easing: "easeOutExpo" }, { element: ".triangle__part_3", valuesToAnimate: { translate3d: { from: [s.x, s.y, 0], to: [r.x, r.y, "0px"] }, fill: "#fba6c9", stroke: "#fba6c9" }, startFrame: t, duration: i + 2 * n, easing: "easeOutExpo" }, { element: ".triangle__part_4", valuesToAnimate: { translate3d: { from: [s.x, s.y, 0], to: [r.x, r.y, "0px"] }, fill: "#fba6c9", stroke: "#fba6c9" }, startFrame: t, duration: i + 3 * n, easing: "easeOutExpo" }, { element: ".triangle__part_5", valuesToAnimate: { translate3d: { from: [s.x, s.y, 0], to: [r.x, r.y, "0px"] }, fill: "#fba6c9", stroke: "#fba6c9" }, startFrame: t, duration: i + 4 * n, easing: "easeOutExpo" }, { element: ".triangle_stroke", valuesToAnimate: { opacity: { from: 0, to: 1 } }, startFrame: a, duration: 1 }, { element: ".triangle_stroke", valuesToAnimate: { opacity: { from: 1, to: 0 } }, startFrame: a + 1, duration: 69, easing: "linear" }, { element: ".triangle__part-wrapper", valuesToAnimate: { opacity: { from: 1, to: 0 } }, startFrame: a, duration: 75, easing: "linear" }];
        return new o["default"]({ svgElementSelector: ".home-header__animation_type_triangle", baseCSSClass: "home-header__animation", animations: l, useBlendMode: !0, after: e.after, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(68),
        o = n(r);
    t.triangle = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        for (var t = [], i = (0, r.querySelector)(".home-header__animation_type_interference-yellow"), n = (0, r.querySelectorAll)(".c", i), a = 0, o = 0; o < n.length; o++) {
            var l = { element: n[o], valuesToAnimate: { r: { from: [0], to: [250] } }, startFrame: a + 15 * o, duration: 300, easing: "linear" };
            t.push(l), l = { element: n[o], valuesToAnimate: { stroke: { from: [255, 255, 255], to: [255, 201, 18] } }, startFrame: a + 15 * o, duration: 80, easing: "linear" }, t.push(l), l = { element: n[o], valuesToAnimate: { opacity: { from: 0, to: 1 } }, startFrame: a + 15 * o, duration: 12, easing: "linear" }, t.push(l), l = {
                element: n[o],
                valuesToAnimate: { opacity: { from: 1, to: 0 } },
                startFrame: a + 135 + 15 * o,
                duration: 165,
                easing: "linear"
            }, t.push(l)
        }
        for (var u = (0, r.querySelector)(".home-header__animation_type_interference-blue"), c = (0, r.querySelectorAll)(".c", u), h = 50, o = 0; o < c.length; o++) {
            var l = { element: c[o], valuesToAnimate: { r: { from: [0], to: [250] } }, startFrame: h + 15 * o, duration: 300, easing: "linear" };
            t.push(l), l = { element: c[o], valuesToAnimate: { opacity: { from: 0, to: 1 } }, startFrame: h + 15 * o, duration: 12, easing: "linear" }, t.push(l), l = { element: c[o], valuesToAnimate: { stroke: { from: [255, 255, 255], to: [37, 173, 255] } }, startFrame: h + 15 * o, duration: 80, easing: "linear" }, t.push(l), l = { element: c[o], valuesToAnimate: { opacity: { from: 1, to: 0 } }, startFrame: h + 135 + 15 * o, duration: 165, easing: "linear" }, t.push(l)
        }
        return new s["default"]({ svgElementSelector: ".home-header__animation_type_interference-yellow", baseCSSClass: "home-header__animation", animations: t, useBlendMode: !1, before: function() { u.classList.add("home-header__animation_active") }, after: function(t) { u.classList.remove("home-header__animation_active"), e.after(t) }, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        o = i(68),
        s = n(o);
    t.interference = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        var t = (0, r.querySelector)(".home-header__animation_type_crosses"),
            i = (0, r.querySelectorAll)(".group", t),
            n = 350,
            a = 4;
        t.classList.add("home-header__animation_mode_measure");
        for (var o = [], l = 0, u = 0; u < i.length; u++)
            for (var c = i[u], h = (0, r.querySelectorAll)("g.cross", c), f = 0; f < h.length; f++) {
                var d = h[f],
                    m = { x: d.getBBox().x + d.getBBox().width / 2, y: d.getBBox().y + d.getBBox().height / 2 };
                o.push({ element: d, valuesToAnimate: { translate: [0, 0] }, startFrame: 10 * l, duration: 65, easing: "easeOutExpo" }), o.push({ element: d, valuesToAnimate: { translate: { from: [0, 0], to: [m.x, m.y] }, scale: [0] }, startFrame: n + a * l, duration: 87, easing: "easeInExpo" }), o.push({ element: d, valuesToAnimate: { opacity: { from: [1], to: [m.x, m.y] } }, startFrame: n + a * l, duration: 87, easing: "easeOutExpo" }), l++
            }
        var p = 190,
            v = 225;
        o.push({ element: ".circle.circle_green", valuesToAnimate: { scale: [1], translate: [0, 0] }, startFrame: p, duration: 40, easing: "easeOutExpo" });
        var y = (0, r.querySelector)(".group-2 .cross-inner", t),
            _ = { x: y.getBBox().x + y.getBBox().width / 2, y: y.getBBox().y + y.getBBox().height / 2 };
        o.push({ element: y, valuesToAnimate: { scale: { from: [1], to: [.7] }, translate: { from: [-53, 49], to: [-53 + -_.x * (.7 - 1), 49 + -_.y * (.7 - 1)] } }, startFrame: p, duration: 40, easing: "easeOutExpo" }), o.push({ element: ".circle.circle_green", valuesToAnimate: { opacity: [1] }, startFrame: p, duration: 40, easing: "linear" }), o.push({ element: ".circle.circle_green", valuesToAnimate: { fill: "#63e98f" }, startFrame: p + 40, duration: 30, easing: "linear" }), o.push({ element: ".circle.circle_red", valuesToAnimate: { scale: [1], translate: [0, 0] }, startFrame: v, duration: 40, easing: "easeOutExpo" });
        var g = (0, r.querySelector)(".group-4 .cross-inner", t),
            S = { x: g.getBBox().x + g.getBBox().width / 2, y: g.getBBox().y + g.getBBox().height / 2 };
        o.push({ element: g, valuesToAnimate: { scale: { from: [1], to: [.7] }, translate: { from: [-54, 44], to: [-54 + -S.x * (.7 - 1), 44 + -S.y * (.7 - 1)] } }, startFrame: v, duration: 40, easing: "easeOutExpo" }), o.push({ element: ".circle.circle_red", valuesToAnimate: { opacity: [1] }, startFrame: v, duration: 40, easing: "linear" }), o.push({ element: ".circle.circle_red", valuesToAnimate: { fill: "#fc4d3c" }, startFrame: v + 40, duration: 30, easing: "linear" });
        var O = new s["default"]({ svgElementSelector: ".home-header__animation_type_crosses", baseCSSClass: "home-header__animation", animations: o, useBlendMode: !1, after: e.after, slow: e.slow });
        return t.classList.remove("home-header__animation_mode_measure"), O
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        o = i(68),
        s = n(o);
    t.crosses = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        for (var t = [], i = (0, r.querySelector)(".home-header__animation_type_lines-and-dots"), n = [{ selector: ".dot.dot-1", startFrame: 85 }, { selector: ".dot.dot-2", startFrame: 0 }, { selector: ".dot.dot-3", startFrame: 125 }, { selector: ".dot.dot-4", startFrame: 30 }, { selector: ".dot.dot-5", startFrame: 245 }, { selector: ".dot.dot-6", startFrame: 150 }, { selector: ".dot.dot-7", startFrame: 210 }, { selector: ".dot.dot-8", startFrame: 260 }, { selector: ".dot.dot-9", startFrame: 290 }], a = 0; a < n.length; a++) {
            var o = n[a];
            t.push({ element: o.selector, valuesToAnimate: { opacity: { from: 0, to: 1 } }, startFrame: o.startFrame, duration: 55, easing: "linear" })
        }
        t.push({ element: ".line-wrap.line-wrap-1", valuesToAnimate: { translate: [0, 0] }, startFrame: 0, duration: 205, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-1 .line", valuesToAnimate: { translate: [0, 0], scale: [1, 1] }, startFrame: 0, duration: 205, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-1 .line-dot-right", valuesToAnimate: { translate: [0, 0] }, startFrame: 0, duration: 205, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-2", valuesToAnimate: { translate: [0, 0] }, startFrame: 70, duration: 210, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-2 .line", valuesToAnimate: { translate: [0, 0], scale: [1, 1] }, startFrame: 70, duration: 210, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-2 .line-dot-right", valuesToAnimate: { translate: [0, 0] }, startFrame: 70, duration: 210, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-3", valuesToAnimate: { translate: [0, 0] }, startFrame: 30, duration: 230, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-3 .line", valuesToAnimate: { translate: [0, 0], scale: [1, 1] }, startFrame: 30, duration: 230, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-3 .line-dot-right", valuesToAnimate: { translate: [0, 0] }, startFrame: 30, duration: 230, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-4", valuesToAnimate: { translate: [0, 0] }, startFrame: 120, duration: 210, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-4 .line", valuesToAnimate: { translate: [0, 0], scale: [1, 1] }, startFrame: 120, duration: 210, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-4 .line-dot-right", valuesToAnimate: { translate: [0, 0] }, startFrame: 120, duration: 210, easing: "easeOutQuint" }), t.push({ element: ".line-wrap.line-wrap-4 .line-center", valuesToAnimate: { opacity: 0 }, startFrame: 265, duration: 230, easing: "linear" });
        for (var l = (0, r.querySelectorAll)(".dot-red, .line", i), u = (0, r.querySelectorAll)(".dot-yellow", i), c = (0, r.querySelectorAll)(".dot-blue", i), a = 0; a < l.length; a++) {
            var h = l[a];
            t.push({ element: h, valuesToAnimate: { opacity: 0 }, startFrame: 360, duration: 36, easing: "linear" })
        }
        for (var a = 0; a < u.length; a++) {
            var h = u[a];
            t.push({ element: h, valuesToAnimate: { opacity: 0 }, startFrame: 374, duration: 36, easing: "linear" })
        }
        for (var a = 0; a < c.length; a++) {
            var h = c[a];
            t.push({ element: h, valuesToAnimate: { opacity: 0 }, startFrame: 390, duration: 36, easing: "linear" })
        }
        return new s["default"]({ svgElementSelector: ".home-header__animation_type_lines-and-dots", baseCSSClass: "home-header__animation", animations: t, useBlendMode: !1, after: e.after, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        o = i(68),
        s = n(o);
    t.linesAndDots = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        function t(e) {
            var t = [],
                i = (0, l.arrayShuffle)(e),
                n = Math.floor(e.length / 2);
            this && !this.settings.isMeasureMode && (n = Math.floor(Math.random() * i.length) + 1), i = i.slice(0, n);
            for (var a = 0; a < i.length; a++) {
                var r = i[a],
                    o = a + 1;
                t.push({ element: r, valuesToAnimate: { opacity: { from: 0, to: 1 } }, startFrame: a * u, duration: 1, easing: "linear" }), t.push({ element: r, valuesToAnimate: { opacity: { from: 1, to: 0 } }, startFrame: o * u, duration: 1, easing: "linear" })
            }
            return t
        }
        var i = ".home-header__animation_type_glitch",
            n = (0, r.querySelector)(i),
            a = (0, r.querySelectorAll)(".glitch-layer", n),
            o = 2,
            u = o + 1;
        return new s["default"]({ svgElementSelector: i, baseCSSClass: "home-header__animation", animations: t(a), useBlendMode: !1, before: function() { this.settings.animations = t.call(this, a), this._fillAnimationsCache(this.settings.animations) }, after: e.after, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        o = i(68),
        s = n(o),
        l = i(70);
    t.glitch = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e) {
        var t = { width: window.innerWidth, height: window.innerHeight },
            i = ({ x: t.width / 2, y: t.height - 300 }, []),
            n = 40,
            a = { scaleInOffset: n, fadeInOffset: n, fadeInDuration: 20, scaleOutOffset: 178, scaleOutDuration: 42, scaleInDuration: 138, scaleFactor: 3.5, scaleOutFactor: 10 },
            o = 20,
            l = { scaleInOffset: o, fadeInOffset: o, fadeInDuration: 20, scaleOutOffset: 154, scaleOutDuration: 42, scaleInDuration: 134, scaleFactor: 5, scaleOutFactor: 25 },
            u = 0,
            c = { scaleInOffset: u, fadeInOffset: u, fadeInDuration: 20, scaleOutOffset: 130, scaleOutDuration: 42, scaleInDuration: 130, scaleFactor: 4.5, scaleOutFactor: 20 },
            h = (0, r.querySelector)(".home-header__animation_type_scaling-blocks .block-1"),
            f = (0, r.querySelector)(".home-header__animation_type_scaling-blocks .block-2"),
            d = (0, r.querySelector)(".home-header__animation_type_scaling-blocks .block-3"),
            m = { x: 971.4, y: 759.4 };
        return i.push({ element: h, valuesToAnimate: { translate: { from: [0, 0], to: [-m.x * (a.scaleFactor - 1), -m.y * (a.scaleFactor - 1)] }, scale: { from: [1], to: [a.scaleFactor] } }, startFrame: a.scaleInOffset, duration: a.scaleInDuration, easing: "easeOutExpo" }), i.push({ element: h, valuesToAnimate: { opacity: { from: 0, to: .6 } }, startFrame: a.fadeInOffset, duration: a.fadeInDuration, easing: "linear" }), i.push({ element: h, valuesToAnimate: { translate: { from: [-m.x * (a.scaleFactor - 1), -m.y * (a.scaleFactor - 1)], to: [-m.x * (a.scaleOutFactor - 1), -m.y * (a.scaleOutFactor - 1)] }, scale: { from: [a.scaleFactor], to: [a.scaleOutFactor] } }, startFrame: a.scaleOutOffset, duration: a.scaleOutDuration, easing: "easeOutQuint" }), i.push({ element: f, valuesToAnimate: { translate: { from: [0, 0], to: [-m.x * (l.scaleFactor - 1), -m.y * (l.scaleFactor - 1)] }, scale: { from: [1], to: [l.scaleFactor] } }, startFrame: l.scaleInOffset, duration: l.scaleInDuration, easing: "easeOutExpo" }), i.push({ element: f, valuesToAnimate: { opacity: { from: 0, to: .6 } }, startFrame: l.fadeInOffset, duration: l.fadeInDuration, easing: "linear" }), i.push({ element: f, valuesToAnimate: { translate: { from: [-m.x * (l.scaleFactor - 1), -m.y * (l.scaleFactor - 1)], to: [-m.x * (l.scaleOutFactor - 1), -m.y * (l.scaleOutFactor - 1)] }, scale: { from: [l.scaleFactor], to: [l.scaleOutFactor] } }, startFrame: l.scaleOutOffset, duration: l.scaleOutDuration, easing: "easeOutQuint" }), i.push({ element: d, valuesToAnimate: { translate: { from: [0, 0], to: [-m.x * (c.scaleFactor - 1), -m.y * (c.scaleFactor - 1)] }, scale: { from: [1], to: [c.scaleFactor] } }, startFrame: c.scaleInOffset, duration: c.scaleInDuration, easing: "easeOutExpo" }), i.push({ element: d, valuesToAnimate: { opacity: { from: 0, to: .6 } }, startFrame: c.fadeInOffset, duration: c.fadeInDuration, easing: "linear" }), i.push({ element: d, valuesToAnimate: { translate: { from: [-m.x * (c.scaleFactor - 1), -m.y * (c.scaleFactor - 1)], to: [-m.x * (c.scaleOutFactor - 1), -m.y * (c.scaleOutFactor - 1)] }, scale: { from: [c.scaleFactor], to: [c.scaleOutFactor] } }, startFrame: c.scaleOutOffset, duration: c.scaleOutDuration, easing: "easeOutQuint" }), new s["default"]({ svgElementSelector: ".home-header__animation_type_scaling-blocks", baseCSSClass: "home-header__animation", animations: i, useBlendMode: !1, after: e.after, slow: e.slow })
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(10),
        o = i(68),
        s = n(o),
        l = i(22);
    n(l);
    t.scalingBlocks = a
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(22),
        u = n(l),
        c = i(10),
        h = i(17),
        f = i(48),
        d = n(f),
        m = i(49),
        p = n(m),
        v = i(27),
        y = n(v),
        _ = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return r(t, e), o(t, [{ key: "init", value: function() { this.START_POSITION = 100, this.SPEEDUP_RATIO_ON_MOVEOUT = 1.5 } }, {
                key: "moveIn",
                value: function(e) {
                    var t = 1 - (0, h.clamp)(e, 0, 1),
                        i = this.START_POSITION * t;
                    this.setStyle(i)
                }
            }, {
                key: "moveOut",
                value: function(e) {
                    var t = (0, h.clamp)(e, 0, 1),
                        i = -1 * this.SPEEDUP_RATIO_ON_MOVEOUT * this.START_POSITION * t;
                    this.setStyle(i)
                }
            }, { key: "setStyle", value: function(e) { this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + Math.round(e) + "px, 0)" } }]), t
        }(p["default"]),
        g = function() {
            function e() {
                a(this, e);
                var t = (0, c.querySelector)(".home-areas"),
                    i = (0, c.querySelector)(".home-areas__itm", t);
                this.phoneView = new d["default"]((0, c.querySelector)(".home-areas__device_startups", t), i, new _), this.phoneSonyView = new d["default"]((0, c.querySelector)(".home-areas__device_sony", t), (0, c.querySelector)(".home-areas__itm_sony", t), new _)
            }
            return o(e, [{ key: "update", value: function(e) { this.phoneView.update(e), y["default"].msie || this.phoneSonyView.update(e) } }]), e
        }();
    t["default"] = g, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(22),
        u = (n(l), i(48)),
        c = n(u),
        h = i(49),
        f = n(h),
        d = i(10),
        m = i(46),
        p = n(m),
        v = i(17),
        y = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return r(t, e), o(t, [{
                key: "init",
                value: function() {
                    var e = this.view.el;
                    this.speedTestOverlay = (0, d.querySelector)(".home-speedtest__overlay", e), this.oceanOverlay = (0, d.querySelector)(".home-approach__overlay"), this.oceanOverlayBlack = (0, d.querySelector)(".home-approach__overlay_black"), this.fixedSection = (0, d.querySelector)(".section-fixed__bg_approach"), this.video = (0, d.querySelector)(".home-approach .section-fixed__bg video"), this._cachedSpeedTestOverlayOpacity = this.speedTestOverlay.style.opacity, this._cachedOceanOverlayOpacity = this.oceanOverlay.style.opacity, this._cachedOceanOverlayBlackOpacity = this.oceanOverlayBlack.style.opacity, this._hasMovedToGPU = !1, this._videoPaused = !0
                }
            }, { key: "moveIn", value: function(e) { e >= .5 ? this.moveToGPU() : this.deleteFromGPU(), e <= 1 && this.reset() } }, {
                key: "moveOut",
                value: function(e) {
                    if (e < .23) this.reset();
                    else if (e >= .23 && e <= .34) {
                        var t = (0, v.clamp)((0, v.map)(e, .23, .34, 0, 1), 0, 1);
                        this.setSpeedTestOverlayStyle(t), this.setOceanOverlayStyle(1 - t), this.setOceanBlackOverlayStyle(1), this.pauseOceanVideo(), this.setAbsolutePositioning()
                    } else if (e > .34 && e < .8) this.setSpeedTestOverlayStyle(1), this.setOceanOverlayStyle(0), this.setOceanBlackOverlayStyle(1), this.pauseOceanVideo(), this.setAbsolutePositioning();
                    else if (e >= .8) {
                        var t = (0, v.clamp)((0, v.map)(e, .8, 1, 0, 1), 0, 1);
                        this.setSpeedTestOverlayStyle(1), this.setOceanOverlayStyle(0), this.setOceanBlackOverlayStyle(1 - t), this.removeAbsolutePositioning(), this.playOceanVideo()
                    }
                }
            }, { key: "setAbsolutePositioning", value: function() { this.fixedSection.style.position = "absolute" } }, { key: "removeAbsolutePositioning", value: function() { this.fixedSection.style.position = "fixed" } }, { key: "playOceanVideo", value: function() { this._videoPaused && this.video.paused && (this.video.play(), this._videoPaused = !1) } }, { key: "pauseOceanVideo", value: function() { this._videoPaused || this.video.paused || (this.video.pause(), this._videoPaused = !0) } }, { key: "setSpeedTestOverlayStyle", value: function(e) { this._cachedSpeedTestOverlayOpacity !== e && (this.speedTestOverlay.style.opacity = e) } }, { key: "setOceanOverlayStyle", value: function(e) { this._cachedOceanOverlayOpacity !== e && (this.oceanOverlay.style.opacity = e) } }, { key: "setOceanBlackOverlayStyle", value: function(e) { this._cachedOceanOverlayBlackOpacity !== e && (this.oceanOverlayBlack.style.opacity = e) } }, { key: "reset", value: function() { this.setSpeedTestOverlayStyle(0), this.setOceanOverlayStyle(1), this.setOceanBlackOverlayStyle(1), this.setAbsolutePositioning(), this.pauseOceanVideo() } }, { key: "moveToGPU", value: function() { this._hasMovedToGPU || (this.speedTestOverlay.classList.add("j-move-to-gpu"), this.oceanOverlay.classList.add("j-move-to-gpu"), this.oceanOverlayBlack.classList.add("j-move-to-gpu"), this._hasMovedToGPU = !0) } }, { key: "deleteFromGPU", value: function() { this._hasMovedToGPU && (this.speedTestOverlay.classList.remove("j-move-to-gpu"), this.oceanOverlay.classList.remove("j-move-to-gpu"), this.oceanOverlayBlack.classList.remove("j-move-to-gpu"), this._hasMovedToGPU = !1) } }]), t
        }(f["default"]),
        _ = function() {
            function e() {
                a(this, e);
                var t = (0, d.querySelector)(".home-speedtest");
                this.stSection = new c["default"](t, t, new y)
            }
            return o(e, [{ key: "update", value: function(e) { this.stSection.update(e) } }]), e
        }();
    t["default"] = function() { return new p["default"](new _) }, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        s = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        l = i(22),
        u = n(l),
        c = i(10),
        h = i(17),
        f = i(48),
        d = n(f),
        m = i(49),
        p = n(m),
        v = function() {
            function e(t) { r(this, e), this.element = t, this._isMovedToGPU = !1 }
            return s(e, [{ key: "move", value: function() { this._isMovedToGPU || (this.element.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this._isMovedToGPU = !0) } }, { key: "remove", value: function() { this._isMovedToGPU && (this.element.style[(0, u["default"])("transform")] = "none", this._isMovedToGPU = !1) } }]), e
        }(),
        y = function(e) {
            function t() { r(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return a(t, e), s(t, [{ key: "init", value: function() { this.wholeSection = (0, c.querySelector)(".home-spinrilla"), this.backgroundElement = (0, c.querySelector)(".home-spinrilla__cover"), this.textElement = (0, c.querySelector)(".home-spinrilla__text"), this.screens = (0, c.querySelector)(".home-spinrilla__screens"), this.speedTestVideo = (0, c.querySelector)(".home-speedtest__speedtest"), this.isSpeedTestVideoHidden = !1, this.hideSpeedTestVideo(), this.BG_START_POSITION = -50, this.BG_SPEEDUP_RATIO = 1.7, this.TEXT_START_POSITION = -150, this.TEXT_SPEEDUP_RATIO = 1.5, this._isBGFixed = !1, this._isBGDimmed = !1, this.bgGPUMover = new v(this.backgroundElement), this.screenGPUMover = new v(this.screens), this._cachedTextPosition = null, this._cachedScreenOpacity = null, this._cachedBGOpacity = null, this._cachedBGPosition = null } }, {
                key: "moveIn",
                value: function(e) {
                    if (this.setTextStyle(this.TEXT_START_POSITION * (-2 + (0, h.clamp)(e, 0, 1))), e >= .607) {
                        this.bgGPUMover.move(), this.makeBgFixed();
                        var t = (0, h.map)(e, .607, 1, 0, .5);
                        this.setBackgroundOpacity((0, h.clamp)(t, 0, .5))
                    } else this.bgGPUMover.remove(), this.makeBgRelative(), this.setBackgroundOpacity(0);
                    this.undimSection(), this.setScreensStyle(1), e >= .8 ? this.screenGPUMover.move() : this.screenGPUMover.remove()
                }
            }, {
                key: "moveOut",
                value: function(e) {
                    var t = (0, h.clamp)(e, 0, 1),
                        i = -1 * this.TEXT_START_POSITION * (this.TEXT_SPEEDUP_RATIO * t - 1);
                    if (this.setTextStyle(i), e >= .508 ? (this.dimSection(), this.showSpeedTestVideo()) : (this.undimSection(), this.hideSpeedTestVideo()), e <= .447 ? this.setBackgroundOpacity((0, h.clamp)((0, h.map)(e, 0, .447, .5, 1), .5, 1)) : e > .447 && e < .508 ? this.setBackgroundOpacity(1) : e >= .508 && e <= .75 ? this.setBackgroundOpacity(1 - (0, h.clamp)((0, h.map)(e, .508, .75, 0, 1), 0, 1)) : this.setBackgroundOpacity(0), e > .75) this.makeBgRelative(), this.bgGPUMover.remove();
                    else {
                        this.bgGPUMover.move(), this.makeBgFixed();
                        var n = this.BG_SPEEDUP_RATIO * this.BG_START_POSITION * t;
                        this.setBackgroundPosition(n)
                    }
                    e >= .554 && e <= .823 ? this.setScreensStyle(1 - (0, h.clamp)((0, h.map)(e, .554, .823, 0, 1), 0, 1)) : e < .554 ? this.setScreensStyle(1) : this.setScreensStyle(0), e >= .95 ? this.screenGPUMover.remove() : this.screenGPUMover.move()
                }
            }, { key: "setBackgroundPosition", value: function(e) { this._cachedBGPosition !== e && (this.backgroundElement.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)", this._cachedBGPosition = e) } }, { key: "setBackgroundOpacity", value: function(e) { this._cachedBGOpacity !== e && (this.backgroundElement.style.opacity = e, this._cachedBGOpacity = e) } }, { key: "makeBgFixed", value: function() { this._isBGFixed || (this.backgroundElement.style.position = "fixed", this._isBGFixed = !0) } }, { key: "makeBgRelative", value: function() { this._isBGFixed && (this.backgroundElement.style.position = "relative", this._isBGFixed = !1) } }, { key: "undimSection", value: function() { this._isBGDimmed && (this.wholeSection.style.backgroundColor = "#101010", this._isBGDimmed = !1) } }, { key: "dimSection", value: function() { this._isBGDimmed || (this.wholeSection.style.backgroundColor = "#0A0C1F", this._isBGDimmed = !0) } }, { key: "setScreensStyle", value: function(e) { this._cachedScreenOpacity !== e && (this.screens.style.opacity = e, this._cachedScreenOpacity = e) } }, {
                key: "setTextStyle",
                value: function(e) {
                    var t = Math.round(e);
                    t !== this._cachedTextPosition && (this.textElement.style[(0, u["default"])("transform")] = "translate3d(0, " + t + "px, 0)", this._cachedTextPosition = t)
                }
            }, { key: "hideSpeedTestVideo", value: function() { this.isSpeedTestVideoHidden || (this.speedTestVideo.style.visibility = "hidden", this.isSpeedTestVideoHidden = !0) } }, { key: "showSpeedTestVideo", value: function() { this.isSpeedTestVideoHidden && (this.speedTestVideo.style.visibility = "visible", this.isSpeedTestVideoHidden = !1) } }]), t
        }(p["default"]),
        _ = function() {
            function e() {
                r(this, e);
                var t = (0, c.querySelector)(".j-spinrilla-parallax-trigger");
                this.spinrillaView = new d["default"](t, t, new y)
            }
            return s(e, [{ key: "update", value: function(e) { this.spinrillaView.update(e) } }]), e
        }();
    t["default"] = _, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(22),
        u = n(l),
        c = i(10),
        h = i(17),
        f = i(48),
        d = n(f),
        m = i(49),
        p = n(m),
        v = i(20),
        y = n(v),
        _ = i(36),
        g = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return r(t, e), o(t, [{ key: "init", value: function() { this.layer1 = (0, c.querySelector)(".home-speedtest__layer_1", this.view.el), this.layer2 = (0, c.querySelector)(".home-speedtest__layer_2", this.view.el), this.layer3 = (0, c.querySelector)(".home-speedtest__layer_3", this.view.el), this.layer4 = (0, c.querySelector)(".home-speedtest__layer_4", this.view.el), this.START_POSITION = 400, this.SPEEDUP_RATIO_ON_MOVEOUT = 1.5, y["default"].on("update", this.onResize.bind(this)), this.onResize(), this._cachedZIndex = null, this._cachedOpacity = null, this._cachedPosition = null } }, { key: "onResize", value: function() { this._isWideMonitor = (0, _.width)() > 1024 } }, {
                key: "moveIn",
                value: function(e) {
                    if (e > 0) {
                        this.moveToGPU();
                        var t = 1 - (0, h.clamp)(e, 0, 1),
                            i = this.START_POSITION * t;
                        this.setStyle(i)
                    } else this.deleteFromGPU();
                    this.isWideMonitor() ? e < .697 ? (this.changeTransparency(0), this.changeZIndex(1)) : e >= .697 && e <= .777 ? (this.changeTransparency((0, h.clamp)((0, h.map)(e, .697, .777, 0, 1), 0, 1)), this.changeZIndex(3)) : (this.changeTransparency(1), this.changeZIndex(3)) : (this.changeTransparency(1), this.changeZIndex(1))
                }
            }, {
                key: "moveOut",
                value: function(e) {
                    if (e > 1.2) this.deleteFromGPU();
                    else {
                        this.moveToGPU();
                        var t = (0, h.clamp)(e, 0, 1),
                            i = -1 * this.START_POSITION * t;
                        this.setStyle(i)
                    }
                    this.isWideMonitor() ? (this.changeTransparency(1), this.changeZIndex(3)) : (this.changeTransparency(1), this.changeZIndex(1))
                }
            }, { key: "changeTransparency", value: function(e) { this._cachedOpacity !== e && (this.layer1.style.opacity = e, this._cachedOpacity = e) } }, { key: "changeZIndex", value: function(e) { this._cachedZIndex !== e && (this.view.el.style.zIndex = e, this._cachedZIndex = e) } }, { key: "isWideMonitor", value: function() { return this._isWideMonitor } }, { key: "setStyle", value: function(e) { this._cachedPosition !== e && (this.layer1.style[(0, u["default"])("transform")] = "translate3d(0, " + Math.round(.2 * e) + "px, 0)", this.layer2.style[(0, u["default"])("transform")] = "translate3d(0, " + Math.round(.6 * e) + "px, 0)", this.layer3.style[(0, u["default"])("transform")] = "translate3d(0, " + Math.round(1.2 * e) + "px, 0)", this.layer4.style[(0, u["default"])("transform")] = "translate3d(0, " + Math.round(2 * e) + "px, 0)", this._cachedPosition = e) } }, { key: "moveToGPU", value: function() { this._hasMovedToGPU || (this.layer1.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.layer2.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.layer3.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this.layer4.style[(0, u["default"])("transform")] = "translate3d(0, 0, 0)", this._hasMovedToGPU = !0) } }, { key: "deleteFromGPU", value: function() { this._hasMovedToGPU && (this.layer1.style[(0, u["default"])("transform")] = "none", this.layer2.style[(0, u["default"])("transform")] = "none", this.layer3.style[(0, u["default"])("transform")] = "none", this.layer4.style[(0, u["default"])("transform")] = "none", this._hasMovedToGPU = !1) } }]), t
        }(p["default"]),
        S = function() {
            function e() {
                a(this, e);
                var t = (0, c.querySelector)(".home-speedtest");
                this.speedtestSection = new d["default"](t, t, new g)
            }
            return o(e, [{ key: "update", value: function(e) { this.speedtestSection.update(e) } }]), e
        }();
    t["default"] = S, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        s = function(e, t, i) {
            for (var n = !0; n;) {
                var a = e,
                    r = t,
                    o = i;
                n = !1, null === a && (a = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(a, r);
                if (void 0 !== s) { if ("value" in s) return s.value; var l = s.get; if (void 0 === l) return; return l.call(o) }
                var u = Object.getPrototypeOf(a);
                if (null === u) return;
                e = u, t = r, i = o, n = !0, s = u = void 0
            }
        },
        l = i(22),
        u = n(l),
        c = i(10),
        h = i(14),
        f = (i(17), i(48)),
        d = n(f),
        m = i(49),
        p = n(m),
        v = function(e) {
            function t() { a(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
            return r(t, e), o(t, [{ key: "init", value: function() { this.SPEEDUP_RATIO_ON_MOVEOUT = .5, this.trackingSection = (0, c.querySelector)(".home-footer") } }, {
                key: "moveOut",
                value: function(e) {
                    var t = (0, h.pxInViewPort)(this.trackingSection) * this.SPEEDUP_RATIO_ON_MOVEOUT;
                    this.setStyle(-1 * t)
                }
            }, { key: "setStyle", value: function(e) { this.view.el.style[(0, u["default"])("transform")] = "translate3d(0, " + e + "px, 0)" } }]), t
        }(p["default"]),
        y = function() {
            function e() { a(this, e), this.dom = { clients: (0, c.querySelector)(".home-clients"), video: (0, c.querySelector)(".section-fixed__bg_approach"), oceanTracking: (0, c.querySelector)(".j-ocean-tracking") }, this.videoView = new d["default"](this.dom.video, this.dom.oceanTracking, new v) }
            return o(e, [{ key: "update", value: function(e) { this.videoView.update(e) } }]), e
        }();
    t["default"] = y, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }

    function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) { return i && e(t.prototype, i), n && e(t, n), t }
        }(),
        o = i(22),
        s = n(o),
        l = i(10),
        u = i(8),
        c = function() {
            function e() { a(this, e), this.el = (0, l.querySelector)(".home-works"), this.blueSectionEl = (0, l.querySelector)(".home-works__bg_blue", this.el), this.HID_CLASS = "j-hero-bottom-hidden", this.LOADING_CLASS = "j-hero-loading", (0, u.addEventListener)(this.blueSectionEl, (0, s["default"])("transitionend"), this.onTransitionEnd.bind(this)) }
            return r(e, [{ key: "show", value: function() { this.el.classList.remove(this.HID_CLASS) } }, { key: "onTransitionEnd", value: function(e) { this.el.classList.remove(this.LOADING_CLASS), this.destroy() } }, {
                key: "destroy",
                value: function() {
                    (0, u.removeEventListener)(this.blueSectionEl, (0, s["default"])("transitionend"), this.onTransitionEnd), this.el = null, this.HID_CLASS = null, this.LOADING_CLASS = null
                }
            }]), e
        }();
    t["default"] = c, e.exports = t["default"]
}, function(e, t, i) {
    "use strict";

    function n(e) { return e && e.__esModule ? e : { "default": e } }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = i(4),
        r = n(a),
        o = i(10),
        s = i(61),
        l = n(s),
        u = i(27),
        c = n(u);
    t["default"] = function() {
        return r["default"].Promise(function(e, t) {
            var i = ((0, o.querySelector)(".page"), (0, o.querySelector)(".open-menu")),
                n = (0, o.querySelector)(".section-fixed__bg_header-inner"),
                a = (0, o.querySelector)(".section-fixed__bg-video-wrap", n),
                r = { desktop: "/svg.html", mobile: "/svg-mobile.html" },
                u = c["default"].mobile ? r.mobile : r.desktop,
                h = document.createElement("div"),
                f = new l["default"](u, s.METHODS.GET, { async: !0 });
            f.send().then(function(t) {
                if (h.innerHTML = t, document.body.insertBefore((0, o.querySelector)(".common-svgs div", h), i), c["default"].mobile) return h = null, e();
                a.appendChild((0, o.querySelector)(".wireframe div", h));
                var r = (0, o.querySelector)(".back-animation", h).childNodes;
                for (var s in r) {
                    var l = r[s];
                    l && l.nodeType === Node.ELEMENT_NODE && n.appendChild(l)
                }
                var u = (0, o.querySelector)(".animations", h).childNodes;
                for (var s in u) {
                    var l = u[s];
                    l && 1 === l.nodeType && a.appendChild(l)
                }
                h = null, e()
            })
        })
    }, e.exports = t["default"]
}]);