(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 88143, (e, t, r) => {
    "use strict";

    function s({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: s,
        blurDataURL: n,
        objectFit: a
    }) {
        let i = r ? 40 * r : e,
            l = s ? 40 * s : t,
            o = i && l ? `viewBox='0 0 ${i} ${l}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${o?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return s
        }
    })
}, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        VALID_LOADERS: function() {
            return a
        },
        imageConfigDefault: function() {
            return i
        }
    };
    for (var n in s) Object.defineProperty(r, n, {
        enumerable: !0,
        get: s[n]
    });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
        i = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return o
        }
    }), e.r(33525);
    let s = e.r(88143),
        n = e.r(87690),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function i(e) {
        return void 0 !== e.default
    }

    function l(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function o({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: o = !1,
        preload: c = !1,
        loading: d,
        className: u,
        quality: m,
        width: f,
        height: p,
        fill: x = !1,
        style: g,
        overrideSrc: h,
        onLoad: b,
        onLoadingComplete: y,
        placeholder: j = "empty",
        blurDataURL: w,
        fetchPriority: v,
        decoding: N = "async",
        layout: _,
        objectFit: S,
        objectPosition: k,
        lazyBoundary: E,
        lazyRoot: P,
        ...C
    }, O) {
        var R;
        let M, I, T, {
                imgConf: L,
                showAltText: D,
                blurComplete: z,
                defaultLoader: A
            } = O,
            $ = L || n.imageConfigDefault;
        if ("allSizes" in $) M = $;
        else {
            let e = [...$.deviceSizes, ...$.imageSizes].sort((e, t) => e - t),
                t = $.deviceSizes.sort((e, t) => e - t),
                r = $.qualities ? .sort((e, t) => e - t);
            M = { ...$,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === A) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let F = C.loader || A;
        delete C.loader, delete C.srcSet;
        let B = "__next_img_default" in F;
        if (B) {
            if ("custom" === M.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = F;
            F = t => {
                let {
                    config: r,
                    ...s
                } = t;
                return e(s)
            }
        }
        if (_) {
            "fill" === _ && (x = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[_];
            e && (g = { ...g,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[_];
            r && !t && (t = r)
        }
        let U = "",
            q = l(f),
            G = l(p);
        if ((R = e) && "object" == typeof R && (i(R) || void 0 !== R.src)) {
            let t = i(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (I = t.blurWidth, T = t.blurHeight, w = w || t.blurDataURL, U = t.src, !x)
                if (q || G) {
                    if (q && !G) {
                        let e = q / t.width;
                        G = Math.round(t.height * e)
                    } else if (!q && G) {
                        let e = G / t.height;
                        q = Math.round(t.width * e)
                    }
                } else q = t.width, G = t.height
        }
        let W = !o && !c && ("lazy" === d || void 0 === d);
        (!(e = "string" == typeof e ? e : U) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, W = !1), M.unoptimized && (r = !0), B && !M.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let H = l(m),
            K = Object.assign(x ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: k
            } : {}, D ? {} : {
                color: "transparent"
            }, g),
            X = z || "empty" === j ? null : "blur" === j ? `url("data:image/svg+xml;charset=utf-8,${(0,s.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:I,blurHeight:T,blurDataURL:w||"",objectFit:K.objectFit})}")` : `url("${j}")`,
            V = a.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit,
            Q = X ? {
                backgroundSize: V,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X
            } : {},
            Y = function({
                config: e,
                src: t,
                unoptimized: r,
                width: s,
                quality: n,
                sizes: a,
                loader: i
            }) {
                if (r) return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: l,
                    kind: o
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, s) {
                    if (s) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = r.exec(s);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let r = .01 * Math.min(...n);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, s, a), c = l.length - 1;
                return {
                    sizes: a || "w" !== o ? a : "100vw",
                    srcSet: l.map((r, s) => `${i({config:e,src:t,quality:n,width:r})} ${"w"===o?r:s+1}${o}`).join(", "),
                    src: i({
                        config: e,
                        src: t,
                        quality: n,
                        width: l[c]
                    })
                }
            }({
                config: M,
                src: e,
                unoptimized: r,
                width: q,
                quality: H,
                sizes: t,
                loader: F
            }),
            J = W ? "lazy" : d;
        return {
            props: { ...C,
                loading: J,
                fetchPriority: v,
                width: q,
                height: G,
                decoding: N,
                className: u,
                style: { ...K,
                    ...Q
                },
                sizes: Y.sizes,
                srcSet: Y.srcSet,
                src: h || Y.src
            },
            meta: {
                unoptimized: r,
                preload: c || o,
                placeholder: j,
                fill: x
            }
        }
    }
}, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let s = e.r(71645),
        n = "undefined" == typeof window,
        a = n ? () => {} : s.useLayoutEffect,
        i = n ? () => {} : s.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), l()), a(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), a(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), i(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        default: function() {
            return x
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in s) Object.defineProperty(r, n, {
        enumerable: !0,
        get: s[n]
    });
    let a = e.r(55682),
        i = e.r(90809),
        l = e.r(43476),
        o = i._(e.r(71645)),
        c = a._(e.r(98879)),
        d = e.r(42732);

    function u() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function m(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];

    function p(e) {
        let t, r, s, n;
        return e.reduce(m, []).reverse().concat(u().reverse()).filter((t = new Set, r = new Set, s = new Set, n = {}, e => {
            let a = !0,
                i = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                i = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? a = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? a = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = f.length; t < r; t++) {
                        let r = f[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) s.has(r) ? a = !1 : s.add(r);
                            else {
                                let t = e.props[r],
                                    s = n[r] || new Set;
                                ("name" !== r || !i) && s.has(t) ? a = !1 : (s.add(t), n[r] = s)
                            }
                    }
            }
            return a
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return o.default.cloneElement(e, {
                key: r
            })
        })
    }
    let x = function({
        children: e
    }) {
        let t = (0, o.useContext)(d.HeadManagerContext);
        return (0, l.jsx)(c.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let s = e.r(55682)._(e.r(71645)),
        n = e.r(87690),
        a = s.default.createContext(n.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let s = e.r(55682)._(e.r(71645)).default.createContext(null)
}, 70965, (e, t, r) => {
    "use strict";

    function s(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return s
        }
    })
}, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let s = e.r(70965);

    function n({
        config: e,
        src: t,
        width: r,
        quality: n
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, s.findClosestQuality)(n, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/_next/static/media/"),""}`
    }
    n.__next_img_default = !0;
    let a = n
}, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let s = e.r(71645);

    function n(e, t) {
        let r = (0, s.useRef)(null),
            n = (0, s.useRef)(null);
        return (0, s.useCallback)(s => {
            if (null === s) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = a(e, s)), t && (n.current = a(t, s))
        }, [e, t])
    }

    function a(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 5500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return j
        }
    });
    let s = e.r(55682),
        n = e.r(90809),
        a = e.r(43476),
        i = n._(e.r(71645)),
        l = s._(e.r(74080)),
        o = s._(e.r(25633)),
        c = e.r(8927),
        d = e.r(87690),
        u = e.r(18556);
    e.r(33525);
    let m = e.r(65856),
        f = s._(e.r(1948)),
        p = e.r(18581),
        x = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, r, s, n, a, i) {
        let l = e ? .src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let s = !1,
                        n = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => s,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            s = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                s ? .current && s.current(e)
            }
        }))
    }

    function h(e) {
        return i.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, i.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: s,
        width: n,
        decoding: l,
        className: o,
        style: c,
        fetchPriority: d,
        placeholder: u,
        loading: m,
        unoptimized: f,
        fill: x,
        onLoadRef: b,
        onLoadingCompleteRef: y,
        setBlurComplete: j,
        setShowAltText: w,
        sizesInput: v,
        onLoad: N,
        onError: _,
        ...S
    }, k) => {
        let E = (0, i.useCallback)(e => {
                e && (_ && (e.src = e.src), e.complete && g(e, u, b, y, j, f, v))
            }, [e, u, b, y, j, _, f, v]),
            P = (0, p.useMergedRef)(k, E);
        return (0, a.jsx)("img", { ...S,
            ...h(d),
            loading: m,
            width: n,
            height: s,
            decoding: l,
            "data-nimg": x ? "fill" : "1",
            className: o,
            style: c,
            sizes: r,
            srcSet: t,
            src: e,
            ref: P,
            onLoad: e => {
                g(e.currentTarget, u, b, y, j, f, v)
            },
            onError: e => {
                w(!0), "empty" !== u && j(!0), _ && _(e)
            }
        })
    });

    function y({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...h(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r), null) : (0, a.jsx)(o.default, {
            children: (0, a.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let j = (0, i.forwardRef)((e, t) => {
        let r = (0, i.useContext)(m.RouterContext),
            s = (0, i.useContext)(u.ImageConfigContext),
            n = (0, i.useMemo)(() => {
                let e = x || s || d.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: "undefined" == typeof window ? s ? .localPatterns : e.localPatterns
                }
            }, [s]),
            {
                onLoad: l,
                onLoadingComplete: o
            } = e,
            p = (0, i.useRef)(l);
        (0, i.useEffect)(() => {
            p.current = l
        }, [l]);
        let g = (0, i.useRef)(o);
        (0, i.useEffect)(() => {
            g.current = o
        }, [o]);
        let [h, j] = (0, i.useState)(!1), [w, v] = (0, i.useState)(!1), {
            props: N,
            meta: _
        } = (0, c.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: h,
            showAltText: w
        });
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(b, { ...N,
                unoptimized: _.unoptimized,
                placeholder: _.placeholder,
                fill: _.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: j,
                setShowAltText: v,
                sizesInput: e.sizes,
                ref: t
            }), _.preload ? (0, a.jsx)(y, {
                isAppRouter: !r,
                imgAttributes: N
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        default: function() {
            return d
        },
        getImageProps: function() {
            return c
        }
    };
    for (var n in s) Object.defineProperty(r, n, {
        enumerable: !0,
        get: s[n]
    });
    let a = e.r(55682),
        i = e.r(8927),
        l = e.r(5500),
        o = a._(e.r(1948));

    function c(e) {
        let {
            props: t
        } = (0, i.getImgProps)(e, {
            defaultLoader: o.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let d = l.Image
}, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}, 98183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        assign: function() {
            return o
        },
        searchParamsToUrlQuery: function() {
            return a
        },
        urlQueryToSearchParams: function() {
            return l
        }
    };
    for (var n in s) Object.defineProperty(r, n, {
        enumerable: !0,
        get: s[n]
    });

    function a(e) {
        let t = {};
        for (let [r, s] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = s : Array.isArray(e) ? e.push(s) : t[r] = [e, s]
        }
        return t
    }

    function i(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function l(e) {
        let t = new URLSearchParams;
        for (let [r, s] of Object.entries(e))
            if (Array.isArray(s))
                for (let e of s) t.append(r, i(e));
            else t.set(r, i(s));
        return t
    }

    function o(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, s] of r.entries()) e.append(t, s)
        }
        return e
    }
}, 95057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        formatUrl: function() {
            return l
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return o
        }
    };
    for (var n in s) Object.defineProperty(r, n, {
        enumerable: !0,
        get: s[n]
    });
    let a = e.r(90809)._(e.r(98183)),
        i = /https?|ftp|gopher|file/;

    function l(e) {
        let {
            auth: t,
            hostname: r
        } = e, s = e.protocol || "", n = e.pathname || "", l = e.hash || "", o = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), o && "object" == typeof o && (o = String(a.urlQueryToSearchParams(o)));
        let d = e.search || o && `?${o}` || "";
        return s && !s.endsWith(":") && (s += ":"), e.slashes || (!s || i.test(s)) && !1 !== c ? (c = "//" + (c || ""), n && "/" !== n[0] && (n = "/" + n)) : c || (c = ""), l && "#" !== l[0] && (l = "#" + l), d && "?" !== d[0] && (d = "?" + d), n = n.replace(/[?#]/g, encodeURIComponent), d = d.replace("#", "%23"), `${s}${c}${n}${d}${l}`
    }
    let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return l(e)
    }
}, 18967, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        DecodeError: function() {
            return h
        },
        MiddlewareNotFoundError: function() {
            return w
        },
        MissingStaticPage: function() {
            return j
        },
        NormalizeError: function() {
            return b
        },
        PageNotFoundError: function() {
            return y
        },
        SP: function() {
            return x
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return a
        },
        execOnce: function() {
            return i
        },
        getDisplayName: function() {
            return u
        },
        getLocationOrigin: function() {
            return c
        },
        getURL: function() {
            return d
        },
        isAbsoluteUrl: function() {
            return o
        },
        isResSent: function() {
            return m
        },
        loadGetInitialProps: function() {
            return p
        },
        normalizeRepeatedSlashes: function() {
            return f
        },
        stringifyError: function() {
            return v
        }
    };
    for (var n in s) Object.defineProperty(r, n, {
        enumerable: !0,
        get: s[n]
    });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function i(e) {
        let t, r = !1;
        return (...s) => (r || (r = !0, t = e(...s)), t)
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = e => l.test(e);

    function c() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function d() {
        let {
            href: e
        } = window.location, t = c();
        return e.substring(t.length)
    }

    function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function m(e) {
        return e.finished || e.headersSent
    }

    function f(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function p(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await p(t.Component, t.ctx)
        } : {};
        let s = await e.getInitialProps(t);
        if (r && m(r)) return s;
        if (!s) throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${s}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return s
    }
    let x = "undefined" != typeof performance,
        g = x && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class h extends Error {}
    class b extends Error {}
    class y extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class j extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class w extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function v(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 73668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let s = e.r(18967),
        n = e.r(52817);

    function a(e) {
        if (!(0, s.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, s.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, n.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 84508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let s = e => {}
}, 22016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var s = {
        default: function() {
            return h
        },
        useLinkStatus: function() {
            return y
        }
    };
    for (var n in s) Object.defineProperty(r, n, {
        enumerable: !0,
        get: s[n]
    });
    let a = e.r(90809),
        i = e.r(43476),
        l = a._(e.r(71645)),
        o = e.r(95057),
        c = e.r(8372),
        d = e.r(18581),
        u = e.r(18967),
        m = e.r(5550);
    e.r(33525);
    let f = e.r(91949),
        p = e.r(73668),
        x = e.r(65165);

    function g(e) {
        return "string" == typeof e ? e : (0, o.formatUrl)(e)
    }

    function h(t) {
        var r;
        let s, n, a, [o, h] = (0, l.useOptimistic)(f.IDLE_LINK_STATUS),
            y = (0, l.useRef)(null),
            {
                href: j,
                as: w,
                children: v,
                prefetch: N = null,
                passHref: _,
                replace: S,
                shallow: k,
                scroll: E,
                onClick: P,
                onMouseEnter: C,
                onTouchStart: O,
                legacyBehavior: R = !1,
                onNavigate: M,
                ref: I,
                unstable_dynamicOnHover: T,
                ...L
            } = t;
        s = v, R && ("string" == typeof s || "number" == typeof s) && (s = (0, i.jsx)("a", {
            children: s
        }));
        let D = l.default.useContext(c.AppRouterContext),
            z = !1 !== N,
            A = !1 !== N ? null === (r = N) || "auto" === r ? x.FetchStrategy.PPR : x.FetchStrategy.Full : x.FetchStrategy.PPR,
            {
                href: $,
                as: F
            } = l.default.useMemo(() => {
                let e = g(j);
                return {
                    href: e,
                    as: w ? g(w) : e
                }
            }, [j, w]);
        if (R) {
            if (s ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            n = l.default.Children.only(s)
        }
        let B = R ? n && "object" == typeof n && n.ref : I,
            U = l.default.useCallback(e => (null !== D && (y.current = (0, f.mountLinkInstance)(e, $, D, A, z, h)), () => {
                y.current && ((0, f.unmountLinkForCurrentNavigation)(y.current), y.current = null), (0, f.unmountPrefetchableInstance)(e)
            }), [z, $, D, A, h]),
            q = {
                ref: (0, d.useMergedRef)(U, B),
                onClick(t) {
                    R || "function" != typeof P || P(t), R && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), !D || t.defaultPrevented || function(t, r, s, n, a, i, o) {
                        if ("undefined" != typeof window) {
                            let c, {
                                nodeName: d
                            } = t.currentTarget;
                            if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, p.isLocalURL)(r)) {
                                a && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), o) {
                                let e = !1;
                                if (o({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: u
                            } = e.r(99781);
                            l.default.startTransition(() => {
                                u(s || r, a ? "replace" : "push", i ? ? !0, n.current)
                            })
                        }
                    }(t, $, F, y, S, E, M)
                },
                onMouseEnter(e) {
                    R || "function" != typeof C || C(e), R && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), D && z && (0, f.onNavigationIntent)(e.currentTarget, !0 === T)
                },
                onTouchStart: function(e) {
                    R || "function" != typeof O || O(e), R && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), D && z && (0, f.onNavigationIntent)(e.currentTarget, !0 === T)
                }
            };
        return (0, u.isAbsoluteUrl)(F) ? q.href = F : R && !_ && ("a" !== n.type || "href" in n.props) || (q.href = (0, m.addBasePath)(F)), a = R ? l.default.cloneElement(n, q) : (0, i.jsx)("a", { ...L,
            ...q,
            children: s
        }), (0, i.jsx)(b.Provider, {
            value: o,
            children: a
        })
    }
    e.r(84508);
    let b = (0, l.createContext)(f.IDLE_LINK_STATUS),
        y = () => (0, l.useContext)(b);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 31713, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(57688);
    let n = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        a = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let l = (0, r.forwardRef)(({
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: n,
            className: l = "",
            children: o,
            iconNode: c,
            ...d
        }, u) => (0, r.createElement)("svg", {
            ref: u,
            ...i,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: n ? 24 * Number(s) / Number(t) : s,
            className: a("lucide", l),
            ...!o && !(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
            })(d) && {
                "aria-hidden": "true"
            },
            ...d
        }, [...c.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])),
        o = (e, t) => {
            let s = (0, r.forwardRef)(({
                className: s,
                ...i
            }, o) => (0, r.createElement)(l, {
                ref: o,
                iconNode: t,
                className: a(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, s),
                ...i
            }));
            return s.displayName = n(e), s
        },
        c = o("menu", [
            ["path", {
                d: "M4 5h16",
                key: "1tepv9"
            }],
            ["path", {
                d: "M4 12h16",
                key: "1lakjw"
            }],
            ["path", {
                d: "M4 19h16",
                key: "1djgab"
            }]
        ]),
        d = o("x", [
            ["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }],
            ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]
        ]);

    function u() {
        let [e, n] = (0, r.useState)(!1);
        return (0, t.jsxs)("header", {
            className: "max-w-6xl mx-auto flex items-center justify-between p-4 relative",
            children: [(0, t.jsx)("div", {
                children: (0, t.jsx)(s.default, {
                    src: "/logo.png",
                    alt: "Company Logo",
                    width: 120,
                    height: 40,
                    className: "object-contain"
                })
            }), (0, t.jsxs)("div", {
                className: "hidden md:flex gap-3",
                children: [(0, t.jsxs)("button", {
                    className: "px-7 py-2 rounded border border-primary text-black flex gap-2 items-center text-lg font-semibold",
                    children: [(0, t.jsx)("span", {
                        children: "1800"
                    }), " ", (0, t.jsx)("span", {
                        children: "000"
                    }), " ", (0, t.jsx)("span", {
                        children: "0299"
                    })]
                }), (0, t.jsx)("button", {
                    className: "px-7 py-2 text-white bg-primary rounded text-lg font-semibold",
                    children: "Contact Sales"
                })]
            }), (0, t.jsx)("button", {
                className: "md:hidden text-black",
                onClick: () => n(!e),
                children: e ? (0, t.jsx)(d, {
                    size: 28
                }) : (0, t.jsx)(c, {
                    size: 28
                })
            }), e && (0, t.jsxs)("div", {
                className: "absolute top-full w-full right-0 mt-2 bg-white shadow-lg rounded-lg flex flex-col gap-2 p-3 z-50",
                children: [(0, t.jsxs)("button", {
                    className: "px-4 py-2 rounded border border-primary text-black flex gap-2 items-center justify-center text-base font-semibold",
                    children: [(0, t.jsx)("span", {
                        children: "1800"
                    }), " ", (0, t.jsx)("span", {
                        children: "000"
                    }), " ", (0, t.jsx)("span", {
                        children: "0299"
                    })]
                }), (0, t.jsx)("button", {
                    className: "px-4 py-2 text-white bg-primary rounded text-base font-semibold",
                    children: "Contact Sales"
                })]
            })]
        })
    }
    let m = o("move-right", [
            ["path", {
                d: "M18 8L22 12L18 16",
                key: "1r0oui"
            }],
            ["path", {
                d: "M2 12H22",
                key: "1m8cig"
            }]
        ]),
        f = o("chevron-down", [
            ["path", {
                d: "m6 9 6 6 6-6",
                key: "qrunsl"
            }]
        ]),
        p = o("star", [
            ["path", {
                d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
                key: "r04s7s"
            }]
        ]),
        x = o("plus", [
            ["path", {
                d: "M5 12h14",
                key: "1ays0h"
            }],
            ["path", {
                d: "M12 5v14",
                key: "s699le"
            }]
        ]);
    var g = e.i(22016);
    let h = o("chevron-right", [
            ["path", {
                d: "m9 18 6-6-6-6",
                key: "mthhwq"
            }]
        ]),
        b = () => (0, t.jsxs)("footer", {
            className: "bg-white mt-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 ",
            children: [(0, t.jsxs)("div", {
                className: " grid grid-cols-1 md:grid-cols-4 gap-8",
                children: [(0, t.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, t.jsx)(s.default, {
                        src: "/logo.png",
                        alt: "Lumina Logo",
                        width: 130,
                        height: 40,
                        className: "object-contain"
                    }), (0, t.jsx)("p", {
                        className: "text-gray-600 text-sm leading-relaxed",
                        children: "We provide top-quality outsourced support to businesses of all sizes worldwide, delivering expert solutions that drive efficiency and growth."
                    }), (0, t.jsxs)("p", {
                        className: "text-gray-500 text-sm",
                        children: ["a ", (0, t.jsx)("span", {
                            className: "font-semibold",
                            children: "C9group"
                        }), " company"]
                    })]
                }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("h3", {
                        className: "font-semibold text-gray-800 mb-3",
                        children: "For Businesses"
                    }), (0, t.jsx)("ul", {
                        className: "space-y-2",
                        children: ["Link Here", "Link Here", "Link Here", "Link Here", "Link Here"].map((e, r) => (0, t.jsx)("li", {
                            children: (0, t.jsxs)(g.default, {
                                href: "#",
                                className: "flex items-center text-gray-600 hover:text-pink-600 text-sm",
                                children: [(0, t.jsx)(h, {
                                    className: "w-4 h-4 mr-1"
                                }), " ", e]
                            })
                        }, r))
                    })]
                }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("h3", {
                        className: "font-semibold text-gray-800 mb-3",
                        children: "For Talents"
                    }), (0, t.jsx)("ul", {
                        className: "space-y-2",
                        children: ["Link Here", "Link Here", "Link Here", "Link Here", "Link Here"].map((e, r) => (0, t.jsx)("li", {
                            children: (0, t.jsxs)(g.default, {
                                href: "#",
                                className: "flex items-center text-gray-600 hover:text-pink-600 text-sm",
                                children: [(0, t.jsx)(h, {
                                    className: "w-4 h-4 mr-1"
                                }), " ", e]
                            })
                        }, r))
                    })]
                }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("h3", {
                        className: "font-semibold text-gray-800 mb-3",
                        children: "Resources"
                    }), (0, t.jsx)("ul", {
                        className: "space-y-2",
                        children: ["Link Here", "Link Here", "Link Here", "Link Here", "Link Here"].map((e, r) => (0, t.jsx)("li", {
                            children: (0, t.jsxs)(g.default, {
                                href: "#",
                                className: "flex items-center text-gray-600 hover:text-pink-600 text-sm",
                                children: [(0, t.jsx)(h, {
                                    className: "w-4 h-4 mr-1"
                                }), " ", e]
                            })
                        }, r))
                    })]
                })]
            }), (0, t.jsx)("div", {
                className: "border-t border-gray-200 mt-4",
                children: (0, t.jsxs)("div", {
                    className: "pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500",
                    children: [(0, t.jsx)("p", {
                        children: "© 2025 C9 Teams. All Rights Reserved."
                    }), (0, t.jsxs)("div", {
                        className: "flex space-x-4 mt-2 md:mt-0",
                        children: [(0, t.jsx)(g.default, {
                            href: "#",
                            className: "hover:text-pink-600",
                            children: "Terms & Conditions"
                        }), (0, t.jsx)(g.default, {
                            href: "#",
                            className: "hover:text-pink-600",
                            children: "Privacy Policy"
                        })]
                    })]
                })
            })]
        }),
        y = [{
            id: 1,
            image: "/blog2.png",
            title: "Aute Irure Esse Cillum",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
        }, {
            id: 2,
            image: "/blog1.png",
            title: "Aute Irure Esse Cillum",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
        }, {
            id: 3,
            image: "/blog3.png",
            title: "Cupidatat Non proident Sunt Nulla",
            description: "Cupidatat non proident, sunt in culpa qui officia."
        }],
        j = [{
            question: "What Is Digital Signage?",
            answer: "Digital signage is a display technology that uses screens to share dynamic content like advertisements, announcements, and real-time information."
        }, {
            question: "How Does Digital Signage Work?",
            answer: "Digital signage works by using digital displays connected to a content management system that allows businesses to update and manage content remotely."
        }, {
            question: "Why Is Digital Signage Important For My Business?",
            answer: "It enhances brand visibility, engages customers, and allows you to communicate messages effectively across different locations."
        }, {
            question: "What Are The Benefits Of Using Digital Signage?",
            answer: "Digital signage offers a world of advantages for your business across various industries. It captures attention with vibrant visuals and creates immersive experiences. This can lead to improved engagement, higher sales, and stronger brand awareness."
        }, {
            question: "How Does Digital Signage Boost Your Brand?",
            answer: "It helps reinforce brand identity through consistent visuals, engaging animations, and dynamic storytelling."
        }, {
            question: "Can Digital Signage Target Your Audience?",
            answer: "Yes, you can tailor content based on location, time of day, or audience demographics to maximize engagement."
        }, {
            question: "How Can Digital Signage Enhance Customer Engagement?",
            answer: "Interactive and personalized content can improve customer satisfaction and encourage repeat visits."
        }, {
            question: "Can Digital Signage Be Considered A Cost-Effective Solution?",
            answer: "Yes, compared to traditional static signage, it reduces printing costs and allows for real-time content updates."
        }],
        w = ["/bus1.png", "/bus2.png", "/bus3.png", "/bus4.png", "/bus5.png"],
        v = [{
            title: "Indoor Screens",
            image: "/Group 1000005515 (1).png",
            description1: "Indoor LED screens deliver crisp, high-resolution visuals ideal for close viewing in conference halls, malls, showrooms, and event venues. They are designed to perform optimally in controlled lighting conditions, ensuring vibrant colors and sharp detail. Lightweight and sleek, they integrate seamlessly into interior spaces without overpowering the décor.",
            description2: "They are available in various pixel pitches to suit different viewing distances, making them versatile for both small and large venues. With seamless panel connections, they create a smooth, uninterrupted image that enhances visual appeal. Easy maintenance and energy efficiency make them a cost-effective long-term display solution."
        }, {
            title: "Outdoor Screens",
            image: "/Group 1000005515 (2).png",
            description1: "Outdoor LED screens are built to withstand harsh weather conditions while delivering excellent brightness and visibility even under direct sunlight. They are perfect for billboards, stadiums, and outdoor advertising.",
            description2: "With waterproof and dustproof designs, they ensure consistent performance and durability. Their high contrast and brightness make them ideal for dynamic outdoor displays."
        }, {
            title: "Transparent Screens",
            image: "/Group 1000005515 (3).png",
            description1: "Transparent LED screens provide stunning visuals while maintaining transparency, perfect for retail windows, showrooms, and exhibitions.",
            description2: "They blend digital content with the real-world background, creating an immersive and futuristic viewing experience."
        }, {
            title: "Curved Screens",
            image: "/Group 1000005515 (4).png",
            description1: "Curved LED screens offer a captivating panoramic view ideal for immersive displays in control rooms, exhibitions, and large venues.",
            description2: "Their flexible design allows for creative installations, enhancing depth and engagement with audiences."
        }, {
            title: "Interactive Screens",
            image: "/Group 1000005515 (5).png",
            description1: "Interactive screens combine touch-sensitive technology with vivid display quality, enabling user engagement in classrooms, malls, and presentations.",
            description2: "They support multi-touch input, making them perfect for collaboration, gaming, and digital signage."
        }];

    function N() {
        let [e, n] = (0, r.useState)(null), [a, i] = (0, r.useState)(v[0]);
        return (0, t.jsxs)("div", {
            className: "",
            children: [(0, t.jsxs)("div", {
                style: {
                    backgroundImage: "url('/bg-hero.png')"
                },
                className: "bg-cover bg-center bg-no-repeat w-full",
                children: [(0, t.jsx)(u, {}), (0, t.jsx)("section", {
                    children: (0, t.jsxs)("div", {
                        className: "w-full  px-6 py-16 md:py-24 space-y-5 ",
                        children: [(0, t.jsxs)("div", {
                            className: "max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-10 mb-10",
                            children: [(0, t.jsxs)("div", {
                                className: "flex-1 space-y-5 text-center md:text-left",
                                children: [(0, t.jsx)("h3", {
                                    className: "font-semibold text-black text-2xl sm:text-3xl md:text-4xl",
                                    children: "Transform Any Space With"
                                }), (0, t.jsx)("h1", {
                                    className: "font-bold text-primary text-3xl sm:text-4xl md:text-5xl my-3",
                                    children: "Digital Signage"
                                }), (0, t.jsx)("p", {
                                    className: "text-para text-base sm:text-lg md:text-xl",
                                    children: "Light up your brand with stunning digital displays."
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center md:justify-start",
                                    children: [(0, t.jsx)("button", {
                                        className: "bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-all",
                                        children: "Start FREE Trial"
                                    }), (0, t.jsx)("button", {
                                        className: "border border-primary text-black font-semibold px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-all",
                                        children: "Suggest My Signage"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mt-6",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex items-center -space-x-3",
                                        children: [
                                            ["/ava1.jpg", "/ava2.jpg", "/ava3.jpg", "/ava4.jpg"].map((e, r) => (0, t.jsx)("div", {
                                                className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden shadow",
                                                children: (0, t.jsx)(s.default, {
                                                    src: e,
                                                    alt: `User ${r+1}`,
                                                    width: 48,
                                                    height: 48,
                                                    className: "object-cover w-full h-full"
                                                })
                                            }, r)), (0, t.jsx)("div", {
                                                className: "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full border-2 border-white shadow text-lg font-semibold",
                                                children: (0, t.jsx)(x, {
                                                    size: 18
                                                })
                                            })
                                        ]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col items-center sm:items-start",
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                [void 0, void 0, void 0, void 0].map((e, r) => (0, t.jsx)(p, {
                                                    fill: "#FBBF24",
                                                    stroke: "#FBBF24",
                                                    size: 20
                                                }, r)), (0, t.jsx)(p, {
                                                    fill: "url(#half)",
                                                    stroke: "#FBBF24",
                                                    size: 20
                                                }), (0, t.jsx)("svg", {
                                                    width: "0",
                                                    height: "0",
                                                    children: (0, t.jsx)("defs", {
                                                        children: (0, t.jsxs)("linearGradient", {
                                                            id: "half",
                                                            children: [(0, t.jsx)("stop", {
                                                                offset: "50%",
                                                                stopColor: "#FBBF24"
                                                            }), (0, t.jsx)("stop", {
                                                                offset: "50%",
                                                                stopColor: "transparent"
                                                            })]
                                                        })
                                                    })
                                                })
                                            ]
                                        }), (0, t.jsx)("p", {
                                            className: "text-gray-800 font-semibold mt-1 text-sm sm:text-base",
                                            children: "4.5 Google Review"
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "flex-1 w-full flex justify-center md:justify-end",
                                children: (0, t.jsx)(s.default, {
                                    src: "/signage-display.png",
                                    alt: "Digital Signage Display",
                                    width: 500,
                                    height: 400,
                                    className: "object-contain w-full max-w-md"
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "space-y-6 mt-28",
                            children: [(0, t.jsx)("h3", {
                                className: "font-semibold text-center text-2xl",
                                children: "Powering Displays for Growing Businesses"
                            }), (0, t.jsx)("div", {
                                className: "flex overflow-x-auto md:overflow-visible space-x-6 md:space-x-10 scrollbar-hide py-4 px-4 md:px-0 justify-start md:justify-center",
                                children: w.map((e, r) => (0, t.jsx)("div", {
                                    className: "shrink-0",
                                    children: (0, t.jsx)(s.default, {
                                        src: e,
                                        alt: `Business logo ${r+1}`,
                                        width: 100,
                                        height: 100,
                                        className: "object-contain"
                                    })
                                }, r))
                            })]
                        })]
                    })
                })]
            }), (0, t.jsx)("section", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10",
                children: (0, t.jsxs)("div", {
                    style: {
                        backgroundImage: "url('/bg1.svg')"
                    },
                    className: "bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 py-16 md:py-24 space-y-5 text-center",
                    children: [(0, t.jsxs)("div", {
                        className: "max-w-4xl",
                        children: [(0, t.jsx)("h3", {
                            className: "font-semibold text-black text-2xl sm:text-3xl md:text-4xl",
                            children: "Introducing our"
                        }), (0, t.jsx)("h1", {
                            className: "font-bold text-primary text-3xl sm:text-4xl md:text-5xl my-3",
                            children: "AI Digital Signage"
                        }), (0, t.jsx)("p", {
                            className: "text-para text-base sm:text-lg md:text-xl",
                            children: "Get more customer attention with AI! See what shoppers like in real time, show the right products, and boost sales with smarter ads."
                        })]
                    }), (0, t.jsx)("div", {
                        className: "border-8 border-white rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 my-6 bg-gray-300 shadow-md"
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-center gap-4 justify-center",
                        children: [(0, t.jsx)("button", {
                            className: "px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto",
                            children: "Start FREE Trial"
                        }), (0, t.jsx)("button", {
                            className: "px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto",
                            children: "Suggest My Signage"
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-10",
                children: (0, t.jsxs)("div", {
                    style: {
                        backgroundImage: "url('/bg-pixel.svg')"
                    },
                    className: "bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 py-16 md:py-24 space-y-5 ",
                    children: [(0, t.jsx)("h3", {
                        className: "font-semibold text-black text-2xl sm:text-3xl md:text-4xl",
                        children: "We Provide the Following"
                    }), (0, t.jsx)("h1", {
                        className: "font-bold text-primary text-3xl sm:text-4xl md:text-5xl",
                        children: "Screen Displays"
                    }), (0, t.jsx)("p", {
                        className: "text-para text-base sm:text-lg md:text-xl text-center",
                        children: "Commercial-grade signage with built-in software and full-service support."
                    }), (0, t.jsxs)("div", {
                        className: "space-y-8",
                        children: [(0, t.jsxs)("div", {
                            className: "bg-accent p-6 rounded-md flex flex-col md:flex-row items-center gap-6",
                            children: [(0, t.jsx)(s.default, {
                                src: a.image,
                                alt: a.title,
                                width: 200,
                                height: 300,
                                className: "object-contain w-full max-w-md rounded-lg"
                            }), (0, t.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, t.jsx)("h4", {
                                    className: "font-semibold text-black text-3xl sm:text-4xl",
                                    children: a.title
                                }), (0, t.jsx)("p", {
                                    className: "text-para",
                                    children: a.description1
                                }), (0, t.jsx)("p", {
                                    className: "text-para",
                                    children: a.description2
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "flex flex-wrap gap-4 gap-y-10 items-center justify-center",
                            children: v.map((e, r) => (0, t.jsxs)("div", {
                                onClick: () => i(e),
                                className: `relative w-fit cursor-pointer transition-transform hover:scale-105 ${a.title===e.title?"shadow":""}`,
                                children: [(0, t.jsx)(s.default, {
                                    src: e.image,
                                    alt: e.title,
                                    width: 180,
                                    height: 180,
                                    className: "z-10 rounded-t-lg"
                                }), (0, t.jsx)("p", {
                                    className: "absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-white rounded-b-2xl px-4 py-3 shadow z-20 w-full font-medium",
                                    children: e.title
                                })]
                            }, r))
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10",
                children: (0, t.jsxs)("div", {
                    style: {
                        backgroundImage: "url('/bg1.svg')"
                    },
                    className: "bg-cover bg-center bg-pink-400 bg-no-repeat w-full flex flex-col md:flex-row gap-4 items-center justify-center rounded-lg px-6 md:px-16 py-8 md:py-10 space-y-5",
                    children: [(0, t.jsxs)("div", {
                        className: " flex-1 space-y-4",
                        children: [(0, t.jsxs)("div", {
                            className: " ",
                            children: [(0, t.jsxs)("h3", {
                                className: "font-bold text-black text-3xl sm:text-4xl md:text-5xl my-3",
                                children: [(0, t.jsx)("span", {
                                    className: "text-primary",
                                    children: "Easy to use "
                                }), " digital ", (0, t.jsx)("br", {}), " ", "signage software"]
                            }), (0, t.jsx)("p", {
                                className: "text-para text-base sm:text-lg md:text-xl",
                                children: "A cost-effective and professional cloud-based digital signage software that enables you to design, schedule, and send content to any screen."
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col sm:flex-row items-center gap-4 justify-start w-full",
                            children: [(0, t.jsx)("button", {
                                className: "px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto",
                                children: "Start FREE Trial"
                            }), (0, t.jsx)("button", {
                                className: "px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto",
                                children: "Suggest My Signage"
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex-1 relative",
                        children: [(0, t.jsx)(s.default, {
                            src: "/iPad Mini.svg",
                            alt: "iPad",
                            width: 400,
                            height: 400,
                            className: "relative z-0 left-10"
                        }), (0, t.jsx)(s.default, {
                            src: "/icon-group.svg",
                            alt: "Overlay icons",
                            width: 400,
                            height: 400,
                            className: "absolute top-1/2  -translate-y-1/2 z-10"
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-10",
                children: (0, t.jsxs)("div", {
                    style: {
                        backgroundImage: "url('/bg-pixel.svg')"
                    },
                    className: "bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 py-16 md:py-24 space-y-5 text-center",
                    children: [(0, t.jsxs)("div", {
                        className: "max-w-4xl",
                        children: [(0, t.jsx)("h3", {
                            className: "font-semibold text-black text-2xl sm:text-3xl md:text-4xl",
                            children: "Transform Any Space With"
                        }), (0, t.jsx)("h1", {
                            className: "font-bold text-primary text-3xl sm:text-4xl md:text-5xl",
                            children: "Digital Signage"
                        }), (0, t.jsx)("p", {
                            className: "text-para text-base sm:text-lg md:text-xl",
                            children: "Preloaded displays with built-in CMS just plug it in and start showcasing content."
                        })]
                    }), (0, t.jsx)("div", {
                        className: "border-8 border-white rounded-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 my-6 bg-gray-300 shadow-md"
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-center gap-4 justify-center",
                        children: [(0, t.jsx)("button", {
                            className: "px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto",
                            children: "Start FREE Trial"
                        }), (0, t.jsx)("button", {
                            className: "px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto",
                            children: "Suggest My Signage"
                        })]
                    }), (0, t.jsx)("p", {
                        className: "text-temp font-semibold text-base",
                        children: "Powering Displays for Growing Businesses"
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10",
                children: (0, t.jsxs)("div", {
                    style: {
                        backgroundImage: "url('/bg1.svg')"
                    },
                    className: "bg-cover bg-center bg-pink-400 bg-no-repeat w-full flex flex-col items-center justify-center rounded-lg px-6 md:px-16 py-8 md:py-10 space-y-5",
                    children: [(0, t.jsxs)("div", {
                        className: "",
                        children: [(0, t.jsxs)("h3", {
                            className: "font-bold text-black text-3xl sm:text-4xl md:text-5xl my-3",
                            children: [(0, t.jsx)("span", {
                                className: "text-primary",
                                children: " Portable "
                            }), " Section ", (0, t.jsx)("br", {}), " ", "Will Go Here"]
                        }), (0, t.jsx)("p", {
                            className: "text-para text-base sm:text-lg md:text-xl",
                            children: "A cost-effective and professional cloud-based digital signage software that enables you to design, schedule, and send content to any screen."
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-center gap-4 justify-start w-full",
                        children: [(0, t.jsx)("button", {
                            className: "px-6 py-3 text-white bg-primary rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto",
                            children: "Start FREE Trial"
                        }), (0, t.jsx)("button", {
                            className: "px-6 py-3 rounded-lg border border-primary text-black flex items-center justify-center gap-2 text-base sm:text-lg font-semibold w-full sm:w-auto",
                            children: "Suggest My Signage"
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 mt-10",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col items-center justfy-center gap-3",
                    children: [(0, t.jsxs)("h1", {
                        className: "text-primary text-3xl sm:text-4xl md:text-5xl font-bold",
                        children: ["Digital Signage ", (0, t.jsx)("span", {
                            className: "text-black",
                            children: "Blog"
                        })]
                    }), (0, t.jsx)("p", {
                        className: "text-para text-base sm:text-lg md:text-xl text-center",
                        children: "Get insights and updates on digital signage best practices, technology, and success stories."
                    }), (0, t.jsx)("div", {
                        className: "max-w-6xl mx-auto flex flex-col items-center justify-center w-full",
                        children: (0, t.jsx)("div", {
                            className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto",
                            children: y.map(e => (0, t.jsxs)("div", {
                                className: "bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-[0px_6px_45.9px_0px_#D545422E]",
                                children: [(0, t.jsx)("img", {
                                    src: e.image,
                                    alt: e.title,
                                    className: "w-full h-48 object-cover"
                                }), (0, t.jsxs)("div", {
                                    className: "p-5 flex flex-col grow",
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-xl font-semibold text-gray-900 mb-2",
                                        children: e.title
                                    }), (0, t.jsx)("p", {
                                        className: "text-gray-600 text-sm grow line-clamp-3",
                                        children: e.description
                                    }), (0, t.jsxs)("button", {
                                        className: "group mt-4 self-start text-black font-bold flex items-center gap-2 cursor-pointer transition-colors",
                                        children: ["Read More", (0, t.jsx)(m, {
                                            className: "border border-primary rounded-full p-1 text-base transition-all duration-300 group-hover:bg-primary group-hover:text-white",
                                            size: 20
                                        })]
                                    })]
                                })]
                            }, e.id))
                        })
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "max-w-7xl mx-auto flex flex-col items-center gap-10 px-4 sm:px-6 md:px-8 py-16 mt-10",
                children: (0, t.jsxs)("div", {
                    className: "bg-accent w-full rounded-2xl py-12 sm:py-16 px-4 sm:px-6",
                    children: [(0, t.jsxs)("div", {
                        className: "max-w-3xl mx-auto text-center mb-10 space-y-3",
                        children: [(0, t.jsxs)("h1", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
                            children: [(0, t.jsx)("span", {
                                className: "text-primary",
                                children: "Frequently Asked "
                            }), (0, t.jsx)("span", {
                                className: "text-black",
                                children: "Question"
                            })]
                        }), (0, t.jsx)("p", {
                            className: "text-para text-sm sm:text-base md:text-lg",
                            children: "Get insights and updates on digital signage best practices, technology, and success stories."
                        })]
                    }), (0, t.jsx)("div", {
                        className: "max-w-3xl mx-auto flex flex-col gap-4",
                        children: j.map((r, s) => {
                            let a = e === s;
                            return (0, t.jsxs)("div", {
                                className: `bg-white rounded-xl px-4 sm:px-6 py-4 transition-all duration-300 cursor-pointer shadow-[0_6px_45.9px_0_#D545422E] ${a?"border border-primary":"border border-transparent"}`,
                                onClick: () => n(e === s ? null : s),
                                children: [(0, t.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [(0, t.jsx)("h3", {
                                        className: `font-semibold text-sm sm:text-base md:text-lg ${a?"text-primary":"text-black"}`,
                                        children: r.question
                                    }), (0, t.jsx)("div", {
                                        className: `transform transition-transform duration-300 ${a?"rotate-180":"rotate-0"}`,
                                        children: (0, t.jsx)(f, {
                                            className: a ? "text-primary" : "text-gray-600",
                                            size: 20
                                        })
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: `overflow-hidden transition-all duration-300 ${a?"max-h-96 mt-3 text-gray-600":"max-h-0"}`,
                                    children: (0, t.jsx)("p", {
                                        className: "text-sm sm:text-base leading-relaxed",
                                        children: r.answer
                                    })
                                })]
                            }, s)
                        })
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16   ",
                children: (0, t.jsxs)("div", {
                    style: {
                        backgroundImage: "url('/bg-sync.png')"
                    },
                    className: "bg-cover bg-center bg-no-repeat flex flex-col-reverse md:flex-row items-center justify-between px-6 py-4 md:py-8 gap-10  rounded-2xl",
                    children: [(0, t.jsxs)("div", {
                        className: "flex-1 text-white p-6 sm:p-8 md:p-12 flex flex-col items-start w-full text-center md:text-left",
                        children: [(0, t.jsx)("h2", {
                            className: "text-3xl md:text-4xl font-bold mb-4",
                            children: "Seamlessly sync your content playback"
                        }), (0, t.jsx)("p", {
                            className: "text-sm md:text-base mb-6 text-white/90",
                            children: "Sync players playlists content playback has never been easier. Whether your players are in one location sharing one local network (wifi/wired) or if they are in different locations with 3G/4G internet connection."
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full",
                            children: [(0, t.jsx)("button", {
                                className: "bg-white text-primary font-semibold px-6 py-2 rounded-lg transition-all hover:bg-gray-100",
                                children: "Start FREE Trial"
                            }), (0, t.jsx)("button", {
                                className: "border border-white text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-primary transition-all",
                                children: "Suggest My Signage"
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: "flex justify-center w-full md:w-1/2 flex-1 relative  md:self-start md:-mt-[50px]",
                        children: (0, t.jsxs)("div", {
                            className: "relative w-[250px] sm:w-[300px] md:w-[400px]",
                            children: [(0, t.jsx)(s.default, {
                                src: "/mcrop2.png",
                                alt: "Digital Signage Display",
                                width: 400,
                                height: 400,
                                className: "object-contain  md:absolute -top-36 left-0"
                            }), (0, t.jsx)(s.default, {
                                src: "/mcrop1.png",
                                alt: "Digital Signage Display",
                                width: 200,
                                height: 200,
                                className: "object-contain  absolute -right-12  top-4"
                            })]
                        })
                    })]
                })
            }), (0, t.jsx)(b, {})]
        })
    }
    e.s(["default", () => N], 31713)
}]);