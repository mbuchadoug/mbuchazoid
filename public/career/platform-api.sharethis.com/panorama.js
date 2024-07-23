var lotameIsCompatible = function() {
    return (typeof Object.keys !== 'undefined' && typeof window.postMessage !== 'undefined' && typeof XMLHttpRequest !== 'undefined' && typeof(new XMLHttpRequest().withCredentials) !== 'undefined' && typeof console !== 'undefined' && typeof console.log !== 'undefined' && typeof document.createElement !== 'undefined');
};
if (!lotameIsCompatible()) {
    if (console && console.error) {
        console.error('Lotame: This browser does not meet the minimum requirements.');
    }
} else {
    function sync16621_a(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function sync16621_b(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: sync16621_a(a)
        }
    }
    var sync16621_aa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        sync16621_c;
    if ("function" == typeof Object.setPrototypeOf) sync16621_c = Object.setPrototypeOf;
    else {
        var sync16621_d;
        a: {
            var sync16621_ba = {
                    Sa: !0
                },
                sync16621_e = {};
            try {
                sync16621_e.__proto__ = sync16621_ba;
                sync16621_d = sync16621_e.Sa;
                break a
            } catch (a) {}
            sync16621_d = !1
        }
        sync16621_c = sync16621_d ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sync16621_f = sync16621_c;

    function sync16621_g(a, b) {
        a.prototype = sync16621_aa(b.prototype);
        a.prototype.constructor = a;
        if (sync16621_f) sync16621_f(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.hb = b.prototype
    }
    var sync16621_h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function sync16621_i(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var sync16621_ca = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var f in d) sync16621_i(d, f) && (a[f] = d[f])
            }
            return a
        },
        sync16621_j = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };

    function sync16621_k(a, b) {
        if (b) {
            var c = sync16621_h;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var f = a[d];
                f in c || (c[f] = {});
                c = c[f]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && sync16621_j(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    sync16621_k("Object.assign", function(a) {
        return a || sync16621_ca
    });

    function sync16621_l() {
        sync16621_l = function() {};
        sync16621_h.Symbol || (sync16621_h.Symbol = sync16621_da)
    }

    function sync16621_m(a, b) {
        this.Ka = a;
        sync16621_j(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
    sync16621_m.prototype.toString = function() {
        return this.Ka
    };
    var sync16621_da = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new sync16621_m("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }();

    function sync16621_n() {
        sync16621_l();
        var a = sync16621_h.Symbol.iterator;
        a || (a = sync16621_h.Symbol.iterator = sync16621_h.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && sync16621_j(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return sync16621_o(sync16621_a(this))
            }
        });
        sync16621_n = function() {}
    }

    function sync16621_o(a) {
        sync16621_n();
        a = {
            next: a
        };
        a[sync16621_h.Symbol.iterator] = function() {
            return this
        };
        return a
    }
    sync16621_k("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    sync16621_k("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var f = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
                var h = d[c];
                if (h === b || Object.is(h, b)) return !0
            }
            return !1
        }
    });
    sync16621_k("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) sync16621_i(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    sync16621_k("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var f = d.length, h = 0; h < f; h++) {
                    var g = d[h];
                    if (b.call(c, g, h, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    sync16621_k("WeakMap", function(a) {
        function b(e) {
            this.T = (g += Math.random() + 1).toString();
            if (e) {
                e = sync16621_b(e);
                for (var k; !(k = e.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }

        function c() {}

        function d(e) {
            if (!sync16621_i(e, h)) {
                var k = new c;
                sync16621_j(e, h, {
                    value: k
                })
            }
        }

        function f(e) {
            var k = Object[e];
            k && (Object[e] = function(l) {
                if (l instanceof c) return l;
                d(l);
                return k(l)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var e = Object.seal({}),
                        k = Object.seal({}),
                        l = new a([
                            [e, 2],
                            [k, 3]
                        ]);
                    if (2 != l.get(e) || 3 != l.get(k)) return !1;
                    l.delete(e);
                    l.set(k, 4);
                    return !l.has(e) && 4 == l.get(k)
                } catch (m) {
                    return !1
                }
            }()) return a;
        var h = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var g = 0;
        b.prototype.set = function(e, k) {
            d(e);
            if (!sync16621_i(e, h)) throw Error("WeakMap key fail: " + e);
            e[h][this.T] = k;
            return this
        };
        b.prototype.get = function(e) {
            return sync16621_i(e, h) ? e[h][this.T] : void 0
        };
        b.prototype.has = function(e) {
            return sync16621_i(e, h) && sync16621_i(e[h], this.T)
        };
        b.prototype.delete = function(e) {
            return sync16621_i(e, h) && sync16621_i(e[h], this.T) ? delete e[h][this.T] : !1
        };
        return b
    });
    sync16621_k("Map", function(a) {
        function b() {
            var e = {};
            return e.w = e.next = e.head = e
        }

        function c(e, k) {
            var l = e.s;
            return sync16621_o(function() {
                if (l) {
                    for (; l.head != e.s;) l = l.w;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(e, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? h.has(k) ? l = h.get(k) : (l = "" + ++g, h.set(k, l)) : l = "p_" + k;
            var m = e.S[l];
            if (m && sync16621_i(e.S, l))
                for (e = 0; e < m.length; e++) {
                    var n = m[e];
                    if (k !== k && n.key !== n.key || k === n.key) return {
                        id: l,
                        list: m,
                        index: e,
                        g: n
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                g: void 0
            }
        }

        function f(e) {
            this.S = {};
            this.s = b();
            this.size = 0;
            if (e) {
                e = sync16621_b(e);
                for (var k; !(k = e.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var e = Object.seal({
                            x: 4
                        }),
                        k = new a(sync16621_b([
                            [e, "s"]
                        ]));
                    if ("s" != k.get(e) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != e || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        sync16621_n();
        var h = new WeakMap;
        f.prototype.set = function(e, k) {
            e = 0 === e ? 0 : e;
            var l = d(this, e);
            l.list || (l.list = this.S[l.id] = []);
            l.g ? l.g.value = k : (l.g = {
                next: this.s,
                w: this.s.w,
                head: this.s,
                key: e,
                value: k
            }, l.list.push(l.g), this.s.w.next = l.g, this.s.w = l.g, this.size++);
            return this
        };
        f.prototype.delete = function(e) {
            e = d(this, e);
            return e.g && e.list ? (e.list.splice(e.index, 1), e.list.length || delete this.S[e.id], e.g.w.next = e.g.next, e.g.next.w = e.g.w, e.g.head = null, this.size--, !0) : !1
        };
        f.prototype.clear = function() {
            this.S = {};
            this.s = this.s.w = b();
            this.size = 0
        };
        f.prototype.has = function(e) {
            return !!d(this, e).g
        };
        f.prototype.get = function(e) {
            return (e = d(this, e).g) && e.value
        };
        f.prototype.entries = function() {
            return c(this, function(e) {
                return [e.key, e.value]
            })
        };
        f.prototype.keys = function() {
            return c(this, function(e) {
                return e.key
            })
        };
        f.prototype.values = function() {
            return c(this, function(e) {
                return e.value
            })
        };
        f.prototype.forEach = function(e, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, e.call(k, m[1], m[0], this)
        };
        f.prototype[Symbol.iterator] = f.prototype.entries;
        var g = 0;
        return f
    });
    sync16621_k("Promise", function(a) {
        function b(g) {
            this.U = 0;
            this.sa = void 0;
            this.N = [];
            var e = this.pa();
            try {
                g(e.resolve, e.reject)
            } catch (k) {
                e.reject(k)
            }
        }

        function c() {
            this.C = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(e) {
                e(g)
            })
        }
        if (a) return a;
        c.prototype.Aa = function(g) {
            if (null == this.C) {
                this.C = [];
                var e = this;
                this.Ba(function() {
                    e.Wa()
                })
            }
            this.C.push(g)
        };
        var f = sync16621_h.setTimeout;
        c.prototype.Ba = function(g) {
            f(g, 0)
        };
        c.prototype.Wa = function() {
            for (; this.C && this.C.length;) {
                var g = this.C;
                this.C = [];
                for (var e = 0; e < g.length; ++e) {
                    var k = g[e];
                    g[e] = null;
                    try {
                        k()
                    } catch (l) {
                        this.Ta(l)
                    }
                }
            }
            this.C = null
        };
        c.prototype.Ta = function(g) {
            this.Ba(function() {
                throw g;
            })
        };
        b.prototype.pa = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(e, m))
                }
            }
            var e = this,
                k = !1;
            return {
                resolve: g(this.cb),
                reject: g(this.ra)
            }
        };
        b.prototype.cb = function(g) {
            if (g === this) this.ra(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.eb(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var e = null != g;
                        break a;
                    case "function":
                        e = !0;
                        break a;
                    default:
                        e = !1
                }
                e ? this.bb(g) : this.Ga(g)
            }
        };
        b.prototype.bb = function(g) {
            var e = void 0;
            try {
                e = g.then
            } catch (k) {
                this.ra(k);
                return
            }
            "function" == typeof e ? this.fb(e, g) : this.Ga(g)
        };
        b.prototype.ra = function(g) {
            this.Ia(2, g)
        };
        b.prototype.Ga = function(g) {
            this.Ia(1, g)
        };
        b.prototype.Ia = function(g, e) {
            if (0 != this.U) throw Error("Cannot settle(" + g + ", " + e + "): Promise already settled in state" + this.U);
            this.U = g;
            this.sa = e;
            this.Xa()
        };
        b.prototype.Xa = function() {
            if (null != this.N) {
                for (var g = 0; g < this.N.length; ++g) h.Aa(this.N[g]);
                this.N = null
            }
        };
        var h = new c;
        b.prototype.eb = function(g) {
            var e = this.pa();
            g.Y(e.resolve, e.reject)
        };
        b.prototype.fb = function(g, e) {
            var k = this.pa();
            try {
                g.call(e, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, e) {
            function k(p, q) {
                return "function" == typeof p ? function(r) {
                    try {
                        l(p(r))
                    } catch (t) {
                        m(t)
                    }
                } : q
            }
            var l, m, n = new b(function(p, q) {
                l = p;
                m = q
            });
            this.Y(k(g, l), k(e, m));
            return n
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.Y = function(g, e) {
            function k() {
                switch (l.U) {
                    case 1:
                        g(l.sa);
                        break;
                    case 2:
                        e(l.sa);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.U);
                }
            }
            var l = this;
            null == this.N ? h.Aa(k) : this.N.push(k)
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(e, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(e, k) {
                for (var l = sync16621_b(g), m = l.next(); !m.done; m = l.next()) d(m.value).Y(e, k)
            })
        };
        b.all = function(g) {
            var e = sync16621_b(g),
                k = e.next();
            return k.done ? d([]) : new b(function(l, m) {
                function n(r) {
                    return function(t) {
                        p[r] = t;
                        q--;
                        0 == q && l(p)
                    }
                }
                var p = [],
                    q = 0;
                do p.push(void 0), q++, d(k.value).Y(n(p.length - 1), m), k = e.next(); while (!k.done)
            })
        };
        return b
    });

    function sync16621_p() {
        this.Fa = -1 !== window.location.href.indexOf("lotameDebug\x3dtrue");
        this.name = "LT.JS"
    }
    sync16621_p.prototype.debug = function(a, b) {
        this.Fa && a && "undefined" !== typeof console && "undefined" !== typeof console.log && (b ? console.log(this.name + ": " + a, b) : console.log(this.name + ": " + a))
    };
    sync16621_p.prototype.error = function(a, b) {
        a && "undefined" !== typeof console && "undefined" !== typeof console.error && (null != b ? console.error(this.name + ": " + a, b) : console.error(this.name + ": " + a))
    };
    var sync16621_ = new sync16621_p;

    function sync16621_q() {
        this.da = 23328E3
    }
    sync16621_q.prototype.I = function(a, b, c, d) {
        d = void 0 === d ? this.da : d;
        document.cookie = a + "\x3d" + b + "; Domain\x3d" + c + "; path\x3d/; SameSite\x3dLax; expires\x3d" + (new Date(Date.now() + 1E3 * d)).toUTCString()
    };
    sync16621_q.prototype.H = function(a) {
        var b = null,
            c = "" + document.cookie;
        0 !== c.length && (a = c.match(a + "\x3d([^;]*)"), "undefined" !== typeof a && null !== a && (b = a[1]));
        return b
    };

    function sync16621_r(a, b, c) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? {} : b;
        c = void 0 === c ? "lotame_" : c;
        this.a = Object.assign({}, {
            bcpClient: 16621,
            audienceExtractionEnabled: !1,
            consentClientIds: [16621],
            panoramaIdEnabled: !0,
            enableAudienceMatching: !0,
            usPrivacyEnabled: !1,
            googleEspEnabled: !1,
            enableDeclaredIds: !1,
            enableDeclaredIdsOnEvents: !1,
            cookieDomain: sync16621_ea(),
            protocol: "https",
            tagsDomain: "tags.crwdcntrl.net",
            privacyDomain: "privacy.crwdcntrl.net",
            firstPartyOnlyDomain: "ltmsphrcl.net",
            firstPartyOnlyCollectionPrefix: "c",
            bcpVersion: "6",
            sharedS3Path: "lt/shared/2",
            cookieNames: ["_cc_id", "_cc_aud", "_cc_cc"],
            profileIdCookieName: "_cc_id",
            panoramaIdName: "panoramaId",
            panoramaIdTypeName: "panoramaIdType",
            declaredIdName: "lotame_16621_did",
            cmpWaitMillis: 250,
            sensitivePrefix: "st"
        }, a);
        a = c + "16621";
        this.a.namespace = window[a];
        c = this.a.namespace;
        if (!c) throw "Configuration Error! Please verify that your code and configuration match the specs and check for syntax errors in the console.";
        b = Object.assign({}, {
            onProfileReady: null,
            bcpPrefix: "bcp"
        }, b);
        this.Ua = sync16621_fa(a, c, b);
        Object.assign(this.a, this.Ua);
        this.a.iframeOrigin = this.a.protocol + "://tags.crwdcntrl.net";
        this.a.bcpDomain = this.a.bcpPrefix + ".crwdcntrl.net";
        this.a.sensitiveDomain = this.a.bcpPrefix + "." + this.a.sensitivePrefix + ".crwdcntrl.net";
        this.a.bcpFirstPartyOnlyDomain = this.a.firstPartyOnlyCollectionPrefix + ".ltmsphrcl.net";
        this.a.sensitiveFirstPartyOnlyDomain = this.a.firstPartyOnlyCollectionPrefix + "." + this.a.sensitivePrefix + ".ltmsphrcl.net";
        this.a.privacyFirstPartyOnlyDomain = this.a.firstPartyOnlyCollectionPrefix + ".ltmsphrcl.net"
    }

    function sync16621_fa(a, b, c) {
        var d = {},
            f = Object.keys(c),
            h = b.config;
        h && (Object.keys(h).filter(function(g) {
            return !f.includes(g)
        }).forEach(function(g) {
            return sync16621_.error("'" + g + "' is an unsupported config option.")
        }), d = Object.keys(h).filter(function(g) {
            return f.includes(g)
        }).reduce(function(g, e) {
            switch (e) {
                case "audienceLocalStorage":
                    "boolean" === typeof h[e] ? g[e] = h[e] ? "lotame_16621_auds" : !1 : "string" === typeof h[e] ? g[e] = h[e] : sync16621_.error("The audienceLocalStorage config option is being ignored as it is neither a boolean nor a string. The default value of false will be used instead.");
                    break;
                case "onTagReady":
                    "function" !== typeof h[e] ? sync16621_.error("The onTagReady config option is being ignored as it is not a function.") : g[e] = h[e];
                    break;
                case "onProfileReady":
                    "function" !== typeof h[e] ? sync16621_.error("The onProfileReady config option is being ignored as it is not a function.") : g[e] = h[e];
                    break;
                case "autoRun":
                    "boolean" !== typeof h[e] ? sync16621_.error("The autoRun config option is being ignored as it is not a boolean. The default value of true will be used instead.") : g[e] = h[e];
                    break;
                case "bcpPrefix":
                    -1 === ["bcp", "cn"].indexOf(h[e]) ? sync16621_.error("The bcpPrefix config option is being ignored as it is not valid. The default value of bcp will be used instead.") : g[e] = h[e];
                    break;
                case "clientId":
                    sync16621_.debug("The clientId config option is not needed anymore");
                    break;
                case "gpc":
                    if (1 == h[e]) throw 'Aborting because "gpc: 1" was present in the page configuration. Subsequent calls to the ' + a + " interface will fail.";
                default:
                    sync16621_.error("'" + e + "' is an unsupported config option.")
            }
            return g
        }, {}));
        return Object.assign({}, c, d)
    }

    function sync16621_ea() {
        var a = String(document.domain).toLowerCase(),
            b = new sync16621_q,
            c = a.split(".");
        if (2 == c.length) return a;
        var d = -2;
        do {
            var f = a = c.slice(d).join(".");
            b.I("lotame_domain_check", f, a, 10);
            b.H("lotame_domain_check") === f ? f = !1 : (d += -1, f = Math.abs(d) <= c.length)
        } while (f);
        return a
    }
    sync16621_r.prototype.D = function() {
        return JSON.parse(JSON.stringify(this.a))
    };

    function sync16621_s() {
        sync16621_r.call(this, {
            lastProfileUpdateMillisKey: "_cc_id_update_ts",
            profileRefreshMillis: 6048E5,
            autoRunSyncJs: !1,
            source: "SYNCJS"
        }, {
            gpc: 0
        }, "lotame_sync_")
    }
    sync16621_g(sync16621_s, sync16621_r);

    function sync16621_t(a) {
        a = void 0 === a ? {} : a;
        this.B = null;
        if (a = a.thirdParty) {
            var b = !0;
            "object" != typeof a && (b = !1, sync16621_.error("tagInput.data.thirdParty should be an object"));
            a.namespace || (b = !1, sync16621_.error("tagInput.data.thirdParty.namespace is not defined"));
            a.value || (b = !1, sync16621_.error("tagInput.data.thirdParty.value is not defined"));
            a.namespace && "string" != typeof a.namespace && (b = !1, sync16621_.error("tagInput.data.thirdParty.namespace should be defined and have a string as its value"));
            a.value && "string" != typeof a.value && (b = !1, sync16621_.error("tagInput.data.thirdParty.value should be defined and have a string as its value"));
            b && (this.B = {}, this.B[a.namespace] = a.value)
        }
    }

    function sync16621_u(a) {
        return !!(a.B && 0 < Object.keys(a.B).length)
    }
    sync16621_t.prototype.Z = function() {
        return {
            tp: sync16621_u(this) ? this.B : void 0
        }
    };
    sync16621_t.prototype.u = function() {
        return !sync16621_u(this)
    };
    sync16621_t.prototype.D = function() {
        if (sync16621_u(this)) {
            var a = null;
            if (this.B) {
                a = {};
                var b = Object.keys(this.B);
                a.namespace = b[0];
                a.value = this.B[b[0]]
            }
        } else a = void 0;
        return {
            ib: a
        }
    };
    var sync16621_ga = new RegExp(/^.{1,64}@.{1,255}$/),
        sync16621_v = ["EMAIL", "EE"];

    function sync16621_w(a) {
        a = void 0 === a ? {} : a;
        sync16621_t.call(this, a);
        this.h = this.R = this.P = this.j = null;
        sync16621_ha(this, a.behaviorIds);
        sync16621_ia(this, a.behaviors);
        sync16621_ja(this, a.ruleBuilder);
        a = a.declaredId;
        var b;
        if (b = a) b = !1, a && sync16621_x(a) ? "undefined" === typeof a.id || "undefined" === typeof a.type ? sync16621_.error("Declared ID object must contain both 'id' and 'type' attributes.") : 2 < Object.keys(a).length ? sync16621_.error("Declared ID object may only contain 'id' and 'type' attributes, got " + Object.keys(a).join(",")) : sync16621_v.includes(a.type) ? "EMAIL" != a.type || sync16621_ga.test(a.id) ? b = !0 : sync16621_.error("In declared ID, supplied id must be valid email address, was '" + a.id + "'") : sync16621_.error("Declared ID object type must one of " + sync16621_v.join() + ", found '" + a.type + "'") : sync16621_.error("Declared ID should be an object");
        b && (this.h = a)
    }
    sync16621_g(sync16621_w, sync16621_t);

    function sync16621_ha(a, b) {
        b && (Array.isArray(b) && b.every(function(c) {
            return "number" === typeof c
        }) ? a.j = b : sync16621_.error("tagInput.data.behaviorIds should be an array of numbers"))
    }

    function sync16621_ia(a, b) {
        if (b) {
            var c = !0;
            "object" != typeof b && sync16621_.error("tagInput.data.behaviors should be an object");
            for (var d = sync16621_b(Object.entries(b)), f = d.next(); !f.done; f = d.next()) {
                var h = sync16621_b(f.value);
                f = h.next().value;
                h = h.next().value;
                if (!Array.isArray(h) || !h.every(function(g) {
                        return "string" === typeof g
                    })) {
                    sync16621_.error("tagInput.data.behaviors." + f + " should be an array of strings");
                    c = !1;
                    break
                }
            }
            c && (a.P = b)
        }
    }

    function sync16621_y(a) {
        return !!(a.P && 0 < Object.keys(a.P).length)
    }

    function sync16621_ja(a, b) {
        if (b) {
            for (var c = !0, d = sync16621_b(Object.entries(b)), f = d.next(); !f.done; f = d.next()) {
                var h = sync16621_b(f.value);
                f = h.next().value;
                h = h.next().value;
                if (!Array.isArray(h) || !h.every(function(g) {
                        return "string" === typeof g
                    })) {
                    sync16621_.error("tagInput.data.ruleBuilder." + f + " should be an array of strings");
                    c = !1;
                    break
                }
            }
            c && (a.R = b)
        }
    }

    function sync16621_z(a) {
        return !!(a.R && 0 < Object.keys(a.R).length)
    }

    function sync16621_A(a) {
        return !!(a.h && 0 < Object.keys(a.h).length)
    }
    sync16621_w.prototype.Z = function() {
        return Object.assign({}, {
            b: this.j && 0 < this.j.length ? this.j : void 0,
            bt: sync16621_y(this) ? this.P : void 0,
            db: sync16621_z(this) ? this.R : void 0,
            did: sync16621_A(this) ? this.h : void 0
        }, sync16621_t.prototype.Z.call(this))
    };
    sync16621_w.prototype.u = function() {
        return !(this.j && 0 < this.j.length) && !sync16621_y(this) && !sync16621_z(this) && !sync16621_A(this) && sync16621_t.prototype.u.call(this)
    };
    sync16621_w.prototype.D = function() {
        return Object.assign({}, {
            behaviorIds: this.j && 0 < this.j.length ? this.j : void 0,
            behaviors: sync16621_y(this) ? this.P : void 0,
            ruleBuilder: sync16621_z(this) ? this.R : void 0,
            declaredId: sync16621_A(this) ? this.h : void 0
        }, sync16621_t.prototype.D.call(this))
    };

    function sync16621_x(a) {
        return "[object Object]" === Object.prototype.toString.call(a)
    }

    function sync16621_B(a) {
        return 0 === Object.keys(a).length && a.constructor === Object
    }

    function sync16621_ka(a, b) {
        var c = void 0 === c ? !0 : c;
        b = b || {};
        var d = Object.assign({
                method: "GET",
                Ja: sync16621_C,
                error: sync16621_C,
                complete: sync16621_C
            }, b),
            f = new XMLHttpRequest;
        f.onreadystatechange = function() {
            if (4 == f.readyState) {
                var h = {};
                if (200 == f.status) {
                    var g = {};
                    try {
                        g = JSON.parse(f.response)
                    } catch (e) {
                        sync16621_.error("Could not parse the following response from Lotame's servers: " + f.response)
                    }
                    d.Ja(g, f.statusText, h);
                    d.complete(g, f.statusText, h)
                } else d.error(h, f.statusText, f.response), d.complete(h, f.statusText, f.response)
            }
        };
        b = "undefined" === typeof d.data ? "" : JSON.stringify(d.data);
        f.open(d.method, a, !0);
        f.setRequestHeader("Content-Type", "text/plain;charset\x3dUTF-8");
        c && (f.withCredentials = !0);
        f.send(b)
    }

    function sync16621_C() {}

    function sync16621_D() {
        this.l = []
    }
    sync16621_D.prototype.enqueue = function(a) {
        this.l.push(a)
    };
    sync16621_D.prototype.u = function() {
        return 0 === this.l.length
    };

    function sync16621_E() {
        this.ya = new sync16621_D
    }
    sync16621_E.prototype.enqueue = function(a) {
        sync16621_x(a) && this.ya.enqueue(new sync16621_w(a))
    };
    sync16621_E.prototype.u = function() {
        return this.ya.u()
    };

    function sync16621_F(a) {
        this.wa = this.Qa = this.Ra = !1;
        this.La = "unknown";
        this.Na = new sync16621_E;
        this.Oa = !1;
        this.Ma = a
    }
    sync16621_F.prototype.D = function() {
        return JSON.parse(JSON.stringify({
            running: this.Ra,
            runRequested: this.Qa,
            pageLoaded: this.wa,
            dataCollectionEnvironment: this.La,
            internalDataQueue: this.Na,
            internalDataQueueBeingProcessed: this.Oa,
            dataCollectionOnlyUseCase: this.Ma
        }))
    };

    function sync16621_G(a) {
        this.f = a;
        this.Da = new sync16621_q;
        this.ab = this.f.a.profileIdCookieName;
        try {
            var b = window.localStorage;
            b.setItem("__storage_test__", "__storage_test__");
            b.removeItem("__storage_test__");
            var c = !0
        } catch (d) {
            c = d instanceof DOMException && (22 === d.code || 1014 === d.code || "QuotaExceededError" === d.name || "NS_ERROR_DOM_QUOTA_REACHED" === d.name) && b && 0 !== b.length
        }
        this.qa = c;
        this.gb = this.f.a.cookieNames;
        this.da = 23328E3;
        this.ca = "_exp"
    }

    function sync16621_H(a) {
        return sync16621_I(a, a.ab)
    }

    function sync16621_I(a, b) {
        var c = a.H(b);
        c || (c = sync16621_la(a, b));
        return c
    }

    function sync16621_J(a, b, c, d) {
        a.I(b, c, void 0 === d ? a.da : Math.ceil((d - (new Date).getTime()) / 1E3));
        sync16621_K(a, b, c, d)
    }
    sync16621_G.prototype.I = function(a, b, c) {
        this.Da.I(a, b, this.f.a.cookieDomain, c)
    };

    function sync16621_K(a, b, c, d) {
        a.qa && (window.localStorage.setItem(b, c || ""), void 0 !== d && window.localStorage.setItem(b + a.ca, String(d)))
    }

    function sync16621_L(a, b) {
        a.qa && (window.localStorage.removeItem(b), window.localStorage.removeItem(b + a.ca))
    }
    sync16621_G.prototype.H = function(a) {
        return this.Da.H(a)
    };

    function sync16621_la(a, b) {
        return a.qa && (a = window.localStorage.getItem(b + a.ca), !a || "" === a || (new Date(a)).getTime() > Date.now()) ? window.localStorage.getItem(b) : null
    }

    function sync16621_ma(a, b) {
        b && b.forEach(function(c) {
            var d = c.k,
                f = c.v;
            c = c.e;
            a.I(d, f, c);
            0 < c ? sync16621_K(a, d, f) : sync16621_L(a, d)
        })
    }
    sync16621_G.prototype.M = function() {
        var a = this,
            b = [];
        a.gb.forEach(function(c) {
            var d = sync16621_I(a, c);
            d && b.push({
                k: c,
                v: d
            })
        });
        return b
    };
    sync16621_G.prototype.F = function() {
        return this.f.a.panoramaIdEnabled ? sync16621_I(this, this.f.a.panoramaIdName) : null
    };

    function sync16621_na(a) {
        return a.f.a.panoramaIdEnabled ? sync16621_I(a, a.f.a.panoramaIdTypeName) : null
    };

    function sync16621_M(a, b) {
        this.f = a;
        this.storage = b;
        this.Ca = 250;
        this.$ = 0
    }
    sync16621_M.prototype.O = function() {
        console.error("Class extending BaseConsentHandler must implement pollForConsent()")
    };
    sync16621_h.Object.defineProperties(sync16621_M, {
        ta: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return 60
            }
        }
    });

    function sync16621_N(a, b) {
        this.id = a;
        this.Za = b
    }
    sync16621_N.prototype.aa = function() {
        var a = this;
        return {
            getId: function() {
                return a.id
            },
            getIdType: function() {
                return a.id ? a.Za || "UNKNOWN" : null
            }
        }
    };
    var sync16621_oa = new Map(Object.entries({
        i: "panoIndiv",
        c: "panoDevice"
    }));

    function sync16621_pa(a) {
        if (null == a) return null;
        for (var b = sync16621_b(sync16621_oa), c = b.next(); !c.done; c = b.next()) {
            var d = sync16621_b(c.value);
            c = d.next().value;
            d = d.next().value;
            if (a === d) return c
        }
        return null
    };

    function sync16621_O(a, b) {
        a = a || {};
        this.f = b || {};
        this.W = this.J = this.V = this.la = this.xa = this.ea = null;
        if (b = a.aud) Array.isArray(b) ? this.ea = b : sync16621_.error("profileData.audienceIds should be an array");
        if (b = a.pid) "string" !== typeof b ? sync16621_.error("if defined, profileData.profileId should be a string") : this.xa = b;
        if (b = a.tc) Array.isArray(b) ? this.la = b : sync16621_.error("profileData.targetingCodes should be an array");
        (b = a.spx) && !Array.isArray(b) && sync16621_.error("profileData.syncPixels should be an array");
        if (b = a.e) Array.isArray(b) ? (this.V = b, Array.isArray(b) && b.forEach(this.Pa)) : sync16621_.error("profileData.errorCodes should be an array");
        (b = a.exb) && !Array.isArray(b) && sync16621_.error("profileData.exportBeaconIds should be an array");
        sync16621_qa(this, a.c);
        sync16621_ra(this, a.ids)
    }

    function sync16621_qa(a, b) {
        if (b)
            if (Array.isArray(b)) {
                var c = [];
                b.forEach(function(d) {
                    var f = !0,
                        h = d.k,
                        g = d.v,
                        e = d.e;
                    "string" !== typeof h && (sync16621_.error("profileData.cookies key attribute should be a string but was " + h), f = !1);
                    "string" !== typeof g && (sync16621_.error("profileData.cookies value attribute should be a string but was " + g), f = !1);
                    "number" !== typeof e && (sync16621_.error("profileData.cookies expiration attribute should be a number but was " + e), f = !1);
                    f && c.push(d)
                });
                a.J = c
            } else sync16621_.error("profileData.cookies (" + b + ") should be an array")
    }

    function sync16621_ra(a, b) {
        if (b)
            if (Array.isArray(b)) {
                var c = [];
                b.forEach(function(d) {
                    var f = !0,
                        h = d.c,
                        g = d.i,
                        e = d.t,
                        k = d.e;
                    "string" !== typeof h && (sync16621_.error("profileData.ids category attribute should be a string but was " + h), f = !1);
                    "string" !== typeof g && "core" !== h && (sync16621_.error("profileData.ids id attribute should be a string but was " + g), f = !1);
                    e && "string" !== typeof e && (sync16621_.error("if set, profileData.ids type attribute should be a string but was " + e), f = !1); - 1 == ["undefined", "string"].indexOf(typeof k) && (sync16621_.error("if set, profileData.ids expiry attribute should be a string but was " + k), f = !1);
                    f && c.push(d)
                });
                a.W = c
            } else sync16621_.error("profileData.ids (" + b + ") should be an array")
    }

    function sync16621_sa(a, b) {
        var c = [];
        a.la ? c = a.la : a.ea && (c = a.ea.join(",").split(","));
        return "number" === typeof b && 0 < b ? c.slice(0, b) : c
    }

    function sync16621_P(a) {
        return (a.W || []).find(function(b) {
            return "core" == b.c
        })
    }
    sync16621_O.prototype.F = function() {
        var a = sync16621_P(this);
        return a ? a.i : null
    };

    function sync16621_ta(a) {
        var b = sync16621_P(a);
        a = b ? b.i : null;
        b ? (b = b.t, b = null == b ? null : (b = sync16621_oa.get(b)) ? b : "UNKNOWN") : b = null;
        return (new sync16621_N(a, b)).aa()
    }

    function sync16621_ua(a) {
        return (a.W || []).find(function(b) {
            return "did" == b.c
        })
    }
    sync16621_O.prototype.M = function() {
        return this.J
    };

    function sync16621_va(a, b) {
        return (a = (a.W || []).find(function(c) {
            return b == c.t && "sync" == c.c
        })) ? a.i : null
    }
    sync16621_O.prototype.aa = function() {
        var a = this,
            b = {};
        return b.getProfileId = function() {
            return a.xa
        }, b.getAudienceString = function(c, d) {
            return (d = sync16621_sa(a, d)) && d !== [] ? d.join(void 0 === c ? "," : c) : null
        }, b.getAudiences = function(c) {
            return sync16621_sa(a, c)
        }, b.getErrorCodes = function() {
            return a.V
        }, b.getThirdParty = function(c) {
            return sync16621_va(a, c)
        }, b.getPanoramaId = function() {
            return a.F()
        }, b.getPanorama = function() {
            return sync16621_ta(a)
        }, b
    };
    sync16621_O.prototype.Pa = function(a) {
        var b = void 0;
        switch (a) {
            case 100:
                b = "Audience extraction calls are not enabled.";
                break;
            case 101:
                b = "Appropriate consent for audience extraction is not present.";
                break;
            case 102:
                b = "Data collection is not enabled.";
                break;
            case 103:
                b = "Id syncing is not enabled.";
                break;
            case 104:
                b = "Data collection client id validation failed.";
                break;
            case 105:
                b = "Audience extraction client id validation failed.";
                break;
            case 106:
                b = "Linked parent id for audience extraction is invalid.";
                break;
            case 107:
                b = "Aborting because third party cookies are disabled and domain is not configured to use first party storage.";
                break;
            case 111:
                b = "Aborting because no consent was present on the request or stored server-side";
                break;
            case 112:
                break;
            case 113:
                b = "Received Error Code 113";
                break;
            case 114:
                b = "Aborting because TCF string was expected but not present.";
                break;
            case 115:
                b = "Declared Ids are not enabled for this client - the request contained a Declared ID but the indicated data collection client is not enabled for this feature.";
                break;
            case 116:
                b = "The request contained a Declared ID that was not properly formatted.";
                break;
            default:
                b = "Unhandled error code " + a + " was received from the data collection call."
        }
        b && sync16621_.error(b)
    };

    function sync16621_wa(a) {
        return Array.isArray(a.V) ? !!a.V.some(function(b) {
            return -1 !== [102, 104, 111].indexOf(b)
        }) : !1
    };
    var sync16621_xa = new RegExp(/^.{1,64}@.{1,255}$/),
        sync16621_ya = ["EMAIL", "EE"];

    function sync16621_Q(a) {
        a = void 0 === a ? {} : a;
        this.ga = null;
        this.X = !1;
        if (a && sync16621_x(a)) {
            var b = !1;
            a && sync16621_x(a) ? "undefined" === typeof a.id || "undefined" === typeof a.type ? sync16621_.error("id object must contain both 'id' and 'type' attributes.") : 2 < Object.keys(a).length ? sync16621_.error("id object may only contain 'id' and 'type' attributes, got " + Object.keys(a).join(",")) : sync16621_ya.includes(a.type) ? "EMAIL" != a.type || sync16621_xa.test(a.id) ? b = !0 : sync16621_.error("supplied id must be valid email address, was '" + a.id + "'") : sync16621_.error("id object type must one of " + sync16621_ya.join() + ", found '" + a.type + "'") : sync16621_.error("id should be an object");
            b && (this.ga = a, this.X = !0)
        } else sync16621_.error("idInput should be an object")
    }
    sync16621_Q.prototype.u = function() {
        return !(this.X && "string" === typeof this.ga)
    };
    sync16621_Q.prototype.D = function() {
        return {
            did: this.ga
        }
    };

    function sync16621_R() {
        this.ha = this.fa = void 0;
        this.ua = this.ia = this.za = !1;
        this.ja = !0;
        this.A = this.h = this.J = this.l = void 0;
        this.na = !1;
        this.ka = this.ma = this.K = this.o = void 0
    }

    function sync16621_za() {
        var a = new sync16621_R;
        a.za = !1;
        return a
    }

    function sync16621_S(a, b) {
        a.ua = b;
        return a
    }

    function sync16621_T(a, b) {
        a.fa = b;
        return a
    }

    function sync16621_U(a, b) {
        a.ia = b;
        return a
    }

    function sync16621_V(a, b) {
        a.J = b;
        return a
    }

    function sync16621_Aa(a, b) {
        "undefined" !== typeof b && (a.h = b);
        return a
    }

    function sync16621_W(a, b) {
        "object" === typeof b && (a.A = b);
        return a
    }

    function sync16621_X(a, b) {
        "undefined" !== typeof b && (a.K = b);
        return a
    }

    function sync16621_Y(a, b) {
        "undefined" !== typeof b && (a.o = b);
        return a
    }

    function sync16621_Z(a, b) {
        "undefined" !== typeof b && (a.ma = b);
        return a
    }

    function sync16621__(a, b) {
        "undefined" !== typeof b && (a.ka = b);
        return a
    }

    function sync16621_0(a) {
        var b = Object.assign({}, a.l, sync16621_Ba(a)),
            c = Object.assign({}, {
                ref: a.ha,
                pv: a.ua,
                dcc: a.fa,
                co: a.na,
                src: a.ka
            }, sync16621_Ca(a));
        return Object.assign({
            r: {
                rpr: a.za,
                rpx: a.ja,
                rid: a.ia
            },
            m: c,
            d: b,
            c: a.J
        }, sync16621_Da(a))
    }

    function sync16621_Ea(a) {
        var b = Object.assign({}, a.l, sync16621_Ba(a)),
            c = Object.assign({}, {
                dcc: a.fa,
                src: a.ka
            }, sync16621_Ca(a));
        return Object.assign({
            r: {
                rid: a.ia
            },
            m: c,
            d: b,
            c: a.J
        }, sync16621_Da(a))
    }

    function sync16621_Ba(a) {
        return "object" === typeof a.h ? a.h.D() : {}
    }

    function sync16621_1(a) {
        return "object" === typeof a.h || "object" === typeof a.l && "object" === typeof a.l.did
    }

    function sync16621_Da(a) {
        var b = "boolean" === typeof a.o,
            c = "string" === typeof a.K,
            d = "string" === typeof a.ma;
        return b || c ? {
            consent: {
                gdpr_applies: b ? a.o : null,
                gdpr_consent: c ? a.K : null
            }
        } : d ? {
            consent: {
                us_privacy: d ? a.ma : null
            }
        } : {}
    }

    function sync16621_Ca(a) {
        var b = {};
        "object" == typeof a.A && 0 < Object.keys(a.A || {}).length && (b.ch = a.A);
        return b
    };

    function sync16621_2(a, b) {
        sync16621_M.call(this, a, b);
        this.K = this.o = null;
        this.O()
    }
    sync16621_g(sync16621_2, sync16621_M);

    function sync16621_3(a) {
        var b = a.K;
        b || (b = a.storage.H("eupubconsent-v2"));
        b || (b = a.storage.H("euconsent-v2"));
        return b
    }
    sync16621_2.prototype.O = function() {
        var a = this;
        if ("undefined" !== typeof window.__tcfapi) {
            var b = function(c, d) {
                d && c && ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus) && (c.tcString && "string" == typeof c.tcString && (a.K = c.tcString), c.gdprApplies && "boolean" == typeof c.gdprApplies && (a.o = c.gdprApplies))
            };
            try {
                window.__tcfapi("getTCData", 2, b)
            } catch (c) {
                c && sync16621_.debug("Call to deprecated getTCData method returned error: " + c)
            }
            try {
                window.__tcfapi("addEventListener", 2, b)
            } catch (c) {
                c && sync16621_.error("There was a problem using the TCF API: " + c)
            }
        } else this.$ < sync16621_2.ta && setTimeout(function() {
            a.O();
            a.$++
        }, this.Ca)
    };

    function sync16621_4(a, b, c) {
        sync16621_M.call(this, a, b);
        this.Va = c;
        this.oa = null;
        (this.va = a.a.usPrivacyEnabled) && this.O()
    }
    sync16621_g(sync16621_4, sync16621_M);

    function sync16621_5(a) {
        var b = a.oa;
        !b && a.va && (b = a.storage.H("usprivacy"));
        return b
    }
    sync16621_4.prototype.O = function() {
        var a = this;
        "undefined" !== typeof window.__uspapi ? (window.__uspapi("registerDeletion", 1, function(b) {
            sync16621_.debug("Received a deletion request " + JSON.stringify(b));
            a.oa = "1YYY";
            b = a.Va;
            var c = void 0 === c ? sync16621_C : c;
            var d = sync16621_za();
            d.ha = sync16621_Fa();
            d = sync16621_T(sync16621_U(sync16621_S(d, !0), !1), b.f.a.bcpClient);
            d.na = b.f.a.cookieDomain ? !1 : !0;
            d.ja = !1;
            d = sync16621_V(sync16621__(sync16621_Z(sync16621_X(sync16621_Y(d, b.G.o), sync16621_3(b.G)), sync16621_5(b.ba)), b.f.a.source), b.storage.M());
            sync16621_6(b, d);
            sync16621_7(b, sync16621_0(d), sync16621_8(b, d), "data", c)
        }), window.__uspapi("getUSPData", 1, function(b, c) {
            c && b && b.uspString && "string" == typeof b.uspString && (a.oa = b.uspString)
        })) : this.$ < sync16621_4.ta && setTimeout(function() {
            a.O();
            a.$++
        }, this.Ca)
    };

    function sync16621_Ga(a, b, c) {
        this.f = a || {};
        this.storage = b || {};
        this.state = c;
        this.G = new sync16621_2(this.f, this.storage);
        this.ba = new sync16621_4(this.f, this.storage, this);
        this.$a = !(!navigator.userAgent || -1 == navigator.userAgent.indexOf("Safari") || -1 != navigator.userAgent.indexOf("Chrome"));
        this.Ha = null;
        this.A = void 0
    }

    function sync16621_Ha(a, b) {
        var c = void 0 === c ? sync16621_C : c;
        b && sync16621_x(b) && !sync16621_B(b) && !b.u() && sync16621_9(a).then(function(d) {
            d = sync16621_Ia(a, b, d);
            sync16621_7(a, sync16621_0(d), sync16621_8(a, d), "data", c)
        })
    }

    function sync16621_Ja(a, b, c) {
        c = void 0 === c ? sync16621_C : c;
        sync16621_9(a).then(function(d) {
            d = sync16621__(sync16621_Z(sync16621_X(sync16621_Y(sync16621_W(sync16621_V(sync16621_S(sync16621_U(sync16621_T(new sync16621_R, a.f.a.bcpClient), !0), !1), a.storage.M()), d), a.G.o), sync16621_3(a.G)), sync16621_5(a.ba)), a.f.a.source);
            if (b) {
                var f = b.Z();
                sync16621_B(f) || (d.l = f)
            }
            sync16621_6(a, d);
            sync16621_7(a, sync16621_Ea(d), sync16621_8(a, d), "map", c)
        })
    }

    function sync16621_Fa() {
        var a = window.location.href,
            b = a.indexOf("?"); - 1 !== b && (a = a.substring(0, b));
        return a
    }

    function sync16621_7(a, b, c, d, f) {
        f = void 0 === f ? sync16621_C : f;
        sync16621_ka(sync16621_Ka(a, void 0 === d ? "data" : d, c), {
            method: "POST",
            data: b,
            Ja: function(h) {
                a.Ha = new sync16621_O(h, a.f);
                f(a.Ha)
            },
            error: function(h, g) {
                sync16621_.error("Aborting due to error contacting Lotame's servers. Error reason was '" + (void 0 === g ? " not provided" : g) + "'.")
            }
        })
    }
    sync16621_Ga.prototype.ping = function(a) {
        if (a && sync16621_x(a) && !sync16621_B(a) && !a.u()) {
            var b = !1;
            if (window.navigator && window.navigator.sendBeacon) {
                b = sync16621_Ia(this, a);
                var c = sync16621_Ka(this, "data", sync16621_8(this, b));
                sync16621_.debug("Using navigator.sendBeacon() to send the following data on page exit", a);
                b = navigator.sendBeacon(c, JSON.stringify(sync16621_0(b)))
            }
            b || (sync16621_.debug("Falling back to ajax to send the following data on page exit", a), sync16621_Ha(this, a))
        }
    };

    function sync16621_Ia(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = sync16621_za();
        d.ha = sync16621_Fa();
        d = sync16621_U(sync16621_T(sync16621_S(d, !1), a.f.a.bcpClient), !1);
        d.ja = !1;
        b = b.Z();
        d.l = b;
        d.na = a.f.a.cookieDomain ? !1 : !0;
        c = sync16621__(sync16621_Z(sync16621_X(sync16621_Y(sync16621_W(sync16621_V(d, a.storage.M()), c), a.G.o), sync16621_3(a.G)), sync16621_5(a.ba)), a.f.a.source);
        sync16621_6(a, c);
        return c
    }

    function sync16621_La(a, b, c) {
        c = void 0 === c ? sync16621_C : c;
        if (a.f.a.enableDeclaredIds) {
            var d = !1;
            if (sync16621_x(b)) {
                var f = new sync16621_Q(b);
                (d = f.X) && sync16621_9(a).then(function(h) {
                    h = sync16621_Aa(sync16621__(sync16621_Z(sync16621_X(sync16621_Y(sync16621_W(sync16621_V(sync16621_S(sync16621_U(sync16621_T(new sync16621_R, a.f.a.bcpClient), !1), !1), a.storage.M()), h), a.G.o), sync16621_3(a.G)), sync16621_5(a.ba)), a.f.a.source), f);
                    sync16621_7(a, sync16621_Ea(h), sync16621_8(a, h), "map", c)
                })
            }
            d || sync16621_.error("Call to identify must include a properly formatted ID object.")
        } else sync16621_.error("Client " + a.f.a.bcpClient + " is not enabled to declare identifiers. Please contact a Lotame representative.")
    }

    function sync16621_Ka(a, b, c) {
        return a.f.a.protocol + "://" + a.f.a[c] + "/" + a.f.a.bcpVersion + "/" + b
    }

    function sync16621_8(a, b) {
        return a.$a ? sync16621_1(b) ? "sensitiveFirstPartyOnlyDomain" : "bcpFirstPartyOnlyDomain" : sync16621_1(b) ? "sensitiveDomain" : "bcpDomain"
    }

    function sync16621_6(a, b) {
        if (a.f.a.enableDeclaredIds && a.f.a.enableDeclaredIdsOnEvents && !sync16621_1(b)) {
            a: {
                a = a.storage;
                if (a = sync16621_la(a, a.f.a.declaredIdName)) try {
                    var c = Object(JSON.parse(a));
                    break a
                } catch (d) {
                    sync16621_.debug("Error parsing declared ID from local storage: " + a)
                }
                c = null
            }
            c && (c = new sync16621_Q(c), c.X && sync16621_Aa(b, c))
        }
    }

    function sync16621_9(a) {
        if ("undefined" == typeof a.A) {
            var b = {};
            if ("object" == typeof navigator.userAgentData && "function" == typeof navigator.userAgentData.getHighEntropyValues) return Promise.race([navigator.userAgentData.getHighEntropyValues(["model", "platformVersion", "fullVersionList"]), new Promise(function(c) {
                return setTimeout(c, 10, b)
            })]);
            a.A = b
        }
        return Promise.resolve(a.A)
    };

    function sync16621_Ma(a, b) {
        this.enabled = !0 === a.a.googleEspEnabled && !0 === a.a.panoramaIdEnabled && !0;
        this.storage = b;
        sync16621_.Fa && sync16621_.debug("Google Esp Module Enabled: " + this.enabled);
        !0 === this.enabled && (window.googletag = window.googletag || {
            cmd: []
        }, window.googletag.encryptedSignalProviders = window.googletag.encryptedSignalProviders || [], (a = this.storage.F()) && sync16621_Na(this, a))
    }

    function sync16621_Na(a, b) {
        b = b || "";
        a.enabled && window.googletag.encryptedSignalProviders.push({
            id: "crwdcntrl.net",
            collectorFunction: function() {
                sync16621_.debug("panoramaId provided to googleEsp: " + b);
                return Promise.resolve(b)
            }
        })
    };

    function sync16621_Oa(a, b) {
        this.f = a;
        this.storage = b
    }

    function sync16621_Pa(a, b) {
        var c = b.M();
        c && sync16621_ma(a.storage, c);
        var d;
        if (d = (c = sync16621_P(b)) ? c.e : null) {
            c = sync16621_ta(b);
            var f = b.F(),
                h = c ? c.getIdType() : null,
                g = a.f.a.panoramaIdName;
            c = a.f.a.panoramaIdTypeName;
            var e = parseInt(d, 10);
            sync16621_J(a.storage, g + "_expiry", d, e);
            "string" === typeof f && f ? sync16621_J(a.storage, g, f, e) : (d = a.storage, d.I(g, "", 0), sync16621_L(d, g));
            "string" === typeof h && h && "UNKNOWN" !== h ? sync16621_J(a.storage, c, h, e) : (d = a.storage, d.I(c, "", 0), sync16621_L(d, c))
        }
        a.f.a.enableDeclaredIds && a.f.a.enableDeclaredIdsOnEvents && (b = sync16621_ua(b)) && (b.i ? (a = a.storage, sync16621_K(a, a.f.a.declaredIdName, JSON.stringify({
            id: b.i,
            type: b.t
        }))) : (a = a.storage, sync16621_L(a, a.f.a.declaredIdName)))
    }

    function sync16621_$(a, b) {
        if ("function" === typeof a.f.a.onProfileReady) try {
            (0, a.f.a.onProfileReady)(b.aa())
        } catch (c) {
            c && sync16621_.error("The following error occurred in the onProfileReady callback: " + c)
        }
    }

    function sync16621_Qa(a) {
        var b = a.f.a.namespace;
        Array.isArray(b.cmd) ? b.cmd.forEach(function(c) {
            if ("function" === typeof c) try {
                c.apply(a)
            } catch (d) {
                d && sync16621_.error("The following error occurred when executing queued commands: " + d)
            }
        }) : b.cmd = [];
        b.cmd.push = function(c) {
            if ("function" === typeof c) try {
                c.apply(a)
            } catch (d) {
                d && sync16621_.error("The following error occurred when executing a command: " + d)
            }
        }
    };

    function sync16621_Ra() {
        var a = this.f = new sync16621_s;
        this.state = new sync16621_F(!(a.a.audienceExtractionEnabled && a.a.enableAudienceMatching && (null !== a.a.onProfileReady || !1 !== a.a.audienceLocalStorage)));
        this.storage = new sync16621_G(this.f);
        this.Ea = new sync16621_Ga(this.f, this.storage, this.state);
        this.L = new sync16621_Oa(this.f, this.storage);
        this.Ya = new sync16621_Ma(this.f, this.storage);
        "complete" === document.readyState && (this.state.wa = !0);
        sync16621_Sa(this);
        sync16621_Qa(this.L);
        !0 === this.f.a.autoRunSyncJs && this.sync({})
    }

    function sync16621_Sa(a) {
        var b = a.f.a.namespace;
        b.getProfileId = function() {
            return sync16621_H(a.storage)
        };
        b.getPanoramaId = function() {
            return a.storage.F()
        };
        b.sync = function(c) {
            return a.sync(c)
        };
        b.setIdentity = function(c) {
            return sync16621_Ta(a, c)
        };
        b.getInternalState = function() {
            return a.state.D()
        };
        b.getInternalConfigs = function() {
            return a.f.D()
        };
        b.getPanorama = function() {
            return (new sync16621_N(a.storage.F(), sync16621_na(a.storage))).aa()
        }
    }
    sync16621_Ra.prototype.sync = function(a) {
        var b = this,
            c = !0,
            d = void 0;
        d = sync16621_x(a) && !sync16621_B(a) ? new sync16621_t(a) : new sync16621_t;
        if (d.u())
            if (this.f.a.panoramaIdEnabled) {
                if (a = sync16621_I(this.storage, this.f.a.panoramaIdName + "_expiry"), (parseInt(a, 10) || 0) > Date.now()) {
                    c = {};
                    c.pid = sync16621_H(this.storage);
                    var f = {
                        c: "core"
                    };
                    f.i = this.storage.F();
                    f.t = sync16621_pa(sync16621_na(this.storage));
                    f.e = a;
                    c.ids = [f];
                    sync16621_$(this.L, new sync16621_O(c, this.f));
                    c = !1
                }
            } else a = sync16621_H(this.storage), f = sync16621_I(this.storage, this.f.a.lastProfileUpdateMillisKey), a && f && Date.now() - this.f.a.profileRefreshMillis < f && (sync16621_$(this.L, new sync16621_O({
                pid: a
            }, this.f)), c = !1);
        c && sync16621_Ja(this.Ea, d, function(h) {
            sync16621_K(b.storage, b.f.a.lastProfileUpdateMillisKey, String(Date.now()));
            sync16621_Pa(b.L, h);
            sync16621_wa(h) ? sync16621_.error("Aborting due to above errors.") : sync16621_Na(b.Ya, b.storage.F());
            sync16621_$(b.L, h)
        })
    };

    function sync16621_Ta(a, b) {
        sync16621_La(a.Ea, b, function(c) {
            sync16621_Pa(a.L, c)
        })
    };
    sync16621_.name = "SYNC.JS";
    try {
        new sync16621_Ra
    } catch (a) {
        sync16621_.error(a)
    };
}