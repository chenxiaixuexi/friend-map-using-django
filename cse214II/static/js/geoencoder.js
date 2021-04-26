(function(config) {
    var ba = navigator.userAgent.toLowerCase(),
        ca = window,
        fa = document,
        ga = fa.documentElement;

    function ma(a) { return -1 !== ba.indexOf(a) }
    var na = /([a-z0-9]*\d+[a-z0-9]*)/;

    function pa() {
        var a = qa;
        if (!a) return null;
        var a = a.toLowerCase(),
            b = null;
        if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
        a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
        if (0 <= a.indexOf("intel")) {
            b = ["Intel"];
            0 <= a.indexOf("mobile") && b.push("Mobile");
            (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
            if (0 <= a.indexOf("haswell")) b.push("Haswell");
            else if (0 <= a.indexOf("ivy")) b.push("HD 4000");
            else if (0 <= a.indexOf("sandy")) b.push("HD 3000");
            else if (0 <= a.indexOf("ironlake")) b.push("HD");
            else {
                0 <= a.indexOf("hd") && b.push("HD");
                var c = a.match(na);
                c && b.push(c[1].toUpperCase())
            }
            return b = b.join(" ")
        }
        return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
            b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(na)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
            b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(na)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
    }
    var ra = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
        sa = "ActiveXObject" in ca,
        va = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || sa && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
        wa = ma("windows nt"),
        xa = -1 !== ba.search(/windows nt [1-5]\./),
        ya = -1 !== ba.search(/windows nt 5\.[12]/),
        za = xa && !ya;
    ma("windows nt 10");
    var Da = ma("windows phone"),
        Ea = ma("macintosh"),
        Fa = ma("Mb2345Browser"),
        Ga = ma("ipad;") || ma("ipad "),
        Ja = Ga && va,
        Ka = ma("ipod touch;"),
        La = ma("iphone;") || ma("iphone "),
        Ma = La || Ga || Ka,
        Na = Ma && -1 !== ba.search(/ os [456]_/);
    Ma && ba.search(/ os [4-8]_/);
    Ma && ba.search(/ os [78]_/);
    Ma && ma("os 8_");
    var Qa = Ma && ma("os 10_"),
        Ra = ma("android"),
        Sa = 0;
    Ra && (Sa = parseInt(ba.split("android")[1]) || 0);
    var Ta = Ra && 4 > Sa;
    Ra && 5 <= Sa || ba.search(/android 4.4/);
    var Ua = Ra ? "android" : Ma ? "ios" : wa ? "windows" : Ea ? "mac" : "other",
        Va = sa && !ca.XMLHttpRequest,
        Wa = sa && !fa.querySelector,
        Xa = sa && !fa.addEventListener,
        Ya = sa && ma("msie 9"),
        Za = sa && ma("msie 10"),
        $a = sa && ma("rv:11"),
        ab = Xa || Ya,
        bb = ma("edge"),
        cb = ma("qtweb"),
        db = ma("ucbrowser"),
        eb = ma("alipay") || Ra && db,
        fb = ma("miuibrowser"),
        gb = ma("micromessenger"),
        hb = ma("mqqbrowser"),
        ib = ma("baidubrowser"),
        chrome = (ma("chrome") || ma("crios")) && !gb && !ib && !hb && !bb && !fb,
        jb = chrome && ma("chromium"),
        kb = chrome && !jb && (30 < parseInt(ba.split("chrome/")[1]) ||
            30 < parseInt(ba.split("crios/")[1])),
        lb = ma("firefox"),
        mb = lb && 27 < parseInt(ba.split("firefox/")[1]),
        nb = (Ea || Ma) && ma("safari") && ma("version/"),
        ob = Ea && nb && 7 < parseInt(ba.split("version/")[1]),
        pb = Ma && ma("aliapp"),
        qb = Ma && (!hb && !db && !gb && !chrome && !lb && !nb || pb && !db),
        rb = Ra || Ma || Da || ma("mobile"),
        sb = "ontouchstart" in fa,
        tb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
        ub = ca.navigator && !!ca.navigator.maxTouchPoints,
        vb = !sb && (ub || tb),
        wb = sb || vb,
        xb = function() {
            if (!rb) return ca.devicePixelRatio ||
                1;
            var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window) try {
                if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta");
                else return 1
            } catch (b) { return 1 }
            for (var c = a.length - 1; 0 <= c; c -= 1)
                if ("viewport" === a[c].name) {
                    var c = a[c].content,
                        d; - 1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
                    a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
                    c = -1 !== c.indexOf("maximum-scale") ?
                        parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                    if (d) { if (c >= a) return d > c ? c : d < a ? a : d } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
                    console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
                    return null
                }
        }(),
        yb = va && (!rb || !!xb && 1 <= xb),
        zb = sa && "transition" in ga.style,
        Ab = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        Bb = fa.createElement("canvas"),
        Cb = !(!Bb || !Bb.getContext),
        Db = window.URL || window.webkitURL,
        Eb = !0 !== window.disableWorker && !sa && !bb && !(db &&
            Ra) && window.Worker && Db && Db.createObjectURL && window.Blob,
        Fb = "",
        qa = "",
        Gb = 0,
        Jb = window.forceWebGL ? { alpha: !0, antialias: !0, depth: !0 } : { alpha: !0, antialias: !0, depth: !0, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !0, stencil: !0 },
        Kb = function() {
            if (!window.forceWebGL && (!Cb || !Eb || qb && pb && !db)) return !1;
            for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try { b = Bb.getContext(a[c], Jb) } catch (d) {}
                if (b) {
                    if (b.drawingBufferWidth !== Bb.width || b.drawingBufferHeight !== Bb.height) break;
                    if (window.forceWebGL) return Fb =
                        a[c], Gb = Infinity, !0;
                    if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break;
                    Gb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
                    var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
                    if (!e) break;
                    Gb = Math.min(Gb, e[0], e[1]);
                    nb && "mac" === Ua && (Gb = Math.min(Gb, 4096));
                    e = Math.max(screen.width, screen.height);
                    yb && (e *= Math.min(2, window.devicePixelRatio || 1));
                    if (e > Gb) break;
                    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
                    qa = b.getExtension("WEBGL_debug_renderer_info") ?
                        b.getParameter(37446) : null;
                    if ((b = pa()) && -1 !== ra.indexOf(b)) break;
                    Fb = a[c];
                    return !0
                }
            }
            return !1
        }(),
        Lb = Kb && (kb || mb || ob) && ("mac" === Ua || "windows" === Ua) && !rb,
        Mb = !Cb || cb || Da || rb && lb || Ya || Na || Ja || Ka || Ta || ma("gt-n710") || za,
        Nb = !Mb && !Lb,
        Ob = Lb ? "vw" : Mb ? "d" : Nb ? "dv" : "v",
        Pb = ma("webkit"),
        Qb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix,
        Rb = "MozPerspective" in ga.style,
        Sb = "OTransition" in ga.style,
        Tb = zb || Qb || Rb || Sb,
        Ub = void 0 !== config[8] ? config[8] : !0,
        Vb = void 0 !== config[9] ? config[9] : !0,
        Wb = void 0 !== config[10] ?
        config[10] : !0,
        Xb = void 0 !== config[11] ? config[11] : !0,
        Yb = void 0 !== config[12] ? config[12] : null,
        Zb = !Ab && rb && Cb,
        $b = !0;
    try {
        if ("undefined" === typeof ca.localStorage) $b = !1;
        else {
            var ac = (new Date).getTime() + "";
            ca.localStorage.setItem("_test", ac);
            ca.localStorage.getItem("_test") !== ac && ($b = !1);
            ca.localStorage.removeItem("_test")
        }
    } catch (bc) { $b = !1 }
    var cc = parseInt(ba.split("chrome/")[1]),
        dc = Ub && Cb;
    config.l = {
        Lra: Ga,
        Mra: La,
        size: La ? 100 : Ra ? 200 : 500,
        oz: Ea,
        Sza: wa,
        ED: Ma,
        WEa: Qa,
        Yl: Ra,
        Xla: Ta,
        G3: eb,
        Ez: Ua,
        YH: ib,
        Wva: hb,
        zE: nb,
        w$: gb,
        Ds: sa,
        Bi: Va,
        sv: Wa,
        c5: Ya,
        b5: Za,
        Ie: Xa,
        e5: ab,
        Pra: $a,
        jpa: bb,
        Sra: sa && !$a,
        Ota: Fa,
        Gv: $b,
        Oi: dc && $b && Xb && !rb && chrome,
        lf: Yb,
        geolocation: rb || sa && !Xa || bb,
        gza: db,
        vL: db && !chrome,
        chrome: chrome,
        f3: !0,
        iR: lb,
        ba: rb,
        $ta: rb && Pb,
        z6: rb && Qb,
        Zta: rb && ca.opera,
        Kc: va,
        DL: xb,
        ja: yb,
        Wf: wb,
        B6: tb,
        IT: ub,
        J7: vb,
        lna: chrome && 57 <= cc,
        mna: !rb && chrome && 64 <= cc,
        v$: Pb,
        Qra: zb,
        HL: Qb,
        aqa: Rb,
        Sua: Sb,
        UH: Tb,
        En: Ab,
        jl: Cb,
        MS: Eb,
        jA: Wb,
        Qf: Lb,
        s$: Fb,
        t$: Jb,
        ZR: qa,
        Mta: Gb,
        tAa: !1,
        Vp: Ub && !Mb,
        N1: Ub ? Ob : "d",
        j2: Ub ? Kb : !1,
        gL: dc,
        op: Ub && Kb,
        hFa: Ub && (!Mb || Kb),
        uq: Vb && !!ca.WebSocket && !ib,
        UFa: Zb,
        ava: Cb || Zb ? "c" : "d"
    };
    var ec = config;
    config = void 0;
    var fc = { overlay: ["style"], "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"], "AMap.IndoorMap3D": ["Map3D"], "AMap.MarkerList": ["AMap.TplUtils"], Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer", "rbush"], "AMap.Heatmap": ["AMap.CustomLayer"], "AMap.DistrictLayer": ["MVT"], vectorForeign: ["gridmap", "MVT"], "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"], "AMap.LabelsLayer": ["rbush", "promise"] };
    window.AMap ? (window.AMap.version = "1591184553900", window.AMap.zL = { zM: function(a) { a(ec) } }) : window.AMap = { version: "1591184553900", zL: { zM: function(a) { a(ec) } } };
    ec.Gk = "1591184553900";
    ec.Qu = fc;
    for (var gc = document.head || document.getElementsByTagName("head")[0], hc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
            ec[2].split(",")[0] + "/"), ic = null, jc = 0, kc = gc.childNodes.length; jc < kc; jc++)
        if (1 === gc.childNodes[jc].nodeType) { ic = gc.childNodes[jc]; break }
    if (hc)
        if (gc) {
            var lc = document.createElement("style");
            lc.setAttribute("type", "text/css");
            lc.setAttribute("class", "AMap.style");
            lc.styleSheet ? lc.styleSheet.cssText = hc : lc.innerHTML = hc;
            ic ? gc.insertBefore(lc, ic) : gc.appendChild(lc)
        } else document.write("<style type='text/css'>" + hc + "</style>");
    var g = g || { Da: { Le: 0, ir: [], Hj: {} } },
        B = { o: {}, control: {}, C: {} };
    g.FDa = function(a) { var b = Function; return function() { return (new b("return " + a))() } }();
    g.CLASS_NAME = "AMap";
    g.c = g.BuryPoint = {};
    g.c.add = g.BuryPoint.add = function(a, b, c) { a.p5 || a.D || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.AA.kp(a, b, c)) };
    var mc = { lang: 1, baseRender: 1, overlayRender: 1, viewMode: 1 };
    g.c.ya = g.BuryPoint.addOptions = function(a, b) {
        if (!a.Uua)
            if (b && (b.innerLayer || b.innerOverlay)) a.p5 = !0;
            else {
                a.Uua = !0;
                var c = a.CLASS_NAME;
                if (c) {
                    c = c.replace("AMap.", "");
                    g.AA.kp(c);
                    b = b || {};
                    for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in mc ? g.AA.kp(c, d, b[d]) : g.AA.kp(c, d))
                }
            }
    };
    g.ca = function() {};
    g.ca.extend = g.ca.extend = function(a) {
        function b() {}

        function c() {
            var a = this.initialize || this.A;
            a && a.apply(this, arguments);
            if (!d && this.Ni) {
                a = document.createElement("style");
                a.setAttribute("type", "text/css");
                this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
                this.Ni = this.Ni.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.r.Fb + "/");
                a.styleSheet ? a.styleSheet.cssText = this.Ni : a.innerHTML = this.Ni;
                for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++)
                    if (1 ===
                        b.childNodes[e].nodeType) { c = b.childNodes[e]; break }
                c ? b.insertBefore(a, c) : b.appendChild(a)
            }
            d = !0
        }
        var d = !1;
        b.prototype = this.prototype;
        var e = new b;
        e.constructor = c;
        c.prototype = e;
        c.prototype.Fh = c.prototype["super"] = function(a) { return a.callee.ma.apply(this, a) };
        for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
        a.n9 && (g.extend(c, a.n9), a.n9 = null);
        a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null);
        a.w && e.w && (a.w = g.extend({}, e.w, a.w));
        var h = e.constructor.osa,
            k = {};
        if (void 0 !== h)
            for (f in h) h.hasOwnProperty(f) &&
                (k[h[f]] = f);
        for (f in a)
            if (Object.prototype.hasOwnProperty.call(a, f)) {
                var l = f,
                    m = f;
                h && k[f] && (m = k[f]);
                "function" === typeof a[l] && "function" === typeof e[m] && (a[l].ma = e[m])
            }
        g.extend(e, a);
        a.toString && (e.toString = a.toString);
        c.ad = this.prototype;
        return c
    };
    g.ca.Gb = g.ca.include = function(a) { g.extend(this.prototype, a) };
    g.extend = function(a) {
        var b = Array.prototype.slice.call(arguments, 1),
            c, d, e, f;
        d = 0;
        for (e = b.length; d < e; d += 1)
            if (f = b[d] || {}, Object.assign) Object.assign(a, f);
            else
                for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
        return a
    };
    g.ca.Xb = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) {
                var c = a[b];
                if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]);
                else
                    for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
            }
    };
    g.AA = {
        Hj: {},
        getKey: function(a, b) { a = a || ""; return void 0 !== b && a ? a + "@" + b : a },
        kp: function(a, b, c) {
            this.Hj[a] || (this.Hj[a] = {});
            b = this.getKey(b, c);
            void 0 == this.Hj[a][b] && (this.Hj[a][b] = 0)
        },
        send: function() {
            var a = [],
                b;
            for (b in this.Hj)
                if (this.Hj.hasOwnProperty(b)) {
                    var c = this.Hj[b],
                        d = [],
                        e;
                    for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
                    d.length && a.push(b + "~" + d.join(","))
                }
            a.length && (a = ["type=nfl", "k=" + g.r.key, "m=" + (g.l.ba ? 1 : 0), "pf=" + g.l.Ez, "v=" + g.r.vo, "branch=JSAPI", "log=" + a.join("!")], a = g.r.vc + "://webapi.amap.com/count?" +
                a.join("&"), new g.jb.zb(a))
        }
    };
    setInterval(function() { g.AA.send() }, 1E4);
    g.va = {
        h: function(a, b, c, d, e) {
            if (this.te(a, b, c || this)) return this;
            var f = this.nf = this.nf || {};
            f[a] = f[a] || [];
            e ? f[a].unshift({ wb: b, cf: c || this, Ej: d }) : f[a].push({ wb: b, cf: c || this, Ej: d });
            return this
        },
        te: function(a, b, c) {
            var d = this.nf;
            if (b && c) {
                if (d && a in d && d[a])
                    for (var e = 0; e < d[a].length; e += 1)
                        if (d[a][e].wb === b && d[a][e].cf === c) return !0;
                return !1
            }
            return d && a in d && d[a] && 0 < d[a].length
        },
        G: function(a, b, c) {
            if (!this.te(a)) return this;
            var d = this.nf;
            if (d && d[a])
                for (var e = 0; e < d[a].length; e += 1)
                    if (!(d[a][e].wb !== b && "mv" !==
                            b || c && d[a][e].cf !== c)) {
                        d[a].splice(e, 1);
                        d[a].length || (d[a] = null);
                        break
                    }
            return this
        },
        gK: function(a, b) {
            if (!this.te(a)) return this;
            var c = this.nf;
            if (c && c[a])
                for (var d = 0; d < c[a].length; d += 1)
                    if (!b || c[a][d].cf === b) {
                        c[a].splice(d, 1);
                        c[a].length || (c[a] = null);
                        break
                    }
            return this
        },
        q: function(a, b) {
            if (!this.te(a)) return this;
            var c = { type: a };
            void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : "string" === typeof b || "number" === typeof b || "boolean" === typeof b ? c.value = b : g.a.HJ(b) ? c.value = b : c = g.extend(c, b));
            for (var d = [].concat(this.nf[a]), e = 0; e < d.length; e += 1) d[e].wb && (d[e].wb.call(d[e].cf || this, c), d[e] && d[e].Ej && this.nf[a] && this.nf[a].splice(e, 1));
            return this
        },
        wi: function(a) { a ? this.nf && this.nf[a] && (this.nf[a] = null) : this.nf = null; return this }
    };
    g.va.on || (g.va.on = g.va.h);
    g.va.off || (g.va.off = g.va.G);
    g.va.emit || (g.va.emit = g.va.q);
    g.$e = {
        set: function(a, b, c) {
            var d = this.Jl;
            if (d && d[a]) {
                var d = d[a],
                    e = "set" + this.C4(a);
                if (d[e]) {
                    var f = !1;
                    !0 == d.D ? f = !0 : d.D = !0;
                    d[e](b, c);
                    f || (d.D = !1);
                    c || this.FK(a, b)
                } else d.set(a, b, c)
            } else(this.Ce = this.Ce || {})[a] = b, c || this.FK(a, b)
        },
        C4: function() { var a = {}; return function(b) { a[b] || (a[b] = b[0].toUpperCase() + b.substr(1)); return a[b] } }(),
        get: function(a, b, c) {
            var d, e = this.Jl;
            d = "get" + this.C4(a);
            if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.D ? a = !0 : c.D = !0, b = c[d](b), a || (c.D = !1), b) : c.get(a, b);
            if (!c && this[d]) return a = !1, !0 ==
                this.D ? a = !0 : this.D = !0, b = this[d](b), a || (this.D = !1), b;
            if (this.Ce && this.Ce.hasOwnProperty(a)) return this.Ce[a]
        },
        X: function(a, b, c) {
            this.Jl || (this.Jl = {});
            this.Jl[a] !== b && (b.h(a, function(b) { this.FK(a, b) }, this), this.Jl[a] = b, c || this.FK(a))
        },
        bf: function(a, b, c) { for (var d = 0; d < a.length; d += 1) this.X(a[d], b, !c) },
        zl: function(a) { this.Jl && this.Jl[a] && (this.Jl[a].G(a, "mv", this), this.Jl[a] = void 0) },
        Al: function() {
            if (this.Jl)
                for (var a in this.Jl) this.Jl.hasOwnProperty(a) && this.zl(a)
        },
        FK: function(a, b) {
            var c = a + "Changed";
            if (this[c]) this[c](b);
            this.q(a, b)
        },
        lFa: function(a, b, c) {
            var d = new(g.ca.extend({ ka: [g.va, g.$e] }));
            d.hQ = function() {
                for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
                b && (d.Al(), c())
            };
            for (var e = 0; e < a.length; e += 1) d.X(a[e], b)
        },
        jf: function(a, b) { var c, d; for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b)) }
    };
    g.r = {
        localStorage: !0,
        TH: 500,
        ze: !0,
        De: { dark: "#202020", blue_night: "#090d20", test: "#033447", mapv: "#000001", techblue: "#000b11", insight: "#19212a", "default": "#fcf9f2" },
        hK: { normal: "normal", dark: "dark", light: "light", fresh: "fresh", test: "blue", blue_night: "blue", mapv: "darkblue", insight: "grey" },
        key: "589ea3372ca2433f0732f684c5343004",
        vc: "http",
        Rd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
        Yd: "http://restapi.amap.com",
        Fb: "http://webapi.amap.com",
        sK: "http://gaode.com",
        Iv: "http://m.amap.com",
        OD: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
        WJ: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
        yU: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
        SK: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
        TK: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
        TE: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
        BL: "http://vector.amap.com",
        AL: "vdata.amap.com",
        Yza: "ws",
        VI: "http://a.amap.com/jsapi/static/image/",
        qr: 0
    };

    function nc(a) {
        g.ca.Qu = a.Qu;
        g.l = a.l;
        g.Gva = a[7];
        a.l = null;
        g.r.Fb = a[2].split(",")[0];
        g.r.Gk = a.Gk;
        g.r.PJ = a.PJ;
        var b = g.r.vc = g.r.Fb.split(":")[0];
        "https" === b && (g.r.Yza = "wss", g.r.Yd = g.r.Yd.replace("http", "https"), g.r.OD = g.r.OD.replace("http", "https"), g.r.WJ = g.r.WJ.replace("http", "https"), g.r.yU = g.r.yU.replace("http", "https"), g.r.SK = g.r.SK.replace("http", "https"), g.r.TK = g.r.TK.replace("http", "https"), g.r.TE = g.r.TE.replace("http", "https"), g.r.BL = g.r.BL.replace("http", "https"), g.r.VI = g.r.VI.replace("http",
            "https"));
        var c = window.location.href;
        0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
        g.r.Upa = c;
        c = encodeURIComponent(c);
        g.r.Sp = c;
        g.r.Ii = g.r.Fb + "/theme/v1.3/markers/" + (g.l.Kc ? "b" : "n");
        var d = document.createElement("style");
        d.type = "text/css";
        g.r.soa = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
        var e = ".amap-container{cursor:" + g.r.soa + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
        d.styleSheet ? (b = function() {
            try {
                d.styleSheet.cssText =
                    e
            } catch (a) {}
        }, d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
        (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
        g.r.mode = Number(a[3]);
        g.r.Rd = a[1];
        g.r.key = a[0];
        g.r.vo = a[4];
        g.r.Nc = a[5];
        g.r.Hla = a[6];
        g.r.WQ = a[13];
        oc()
    }

    function oc() {
        try {
            if (window.localStorage)
                for (var a = window.localStorage.length; 0 <= a; a -= 1) {
                    var b = window.localStorage.key(a);
                    if (b && "_AMap_" === b.slice(0, 6)) {
                        var c = window.localStorage.getItem(b),
                            c = JSON.parse(c || {});
                        "_AMap_anole" === b ? c.version !== g.l.lf && window.localStorage.removeItem(b) : "_AMap_data.tileKeys" === b ? c.vdataVer === g.l.lf && c.apiVer === g.r.Gk || window.localStorage.removeItem(b) : c.version !== g.r.Gk && window.localStorage.removeItem(b)
                    }
                }
        } catch (d) {}
    }
    window.AMap && window.AMap.zL && window.AMap.zL.zM && window.AMap.zL.zM(nc);
    g.Nm = { Ou: Math.PI / 180, $va: 180 / Math.PI, UQ: 6378137 };
    (function() {
        function a(a) { return "undefined" === typeof a ? "" : a }
        g.ci = {
            Wqa: function(b) {
                b.name = a(b.name);
                var c = [b.y, b.x, b.name];
                if (g.l.ba) {
                    var d = [g.r.Iv + "/callAPP?", "src=jsapi_q"];
                    d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                    d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                    d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
                        b.y + "&lon=" + b.x));
                    d.push("&mo=" + encodeURIComponent(g.r.Iv + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                    return d.join("")
                }
                return g.r.sK + "?q=" + c.join(",") + "&src=jsapi_q"
            },
            o4: function(b) {
                b.name = a(b.name);
                b.address = a(b.address);
                b.x = a(b.x);
                b.y = a(b.y);
                var c = [b.id, b.y, b.x, b.name, b.address];
                if (g.l.ba) {
                    var d = [g.r.Iv + "/callAPP?", "src=jsapi_p"];
                    d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    d.push("&android=" +
                        encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                    d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    return d.join("")
                }
                return g.r.sK + "?p=" + c.join(",") + "&src=jsapi_p"
            },
            m4: function(b) {
                if (g.l.ba) {
                    var c = [g.r.Iv + "/callAPP?", "src=jsapi_detail"];
                    c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    b.name = a(b.name);
                    b.x = a(b.x);
                    b.y =
                        a(b.y);
                    c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                    c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    c.push("&mo=" + encodeURIComponent(g.r.Iv + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                    return c.join("")
                }
                return g.r.sK + "/detail/" + b.id + "?src=jsapi_detail"
            },
            QR: function(b) {
                b.sname = a(b.sname);
                "" === b.sname &&
                    (b.sname = "\u8d77\u70b9");
                b.dname = a(b.dname);
                "" === b.dname && (b.dname = "\u7ec8\u70b9");
                b.mcount = a(b.mcount);
                b.my = a(b.my);
                b.mx = a(b.mx);
                b.mname = a(b.mname);
                var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
                if (g.l.ba) {
                    var d = [g.r.Iv + "/callAPP?", "src=jsapi_r_" + b.t];
                    d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    var e = b.t;
                    0 === b.t ? e = 2 : 2 === b.t && (e = 4);
                    d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
                    d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    d.push("&mo=" + encodeURIComponent(g.r.Iv +
                        "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                    return d.join("")
                }
                return g.r.sK + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
            },
            mt: function(a) { g.l.ba ? window.location.href = a : window.open(a) }
        }
    })();
    "function" !== typeof Object.keys && (Object.keys = function(a) {
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    });
    g.a = {
        CLASS_NAME: "AMap.Util",
        hL: [],
        Fa: 268435456,
        ap: [215440491, 106744817],
        fF: function() {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            return function(b, c) {
                var d = [],
                    e;
                c = c || a.length;
                if (b)
                    for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c];
                else {
                    var f;
                    d[8] = d[13] = d[18] = d[23] = "-";
                    d[14] = "4";
                    for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f])
                }
                return d.join("")
            }
        }(),
        jD: {
            start: function(a) {
                a.startTime = new Date;
                a.kt = [];
                var b = (new Date).getTime();
                a.id = requestAnimationFrame(function d() {
                    var e =
                        (new Date).getTime();
                    a.kt.push(e - b);
                    b = e;
                    a.id = requestAnimationFrame(d)
                })
            },
            cancel: function(a) { a.id && cancelAnimationFrame(a.id) },
            stop: function(a) {
                a.Zna = new Date - a.startTime;
                this.cancel(a);
                a.jD = Math.round(1E3 / (a.Zna / (a.kt.length + 1)))
            }
        },
        z4: function(a, b, c) {
            var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
            if (a === b) return b;
            switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
                case "ease":
                    c = g.Kw.HI(0.25, 0.1, 0.25, 1)(c);
                    break;
                case "ease-in":
                    c = g.Kw.HI(0.42, 0, 1, 1)(c);
                    break;
                case "ease-out":
                    c =
                        g.Kw.HI(0, 0, 0.58, 1)(c);
                    break;
                case "ease-in-out":
                    c = g.Kw.HI(0.42, 0, 0.58, 1)(c)
            }
            var e = a + (b - a) * c;
            d && (e >>= 0);
            return e
        },
        createObjectURL: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8",
                c = null;
            try { c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], { type: b })) } catch (d) { c = null }
            return c
        },
        revokeObjectURL: function(a) {
            (window.URL || window.webkitURL).revokeObjectURL(a)
        },
        CCa: function(a) { for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = c; return b },
        oD: function(a) {
            var b = {};
            if (g.a.kk(a, "object"))
                for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
            return b
        },
        zf: function(a, b) { for (var c = 0, d = b.length; c < d; c += 1) a.push(b[c]) },
        create: "function" === typeof Object.create ? Object.create : function(a, b) {
            function c() {}
            c.prototype = a;
            var d = new c,
                e;
            for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
            return d
        },
        cb: function(a) {
            if ("object" === typeof a && null !== a) {
                if (a.O6 || this.kk(a, "Float32Array") || this.kk(a, "Uint16Array")) return a;
                var b = this.isArray(a) ? [] : {},
                    c;
                for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.cb(a[c]));
                return b
            }
            return a
        },
        C5: function(a) { return (a | 0) === a },
        wxa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function(a, b) { for (var c in b) a[c] = b[c] },
        Sh: function(a) { return "function" === typeof a },
        ama: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl";
            if (!a) return a;
            for (var c = [], d = 0, e = a.length; d < e; d += 2) {
                var f = parseInt(a.substr(d, 2), 16);
                if ("webgl" === b || "rgba" === b && 0 === d) f = this.vb(f / 255, 3);
                c.push(f)
            }
            c.push(c.shift());
            return c
        },
        Qs: function() {},
        keys: "function" === typeof Object.keys ?
            Object.keys : function(a) {
                var b = [],
                    c;
                for (c in a) a.hasOwnProperty(c) && b.push(c);
                return b
            },
        map: function(a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                d = [];
            if (a && a.length) g.a.Tb(a, function() {
                for (var e = arguments.length, f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
                d[f[1]] = b.apply(c || a, f)
            });
            else return a;
            return d
        },
        forEach: function(a, b) { if (a && a.length) { var c = a.length; if (0 < c && (b(a[0], 0), 1 < c)) { b(a[1], 1); for (var d = 2; d < c; d++) b(a[d], d) } } },
        Tb: function(a, b) {
            var c = 2 < arguments.length && void 0 !==
                arguments[2] ? arguments[2] : null;
            if (a && a.length)
                for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
        },
        find: function(a, b) {
            for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++)
                if ("function" === typeof b) { if (b.call(c, a[d], d, a)) return a[d] } else if (a[d] === b) return a[d];
            return null
        },
        HJ: function(a) { return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName },
        xw: function(a, b) {
            var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
                d, e;
            "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
            var f, h, k, l, m;
            h = [];
            k = NaN;
            l = 0;
            for (m = a.length; l < m; l++) f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN);
            return h
        },
        fxa: function(a, b) {
            for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
                var f = c * e,
                    h = f + c;
                h > b.length && (h = b.length);
                for (; f < h; f += 1) a(b[f])
            }
        },
        aDa: function(a) {
            if (/^rgba\(/.test(a)) return this.Xv(a);
            var b = a = this.oI(a);
            "#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
                a.replace(/./g, function(a) { return a + a })), b = this.Qr(8 === a.length ? a : "ff" + a));
            return this.Xv(b)
        },
        oI: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                a = a.toLowerCase(),
                b = {
                    aliceblue: "#f0f8ff",
                    antiquewhite: "#faebd7",
                    aqua: "#00ffff",
                    aquamarine: "#7fffd4",
                    azure: "#f0ffff",
                    beige: "#f5f5dc",
                    bisque: "#ffe4c4",
                    black: "#000000",
                    blanchedalmond: "#ffebcd",
                    blue: "#0000ff",
                    blueviolet: "#8a2be2",
                    brown: "#a52a2a",
                    burlywood: "#deb887",
                    cadetblue: "#5f9ea0",
                    chartreuse: "#7fff00",
                    chocolate: "#d2691e",
                    coral: "#ff7f50",
                    cornflowerblue: "#6495ed",
                    cornsilk: "#fff8dc",
                    crimson: "#dc143c",
                    cyan: "#00ffff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkgray: "#a9a9a9",
                    darkgreen: "#006400",
                    darkkhaki: "#bdb76b",
                    darkmagenta: "#8b008b",
                    darkolivegreen: "#556b2f",
                    darkorange: "#ff8c00",
                    darkorchid: "#9932cc",
                    darkred: "#8b0000",
                    darksalmon: "#e9967a",
                    darkseagreen: "#8fbc8f",
                    darkslateblue: "#483d8b",
                    darkslategray: "#2f4f4f",
                    darkturquoise: "#00ced1",
                    darkviolet: "#9400d3",
                    deeppink: "#ff1493",
                    deepskyblue: "#00bfff",
                    dimgray: "#696969",
                    dodgerblue: "#1e90ff",
                    firebrick: "#b22222",
                    floralwhite: "#fffaf0",
                    forestgreen: "#228b22",
                    fuchsia: "#ff00ff",
                    gainsboro: "#dcdcdc",
                    ghostwhite: "#f8f8ff",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gray: "#808080",
                    green: "#008000",
                    greenyellow: "#adff2f",
                    honeydew: "#f0fff0",
                    hotpink: "#ff69b4",
                    indianred: "#cd5c5c",
                    indigo: "#4b0082",
                    ivory: "#fffff0",
                    khaki: "#f0e68c",
                    lavender: "#e6e6fa",
                    lavenderblush: "#fff0f5",
                    lawngreen: "#7cfc00",
                    lemonchiffon: "#fffacd",
                    lightblue: "#add8e6",
                    lightcoral: "#f08080",
                    lightcyan: "#e0ffff",
                    lightgoldenrodyellow: "#fafad2",
                    lightgrey: "#d3d3d3",
                    lightgreen: "#90ee90",
                    lightpink: "#ffb6c1",
                    lightsalmon: "#ffa07a",
                    lightseagreen: "#20b2aa",
                    lightskyblue: "#87cefa",
                    lightslategray: "#778899",
                    lightsteelblue: "#b0c4de",
                    lightyellow: "#ffffe0",
                    lime: "#00ff00",
                    limegreen: "#32cd32",
                    linen: "#faf0e6",
                    magenta: "#ff00ff",
                    maroon: "#800000",
                    mediumaquamarine: "#66cdaa",
                    mediumblue: "#0000cd",
                    mediumorchid: "#ba55d3",
                    mediumpurple: "#9370d8",
                    mediumseagreen: "#3cb371",
                    mediumslateblue: "#7b68ee",
                    mediumspringgreen: "#00fa9a",
                    mediumturquoise: "#48d1cc",
                    mediumvioletred: "#c71585",
                    midnightblue: "#191970",
                    mintcream: "#f5fffa",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    oldlace: "#fdf5e6",
                    olive: "#808000",
                    olivedrab: "#6b8e23",
                    orange: "#ffa500",
                    orangered: "#ff4500",
                    orchid: "#da70d6",
                    palegoldenrod: "#eee8aa",
                    palegreen: "#98fb98",
                    paleturquoise: "#afeeee",
                    palevioletred: "#d87093",
                    papayawhip: "#ffefd5",
                    peachpuff: "#ffdab9",
                    peru: "#cd853f",
                    pink: "#ffc0cb",
                    plum: "#dda0dd",
                    powderblue: "#b0e0e6",
                    purple: "#800080",
                    rebeccapurple: "#663399",
                    red: "#ff0000",
                    rosybrown: "#bc8f8f",
                    royalblue: "#4169e1",
                    saddlebrown: "#8b4513",
                    salmon: "#fa8072",
                    sandybrown: "#f4a460",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    sienna: "#a0522d",
                    silver: "#c0c0c0",
                    skyblue: "#87ceeb",
                    slateblue: "#6a5acd",
                    slategray: "#708090",
                    snow: "#fffafa",
                    springgreen: "#00ff7f",
                    steelblue: "#4682b4",
                    tan: "#d2b48c",
                    teal: "#008080",
                    thistle: "#d8bfd8",
                    tomato: "#ff6347",
                    turquoise: "#40e0d0",
                    violet: "#ee82ee",
                    wheat: "#f5deb3",
                    white: "#ffffff",
                    whitesmoke: "#f5f5f5",
                    yellow: "#ffff00",
                    yellowgreen: "#9acd32"
                };
            return "string" === typeof a ? b[a.toLowerCase()] ?
                b[a.toLowerCase()] : a : a
        },
        II: function(a, b, c) {
            var d, e;
            d = Math.floor(c / 2);
            e = c - d;
            d = (1 << d) - 1 << e;
            e = (1 << e) - 1;
            return [c, a & d | b & e, b & d | a & e]
        },
        JI: function(a) { return a ? encodeURIComponent(a) : "" },
        Vc: function(a, b, c, d) {
            c = a[b].i[c];
            if ("undefined" === typeof c) return null;
            a = a[b].s;
            if ("number" === typeof c) return a[c];
            for (;
                "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
            d = c[d.toString()];
            return "number" === typeof d ? a[d] : null
        },
        Xv: function(a) {
            a = a.split(",");
            a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            a[3] = parseFloat(a[3]);
            return a
        },
        Twa: function(a) {
            a = a.split(",");
            a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
            a[1] = parseFloat(a[1]) / 255;
            a[2] = parseFloat(a[2]) / 255;
            return a
        },
        tU: function(a) { return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")" },
        Gna: function(a) { return this.tU(this.$l(a)) },
        $l: function(a) {
            if (a instanceof Array) return 3 == a.length && a.push(1), a;
            a = this.oI(a);
            if (0 == a.indexOf("#")) {
                if (4 === a.length) return a = a.substr(1).replace(/./g, function(a) { return a + a }), this.ct(a);
                if (7 == a.length) return this.ct(a.substr(1));
                if (9 == a.length) return a = a.substr(1), this.al(a.substr(6) + a.substr(0, 6))
            } else { if (0 == a.indexOf("rgb(")) return a = this.Twa(a), a.push(1), a; if (0 == a.indexOf("rgba(")) return this.Xv(a) }
        },
        v8: function(a) { return g.a.Qr("ff" + a) },
        Qr: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
            b.push((b.shift() / 255).toFixed(2));
            return "rgba(" + b.join(",") + ")"
        },
        ct: function(a) { return g.a.al("ff" + a) },
        al: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c,
                2), 16) / 255);
            b.push(b.shift());
            return b
        },
        xh: function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
            return !0
        },
        Eo: function(a, b) { 0 <= b && a.splice(b, 1); return a },
        Txa: function(a, b) { return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b },
        zy: function(a, b) { var c = g.a.indexOf(a, b); return g.a.Eo(a, c) },
        filter: function(a, b, c) {
            var d = [];
            g.a.Tb(a, function(a, f) { b.call(c, a, f) && d.push(a) });
            return d
        },
        indexOf: function(a, b) {
            if (!a || !a.length) return -1;
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c += 1)
                if (a[c] ===
                    b) return c;
            return -1
        },
        dD: function(a, b) { return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1 },
        bind: function() {
            var a = !1;
            Function.prototype.bind && (a = !0);
            return function(b, c) { var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null; return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function() { return b.apply(c, d || arguments) } }
        }(),
        tb: function(a, b) {
            b = b || {};
            a.w = g.extend({}, a.w, b);
            return a.w
        },
        yna: function(a, b, c) {
            return "function" == typeof b ? this.QP(a, !0, this.uma(b,
                c, 1)) : this.QP(a, !0)
        },
        QP: function(a, b, c, d, e, f, h) {
            var k;
            c && (k = e ? c(a, d, e) : c(a));
            if (void 0 !== k) return k;
            if (!this.H5(a)) return a;
            if (d = this.isArray(a)) { if (k = this.fsa(a), !b) return this.cma(a, k) } else {
                var l = Object.prototype.toString.call(a),
                    m = "[object Function]" == l;
                if ("[object Object]" == l || "[object Arguments]" == l || m && !e) { if (k = this.gsa(m ? {} : a), !b) return this.lma(k, a) } else return e ? a : {}
            }
            f || (f = []);
            h || (h = []);
            for (e = f.length; e--;)
                if (f[e] == a) return h[e];
            f.push(a);
            h.push(k);
            (d ? this.dma : this.qma)(a, function(d, e) {
                k[e] =
                    g.a.QP(d, b, c, e, a, f, h)
            });
            return k
        },
        lma: function(a, b) { return null == b ? a : this.oma(b, Object.keys(b), a) },
        H5: function(a) { var b = typeof a; return !!a && ("object" == b || "function" == b) },
        eFa: function(a) { return !!a && "object" == typeof a },
        cFa: function(a) { return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a },
        fsa: function(a) {
            var b = a.length,
                c = new a.constructor(b);
            b && "string" == typeof a[0] && Object.hasOwnProperty.call(a, "index") && (c.index = a.index, c.input = a.input);
            return c
        },
        cma: function(a, b) {
            var c = -1,
                d = a.length;
            for (b ||
                (b = Array(d)); ++c < d;) b[c] = a[c];
            return b
        },
        gsa: function(a) { a = a.constructor; "function" == typeof a && a instanceof a || (a = Object); return new a },
        uma: function(a, b, c) {
            if ("function" != typeof a) return this.rv;
            if (void 0 === b) return a;
            switch (c) {
                case 1:
                    return function(c) { return a.call(b, c) };
                case 3:
                    return function(c, e, f) { return a.call(b, c, e, f) };
                case 4:
                    return function(c, e, f, h) { return a.call(b, c, e, f, h) };
                case 5:
                    return function(c, e, f, h, k) { return a.call(b, c, e, f, h, k) }
            }
            return function() { return a.apply(b, arguments) }
        },
        dma: function(a,
            b) { for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a);); return a },
        rv: function(a) { return a },
        $na: function(a) {
            return function(b, c, d) {
                var e = g.a.tya(b);
                d = d(b);
                for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) { var k = d[h]; if (!1 === c(e[k], k, e)) break }
                return b
            }
        },
        qma: function(a, b) { return g.a.$na()(a, b, Object.keys) },
        tya: function(a) { return g.a.H5(a) ? a : Object(a) },
        oma: function(a, b, c) {
            c || (c = {});
            for (var d = -1, e = b.length; ++d < e;) {
                var f = b[d];
                c[f] = a[f]
            }
            return c
        },
        s3: function() { return !1 },
        join: function(a, b) {
            if (a.join) return a.join(b);
            var c = [],
                d;
            for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
            return c.join(b)
        },
        a4: function(a, b) { return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6)) },
        yb: function() { var a = 0; return function(b) { b._amap_id || (a += 1, b._amap_id = a); return b._amap_id } }(),
        npa: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        fg: Date.now ? function() { return Date.now() } : function() { return (new Date).getTime() },
        MD: function(a, b, c, d) {
            var e;
            if (d) {
                var f = 0,
                    h, k = this.fg;
                e = function() {
                    h = k();
                    if (h - f < b) return !1;
                    f = h;
                    a.apply(c,
                        arguments)
                }
            } else {
                var l, m, n;
                n = function() {
                    l = !1;
                    m && (e.apply(c, m), m = !1)
                };
                e = function() { l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b)) }
            }
            return e
        },
        vb: function(a, b) { if (a === a << 0) return a; var c = Math.pow(10, b || 0); return Math.round(parseFloat(a) * c) / c },
        isArray: Array.isArray ? Array.isArray : function(a) { return this.kk(a, "array") },
        kk: function(a, b) { return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase() },
        ka: "function" === typeof Array.prototype.ka ? function(a, b) { return a.ka(b) } : function(a, b) { return -1 !== this.indexOf(a, b) },
        r9: function(a) { var b = 0; if (0 === a.length) return b; for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b; return b },
        nDa: function(a, b) { b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1; for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535); return c },
        voa: function(a, b) {
            var c = (a + "").slice(-2),
                d = (b + "").slice(-2);
            a = a.slice(0, -2);
            b = b.slice(0, -2);
            var e = parseInt((d + c).slice(1)),
                f = Math.ceil(e / 250) % 2 ? 1 : -1,
                d = parseInt("1" +
                    d) / 3E3;
            a -= parseInt("1" + c) / 3E3 * f;
            b -= d * (1 < e / 500 ? 1 : -1);
            return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
        },
        T6: function(a) { return "undefined" !== typeof JSON && JSON.stringify ? g.a.r9(JSON.stringify(a)) : null },
        uHa: function(a, b) {
            if (b || !a.hasOwnProperty("_amap_hash")) {
                var c = g.a.T6(a);
                c && (a._amap_hash = c)
            }
            return a._amap_hash
        },
        iepngFix: function(a) {
            function b() {
                for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
                d.KS = !0
            }
            this.G7 || (this.G7 = [], this.KS = !1);
            var c = this.G7,
                d = this;
            if ("img" === a.tagName.toLowerCase()) c.push(a);
            else { a = a.getElementsByTagName("*"); for (var e = 0; e < a.length; e += 1) c.push(a[e]) }
            window.DD_belatedPNG && this.KS ? setTimeout(function() { b() }, 100) : this.KS || g.sb.load("AMap.FixPng", b)
        },
        Ja: function(a) {
            if (g.a.isArray(a))
                if (g.a.isArray(a[0]))
                    for (var b = 0; b < a.length; b += 1) a[b] = g.a.Ja(a[b]);
                else if (b = typeof a[0], "string" === b || "number" === b) return new g.U(a[0], a[1]);
            return a
        },
        $za: function(a) { for (var b = [], c = 0, d = a.length; c < d; c += 1) b[c] = [a[c].x, a[c].y]; return b },
        Jq: function(a) {
            return g.a.isArray(a) ? new g.xd(a[0], a[1]) :
                a
        },
        JP: function(a) {
            var b = a.type,
                c = a.VU,
                d = a.error;
            a = new g.jb.XMLHttpRequest(a.url, { Ed: void 0 === b ? "GET" : b, J2: a.data, qU: "text/plain" });
            a.h("complete", function(a) {
                a = JSON.parse(a.data);
                c && c(a)
            }, this);
            a.h("error", function() {
                var a = { errmsg: "REQUEST_FAILED" };
                d && d(a)
            }, this)
        }
    };
    (function() {
        function a(a) { window.clearTimeout(a) }

        function b(a) { var b, c, d = ["webkit", "moz", "o", "ms"]; for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a]; return c }

        function c(a) {
            var b = +new Date,
                c = Math.max(0, (g.l.Yl ? 50 : 20) - (b - d));
            d = b + c;
            return window.setTimeout(a, c)
        }
        var d = 0,
            e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
            f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
        g.a.Yc = function(a, b, c, d) {
            if (c) b ? g.a.bind(a, b).call(b, d) : a();
            else return e(function() {
                b ?
                    g.a.bind(a, b).call(b, d) : a()
            })
        };
        g.a.ui = function(a) { a && f.call(window, a) }
    })();
    g.a.rU = window.requestIdleCallback ? function(a, b) { return window.requestIdleCallback(a, b) } : function(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            c = g.a.fg();
        return setTimeout(function() { a({ didTimeout: !1, timeRemaining: function() { return Math.max(0, 70 - (g.a.fg() - c)) } }) }, b.timeout || 0)
    };
    g.a.fQ = window.cancelIdleCallback ? function(a) { return window.cancelIdleCallback(a) } : function(a) { clearTimeout(a) };
    (function(a) {
        var b = 1,
            c = {};
        a.a.uxa = function(a, b) {
            if (c[a]) {
                var f = c[a];
                f.FE = 1;
                f.result = b;
                if (f.pn) {
                    for (var h = f.pn, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
                    f.pn = null
                }
            }
        };
        a.a.una = function(a) { c[a] = null };
        a.a.Iza = function(a, b) {
            if (c[a]) {
                var f = c[a];
                0 < f.FE ? b(null, f.result) : (f.pn || (f.pn = []), f.pn.push(b))
            } else b(null, a)
        };
        a.a.KR = function(d, e) {
            var f = navigator.geolocation;
            if (!a.l.ED || "https:" === document.location.protocol) return d(null, f);
            var h;
            e && e.Jza && (h = "f" + b++, c[h] = { FE: 0 });
            var k = null,
                l = !1;
            e && e.timeout && (k = setTimeout(function() {
                k =
                    void 0;
                d({ code: 3, info: "TIME_OUT", message: "Get geolocation time out." });
                l = !0
            }, e.timeout));
            f.getCurrentPosition(function() { l || (clearTimeout(k), k = void 0, d(null, f)) }, function(b) { l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.sb.load("AMap.GeoRemoteLoc", function() { d(null, a.kaa, h) }) : d(null, f)) }, { timeout: 1E3 });
            return h
        }
    })(g);
    (function(a) {
        var b = a.ca.extend({ ka: [a.va], A: function() {} });
        a.Nj = new b
    })(g);
    (function(a) {
        var b = a.ca.extend({
            ka: [a.va],
            A: function() { this.fga() },
            fga: function() { a.Nj && a.Nj.h("vecTileParsed.buildings", this.Mfa, this) },
            A5: function(a) { return a.map.AZ },
            Iqa: function(a) { return this.A5(a) ? a.map.VN : null },
            rxa: function(a, b) {
                if (b) {
                    var e = b.map;
                    e && (e.VN ? e.VN.toString() : "") !== (a ? a.toString() : "") && (e.VN = a || [], e.set("display", 0))
                }
            },
            Q8: function(a, b) {
                if (b) {
                    var e = b.map;
                    e && e.AZ !== a && (e.AZ = a, e.set("display", 0))
                }
            },
            IBa: function() {},
            wZ: function(a, b) {
                if (a)
                    for (var e = 0, f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) &&
                        b.push(a[e])
            },
            w3: function(b) {
                if (!b) return null;
                b = b.map.la;
                for (var d = 0, e = b.length; d < e; d++)
                    if (a.o.hi && b[d] instanceof a.o.hi && b[d].ga && b[d].ga.length && (-1 !== b[d].ga.indexOf("building") || -1 !== b[d].ga.indexOf("poilabel")) && b[d].La) { var f = b[d].S.get("tiles", null, !0); if (f && f.length) return b[d] }
                return null
            },
            fqa: function(a) {
                if (a = this.w3(a)) {
                    if (a = a.S.get("tiles", null, !0)) a = a[0];
                    else return null;
                    if (!a || !a.length) return null;
                    for (var b = [], e = 0, f = a.length; e < f; e++) {
                        var h = a[e];
                        h.ne && h.ne.uf && this.wZ(h.ne.uf, b)
                    }
                    return b
                }
            },
            Mfa: function(a) {
                if (a.pp && a.pp.ne) {
                    var b = a.pp.ne.uf;
                    if (b) {
                        var e = [];
                        this.wZ(b, e);
                        this.q("vecTileParsed.builds.found", { g2: e, pp: a.pp })
                    }
                }
            }
        });
        a.Oj = new b
    })(g);
    (function(a) {
        function b() {
            return {
                checkup: function() {
                    var a = Array.prototype.slice.call(arguments, 0);
                    a.pop()(null, a)
                }
            }
        }

        function c(a) {
            return {
                injectCode: function(b, c) {
                    var d = null,
                        e = null;
                    try { d = (new Function("self", b))(a) } catch (f) { console.error("error", e), e = f.toString() }
                    c(e, d)
                }
            }
        }

        function d(a) {
            function b(c, d) {
                function e(a, b, c) {
                    a = { aA: Date.now(), Pz: h, error: a, result: b, Fq: !1, fl: !1 };
                    if (c)
                        for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
                    d(a)
                }
                var f = c.mS,
                    h = c.Pz,
                    l = c.rQ,
                    m = c.CC,
                    n = c.bma || [],
                    p = a._wkHandlers[f];
                p ? p[l] ? m ?
                    p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
            }
            var c = [],
                d = null,
                e = null;
            for (d in this._wkHandlers) - 1 !== d.indexOf("_def_") && (e = this._wkHandlers.PFa = d);
            "function" === typeof this._wkHandlers[e].A && this._wkHandlers[e].A.call(this._wkHandlers[e]);
            a.xu = function(a) { c.push.apply(c, a) };
            a.addEventListener("message", function(d) {
                function e(b) {
                    if (t) {
                        t.push(b);
                        var d = !!b.Fq;
                        d || n++;
                        b = n >= h || b.fl;
                        if (d || b) {
                            d = 1 < t.length ? { Nwa: t } : t[0];
                            d.aA = Date.now();
                            d.cHa = p;
                            if (c.length) {
                                try {
                                    a.postMessage(d,
                                        c)
                                } catch (f) { a.postMessage(d), console.error(f) }
                                c.length = 0
                            } else a.postMessage(d);
                            t.length = 0;
                            b && (e = t = null)
                        }
                    } else console.error("Seemed callback already sent!!", b, b.result.mc)
                }
                var f = d.data;
                d = f.Kwa || [f];
                for (var h = d.length, n = 0, p = Date.now() - f.aA, t = [], f = 0; f < h; f++) b(d[f], e)
            }, !1)
        }

        function e(d, h) {
            this.w = a.extend({ batchSend: !0, lazy: !1, libPolyfills: null }, h);
            this.Op = [];
            this.XA = this.w.clientId || "w" + f++;
            this.w.onReady && this.qT(this.w.onReady);
            this.nG = this.Oea();
            if ("function" === typeof d) {
                var m = {};
                m[this.nG] = d;
                d = m
            }
            d[e.YR] =
                c;
            d[this.FY()] = b;
            this.EG = d;
            this.OB(null);
            this.w.lazy || this.ky();
            a.yra || !1 === this.w.hostWorker || (a.yra = this);
            this.ko && this.ko.A && this.ko.A.call(this.ko)
        }
        var f = 1,
            h = 1;
        a.extend(e, {
            YR: "_g_",
            Fxa: function(a) {
                if (!a.Wba) {
                    var b = [];
                    a.addEventListener("message", function(a) {
                        a = a.data;
                        a = a.Nwa || [a];
                        for (var c = 0, d = a.length; c < d; c++) {
                            var e = a[c],
                                f;
                            a: {
                                f = e.Pz;
                                for (var h = !e.fl, k = 0, v = b.length; k < v; k++) {
                                    var w = b[k];
                                    if (f === w.Pz) {
                                        h || b.splice(k, 1);
                                        f = w;
                                        break a
                                    }
                                }
                                f = void 0
                            }
                            f && f.CC(e.error, e.result, !0)
                        }
                    }, !1);
                    a.Kba = b;
                    a.Wba = !0
                }
            }
        });
        a.extend(e.prototype, {
            Oea: function() { return "_def_" + this.XA },
            FY: function() { return "_cln_" + this.XA },
            dka: function() {
                var a = Array.prototype.slice.call(arguments, 0);
                this.t0 = a;
                if (this.Qx) {
                    for (var b = 0, c = this.Qx.length; b < c; b++) this.Qx[b].apply(null, a);
                    this.Qx.length = 0
                }
            },
            xu: function(a) { this.Vja && this.Op.push.apply(this.Op, a) },
            qT: function(a) { this.t0 ? a.apply(null, this.t0) : (this.Qx || (this.Qx = []), this.Qx.push(a)) },
            ky: function(b) {
                var c = this;
                if (!c.EX) {
                    c.EX = !0;
                    var d = function(d, e) {
                        d && a.l.MS && console.warn(d);
                        c.dka.call(c, d, e);
                        b && b(d, e)
                    };
                    a.l.MS ? this.Rja(function(a, b) { b ? this.mga(b, function(a, c) { a ? d(a) : (this.OB(c), this.FP = c, this.Op.length = 0, this.ko = null, d(null, { sma: b, Vza: c })) }) : d("Worker start failed!") }) : d("Worker not supported!")
                }
            },
            xf: function(b, c) {
                var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.Qs,
                    f = this;
                b = b || f.nG;
                var h = {};
                if (a.a.kk(c, "object")) {
                    var q = "return {",
                        r;
                    for (r in c)
                        if (c.hasOwnProperty(r)) var s = c[r],
                            q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r + ": " + JSON.stringify(s) +
                                ",") : q + ("\n\t" + r + ': "' + s + '",');
                    c = new Function(q + "\n}")
                }
                f.jX(b, c, h);
                f.OB(null, h);
                f.qT(function(a) {
                    a ? d(a) : f.FP ? (a = f.LY(c, f.HN(f.XA, b), !0), f.FP.sendMessage(e.YR + ":injectCode", a, function(a, b) {
                        a || f.OB(f.FP, h);
                        d(a, b)
                    })) : d("Worker msger missing!!")
                })
            },
            HN: function(a, b) { if (!a || !b) throw Error("clientId or ns missing!!"); return a + "_" + b },
            lfa: function(a, b, c) {
                function d() {
                    var b = Array.prototype.slice.call(arguments, 0);
                    c.sendMessage.apply(c, [a].concat(b))
                }
                var e = this;
                if (!c) return function() {
                    var a = b.apply(e.ko, arguments);
                    e.EX || "untilCall" === e.w.lazy && e.ky();
                    return a
                };
                d._proxy2Worker = !0;
                return d
            },
            Nca: function(a) {
                var b = {},
                    c;
                for (c in a) a.hasOwnProperty(c) && this.jX(c, a[c], b);
                return b
            },
            jX: function(a, b, c) { b = b.call(null, !1); for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.nG && (c[d] = b[d])) },
            OB: function(a, b) {
                if (!b) this.ko || (this.ko = this.Nca(this.EG)), b = this.ko;
                else if (this.ko)
                    for (var c in b) b.hasOwnProperty(c) && (this.ko[c] = b[c]);
                for (c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        "function" === typeof d && (this[c] = this.lfa(c,
                            d, a))
                    }
                this.Vja = !!a
            },
            LY: function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
                    d = a.toString(),
                    e, d = d.replace(/^function([^\(]*)\(/, function() { e = "_prep_h" + h++; return "function " + e + "(" });
                return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
                    b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"), !1)
            },
            Rja: function(a) {
                var b = this.XA,
                    c = [],
                    d;
                for (d in this.EG)
                    if (this.EG.hasOwnProperty(d)) {
                        var f = this.LY(this.EG[d], this.HN(b, d));
                        f && c.push(f)
                    }
                b = this.w.libPolyfills || [];
                d = 0;
                for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
                var h = b.join(";\n") + ";\n" + c.join(";\n"),
                    c = this.w.hostWorker,
                    r = this;
                c && c !== r ? c.qT(function(b, c) { b ? a.call(r, b) : c.Vza.sendMessage(e.YR + ":injectCode", h, function(b) { b ? a.call(r, b) : a.call(r, null, c.sma) }) }) : a.call(r, null, r.hla(h))
            },
            hla: function(b) {
                b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
                var c;
                try {
                    var e =
                        a.a.createObjectURL(b);
                    c = new Worker(e);
                    setTimeout(function() {
                        a.a.revokeObjectURL(e);
                        e = null
                    }, 5E3)
                } catch (f) { return }
                return c
            },
            Gda: function(b) {
                var c = 1,
                    d = b.Kba,
                    e = this,
                    f = !!e.w.batchSend;
                return function(h) {
                    var r = Array.prototype.slice.call(arguments, 1),
                        s = "function" === typeof r[r.length - 1] ? r.pop() : null,
                        u = e.XA,
                        v = h.split(":"),
                        w = e.nG;
                    1 < v.length && (h = v[1], w = v[0]);
                    r = { aA: a.a.fg(), mS: e.HN(u, w), CC: !!s, Pz: u + "_" + c++, rQ: h, bma: r };
                    s && d.push({ rQ: r.rQ, mS: r.mS, aA: r.aA, Pz: r.Pz, CC: s });
                    f ? e.pca(b, r) : e.Ox(b, r)
                }
            },
            Ox: function(a, b) {
                if (this.Op.length) {
                    try {
                        a.postMessage(b,
                            this.Op)
                    } catch (c) { a.postMessage(b), console.error(c) }
                    this.Op.length = 0
                } else a.postMessage(b)
            },
            pca: function(b, c) {
                b.BO || (b.BO = []);
                b.BO.push(c);
                if (!b.k0) {
                    var d = this;
                    b.k0 = setTimeout(function() {
                        b.k0 = null;
                        var c = b.BO;
                        c.length && (d.Ox(b, 1 === c.length ? c[0] : { aA: a.a.fg(), Kwa: c }), c.length = 0)
                    }, 0)
                }
            },
            Zka: function(a) {
                var b = this;
                a.addEventListener("error", function(a) {
                    console.error(a);
                    b.OB(null)
                }, !1);
                e.Fxa(a)
            },
            mga: function(a, b) {
                var c = this;
                c.Zka(a);
                var d = this.Gda(a);
                if (e.lda) b.call(c, null, { sendMessage: d });
                else {
                    e.lda = !0;
                    var f = [c.FY() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function(a, e) {
                        var h = !0;
                        if (a || !e || e.length !== f.length - 2) h = !1;
                        else
                            for (var k = 0, v = e.length; k < v; k++)
                                if (e[k] !== f[k + 1]) { h = !1; break }
                        h ? b.call(c, null, { sendMessage: d }) : (console.error(a), b.call(c, "Self checkup failed!!"))
                    }];
                    d.apply(c, f)
                }
            }
        });
        a.JA = e
    })(g);
    (function() {
        if (!g.Be) {
            g.Be = { mf: {}, az: {} };
            var a = g.Be,
                b = g.Be.mf,
                c = g.a,
                d = g.r;
            b.start = function(b) { a.az[b.id] = { K: b.K, time: { n5: c.fg() }, Rma: function() { return c.fg() - this.time.n5 } } };
            b.end = function(b) {
                var d = a.az[b.id],
                    e = d.time,
                    d = c.bind(d.Rma, d),
                    l = b.index,
                    m = b.key;
                "function" !== typeof b.Nc && (b.Nc = function() {});
                if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d());
                else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d();
                else return b.Nc(Error("Duplicate Invoke"));
                b.Nc(null)
            };
            b.push = function(b) {
                var c = a.az[b.id].time,
                    d = b.key,
                    e = b.Hf;
                "function" !== typeof b.Nc && (b.Nc = function() {});
                if (void 0 === c[d]) c[d] = e;
                else return b.Nc(Error("Duplicate Invoke"));
                b.Nc(null)
            };
            b.send = function(b) {
                var c = d.vc + "://webapi.amap.com/count?",
                    k = g.extend(e({ K: a.az[b.id].K }), b.params || {}),
                    l = g.a;
                b.params && b.params.rs && !b.params.type && (b = a.az[b.id].time, delete b.n5, k = g.extend(k, b));
                b = [];
                for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
                b.push("jl=" + (d.PJ ? 1 : 0));
                if (l.kk(window.performance, "performance") &&
                    l.kk(window.performance.getEntriesByType, "function")) {
                    var n = 0,
                        p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"],
                        q = ["/maps", "/css"];
                    l.Tb(window.performance.getEntriesByType("resource"), function(a) {
                        var b = void 0,
                            c = void 0;
                        a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
                        a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
                        b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a.startTime))
                    });
                    0 !== n && b.push("sd=" + n)
                }
                new g.jb.zb(c + b.join("&"))
            };
            var e = function(a) {
                var b = g.l;
                a = g.g.N3(a.K);
                return {
                    type: "q",
                    resolution: a.width + "*" + a.height,
                    k: d.key,
                    u: d.Sp,
                    iw: b.Qf ? 1 : 0,
                    cw: b.j2 ? 1 : 0,
                    gc: b.ZR,
                    m: b.ba ? 1 : 0,
                    cv: b.Vp ? 1 : 0,
                    pf: b.Ez,
                    dpr: window.devicePixelRatio,
                    screenwidth: screen.width,
                    scale: b.DL || 0,
                    detect: b.ja ? 1 : 0,
                    v: d.vo
                }
            }
        }
    })();
    (function() {
        if (!g.ML) {
            var a = g.a.oD({ r: "Conf", extend: "extend", l: "Browser", xw: "uncodeCoords" });
            g.ML = function() {
                var b = new g.JA(function() {
                    return {
                        A: function() {
                            this.px = { qk: 0, Rv: 0 };
                            this.Vk = {};
                            this.po = [];
                            this.Np = {};
                            this.Xj = {};
                            this.Qt = 0;
                            this.ZZ = 500
                        },
                        Ah: function(a, b) {
                            var e = a.Ld,
                                f = a.Ke,
                                h = "building" === a.ga[0];
                            (f && e !== this.px.Rv && this.px.Rv || !f && !h && e !== this.px.qk && this.px.qk) && this.Fla(!!f);
                            f ? this.px.Rv = e : h || (this.px.qk = e);
                            this.ita(a, b)
                        },
                        Fla: function(a) {
                            if (a) this.eX();
                            else if (!a && Object.keys(this.Vk).length)
                                for (var b in this.Vk) this.Vk.hasOwnProperty(b) &&
                                    (a = this.Vk[b], a.Lt || a.abort())
                        },
                        Cya: function() { this.Qt > this.ZZ && this.dU(Object.keys(this.Xj).slice(0, Math.floor(this.ZZ / 2))) },
                        dU: function(a) {
                            for (var b = 0, e = a.length; b < e; b++) delete this.Xj[a[b]];
                            this.Qt -= a.length
                        },
                        CQ: function(a) {
                            var b = a.ga;
                            a = a.Ke;
                            var e = new XMLHttpRequest;
                            e.Lq = "";
                            e.xE = [(new Date).getTime() + "_" + Math.random(), a ? 1 : 0, b.join("|")].join("-");
                            return e
                        },
                        S4: function(a, b, e) {
                            var f = this,
                                h = a.Hb,
                                k = a.Ke,
                                l = [],
                                m = h.filter(function(a) {
                                    var b = f.Xj[a.key];
                                    if (b) {
                                        if (b.RZ) return !0;
                                        l.push(a.key)
                                    }
                                    return !1
                                }),
                                n = !1;
                            if (m.length && ((n = m.length === h.length) || "function" !== typeof b || b(a, m), !k)) {
                                var p = [];
                                m.forEach(function(a) {
                                    a = a.key;
                                    p.push.apply(p, f.Xj[a]);
                                    delete f.Xj[a]
                                });
                                this.Qt -= m.length;
                                this.Ts(this.extend({}, a, { dF: p, Ld: a.Ld, kl: n }), e)
                            }!k && l.length && this.dU(l);
                            this.Cya();
                            return n
                        },
                        ita: function(a, b) {
                            function e(e, f) {
                                var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
                                if (p.Vk[q.xE] || p.bga(q)) {
                                    var n = e.split("|");
                                    f && (n[0] = f + n[0]);
                                    var t = n,
                                        x = "";
                                    n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1));
                                    if (k)
                                        for (var n =
                                                0, y = t.length; n < y; n++) {
                                            if (t[n]) {
                                                var F = JSON.parse(t[n]);
                                                if (F.length) {
                                                    var C = F[0].split("-").slice(0, -1).join("/");
                                                    p.Xj[C] ? p.Xj[C].push(F) : (p.Xj[C] = [F], p.Qt++);
                                                    m && (p.Xj[C].RZ = !0)
                                                }
                                            }
                                        } else p.Ts(p.extend({}, a, { dF: t, Ld: h, kl: m, ES: !0 }), b);
                                    return x
                                }
                                r || (p.Ml(l, b), r = !0)
                            }
                            var f = this,
                                h = a.Ld,
                                k = a.Ke,
                                l = a.Hb,
                                m = a.url;
                            if (!this.S4(a, function(a, b) {
                                    var c = a.Hb,
                                        d = a.url,
                                        e = d.match(/&t=([^&]+)/)[1].split(";");
                                    b.reverse().forEach(function(a) { a = c.indexOf(a); - 1 !== a && e.splice(a, 1) });
                                    a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
                                }, b)) {
                                if (this.aC() &&
                                    (this.eX(), k)) { this.Ml(l, b); return }
                                var n = 0,
                                    p = this,
                                    q = this.CQ(a);
                                k ? this.po.push(q) : (this.Vk[q.xE] = q, q.Hb = l, q.Nc = b);
                                var r = !1;
                                q.onreadystatechange = function() {
                                    if (4 === q.readyState && 0 === q.status) q.Lt || (q.Lt = !0, f.Ml(l, b), q.onreadystatechange = null, k ? f.y0(q) : delete f.Vk[q.xE]), q = null;
                                    else if (!q.Lt)
                                        if (3 === q.readyState) {
                                            var h = q.responseText.substring(n);
                                            q.Lq = e(h, q.Lq);
                                            n = q.responseText.length
                                        } else 4 === q.readyState && (h = q.responseText.substring(n), a.bh && (h += "|"), e(h, q.Lq, !0), q.Lq = "", k ? f.y0(q) : delete f.Vk[q.xE],
                                            q = null)
                                };
                                q.onerror = function() {};
                                q.open("GET", m, !0);
                                q.send();
                                k && (q.N9 = l.map(function(a) { return a.key }))
                            }
                        },
                        $D: function(a) {
                            function b(d, p, r) {
                                var s = [r, d, p].join("/");
                                d = e.filter(function(a) { return a.key === s })[0];
                                18 < k && !n && (s += "/" + k);
                                if (d && "loaded" !== d.status && -1 !== m.indexOf(t))
                                    if ("limg" === t) p = h[1], d.qd = p, "string" === typeof p.b && (p.b = w.bB(p.b)), r = "", (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = { url: r, Ek: "limg-" + d.key + "-" + f });
                                    else {
                                        p = {
                                            Kg: d.ta,
                                            Pi: s,
                                            Qa: h,
                                            Ed: t,
                                            iy: a.Cu,
                                            FD: "building" === t,
                                            Di: "poilabel" === t || "roadlabel" ===
                                                t || "building" === t && q
                                        };
                                        if ("poilabel" === t || "roadlabel" === t) p.qd = d.qd;
                                        t === m[m.length - 1] && (d.status = "loaded");
                                        l.push(p)
                                    }
                            }
                            var e = a.Hb,
                                f = a.RS,
                                h = a.PC,
                                k = a.Ld,
                                l = a.Pc,
                                m = a.ga,
                                n = a.Qf,
                                p = a.bS,
                                q = a.ze,
                                r = h[0].split("-"),
                                s = parseInt(r[1]),
                                u = parseInt(r[2]),
                                v = parseInt(r[0]),
                                w = this,
                                t = r[3],
                                r = Math.pow(2, v);
                            10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
                            b(s, u, v)
                        },
                        y0: function(a) { for (var b = this.po.length - 1; 0 <= b; b--) this.po[b] === a && this.po.splice(b, 1) },
                        bga: function(a) {
                            for (var b = 0, e = this.po.length; b < e; b++)
                                if (this.po[b] === a) return !0;
                            return !1
                        },
                        aC: function() { return Object.keys(this.Vk).length ? !0 : !1 },
                        eX: function() {
                            if (this.po.length) {
                                for (var a = this.po.length - 1; 0 <= a; a--) {
                                    var b = this.po[a];
                                    b.Lt || b.abort();
                                    b.N9 && this.dU(b.N9)
                                }
                                this.po.length = 0
                            }
                        },
                        Ml: function(a, b) { b(null, { Hb: a, I5: !0, disabled: this.disabled }, { fl: !0 }) }
                    }
                }, { batchSend: !1 });
                b.xf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.r) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " +
                    g.a.xw.toString() + "\n     }"));
                return b
            }
        }
    })();
    g.g = {
        CLASS_NAME: "DomUtil",
        get: function(a) { return "string" === typeof a ? document.getElementById(a) : a },
        HD: function(a, b, c) { return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.g.An(a.parentNode, c) ? g.g.HD(a.parentNode, b) : !1 },
        Jo: function(a) {
            if (!a) return [0, 0];
            var b = a.offsetWidth,
                c = a.offsetHeight;
            b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0].offsetHeight);
            window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
            return [b, c]
        },
        zFa: function(a, b) {
            var c = document.head || document.getElementsByTagName("head")[0];
            if (c) {
                var d = document.createElement("link");
                d.setAttribute("rel", "stylesheet");
                d.setAttribute("type", "text/css");
                d.setAttribute("href", a);
                b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
            } else document.write("<link rel='stylesheet' href='" + a + "'/>")
        },
        Vc: function(a, b) {
            var c = a.style[b];
            !c && a.currentStyle && (c = a.currentStyle[b]);
            c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
                null)) ? c[b] : null);
            c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
            c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
            return "auto" === c ? null : c
        },
        pJ: function(a) { if (a) return new g.xd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.Ds ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0) },
        N3: function(a) { return new g.xd(a.clientWidth, a.clientHeight) },
        XR: function(a) {
            var b = 0,
                c = 0,
                d = a,
                e = document.body,
                f = document.documentElement,
                h, k = g.l.sv;
            do {
                b += d.offsetTop || 0;
                c += d.offsetLeft || 0;
                b += parseInt(g.g.Vc(d, "borderTopWidth"), 10) || 0;
                c += parseInt(g.g.Vc(d, "borderLeftWidth"), 10) || 0;
                h = g.g.Vc(d, "position");
                if (d.offsetParent === e && "absolute" === h) break;
                if ("fixed" === h) {
                    b += e.scrollTop || f.scrollTop || 0;
                    c += e.scrollLeft || f.scrollLeft || 0;
                    break
                }
                d = d.offsetParent
            } while (d);
            d = a;
            do {
                if (d === e) break;
                b -= d.scrollTop || 0;
                c -= d.scrollLeft || 0;
                g.g.Ooa() || !g.l.v$ && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.g.Vc(d, "overflow-y") && "hidden" !== g.g.Vc(d, "overflow") &&
                    (c += 17));
                d = d.parentNode
            } while (d);
            return new g.H(c, b)
        },
        Ooa: function() { g.g.$da || (g.g.$da = !0, g.g.Zda = "ltr" === g.g.Vc(document.body, "direction")); return g.g.Zda },
        create: function(a, b, c, d) {
            a = document.createElement(a);
            c && (a.className = c);
            b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a));
            return a
        },
        X2: function() {
            document.selection && document.selection.empty && document.selection.empty();
            this.Yia || (this.Yia = document.onselectstart, document.onselectstart = g.a.s3)
        },
        k3: function() {},
        vya: function(a,
            b, c) { c ? this.Wa(a, b) : this.eb(a, b) },
        An: function(a, b) { if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className) },
        Wa: function(a, b) { a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.g.An(a, b) || (a.className += (a.className ? " " : "") + b)) },
        kxa: function(a, b) { a && (a.className = b || "") },
        eb: function(a, b) {
            function c(a, c) { return c === b ? "" : a }
            a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
        },
        j4: function(a,
            b) { return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")" },
        Vq: function(a, b) {
            if (a.style)
                if ("opacity" in a.style) a.style.opacity = b;
                else if ("filter" in a.style) {
                var c = Math.round(100 * b);
                a.style.filter = "";
                100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
            }
        },
        ZU: function(a) {
            for (var b = document.documentElement.style, c = 0; c < a.length; c +=
                1)
                if (a[c] in b) return a[c];
            return !1
        },
        A4: function(a) { var b = g.l.HL; return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")") },
        yEa: function(a, b) { return g.g.A4(b.add(b.Md(-1 * a))) + (" scale(" + a + ") ") },
        U8: function(a, b, c) { a.bj = b;!c && g.l.UH ? (b = g.g.A4(b), c = a.style[g.g.sg].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.g.sg] = c.join("rotate")) : a.style[g.g.sg] = b, g.l.z6 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px") },
        Ud: function(a) {
            a.bj || (a.bj = a.style.left ?
                new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0));
            return a.bj
        },
        lHa: function(a, b) { a = a instanceof Array ? a : [a]; for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b },
        N8: function(a, b) { ";" !== b[b.length - 1] && (b += ";"); return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1 },
        Ya: function(a, b) {
            a = a instanceof Array ? a : [a];
            for (var c = 0; c < a.length; c += 1)
                for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
            return this
        },
        Jz: function(a) { for (; a.childNodes.length;) a.removeChild(a.childNodes[0]) },
        remove: function(a) { a && a.parentNode && a.parentNode.removeChild(a) },
        rotate: function(a, b, c) {
            var d = g.g.sg;
            c = c || { x: a.clientWidth / 2, y: a.clientHeight / 2 };
            d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.g.ot[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
        },
        w4: function(a, b, c) {
            var d = g.g.sg;
            c = c || { x: a.clientWidth / 2, y: a.clientHeight / 2 };
            return d ? g.g.ot[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.g.ot[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
        },
        Am: function(a, b, c) {
            a.width = b;
            a.height = c
        },
        getElementsByClassName: function(a, b, c) {
            b = b || "*";
            c = c || document;
            if (c.getElementsByClassName) return c.getElementsByClassName(a);
            b = c.getElementsByTagName(b);
            a = RegExp("(^|\\s)" + a + "(\\s|$)");
            c = [];
            for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
            return c
        },
        fillText: function(a, b) {
            if (a) return void 0 !== a.textContent ?
                a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
        }
    };
    (function() {
        var a = g.g.ZU(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
            b;
        g.extend(g.g, {
            X2: function() { g.F.h(window, "selectstart", g.F.preventDefault); if (a) { var c = document.documentElement.style; "none" !== c[a] && (b = c[a], c[a] = "none") } },
            k3: function() {
                g.F.G(window, "selectstart", g.F.preventDefault);
                a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
            },
            Goa: function() { g.F.h(window, "dragstart", g.F.preventDefault) },
            ppa: function() { g.F.G(window, "dragstart", g.F.preventDefault) }
        })
    })();
    g.g.sg = g.g.ZU(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
    g.g.ot = { transform: "transform", WebkitTransform: "-webkit-transform", OTransform: "-o-transform", MozTransform: "-moz-transform", msTransform: "-ms-transform" };
    g.g.KF = g.g.ZU(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    g.g.VAa = "webkitTransition" === g.g.KF || "OTransition" === g.g.KF ? g.g.KF + "End" : "transitionend";
    g.F = {
        h: function(a, b, c, d) {
            function e(b) {
                b = b || window.event;
                b.target = b.target || b.srcElement;
                return c.call(d || a, b, k)
            }
            var f = g.a.yb(a) + "_" + g.a.yb(c) + "_" + g.a.yb(d || a),
                h = b + f;
            if (a[h]) return this;
            var k = b;
            g.l.iR && "mousewheel" === b && (b = "DOMMouseScroll");
            if (g.l.Ds && ("mouseover" === b || "mouseout" === b)) {
                var l = e;
                b = "mouseover" === b ? "mouseenter" : "mouseleave";
                e = function(a) { l(a) }
            }
            if (g.l.J7 && 0 === b.indexOf("touch")) return a[h] = e, this.Nla(a, b, e, f);
            g.l.Wf && "dblclick" === b && this.Lla && this.Lla(a, e, f);
            "addEventListener" in a ? a.addEventListener(b,
                e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
            a[h] = e;
            return this
        },
        Ej: function(a, b, c, d) {
            var e = this;
            this.h(a, b, function h(k) { e.G(a, b, h, d); return c.call(d || a, k || window.event, b) }, d)
        },
        G: function(a, b, c, d) {
            c = g.a.yb(a) + "_" + g.a.yb(c) + "_" + g.a.yb(d || a);
            d = b + c;
            var e = a[d];
            g.l.iR && "mousewheel" === b && (b = "DOMMouseScroll");
            !g.l.Ds || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
            g.l.J7 && -1 < b.indexOf("touch") ? this.qwa(a, b, c) : g.l.Wf && "dblclick" === b && this.mwa ? this.mwa(a, c) :
                "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
            a[d] = void 0;
            return this
        },
        rHa: function(a, b) {
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b.target.dispatchEvent(c)
        },
        Sla: function(a) {
            a.af = "info";
            g.l.Ie && g.F.stopPropagation(a)
        },
        stopPropagation: function(a) { a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0; return this },
        Uxa: function(a) {
            var b = g.F.Sla;
            g.l.Wf && (g.F.h(a, "touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend", b, this));
            g.l.ba || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove", b, this), g.F.h(a, "mousewheel", b, this));
            g.l.IT && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a, "pointermove", b, this));
            g.l.B6 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a, "MSPointerMove", b, this))
        },
        preventDefault: function(a) {
            a.preventDefault ? a.preventDefault() :
                a.returnValue = !1;
            return this
        },
        stop: function(a) { return g.F.preventDefault(a).stopPropagation(a) },
        jxa: function(a) { return a && a.getBoundingClientRect ? (a.vM = a.getBoundingClientRect(), a.SW = [a.clientLeft, a.clientTop], !0) : !1 },
        kza: function(a) { a.vM && (a.vM = null, a.SW = null) },
        Epa: function(a, b) {
            var c = b.vM || b.getBoundingClientRect(),
                d = b.SW || [b.clientLeft, b.clientTop];
            return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
        },
        nm: function(a, b) {
            if (b && b.getBoundingClientRect) return this.Epa(a, b);
            var c = document.body,
                d = document.documentElement,
                c = new g.H(g.l.Wf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.Wf ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
            return b ? c.$a(g.g.XR(b)) : c
        },
        F5: function(a) { return 1 === a.which || 0 === a.button || 1 === a.button }
    };
    g.extend(g.F, {
        AO: [],
        c_: !1,
        Nla: function(a, b, c, d) {
            switch (b) {
                case "touchstart":
                    return this.Qla(a, b, c, d);
                case "touchend":
                    return this.Ola(a, b, c, d);
                case "touchmove":
                    return this.Pla(a, b, c, d)
            }
        },
        Mo: function(a) {
            if (g.l.IT) return a;
            switch (a) {
                case "pointerdown":
                    return "MSPointerDown";
                case "pointerup":
                    return "MSPointerUp";
                case "pointercancel":
                    return "MSPointerCancel";
                case "pointermove":
                    return "MSPointerMove"
            }
        },
        Qla: function(a, b, c, d) {
            function e(a) {
                for (var b = !1, d = 0; d < f.length; d += 1)
                    if (f[d].pointerId === a.pointerId) {
                        b = !0;
                        break
                    }
                b || f.push(a);
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }
            var f = this.AO;
            a["_amap_touchstart" + d] = e;
            a.addEventListener(this.Mo("pointerdown"), e, !1);
            this.c_ || (a = function(a) {
                for (var b = 0; b < f.length; b += 1)
                    if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break }
            }, document.documentElement.addEventListener(this.Mo("pointerup"), a, !1), document.documentElement.addEventListener(this.Mo("pointercancel"), a, !1), this.c_ = !0);
            return this
        },
        Pla: function(a, b, c, d) {
            function e(a) {
                if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
                    0 !== a.buttons) {
                    for (var b = 0; b < f.length; b += 1)
                        if (f[b].pointerId === a.pointerId) { f[b] = a; break }
                    a.touches = f.slice();
                    a.changedTouches = [a];
                    c(a)
                }
            }
            var f = this.AO;
            a["_amap_touchmove" + d] = e;
            a.addEventListener(this.Mo("pointermove"), e, !1);
            return this
        },
        Ola: function(a, b, c, d) {
            function e(a) {
                for (var b = 0; b < f.length; b += 1)
                    if (f[b].pointerId === a.pointerId) { f.splice(b, 1); break }
                a.touches = f.slice();
                a.changedTouches = [a];
                c(a)
            }
            var f = this.AO;
            a["_amap_touchend" + d] = e;
            a.addEventListener(this.Mo("pointerup"), e, !1);
            a.addEventListener(this.Mo("pointercancel"),
                e, !1);
            return this
        },
        qwa: function(a, b, c) {
            c = a["_amap_" + b + c];
            switch (b) {
                case "touchstart":
                    a.removeEventListener(this.Mo("pointerdown"), c, !1);
                    break;
                case "touchmove":
                    a.removeEventListener(this.Mo("pointermove"), c, !1);
                    break;
                case "touchend":
                    a.removeEventListener(this.Mo("pointerup"), c, !1), a.removeEventListener(this.Mo("pointercancel"), c, !1)
            }
            return this
        }
    });
    (function() {
        function a(a) {
            var b = a.target || a.srcElement;
            b.aX && f(b.aX);
            b.aX = e(function() {
                var c = b.zp;
                if (c && c.yp)
                    for (var d = 0; d < c.yp.length; d += 1) c.yp[d].call(c, a)
            })
        }

        function b() {
            var b = this.contentDocument.defaultView;
            b.zp = this.Uba;
            b.addEventListener("resize", a);
            a.call(b, { target: b })
        }
        var c = document.attachEvent,
            d = navigator.userAgent.match(/(Trident|Edge)/),
            e = g.a.Yc,
            f = g.a.ui;
        g.extend(g.F, {
            Rla: function(e, f) {
                if (!e.yp)
                    if (e.yp = [], c) e.zp = e, e.attachEvent("onresize", a);
                    else {
                        "static" === window.getComputedStyle(e).position &&
                            (e.style.position = "relative");
                        var l = e.zp = document.createElement("object");
                        l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                        l.Uba = e;
                        l.onload = b;
                        l.type = "text/html";
                        d && e.appendChild(l);
                        l.data = "about:blank";
                        d || e.appendChild(l)
                    }
                e.yp.push(f)
            },
            HGa: function(b, d) {
                b.yp.splice(b.yp.indexOf(d), 1);
                b.yp.length || (c ? b.detachEvent("onresize", a) : (b.zp.contentDocument.defaultView.removeEventListener("resize",
                    a), b.zp = !b.removeChild(b.zp)))
            },
            vna: function(a) {
                a.yp = null;
                if (a.zp) {
                    var b = a.zp;
                    b.parentNode === a && b.parentNode.removeChild(b);
                    a.zp = null
                }
            }
        })
    })();
    g.sb = {
        aua: g.r.Fb + "/maps",
        Qu: g.ca.Qu,
        bT: 0,
        Dz: [],
        Lu: {},
        Ig: function(a, b) {
            function c() {
                d += 1;
                d === e.length && b && b()
            }
            a.length || b();
            for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
                var h = this.Qu[a[f]];
                if (h)
                    for (var k = 0; k < h.length; k += 1) e.push(h[k]);
                e.push(a[f])
            }
            for (f = 0; f < e.length; f += 1) this.eR(e[f], c)
        },
        ID: function(a) {
            for (var b = 0; b < a.length; b += 1)
                if (1 !== this.QC(a[b]).status) return !1;
            return !0
        },
        eR: function(a, b) {
            var c = this.QC(a);
            if (1 === c.status) b && b();
            else {
                b && c.ly.push(b);
                try {
                    if (g.l.Gv && window.localStorage) {
                        var d = window.localStorage["_AMap_" +
                            a];
                        d && (d = JSON.parse(d), d.version === g.r.Gk ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                    }
                } catch (e) {}
                if (0 === c.status) {
                    this.Uva(a);
                    var f = this;
                    f.bT || (f.bT = 1, window.setTimeout(function() {
                        f.bT = 0;
                        var a = f.aua + "/modules?v=" + g.r.vo + "&key=" + g.r.key + "&m=" + f.Dz.join(",") + "&vrs=" + g.r.Gk;
                        g.sb.Ot(f.Dz.join(","));
                        f.Dz = [];
                        c.XK = f.tta(a)
                    }, 1));
                    c.status = -1
                }
            }
        },
        Ot: function(a) {
            a = g.r.Yd + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.r.key, "m=" + a].join("&");
            new g.jb.zb(a, { callback: "callback" })
        },
        load: function(a, b) {
            var c = this.Qu[a];
            if (c) {
                for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
                d.push(a);
                for (var f = 0, c = function() {
                        f += 1;
                        f === d.length && b && b()
                    }, e = 0; e < d.length; e += 1) this.eR(d[e], c)
            } else this.eR(a, b)
        },
        Uva: function(a) {
            for (var b = 0; b < this.Dz.length; b += 1)
                if (this.Dz[b] === a) return;
            this.Dz.push(a)
        },
        Nn: function(a, b) {
            var c = this.QC(a);
            try { eval(b) } catch (d) { return }
            c.status = 1;
            for (var e = 0, f = c.ly.length; e < f; e += 1) c.ly[e]();
            c.ly = []
        },
        pd: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                1 !==
                    c.Lu[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, 5E3)
        },
        QC: function(a) { this.Lu[a] || (this.Lu[a] = {}, this.Lu[a].status = 0, this.Lu[a].ly = []); return this.Lu[a] },
        remove: function(a) { this.Lu[a] = null },
        tta: function(a) {
            g.r.mode && (a += "&mode=" + g.r.mode);
            var b = document.createElement("script");
            b.charset = "utf-8";
            a && 0 === a.indexOf(g.r.Fb) && (b.crossOrigin = "Anonymous");
            b.src = a;
            document.body.appendChild(b);
            return b
        }
    };
    window._jsload_ = function(a, b, c) {
        var d = g.sb.QC(a);
        d.XK && 0 <= g.a.indexOf(document.body.childNodes, d.XK) && document.body.removeChild(d.XK);
        d.XK = null;
        try {
            if (!c && window.localStorage && b && "" !== b && g.l.Gv) {
                var e = window.localStorage["_AMap_" + a],
                    e = e || "{}",
                    e = JSON.parse(e);
                e.version !== g.r.Gk || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({ version: g.r.Gk, script: b })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({ version: g.r.Gk, script: b, css: e.css }))
            }
        } catch (f) {}
        g.sb.Nn(a, b)
    };
    window._cssload_ = function(a, b, c) {
        try {!c && window.localStorage && b && "" !== b && g.l.Gv && window.localStorage.setItem("_AMap_" + a, JSON.stringify({ css: b, version: g.r.Gk })) } catch (d) {}
        var e = document.createElement("style");
        e.type = "text/css"; - 1 === g.r.Fb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.r.Fb.split("://")[1]));
        "https" === g.r.vc && (b = b.replace(/http:/gi, "https:"));
        e.styleSheet ? (a = function() { try { e.styleSheet.cssText = b } catch (a) {} }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
        a = document.head || document.getElementsByTagName("head")[0];
        2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
    };
    (function(a) {
        var b = g.l;
        if (!g.indexedDB && b.Oi) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
                d = a.IDBKeyRange || a.dIa || a.NFa || a.MFa;
            if (c) {
                var e = g.a,
                    f = null;
                a = "amap-jsapi" + (a.vAa ? "-debug" : "");
                var h = g.extend({}, g.va),
                    k;
                try {
                    k = c.open(a), k.onsuccess = function() {
                        f = this.result;
                        h.q("dbReady", { status: "success" })
                    }, k.onerror = function() { h.q("dbReady", { status: "error" }) }, k.onblocked = function() { h.q("dbReady", { status: "blocked" }) }, k.onupgradeneeded = function(a) {
                        a.currentTarget.result.createObjectStore("tile", { keyPath: "tileKey" })
                    }
                } catch (l) { b.Oi = !1 } finally { if (!b.Oi) return }
                var b = function(a) { return function() { try { return a.apply(this, arguments) } catch (b) { var c = arguments[arguments.length - 1]; "function" === typeof c && setTimeout(function() { c({ code: 4, KI: b }) }, 1) } } },
                    m = b(function(a, b) { return null === f ? (setTimeout(function() { b && b({ code: 3 }) }, 1), null) : f.transaction("tile", a).objectStore("tile") });
                g.indexedDB = {
                    kC: function(a, b) {
                        f ? "function" === typeof a && a() : h.h("dbReady", function(c) {
                            "success" === c.status ? "function" === typeof a &&
                                a() : "function" === typeof b && b({ code: 3, status: status })
                        })
                    },
                    count: b(function(a) {
                        var b = this,
                            c = arguments;
                        this.kC(function() { b.Ot.apply(b, c) }, a)
                    }),
                    Ot: b(function(a) {
                        var b = m("readonly", a).count();
                        b.onsuccess = function() { a(null, b.result) };
                        b.onerror = function() { a({ code: 7 }) }
                    }),
                    get: b(function(a, b, c) {
                        var d = this,
                            e = setTimeout(function() { e && (e = null, c && c({ code: 7 })) }, b.timeout || 1E3);
                        this.kC(function() { d.Aea.call(d, a, function(a, b) { e && (clearTimeout(e), e = null, c(a, b)) }) }, c)
                    }),
                    Aea: b(function(a, b) {
                        var c = m("readonly", b);
                        if (e.isArray(a)) {
                            var d,
                                f;
                            (function() {
                                function e(b) {
                                    var f = c.get(a[b]);
                                    f.onsuccess = function(a) {
                                        a.target.result && (d[b] = a.target.result);
                                        h()
                                    };
                                    f.onerror = h
                                }

                                function h() {
                                    f++;
                                    f === a.length && b(null, d)
                                }
                                d = [];
                                for (var k = f = 0, l = a.length; k < l; k++) e(k)
                            })()
                        } else {
                            var h = c.get(a);
                            h.onsuccess = function(a) { b && b(null, a.target.result) };
                            h.onerror = function() { b && b({ code: 1 }) }
                        }
                    }),
                    add: b(function(a, b) {
                        var c = this,
                            d = arguments;
                        this.kC(function() { c.Yba.apply(c, d) }, b)
                    }),
                    Yba: b(function(a, b) {
                        function c() { 0 === --f && b(null) }
                        e.isArray(a) || (a = [a]);
                        var d = a.length,
                            f =
                            d,
                            h = 0,
                            k = Math.ceil(d / 5),
                            l = setInterval(function() {
                                if (h++ < k) {
                                    var e = 5 * h;
                                    e > d && (e = d);
                                    for (var f = m("readwrite", b), s = 5 * (h - 1); s < e; s++) {
                                        var F = f.put(a[s]);
                                        F.onsuccess = F.onerror = c
                                    }
                                } else clearInterval(l)
                            }, 32)
                    }),
                    remove: b(function(a, b) {
                        var c = this,
                            d = arguments;
                        this.kC(function() { c.kka.apply(c, d) }, b)
                    }),
                    kka: b(function(a, b) {
                        var c = m("readwrite", b);
                        e.isArray(a) || (a = [a]);
                        a = a.sort();
                        c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                            if (c = c.target.result) {
                                if (e.ka(c.value.tileKey, a)) c["delete"]();
                                for (var d = -1,
                                        f = 0, h = a.length; f < h; f++)
                                    if (a[f] > c.value.tileKey) { d = f; break }
                                c["continue"](a[d])
                            } else b && b(null)
                        }
                    }),
                    clear: b(function(a) {
                        var b = this,
                            c = arguments;
                        this.kC(function() { b.cG.apply(b, c) }, a)
                    }),
                    cG: b(function(a) {
                        var b = m("readwrite", a).clear();
                        b.onsuccess = function() { a && a(null) };
                        b.onerror = function() { a && a({ code: 2 }) }
                    })
                }
            } else b.Oi = !1
        }
    })(window);
    (function() {
        function a(a) { u.data.keys = u.data.keys.filter(function(b) { return !r.ka(a, b) }).concat(a) }

        function b(a) {
            var b = g.r.Gk + "|" + a.Pi.replace(/\//g, ",") + "|" + (a.Qf ? "w" : "v") + "|",
                c;
            c = a.ja;
            var d = a.ze;
            c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join();
            return b + c + "|" + m(a.url)
        }

        function c() { u.data.keys.length >= u.ZL && d() }

        function d() {
            var a = u.data.keys.length,
                b = Math.floor(a / 2);
            a > u.ZL && (b = Math.floor(a - u.ZL / 2));
            a = u.data.keys.slice(0, b);
            u.data.keys = u.data.keys.slice(b + 1);
            s.remove(a, function(a) { a && 3 === a.code && (q.Oi = !1) })
        }

        function e() {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.Qs;
            k();
            w.setItem(u.key, u.data, !0);
            f(a)
        }

        function f(a) {
            q.Oi && s && s.clear(function(b) {
                b && 3 === b.code && (q.Oi = !1);
                a()
            })
        }

        function h() {
            k();
            var a = w.getItem(u.key, !0);
            a && (a.vdataVer === u.data.vdataVer && a.apiVer === u.data.apiVer ? u.data = a : e())
        }

        function k() {
            u.data = { vdataVer: q.lf, apiVer: g.r.Gk, keys: [], config: {}, fsTiles: {} };
            u.pt = {}
        }

        function l(a) { a && (u.data.vdataVer = a, q.lf = a) }

        function m(a) { var b = "limg"; /flds=([^&]+)/.test(a) && (b = RegExp.$1); return b }

        function n(a) {
            if ("object" ===
                typeof a && null !== a) {
                var b = [];
                if (r.isArray(a))
                    if (Object.keys(a).length == a.length) b = a.map(function(a) { return n(a) });
                    else {
                        b.push("__arrayObject");
                        var c = {},
                            d;
                        for (d in a)(0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
                        b.push(c);
                        b.push(a.map(function(a) { return n(a) }))
                    }
                else if (r.kk(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a));
                else if (r.kk(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a));
                else
                    for (d in b = {}, a) a.hasOwnProperty(d) &&
                        (b[d] = n(a[d]));
                return b
            }
            return a
        }

        function p(a) {
            if ("object" === typeof a && null !== a) {
                var b = {};
                if (r.isArray(a))
                    if ("__Float32Array" === a[0]) b = new Float32Array(a[1]);
                    else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]);
                else if ("__arrayObject" === a[0]) {
                    b = p(a[2]);
                    a = a[1];
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
                } else b = a.map(function(a) { return p(a) });
                else
                    for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
                return b
            }
            return a
        }
        var q = g.l,
            r = g.a;
        if (!g.Pj && q.Oi) {
            var s = g.indexedDB,
                u = { ZL: 1E3, key: "_AMap_data.tileKeys" },
                v = [],
                w = {
                    getItem: function(a, b) {
                        var c = localStorage.getItem(a);
                        if (c && b) {
                            var d;
                            try { d = JSON.parse(c) } catch (e) { d = null }
                            c = d
                        }
                        return c
                    },
                    setItem: function(a, b, c) {
                        var d = b;
                        c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.Ypa).length && (b.Ypa = {}, d = JSON.stringify(b)));
                        try { localStorage.setItem(a, d) } catch (f) { e() }
                    }
                };
            g.Pj = {
                clear: e,
                get: function(c, d) {
                    function f(a) {
                        var b = { oS: l, y6: G, IFa: w, Vg: u.data.config };
                        a && z.length && (/\|limg/.test(z[0]) ? b.e6 = a.map(function(a) { return JSON.parse(a.data) }).filter(function(a) {
                            return a &&
                                a.key
                        }) : b.Pc = h(a));
                        d && d(null, b);
                        w.length && (l = [], G = [])
                    }

                    function h(a) {
                        var b = [];
                        m(c.url).split(",").forEach(function(c) {
                            a.forEach(function(a) {
                                if (a = JSON.parse(a.data[c])) {
                                    var d = a.Kg;
                                    a.Kg = new g.mr(d.z, d.x, d.y);
                                    a.Kg.T = d.T;
                                    b.push(a)
                                }
                            })
                        });
                        return b
                    }
                    var k = "FS" === c.type;
                    if (!q.Gv || !(k || q.Oi && 0 !== u.data.keys.length)) return d({ code: 1 });
                    var l = [],
                        w = [],
                        z = [],
                        G = [],
                        H = [];
                    c.nya.forEach(function(a) {
                        var d = !1,
                            e = b({ Pi: a.key, url: c.url, Qf: c.Qf, ja: c.o.ja, ze: c.ze });
                        k && (v.push(e), u.data.fsTiles[e] && (l.push(a), z.push(e), H.push({
                            data: p(u.data.fsTiles[e]),
                            tileKey: e
                        }), d = !0));
                        d || (q.Oi && r.ka(u.data.keys, e) ? (z.push(e), w.push(a)) : G.push(a))
                    });
                    if (k && 0 === w.length || 0 === z.length) return f(H);
                    k && H.length && H.forEach(function(a) {
                        a = r.indexOf(z, a.tileKey);
                        z.splice(a, 1)
                    });
                    s.get(z, { timeout: c.timeout || 1E3 }, function(b, c) {
                        if (b || c.length !== z.length) b && 3 === b.code ? q.Oi = !1 : e(), G = w, w = [], f(null);
                        else {
                            if (k)
                                for (var d = c.length - 1; 0 <= d; d--) {
                                    var h = c[d];
                                    h && h.data ? u.data.fsTiles[h.tileKey] = n(h.data) : G.push(w.splice(d, 1)[0])
                                }
                            l = w;
                            w = [];
                            f(c);
                            a(z)
                        }
                    });
                    (G.length || w.length) && f(H)
                },
                yw: function(a) {
                    a.Hb.forEach(function(c) {
                        c =
                            b({ Pi: c.key, url: a.url, Qf: a.Qf, ja: a.o.ja, ze: a.ze });
                        u.pt[c] && delete u.pt[c]
                    })
                },
                set: function(a, c) {
                    a.lf && a.lf !== u.data.vdataVer && (l(a.lf), e(), c && c({ code: 2 }));
                    !a.qd && a.Pc ? a.Pc.forEach(function(c) {
                        var d = b({ Pi: c.Pi, url: a.url, Qf: a.Qf, ja: a.o.ja, ze: a.ze });
                        if (q.Oi || r.ka(v, d)) {
                            var e = u.pt[d] || {};
                            e[c.Ed] = c.Qa;
                            u.pt[d] = e
                        }
                    }) : a.data && a.data.forEach(function(c) { var d = b({ Pi: c.key, url: a.url, Qf: a.Qf, ja: a.o.ja, ze: a.ze }); if (q.Oi || r.ka(v, d)) u.pt[d] = c.data });
                    u.data.config = { "x-vd-v": a["x-vd-v"], tv: a.tv, bgc: a.bgc }
                },
                flush: function() {
                    var a = !0;
                    return function() {
                        var b = this;
                        if (a) {
                            if (Object.keys(u.data.fsTiles).length)
                                for (var c in u.data.fsTiles) u.data.fsTiles.hasOwnProperty(c) && !r.ka(v, c) && delete u.data.fsTiles[c];
                            q.Oi ? s.count(function(a, c) { a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function() { b.sG(!0) })) : b.sG(!0)) }) : b.sG(!0);
                            a = !1
                        } else b.sG()
                    }
                }(),
                sG: function() {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1,
                        b = {},
                        d = [],
                        f = Object.keys(u.pt),
                        h = [];
                    f.length ? (f.forEach(function(a) {
                        var c = u.pt[a];
                        a.split("|").pop().split(",").every(function(a) {
                            return "limg" ===
                                a ? !0 : c && void 0 !== c[a]
                        }) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({ tileKey: a, data: c })), r.ka(v, a) && void 0 === u.data.fsTiles[a] && (u.data.fsTiles[a] = c)) : b[a] = c
                    }), d.length && (q.Oi ? s.add(d, function(a) { a ? 3 !== a.code ? e() : q.Oi = !1 : (u.data.keys = u.data.keys.concat(h), w.setItem(u.key, u.data, !0), c()) }) : w.setItem(u.key, u.data, !0)), u.pt = b) : (a && w.setItem(u.key, u.data, !0), c())
                }
            };
            h()
        }
    })();
    g.U = g.ca.extend({
        A: function(a, b, c) {
            var d = parseFloat(b),
                e = parseFloat(a);
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: LngLat(" + e + ", " + d + ")";
            !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
            this.Q = d;
            this.R = e;
            this.lng = Math.round(1E6 * e) / 1E6;
            this.lat = Math.round(1E6 * d) / 1E6
        },
        GR: function() { return g.a.vb(this.R, 6) },
        DR: function() { return g.a.vb(this.Q, 6) },
        add: function(a, b) { return new g.U(this.R + a.R, this.Q + a.Q, b) },
        $a: function(a, b) { return new g.U(this.R - a.R, this.Q - a.Q, b) },
        kd: function(a,
            b) { return new g.U(this.R / a, this.Q / a, b) },
        Md: function(a, b) { return new g.U(this.R * a, this.Q * a, b) },
        He: function(a) { return g.Et.distance(this, a) },
        offset: function(a, b) {
            if (isNaN(a) || isNaN(b)) return !1;
            var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.Q * Math.PI / 180)),
                c = this.R + 180 * c / Math.PI,
                d = 2 * Math.asin(Math.round(b) / 12756274);
            return new g.U(c, this.Q + 180 * d / Math.PI)
        },
        gb: function(a) { a = g.a.Ja(a); return a instanceof g.U ? 1E-9 >= Math.max(Math.abs(this.Q - a.Q), Math.abs(this.R - a.R)) : !1 },
        toString: function() {
            return g.a.vb(this.R,
                6) + "," + g.a.vb(this.Q, 6)
        },
        yl: function() { return [this.R, this.Q] },
        cb: function() {
            var a = this.controlPoints,
                b = new g.U(this.R, this.Q);
            a && (b.controlPoints = [].concat(a));
            return b
        }
    });
    g.U.Eqa = function(a, b, c) {
        c = c + 1 || Math.round(Math.abs(a.R - b.R));
        if (!c || 0.001 > Math.abs(a.R - b.R)) return [];
        var d = [],
            e = Math.PI,
            f = g.Nm.Ou,
            h = g.Nm.$va,
            k = Math.asin,
            l = Math.sqrt,
            m = Math.sin,
            n = Math.pow,
            p = Math.cos,
            q = Math.atan2,
            r = a.Q * f;
        a = a.R * f;
        var s = b.Q * f;
        b = b.R * f;
        for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f < c; f += 1) u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w * p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e)) :
            (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0));
        return d
    };
    g.U.Xb({ GR: "getLng", DR: "getLat", add: "add", $a: "subtract", kd: "divideBy", Md: "multiplyBy", He: "distance", offset: "offset", gb: "equals", toString: "toString" });
    g.me = g.ca.extend({
        A: function() {
            this.CLASS_NAME = "AMap.Bounds";
            var a = null,
                b = null;
            if (1 === arguments.length && arguments[0] instanceof Array) a = new g.U(arguments[0][0], arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0);
            else if (2 === arguments.length) a = g.a.Ja(arguments[0]), b = g.a.Ja(arguments[1]);
            else if (4 === arguments.length) a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]);
            else if (0 === arguments.length) a = new g.U(-180, -90), b = new g.U(180, 90);
            else throw "Invalid Object: Bounds(" +
                arguments.join(",") + ")";
            this.xc = a;
            this.oc = b
        },
        iv: function() { return this.xc },
        Py: function() { return this.oc },
        ek: function() { return new g.U(this.xc.R, this.oc.Q, !0) },
        No: function() { return new g.U(this.oc.R, this.xc.Q, !0) },
        contains: function(a) {
            var b = this.xc,
                c = this.oc,
                d;
            if (a instanceof g.rp) return this.eV().contains(a);
            a instanceof g.me ? (d = a.xc, a = a.oc) : d = a = g.a.Ja(a);
            var e = d.R,
                f = b.R,
                h = a.R,
                k = c.R;
            f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
            return d.Q >= b.Q && a.Q <= c.Q && e >= f && h <= k
        },
        ah: function(a) {
            var b = this.xc,
                c = this.oc,
                d = a.xc;
            a = a.oc;
            var e = a.R >= b.R && d.R <= c.R;
            return a.Q >= b.Q && d.Q <= c.Q && e
        },
        zi: function() { return new g.U(this.xc.R > this.oc.R ? (this.xc.R + this.oc.R + 360) / 2 % 360 : (this.xc.R + this.oc.R) / 2, (this.xc.Q + this.oc.Q) / 2) },
        extend: function(a) {
            this.xc.R = Math.min(this.xc.R, a.R);
            this.xc.Q = Math.min(this.xc.Q, a.Q);
            this.oc.R = Math.max(this.oc.R, a.R);
            this.oc.Q = Math.max(this.oc.Q, a.Q);
            return this
        },
        jza: function(a) { return this.extend(a.xc).extend(a.oc) },
        toString: function() { return this.xc.toString() + ";" + this.oc.toString() },
        cb: function() {
            return new g.me(this.xc.cb(),
                this.oc.cb())
        },
        gb: function(a) { return a instanceof g.me ? this.xc.gb(a.xc) && this.oc.gb(a.oc) : !1 },
        zj: function() { return Math.abs(this.oc.R - this.xc.R) },
        wj: function() { return Math.abs(this.xc.Q - this.oc.Q) },
        eV: function(a) {
            var b = [this.iv(), this.No(), this.Py(), this.ek()];
            a && b.push(this.iv());
            return new g.rp(b)
        },
        rya: function(a) { return new g.Yf(a.lc(this.ek(), 20), a.lc(this.No(), 20)) },
        yR: function(a, b) { return this.eV(b).yR(a) },
        vR: function(a) { return this.rya(a).zi() }
    });
    g.me.Xb({ iv: "getSouthWest", Py: "getNorthEast", ek: "getNorthWest", No: "getSouthEast", contains: "contains", ah: "intersects", zi: "getCenter", extend: "extend" });
    g.H = g.ca.extend({
        A: function(a, b, c) {
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
            this.x = c ? Math.round(a) : Number(a);
            this.y = c ? Math.round(b) : Number(b)
        },
        wf: function() { return this.x },
        se: function() { return this.y },
        add: function(a, b) { return new g.H(this.x + a.x, this.y + a.y, b) },
        $a: function(a, b) { return new g.H(this.x - a.x, this.y - a.y, b) },
        kd: function(a, b) { return new g.H(this.x / a, this.y / a, b) },
        Md: function(a, b) { return new g.H(this.x * a, this.y * a, b) },
        He: function(a) {
            var b = a.x - this.x;
            a = a.y - this.y;
            return Math.sqrt(b *
                b + a * a)
        },
        floor: function() { return new g.H(Math.floor(this.x), Math.floor(this.y)) },
        round: function() { return new g.H(this.x, this.y, !0) },
        gb: function(a) { return a instanceof g.H && this.x === a.x && this.y === a.y },
        cb: function(a) { return new g.H(this.x, this.y, a) },
        toString: function() { return this.x + "," + this.y },
        yl: function() { return [this.x, this.y] },
        length: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
        direction: function() {
            var a = this.x,
                b = this.y;
            if (0 === a && 0 === b) return null;
            if (0 === a) return 0 < b ? 90 : 270;
            var c = 180 *
                Math.atan(b / a) / Math.PI;
            return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
        },
        Ku: function(a) {
            var b = this.length(),
                c = a.length();
            return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
        },
        loa: function(a) {
            var b = this.length(),
                c = a.length();
            return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
        },
        toFixed: function(a) {
            this.x = g.a.vb(this.x, a);
            this.y = g.a.vb(this.y, a);
            return this
        }
    });
    g.H.Xb({ wf: "getX", se: "getY", add: "add", $a: "subtract", kd: "divideBy", Md: "multiplyBy", He: "distance", gb: "equals", toString: "toString" });
    g.xd = g.ca.extend({
        A: function(a, b, c) {
            if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
            this.width = c ? Math.round(a) : Number(a);
            this.height = c ? Math.round(b) : Number(b)
        },
        cb: function() { return new g.xd(this.width, this.height) },
        zj: function() { return this.width },
        wj: function() { return this.height },
        PE: function() { return new g.H(this.zj(), this.wj()) },
        contains: function(a) { return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height) },
        gb: function(a) {
            return a instanceof g.xd && this.width ===
                a.width && this.height === a.height
        },
        toString: function() { return this.zj() + "," + this.wj() }
    });
    g.xd.Xb({ zj: "getWidth", wj: "getHeight", toString: "toString" });
    g.rp = g.ca.extend({
        A: function(a) {
            this.CLASS_NAME = "AMap.ArrayBounds";
            a = g.a.Ja(a);
            this.path = [];
            for (var b = 0; b < a.length; b += 1) this.path.push([a[b].R, a[b].Q]);
            this.bounds = this.Rd = a
        },
        contains: function(a, b) {
            if (a instanceof g.rp) return g.Et.isRingInRing(a.path, this.path);
            a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.R, a.Q]);
            return g.wd.Sd(a, this.path, b)
        },
        toBounds: function() { for (var a = new g.me(180, 90, -180, -90), b = this.Rd.length - 1; 0 <= b; b -= 1) a.extend(this.Rd[b]); return a },
        yR: function(a) {
            for (var b = [], c = 0; c <
                this.path.length; c += 1) b[c] = a.lc(this.path[c], 20);
            return b
        },
        vR: function(a) { return this.toBounds().vR(a) },
        zi: function() { return this.toBounds().zi() },
        toString: function() { return this.path.join(";") }
    });
    g.rp.Xb({ contains: "contains", zi: "getCenter" });
    g.Y$ = g.rp.extend({
        A: function(a) {
            this.CLASS_NAME = "AMap.CoordsBounds";
            this.path = a;
            if (a[0] instanceof g.H) { this.path = []; for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y]) }
            this.bounds = this.Rd = a
        },
        toString: function() { return this.path.join(";") }
    });
    g.Yf = g.ca.extend({
        A: function() {
            if (2 === arguments.length) this.kc = arguments[0], this.Vd = arguments[1];
            else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
                var a = arguments[0] instanceof Array ? arguments[0] : arguments;
                this.kc = new g.H(a[0], a[1]);
                this.Vd = new g.H(a[2], a[3])
            } else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
        },
        zi: function(a) { return new g.H((this.kc.x + this.Vd.x) / 2, (this.kc.y + this.Vd.y) / 2, a) },
        contains: function(a) {
            var b;
            a instanceof g.Yf ? (b = a.kc, a = a.Vd) :
                b = a;
            return b.x > this.kc.x && a.x < this.Vd.x && b.y > this.kc.y && a.y < this.Vd.y
        },
        zj: function() { return this.Vd.x - this.kc.x },
        wj: function() { return this.Vd.y - this.kc.y },
        ah: function(a, b) {
            b || 0 === b || (b = 20);
            var c = this.kc,
                d = this.Vd,
                e = a.kc,
                f = a.Vd,
                h = f.y >= c.y - b && e.y <= d.y + b;
            return f.x >= c.x - b && e.x <= d.x + b && h
        },
        toString: function() { return this.kc + ";" + this.Vd },
        cb: function() { return new g.Yf(this.kc.cb(), this.Vd.cb()) }
    });
    g.I = {};
    g.I.WP = function(a) { for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.I.LI(b, a[c]); return b };
    g.I.U1 = function(a, b, c) {
        var d = Math.min.apply(null, a);
        a = Math.max.apply(null, a);
        var e = Math.min.apply(null, b);
        b = Math.max.apply(null, b);
        return g.I.hoa(d, a, e, b, c)
    };
    g.I.buffer = function(a, b) {
        a[0] -= b;
        a[1] -= b;
        a[2] += b;
        a[3] += b
    };
    g.I.cb = function(a) { return a.slice() };
    g.I.Sd = function(a, b) { return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3] };
    g.I.I2 = function(a, b) { return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3] };
    g.I.fDa = function() { return [Infinity, Infinity, -Infinity, -Infinity] };
    g.I.hoa = function(a, b, c, d, e) { return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d] };
    g.I.empty = function(a) {
        a[0] = a[1] = Infinity;
        a[2] = a[3] = -Infinity;
        return a
    };
    g.I.gb = function(a, b) { return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3] };
    g.I.extend = function(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[2] > a[2] && (a[2] = b[2]);
        b[1] < a[1] && (a[1] = b[1]);
        b[3] > a[3] && (a[3] = b[3])
    };
    g.I.LI = function(a, b) {
        b[0] < a[0] && (a[0] = b[0]);
        b[0] > a[2] && (a[2] = b[0]);
        b[1] < a[1] && (a[1] = b[1]);
        b[1] > a[3] && (a[3] = b[1])
    };
    g.I.ZDa = function(a) { return [a[0], a[1]] };
    g.I.$Da = function(a) { return [a[2], a[1]] };
    g.I.zi = function(a) { return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2] };
    g.I.lEa = function(a, b, c, d, e) {
        var f = b * d[0] / 2;
        d = b * d[1] / 2;
        b = Math.cos(c);
        c = Math.sin(c);
        f = [-f, -f, f, f];
        d = [-d, d, -d, d];
        var h, k, l;
        for (h = 0; 4 > h; h += 1) k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
        return g.I.U1(f, d, e)
    };
    g.I.wj = function(a) { return a[3] - a[1] };
    g.I.zEa = function(a) { return [a[2] - a[0], a[3] - a[1]] };
    g.I.DEa = function(a) { return [a[0], a[3]] };
    g.I.EEa = function(a) { return [a[2], a[3]] };
    g.I.zj = function(a) { return a[2] - a[0] };
    g.I.ah = function(a, b) { return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1] };
    g.I.xh = function(a) { return a[2] < a[0] || a[3] < a[1] };
    g.I.normalize = function(a, b) { return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])] };
    g.I.fHa = function(a, b) {
        var c = (a[2] - a[0]) / 2 * (b - 1),
            d = (a[3] - a[1]) / 2 * (b - 1);
        a[0] -= c;
        a[2] += c;
        a[1] -= d;
        a[3] += d
    };
    g.I.touches = function(a, b) { return g.I.ah(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1]) };
    g.I.transform = function(a, b, c) {
        a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
        b(a, a, 2);
        return g.I.U1([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
    };
    g.me.Gb({
        A: function() {
            var a = g.me.prototype.A;
            return function() {
                a.apply(this, arguments);
                this.southwest = this.xc;
                this.northeast = this.oc
            }
        }(),
        extend: function() {
            var a = g.me.prototype.extend;
            return function() {
                a.apply(this, arguments);
                this.xc.lng = this.xc.R;
                this.xc.lat = this.xc.Q;
                this.oc.lng = this.oc.R;
                this.oc.lat = this.oc.Q;
                return this
            }
        }()
    });
    g.LF = g.ca.extend({
        A: function(a, b, c, d) {
            this.cX = a;
            this.sX = b;
            this.GX = c;
            this.bY = d
        },
        transform: function(a, b) { return this.m1(a.cb(), b) },
        m1: function(a, b) {
            b = b || 1;
            a.x = b * (this.cX * a.x + this.sX);
            a.y = b * (this.GX * a.y + this.bY);
            return a
        },
        lza: function(a, b) { b = b || 1; return new g.H((a.x / b - this.sX) / this.cX, (a.y / b - this.bY) / this.GX) }
    });
    g.xp = g.ca.extend({
        A: function(a) {
            this.YL = a.MAX_LATITUDE || 85.0511287798;
            a.project && a.unproject && (this.lc = a.project, this.Zh = a.unproject)
        }
    });
    g.xp.pW = { lc: function(a) { return new g.H(a.R, a.Q) }, Zh: function(a, b) { return new g.U(a.x, a.y, b) } };
    g.xp.iba = new g.xp({
        MAX_LATITUDE: 85.0511287798,
        project: function(a) {
            var b = Math.PI / 180,
                c = this.YL,
                c = Math.max(Math.min(c, a.Q), -c);
            a = a.R * b;
            b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
            return new g.H(a, b, !1)
        },
        unproject: function(a, b) { var c = 180 / Math.PI; return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b) }
    });
    g.xp.tW = {
        YL: 85.0840591556,
        kM: 6356752.3142,
        jM: 6378137,
        lc: function(a) {
            var b = Math.PI / 180,
                c = this.YL,
                d = Math.max(Math.min(c, a.Q), -c),
                e = this.jM,
                c = this.kM;
            a = a.R * b * e;
            b *= d;
            e = c / e;
            e = Math.sqrt(1 - e * e);
            d = e * Math.sin(b);
            d = Math.pow((1 - d) / (1 + d), 0.5 * e);
            b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
            b = -c * Math.log(b);
            return new g.H(a, b)
        },
        Zh: function(a, b) {
            for (var c = 180 / Math.PI, d = this.jM, e = this.kM, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
                l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
            return new g.U(f, h * c, b)
        }
    };
    g.bi = {};
    g.bi.qF = {
        ND: function(a, b) {
            var c = this.Sf.lc(a),
                d = this.scale(b);
            return this.UE.m1(c, d)
        },
        lE: function(a, b, c) {
            b = this.scale(b);
            a = this.UE.lza(a, b);
            return this.Sf.Zh(a, c)
        },
        lc: function(a) { return this.Sf.lc(a) },
        scale: function(a) { return 256 << a },
        lq: function(a) { return 12756274 * Math.PI / (256 * Math.pow(2, a)) }
    };
    g.bi.NL = g.extend({}, g.bi.qF, { code: "EPSG:3857", Sf: g.xp.iba, UE: new g.LF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5), lc: function(a) { return this.Sf.lc(a).Md(6378137) } });
    g.bi.$V = g.extend({}, g.bi.qF, { code: "EPSG:3395", Sf: g.xp.tW, UE: function() { var a = g.xp.tW; return new g.LF(0.5 / (Math.PI * a.jM), 0.5, -0.5 / (Math.PI * a.kM), 0.5) }() });
    g.bi.aW = g.extend({}, g.bi.qF, { code: "EPSG:4326", Sf: g.xp.pW, UE: new g.LF(1 / 360, 0.5, -1 / 360, 0.25) });
    g.bi.RAa = g.extend({}, g.bi.qF, { Sf: g.xp.pW, UE: new g.LF(1, 0, 1, 0) });
    g.VJ = {
        lc: function(a, b) { a = g.a.Ja(a); return this.oj.ND(a, b || this.get("zoom")) },
        Zh: function(a, b, c) { return this.oj.lE(a, b || this.get("zoom"), c) },
        gta: function(a, b) { return this.lc(a, b) },
        WDa: function(a, b) { return this.Zh(a, b) },
        Yp: function(a, b, c) {
            g.c.add(this, "containerToLngLat");
            var d = this.get("size").PE().kd(2);
            if (a.gb(d) && !c) return this.get("center");
            a = this.Bg(a, b, c);
            return this.Nd(a)
        },
        Ks: function(a, b) {
            g.c.add(this, "lngLatToContainer");
            var c = 0;
            b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
                b);
            var d = this.Bb(a);
            return this.le(d, null, c)
        },
        Bb: function(a) { a = g.a.Ja(a); return this.lc(a, 20) },
        Nd: function(a) { return a ? this.Zh(a, 20) : a },
        OJ: function(a) { a = g.a.Ja(a); return this.lc(a, 20).$a(g.a.dc) },
        f6: function(a, b) {
            b || (a = g.a.Ja(a));
            var c = [],
                d = !1;
            void 0 === a[0].length && (d = !0);
            for (var c = [], e = 0, f = a.length; e < f; e += 1)
                if (d) {
                    var h = this.lc(a[e], 20).$a(g.a.dc);
                    c[e] = [h.x, h.y]
                } else c[e] = this.f6(a[e], !0);
            return c
        },
        bqa: function(a) { return this.Zh(a.add(g.a.dc), 20) },
        XDa: function(a) { return this.le(a.add(g.a.dc)) },
        eEa: function(a) {
            return a ?
                this.lc(this.get("center"), a) : this.get("centerPixel")
        },
        zBa: function(a) { return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).kd(0.14929107086948487) },
        n7: function(a) { return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y) }
    };
    B.OF = g.ca.extend({
        ka: [g.va, g.$e],
        w: { center: new g.U(116.397128, 39.916527), zoom: 13, rotation: 0, crs: "EPSG3857" },
        A: function(a) {
            this.CLASS_NAME = "AMap.View2D";
            g.c.ya(this, a);
            a = a || {};
            a.center && (a.center = g.a.Ja(a.center));
            this.w = a
        }
    });
    B.Rb = g.ca.extend({
        ka: [g.va, g.$e, g.VJ],
        w: {
            features: "all",
            showLabel: !0,
            dragEnable: !0,
            showIndoorMap: g.l.ba ? !1 : !0,
            lang: "zh_cn",
            keyboardEnable: !0,
            doubleClickZoom: !0,
            scrollWheel: !0,
            zoomEnable: !0,
            jogEnable: !0,
            continuousZoomEnable: !0,
            resizeEnable: !1,
            animateEnable: !0,
            rotateEnable: !1,
            labelzIndex: 99,
            showFog: !0,
            touchZoom: !0,
            zooms: [3, g.l.ba ? g.l.Kc ? 19 : 20 : 18],
            defaultCursor: "",
            limitBounds: null,
            logoUrl: g.r.Fb + "/theme/v1.3/logo@1x.png",
            logoUrlRetina: g.r.Fb + "/theme/v1.3/logo@2x.png",
            copyright: "\x3c!--v1.4.15--\x3e &copy " +
                (new Date).getFullYear() + " AutoNavi ",
            isHotspot: !g.l.ba,
            baseRender: g.l.N1,
            overlayRender: g.l.ava,
            mapStyle: "amap://styles/normal",
            showBuildingBlock: g.l.Qf,
            crs: "EPSG3857",
            rotation: 0,
            pitch: 0,
            yaw: 0,
            scale: 1,
            center: new g.U(116.397128, 39.916527),
            zoom: 13,
            detectRetina: !0,
            pitchEnable: !1,
            buildingAnimation: !1,
            maxPitch: 83,
            turboMode: !0,
            preloadMode: !1,
            workerMode: !0
        },
        poiOnAMAP: function(a) {
            g.c.add(this, "poiOnAMAP");
            var b = {},
                c = g.a.Ja(a.location);
            b.id = a.id;
            c && (b.y = c.Q, b.x = c.R);
            b.name = a.name;
            b.address = a.address;
            g.ci.mt(g.ci.o4(b))
        },
        detailOnAMAP: function(a) {
            g.c.add(this, "detailOnAMAP");
            var b = {},
                c = g.a.Ja(a.location);
            b.id = a.id;
            c && (b.y = c.Q, b.x = c.R);
            b.name = a.name;
            g.ci.mt(g.ci.m4(b))
        },
        setLabelzIndex: function(a) { g.c.add(this, "setLabelzIndex"); return this.set("labelzIndex", a) },
        getLabelzIndex: function() { return this.get("labelzIndex", null, !0) },
        setVectorMapForeign: function(a) {
            if (g.l.Vp) {
                var b = this.S6(a);
                a = b[0];
                var c = b[1];
                this.set("name_field", c, !0);
                this.set("vectorMapForeign", a, !0);
                var d = this,
                    b = [];
                a && (b.push("gridmap"), b.push("MVT", "vectorForeign"),
                    b.push("labelcanvas"));
                g.sb.Ig(b, function() { d.j6(function() { d.map && (d.map.Gi = !0, d.map.GG && d.map.GG(), d.map.Te && d.map.Te instanceof g.Rb.DF && d.map.Te.ee && d.map.Te.ee.S && (d.map.Te.ee.S.gI(), d.map.Te.ee.S.D6 = c, d.map.Te.ee.S.reload()), d.set("display")) }) })
            }
        },
        setMapStyle: function(a) {
            g.c.add(this, "setMapStyle");
            a = a || "normal"; - 1 === a.indexOf("amap://styles/") ? g.r.hK[a] ? this.set("styleUrl", "amap://styles/" + g.r.hK[a]) : this.set("styleUrl", "") : this.set("styleUrl", a);
            this.dT()
        },
        getMapStyle: function() {
            return this.get("styleUrl") ||
                this.get("mapStyle", null, !0)
        },
        getFeatures: function() { return this.get("features", null, !0) },
        setFeatures: function(a) {
            g.c.add(this, "setFeatures");
            this.set("features", a)
        },
        setLang: function(a) { g.c.add(this, "setLang", a); "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a), this.ik && this.ik.t8(this)) },
        getLang: function() { return this.get("lang", null, !0) },
        setCity: function(a, b) {
            g.c.add(this, "setCity");
            var c = this;
            (new g.jb.zb(g.r.Yd + "/v3/config/district?subdistrict=0&extensions=all&key=" +
                g.r.key + "&s=rsv3&output=json&keywords=" + a, { callback: "callback" })).h("complete", function(d) {
                var e = d.districts;
                if (e && e.length) {
                    d = e[0];
                    /[^\w]+/.test(a) && (e = g.a.find(e, function(b) { return b.name === a })) && e !== d && (d = e);
                    try {
                        var f = d.center.split(","),
                            h;
                        switch (d.level) {
                            case "city":
                                h = 10;
                                break;
                            case "province":
                                h = 7;
                                break;
                            case "district":
                                h = 12;
                                break;
                            case "country":
                                h = 4;
                                break;
                            default:
                                h = 12
                        } - 1 !== d.name.indexOf("\u5e02") && (h = 10);
                        c.D = !0;
                        c.setZoomAndCenter(h, new g.U(f[0], f[1]), !0);
                        c.D = !1;
                        b && b.call(c, f, h)
                    } catch (k) {}
                }
            }, this)
        },
        getScreenShot: function(a, b) { g.c.add(this, "getScreenShot"); return this.map && g.l.jl ? this.map.y4(a, b) : "" },
        getCity: function(a, b) {
            g.c.add(this, "getCity");
            var c = g.r.Yd + "/v3/geocode/regeo?&extensions=&&key=" + g.r.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
            (new g.jb.zb(c, { callback: "callback", gy: !0, Ed: "REGEO" })).h("complete", function(b) {
                b = b.regeocode.addressComponent;
                a({
                    province: b.province,
                    city: b.city instanceof Array ? "" : b.city,
                    citycode: b.citycode instanceof Array ? "" : b.citycode,
                    district: b.district instanceof
                    Array ? "" : b.district
                })
            }, this)
        },
        A: function(a, b) {
            b = g.extend({}, b);
            this.id = g.a.yb(this);
            this.CLASS_NAME = "AMap.Map";
            g.c.ya(this, b);
            this.D = !0;
            b = b || {};
            b.mapStyle && g.r.hK[b.mapStyle] && (b.mapStyle = "amap://styles/" + g.r.hK[b.mapStyle]);
            b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
            b.bgColor && g.extend(g.r.De, b.bgColor);
            b.maxPitch && (b.maxPitch = Math.min(this.w.maxPitch, Math.max(b.maxPitch, 0)));
            b.pitch && (b.pitch = Math.min(b.maxPitch ||
                this.w.maxPitch, Math.max(b.pitch, 0)));
            "3D" !== b.viewMode && (b.pitch = 0);
            g.r.Ur = b.buildingColor || null;
            b.mobile && (g.l.ba = !0);
            b.noPoi && (g.r.mua = !0);
            b.editEnable = g.r.WQ ? b.editEnable : !1;
            b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1);
            void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
            "3D" === b.viewMode && g.l.op && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
            this.uq = !!b.enableSocket;
            b.server && (g.r.Yd = b.server);
            b.vdataUrl && (g.r.AL = b.vdataUrl);
            if ("string" === typeof a) { if (a = this.K = document.getElementById(a), !a) return } else "DIV" ===
                a.tagName && (this.K = a);
            if (this.K.GM) {
                var c = this.K.GM;
                c.D = !0;
                c.destroy();
                c.D = !1
            }
            g.Be.mf.start({ id: this.id, K: this.K });
            this.K.GM = this;
            var c = this.w.zooms[1],
                d = this.w.zooms[0];
            b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g.l.Kc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
            b.forceZooms && (b.zooms = b.forceZooms);
            b = this.bna(b);
            c = this.getSize(!0);
            b.center && (b.center = g.a.Ja(b.center));
            this.oj = this.ioa(b.crs || this.w.crs, b.center || this.w.center);
            this.hma(c, b);
            d = b.lang;
            "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
            g.g.sg || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
            b.preloadMode = !1;
            g.l.MS ? !1 !== b.workerMode && (B.Rb.Ot ? (b.workerMode = !1, B.Rb.Ot++) : B.Rb.Ot = 1) : b.workerMode = !1;
            b.layers && (d = b.layers, delete b.layers, b.layers = d);
            b.baseRender = b.baseRender || g.l.N1;
            b.forceVector && (b.baseRender = g.l.Qf ? "vw" : "v");
            b.disableVector && (b.baseRender = "d");
            "dom" === b.renderer && (b.baseRender = "d", b.overlayRender = "d");
            c = Math.max(c.width, c.height);
            g.l.ja && (c *= Math.min(2, window.devicePixelRatio ||
                1));
            "vw" === b.baseRender && c > g.l.Mta && (b.baseRender = "dv");
            c = b.vectorMapForeign;
            "d" == b.baseRender && c && (b.vectorMapForeign = !1);
            c && !g.l.Vp && (b.vectorMapForeign = !1);
            c = this.S6(b.vectorMapForeign);
            b.vectorMapForeign = c[0];
            b.name_field = c[1];
            b.turboMode = !1;
            g.a.tb(this, b);
            this.jf(this.w);
            "rotateEnable" in b || "3D" !== b.viewMode || !g.l.op || this.set("rotateEnable", !0);
            "pitchEnable" in b || "3D" !== b.viewMode || !g.l.op || this.set("pitchEnable", !0);
            c = this.get("zoom", null, !0);
            "3D" === this.get("viewMode") && g.l.op || (c = Math.round(c));
            d = this.get("zooms");
            c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
            this.set("zoom", c);
            this.w.zoom = c;
            this.koa(this.w);
            this.iQ();
            var e = this;
            this.jf({ overlays: [], infos: {}, controls: {} });
            var f = [];
            b.vectorMapForeign && f.push("gridmap");
            b.vectorMapForeign && g.l.Vp && f.push("MVT", "vectorForeign");
            b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
            "3D" === b.viewMode && g.l.op && f.push("Map3D");
            g.l.jl && (b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push("labelcanvas");
            b.editEnable && f.push("edit");
            g.l.jl && (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
            this.ja = g.l.ja && this.get("detectRetina");
            this.n$(b);
            this.D = !1;
            e = this;
            this.xta(function() {
                e.j6(function() {
                    g.sb.Ig(f, function() {
                        if (!e.get("destroy")) {
                            var b = new g.Rb(a, e);
                            if (g.Ve) {
                                var c = (g.Ve[0] || g.Ve).stylemaps["50001:1"].browserStyle[0].split("&");
                                b.WF = [c[0], c[4]]
                            }
                            b.bf("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
                            b.h("complete", function() {
                                var a = {};
                                b.J && "3D" == b.J.type && (a.canvas = b.J.xa, a.gl = b.J.da);
                                this.q("complete",
                                    a)
                            }, e, !0);
                            b.oj = e.oj;
                            e.bf(["zoomSlow", "panTo", "targetLevel", "render"], b);
                            b.bf(["size", "bounds"], e);
                            e.loaded = !0;
                            e.q("coreMapCreated");
                            g.l.jl && e.Jla();
                            e.D = !0;
                            "3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.Sw.PV([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.Sw.ZV([0, -1, 1], [1, 1, 1], 0.1)));
                            e.D = !1
                        }
                    })
                })
            })
        },
        S6: function(a) {
            if (a) {
                if ("string" == typeof a && "style_" === a.substr(0, 6)) return [a];
                switch (a) {
                    case !0:
                    case "Chinese_Simplified":
                        return ["style_zh_cn"];
                    case "English":
                        return ["style_en"];
                    case "Local":
                        return ["style_local"];
                    case "Chinese_Traditional":
                        return ["style_en", ["coalesce", "{name_zh-Hant}", "{name}"]];
                    default:
                        return ["style_zh_cn"]
                }
            } else return [!1]
        },
        j6: function(a) {
            try {
                var b = this.get("vectorMapForeign");
                if (b)
                    if (g.TJ = 0, g.SJ = 0, "string" == typeof b && "style_" == b.substr(0, 6)) {
                        var c = this,
                            d, e = b.slice(6);
                        32 == e.length ? (c.is = !0, g.r.Spa = g.r.VI + "style_local/", d = g.r.vc + "://restapi.amap.com/v4/sdk/map/styles?styleid=" + e + "&key=" + g.r.key + "&sdkType=abroad_js_json&s=rsv3", d += "&platform=JS&logversion=2.0", d += "&appname=" + g.r.Sp, d += "&csid=" +
                            g.a.fF(), d += "&sdkversion=" + g.r.vo) : (c.is = !1, g.r.Spa = g.r.VI + b + "/", d = g.r.Fb + "/styles/foreign/web_v8_" + b + ".json");
                        var f = new g.jb.XMLHttpRequest(d, { qU: "application/json", responseType: "json" });
                        f.h("complete", function(b) {
                            if (b && b.data && !b.data.DDa) {
                                if (b.data.style) b = b.data;
                                else if ("string" === typeof b.data) b = JSON.parse(b.data);
                                else {
                                    c.set("vectorMapForeign", !1);
                                    c.is = !1;
                                    a();
                                    return
                                }
                                var d = b.hole;
                                if (d) {
                                    g.oy = [];
                                    for (var e = 0, f = d.length; e < f - 1; e += 2) {
                                        var h = c.lc([d[e + 1], d[e]], 16);
                                        g.oy.push([h.x >> 0, h.y >> 0])
                                    }
                                }(d = b.style) &&
                                d.layers && (g.Fta = d.layers, b.zoomlevel && (g.TJ = b.zoomlevel[0], g.SJ = b.zoomlevel[1]))
                            } else c.is = !1, c.set("vectorMapForeign", !1);
                            a()
                        }, this);
                        f.h("error", function() {
                            c.is = !1;
                            c.set("vectorMapForeign", !1);
                            a()
                        }, this)
                    } else this.is = !1, this.set("vectorMapForeign", !1), a();
                else this.is = !1, this.set("vectorMapForeign", !1), a()
            } catch (h) { this.is = !1, this.set("vectorMapForeign", !1), a() }
        },
        xta: function(a) {
            function b() {
                var a = AMap.anole,
                    b = {},
                    c = [],
                    d = 0,
                    e = void 0;
                if (a) {
                    for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""),
                            a = 0, f = e.length; a < f; a++) void 0 === b[e[a]] && (b[e[a]] = d++, c.push(e[a]));
                    c.reverse();
                    d = 0;
                    for (a = e.length; d < a; d++) e[d] = c[b[e[d]]];
                    a = e.join("");
                    g.Ve = eval(a);
                    delete AMap.anole
                }
            }
            if (g.l.Ie || g.Ve) a();
            else {
                var c = !0;
                if (window.__AMapStyleSource) c = !1;
                else try {
                    var d = JSON.parse(localStorage.getItem("_AMap_anole"));
                    d && d.version === g.l.lf && d.script ? eval(d.script) : c = !1
                } catch (e) { c = !1 }
                if (c) b(), a();
                else {
                    var f = document.createElement("script");
                    f.hDa = "anonymous";
                    f.id = "amap_anole_js";
                    f.src = window.__AMapStyleSource || g.r.vc + "://vdata.amap.com/style?v=" +
                        g.r.vo + "&key=" + g.r.key + "&mapstyle=normal";
                    c = document;
                    (c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
                    f.onload = function() {
                        if (!g.Ve) {
                            if (!window.__AMapStyleSource && g.l.Gv) try {
                                var c = { version: g.l.lf, script: "AMap['anole']=" + JSON.stringify(AMap.anole) };
                                localStorage.setItem("_AMap_anole", JSON.stringify(c))
                            } catch (d) {}
                            b()
                        }
                        a();
                        f.parentNode.removeChild(f)
                    }
                }
            }
        },
        getViewMode_: function() { return this.view.type },
        hqa: function(a, b, c) {
            var d = new g.U(a[4], a[5]);
            if ((a = new g.me(a[0], a[1], a[2], a[3])) && b &&
                d) {
                for (var e = c[1]; e > c[0]; e -= 1) {
                    var f = this.lc(a.xc, e),
                        h = this.lc(a.oc, e);
                    if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
                }
                return [d, Math.min(e + 1, c[1])]
            }
            return null
        },
        hma: function(a, b) {
            if (!(b && b.center && b.zoom)) {
                var c = this.hqa(g.r.Rd, a, b.zooms);
                b.center = b.center || c && c[0];
                "number" !== typeof b.zoom && (b.zoom = c && c[1])
            }
        },
        ioa: function(a, b) {
            if (b instanceof g.U) {
                if ("string" === typeof a) {
                    switch (a) {
                        case "EPSG3395":
                            return g.bi.$V;
                        case "EPSG4326":
                            return g.bi.aW
                    }
                    return g.bi.NL
                }
                if (a.pointToLngLat && a.lngLatToPoint) return {
                    lE: a.pointToLngLat,
                    ND: a.lngLatToPoint,
                    lq: a.getResolution
                };
                throw "illegal projection";
            }
            var c = this.get("zoom", null, !0);
            return { lq: function(a) { return Math.pow(2, c - a) }, ND: function() {}, lE: function() {} }
        },
        Dxa: function(a, b) {
            this.ax && this.ax.stop();
            var c = ["pitch", "rotation", "zoom", "center"],
                d = {},
                e = !1,
                f;
            for (f in a)
                if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
                    var h = this.get(f);
                    void 0 === h || h === a[f] || h.gb && h.gb(a[f]) || (d[f] = this.get(f), e = !0)
                }
            e && (this.ax = new g.Mj(d, a, null, 0), this.ax.transition = function(a, c, e) {
                e /= b || 300;
                if (1 <= e) return c;
                var f = {},
                    h;
                for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].$a(a[h]).Md(e)) : a[h] + (c[h] - a[h]) * e);
                return f
            }, this.ax.Hq = function(b) { b === a && (this.ax.stop(), this.Fd = null); for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.D = !0, this.setCenter(b[c], !0), this.D = !1) : this.set(c, b[c])) }, this.ax.Nn(this))
        },
        koa: function(a) {
            "3D" === this.get("viewMode") && g.l.op ? (this.set("baseRender", "vw"), this.view = new g.uM(this, a)) : this.view = new g.OF(this, a);
            this.h5()
        },
        h5: function() {
            this.Di = "d" < this.get("baseRender") ||
                "3D" === this.view.type
        },
        featuresChanged: function() { this.iQ() },
        dT: function() {
            this.iQ();
            this.LU()
        },
        LU: function() {
            if (this.tm) {
                var a = !0;
                this.D = !0;
                var b = this.getMapStyle();
                if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
                for (var b = this.getLayers(), c = this.D = !1, d = 0, e = b.length; d < e; d += 1) {
                    if (b.hasOwnProperty(d) && "AMap.IndoorMap" === b[d].CLASS_NAME && b[d] !== this.tm) { a = !1; break }
                    b[d].tq && b[d].tq() && b[d].get("visible") && (c = !0)
                }(a = c && a) && this.tm.getMap() !== this && this.tm.setMap(this);
                this.tm.set("visible", a)
            }
        },
        iQ: function() {
            this.n$();
            if (this.view && "3D" !== this.view.type) {
                var a = this.get("baseRender");
                if (a && !("dv" < a)) {
                    var b = this.get("features", null, !0);
                    this.D = !0;
                    var c = this.getMapStyle();
                    this.D = !1;
                    var d = this.get("editEnable");
                    b && c && (g.l.Vp && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.yT = a) : this.yT && (this.set("baseRender", this.yT), this.yT = null));
                    this.h5()
                }
            }
        },
        Jla: function() {
            var a = this;
            !a.tm && a.K && (a.indoorMap = a.tm = new AMap.IndoorMap({ innerLayer: !0 }),
                a.LU(), g.a.Yc(function() {
                    a.q("indoor_create", { target: a });
                    a.set("display")
                }))
        },
        layersChanged: function() {
            this.D = !0;
            var a = this.getLayers();
            this.bK = this.D = !1;
            for (var b = 0; b < a.length; b += 1) a[b].D = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].D = !1, a[b].bK && (this.bK = !0);
            this.LU()
        },
        getMapNumber: function() { if (this.map) return this.map.sE() },
        getAdcode: function() { g.c.add(this, "getAdcode"); return g.r.Hla },
        n$: function() {
            function a() {
                var a = !1;
                g.a.Tb(b.w.layers, function(b) {
                    if (b.HG && b.constructor === B.o.qb) return a = !0, !1
                }, b);
                if (g.a.ka(["d", "dv"], b.get("baseRender")) || !g.a.ka(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
                return a
            }
            if (!this.X7) {
                var b = this,
                    c = a(),
                    d = this.get("rasterLayer");
                if (d && !c) this.vk(d), this.set("rasterLayer", void 0);
                else if (!d && c && this.get("layers")) {
                    d = new B.o.qb({ innerLayer: !0, map: this, uk: !0, zIndex: 0 });
                    d.zsa = !0;
                    if (this.w.layers) {
                        var e = null;
                        g.a.Tb(this.w.layers, function(a) {
                            a instanceof
                            B.o.qb && a.HG && (null === e || a.get("zIndex") > e.get("zIndex")) && (e = a)
                        });
                        e && d.bf(["zIndex", "opacity", "zooms", "visible"], e)
                    }
                    this.set("rasterLayer", d, !0)
                }
            }
        },
        bna: function(a) {
            a || (a = {});
            if (a.hasOwnProperty("defaultLayer")) {
                a.layers = [a.defaultLayer];
                var b = a.defaultLayer;
                b.MP = !0;
                this.set("defaultLayer", b, !0)
            }
            a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new B.o.qb({ innerLayer: !0 }), a.layers = [b], b.MP = !0, this.set("defaultLayer", b, !0));
            if (b = a.view) b.w.rotation && (a.rotation = b.w.rotation),
                b.w.center && (a.center = b.w.center), b.w.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.w.zoom))), b.w.crs && (a.crs = b.w.crs);
            a.level && !a.zoom && (a.zoom = a.level);
            return a
        },
        setLimitBounds: function(a) {
            g.c.add(this, "setLimitBounds");
            a instanceof g.rp && (a.D = !0, a = a.toBounds(), a.D = !1);
            a instanceof g.me || (a = null);
            this.set("limitBounds", a)
        },
        clearLimitBounds: function() {
            g.c.add(this, "clearLimitBounds");
            this.set("limitBounds", null)
        },
        getLimitBounds: function() {
            g.c.add(this, "getLimitBounds");
            return this.get("limitBounds",
                null, !0)
        },
        SH: function(a) {
            var b = this.get("layers");
            if (!(0 <= g.a.indexOf(b, a)) && (b.push(a), this.set("layers", b), a.xB)) {
                a = a.getLayers();
                for (var b = -1, c = a.length; ++b < c;) {
                    var d = a[b];
                    d instanceof B.o.Yb || !d.setMap || d.setMap(this)
                }
            }
        },
        sC: function(a) {
            var b = this.get("overlays");
            0 <= g.a.indexOf(b, a) || (a instanceof B.C.Tn ? (this.get("overlays").push(a), this.ry instanceof B.C.Tn && (this.ry.D = !0, this.ry.close(), this.ry.D = !1), this.ry = a, this.set("contextmenu", a, !0)) : (a instanceof B.C.Ze && (this.um instanceof B.C.Ze && this.Kz(this.um),
                this.um = a), this.get("overlays").push(a)), this.q("overlays"))
        },
        vk: function(a) {
            var b = this.get("layers"),
                c = g.a.indexOf(b, a);
            if (-1 !== c) {
                if (a.xB)
                    for (c = b.length; - 1 < --c;) {
                        var d = b[c];
                        d.ZA !== a && d !== a || b.splice(c, 1)
                    } else a.ZA && a.ZA.Nka(a), b = g.a.Eo(b, c);
                this.set("layers", b);
                if (a.xB)
                    for (a = a.getLayers(), b = -1, c = a.length; ++b < c;) d = a[b], d instanceof B.o.Yb || !d.setMap || d.setMap()
            }
        },
        getZooms: function() { return this.get("zooms", null, !0) },
        setZooms: function(a) { return this.set("zooms", a, !0) },
        Kz: function(a) {
            var b = this.get("overlays");
            this.set("overlays", g.a.Eo(b, g.a.indexOf(b, a)))
        },
        getTileCoordByLngLat: function(a, b, c) {
            b = b || 256;
            this.D = !0;
            c = c || Math.round(this.getZoom());
            this.D = !1;
            a = this.lc(a, c);
            c = new g.mr(c, Math.floor(a.x / b), Math.floor(a.y / b));
            c.bD = a.x % b;
            c.cD = a.y % b;
            return c
        },
        setZoom: function(a, b) {
            g.c.add(this, "setZoom");
            a = this.hD(a);
            var c = this.get("zooms");
            a > c[1] && (a = c[1]);
            a < c[0] && (a = c[0]);
            this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.q("zoomstart"), this.q("zoomchange"), this.q("zoomend")) : this.set("zoomSlow",
                a))
        },
        getZoom: function(a) { g.c.add(this, "getZoom"); return a ? this.get("zoom", null, !0) : this.hD(this.get("targetLevel") || this.get("zoom", null, !0)) },
        getCenter: function() { g.c.add(this, "getCenter"); return this.get("center", null, !0) },
        setCenter: function(a, b) {
            g.c.add(this, "setCenter");
            a = g.a.Ja(a);
            b || !this.loaded ? (this.q("movestart"), this.set("center", a), this.q("mapmove"), this.map ? this.map.q("moveend") : this.q("moveend")) : (this.D = !0, this.panTo(a), this.D = !1)
        },
        getCoordsBound: function() { return this.view.lm() },
        getCoordsBoundByZoom: function(a) { return this.view.eqa(a) },
        setRotation: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            g.c.add(this, "setRotation");
            !g.l.Ie && this.get("rotateEnable") && this.set("rotation", a)
        },
        getRotation: function() { g.c.add(this, "getRotation"); return this.get("rotation") },
        setPitch: function(a) {
            g.c.add(this, "setPitch");
            a = Math.min(this.get("maxPitch"), Math.max(a, 0));
            "3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
        },
        getPitch: function() {
            g.c.add(this, "getRotation");
            return "3D" === this.view.type ? this.get("pitch") :
                0
        },
        getStatus: function() { g.c.add(this, "getStatus"); for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0); return b },
        setStatus: function(a) {
            g.c.add(this, "setStatus");
            for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) &&
                this.set(b, a[b])
        },
        getResolution: function(a, b) { g.c.add(this, "getResolution"); var c = (a = g.a.Ja(a)) ? a.Q : this.get("center", null, !0).Q; return this.oj.lq(b || this.get("zoom")) * Math.cos(c * Math.PI / 180) },
        getScale: function(a) {
            g.c.add(this, "getScale");
            this.D = !0;
            a = this.getResolution() * (a || 96) / 0.0254;
            this.D = !1;
            return a
        },
        getDefaultCursor: function() { g.c.add(this, "getDefaultCursor"); return this.get("defaultCursor", null, !0) || "url(" + g.r.Fb + "/theme/v1.3/openhand.cur),default" },
        setDefaultCursor: function(a) {
            g.c.add(this,
                "setDefaultCursor");
            return this.set("defaultCursor", a, !0)
        },
        zoomIn: function(a) {
            g.c.add(this, "zoomIn");
            this.D = !0;
            this.setZoom(this.getZoom() + 1, a);
            this.D = !1
        },
        zoomOut: function(a) {
            g.c.add(this, "zoomOut");
            this.D = !0;
            this.setZoom(this.getZoom() - 1, a);
            this.D = !1
        },
        hD: function(a) { return this.view && "3D" === this.view.type ? g.a.vb(a, 4) : Math.round(a) },
        setZoomAndCenter: function(a, b, c) {
            g.c.add(this, "setZoomAndCenter");
            b = g.a.Ja(b);
            a = this.hD(a);
            var d = this.get("zooms");
            a > d[1] && (a = d[1]);
            a < d[0] && (a = d[0]);
            this.D = !0;
            this.loaded ?
                this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0));
            this.D = !1
        },
        clearMap: function() {
            g.c.add(this, "clearMap");
            for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
            this.set("overlays", []);
            if (this.map && this.map.la)
                for (a = this.map.la, b = a.length - 1; 0 <= b; b -= 1)
                    if (a[b].S instanceof B.o.RL) {
                        var c = a[b].S;
                        c.D = !0;
                        c.setMap(null);
                        c.D = !1
                    }
        },
        destroy: function() {
            g.c.add(this, "destroy");
            this.tm && (this.tm.setMap(), this.indoorMap = this.tm = null);
            this.set("overlays", []);
            this.set("defaultLayer",
                null);
            this.set("layers", []);
            var a = this.get("controls");
            a.remove = [];
            for (var b in a.Kd) a.Kd.hasOwnProperty(b) && a.remove.push(a.Kd[b]);
            a.Kd = [];
            a.add = [];
            this.set("controls", a);
            this.set("destroy", !0);
            this.La = !1;
            this.Al();
            this.w = this.K = null;
            this.Hc && this.Hc.Al();
            this.Hc = null;
            this.view && this.view.Al();
            this.view = null;
            this.wi();
            B.Rb.Ot--
        },
        addControl: function(a) {
            g.c.add(this, "addControl");
            var b = g.a.yb(a),
                c = this.get("controls") || {};
            c.Kd = c.Kd || {};
            c.Kd[b] || (c.Kd[b] = a);
            c.add = c.add || [];
            c.add.push(a);
            this.set("controls",
                c)
        },
        removeControl: function(a) {
            g.c.add(this, "removeControl");
            var b = g.a.yb(a),
                c = this.get("controls") || {};
            c.Kd = c.Kd || {};
            c.Kd[b] && delete c.Kd[b];
            c.remove = c.remove || [];
            c.remove.push(a);
            this.set("controls", c)
        },
        clearControl: function() {
            g.c.add(this, "clearControl");
            var a = this.get("controls") || {};
            a.remove = a.remove || [];
            a.Kd = a.Kd || {};
            for (var b in a.Kd) a.Kd.hasOwnProperty(b) && (a.remove.push(a.Kd[b]), delete a.Kd[b]);
            this.set("controls", a)
        },
        plugin: function(a, b) {
            g.c.add(this, "plugin");
            "string" === typeof a && (a = [a]);
            for (var c = [], d = 0; d < a.length; d += 1) {
                var e = a[d].split(".");
                2 < e.length || (2 == e.length ? "AMap" === e[0] && (window.AMap[e[1]] || c.push(a[d])) : c.push(a[d]))
            }
            if (0 === c.length) return b(), this;
            g.sb.Ig(c, b);
            return this
        },
        clearInfoWindow: function() {
            g.c.add(this, "clearInfoWindow");
            var a = this.get("overlays");
            a && 0 !== a.length && this.um && (this.um.D = !0, this.um.close(), this.um.D = !1)
        },
        remove: function(a) {
            g.c.add(this, "remove");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.D = !0;
                c.getMap && c.getMap() === this &&
                    (c.close ? c.close() : c.setMap && c.setMap(null));
                c.D = !1
            }
        },
        add: function(a) {
            g.c.add(this, "add");
            a instanceof Array || (a = [a]);
            for (var b = 0; b < a.length; b += 1) {
                var c = a[b];
                c.D = !0;
                if (c.getMap && c.getMap() !== this)
                    if (c.open) continue;
                    else c.setMap && c.setMap(this);
                c.D = !1
            }
        },
        getAllOverlays: function(a, b) {
            g.c.add(this, "getAllOverlays");
            var c = this.get("overlays");
            if (a) { for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1) d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].Ca || c[f].isOfficial) || e.push(c[f]); return e }
            if (!b) {
                e = [];
                for (f = 0; f < c.length; f += 1) c[f].Ca || c[f].isOfficial || e.push(c[f]);
                c = e
            }
            d = this.get("layers");
            e = [];
            if (d)
                for (var f = 0, h = d.length; f < h; f += 1) d[f] instanceof B.o.RL && e.push(d[f]), d[f].kb && (e = e.concat(d[f].kb));
            return c.concat(e)
        },
        triggerResize: function() { this.map && this.map.bP() },
        refreshSize: function() { this.fG = this.R3() },
        R3: function() { return g.g.N3(this.K) },
        getSize: function() {
            g.c.add(this, "getSize");
            (!this.fG || 10 > this.fG.width * this.fG.height) && this.refreshSize();
            return this.fG
        },
        getContainer: function() {
            g.c.add(this,
                "getContainer");
            return this.K
        },
        panTo: function(a) {
            g.c.add(this, "panTo");
            a = g.a.Ja(a);
            this.loaded ? this.set("panTo", a) : (this.D = !0, this.setCenter(a), this.D = !1)
        },
        panBy: function(a, b, c) {
            g.c.add(this, "panBy");
            this.D = !0;
            var d = this.get("rotation") * Math.PI / 180,
                e = a * Math.cos(d) + Math.sin(d) * b;
            a = -Math.sin(d) * a + Math.cos(d) * b;
            b = this.loaded && this.map && this.map.Fd ? this.map.Fd.y9 : this.get("centerCoords");
            d = Math.pow(2, 20 - this.getZoom());
            e = b.add(new g.H(-e * d, -a * d));
            e = this.Nd(e);
            !this.loaded || c ? this.setCenter(e, c) : this.set("panTo",
                e);
            this.D = !1
        },
        setFitView: function(a, b, c, d) {
            g.c.add(this, "setFitView");
            this.D = !0;
            var e = this.get("size"),
                f = e.height;
            if (!e.width || !f) return !0;
            if (a = this.k4(a)) {
                if (c = this.eJ(a, 0, new g.H(40, 40), c, d)) b = b || !this.getBounds().contains(a.zi()) || g.l.ba && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
                this.D = !1;
                return a
            }
        },
        k4: function(a) {
            if (a)
                if (a instanceof B.C.Hh) a = [a];
                else { if (!(a instanceof Array)) return null }
            else this.D = !0, a = this.getAllOverlays(), this.D = !1;
            if (a) {
                for (var b, c = 0; c <
                    a.length; c += 1) {
                    var d = a[c];
                    if (d.get("visible") && !(d instanceof B.C.Ze || d instanceof B.C.Tn)) {
                        d.D = !0;
                        var e = d.getBounds();
                        d.D = !1;
                        e && (b = b ? b.jza(e) : e.cb())
                    }
                }
                return b
            }
        },
        getBounds: function(a) { g.c.add(this, "getBounds"); var b = this.view.Jd(); return a && b.toBounds ? (b.D = !0, a = b.toBounds(), b.D = !1, a) : b },
        setBounds: function(a, b, c, d, e, f) {
            g.c.add(this, "setBounds");
            c = this.eJ(a, b, c, e, f);
            d = d || g.l.ba && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
            this.D = !0;
            this.setZoomAndCenter(c[0], c[1], d);
            this.D = !1;
            return a
        },
        X3: function(a,
            b, c, d, e) { a = this.k4(a); return this.eJ(a, b, c, d, e) },
        getCoordsBoundByZoomIn3D: function(a) {
            this.XH || (this.XH = new g.uM);
            this.D = !0;
            var b = this.getRotation(),
                c = this.getPitch(),
                d = this.getSize(!0).cb();
            this.D = !1;
            a = { size: d, zoom: a, rotation: b, pitch: c, centerCoords: this.get("centerCoords") };
            this.XH.jf(a, !0);
            this.XH.gr();
            return this.XH.lm()
        },
        eJ: function(a, b, c, d, e) {
            b = b ? Number(b) : 0;
            this.D = !0;
            var f = this.getRotation(),
                h = this.getPitch(),
                k = this.getSize(!0).cb(),
                l = this.view.type;
            this.D = !1;
            var m = a.vR(this);
            a = a.yR(this);
            this.wC ||
                (this.wC = "3D" === l ? new g.uM : new g.OF);
            this.wC.jf({ size: k, zoom: 3, rotation: f, pitch: h, centerCoords: m }, !0);
            var n = h = 0;
            d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
            e = e || (g.l.ba ? 17 : 18);
            c = this.get("zooms");
            d = c[0];
            var p = Infinity,
                q = Infinity;
            do {
                this.wC.jf({ zoom: d }, !0);
                "3D" === l && this.wC.gr();
                for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1) var v = this.wC.le(a[u]),
                    p = Math.min(p, v.x),
                    r = Math.max(r, v.x),
                    q = Math.min(q, v.y),
                    s = Math.max(s,
                        v.y);
                p = r - p;
                q = s - q;
                if (p > k.width || q > k.height) { d -= 1; break }
                d += 1
            } while (d <= c[1]);
            d = Math.min(c[1], e, Math.max(c[0], d + b));
            d = Math.floor(d);
            b = Math.pow(2, 20 - d);
            e = f * Math.PI / 180;
            f = h * Math.cos(e) + Math.sin(e) * n;
            e = -Math.sin(e) * h + Math.cos(e) * n;
            m = m.$a(new g.H(f * b, e * b));
            m = this.Zh(m, 20);
            return [d, m]
        },
        setLayers: function(a) {
            g.c.add(this, "setLayers");
            for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
            this.set("layers", a)
        },
        getLayers: function() {
            g.c.add(this, "getLayers");
            var a = this.get("layers", null, !0),
                a = a.slice();
            if (this.D) {
                for (var b = [], c = -1, d = a.length; ++c < d;) {
                    var e = a[c];
                    if (e.xB)
                        for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) {
                            var k = e[f];
                            k instanceof B.o.Yb && -1 === g.a.indexOf(a, k) && b.push(k)
                        }
                }
                a = a.concat(b)
            } else
                for (b = a.length; - 1 < --b;) a[b].ZA && a.splice(b, 1);
            return a
        },
        getDefaultLayer: function() { g.c.add(this, "getDefaultLayer"); return this.get("defaultLayer", null, !0) },
        setDefaultLayer: function(a) {
            g.c.add(this, "setDefaultLayer");
            this.D = !0;
            a.MP = !0;
            var b = this.get("defaultLayer"),
                c = this.get("layers");
            if (b) {
                if (a === b) return;
                b.MP = !1;
                c = g.a.Eo(c,
                    g.a.indexOf(c, b))
            }
            this.set("defaultLayer", a, !0);
            a.D = !0;
            a.getMap == this && c.push(a);
            a.D = !1;
            this.setLayers(c);
            this.D = !1
        },
        pixelToLngLat: function(a, b) { g.c.add(this, "pixelToLngLat"); return this.Zh(a, b) },
        lnglatToPixel: function(a, b) { g.c.add(this, "lnglatToPixel"); return this.lc(a, b) },
        drawPolyline: function(a) {
            g.c.add(this, "drawPolyline");
            this.set("draw", "polyline");
            this.set("drawStyle", a || { strokeColor: "#006600", ob: 0.9 })
        },
        render: function(a) {
            g.c.add(this, "render");
            this.map && this.map.set("display", a ? 1 : 0)
        },
        setMask: function(a) {
            g.c.add(this,
                "setMask");
            this.set("mask", a);
            this.map && (this.map.YJ = !0, this.map.set("display"))
        },
        drawPolygon: function(a) {
            g.c.add(this, "drawPolygon");
            this.set("draw", "polygon");
            this.set("drawStyle", a || { strokeColor: "#006600", ob: 0.9, fillColor: "#FFAA00", he: 0.9 })
        },
        drawCircle: function(a) {
            g.c.add(this, "drawCircle");
            this.set("draw", "circle");
            this.set("drawStyle", a || { strokeColor: "#006600", ob: 0.9, fillColor: "#006600", he: 0.9 })
        },
        sD: function() { return this.view.sD() },
        getCameraState: function() {
            g.c.add(this, "getCameraState");
            if (this.view &&
                "3D" == this.view.type) return this.view.M3()
        },
        endDraw: function() { this.set("draw", null) },
        isGoogleTileVisible: function() { return this.map.isForeignMapVisible() },
        isForeignMapVisible: function() { if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map && this.map.qga() },
        le: function(a, b, c) { g.c.add(this, "p20ToContainer"); return this.view.le(a, b, c) },
        Bg: function(a, b, c) { g.c.add(this, "containerToP20"); return this.view.Bg(a, b, c) },
        getObject3DByContainerPos: function(a, b, c) {
            g.c.add(this, "getObject3DByContainerPos");
            if ("2D" === this.view.type || !this.map || !this.map.J) return null;
            this.D = !0;
            this.view.Bg(a);
            var d = this.view.Q3(a),
                e = this.map.J.QT,
                f = this.view.cc,
                h = this.get("zoom", null, !0),
                h = Math.pow(2, 20 - h);
            b = b || this.getLayers();
            this.D = !1;
            for (var k = [], l = 0; l < b.length; l += 1) {
                var m = b[l];
                m instanceof B.o.Pm && (m = m.jp(e, d, f, h, a)) && k.push(m)
            }
            return c ? k : k.length ? (k.sort(function(a, b) { return a.Td - b.Td }), { index: k[0].index, point: k[0].kE, distance: k[0].Td, object: k[0].object }) : null
        },
        hJ: function(a) {
            var b = this.get("layers", null, !0),
                b =
                b.slice();
            if (this.D) {
                for (var c = [], d = -1, e = b.length; ++d < e;) {
                    var f = b[d];
                    if (f.xB)
                        for (var f = f.pEa(), h = -1, k = f.length; ++h < k;) { var l = f[h]; - 1 === g.a.indexOf(b, l) && c.push(l) }
                }
                b = b.concat(c)
            }
            return b.filter(function(b) { return b instanceof B.o.Pm && (a ? -1 < a.indexOf(b) : !0) })
        },
        queryObjectIndexFromFboByContainerPos: function(a, b) {
            g.c.add(this, "queryObjectIndexFromFboByContainerPos");
            if ("2D" === this.view.type || !this.map || !this.map.J) return null;
            var c = this.diffFilterLayers(b),
                d = this.hJ(b),
                e = this.getSize();
            if (c) this.$G =
                this.view.Ne.cb(), this.ZG = this.view.cc.cb();
            else if (this.$G && this.ZG) { if (c = this.ZG.Xu(this.view.cc), c = !(this.$G.Xu(this.view.Ne) && c)) this.$G = this.view.Ne.cb(), this.ZG = this.view.cc.cb() } else this.$G = this.view.Ne.cb(), this.ZG = this.view.cc.cb();
            if (c) this.map.Nq(d);
            else {
                for (var f = 0; f < d.length; f += 1) { var h = d[f]; if (h instanceof B.o.Pm && h.Gra()) { c = !0; break } }
                c && this.map.Nq(d)
            }
            return this.map.Oy().Yva(a, e)
        },
        diffFilterLayers: function(a) {
            a = a || [];
            if (!this.ju || this.ju.length !== a.length) return this.ju = a ? a.slice(0) : [], !0;
            for (var b = 0; b < this.ju.length;) {
                if (this.ju[b] !== a[b]) return this.ju = a ? a.slice(0) : [], !0;
                b++
            }
            this.ju = a ? a.slice(0) : []
        }
    });
    B.Rb.Xb({ OJ: "lngLatToGeodeticCoord", bqa: "geodeticCoordToLngLat", eJ: "getFitZoomAndCenterByBounds", X3: "getFitZoomAndCenterByOverlays", Ks: "lnglatTocontainer", lnglatTocontainer: "lngLatToContainer", Yp: "containTolnglat", containTolnglat: "containerToLngLat", Bb: "lngLatToP20", Nd: "p20ToLngLat", le: "p20ToContainer", Bg: "containerToP20", lc: "project", Zh: "unproject", queryObjectIndexFromFboByContainerPos: "pickObject3DByContainerPos" });
    B.Rb.Gb({
        isHotspotChanged: function() {
            if ("undefined" !== typeof this.vD && (this.Ana(), this.get("isHotspot"))) {
                var a = this.get("layers", null, !0);
                a && a.length && !this.vD && this.bK && this.Nua()
            }
        },
        Nua: function() {
            if (this.ik) this.V4();
            else {
                var a = this;
                this.D = !0;
                this.plugin("AMap.HotSpot", function() {
                    if (!a.vD) {
                        if (!a.ik) {
                            var b = new g.ei;
                            new B.C.Ze({ innerOverlay: !0 });
                            a.ik = b
                        }
                        a.V4()
                    }
                });
                this.D = !1
            }
        },
        Ana: function() { this.ik && this.Kra() },
        f7: function(a) {
            a.type = "hotspotover";
            a.isIndoorPOI = !1;
            this.q("hotspotover", a)
        },
        d7: function(a) {
            a.type =
                "hotspotclick";
            a.isIndoorPOI = !1;
            this.q("hotspotclick", a)
        },
        e7: function(a) {
            a.type = "hotspotout";
            a.isIndoorPOI = !1;
            this.q("hotspotout", a)
        },
        V4: function() {
            var a = this.ik;
            this.ik.D = !0;
            this.ik.setMap(this);
            this.ik.D = !1;
            a.h("mouseover", this.f7, this);
            a.h("click", this.d7, this);
            a.h("mouseout", this.e7, this)
        },
        Kra: function() {
            var a = this.ik;
            a.G("mouseover", this.f7, this);
            a.G("click", this.d7, this);
            a.G("mouseout", this.e7, this);
            this.ik.D = !0;
            this.ik.setMap(null);
            this.ik.D = !1;
            this.ik = null
        }
    });
    B.event = {
        Y: function(a, b, c, d) { g.F.h(a, b, c, d); return new g.tF(0, a, b, c, d) },
        Kla: function() {},
        addListener: function(a, b, c, d) { g.a.Sh(a.addListener) ? a.addListener(b, c, d) : (a.te || (a.te = g.va.te), g.va.h.call(a, b, c, d)); return new g.tF(1, a, b, c, d) },
        by: function(a, b, c, d) { g.a.Sh(a.by) ? a.by(b, c, d) : (a.te || (a.te = g.va.te), g.va.h.call(a, b, c, d, !0)); return new g.tF(1, a, b, c, d) },
        nI: function(a) { g.a.Sh(a.nI) ? a.nI() : g.va.wi.call(a) },
        Gu: function(a, b) { g.a.Sh(a.Gu) ? a.Gu(b) : g.va.wi.call(a, b) },
        removeListener: function(a) {
            a instanceof
            g.tF && (g.a.Sh(a.Ci.removeListener) ? a.Ci.removeListener(a) : 0 === a.type ? g.F.G(a.Ci, a.$Q, a.iS, a.cf) : 1 === a.type && (a.Ci.te || (a.Ci.te = g.va.te), g.va.G.call(a.Ci, a.$Q, a.iS, a.cf)))
        },
        O: function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            g.a.Sh(a.O) ? a.O.apply(a, c) : (a.te || (a.te = g.va.te), g.va.q.apply(a, c))
        }
    };
    g.tF = g.ca.extend({
        A: function(a, b, c, d, e) {
            this.type = a;
            this.Ci = b;
            this.$Q = c;
            this.iS = d;
            this.cf = e
        }
    });
    var pc = { Y: "addDomListener", Kla: "addDomListenerOnce", addListener: "addListener", by: "addListenerOnce", nI: "clearInstanceListeners", Gu: "clearListeners", removeListener: "removeListener", O: "trigger" },
        qc;
    for (qc in pc) pc.hasOwnProperty(qc) && (B.event[pc[qc]] = B.event[qc]);
    g.event = B.event;
    B.o.Yb = g.ca.extend({
        ka: [g.va, g.$e],
        A: function(a) {
            (new Date).getTime();
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
            g.a.tb(this, a);
            this.w.map && (a = this.w.map, delete this.w.map, this.w.map = a);
            this.jf(this.w)
        },
        getContainer: function() { g.c.add(this, "getContainer"); if (this.o && this.o.M) return this.o.M.yj() },
        getZooms: function() { return this.get("zooms", null, !0) },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            a !== this.get("opacity", null, !0) && this.set("opacity", a)
        },
        getOpacity: function() {
            return this.get("opacity",
                null, !0)
        },
        show: function() {
            g.c.add(this, "show");
            this.set("visible", !0);
            if (this.Eq) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        },
        hide: function() {
            g.c.add(this, "hide");
            this.set("visible", !1);
            if (this.Eq) {
                var a = this.get("map", null, !0);
                a && a.set("layers", a.get("layers", null, !0))
            }
        },
        setMap: function(a) {
            g.c.add(this, "setMap");
            var b = this.get("map");
            if (a) b && a !== b && b.vk(this), this.set("map", a);
            else if (b && (b.vk(this), this.set("map", null, !0), this.ti = !1, this.jg && this.jg(), this.onRemove)) this.onRemove()
        },
        getMap: function() { g.c.add(this, "getMap"); return this.get("map", null, !0) },
        mapChanged: function() {
            var a = this.get("map");
            a && a.SH(this)
        },
        setzIndex: function(a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        },
        getzIndex: function() { return this.get("zIndex", null, !0) }
    });
    B.o.qb = B.o.Yb.extend({
        w: { tileSize: 256, visible: !0, opacity: 1, zIndex: 0, noLimg: 1, zooms: [3, 20], getTileUrl: g.l.ba ? g.r.TE : g.r.OD, errorUrl: g.a.npa, detectRetina: !0, className: "amap-layer", mapNumber: "", merge: !1, sort: !1, cacheSize: g.l.size },
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
            g.c.ya(this, a);
            (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
            this.ina(a);
            var b = a.zooms;
            b && b[1] >= this.ql[0] ? (b[0] < this.ql[0] && (b[0] = this.ql[0]), b[1] > this.ql[1] && (b[1] = this.ql[1])) : a.zooms = [this.ql[0], this.ql[1]];
            arguments.callee.ma.call(this, a);
            a.uk && (this.uk = !0);
            this.HG = this.tq()
        },
        setTextIndex: function(a) {
            g.c.add(this, "setTextIndex");
            this.set("textIndex", a)
        },
        tq: function() { if (this.get("createTile")) return !1; var a = this.get("getTileUrl"); return a && a !== g.r.OD && a !== g.r.TE ? !1 : !0 },
        q2: function() { if (!this.tq()) return !1; var a = this.get("map"); return a && a.Di && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1 },
        s4: function(a) {
            var b = g.r.WJ;
            g.l.ja && this.get("detectRetina") && (b = g.r.WJ.replace("scl=1", "scl=2"));
            a && (b = b.replace("ltype=3",
                "ltype=11"));
            return b
        },
        dg: function(a) {
            var b = this.q2(),
                c = this.get("map");
            this.tq() && this.set("mapNumber", "GS(2019)6379");
            if (this.uk) return new g.o.qb(this, a, this.wr(this.s4(!0)), this.w.maxDataZoom, !0);
            if (b)
                if (this.Eq = !0, g.o.hi) {
                    if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                        var b = c.get("showBuildingBlock"),
                            d = new g.o.qb(this, a, this.wr(this.s4(!b)), void 0, !0);
                        b && (d.Jj = new g.o.od(new B.o.qb({ zooms: [16, 20], innerLayer: !0 }), a, ["building"]), d.Jj.type = "\u697c\u5757\u56fe\u5c42", d.Jj.bf(["visible",
                            "opacity", "zIndex"
                        ], d, !0), d.Jj.BC(c.get("mapStyle") || "normal"));
                        d.type = "\u6805\u683c\u5e95\u56fe";
                        return d
                    }
                    if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.B.view.type ? (c = new g.o.od(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", b = new B.o.qb({ zooms: [17, 20], zIndex: 50, innerLayer: !0 }), c.Jj = new g.o.od(b, a, ["building"]), c.Jj.gf = 17, c.Jj.type = "\u697c\u5757\u56fe\u5c42", c.Jj.Yy = 1, c.Jj.bf(["visible", "merge", "sort", "opacity"], c, !0), b.X("rejectMapMask", this, !0)) : (c = new g.o.od(this,
                        a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), a.rma = c
                } else return ["vectorlayer", "overlay"];
            else return this.Eq = !1, new g.o.qb(this, a, null, this.w.maxDataZoom)
        },
        getTileUrlChanged: function() {
            var a = this.get("getTileUrl");
            if (a === g.r.OD || a === g.r.TE || a === g.r.SK) this.bK = !0;
            "string" === typeof a && (a = this.wr(a));
            this.set("tileFun", a)
        },
        ina: function(a) {
            this.ql || (this.ql = [this.w.zooms[0], this.w.zooms[1]]);
            var b;
            a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
            g.l.ba && g.l.ja && this.w.detectRetina &&
                !b && (this.ql[1] -= 1)
        },
        getTiles: function() {
            g.c.add(this, "getTiles");
            var a = this.get("tiles", null, !0);
            if (a && a.length) a = a[0];
            else return [];
            for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
            return b
        },
        reload: function() {
            g.c.add(this, "reload");
            this.set("reload", 1)
        },
        Zs: function() {
            this.D = !0;
            var a = this.get("map", null, !0);
            this.setMap(null);
            this.ti = !1;
            this.setMap(a);
            this.D = !1
        },
        setTileUrl: function(a) {
            g.c.add(this, "setTileUrl");
            this.q2() ? (this.set("getTileUrl", a), this.Zs()) :
                this.set("getTileUrl", a)
        },
        wr: function(a) {
            var b = this,
                c, d, e;
            return function(f, h, k) {
                f = (f + Math.pow(2, k)) % Math.pow(2, k);
                if ("number" !== typeof(f + h + k)) return null;
                var l = b.get("map"),
                    m = "zh_cn";
                l && (m = l.get("lang") || "zh_cn");
                k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
                if (!c) {
                    if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
                    c = !0
                }
                e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
                return k
            }
        },
        getTileUrl: function(a, b, c) {
            g.c.add(this, "getTileUrl");
            return this.get("tileFun", null, !0)(a, b, c)
        },
        getZooms: function(a) { a || g.c.add(this, "getZooms"); return this.get("zooms", null, !0) }
    });
    B.o.qb.EW = B.o.qb.extend({
        w: { getTileUrl: g.r.yU, zooms: [3, 20], zIndex: 2, maxDataZoom: 18, detectRetina: !1, mapNumber: "GS(2020)617", className: "amap-layer amap-satellite", cacheSize: g.l.size },
        A: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.Satellite";
            g.c.ya(this, a);
            this.ql = [3, 20];
            arguments.callee.ma.apply(this, arguments)
        }
    });
    B.o.qb.AW = B.o.qb.extend({
        w: { getTileUrl: g.r.SK, zooms: [3, 20], zIndex: 3, type: "overlayer", maxDataZoom: 18, className: "amap-layer amap-roadnet", cacheSize: g.l.size },
        A: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.RoadNet";
            g.c.ya(this, a);
            this.ql = [3, 20];
            arguments.callee.ma.apply(this, arguments)
        },
        dg: function(a) {
            if (this.get("map").Di) {
                this.Eq = !0;
                var b = g.r.TK;
                g.l.ja && this.get("detectRetina") && (b = g.r.TK.replace("scl=1", "scl=2"));
                a = new g.o.qb(this, a, this.wr(b), this.w.maxDataZoom)
            } else this.Eq = !1, a = new g.o.qb(this,
                a);
            return a
        }
    });
    B.o.qb.MW = B.o.qb.extend({
        w: { getTileUrl: function(a, b, c) { return g.r.vc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b }, zooms: [6, 20], zIndex: 4, type: "overlayer", autoRefresh: !1, interval: 180, maxDataZoom: 17, alwaysRender: !g.l.f3, className: "amap-layer amap-traffic", cacheSize: g.l.size },
        A: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.Traffic";
            g.c.ya(this, a);
            this.ql = [6, 20];
            arguments.callee.ma.apply(this, arguments);
            this.D = !0;
            this.startRefresh();
            this.D = !1
        },
        stopRefresh: function() {
            g.c.add(this,
                "stopRefresh");
            this.GK && (clearInterval(this.GK), this.GK = null)
        },
        startRefresh: function() {
            g.c.add(this, "startRefresh");
            if (this.get("autoRefresh") && !this.GK) {
                var a = this;
                this.GK = setInterval(function() {
                    a.D = !0;
                    a.reload();
                    a.D = !1;
                    a.q("refresh")
                }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
            }
        },
        reload: function() {
            g.c.add(this, "reload");
            g.a.Yc(function() { this.set("reload") }, this)
        },
        jg: function() {
            this.D = !0;
            this.stopRefresh();
            this.get("map") && this.get("map").G("zoomstart", this.reload, this);
            this.D = !1
        },
        dg: function(a) {
            var b =
                this.get("map"),
                b = a.B;
            b.h("zoomstart", this.reload, this);
            return "d" !== b.get("baseRender") ? g.o.$w ? a = new g.o.$w(this, a) : ["vt"] : a = new g.o.qb(this, a, null, this.w.maxDataZoom)
        }
    });
    B.o.qb.zA = B.o.qb.extend({
        w: { zooms: [3, 20], zIndex: 12, detectRetina: !1, className: "amap-layer amap-flexible", cacheSize: g.l.size },
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
            g.c.ya(this, a);
            this.Asa = !0;
            arguments.callee.ma.call(this, a)
        },
        setCreateTile: function(a) { g.c.add(this, "setCreateTile"); "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a) },
        getCreateTile: function() { return this.get("createTile", null, !0) }
    });
    B.o.qb.Aba = B.o.qb.zA.extend({
        w: { zooms: [3, 20], zIndex: 12, tileSize: 512, detectRetina: !1, className: "amap-layer amap-wms", cacheSize: g.l.size, url: "", params: "" },
        A: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.WMS";
            g.c.ya(this, a);
            arguments.callee.ma.call(this, a);
            this.zw();
            var b = this,
                c = this.get("tileSize");
            this.set("createTile", function(a, e, f, h, k) {
                var l = Math.pow(2, 20 - f) * c;
                f = new g.H(l * a, l * (e + 1));
                a = new g.H(l * (a + 1), l * e);
                e = g.VJ.n7(f);
                a = g.VJ.n7(a);
                var m = document.createElement("img");
                "3D" === b.Jf && (m.crossOrigin = "anonymous");
                g.F.h(m, "load", function() { h(m) });
                g.F.h(m, "error", function() { k(m) });
                m.src = this.url + "&BBOX=" + e + "," + a
            })
        },
        zw: function() {
            var a = this.get("url", null, !0),
                b = this.get("params", null, !0),
                c = this.get("tileSize");
            b.WIDTH = c;
            b.HEIGHT = c;
            b.CRS = b.CRS || "EPSG:3857";
            b.REQUEST = "GetMap";
            b.SERVICE = "WMS";
            b.FORMAT = b.FORMAT || "image/png";
            b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
            delete b.BBOX;
            this.url = a + "?" + g.a.join(b, "&");
            this.D = !0;
            this.reload();
            this.D = !1
        },
        setUrl: function(a) {
            g.c.add(this, "setUrl");
            this.set("url",
                a, !0);
            this.zw()
        },
        getUrl: function() { g.c.add(this, "getUrl"); return this.get("url", null, !0) },
        setParams: function(a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0), a || {});
            this.zw()
        },
        getParams: function() { g.c.add(this, "getParams"); return this.get("params", null, !0) }
    });
    B.o.qb.Bba = B.o.qb.zA.extend({
        w: { zooms: [3, 20], tileSize: 256, zIndex: 12, detectRetina: !1, className: "amap-layer amap-wmts", cacheSize: g.l.size },
        A: function(a) {
            this.CLASS_NAME = "AMap.TileLayer.WMTS";
            g.c.ya(this, a);
            arguments.callee.ma.call(this, a);
            this.zw();
            var b = this;
            this.get("tileSize");
            this.set("createTile", function(a, d, e, f, h) {
                var k = document.createElement("img");
                "3D" === b.Jf && (k.crossOrigin = "anonymous");
                g.F.h(k, "load", function() { f(k) });
                g.F.h(k, "error", function() { h(k) });
                k.src = this.url + "&TileMatrix=" + e + "&TileRow=" +
                    d + "&TileCol=" + a
            })
        },
        zw: function() {
            var a = this.get("url", null, !0),
                b = this.get("params", null, !0);
            b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
            b.Request = "GetTile";
            b.Service = "WMTS";
            b.Format = b.Format || "image/png";
            this.url = a + "?" + g.a.join(b, "&");
            this.D = !0;
            this.reload();
            this.D = !1
        },
        setUrl: function(a) {
            g.c.add(this, "setUrl");
            this.set("url", a, !0);
            this.zw()
        },
        getUrl: function() { g.c.add(this, "getUrl"); return this.get("url", null, !0) },
        setParams: function(a) {
            g.c.add(this, "setParams");
            g.extend(this.get("params", null, !0),
                a || {});
            this.zw()
        },
        getParams: function() { g.c.add(this, "getParams"); return this.get("params", null, !0) }
    });
    B.o.qb.QL = B.o.qb.zA.extend({
        w: { detectRetina: !0, zooms: [10, 18], zIndex: 2 },
        A: function(a) {
            arguments.callee.ma.apply(this, arguments);
            var b = this;
            this.set("createTile", function(a, d, e, f, h) {
                var k = b.Ce.map.map;
                k.Te.ME(a, d, e, function(l) {
                    if (l) h();
                    else {
                        var m = document.createElement("img");
                        "3D" === b.Jf && (m.crossOrigin = "anonymous");
                        g.F.h(m, "load", function() { f(m) });
                        g.F.h(m, "error", function() { h(m) });
                        m.src = function(a, c, d) {
                            var e = "zh_cn";
                            b && b.get && k && (e = k.get("lang") || "zh_cn");
                            return g.r.vc + "://grid.amap.com/grid/" + d + "/" +
                                a + "/" + c + "?src=jsapi&key=" + g.r.key + "&lang=" + e + "&dpiType=" + (g.l.Kc ? "wprd" : "webrd")
                        }(a, d, e)
                    }
                })
            })
        }
    });
    B.o.ed = B.o.Yb.extend({
        w: { visible: !0, zooms: [3, 25], type: "overlay", zIndex: 5, alwaysRender: !0 },
        A: function(a) {
            this.p5 = !0;
            arguments.callee.ma.apply(this, arguments)
        },
        dg: function(a) { return new g.o.ed(this, a) }
    });
    B.o.Q$ = B.o.Yb.extend({
        w: { zooms: [14, 20], zIndex: 8, visible: !0, merge: !0, sort: !1 },
        A: function(a) {
            this.CLASS_NAME = "AMap.Buildings";
            g.c.ya(this, a);
            a = a || {};
            a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
            arguments.callee.ma.apply(this, arguments)
        },
        tq: function() { return !1 },
        dg: function(a) { if (g.l.Vp) return a = new g.o.xba(this, a), a.Yy = this.get("heightFactor") || 1, a },
        setStyle: function(a) {
            this.set("customStyle", a);
            g.c.add(this, "setStyle")
        }
    });
    B.o.JL = B.o.Yb.extend({
        w: { visible: !0, zooms: [3, g.l.ba ? 20 : 18], opacity: 1, type: "overlay", zIndex: 6 },
        A: function(a) { arguments.callee.ma.apply(this, arguments) },
        dg: function(a) { return g.o.CA ? new g.o.CA(this, a) : ["imagelayer"] },
        getMap: function() { g.c.add(this, "getMap"); return this.Ce.map },
        show: function() {
            g.c.add(this, "show");
            this.set("visible", !0);
            this.q("options")
        },
        getOpacity: function() { g.c.add(this, "getOpacity"); return this.get("opacity", null, !0) },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            this.set("opacity",
                a)
        },
        getBounds: function() { g.c.add(this, "getBounds"); return this.get("bounds", null, !0).cb() },
        setBounds: function(a) {
            g.c.add(this, "setBounds");
            this.q("bounds", a);
            this.D = !0;
            this.setOptions({ bounds: a });
            this.D = !1
        },
        hide: function() {
            g.c.add(this, "hide");
            this.set("visible", !1);
            this.q("options")
        },
        setOptions: function(a) {
            g.c.add(this, "setOptions");
            this.jf(a);
            this.q("options")
        },
        getOptions: function() {
            g.c.add(this, "getOptions");
            var a = {},
                b;
            for (b in this.w) this.w.hasOwnProperty(b) && (a[b] = this.get(b));
            return a
        },
        getElement: function() {
            return this.o.M ?
                this.o.M.Nb : this.o.Df ? this.o.Df.Nb : null
        }
    });
    B.o.CA = B.o.JL.extend({
        A: function(a) {
            this.CLASS_NAME = "AMap.ImageLayer";
            g.c.ya(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments)
        },
        getImageUrl: function() { g.c.add(this, "getImageUrl"); return this.get("__source__") },
        setImageUrl: function(a) { g.c.add(this, "setImageUrl"); return this.set("__source__", a) }
    });
    B.o.zba = B.o.JL.extend({
        A: function(a) {
            this.CLASS_NAME = "AMap.VideoLayer";
            g.c.ya(this, a);
            a && a.url && (a.__source__ = a.url);
            arguments.callee.ma.apply(this, arguments)
        },
        play: function() {
            var a = this.getElement();
            a && a.play && a.play()
        },
        pause: function() {
            var a = this.getElement();
            a && a.pause && a.pause()
        },
        getVideoUrl: function() { g.c.add(this, "getVideoUrl"); return this.get("__source__") },
        setVideoUrl: function(a) { g.c.add(this, "setVideoUrl"); return this.set("__source__", a) }
    });
    B.o.S$ = B.o.JL.extend({
        A: function(a) {
            this.CLASS_NAME = "AMap.CanvasLayer";
            g.c.ya(this, a);
            a && a.canvas && (a.__source__ = a.canvas);
            arguments.callee.ma.apply(this, arguments)
        },
        getCanvas: function() { g.c.add(this, "getCanvas"); return this.get("__source__") },
        setCanvas: function(a) { g.c.add(this, "setCanvas"); return this.set("__source__", a) },
        reFresh: function() { this.o && (this.o.JE = !0, this.o.set("display")) }
    });
    B.o.Laa = B.o.Yb.extend({
        w: { visible: !0, zooms: [3, 20], type: "overlay", zIndex: 5, cursor: "pointer", alwaysRender: !0, stable: !0, bubble: !0, rejectMapMask: !0, className: "amap-mass" },
        A: function(a, b) {
            this.CLASS_NAME = "AMap.MassMarks";
            g.c.ya(this, b);
            g.l.jl && (this.mk = !0, b.size && (b.size = g.a.Jq(b.size)), this.D = !0, this.setData(a), g.a.tb(this, b), b.style ? (this.jf(this.w, !0), this.setStyle(b.style)) : this.setStyle(this.w), this.D = !1)
        },
        clear: function() {
            g.c.add(this, "clear");
            this.set("dataSources", "")
        },
        getStyle: function() {
            g.c.add(this,
                "getStyle");
            return this.Em
        },
        setStyle: function(a) {
            g.c.add(this, "setStyle");
            if (a instanceof Array) {
                for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.Jq(a[b].size), a.Cf = Math.max(a.Cf || 0, a[b].size.width + a[b].anchor.x), a.lg = Math.max(a.Cf || 0, a[b].size.height + a[b].anchor.y);
                this.Em = a
            } else a.size && (a.size = g.a.Jq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.jf(a, !0), this.Em = { anchor: this.get("anchor"), url: this.get("url"), size: this.get("size"), rotation_: this.get("rotation_") },
                this.Em.Cf = this.Em.size.width + this.Em.anchor.x, this.Em.lg = this.Em.size.height + this.Em.anchor.y;
            this.q("style")
        },
        setData: function(a) {
            g.c.add(this, "setData");
            this.set("dataSources", a)
        },
        getData: function() { g.c.add(this, "getData"); return this.get("datas") || this.get("dataSources") },
        setMap: function(a) {
            g.c.add(this, "setMap");
            g.l.jl && (a ? (this.get("map") && this.get("map").vk(this), this.set("map", a)) : this.get("map") && (this.get("map").vk(this), this.set("map", null, !0), this.ti = !1, this.jg && this.jg()))
        },
        dg: function(a) {
            return g.sb.ID(["cvector"]) ?
                (a = new g.o.ed(this, a), this.X("datas", a), a) : ["cvector"]
        }
    });
    B.o.W$ = B.o.Yb.extend({
        A: function(a) {
            this.CLASS_NAME = "AMap.CompositeLayer";
            this.xB = !0;
            g.a.tb(this, a);
            this.Xm = [];
            this.jf(this.w)
        },
        opacityChanged: function() { for (var a = this.get("opacity", null, !0), b = -1, c = this.Xm.length; ++b < c;) this.Xm[b].setOpacity(a) },
        addLayer: function(a) {
            if (!this.has(a)) {
                a.ZA = this;
                var b = this.get("map");
                a.setMap(b);
                this.Xm.push(a)
            }
            return this
        },
        removeLayer: function(a) { this.has(a) && a.setMap(null); return this },
        Nka: function(a) {
            if (this.has(a)) {
                delete a.ZA;
                var b = this.Xm;
                a = g.a.indexOf(b, a);
                g.a.Eo(b,
                    a)
            }
        },
        has: function(a) { return -1 !== g.a.indexOf(this.Xm, a) },
        show: function() { for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].show() },
        hide: function() { for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].hide() },
        setzIndex: function(a, b) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a);
            var c = this.Xm;
            if ("undefined" === typeof b)
                for (var d = -1, e = c.length; ++d < e;) {
                    var f = c[d];
                    f.setzIndex(a)
                } else(f = c[b]) && f.setzIndex(a)
        },
        dg: function(a) { this.e = a },
        getLayers: function() { return this.Xm }
    });
    B.o.nr = B.o.Yb.extend({
        zaa: { visible: !0, zIndex: 121, opacity: 1, zooms: [3, 20], collision: !0, animation: !0, alwaysRender: !0 },
        w: { zooms: [3, 20] },
        uP: null,
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelsLayer";
            a = a || {};
            g.c.ya(this, a);
            arguments.callee.ma.apply(this, arguments);
            this.w = this.zaa;
            g.a.tb(this, a);
            this.jf(this.w);
            this.Zf = [];
            this.kb = [];
            this.Nu = [];
            this.bR = { click: 0, mouseover: 0, mousemove: 0, mouseout: 0, mousedown: 0, mouseup: 0, touchstart: 0, touchend: 0 }
        },
        getCollision: function() {
            return this.get("collision",
                null, !0)
        },
        setCollision: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
            this.set("collision", a);
            this.w.collision = a;
            this.f.tb(this.w, this.Zf)
        },
        getOpacity: function() { return this.get("opacity", null, !0) },
        setOpacity: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
            this.set("opacity", a);
            this.w.opacity = a;
            this.f.tb(this.w, this.Zf)
        },
        getzIndex: function() { return this.get("zIndex", null, !0) },
        setzIndex: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ?
                arguments[0] : 120;
            this.set("zIndex", a);
            this.w.zIndex = a;
            this.f.tb(this.w, this.Zf)
        },
        getAnimation: function() { return this.get("animation", null, !0) },
        setAnimation: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
            this.set("animation", a);
            this.w.animation = a;
            this.f.tb(this.w, this.Zf)
        },
        getZooms: function() { return this.get("zooms", null, !0) },
        setZooms: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [3, 20];
            this.set("zooms", a);
            this.w.zooms = a;
            this.f.tb(this.w, this.Zf)
        },
        add: function(a) {
            g.c.add(this, "add");
            if (a) {
                a = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a;
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (c) {
                        c.f = this;
                        var d = c.w,
                            e = { data: { id: c._LabelMarkerId || void 0, name: d.title || "", position: this.ffa(d.position) || void 0, rank: d.rank || void 0 }, opts: { zooms: d.zooms || void 0, opacity: "number" === typeof d.opacity ? d.opacity : 1, zIndex: "number" === typeof d.zIndex ? d.zIndex : 1, height: "number" === typeof d.height ? d.height : 0, icon: {}, text: {} } };
                        if (d.icon) {
                            var f = d.icon,
                                h = f.size,
                                k = f.clipSize;
                            h && (f.size = this.yG(h));
                            k && (f.clipSize = this.yG(k));
                            e.opts.icon = d.icon
                        }
                        d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text.style.padding = this.lha(d)));
                        this.Zf.push(e);
                        this.kb.push(c)
                    }
                }
                this.Go();
                b = a.length;
                for (c = 0; c < b; c++)(e = a[c]) && e.K8 && e.K8()
            }
        },
        getMarkers: function() { return this.kb },
        remove: function(a) {
            g.c.add(this, "remove");
            if (a) {
                var b = void 0,
                    b = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a;
                if (this.Zf) {
                    for (a = 0; a < b.length; a++) {
                        var c =
                            this.xn(this.Zf, b[a]); - 1 !== c && (this.Zf.splice(c, 1), this.kb.splice(c, 1))
                    }
                    this.Go()
                }
            }
        },
        clear: function() {
            g.c.add(this, "clear");
            this.f && this.f.clear();
            this.Zf = [];
            this.kb = []
        },
        setPosition: function() {},
        positionChanged: function() {},
        on: function(a) {
            g.c.add(this, "on");
            this.f ? (this.Fh(arguments), this.f.R1(a)) : this.Nu.push(arguments)
        },
        off: function(a) {
            g.c.add(this, "off");
            this.f && this.f.i$(a)
        },
        Go: function() { this.f && this.f.Rz(this.Zf) },
        Rz: function(a) { this.Q0(a) },
        JU: function(a, b) {
            var c = this.uP;
            a && (b ? (c && c._LabelMarkerId !==
                a._LabelMarkerId && c.setTop(!1), this.uP = a) : this.uP = null)
        },
        CR: function(a) { if (this.f) return this.f.CR(a) },
        xn: function(a, b) {
            for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++)
                if (a[d].data.id === c) return d;
            return -1
        },
        removeItem: function() {},
        dg: function(a) {
            this.get("map") || this.set("map", a.B, !0);
            if (g.o.nr) {
                this.f = new g.o.nr(this, a);
                this.Zf && this.Go();
                a = this.Nu;
                if (a.length) {
                    for (var b = 0; b < a.length; b++) this.on.apply(this, a[b]);
                    this.Nu = []
                }
                return this.f
            }
            return ["AMap.LabelsLayer"]
        },
        sZ: function() {
            var a = this;
            return g.a.MD(function(b) {
                var c =
                    a.f;
                c ? c.Rz(b) : a.uD = b
            }, 100)
        },
        Mf: function(a) { return "undefined" === typeof a },
        LZ: function(a) { return "string" === typeof a },
        tga: function(a) { return "number" === typeof a },
        yG: function() { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []; return this.Mf(a.width) || this.Mf(a.height) ? this.LZ(a) ? a.split(",") : this.tga(a) ? [a, a] : a : [a.width, a.height] },
        ffa: function() { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []; return this.Mf(a.R) || this.Mf(a.Q) ? this.LZ(a) ? a.split(",") : a : [a.R, a.Q] },
        lha: function(a) {
            "string" ===
            typeof a && (a = a.trim(), a = a.split(" "));
            if ("[object Array]" === Object.prototype.toString.apply(a)) {
                for (var b = a.length, c = 0; c < b; c++) {
                    var d = parseInt(a[c]);
                    a[c] = isNaN(d) ? 3 : d
                }
                switch (b) {
                    case 0:
                        a = [3, 3, 3, 3];
                        break;
                    case 1:
                        a = [a[0], a[0], a[0], a[0]];
                        break;
                    case 2:
                        a = [a[0], a[1], a[0], a[1]];
                        break;
                    case 3:
                        a = [a[0], a[1], a[2], a[1]]
                }
                return a
            }
            return [3, 3, 3, 3]
        }
    });
    B.o.RL = B.o.CA.extend({
        A: function(a, b, c) {
            this.CLASS_NAME = "AMap.GroundImage";
            g.c.ya(this, c);
            c = c || {};
            this.dh = !0;
            var d = parseFloat(c.opacity);
            isNaN(d) && (d = 1);
            arguments.callee.ma.call(this, { url: a, bounds: b, clickable: c.clickable, opacity: d, map: c.map, zooms: c.zooms || [3, 20] });
            this.CLASS_NAME = "AMap.GroundImage"
        },
        Dua: function(a) { this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("click", a)) },
        Eua: function(a) { this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("dblclick", a)) },
        setMap: function(a) {
            g.c.add(this,
                "setMap");
            a ? (this.get("map") && (this.get("map").vk(this), this.A2 && B.event.removeListener(this.A2), this.S2 && B.event.removeListener(this.S2)), this.set("map", a)) : this.get("map") && (this.get("map").vk(this), this.Ce.map = null)
        },
        mapChanged: function() { this.get("map") && (this.get("map").SH(this), this.get("clickable") && (this.A2 = B.event.addListener(this.get("map"), "click", this.Dua, this), this.S2 = B.event.addListener(this.get("map"), "dblclick", this.Eua, this))) }
    });
    B.C.Hh = g.ca.extend({
        ka: [g.va, g.$e, { Ja: g.a.Ja }],
        w: { extData: {}, bubble: !1, clickable: !0, draggable: !1 },
        A: function() { this.OG = g.a.yb(this) },
        oEa: function() { return this.OG },
        TCa: function() {
            this.D = !0;
            this.get("map", null, !0) && this.setMap(this.get("map"));
            this.D = !1
        },
        mapChanged: function() { this.get("map", null, !0) && this.get("map", null, !0).sC(this) },
        jR: function(a) {
            var b = 0;
            a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
            return b
        },
        setHeight: function(a) {
            this.height = a = a || 0;
            a = this.jR(a);
            this.set("altitude",
                a)
        },
        getHeight: function() { return this.height },
        show: function() { g.c.add(this, "show");!0 != this.get("visible", null, !0) && this.set("visible", !0) },
        hide: function() { g.c.add(this, "hide");!1 != this.get("visible", null, !0) && this.set("visible", !1) },
        setMap: function(a) {
            g.c.add(this, "setMap");
            a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).Kz(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).Kz(this), this.set("map", null, !0)))
        },
        getMap: function() {
            g.c.add(this,
                "getMap");
            return this.get("map", null, !0)
        },
        setExtData: function(a) {
            g.c.add(this, "setExtData");
            this.set("extData", a)
        },
        positionChanged: function() {},
        getExtData: function() { g.c.add(this, "getExtData"); return this.get("extData", null, !0) },
        getVisible: function() { return this.get("visible", null, !0) }
    });
    B.C.ed = B.C.Hh.extend({
        A: function(a) { B.C.ed.ad.A.apply(this, arguments) },
        show: function() { g.c.add(this, "show");!1 == this.get("visible", null, !0) && (this.set("visible", !0), this.q("show", { type: "show", target: this })) },
        hide: function() { g.c.add(this, "hide");!0 == this.get("visible", null, !0) && (this.set("visible", !1), this.q("hide", { type: "hide", target: this })) },
        getVisible: function() { g.c.add(this, "getVisible"); return this.get("visible", null, !0) },
        getOptions: function() {
            g.c.add(this, "getOptions");
            var a = {},
                b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable draggable".split(" "),
                c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "),
                d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"],
                e = ["center", "radius", "texture"],
                f = ["bounds", "texture"],
                h = [];
            this instanceof B.C.ac && (h = b.concat(c));
            this instanceof B.C.Ec && (h = b.concat(d));
            this instanceof B.C.jh && (h = b.concat(e).concat(d));
            this instanceof B.C.Dt && (h = b.concat(e).concat(d));
            this instanceof B.C.Kt && (h = b.concat(d).concat(f));
            for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null, !0);
            return a
        },
        setOptions: function(a) {
            g.c.add(this, "setOptions");
            a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Ja(a.path));
            a.center && (a.center = this.Ja(a.center));
            var b;
            a.hasOwnProperty("map") && (b = a.map, delete a.map);
            this.jf(a);
            void 0 !== b && (this.setMap(b), a.map = b);
            this.q("options");
            this.q("change", { type: "change", target: this })
        },
        setzIndex: function(a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        },
        getzIndex: function() {
            g.c.add(this, "getzIndex");
            return this.get("zIndex", null, !0)
        },
        setDraggable: function(a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        }
    });
    B.C.hM = B.C.ed.extend({
        w: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], lineJoin: "miter", lineCap: "butt", path: [] },
        A: function(a) { B.C.hM.ad.A.apply(this, arguments) },
        setPath: function(a, b) {
            g.c.add(this, "setPath");
            a && a.length || (a = []);
            a = this.Ja(a);
            this.C && this.C.get("deltaPos") && this.C.set("deltaPos", [0, 0], !0);
            this.set("path", a);
            this.q("change", { type: "change", target: this });
            b || this.q("setPath")
        },
        getPath: function() {
            g.c.add(this, "getPath");
            return this.G2()
        },
        reset: function() {
            var a = this.G2();
            this.C.set("deltaPos", [0, 0], !0);
            this.setPath(a)
        },
        G2: function() {
            var a = this.get("path", null, !0);
            this.C && this.C.get("deltaPos") && (a = this.C.St(a, this.C.get("deltaPos")));
            return a
        }
    });
    B.C.fi = g.ca.extend({
        ka: [g.va, g.$e],
        w: { size: new g.xd(36, 36), imageOffset: new g.H(0, 0), image: g.r.Fb + "/theme/v1.3/markers/0.png", imageSize: null },
        A: function(a) {
            this.CLASS_NAME = "AMap.Icon";
            g.c.ya(this, a);
            a = a || {};
            a.size && (a.size = g.a.Jq(a.size));
            a.imageSize && (a.imageSize = g.a.Jq(a.imageSize));
            g.a.tb(this, a);
            this.jf(this.w)
        },
        setImageSize: function(a) {
            g.c.add(this, "setImageSize");
            a = g.a.Jq(a);
            this.set("imageSize", a)
        },
        getImageSize: function() { g.c.add(this, "getImageSize"); return this.get("imageSize", null, !0) }
    });
    B.C.Jaa = g.ca.extend({
        ka: [g.va, g.$e],
        w: { coords: [], type: "" },
        A: function(a) {
            this.CLASS_NAME = "AMap.MarkerShape";
            g.c.ya(this, a);
            g.a.tb(this, a);
            this.jf(this.w)
        }
    });
    B.C.ub = B.C.Hh.extend({
        w: { cursor: "pointer", visible: !0, zIndex: 100, angle: 0, textAlign: "left", verticalAlign: "top", autoRotation: !1, opacity: 1, offset: new g.H(-9, -31), size: new g.H(19, 33), raiseOnDrag: !1, topWhenClick: !1, topWhenMouseOver: !1, animation: "AMAP_ANIMATION_NONE" },
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
            g.c.ya(this, a);
            a = a || {};
            this.dh = !0;
            this.aha = g.a.yb(this);
            this.D = !0;
            a.position && (a.position = this.Ja(a.position));
            a.height && this.setHeight(a.height);
            g.a.tb(this, a);
            g.l.Ie && (this.w.angle =
                0);
            this.jf(this.w, !0);
            this.mapChanged();
            this.D = !1
        },
        getAnchor: function() { g.c.add(this, "getAnchor"); return this.get("anchor", null, !0) },
        setAnchor: function(a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a)
        },
        getId: function() { g.c.add(this, "getId"); return this.aha },
        setRaiseOnDrag: function(a) {
            g.c.add(this, "setRaiseOnDrag");
            this.set("raiseOnDrag", a)
        },
        setPosition: function(a, b) {
            g.c.add(this, "setPosition");
            a = this.Ja(a);
            void 0 !== b && (this.D = !0, this.setHeight(b), this.D = !1);
            this.set("position", a)
        },
        getPosition: function() {
            g.c.add(this,
                "getPosition");
            return this.get("position", null, !0)
        },
        getBounds: function() { var a = this.get("position", null, !0).cb(); return new g.me(a, a.cb()) },
        mapChanged: function() {
            this.zl("zoom");
            var a = this.get("map", null, !0);
            a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.sC(this), this.X("zoom", a))
        },
        getZooms: function() { g.c.add(this, "getZooms"); return this.get("zooms", null, !0) },
        zoomChanged: function() {
            var a = this.get("zooms", null, !0);
            if (a) {
                var b = this.get("zoom");
                b < a[0] || b > a[1] ? this.set("outOfZooms", !0) : this.set("outOfZooms", !1);
                this.C && this.C.$ua()
            }
        },
        setIcon: function(a) {
            g.c.add(this, "setIcon");
            this.set("icon", a)
        },
        getIcon: function() { g.c.add(this, "getIcon"); return this.get("icon", null, !0) },
        setContent: function(a) {
            g.c.add(this, "setContent");
            this.set("content", a)
        },
        getContent: function() { g.c.add(this, "getContent"); return this.get("content", null, !0) },
        getContentDom: function() { return this.get("contentDom", null, !0) },
        hide: function() {
            g.c.add(this, "hide");
            !0 == this.get("visible", null, !0) && this.set("visible", !1)
        },
        show: function() { g.c.add(this, "show");!1 == this.get("visible", null, !0) && this.set("visible", !0) },
        setCursor: function(a) {
            g.c.add(this, "setCursor");
            this.set("cursor", a)
        },
        setRotation: function(a) {
            g.c.add(this, "setRotation");
            g.l.Ie || this.set("angle", a)
        },
        setAngle: function(a) {
            g.c.add(this, "setAngle");
            g.l.Ie || "number" !== typeof a || this.set("angle", a)
        },
        getAngle: function() { g.c.add(this, "getAngle"); return this.get("angle", null, !0) },
        setOffset: function(a) {
            g.c.add(this, "setOffset");
            this.set("offset", a)
        },
        getOffset: function() {
            g.c.add(this,
                "getOffset");
            return this.get("offset", null, !0)
        },
        setTextAlign: function(a) {
            g.c.add(this, "setTextAlign");
            this.set("textAlign", a)
        },
        getTextAlign: function() { g.c.add(this, "getTextAlign"); return this.get("textAlign", null, !0) },
        setVerticalAlign: function(a) {
            g.c.add(this, "setVerticalAlign");
            this.set("verticalAlign", a)
        },
        getVerticalAlign: function() { g.c.add(this, "getVerticalAlign"); return this.get("verticalAlign", null, !0) },
        setzIndex: function(a) {
            g.c.add(this, "setzIndex");
            this.set("zIndex", a)
        },
        getzIndex: function() {
            g.c.add(this,
                "getzIndex");
            return this.get("zIndex", null, !0)
        },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            this.set("opacity", a)
        },
        setDraggable: function(a) {
            g.c.add(this, "setDraggable");
            this.set("draggable", a)
        },
        getDraggable: function() { g.c.add(this, "getDraggable"); return this.get("draggable", null, !0) },
        moveTo: function(a, b, c) {
            g.c.add(this, "moveTo");
            a = this.Ja(a);
            this.set("move", { ig: a, speed: b, wb: c })
        },
        moveAlong: function(a, b, c, d) {
            g.c.add(this, "moveAlong");
            if (!(2 > a.length)) {
                a = this.Ja(a);
                for (var e = [a[0]], f = a[0], h = 1; h <
                    a.length; h += 1) f.gb(a[h]) || (e.push(a[h]), f = a[h]);
                this.set("move", { ig: e, speed: b, wb: c, ona: d })
            }
        },
        stopMove: function() {
            g.c.add(this, "stopMove");
            this.set("move", !1)
        },
        pauseMove: function() {
            g.c.add(this, "pauseMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "pause";
            this.set("move", a);
            return !0
        },
        resumeMove: function() {
            g.c.add(this, "resumeMove");
            var a = this.get("move");
            if (!a) return !1;
            a.action = "resume";
            this.set("move", a);
            return !0
        },
        setShadow: function(a) {
            g.c.add(this, "setShadow");
            this.set("shadow", a)
        },
        getShadow: function() {
            g.c.add(this,
                "getShadow");
            return this.get("shadow", null, !0)
        },
        setClickable: function(a) {
            g.c.add(this, "setClickable");
            a !== this.get("clickable", null, !0) && this.set("clickable", a)
        },
        getClickable: function() { g.c.add(this, "getClickable"); return this.get("clickable", null, !0) },
        setTitle: function(a, b) { g.c.add(this, "setTitle"); "string" === typeof a && this.set("title", a, b) },
        getTitle: function() { g.c.add(this, "getTitle"); return this.get("title", null, !0) },
        setLabel: function(a) {
            g.c.add(this, "setLabel");
            a && !g.a.xh(a) && (a = g.extend({}, this.get("label"),
                a));
            this.set("label", a)
        },
        getLabel: function() { g.c.add(this, "getLabel"); return this.get("label", null, !0) },
        setTop: function(a, b) {
            g.c.add(this, "setTop");
            this.set("isTop", a, b)
        },
        getTop: function() { g.c.add(this, "getTop"); return this.get("isTop", null, !0) },
        setShape: function(a, b) {
            g.c.add(this, "setShape");
            this.set("shape", a, b)
        },
        getShape: function() { g.c.add(this, "getShape"); return this.get("shape", null, !0) },
        setAnimation: function(a, b) {
            g.c.add(this, "setAnimation");
            this.set("animation", a, b)
        },
        getAnimation: function() {
            g.c.add(this,
                "getAnimation");
            return this.get("animation", null, !0)
        },
        getMap: function() { g.c.add(this, "getMap"); return this.get("map", null, !0) },
        markOnAMAP: function(a) {
            g.c.add(this, "markOnAMAP");
            a = a || {};
            var b = {};
            b.name = a.name || this.get("name", null, !0) || "";
            a = this.Ja(a.position) || this.get("position", null, !0);
            b.y = a.Q;
            b.x = a.R;
            g.ci.mt(g.ci.Wqa(b))
        }
    });
    B.C.Caa = B.C.Hh.extend({
        Naa: Math.pow(2, 31),
        w: { position: null, zooms: [3, 20], opacity: 1, visible: !0, zIndex: 1, rank: 1, extData: null },
        A: function(a) {
            a = a || {};
            this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelMarker";
            g.c.ya(this, a);
            arguments.callee.ma.apply(this, arguments);
            this._LabelMarkerId = g.a.yb(this);
            g.a.tb(this, a);
            this.jf(this.w, !0);
            this.cR = [];
            this.yC = {}
        },
        xn: function(a, b) {
            for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++)
                if (a[d].data.id === c) return d;
            return -1
        },
        K8: function() {
            var a = this.cR || [];
            if (a.length) {
                for (var b =
                        0, c = a.length; b < c; b++) this.on.apply(this, a[b]);
                this.cR = []
            }
        },
        lJ: function() {
            var a = this.f;
            if (!a) return null;
            var a = a.Zf || [],
                b = this.xn(a, this);
            return -1 !== b ? a[b] : null
        },
        getName: function() { g.c.add(this, "getName"); return this.w.name },
        setName: function(a) {
            g.c.add(this, "setName");
            this.w.name = a;
            var b = this.lJ();
            b && (b.opts.title = a)
        },
        getBounds: function() {
            g.c.add(this, "getBounds");
            var a = this.get("position", null, !0);
            try {
                return "string" === typeof a ? a = new g.U(a.split(",")) : "[object Array]" == Object.prototype.toString.apply(a) &&
                    (a = new g.U(a[0], a[1])), new g.me(a, a.cb())
            } catch (b) { return null }
        },
        getPosition: function() {
            g.c.add(this, "getPosition");
            var a = this.f.Zf,
                b = this.xn(a, this);
            return -1 !== b ? a[b].data.position : null
        },
        setPosition: function(a) {
            g.c.add(this, "setPosition");
            this.w.position = a;
            var b = this.f;
            if (b) {
                var c = b.Zf,
                    d = this.xn(c, this); - 1 !== d && (c[d].data.position = a, b.Go())
            }
        },
        getZooms: function() {
            g.c.add(this, "getZooms");
            var a = this.f.Zf,
                b = this.xn(a, this);
            return -1 !== b ? a[b].opts.zooms : null
        },
        setZooms: function(a) {
            g.c.add(this, "setZooms");
            this.w.zooms = a;
            var b = this.f;
            if (b) {
                var c = b.Zf || [],
                    d = this.xn(c, this); - 1 !== d && (c[d].opts.zooms = a, b.Go())
            }
        },
        getOpacity: function() {
            g.c.add(this, "getOpacity");
            var a = this.f.Zf,
                b = this.xn(a, this);
            return -1 !== b ? a[b].opts.opacity : null
        },
        setOpacity: function(a) {
            g.c.add(this, "setOpacity");
            this.w.opacity = a;
            var b = this.f;
            if (b) {
                var c = b.Zf,
                    d = this.xn(c, this); - 1 !== d && (c[d].opts.opacity = a, b.Go())
            }
        },
        getzIndex: function() { g.c.add(this, "getzIndex"); if (this.lJ()) return this.w.zIndex },
        setzIndex: function(a) {
            g.c.add(this, "setzIndex");
            this.w.zIndex = a;
            var b = this.lJ();
            b && (b.opts.zIndex = a, this.f.Go())
        },
        getRank: function() { g.c.add(this, "getRank"); return this.w.rank },
        setRank: function(a) {
            g.c.add(this, "setZIndex");
            var b = this.lJ();
            this.w.rank = a;
            b && (b.data.rank = a, this.f.Go())
        },
        getIcon: function() { g.c.add(this, "getIcon"); return this.w.icon },
        setIcon: function(a) {
            g.c.add(this, "setIcon");
            this.w.icon = this.w.icon ? g.extend({}, this.w.icon, a) : a;
            var b = this.f;
            if (b) {
                var b = b.Zf,
                    c = this.xn(b, this);
                if (-1 !== c) {
                    var d = a.size,
                        e = a.clipSize;
                    d && (a.size = this.f.yG(d));
                    e && (a.clipSize = this.f.yG(e));
                    b[c].opts.icon = g.extend({}, b[c].opts.icon, a);
                    this.f.Go()
                }
            }
        },
        getText: function() { g.c.add(this, "getText"); return this.w.text },
        setText: function(a) {
            g.c.add(this, "setText");
            this.w.text = this.w.text ? g.extend({}, this.w.text, a) : a;
            var b = this.f;
            if (b) {
                var b = b.Zf,
                    c = this.xn(b, this); - 1 !== c && (b[c].data.txt = void 0 == a.content ? b[c].data.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.f.Go())
            }
        },
        setTop: function() {
            var a =
                0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
            g.c.add(this, "setTop");
            this.f && this.f.JU(this, a);
            a ? (this.qca = this.w.zIndex, this.setzIndex(this.Naa)) : this.setzIndex(this.qca || this.w.zIndex)
        },
        getVisible: function() {
            g.c.add(this, "getVisible");
            var a = this.w.visible;
            this.f && a && (a = !this.f.CR(this._LabelMarkerId));
            return a
        },
        getExtData: function() { g.c.add(this, "getExtData"); return this.w.extData },
        setExtData: function(a) {
            g.c.add(this, "setExtData");
            this.w.extData = a
        },
        getOptions: function() { return this.w },
        show: function() {
            g.c.add(this, "show");
            this.w.visible = !0;
            this.f && this.f.add(this);
            return this
        },
        hide: function() {
            g.c.add(this, "hide");
            this.w.visible = !1;
            this.f && this.f.remove(this);
            return this
        },
        on: function(a, b) {
            g.c.add(this, "on");
            if (this.f) {
                this.yC[a] = b;
                var c = this,
                    d = this.f;
                d._markerBindArray || (d._markerBindArray = {});
                var e = this._LabelMarkerId;
                d._markerBindArray[e] || (d._markerBindArray[e] = this);
                d.bR[a] ? d.bR[a]++ : (d.bR[a] = 1, this.f.on(a, function(a) {
                    var b = a.type;
                    if (a && a.data && a.data.data && a.data.data.id && a.data.data.id) {
                        var d =
                            a.data.data.id,
                            b = (d = c.f && c.f._markerBindArray && c.f._markerBindArray[d]) && d.yC[b];
                        d && b && (a.target = d, "function" === typeof b && b(a))
                    }
                }))
            } else this.cR.push(arguments)
        },
        off: function(a) {
            g.c.add(this, "off");
            this.yC[a] && delete this.yC[a];
            Object.keys(this.yC).length || delete this.f._markerBindArray[this._LabelMarkerId]
        }
    });
    B.C.Tn = B.C.Hh.extend({
        w: { visible: !1, items: [] },
        A: function(a) {
            this.CLASS_NAME = "AMap.ContextMenu";
            g.c.ya(this, a);
            this.dh = !0;
            g.a.tb(this, a);
            this.w.items = [];
            this.jf(this.w)
        },
        addItem: function(a, b, c) {
            g.c.add(this, "addItem");
            this.get("items").push({ Qn: a, wb: b, nK: c });
            this.q("items")
        },
        removeItem: function(a, b) {
            g.c.add(this, "removeItem");
            var c = this.get("items"),
                d, e;
            for (e = 0; e < c.length; e += 1)
                if (d = c[e], d.Qn === a && d.wb === b) { c.splice(e, 1); break }
            this.q("items")
        },
        open: function(a, b) {
            g.c.add(this, "open");
            this.D = !0;
            b = g.a.Ja(b);
            this.set("position", b);
            this.map ? this.map && this.map !== a && (this.map.Kz(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
            this.q("open", { type: "open", target: this });
            this.D = !1
        },
        close: function() {
            g.c.add(this, "close");
            this.D = !0;
            this.setMap(null);
            this.map && (this.map = this.map.ry = null, this.q("close", { type: "close", target: this }));
            this.D = !1
        }
    });
    B.C.Ze = B.C.Hh.extend({
        w: { visible: !0, offset: new g.H(0, 0), showShadow: !1, closeWhenClickMap: !1, retainWhenClose: !0, autoMove: !0, altitude: 0, anchor: "bottom-center" },
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
            g.c.ya(this, a);
            a = a || {};
            this.dh = !0;
            a && a.size && (a.size = g.a.Jq(a.size));
            g.a.tb(this, a);
            this.jf(this.w);
            a.position && this.set("position", g.a.Ja(a.position), !0);
            a.height && this.set("altitude", this.jR(a.height), !0)
        },
        open: function(a, b, c) {
            g.c.add(this, "open");
            b = g.a.Ja(b);
            if (a && !this.mL && (b =
                    b || this.get("position", null, !0))) {
                this.q("change", { type: "change", target: this });
                c = this.jR(c) || this.get("altitude");
                var d = this.get("map", null, !0);
                d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.um && a.um.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.D = !0, this.setMap(a), this.D = !1);
                this.q("open", { type: "open", target: this })
            }
        },
        close: function() {
            g.c.add(this, "close");
            this.C && this.C.map && (this.D = !0, this.setMap(null), this.map = null, this.q("change", { type: "change", target: this }),
                this.D = !1)
        },
        getAnchor: function() { g.c.add(this, "getAnchor"); return this.get("anchor", null, !0) },
        setAnchor: function(a) {
            g.c.add(this, "setAnchor");
            this.set("anchor", a);
            this.q("change", { type: "change", target: this })
        },
        setContent: function(a) {
            g.c.add(this, "setContent");
            this.set("content", a);
            this.q("change", { type: "change", target: this })
        },
        getContentU: function() { g.c.add(this, "getContentU"); return this.get("content", null, !0) },
        getContentDom: function() { return this.get("contentDom", null, !0) },
        getContent: function() {
            g.c.add(this,
                "getContent");
            return this.get("content", null, !0)
        },
        setPosition: function(a) {
            g.c.add(this, "setPosition");
            a = g.a.Ja(a);
            this.set("position", a);
            this.q("change", { type: "change", target: this })
        },
        setOffset: function(a) {
            g.c.add(this, "setOffset");
            this.set("offset", a);
            this.q("change", { type: "change", target: this })
        },
        getPosition: function() { g.c.add(this, "getPosition"); return this.get("position", null, !0) },
        setSize: function(a) {
            g.c.add(this, "setSize");
            a = g.a.Jq(a);
            this.set("size", a);
            this.q("change", { type: "change", target: this })
        },
        getSize: function(a) { g.c.add(this, "getSize"); var b = this.get("size", null, !0); if (b) return b; if (this.C && !a) return new g.xd(this.C.sh.offsetWidth, this.C.sh.offsetHeight) },
        getIsOpen: function() { g.c.add(this, "getIsOpen"); return !!this.get("map") }
    });
    B.C.ac = B.C.hM.extend({
        w: { isOutline: !1, outlineColor: "#000000", geodesic: !1, dirColor: "white", showDir: !1, borderWeight: 1 },
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
            g.c.ya(this, a);
            this.D = !0;
            B.C.ac.ad.A.apply(this, arguments);
            this.dh = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
            a.path && (a.path = this.Ja(a.path));
            g.a.tb(this, a);
            this.setOptions(this.w);
            this.D = !1
        },
        getLength: function() {
            g.c.add(this, "getLength");
            for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].He(a[c +
                1]);
            return parseFloat(b.toFixed(2))
        },
        getBounds: function() { var a = this.get("path"); if (!a || !a.length) return null; for (var b = new g.me(180, 90, -180, -90), c = a.length - 1; 0 <= c; c -= 1) b.extend(a[c]); return b }
    });
    (function(a) {
        function b(a, b, c, d) { if (1 <= a) return d; var e = 1 - a; return e * e * b + 2 * e * a * c + a * a * d }

        function c(a, b, c, d, e) {
            if (1 <= a) return e;
            var f = 3 * (c[0] - b[0]),
                h = 3 * (d[0] - c[0]) - f,
                s = 3 * (c[1] - b[1]);
            c = 3 * (d[1] - c[1]) - s;
            return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
        }

        function d(a, c, d, e) { return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])] }

        function e(b, c) { c = a.a.Ja(c); return b.ND(c, 20).yl() }

        function f(b, c) {
            a.a.isArray(c) && (c = new a.H(c[0], c[1]));
            return b.lE(c,
                20)
        }

        function h(b, f, h, n, p, q) {
            var r = null;
            if (b && h && h.length) {
                b = [b];
                b.push.apply(b, h);
                b.push(f);
                h = 0;
                for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
                h = a.extend({ tolerance: 4, interpolateNumLimit: [3, 300] }, q);
                q = h.tolerance;
                h = h.interpolateNumLimit;
                q = Math.max(2, q);
                for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var w = b[u],
                    t = b[u + 1],
                    r = r + Math.abs(t[0] - w[0]),
                    s = s + Math.abs(t[1] - w[1]);
                a: {
                    p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));q = null;
                    switch (b.length) {
                        case 3:
                            q = d;
                            break;
                        case 4:
                            q = c;
                            break;
                        default:
                            r = null;
                            break a
                    }
                    h = [];
                    r = [0].concat(b);
                    for (s = 1; s < p - 2; s++) r[0] = s / p,
                    h.push(q.apply(null, r));h.push(b[b.length - 1]);r = h
                }
            }
            return r || [e(n, f)]
        }
        a.Kw = {
            BGa: d,
            iDa: c,
            HI: function() {
                function a(b, c, d) { return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b }

                function b(a) { return a }
                var c = {},
                    d = "function" === typeof Float32Array;
                return function(e, f, h, s) {
                    function u(b) {
                        if (0 === b) b = 0;
                        else if (1 === b) b = 1;
                        else {
                            for (var c = 0, d = 1; 10 !== d && w[d] <= b; ++d) c += 0.1;
                            --d;
                            var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1,
                                l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                            if (0.001 <= l) {
                                for (c = 0; 4 > c; ++c) {
                                    l = 3 *
                                        (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                                    if (0 === l) break;
                                    d -= (a(d, e, h) - b) / l
                                }
                                b = d
                            } else if (0 === l) b = d;
                            else {
                                var d = c,
                                    c = c + 0.1,
                                    m, n = 0;
                                do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d = m; while (1E-7 < Math.abs(l) && 10 > ++n);
                                b = m
                            }
                            b = a(b, f, s)
                        }
                        return b
                    }
                    if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error("bezier x values must be in [0, 1] range");
                    var v = arguments.toString();
                    if (c[v]) return c[v];
                    if (e === f && h === s) return b;
                    for (var w = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t) w[t] = a(0.1 * t, e, h);
                    return c[v] = u
                }
            }(),
            c4: function(a, b, c, d) {
                var e, f, r = [];
                e = 0;
                for (f =
                    a.length; e < f; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
                return r
            },
            Jqa: function(a, b, c, d) {
                a = this.c4(a, b, c, d);
                c = [];
                d = 0;
                for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
                return c
            }
        }
    })(g);
    B.C.tA = B.C.ac.extend({
        w: { tolerance: 4, interpolateNumLimit: [3, 300] },
        A: function(a) {
            this.CLASS_NAME = "AMap.BezierCurve";
            g.c.ya(this, a);
            B.C.tA.ad.A.apply(this, arguments)
        },
        getLength: function() {
            g.c.add(this, "getLength");
            this.get("map");
            this.D = !0;
            var a = this.getInterpolateLngLats();
            this.D = !1;
            return g.Et.distanceOfLine(a)
        },
        getInterpolateLngLats: function() { g.c.add(this, "getInterpolateLngLats"); var a = this.get("map"); return g.Kw.Jqa(this.get("path"), a && a.oj || g.bi.NL, Math.pow(2, 2), this.w) },
        getSerializedPath: function() {
            g.c.add(this,
                "getSerializedPath");
            for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (e instanceof g.U) {
                    var f = [];
                    if (e.controlPoints)
                        for (var h = 0, k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[h].GR()), f.push(e.controlPoints[h].DR());
                    f.push(e.GR());
                    f.push(e.DR());
                    b.push(f)
                } else b.push(e)
            }
            return b
        },
        Ja: function(a) { var b = typeof a[0]; if (g.a.isArray(a) && "object" === b) { for (b = 0; b < a.length; b += 1) a[b] = this.tja(a[b]); return a } return [this.gGa(a)] },
        tja: function(a) {
            var b;
            if (a instanceof g.U) b =
                a;
            else {
                b = typeof a[0];
                var c, d, e = [];
                if ("string" === b || "number" === b) {
                    d = a.length;
                    if (d % 2) throw Error("LngLat number should be even, now it's " + d);
                    b = new g.U(a[d - 2], a[d - 1]);
                    c = 0;
                    for (d -= 2; c < d; c += 2) e.push(new g.U(a[c], a[c + 1]))
                } else if (g.a.isArray(a[0]))
                    for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new g.U(a[c][0], a[c][1]));
                else throw Error("AMap.LngLat expected, now it's " + a);
                b && e.length && (b.controlPoints = g.a.Ja(e))
            }
            if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
            return b
        }
    });
    B.C.Ec = B.C.hM.extend({
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
            g.c.ya(this, a);
            this.D = !0;
            B.C.Ec.ad.A.apply(this, arguments);
            this.dh = !0;
            a = a || {};
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            a.path && (a.path = this.Ja(a.path));
            g.a.tb(this, g.extend({ fillColor: "#FFAA00", fillOpacity: 0.9 }, a));
            this.setOptions(this.w);
            this.D = !1
        },
        q4: function(a) {
            var b = 6378137 * Math.PI / 180,
                c = 0,
                d = a.length;
            if (3 > d) return 0;
            for (var e = 0; e < d - 1; e += 1) var f = a[e],
                h = a[e + 1],
                k = f.R * b * Math.cos(f.Q * Math.PI / 180),
                f = f.Q * b,
                l = h.R *
                b * Math.cos(h.Q * Math.PI / 180),
                c = c + (k * h.Q * b - l * f);
            e = a[e];
            a = a[0];
            d = e.R * b * Math.cos(e.Q * Math.PI / 180);
            e = e.Q * b;
            h = a.R * b * Math.cos(a.Q * Math.PI / 180);
            c += d * a.Q * b - h * e;
            return 0.5 * Math.abs(c)
        },
        fK: function(a) {
            return a.length ? a[0] instanceof g.U ? [
                [a]
            ] : a[0] instanceof Array && a[0][0] instanceof g.U ? [a] : a : a
        },
        getArea: function() {
            g.c.add(this, "getArea");
            for (var a = this.get("path", null, !0), a = this.fK(a), b = 0, c = 0, d = a.length; c < d; c += 1)
                for (var e = a[c], b = b + this.q4(e[0]), f = 1; f < e.length; f += 1) b -= this.q4(e[f]);
            return Number(b.toFixed(2))
        },
        toString: function() {
            g.c.add(this, "toString");
            for (var a = this.get("path"), a = this.fK(a), b = [], c = 0, d = a.length; c < d; c += 1) {
                for (var e = a[c], f = [], h = 0, k = e.length; h < k; h += 1) f.push(e[h].join(";"));
                b.push(f.join("|"))
            }
            return b.join("^")
        },
        getBounds: function() {
            var a = this.get("path");
            if (a && a.length) {
                for (var a = this.fK(a), b = new g.me(180, 90, -180, -90), c = 0, d = a.length; c < d; c += 1)
                    for (var e = a[c][0], f = e.length - 1; 0 <= f; f -= 1) b.extend(e[f]);
                return b
            }
            return null
        },
        contains: function(a) {
            g.c.add(this, "contains");
            a = g.a.Ja(a);
            var b = this.get("path"),
                b = this.fK(b);
            a = [a.R, a.Q];
            for (var c = 0, d = b.length; c < d; c += 1) { for (var e = b[c], f = !1, h = 0, k = e.length; h < k && (f = this.Xma(e[h]), g.wd.sq(f) || f.reverse(), f = g.wd.Sd(a, f, 0 === h ? !0 : !1), 0 < h && (f = !f), f); h += 1); if (f) return !0 }
            return !1
        },
        Xma: function(a) { for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].R, a[c].Q]); return b }
    });
    B.C.jh = B.C.ed.extend({
        w: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], radius: 1E3, fillColor: "#006600", fillOpacity: 0.9, unit: "miter" },
        A: function(a) {
            this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
            g.c.ya(this, a);
            this.D = !0;
            B.C.jh.ad.A.apply(this, arguments);
            a = a || {};
            a.center && (a.center = g.a.Ja(a.center));
            a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
            g.a.kk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
            g.a.tb(this, a);
            this.dh = this.w.center ? !0 : !1;
            this.setOptions(this.w);
            this.D = !1
        },
        setCenter: function(a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ja(a)) && a instanceof g.U && (this.C && this.C.get("deltaPos") && this.C.set("deltaPos", [0, 0], !0), this.set("center", a), this.q("change", { type: "change", target: this }), this.dh || (this.dh = !0, this.get("map") && this.get("map").q("overlays")), b || this.q("setCenter"))
        },
        getCenter: function() {
            g.c.add(this, "getCenter");
            var a = this.get("center", null, !0);
            this.C && this.C.get("deltaPos") && (a =
                this.C.St([a], this.C.get("deltaPos"))[0]);
            return a
        },
        reset: function() {
            var a = this.get("center", null, !0);
            this.C && this.C.get("deltaPos") && (a = this.C.St([a], this.C.get("deltaPos"))[0], this.C.set("deltaPos", [0, 0], !0));
            this.set("center", a)
        },
        setRadius: function(a, b) {
            g.c.add(this, "setRadius");
            this.set("radius", a);
            this.q("change", { type: "change", target: this });
            b || this.q("setRadius")
        },
        getPath: function(a) {
            g.c.add(this, "getPath");
            a = a || 36;
            for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e <
                a; e += 1) {
                var f = Math.PI * e / a * 2,
                    h = Math.cos(f) * c,
                    f = Math.sin(f) * c;
                d.push(b.offset(h, f))
            }
            return d
        },
        getRadius: function() { g.c.add(this, "getRadius"); return this.get("radius", null, !0) },
        getBounds: function() {
            var a = this.get("center"),
                b = this.get("radius");
            if (!a) return null;
            var c = a.offset(-b, -b),
                a = a.offset(b, b);
            return new g.me(c, a)
        },
        contains: function(a) { g.c.add(this, "contains"); return this.get("center").He(a) <= this.get("radius") ? !0 : !1 }
    });
    B.C.VV = B.C.jh.extend({
        A: function(a) {
            this.CLASS_NAME = "AMap.CircleMarker";
            g.c.ya(this, a);
            a = a || {};
            a.unit = "px";
            void 0 === a.radius ? a.radius = 20 : g.a.kk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20));
            B.C.VV.ad.A.apply(this, arguments)
        },
        getBounds: function() {
            this.D = !0;
            var a = this.getCenter();
            this.D = !1;
            return new g.me(a, a.cb())
        },
        contains: function(a) {
            g.c.add(this, "contains");
            this.D = !0;
            var b = this.getMap();
            this.D = !1;
            if (!b) return !1;
            var c = this.get("center");
            b.D = !0;
            var d = !1;
            c.He(a) <=
                this.get("radius") * b.getResolution(c) && (d = !0);
            b.D = !1;
            return d
        }
    });
    var rc = g.ca.extend({
        A: function(a) {
            var b = Array(3),
                c;
            c = a instanceof Array ? a : a instanceof g.Hl || a instanceof g.Oa ? a.elements : arguments;
            b[0] = c[0] || 0;
            b[1] = c[1] || 0;
            b[2] = c[2] || 0;
            this.elements = b
        },
        length: function() { return Math.sqrt(this.d6()) },
        d6: function() { var a = this.elements; return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] },
        normalize: function() {
            var a = this.elements,
                b = a[0],
                c = a[1],
                d = a[2],
                e = Math.sqrt(b * b + c * c + d * d);
            if (e) { if (1 === e) return this } else return a[0] = 0, a[1] = 0, a[2] = 0, this;
            e = 1 / e;
            a[0] = b * e;
            a[1] = c * e;
            a[2] = d * e;
            return this
        },
        cb: function() { return new g.Oa(this) },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            return this
        },
        set: function(a, b, c) {
            var d = this.elements;
            d[0] = a;
            d[1] = b;
            d[2] = c
        },
        gb: function(a) {
            var b = this.elements;
            a = a.elements;
            return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
        },
        Kn: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            return this
        },
        add: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] += a[0];
            b[1] += a[1];
            b[2] += a[2];
            return this
        },
        Ula: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements;
            e[0] = c[0] + d[0];
            e[1] = c[1] + d[1];
            e[2] = c[2] + d[2];
            return this
        },
        sub: function(a) {
            a = a.elements;
            var b = this.elements;
            b[0] -= a[0];
            b[1] -= a[1];
            b[2] -= a[2];
            return this
        },
        Wz: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements;
            e[0] = c[0] - d[0];
            e[1] = c[1] - d[1];
            e[2] = c[2] - d[2];
            return this
        },
        gs: function(a) {
            a = a.elements;
            var b = this.elements;
            b[0] = b[1] * a[2] - b[2] * a[1];
            b[1] = b[2] * a[0] - b[0] * a[2];
            b[2] = b[0] * a[1] - b[1] * a[0];
            return this
        },
        wy: function(a, b) {
            var c = a.elements,
                d = b.elements,
                e = this.elements;
            e[0] = c[1] * d[2] -
                c[2] * d[1];
            e[1] = c[2] * d[0] - c[0] * d[2];
            e[2] = c[0] * d[1] - c[1] * d[0];
            return this
        },
        Pf: function(a) { a = a.elements; var b = this.elements; return b[0] * a[0] + b[1] * a[1] + b[2] * a[2] },
        He: function(a) { return Math.sqrt(this.Z2(a)) },
        Z2: function(a) {
            var b = a.elements,
                c = this.elements;
            a = c[0] - b[0];
            var d = c[1] - b[1],
                b = c[2] - b[2];
            return a * a + d * d + b * b
        },
        tf: function(a) {
            var b = this.elements[0],
                c = this.elements[1],
                d = this.elements[2];
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.elements[1] =
                (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this
        }
    });
    g.Oa = rc;
    g.Oa.Xb({ Pf: "dot", cb: "clone", add: "add", sub: "sub", Ula: "addVectors", Wz: "subVectors", wy: "crossVectors", normalize: "normalize", length: "length" });
    var sc = g.ca.extend({
        A: function(a) {
            var b = Array(4),
                c;
            c = a instanceof Array ? a : arguments;
            b[0] = c[0];
            b[1] = c[1];
            b[2] = c[2];
            b[3] = c[3] || 1;
            this.elements = b
        },
        copy: function(a) {
            var b = this.elements;
            a = a.elements;
            b[0] = a[0];
            b[1] = a[1];
            b[2] = a[2];
            b[3] = void 0 !== a[3] ? a[3] : 1;
            return this
        },
        multiply: function(a) {
            var b = this.elements;
            b[0] *= a;
            b[1] *= a;
            b[2] *= a;
            b[3] *= a
        },
        tf: function(a) {
            var b = this.elements[0],
                c = this.elements[1],
                d = this.elements[2],
                e = this.elements[3];
            a = a.elements;
            this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
            this.elements[1] =
                a[1] * b + a[5] * c + a[9] * d + a[13] * e;
            this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
            this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
            return this
        }
    });
    g.Hl = sc;

    function vc(a, b) {
        this.wz = void 0 !== a ? a : new g.Oa(1, 0, 0);
        this.LC = void 0 !== b ? b : 0
    }
    g.Vw = vc;
    vc.prototype = {
        set: function(a, b) {
            this.wz.copy(a);
            this.LC = b;
            return this
        },
        normalize: function() {
            var a = 1 / this.wz.length();
            this.wz.Kn(a);
            this.LC *= a;
            return this
        },
        AI: function(a) { return this.wz.Pf(a) + this.LC }
    };

    function wc(a, b, c, d, e) {
        a.wz.set(b, c, d);
        a.LC = e;
        return a
    };

    function xc(a, b, c, d, e, f) { this.iE = [void 0 !== a ? a : new g.Vw, void 0 !== b ? b : new g.Vw, void 0 !== c ? c : new g.Vw, void 0 !== d ? d : new g.Vw, void 0 !== e ? e : new g.Vw, void 0 !== f ? f : new g.Vw] }
    g.eW = xc;
    xc.prototype = {
        set: function(a, b, c, d, e, f) {
            var h = this.iE;
            h[0].copy(a);
            h[1].copy(b);
            h[2].copy(c);
            h[3].copy(d);
            h[4].copy(e);
            h[5].copy(f);
            return this
        },
        cb: function() { return (new g.eW).copy(this) },
        copy: function(a) { for (var b = this.iE, c = 0; 6 > c; c++) b[c].copy(a.iE[c]); return this },
        CJ: function() {
            var a = new g.Oa,
                b = new g.Oa,
                c = a.elements,
                d = b.elements;
            return function(e) {
                var f = this.iE,
                    h = e.max.elements;
                e = e.min.elements;
                for (var k = 0; 6 > k; k++) {
                    var l = f[k],
                        m = l.wz.elements;
                    c[0] = 0 < m[0] ? e[0] : h[0];
                    d[0] = 0 < m[0] ? h[0] : e[0];
                    c[1] = 0 < m[1] ?
                        e[1] : h[1];
                    d[1] = 0 < m[1] ? h[1] : e[1];
                    c[2] = 0 < m[2] ? e[2] : h[2];
                    d[2] = 0 < m[2] ? h[2] : e[2];
                    m = l.AI(a);
                    l = l.AI(b);
                    if (0 > m && 0 > l) return !1
                }
                return !0
            }
        }()
    };
    (function(a) {
        function b(a) { this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] }
        a.gM = function(a) { this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]] };
        b.prototype.DU = function() {
            var a = this.elements;
            a[0] = 1;
            a[4] = 0;
            a[8] = 0;
            a[12] = 0;
            a[1] = 0;
            a[5] = 1;
            a[9] = 0;
            a[13] = 0;
            a[2] = 0;
            a[6] = 0;
            a[10] = 1;
            a[14] = 0;
            a[3] = 0;
            a[7] = 0;
            a[11] = 0;
            a[15] = 1
        };
        b.prototype.set = function(a) {
            if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
                this
        };
        b.prototype.toFixed = function(b) { for (var d = this.elements, e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.a.vb(d[e], b)); return this };
        b.prototype.concat = function(a) {
            var b, e, f, h, k, l, m;
            e = b = this.elements;
            f = a.elements;
            if (b === f)
                for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
            for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
            return this
        };
        b.multiply = function(b, d) {
            var e = Array(16),
                f, h,
                k, l, m, n, p;
            k = h = b.elements;
            l = d.elements;
            if (h === l)
                for (f = 0; 16 > f; ++f) e[f] = h[f];
            for (f = 0; 4 > f; f++) h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
            return new a.Dc(e)
        };
        b.prototype.multiply = b.prototype.concat;
        b.prototype.Dh = function(b) {
            var d = this.elements;
            b = b.elements;
            var e = new a.Hl,
                f = e.elements;
            f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
            f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
                d[13];
            f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
            f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
            return e
        };
        b.prototype.cA = function() {
            var a, b;
            a = this.elements;
            b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        };
        b.prototype.sxa = function(a) {
            var b, e, f;
            b = a.elements;
            a = this.elements;
            e = [];
            e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]);
            e[4] = -b[4] *
                (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
            e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]);
            e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]);
            e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]);
            e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]);
            e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
                (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
            e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]);
            e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]);
            e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]);
            e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]);
            e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
                b[2] * b[5]);
            e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]);
            e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]);
            e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]);
            e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]);
            f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
            if (0 === f) return this;
            f = 1 / f;
            for (b = 0; 16 > b; b++) a[b] = e[b] * f;
            return this
        };
        b.prototype.Gg = function() { return (new b).sxa(this) };
        b.prototype.GU = function(a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || e === f || h === k) throw "null frustum";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = 0;
            l[9] = 0;
            l[10] = -2 * p;
            l[11] = 0;
            l[12] = -(b + a) * m;
            l[13] = -(f + e) * n;
            l[14] = -(k + h) * p;
            l[15] = 1;
            return this
        };
        b.prototype.Yua = function(a, d, e, f, h, k) { return this.concat((new b).GU(a, d, e, f, h, k)) };
        b.prototype.qxa = function(a, b, e, f, h, k) {
            var l, m, n, p;
            if (a === b || f === e || h === k) throw "null frustum";
            if (0 >= h) throw "near <= 0";
            if (0 >=
                k) throw "far <= 0";
            m = 1 / (b - a);
            n = 1 / (f - e);
            p = 1 / (k - h);
            l = this.elements;
            l[0] = 2 * h * m;
            l[1] = 0;
            l[2] = 0;
            l[3] = 0;
            l[4] = 0;
            l[5] = 2 * h * n;
            l[6] = 0;
            l[7] = 0;
            l[8] = (b + a) * m;
            l[9] = (f + e) * n;
            l[10] = -(k + h) * p;
            l[11] = -1;
            l[12] = 0;
            l[13] = 0;
            l[14] = -2 * h * k * p;
            l[15] = 0;
            return this
        };
        b.prototype.sR = function(a, d, e, f, h, k) { return this.concat((new b).qxa(a, d, e, f, h, k)) };
        b.prototype.T8 = function(a, b, e, f) {
            var h, k;
            if (e === f || 0 === b) throw "null frustum";
            if (0 >= e) throw "near <= 0";
            if (0 >= f) throw "far <= 0";
            a /= 2;
            k = Math.sin(a);
            if (0 === k) throw "null frustum";
            h = 1 / (f - e);
            k = Math.cos(a) /
                k;
            a = this.elements;
            a[0] = k / b;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 0;
            a[5] = k;
            a[6] = 0;
            a[7] = 0;
            a[8] = 0;
            a[9] = 0;
            a[10] = -(f + e) * h;
            a[11] = -1;
            a[12] = 0;
            a[13] = 0;
            a[14] = -2 * e * f * h;
            a[15] = 0;
            return this
        };
        b.prototype.perspective = function(a, d, e, f) { return this.concat((new b).T8(a, d, e, f)) };
        b.prototype.bw = function(a, b, e) {
            var f = this.elements;
            f[0] = a;
            f[4] = 0;
            f[8] = 0;
            f[12] = 0;
            f[1] = 0;
            f[5] = b;
            f[9] = 0;
            f[13] = 0;
            f[2] = 0;
            f[6] = 0;
            f[10] = e;
            f[14] = 0;
            f[3] = 0;
            f[7] = 0;
            f[11] = 0;
            f[15] = 1;
            return this
        };
        b.prototype.scale = function(a, b, e) {
            var f = this.elements;
            f[0] *= a;
            f[4] *= b;
            f[8] *= e;
            f[1] *= a;
            f[5] *= b;
            f[9] *= e;
            f[2] *= a;
            f[6] *= b;
            f[10] *= e;
            f[3] *= a;
            f[7] *= b;
            f[11] *= e;
            return this
        };
        b.prototype.W8 = function(a, b, e) {
            var f = this.elements;
            f[12] = a;
            f[13] = b;
            f[14] = e;
            return this
        };
        b.prototype.translate = function(a, b, e) {
            var f = this.elements;
            f[12] += f[0] * a + f[4] * b + f[8] * e;
            f[13] += f[1] * a + f[5] * b + f[9] * e;
            f[14] += f[2] * a + f[6] * b + f[10] * e;
            f[15] += f[3] * a + f[7] * b + f[11] * e;
            return this
        };
        b.prototype.Sz = function(a, b, e, f) {
            var h, k, l, m, n, p, q, r;
            a = Math.PI * a / 180;
            h = this.elements;
            k = Math.sin(a);
            a = Math.cos(a);
            0 !== b && 0 === e && 0 === f ?
                (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
                    r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
            h[15] = 1;
            return this
        };
        b.prototype.rotate = function(a, d, e, f) { return this.concat((new b).Sz(a, d, e, f)) };
        b.prototype.dt = function(a) { return this.rotate(a, 1, 0, 0) };
        b.prototype.et = function(a) { return this.rotate(a, 0, 1, 0) };
        b.prototype.ft = function(a) { return this.rotate(a, 0, 0, 1) };
        b.prototype.Xu = function(a) {
            for (var b = 0, e = this.elements.length; b < e; b++)
                if (this.elements[b] !==
                    a.elements[b]) return !1;
            return !0
        };
        b.prototype.cb = function() { return new b(this.elements.slice(0)) };
        a.Dc = b
    })(g);
    B.C.Dt = B.C.Ec.extend({
        w: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], radius: [1E3, 1E3], fillColor: "#006600", fillOpacity: 0.9 },
        A: function() {
            var a = this,
                b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Ellipse";
            g.c.ya(this, b);
            var b = g.extend({}, this.w, b),
                c = this.Tr(b);
            b.path = c;
            B.C.Dt.ad.A.call(this, b);
            this.set("path", c);
            this.get("center") && this.get("map") || (this.dh = !1);
            this.on("movepoly", function(b) {
                var c =
                    a.get("map");
                b = c.Nd(c.Bb(a.get("center")).add(b.uK));
                "3D" === c.view.type && a.set("deltaPos", [0, 0], !0);
                a.set("center", b)
            })
        },
        Tr: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                b = [],
                c = a.center || this.get("center"),
                d = a.map || this.get("map");
            if (c && d)
                for (var c = g.a.Ja(c), e = a.radius || this.get("radius"), f = d.Bb(c), a = f.x, f = f.y, h = g.a.map(e, function(a) { return a / d.getResolution(c, 20) }), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                    var n = m * l,
                        n = {
                            x: a + e * Math.cos(n),
                            y: f +
                                h * Math.sin(n)
                        };
                    b.push(d.Nd(n))
                }
            return b
        },
        mapChanged: function() {
            g.a.Sh(B.C.Dt.ad.mapChanged) && B.C.Dt.ad.mapChanged.apply(this);
            this.D = !0;
            this.setPath(this.Tr());
            this.D = !1;
            !this.dh && this.get("map") && (this.dh = !0, this.get("map").q("overlays"))
        },
        setCenter: function(a, b) {
            g.c.add(this, "setCenter");
            (a = g.a.Ja(a)) && a instanceof g.U && (this.C && this.C.get("deltaPos") && this.C.set("deltaPos", [0, 0], !0), this.set("center", a), this.set("path", this.Tr()), this.dh || (this.dh = !0, this.get("map") && this.get("map").q("overlays")),
                b || (this.q("setCenter"), this.q("change", { type: "change", target: this })))
        },
        setRadius: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setRadius");
            a && 2 === a.length && (this.set("radius", a), this.set("path", this.Tr()), b || (this.q("change", { type: "change", target: this }), this.q("setPath")))
        },
        setOptions: function(a) {
            B.C.Dt.ad.setOptions.call(this, a);
            this.D = !0;
            a.radius && this.setRadius(a.radius, !0);
            a.center && this.setCenter(a.center, !0);
            this.D = !1
        },
        getRadius: function() {
            g.c.add(this,
                "getRadius");
            return this.get("radius", null, !0)
        },
        getCenter: function() {
            g.c.add(this, "getCenter");
            var a = this.get("center", null, !0);
            this.C && this.C.get("deltaPos") && this.C.St([a], this.C.get("deltaPos"))[0];
            return a
        }
    });
    B.C.Kt = B.C.Ec.extend({
        w: { visible: !0, zIndex: 10, strokeColor: "#006600", strokeOpacity: 0.9, strokeWeight: 3, strokeStyle: "solid", strokeDasharray: [10, 5], fillColor: "#006600", fillOpacity: 0.9 },
        A: function() {
            var a = this,
                b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            this.CLASS_NAME = "AMap.Rectangle";
            g.c.ya(this, b);
            b = g.extend({}, this.w, b);
            this.D = !0;
            var c = this.Tr(b);
            b.path = c;
            B.C.Kt.ad.A.call(this, b);
            this.setPath(c);
            this.w.bounds && this.get("map") || (this.dh = !1);
            this.on("movepoly", function(b) {
                var c = a.get("map"),
                    f = a.get("bounds"),
                    h = c.Nd(c.Bb(f.xc).add(b.uK));
                b = c.Nd(c.Bb(f.oc).add(b.uK));
                "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                a.set("bounds", new g.me(h, b))
            });
            this.D = !1
        },
        Tr: function() {
            var a = [],
                b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
            if (b) {
                b.D = !0;
                var c = b.getSouthWest(),
                    d = b.getNorthEast();
                b.D = !1;
                g.a.Tb([new g.U(c.R, c.Q, !0), new g.U(d.R, c.Q, !0), new g.U(d.R, d.Q, !0), new g.U(c.R, d.Q, !0)], function(b) { return a.push(b) })
            }
            return a
        },
        mapChanged: function() {
            g.a.Sh(B.C.Kt.ad.mapChanged) &&
                B.C.Kt.ad.mapChanged.apply(this);
            this.D = !0;
            this.setPath(this.Tr());
            this.D = !1;
            !this.dh && this.get("map") && (this.dh = !0, this.get("map").q("overlays"))
        },
        setOptions: function(a) {
            this.D = !0;
            B.C.Kt.ad.setOptions.call(this, a);
            a.bounds && this.setBounds(a.bounds, !0);
            this.D = !1
        },
        setBounds: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            g.c.add(this, "setBounds");
            a && a instanceof g.me && (this.set("bounds", a), this.set("path", this.Tr()), this.dh || (this.dh = !0, this.get("map") && this.get("map").q("overlays")),
                b || (this.q("change", { type: "change", target: this }), this.q("setBounds")))
        },
        getBounds: function() { g.c.add(this, "getBounds"); return this.get("bounds", null, !0) }
    });
    B.C.KW = B.C.ub.extend({
        w: { text: "", textAlign: "center", verticalAlign: "middle", offset: new g.H(0, 0) },
        A: function(a) {
            this.CLASS_NAME = "AMap.Text";
            g.c.ya(this, a);
            B.C.KW.ad.A.apply(this, arguments);
            this.ega();
            this.D = !0;
            this.setText(this.get("text"));
            this.setStyle(this.get("style"));
            this.D = !1
        },
        ega: function() {
            if (!this.jC) {
                var a = document.createElement("div");
                a.className = "amap-overlay-text-container";
                this.jC = a
            }
        },
        getText: function() { g.c.add(this, "getText"); return this.get("text", null, !0) },
        setText: function(a) {
            g.c.add(this,
                "setText");
            a || 0 === a || (a = "");
            g.g.vya(this.jC, "amap-overlay-text-empty", !a);
            g.c.add(this, "setText");
            this.set("text", a);
            this.jC.innerHTML = a;
            this.b8()
        },
        setStyle: function(a) {
            g.c.add(this, "setStyle");
            a = a || {};
            for (var b in a) a.hasOwnProperty(b) && (this.jC.style[b] = a[b]);
            this.b8()
        },
        b8: function() {
            this.D = !0;
            this.setContent(this.jC);
            this.setShadow(this.getShadow());
            this.D = !1
        }
    });
    g.hW = {
        find: function(a) { return g.a.find(this.fx || [], a) },
        $I: function() { return this.fx || [] },
        Kd: function(a) { return null !== this.find(a) },
        add: function(a) {
            var b = this,
                c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Qs,
                d = this.fx || (this.fx = []);
            g.a.isArray(a) ? g.a.Tb(a, function(a) { b.add(a, c) }) : null === this.find(a) && (d.push(a), c(a));
            return this
        },
        remove: function(a) {
            var b = this,
                c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Qs,
                d = this.fx;
            if (d)
                if (g.a.isArray(a)) g.a.Tb(a, function(a) {
                    b.remove(a,
                        c)
                });
                else { var e = g.a.indexOf(d, a); - 1 !== e && (c(d[e]), d.splice(e, 1)) }
            return this
        },
        clear: function() {
            this.Tb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Qs);
            this.fx = [];
            return this
        },
        Tb: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Qs,
                b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            g.a.Tb(this.fx || [], function() {
                for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                c = d[0];
                g.a.Sh(c.Tb) ? c.Tb(a, b) : a.apply(b || c, d)
            });
            return this
        },
        Ro: function(a) {
            for (var b =
                    arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.Tb(function(b) { b && g.a.Sh(b[a]) && b[a].apply(b, c) });
            return this
        },
        h: function(a) {
            var b = arguments;
            this.Tb(function(a) { a.on.apply(a, b) });
            return this
        },
        G: function(a) {
            var b = arguments;
            this.Tb(function(a) { a.off.apply(a, b) });
            return this
        },
        addListener: function() { this.h.apply(this, arguments) },
        by: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Qs,
                c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            this.Tb(function(d) {
                d.on.call(d,
                    event,
                    function() {
                        b();
                        d.off(a)
                    }, c)
            })
        },
        removeListener: function(a) { this.G(a.$Q, a.iS, a.cf) },
        O: function(a, b) { this.Tb(function(c) { c.emit(a, b) }) }
    };
    B.C.Vn = B.C.Hh.extend({
        ka: [g.hW],
        A: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            this.CLASS_NAME = "AMap.OverlayGroup";
            g.c.ya(this);
            B.C.Vn.ad.A.apply(this);
            this.map = null;
            this.add(a)
        },
        wc: function(a) {
            g.c.add(this, "setMap");
            this.Ro("setMap", a);
            this.Ro("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        },
        mapChanged: function() {},
        sC: function(a) {
            var b = this;
            g.c.add(this, "addOverlay");
            this.add(a, function(a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) });
            return this
        },
        Kz: function(a) {
            var b =
                this;
            g.c.add(this, "removeOverlay");
            this.remove(a, function(a) {
                a.D = !0;
                a.getMap() === b.map && a.setMap(null);
                a.D = !1
            });
            return this
        },
        jd: function() {
            var a = this;
            g.c.add(this, "clearOverlays");
            this.clear(function(b) {
                b.D = !0;
                b.getMap() === a.map && b.setMap(null);
                b.D = !1
            });
            return this
        },
        Zy: function() {
            g.c.add(this, "hide");
            this.Ro("hide");
            return this
        },
        show: function() {
            g.c.add(this, "show");
            this.Ro("show");
            return this
        },
        tb: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g.c.add(this, "setOptions");
            this.Ro("setOptions", a);
            return this
        }
    });
    B.C.Vn.Xb({ find: "getOverlay", $I: "getOverlays", sC: ["addOverlay", "addOverlays"], Kd: "hasOverlay", Kz: ["removeOverlay", "removeOverlays"], jd: "clearOverlays", Tb: "eachOverlay", wc: "setMap", tb: "setOptions", show: "show", Zy: "hide", h: "on", G: "off" });
    (function(a, b) {
        function c(a, b) { if (!a.length) return !1; for (var c = 0, d = a.length; c < d; c++) { var e = a[c]; if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1 } return !0 }

        function d(a) { for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates); return b }

        function e(a) {
            if (!a || !a.length) return [];
            a = b.a.Ja(a);
            for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].yl();
            a[a.length - 1].gb(a[0]) || c.push(a[0].yl());
            return c
        }

        function f(a) {
            if (!a) return [];
            a = b.a.Ja(a);
            b.a.isArray(a[0]) ||
                (a = [a]);
            for (var c = [], d = 0, f = a.length; d < f; d++) c[d] = e(a[d]);
            return c
        }
        a.C.fW = a.C.Vn.extend({
            A: function(c) {
                this.CLASS_NAME = "AMap.GeoJSON";
                b.c.ya(this, c);
                a.C.fW.ad.A.call(this, []);
                this.D = !0;
                this.w = b.extend({ getMarker: function(b, c) { return new a.C.ub({ innerOverlay: !0, position: c }) }, getPolyline: function(b, c) { return new a.C.ac({ path: c, innerOverlay: !0 }) }, getPolygon: function(b, c) { return new a.C.Ec({ path: c, innerOverlay: !0 }) }, coordsToLatLng: function(a) { return a } }, c);
                if (!this.w.coordsToLatLngs) {
                    var d = this.w.coordsToLatLng;
                    this.w.coordsToLatLngs = function(a) { for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c])); return b }
                }
                this.importData(this.w.geoJSON);
                this.D = !1
            },
            importData: function(a) {
                b.c.add(this, "importData");
                if (a && (a = this.$fa(a), a.length)) {
                    this.clearOverlays();
                    this.sC(a);
                    var c = this.w.map;
                    if (c)
                        for (var d = 0, e = a.length; d < e; d++) a[d].D = !0, a[d].setMap(c), a[d].D = !1
                }
            },
            toGeoJSON: function() { b.c.add(this, "toGeoJSON"); for (var a = this.$I(), c = [], d = 0, e = a.length; d < e; d++) a[d].D = !0, c[d] = a[d].toGeoJSON(), a[d].D = !1; return c },
            $fa: function(a) {
                if (a) {
                    b.a.isArray(a) || (a = [a]);
                    for (var c = [], d = 0, e = a.length; d < e; d++) {
                        var f = this.aga(a[d]);
                        f && c.push(f)
                    }
                    return c
                }
            },
            BX: function(a) {
                var b = "Feature" === a.type ? a.geometry : a,
                    b = this.w.coordsToLatLng(b ? b.coordinates : null),
                    b = this.w.getMarker(a, b);
                this.Kr(a, b);
                return b
            },
            Qca: function(c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.BX(b.extend({}, c, {
                    type: "Feature",
                    properties: { _isAmap: !0, _pointIndex: f, _parentProperities: c.properties },
                    geometry: {
                        type: "Point",
                        coordinates: d[f]
                    }
                })));
                d = new a.C.Vn(e);
                this.Kr(c, d);
                return d
            },
            AX: function(a) {
                var b = "Feature" === a.type ? a.geometry : a,
                    b = this.w.coordsToLatLngs(b ? b.coordinates : null),
                    b = this.w.getPolyline(a, b);
                this.Kr(a, b);
                return b
            },
            Pca: function(c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.AX(b.extend({}, c, { type: "Feature", properties: { _isAmap: !0, _lineStringIndex: f, _parentProperities: c.properties }, geometry: { type: "LineString", coordinates: d[f] } })));
                d = new a.C.Vn(e);
                this.Kr(c, d);
                return d
            },
            CX: function(a) {
                for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.w.coordsToLatLngs(b[d]));
                b = this.w.getPolygon(a, c);
                this.Kr(a, b);
                return b
            },
            Rca: function(c) {
                for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.CX(b.extend({}, c, { type: "Feature", properties: { _isAmap: !0, _polygonIndex: f, _parentProperities: c.properties }, geometry: { type: "Polygon", coordinates: d[f] } })));
                d = new a.C.Vn(e);
                this.Kr(c, d);
                return d
            },
            Jca: function(c) {
                for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], f = 0, n = d.length; f < n; f++) e.push(this.SN(b.extend({}, c, { type: "Feature", properties: { _isAmap: !0, _geometryIndex: f, _parentProperities: c.properties }, geometry: d[f] })));
                d = new a.C.Vn(e);
                this.Kr(c, d);
                return d
            },
            aga: function(b) {
                if (b) switch (b.type) {
                    case "Feature":
                        return this.SN(b);
                    case "FeatureCollection":
                        for (var c = b.features, d = [], e = 0, f = c.length; e < f; e++) {
                            var p = this.SN(c[e]);
                            p && d.push(p)
                        }
                        c = new a.C.Vn(d);
                        this.Kr(b, c);
                        return c;
                    default:
                        throw Error("Invalid GeoJSON object." + b.type);
                }
            },
            Kr: function(a, c) { c && a.properties && c.setExtData && (c.D = !0, c.setExtData(b.extend({}, c.getExtData() || {}, { _geoJsonProperties: a.properties })), c.D = !1) },
            SN: function(a) {
                var b = "Feature" === a.type ? a.geometry : a;
                if (!(b && b.coordinates || b)) return null;
                switch (b.type) {
                    case "Point":
                        return this.BX(a);
                    case "MultiPoint":
                        return this.Qca(a);
                    case "LineString":
                        return this.AX(a);
                    case "MultiLineString":
                        return this.Pca(a);
                    case "Polygon":
                        return this.CX(a);
                    case "MultiPolygon":
                        return this.Rca(a);
                    case "GeometryCollection":
                        return this.Jca(a);
                    default:
                        throw Error("Invalid GeoJSON geometry." + b.type);
                }
            }
        });
        a.C.Vn.Gb({
            toGeoJSON: function(a) {
                b.c.add(this, "toGeoJSON");
                a = a || this.$I();
                for (var e = [], f = 0, m = a.length; f < m; f++) a[f].toGeoJSON && (a[f].D = !0, e[f] = a[f].toGeoJSON(), a[f].D = !1);
                this.D = !0;
                a = this.getExtData() || {};
                this.D = !1;
                if (c(e, "Point")) e = { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "MultiPoint", coordinates: d(e) } };
                else if (c(e, "LineString")) e = {
                    type: "Feature",
                    properties: a._geoJsonProperties || {},
                    geometry: { type: "MultiLineString", coordinates: d(e) }
                };
                else if (c(e, "Polygon")) e = { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "MultiPolygon", coordinates: d(e) } };
                else if (c(e, "*")) {
                    a = a._geoJsonProperties || {};
                    for (var f = [], m = 0, n = e.length; m < n; m++) f.push(e[m].geometry);
                    e = { type: "Feature", properties: a, geometry: { type: "GeometryCollection", geometries: f } }
                } else e = { type: "FeatureCollection", properties: a._geoJsonProperties || {}, features: e };
                return e
            }
        });
        a.C.ub.Gb({
            toGeoJSON: function() {
                b.c.add(this,
                    "toGeoJSON");
                this.D = !0;
                var a = this.getExtData() || {},
                    c = this.getPosition().yl();
                this.D = !1;
                return { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "Point", coordinates: c } }
            }
        });
        a.C.ac.Gb({
            toGeoJSON: function() {
                b.c.add(this, "toGeoJSON");
                this.D = !0;
                var a = this.getExtData() || {},
                    c = this.getPath();
                this.D = !1;
                return { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "LineString", coordinates: e(c) } }
            }
        });
        a.C.Ec.Gb({
            toGeoJSON: function() {
                b.c.add(this, "toGeoJSON");
                this.D = !0;
                var a = this.getExtData() || {},
                    c = this.getPath();
                this.D = !1;
                if (b.a.isArray(c[0]) && b.a.isArray(c[0][0])) { for (var d = [], e = 0; e < c.length; e += 1) d.push(f(c[e])); return { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "MultiPolygon", coordinates: d } } }
                return { type: "Feature", properties: a._geoJsonProperties || {}, geometry: { type: "Polygon", coordinates: f(c) } }
            }
        })
    })(B, g);
    B.o.WL = B.o.Yb.extend({
        ka: [g.hW],
        A: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            this.CLASS_NAME = "AMap.LayerGroup";
            g.c.ya(this, b);
            B.o.WL.ad.A.call(this, b);
            this.map = null;
            this.add(a)
        },
        wc: function(a) {
            g.c.add(this, "setMap");
            this.Ro("setMap", a);
            this.set("map", a);
            this.map = a;
            return this
        },
        mapChanged: function() {},
        SH: function(a) {
            var b = this;
            g.c.add(this, "addLayer");
            this.add(a, function(a) { b.map && (a.D = !0, a.setMap(b.map), a.D = !1) });
            return this
        },
        vk: function(a) {
            var b = this;
            g.c.add(this,
                "removeLayer");
            this.remove(a, function(a) {
                a.D = !0;
                a.getMap() === b.map && a.setMap(null);
                a.D = !1
            });
            return this
        },
        tna: function() {
            var a = this;
            g.c.add(this, "clearLayers");
            this.clear(function(b) {
                b.D = !0;
                b.getMap() === a.map && b.setMap(null);
                b.D = !1
            });
            return this
        },
        Zy: function() {
            g.c.add(this, "hide");
            this.Ro("hide");
            return this
        },
        show: function() {
            g.c.add(this, "show");
            this.Ro("show");
            return this
        },
        reload: function() { this.Ro("reload"); return this },
        tb: function() {
            var a = this,
                b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g.c.add(this, "setOptions");
            var c = g.a.keys(b);
            g.a.Tb(c, function(c) { a.Ro("set", c, b[c]) });
            return this
        }
    });
    B.o.WL.Xb({ find: "getLayer", $I: "getLayers", SH: ["addLayer", "addLayers"], Kd: "hasLayer", vk: ["removeLayer", "removeLayers"], tna: "clearLayers", Tb: "eachLayer", wc: "setMap", tb: "setOptions", show: "show", Zy: "hide", reload: "reload", h: "on", G: "off" });
    g.Taa = B.Rb.extend({
        A: function(a, b) {
            b && (b.center = b.position, b.zoom = 11);
            arguments.callee.ma.apply(this, arguments);
            window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
        }
    });
    g.Uaa = B.C.ub.extend({ A: function(a) { arguments.callee.ma.apply(this, arguments) } });
    g.wd = {
        ls: function(a, b) { for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.wd.Oxa(a, [b[d], b[e]])); return Math.sqrt(c) },
        Oxa: function(a, b) { return this.eL(a, this.B2(a, b)) },
        eL: function(a, b) {
            var c = a[0] - b[0],
                d = a[1] - b[1];
            return c * c + d * d
        },
        wGa: function(a, b, c, d) {
            d = d || 1E-6;
            if (c[0] === b[0]) {
                var e = Math.min(b[1], c[1]);
                b = Math.max(b[1], c[1]);
                return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
            }
            var e = Math.min(b[0], c[0]),
                f = Math.max(b[0], c[0]);
            return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
                a[0] >= e && a[0] <= f
        },
        B2: function(a, b) {
            var c = a[0],
                d = a[1],
                e = b[0],
                f = b[1],
                h = e[0],
                e = e[1],
                k = f[0],
                f = f[1],
                l = k - h,
                m = f - e,
                c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
            0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
            return [h, e]
        },
        sq: function(a) { for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h; return 0 < c },
        Sd: function(a, b, c) {
            var d = a[0];
            a = a[1];
            var e = !1,
                f, h, k, l, m = b.length,
                n = 0;
            for (l = m - 1; n < m; l = n, n += 1) {
                var p = !1;
                f = b[n][0];
                h = b[n][1];
                k = b[l][0];
                l = b[l][1];
                if (f === d && h === a || k ===
                    d && l === a) return c ? !0 : !1;
                if (h < a === l >= a) {
                    f = (k - f) * (a - h) / (l - h) + f;
                    if (d === f) return c ? !0 : !1;
                    p = d < f
                }
                p && (e = !e)
            }
            return e
        },
        K7: function(a, b) {
            function c(a, b, c, d) {
                var e = [a[0] - b[0], a[1] - b[1]],
                    f = [c[0] - d[0], c[1] - d[1]];
                a = a[0] * b[1] - a[1] * b[0];
                c = c[0] * d[1] - c[1] * d[0];
                d = 1 / (e[0] * f[1] - e[1] * f[0]);
                return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
            }

            function d(a, b, c) { return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0]) }
            var e, f, h, k, l = a;
            e = b[b.length - 2];
            for (var m = 0, n = b.length - 1; m < n; m++) {
                f = b[m];
                var p = l,
                    l = [];
                h = p[p.length - 1];
                for (var q = 0, r =
                        p.length; q < r; q++) k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k;
                e = f
            }
            if (3 > l.length) return [];
            l.push(l[0]);
            return l
        }
    };
    (function(a) {
        function b(b, c) {
            var d;
            a: {
                switch (b) {
                    case "EPSG3395":
                        d = a.bi.$V;
                        break a;
                    case "EPSG4326":
                        d = a.bi.aW;
                        break a
                }
                d = a.bi.NL
            }
            return {
                project: function(b) { a.a.isArray(b) && (b = new a.U(b[0], b[1])); return d.ND(b, c).yl() },
                unproject: function(b) { a.a.isArray(b) && (b = new a.H(b[0], b[1])); return d.lE(b, c).yl() },
                normalizePoint: function(b) { return a.a.Ja(b) },
                distance: function(b, c) {
                    c = this.normalizePoint(c);
                    if (a.a.isArray(c)) return this.distanceToLine(b, c);
                    b = this.normalizePoint(b);
                    var d = a.Nm.Ou,
                        e = Math.cos,
                        f = b.Q * d,
                        h =
                        c.Q * d,
                        k = 2 * a.Nm.UQ,
                        d = c.R * d - b.R * d,
                        e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
                    return k * Math.asin(Math.sqrt(e))
                },
                ringArea: function(b) {
                    b = this.normalizeLine(b);
                    var c = a.Nm.UQ * a.Nm.Ou,
                        d = 0,
                        e = b.length;
                    if (3 > e) return 0;
                    for (var f = 0; f < e - 1; f += 1) var h = b[f],
                        k = b[f + 1],
                        u = h.R * c * Math.cos(h.Q * a.Nm.Ou),
                        h = h.Q * c,
                        v = k.R * c * Math.cos(k.Q * a.Nm.Ou),
                        d = d + (u * k.Q * c - v * h);
                    f = b[f];
                    b = b[0];
                    e = f.R * c * Math.cos(f.Q * a.Nm.Ou);
                    f = f.Q * c;
                    k = b.R * c * Math.cos(b.Q * a.Nm.Ou);
                    d += e * b.Q * c - k * f;
                    return 0.5 * Math.abs(d)
                },
                sphericalCalotteArea: function(b) {
                    var c = a.Nm.UQ;
                    b = c - c *
                        Math.cos(b / c);
                    return 2 * Math.PI * c * b
                }
            }
        }

        function c() {
            return {
                normalizePoint: function(a) { return a && a.x && a.y ? [a.x, a.y] : a },
                distance: function(a, b) {
                    var c = a[0] - b[0],
                        d = a[1] - b[1];
                    return Math.sqrt(c * c + d * d)
                },
                project: function(a) { return a },
                unproject: function(a) { return a },
                ringArea: function(a) {
                    for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
                        var q = a[p - 1],
                            r = a[p];
                        b[0] = e[0] - r[0];
                        b[1] = e[1] - r[1];
                        c[0] = e[0] - q[0];
                        c[1] = e[1] - q[1];
                        d += b[0] * c[1] - b[1] * c[0]
                    }
                    return d / 2
                }
            }
        }

        function d(a) {
            for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e =
                a[d],
                n = a[d + 1],
                b = b + (n[0] - e[0]) * (n[1] + e[1]);
            if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]);
            return 0 >= b
        }

        function e(b) {
            this.CLASS_NAME = "AMap.GeometryUtil";
            this.Vb = a.extend({ onSegmentTolerance: 5, crs: "EPSG3857", maxZoom: 20 }, b);
            this.setCrs(this.Vb.crs)
        }
        a.extend(e.prototype, {
            clone: function(b) { return new e(a.extend({}, this.Vb, b)) },
            isPoint: function(b) { return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0])) },
            normalizePoint: function(a) { return a },
            normalizeLine: function(a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
                return b
            },
            normalizeMultiLines: function(b) { a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]); for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d])); return c },
            setCrs: function(d) { a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Vb.maxZoom)) },
            distance: function() { throw Error("distance Not implemented!"); },
            Fx: function(a, b) {
                a = this.normalizeLine(a);
                this.isPoint(a[0]) || (a = a[0]);
                for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
                !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
                return c
            },
            Yja: function(a) { for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c])); return b },
            closestOnSegment: function(b, c, d) { b = a.wd.B2(this.project(b), this.Fx([c, d])); return this.unproject(b) },
            closestOnLine: function(a, b) {
                b = this.normalizeLine(b);
                for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
                    var p = this.closestOnSegment(a, b[e], b[e + 1]),
                        q = this.distance(a, p);
                    q < c && (c = q, d = p)
                }
                return d
            },
            distanceToSegment: function(a,
                b, c) { return this.distanceToLine(a, [b, c]) },
            distanceToLine: function(a, b) {
                b = this.normalizeLine(b);
                this.isPoint(b[0]) || (b = b[0]);
                for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]),
                    c = Math.min(c, this.distance(a, n));
                return c
            },
            distanceToPolygon: function(a, b) { return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b) },
            isPointOnSegment: function(a, b, c, d) { if (!d && 0 !== d || 0 > d) d = this.Vb.onSegmentTolerance; return this.distanceToSegment(a, b, c) <= d },
            isPointOnLine: function(a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e - 1; d++)
                    if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
                return !1
            },
            isPointOnRing: function(a, b, c) {
                b = this.normalizeLine(b);
                for (var d = 0, e = b.length; d < e; d++)
                    if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
                return !1
            },
            isPointOnPolygon: function(a, b, c) {
                b = this.normalizeMultiLines(b);
                for (var d = 0, e = b.length; d < e; d++)
                    if (this.isPointOnRing(a, b[d], c)) return !0;
                return !1
            },
            makesureClockwise: function(a) { d(a) || (a = [].concat(a), a.reverse()); return a },
            makesureAntiClockwise: function(a) {
                d(a) &&
                    (a = [].concat(a), a.reverse());
                return a
            },
            isPointInRing: function(b, c, d) {
                d || (c = this.normalizeLine(c));
                c = this.Fx(c, !0);
                return a.wd.Sd(this.project(b), c, !1)
            },
            isRingInRing: function(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++)
                    if (!this.isPointInRing(a[d], b, c)) return !1;
                d = 0;
                for (e = b.length; d < e; d++)
                    if (this.isPointInRing(b[d], a, c)) return !1;
                return !0
            },
            isPointInPolygon: function(a, b) { b = this.normalizeMultiLines(b); for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1); return c },
            doesSegmentsIntersect: function(a,
                b, c, d, e) {
                e = e ? [a, b, c, d] : this.Fx([a, b, c, d]);
                a = e[0];
                b = e[1];
                c = e[2];
                d = e[3];
                e = !1;
                var n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]),
                    p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
                a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
                0 !== a && (b = n / a, a = p / a, 0 <= b && 1 >= b && 0 <= a && 1 >= a && (e = !0));
                return e
            },
            doesSegmentLineIntersect: function(a, b, c) {
                c = this.normalizeLine(c);
                for (var d = 0, e = c.length; d < e - 1; d++)
                    if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
                return !1
            },
            doesSegmentRingIntersect: function(a, b, c, d) {
                d ||
                    (c = this.normalizeLine(c));
                for (var e = 0, n = c.length; e < n; e++)
                    if (this.doesSegmentsIntersect(a, b, c[e], c[e === n - 1 ? 0 : e + 1], d)) return !0;
                return !1
            },
            doesSegmentPolygonIntersect: function(a, b, c) {
                c = this.normalizeMultiLines(c);
                for (var d = 0, e = c.length; d < e; d++)
                    if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
                return !1
            },
            doesLineLineIntersect: function(a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++)
                    if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            },
            doesLineRingIntersect: function(a, b) {
                a = this.normalizeLine(a);
                for (var c = 0, d = a.length; c < d - 1; c++)
                    if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0;
                return !1
            },
            doesPolygonPolygonIntersect: function(a, b) { return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1 },
            doesPolygonContainsPolygon: function(a, b, c) { return this.isRingInRing(b, a, !0) || (c ? this.doesRingRingIntersect(b, a, !0) : !1) },
            doesRingRingIntersect: function(a, b, c) {
                c || (a = this.normalizeLine(a));
                for (var d = 0, e = a.length; d < e; d++)
                    if (this.doesSegmentRingIntersect(a[d], a[d === e - 1 ?
                            0 : d + 1], b, c)) return !0;
                return !1
            },
            KP: function(a, b) {
                for (var c = 0, d = 0; d < a.length - 1; d += 1) {
                    var e = this.distance(a[d], a[d + 1]);
                    if (e + c < b) c += e;
                    else return c = (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
                }
                return null
            },
            RX: function(a, b) {
                function c() {
                    var a = [e[0] - n[0], e[1] - n[1]],
                        b = [p[0] - q[0], p[1] - q[1]],
                        d = e[0] * n[1] - e[1] * n[0],
                        f = p[0] * q[1] - p[1] * q[0],
                        h = 1 / (a[0] * b[1] - a[1] * b[0]);
                    return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
                }

                function d(a) { return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0]) }
                a = this.makesureAntiClockwise(a);
                b = this.makesureClockwise(b);
                var e, n, p, q, r = a;
                e = b[b.length - 1];
                for (var s = 0, u = b.length; s < u; s++) {
                    n = b[s];
                    var v = r,
                        r = [];
                    p = v[v.length - 1];
                    for (var w = 0, t = v.length; w < t; w++) q = v[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q;
                    e = n
                }
                return r
            },
            ringRingClip: function(a, b) {
                a = this.Fx(a);
                b = this.Fx(b);
                var c = this.RX(a, b);
                0 == c.length && (c = this.RX(b, a));
                return this.Yja(c)
            },
            ringArea: function() { throw Error("distance Not implemented!"); },
            distanceOfLine: function(a) {
                a = this.normalizeLine(a);
                for (var b = 0, c = 0, d = a.length; c <
                    d - 1; c++) b += this.distance(a[c], a[c + 1]);
                return b
            },
            isClockwise: function(a) { a = this.Fx(a); return d(a) }
        });
        a.Et = new e;
        a.gi = new e;
        a.gi.setCrs("plane")
    })(g);
    g.PL = function() {
        var a = {};
        (function() {
            function b(a) {
                for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f],
                    k = a[f + 1],
                    b = b + (k[0] - h[0]) * (k[1] + h[1]);
                if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1]) h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]);
                return 0 >= b
            }
            a.Eta = function(a) { b(a) && (a = [].concat(a), a.reverse()); return a };
            a.w5 = b
        })();
        (function() {
            function b(a) {
                var b = a.length;
                2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
            }

            function c(a, b) { for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1]) }
            a.Yh = function(a, e) {
                var f =
                    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                    h = arguments[3];
                e = e || [];
                var k = [],
                    l = [];
                b(a);
                c(k, a);
                var m = a.length;
                e.forEach(b);
                for (var n = 0; n < e.length; n++) l.push(m), m += e[n].length, c(k, e[n]);
                l = (this.qL ? this.qL : g.Fc.qL)(k, l);
                if (h) { f = []; for (n = 0; n < l.length; n += 1) h = 2 * l[n], f.push([k[h], k[h + 1]]); return f }
                if (f)
                    for (n = 0; n < l.length; n += 1) l[n] += f;
                return l
            }
        })();
        return a
    };
    (function(a) {
        a.sF = function() {
            function a(b, c, d, e, f) {
                for (var h, k = 0, l = c, n = d - e; l < d; l += e) k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l;
                if (f === 0 < k)
                    for (f = c; f < d; f += e) h = r(f, b[f], b[f + 1], h);
                else
                    for (f = d - e; f >= c; f -= e) h = r(f, b[f], b[f + 1], h);
                h && m(h, h.next) && (s(h), h = h.next);
                return h
            }

            function c(a, b) {
                if (!a) return a;
                b || (b = a);
                var c = a,
                    d;
                do
                    if (d = !1, c.o9 || !m(c, c.next) && 0 !== l(c.Ia, c, c.next)) c = c.next;
                    else {
                        s(c);
                        c = b = c.Ia;
                        if (c === c.next) break;
                        d = !0
                    }
                while (d || c !== b);
                return b
            }

            function d(a, b, e, f, r, u, C) {
                if (a) {
                    if (!C && u) {
                        var E = a,
                            A = E;
                        do null === A.z &&
                            (A.z = h(A.x, A.y, f, r, u)), A.hp = A.Ia, A = A.pl = A.next; while (A !== E);
                        A.hp.pl = null;
                        A.hp = null;
                        var E = A,
                            z, G, H, I, P, L, O = 1;
                        do {
                            A = E;
                            H = E = null;
                            for (I = 0; A;) {
                                I++;
                                G = A;
                                for (z = P = 0; z < O && (P++, G = G.pl, G); z++);
                                for (L = O; 0 < P || 0 < L && G;) 0 !== P && (0 === L || !G || A.z <= G.z) ? (z = A, A = A.pl, P--) : (z = G, G = G.pl, L--), H ? H.pl = z : E = z, z.hp = H, H = z;
                                A = G
                            }
                            H.pl = null;
                            O *= 2
                        } while (1 < I)
                    }
                    for (E = a; a.Ia !== a.next;) {
                        A = a.Ia;
                        G = a.next;
                        if (u) a: if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1;
                            else {
                                P = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u);
                                O = h(H.x >
                                    a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u);
                                for (z = a.pl; z && z.z <= O;) {
                                    if (z !== a.Ia && z !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, z.x, z.y) && 0 <= l(z.Ia, z, z.next)) { H = !1; break a }
                                    z = z.pl
                                }
                                for (z = a.hp; z && z.z >= P;) {
                                    if (z !== a.Ia && z !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, z.x, z.y) && 0 <= l(z.Ia, z, z.next)) { H = !1; break a }
                                    z = z.hp
                                }
                                H = !0
                            }
                        else a: if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1;
                            else {
                                for (P = a.next.next; P !== a.Ia;) {
                                    if (k(H.x, H.y, a.x, a.y, I.x, I.y, P.x, P.y) && 0 <= l(P.Ia, P, P.next)) { H = !1; break a }
                                    P = P.next
                                }
                                H = !0
                            } if (H) b.push(A.ue /
                            e), b.push(a.ue / e), b.push(G.ue / e), s(a), E = a = G.next;
                        else if (a = G, a === E) {
                            if (C)
                                if (1 === C) {
                                    C = b;
                                    E = e;
                                    A = a;
                                    do G = A.Ia, H = A.next.next, !m(G, H) && n(G, A, A.next, H) && p(G, H) && p(H, G) && (C.push(G.ue / E), C.push(A.ue / E), C.push(H.ue / E), s(A), s(A.next), A = a = H), A = A.next; while (A !== a);
                                    a = A;
                                    d(a, b, e, f, r, u, 2)
                                } else {
                                    if (2 === C) a: {
                                        C = a;do {
                                            for (E = C.next.next; E !== C.Ia;) {
                                                if (A = C.ue !== E.ue)
                                                    if (A = void 0, A = C.next.ue !== E.ue)
                                                        if (A = void 0, A = C.Ia.ue !== E.ue) {
                                                            A = A = void 0;
                                                            b: {
                                                                A = C;do {
                                                                    if (A.ue !== C.ue && A.next.ue !== C.ue && A.ue !== E.ue && A.next.ue !== E.ue && n(A, A.next, C,
                                                                            E)) { A = !0; break b }
                                                                    A = A.next
                                                                } while (A !== C);A = !1
                                                            }
                                                            if (A = !A)
                                                                if (A = void 0, A = p(C, E))
                                                                    if (A = void 0, A = p(E, C)) {
                                                                        A = C;
                                                                        G = !1;
                                                                        H = (C.x + E.x) / 2;
                                                                        I = (C.y + E.y) / 2;
                                                                        do A.y > I !== A.next.y > I && A.next.y !== A.y && H < (A.next.x - A.x) * (I - A.y) / (A.next.y - A.y) + A.x && (G = !G), A = A.next; while (A !== C);
                                                                        A = G
                                                                    }
                                                        }
                                                if (A) {
                                                    a = q(C, E);
                                                    C = c(C, C.next);
                                                    a = c(a, a.next);
                                                    d(C, b, e, f, r, u);
                                                    d(a, b, e, f, r, u);
                                                    break a
                                                }
                                                E = E.next
                                            }
                                            C = C.next
                                        } while (C !== a)
                                    }
                                }
                            else d(c(a), b, e, f, r, u, 1);
                            break
                        }
                    }
                }
            }

            function e(a, b) { return a.x - b.x }

            function f(a, b) {
                var c = b,
                    d = a.x,
                    e = a.y,
                    f = -Infinity,
                    h;
                do {
                    if (e <= c.y && e >= c.next.y &&
                        c.next.y !== c.y) {
                        var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
                        if (l <= d && l > f) {
                            f = l;
                            if (l === d) { if (e === c.y) return c; if (e === c.next.y) return c.next }
                            h = c.x < c.next.x ? c : c.next
                        }
                    }
                    c = c.next
                } while (c !== b);
                if (!h) return null;
                if (d === f) return h.Ia;
                for (var l = h, m = h.x, n = h.y, s = Infinity, r, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (r = Math.abs(e - c.y) / (d - c.x), (r < s || r === s && c.x > h.x) && p(c, a) && (h = c, s = r)), c = c.next;
                return h
            }

            function h(a, b, c, d, e) {
                a = 32767 * (a - c) * e;
                b = 32767 * (b - d) * e;
                a = (a | a << 8) & 16711935;
                a = (a | a << 4) & 252645135;
                a = (a | a << 2) & 858993459;
                b = (b | b << 8) & 16711935;
                b = (b | b << 4) & 252645135;
                b = (b | b << 2) & 858993459;
                return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
            }

            function k(a, b, c, d, e, f, h, k) { return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) * (f - k) - (e - h) * (d - k) }

            function l(a, b, c) { return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y) }

            function m(a, b) { return a.x === b.x && a.y === b.y }

            function n(a, b, c, d) { return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b) }

            function p(a,
                b) { return 0 > l(a.Ia, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Ia, b) : 0 > l(a, b, a.Ia) || 0 > l(a, a.next, b) }

            function q(a, b) {
                var c = new u(a.ue, a.x, a.y),
                    d = new u(b.ue, b.x, b.y),
                    e = a.next,
                    f = b.Ia;
                a.next = b;
                b.Ia = a;
                c.next = e;
                e.Ia = c;
                d.next = c;
                c.Ia = d;
                f.next = d;
                d.Ia = f;
                return d
            }

            function r(a, b, c, d) {
                a = new u(a, b, c);
                d ? (a.next = d.next, a.Ia = d, d.next.Ia = a, d.next = a) : (a.Ia = a, a.next = a);
                return a
            }

            function s(a) {
                a.next.Ia = a.Ia;
                a.Ia.next = a.next;
                a.hp && (a.hp.pl = a.pl);
                a.pl && (a.pl.hp = a.hp)
            }

            function u(a, b, c) {
                this.ue = a;
                this.x = b;
                this.y = c;
                this.pl = this.hp =
                    this.z = this.next = this.Ia = null;
                this.o9 = !1
            }
            return {
                qL: function(h, k, l) {
                    l = l || 2;
                    var m = k && k.length,
                        n = m ? k[0] * l : h.length,
                        p = a(h, 0, n, l, !0),
                        s = [];
                    if (!p) return s;
                    var r, u, z, G;
                    if (m) {
                        var H = l,
                            m = [],
                            I, P, L;
                        G = 0;
                        for (I = k.length; G < I; G++) {
                            P = k[G] * H;
                            L = G < I - 1 ? k[G + 1] * H : h.length;
                            P = a(h, P, L, H, !1);
                            P === P.next && (P.o9 = !0);
                            var O = L = P;
                            do L.x < O.x && (O = L), L = L.next; while (L !== P);
                            m.push(O)
                        }
                        m.sort(e);
                        for (G = 0; G < m.length; G++) {
                            k = m[G];
                            H = p;
                            if (H = f(k, H)) k = q(H, k), c(k, k.next);
                            p = c(p, p.next)
                        }
                    }
                    if (h.length > 80 * l) {
                        r = z = h[0];
                        u = m = h[1];
                        for (H = l; H < n; H += l) G = h[H], k =
                            h[H + 1], G < r && (r = G), k < u && (u = k), G > z && (z = G), k > m && (m = k);
                        z = Math.max(z - r, m - u);
                        z = 0 !== z ? 1 / z : 0
                    }
                    d(p, s, l, r, u, z);
                    return s
                }
            }
        };
        a.$$ = a.sF()
    })(g);
    (function(a) {
        function b(a) {
            var b = a.length;
            2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
        }

        function c(a, b) { for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1]) }
        a.Yn = {
            ri: function(a) { for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1]; return 0.5 * c },
            w5: function(b) { return 0 > a.Yn.ri(b) },
            normalize: function(b) {
                var c;
                if (b) {
                    c = [];
                    for (var f = 0, h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.U ? [b[f].R, b[f].Q] : b[f] instanceof a.H ? [b[f].x, b[f].y] :
                        b[f]
                }
                return c
            },
            Yh: function(d, e) {
                e = e || [];
                var f = [],
                    h = [];
                b(d);
                c(f, d);
                var k = d.length;
                e.forEach(b);
                for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
                return a.$$.qL(f, h)
            }
        }
    })(g);
    g.tI = function(a, b, c) {
        g.c.add({ CLASS_NAME: "convertFrom" }, b);
        var d = g.r.Yd + "/v3/assistant/coordinate/convert";
        a = g.a.Ja(a);
        var e = [];
        if (a instanceof Array) {
            for (var f = 0, h = a.length; f < h; f += 1) e.push(a[f] + "");
            e = e.join(";")
        } else e = a + "";
        b = ["key=" + g.r.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
        d += 0 < b.length ? "?" + b.join("&") : "";
        d = new g.jb.zb(d, { callback: "callback" });
        d.h("complete", function(a) {
            if ("1" === a.status) {
                a = a.locations.split(";");
                for (var b = 0; b < a.length; b += 1) {
                    var d = a[b].split(",");
                    a[b] = new AMap.LngLat(d[0],
                        d[1])
                }
                c && "function" === typeof c && c("complete", { info: "ok", locations: a })
            } else c && "function" === typeof c && c("error", a.info)
        }, this);
        d.h("error", function(a) { c && "function" === typeof c && c("error", a.info) }, this)
    };
    g.jb = g.jb || {};
    g.jb.mM = g.ca.extend({
        ka: [g.va],
        A: function(a, b) {
            this.w = { callback: "cbk", type: "json", charset: "utf-8" };
            b = b || {};
            g.a.tb(this, b);
            this.url = a;
            this.send(a, b.Ed, b.J2, b.qU, b.responseType)
        },
        send: function(a) {
            var b = g.g.create("script");
            b.type = "text/javascript";
            b.charset = this.w.charset;
            var c = this;
            g.l.Ie ? b.onreadystatechange = function() { "loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete") } : (b.onload = function() { c.q("complete") }, b.onerror = function() { c.q("error", { status: 0, info: "service error", url: a }) });
            b.src = a;
            document.getElementsByTagName("head")[0].appendChild(b)
        }
    });
    g.jb.zb = g.jb.mM.extend({
        cna: function() { if (g.a.J8) return g.a.hL.push(this), !0 },
        Pwa: function() { this.q("error", { info: "TIME_OUT_A" }) },
        send: function(a, b, c, d) {
            function e() {
                window[f] = null;
                try { window[f] = null } catch (a) {}
                h.onerror = null;
                h.parentNode && h.parentNode.removeChild(h)
            }
            if (!this.w.gy || !this.cna()) {
                a = encodeURI(a);
                var f = this.w.fun;
                if (!f || window[f]) f = g.a.a4("jsonp_", 6) + "_";
                var h = document.createElement("script");
                h.type = "text/javascript";
                h.charset = "utf-8";
                h.async = !0;
                var k = this;
                g.l.Ie || (h.onerror = function() {
                    e();
                    k.q("error", { info: "REQUEST_FAILED", url: a })
                });
                window[f] = function(a) {
                    e();
                    if (k.w.callbackFunction) k.w.callbackFunction.call(k.w.context, a);
                    else if (3E4 === a.errcode && a.data) g.a.J8 = !0, g.sb.load("AMap.AntiCrabFrame", function() {
                        g.a.gy || (g.a.gy = new g.L$);
                        g.a.hL.push(k);
                        g.a.gy.open(k.w.Ed, a.data.host, k.fE || "", k.url)
                    });
                    else {
                        if (a instanceof Array || "string" === typeof a) a = { data: a };
                        a.VDa = f;
                        k.q("complete", a)
                    }
                };
                b = "?"; - 1 !== a.indexOf("?") && (b = "&");
                b = a + b + this.w.callback + "=" + f;
                if (-1 !== a.indexOf(g.r.Yd + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") ||
                    -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.r.Sp), b += "&csid=" + g.a.fF(), b += "&sdkversion=" + g.r.vo;
                if (c = this.w.JI) {
                    var l = [],
                        m;
                    for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
                    k.fE = l.join("&")
                }
                h.src = d ? b + "&rereq=true" : b;
                g.jb.zb.aea = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
                g.jb.zb.aea.appendChild(h)
            }
        }
    });
    g.jb.XMLHttpRequest = g.jb.mM.extend({
        send: function(a, b, c, d, e) {
            var f = this;
            if ((g.l.Ie || g.l.c5) && window.XDomainRequest) {
                var h = this.E$ = new XDomainRequest;
                h.onerror = function(b) { f.q("error", { url: a, data: b }) };
                h.onload = function() { f.q("complete", { url: a, data: h.responseText }) };
                h.open(b || "GET", a);
                setTimeout(function() { h.send(c || void 0) }, 0)
            } else {
                var k = this.E$ = new XMLHttpRequest;
                k.onreadystatechange = function() {
                    4 === k.readyState && 200 === k.status ? f.q("complete", {
                        url: a,
                        data: "arraybuffer" === k.responseType || "json" === k.responseType ?
                            k.response : k.responseText
                    }) : 404 === k.status && (k.abort(), f.q("error", { url: a, data: "404" }))
                };
                k.onerror = function(b) {
                    k.abort();
                    f.q("error", { url: a, data: b })
                };
                k.open(b || "GET", a);
                "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
                e && (k.responseType = e);
                k.send(c || void 0)
            }
        },
        abort: function() { this.E$.abort() }
    });
    for (var $ = {
            v: "1.4.15",
            Pixel: g.H,
            LngLat: g.U,
            Size: g.xd,
            Bounds: g.me,
            ArrayBounds: g.rp,
            PixelBounds: g.Yf,
            Panorama: g.Taa,
            PanoramaMarker: g.Uaa,
            Map: B.Rb,
            View2D: B.OF,
            GroundImage: B.o.RL,
            Marker: B.C.ub,
            ImageMarker: B.C.zAa,
            Text: B.C.KW,
            Icon: B.C.fi,
            MarkerShape: B.C.Jaa,
            Polyline: B.C.ac,
            BezierCurve: B.C.tA,
            Polygon: B.C.Ec,
            Circle: B.C.jh,
            CircleMarker: B.C.VV,
            Ellipse: B.C.Dt,
            Rectangle: B.C.Kt,
            ContextMenu: B.C.Tn,
            InfoWindow: B.C.Ze,
            Buildings: B.o.Q$,
            TileLayer: B.o.qb,
            ImageLayer: B.o.CA,
            CanvasLayer: B.o.S$,
            VideoLayer: B.o.zba,
            VectorLayer: B.o.ed,
            MassMarks: B.o.Laa,
            CompositeLayer: B.o.W$,
            LabelsLayer: B.o.nr,
            LabelMarker: B.C.Caa,
            LayerGroup: B.o.WL,
            OverlayGroup: B.C.Vn,
            GeoJSON: B.C.fW,
            CANVAS: "canvas",
            DOM: "dom",
            convertFrom: g.tI,
            Http: { JSONP: g.jb.zb },
            event: { CLASS_NAME: "AMap.event" }
        }, yc = "addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger".split(" "), Ic = 0; Ic < yc.length; Ic += 1) $.event[yc[Ic]] = function() {
        var a = g.event[yc[Ic]],
            b = yc[Ic];
        return function() {
            g.c.ya($.event);
            g.c.add($.event, b);
            return a.apply(g.event, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil = { CLASS_NAME: "AMap.GeometryUtil" };
    for (var Jc = "distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon".split(" "), Ic =
            0; Ic < Jc.length; Ic += 1) $.GeometryUtil[Jc[Ic]] = function() {
        var a = g.Et[Jc[Ic]],
            b = Jc[Ic];
        return function() {
            g.c.ya($.GeometryUtil);
            g.c.add($.GeometryUtil, b);
            return a.apply(g.Et, Array.prototype.slice.call(arguments))
        }
    }();
    $.GeometryUtil.triangulateShape = function(a, b) {
        g.c.ya($.GeometryUtil);
        g.c.add($.GeometryUtil, "triangulateShape");
        a = g.Yn.normalize(a);
        b = g.Yn.normalize(b);
        return g.Yn.Yh(a, b)
    };
    $.PlaneGeometryUtil = { CLASS_NAME: "AMap.PlaneGeometryUtil" };
    for (Ic = 0; Ic < Jc.length; Ic += 1) $.PlaneGeometryUtil[Jc[Ic]] = function() {
        var a = g.gi[Jc[Ic]],
            b = Jc[Ic];
        return function() {
            g.c.ya($.PlaneGeometryUtil);
            g.c.add($.PlaneGeometryUtil, b);
            return a.apply(g.gi, Array.prototype.slice.call(arguments))
        }
    }();
    $.PlaneGeometryUtil.triangulateShape = function(a, b) {
        g.c.ya($.PlaneGeometryUtil);
        g.c.add($.PlaneGeometryUtil, "triangulateShape");
        a = g.Yn.normalize(a);
        b = g.Yn.normalize(b);
        return g.Yn.Yh(a, b)
    };
    $.plugin = $.service = B.Rb.prototype.plugin;
    $.TileLayer.Satellite = B.o.qb.EW;
    $.TileLayer.RoadNet = B.o.qb.AW;
    $.TileLayer.google = B.o.qb.QL;
    $.TileLayer.Flexible = B.o.qb.zA;
    $.TileLayer.WMS = B.o.qb.Aba;
    $.TileLayer.WMTS = B.o.qb.Bba;
    $.TileLayer.Traffic = B.o.qb.MW;
    $.Panorama.Events = B.event;
    $.TileLayer.PanoramaLayer = B.o.qb.HAa;
    $.UA = { ie: g.l.Ds, ielt9: g.l.Ie, ielt11: g.l.Sra, mobile: g.l.ba, android: g.l.Yl, ios: g.l.ED };
    $.Browser = {
        ua: navigator.userAgent,
        mobile: g.l.ba,
        plat: g.l.Ez,
        mac: g.l.oz,
        windows: g.l.Sza,
        ios: g.l.ED,
        iPad: g.l.Lra,
        iPhone: g.l.Mra,
        android: g.l.Yl,
        android23: g.l.Xla,
        chrome: g.l.chrome,
        firefox: g.l.iR,
        safari: g.l.zE,
        wechat: g.l.w$,
        uc: g.l.gza,
        qq: g.l.Wva,
        ie: g.l.Ds,
        ie6: g.l.Bi,
        ie7: g.l.sv,
        ie8: g.l.Ie && !g.l.sv && !g.l.Bi,
        ie9: g.l.c5,
        ie10: g.l.b5,
        ie11: g.l.Pra,
        edge: g.l.jpa,
        ielt9: g.l.Ie,
        baidu: g.l.YH,
        isLocalStorage: g.l.Gv,
        isGeolocation: !!navigator.geolocation,
        mobileWebkit: g.l.$ta,
        mobileWebkit3d: g.l.z6,
        mobileOpera: !!g.l.Zta,
        retina: g.l.Kc,
        touch: !!g.l.Wf,
        msPointer: !!g.l.B6,
        pointer: !!g.l.IT,
        webkit: g.l.v$,
        ie3d: g.l.Qra,
        webkit3d: g.l.HL,
        gecko3d: g.l.aqa,
        opera3d: g.l.Sua,
        any3d: g.l.UH,
        isCanvas: g.l.jl,
        isSvg: g.l.En,
        isVML: g.l.Ds,
        isWorker: !!window.Worker,
        isWebsocket: !!window.WebSocket,
        isWebGL: function() {
            for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
                try { c = a.getContext(b[d]) } catch (e) {}
                if (c)
                    if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break;
                    else return !0
            }
            return !1
        }
    };
    $.Util = { CLASS_NAME: "AMap.Util" };
    var Kc = { colorNameToHex: g.a.oI, rgbHex2Rgba: g.a.v8, argbHex2Rgba: g.a.Qr, isEmpty: g.a.xh, deleteItemFromArray: g.a.zy, deleteItemFromArrayByIndex: g.a.Eo, indexOf: g.a.indexOf, format: g.a.vb, isArray: g.a.isArray, isDOM: g.a.HJ, includes: g.a.ka, requestIdleCallback: g.a.rU, cancelIdleCallback: g.a.fQ, requestAnimFrame: g.a.Yc, cancelAnimFrame: g.a.ui, color2RgbaArray: g.a.$l, color2Rgba: g.a.Gna };
    for (Ic in Kc) Kc.hasOwnProperty(Ic) && "function" == typeof Kc[Ic] && ($.Util[Ic] = function() {
        var a = Ic;
        return function() {
            g.c.ya($.Util);
            g.c.add($.Util, a);
            return Kc[a].apply(g.a, Array.prototype.slice.call(arguments))
        }
    }());
    $.DomUtil = { CLASS_NAME: "AMap.DomUtil" };
    var Lc = { getViewport: g.g.pJ, getViewportOffset: g.g.XR, create: g.g.create, setClass: g.g.kxa, hasClass: g.g.An, addClass: g.g.Wa, removeClass: g.g.eb, setOpacity: g.g.Vq, rotate: g.g.rotate, setCss: g.g.Ya, empty: g.g.Jz, remove: g.g.remove, TRANSFORM: g.g.sg, TRANSITION: g.g.KF };
    for (Ic in Lc) Lc.hasOwnProperty(Ic) && "function" == typeof Lc[Ic] && ($.DomUtil[Ic] = function() {
        var a = Ic;
        return function() {
            g.c.ya($.DomUtil);
            g.c.add($.DomUtil, a);
            return Lc[a].apply(g.g, Array.prototype.slice.call(arguments))
        }
    }());
    var Mc = g.r;
    $.User = { key: Mc.key };
    window.AMap = $;
    window.AMap.BuryPoint = g.BuryPoint;
    window.AMap.Class = g.ca;
    g.Mj = g.ca.extend({
        A: function(a, b, c, d) {
            this.start = a;
            this.end = b;
            this.transition = c;
            this.precision = d || 0;
            this.Zv = !1;
            this.update = g.a.bind(this.update, this);
            return this
        },
        Nn: function(a) {
            this.kh = this.startTime = +new Date;
            this.frames = 0;
            this.Zv = !0;
            this.xo = g.a.Yc(this.update);
            this.Kia = g.a.bind(this.Hq, a || this)
        },
        update: function() {
            this.frames += 1;
            var a = +new Date,
                b = a - this.startTime,
                b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.kh) : null;
            "number" === typeof b && Math.abs(b - this.end) < this.precision ?
                (this.stop(), b = this.end) : this.xo = g.a.Yc(this.update);
            this.kh = a;
            this.Kia(b)
        },
        stop: function(a) {
            g.a.ui(this.xo);
            a && this.update();
            this.Zv = !1
        }
    });
    g.Mj.Easing = { Linear: { None: function(a) { return a } }, Bounce: { In: function(a) { return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) }, Out: function(a) { return g.Mj.Easing.Bounce.In(1 - a) } }, Cubic: { In: function(a) { return 1 - a * a * a }, Out: function(a) { a = 1 - a; return 1 - a * a * a } } };
    g.Rb = g.ca.extend({
        ka: [g.va, g.$e, g.VJ],
        A: function(a, b) {
            this.pc = g.a.bind(this.pc, this);
            this.B = b;
            this.oj = b.oj;
            this.Dm = "";
            this.Sg = this.wg = this.fj = !1;
            this.Vm = {};
            this.K = a;
            this.Oga();
            this.lsa();
            this.X("zooms", b, !0);
            this.X("size", b, !0);
            this.X("limitBounds", b);
            this.X("view", b);
            this.X("nolimg", b, !0);
            this.X("mapNumber", b, !0);
            this.X("lang", b, !0);
            this.X("features", b, !0);
            this.X("styleID", b, !0);
            this.X("forceBig", b, !0);
            this.X("mode", b, !0);
            this.X("showBuildingBlock", b, !0);
            this.X("mapStyle", b);
            var c = this.get("mapStyle");
            this.De = g.r.De[c] || g.r.De["default"];
            this.NH = "#a3ccff";
            this.cC = b.get("skyColor") || "#cce0ff";
            g.r.WQ && this.X("editEnable", b);
            g.r.WQ && this.Bd ? this.X("style", b, !0) : this.X("styleUrl", b);
            this.X("hightlight", b, !0);
            this.X("labelzIndex", b, !0);
            if (g.l.gL) {
                c = new B.o.qb({ innerLayer: !0, zIndex: b.get("labelzIndex"), visible: !1 });
                this.Hc = new g.o.Rj(c, this, ["point", "road"]);
                this.Hc.type = "\u77e2\u91cf\u6807\u6ce8";
                var d = this.B.get("defaultLayer");
                d && c.X("rejectMapMask", d, !0);
                b.labelsLayer = this.Hc.S;
                this.Hc.S.h("complete",
                    this.zr, this, !0);
                this.Hc.S.h("renderComplete", this.zr, this);
                this.Hc.yB = this.Hc.bh = !0
            }
            this.X("isHotspot", b, !0);
            this.X("layers", b);
            this.X("overlays", b);
            this.X("infos", b, !0);
            this.X("contextmenus", b, !0);
            this.X("controls", b);
            this.X("bounds", b);
            this.X("draw", b);
            this.bf("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender vectorMapForeign".split(" "), b);
            this.bf("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),
                b, !0);
            this.get("jogEnable") ? this.vv = !0 : this.vv = !1;
            this.dga();
            this.kga();
            this.GG && this.GG();
            this.X("resizeEnable", b);
            this.B.map = this;
            c = this.get("size");
            c = c.width * c.height / 65536;
            g.l.Kc && 3 < c && (this.ZH = !0);
            this.V = { Ad: !1 };
            this.PK()
        },
        editEnableChanged: function() { this.Bd = this.get("editEnable") },
        labelzIndexChanged: function() { this.Hc && this.Hc.set("zIndex", this.get("labelzIndex")) },
        styleChanged: function() { this.Gi = !0 },
        mapStyleChanged: function() {
            if (this.B.Di) {
                this.Dm && (this.set("style", ""), this.Mu = this.Dm = "");
                var a = this.get("mapStyle");
                this.Gi = !0;
                this.De = g.r.De[a] || g.r.De["default"];
                this.sE()
            }
        },
        styleUrlChanged: function() {
            if (this.B.Di) {
                var a = this.get("styleUrl") || "";
                if (a !== this.Dm) {
                    var b = -1 !== a.indexOf("?isPublic=true"),
                        a = a.substr(0, 46),
                        c = a.split("amap://styles/")[1];
                    "normal" === c ? (this.Dm = "", this.set("nolimg", !!this.B.get("nolimg_param")), this.set("style", ""), this.Mu = "") : (this.hA = !0, this.set("nolimg", !0), b = new g.jb.zb(32 > c.length ? g.r.vc + "://webapi.amap.com/style?name=" + c + "&key=" + g.r.key : g.r.vc + "://webapi.amap.com/v4/map/styles?styleid=" +
                        c + "&s=rsv3&key=" + g.r.key + (b ? "&ispublic=1" : ""), { callback: "callback" }), b.h("complete", function(a) {
                        a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
                        this.hA = !1
                    }, this), b.h("error", function() { this.hA = !1 }, this), this.Dm = a, this.sE())
                }
            }
        },
        L8: function(a) { this.K.style.background = a },
        cqa: function(a) {
            var b = this.get("center");
            if (a.contains(b)) return null;
            a = g.Et.closestOnLine(b, a.eV().path);
            return new g.U(a[0], a[1])
        },
        ena: function() {
            var a = this.get("limitBounds"),
                b = this.get("bounds");
            b.xc && b.xc.R > b.oc.R && (b.oc.R += 360);
            if (!a.contains(b)) {
                if (b instanceof g.rp) return this.cqa(a, b);
                var c = this.get("center").cb();
                a.zj() < b.zj() ? c.R = a.zi().R : (a.xc.R > b.xc.R && (c.R += a.xc.R - b.xc.R), a.oc.R < b.oc.R && (c.R += a.oc.R - b.oc.R));
                a.wj() < b.wj() ? c.Q = a.zi().Q : (a.xc.Q > b.xc.Q && (c.Q += a.xc.Q - b.xc.Q), a.oc.Q < b.oc.Q && (c.Q += a.oc.Q - b.oc.Q));
                return c
            }
        },
        bP: function() {
            var a = this.PU;
            this.B.refreshSize();
            var b = this.get("size");
            b && a && !b.gb(a) && (this.PU = b, this.ht = !0, this.set("display"), this.s8(b), this.get("resizeEnable") &&
                this.pa("resize", { sua: a, L6: b }))
        },
        g0: function() {
            var a = this;
            a.bP();
            a.WO = setTimeout(function() { a.g0() }, 200)
        },
        hda: function() { this.WO && (clearTimeout(this.WO), this.WO = null) },
        Oga: function() {
            this.B.D = !0;
            this.PU = this.B.getSize();
            this.B.D = !1;
            if (g.l.Ie || g.l.w$ && g.l.ED || g.l.Ota) this.g0();
            else {
                var a = this;
                g.F.Rla(this.K, function(b) { a.bP(b) })
            }
        },
        lsa: function() {
            var a = this.K;
            g.g.Wa(a, "amap-container");
            var b = {};
            b.dd = g.g.create("div", a, "amap-maps");
            this.Nl = g.g.create("div", a);
            this.Nl.style.display = "none";
            b.Wr = g.g.create("div",
                b.dd, "amap-drags");
            b.o = g.g.create("div", b.Wr, "amap-layers");
            b.C = g.g.create("div", b.Wr, "amap-overlays");
            b.controls = g.g.create("div", a, "amap-controls");
            b.cT = g.g.create("a", a, "amap-logo");
            g.g.create("img", b.cT).src = g.l.Kc ? this.B.w.logoUrlRetina : this.B.w.logoUrl;
            b.sn = g.g.create("div", a, "amap-copyright");
            b.sn.style.display = "none";
            350 < g.g.pJ(this.K).width && (b.sn.innerHTML = this.B.w.copyright, b.sn.o6 = g.g.create("span", b.sn, "amap-mcode"), this.sE());
            this.Xa = b
        },
        sE: function() {
            var a = this.get("layers");
            if (a) {
                for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
                    var e = a[d].get("mapNumber"),
                        f = a[d].get("zIndex", null, !0);
                    e && f > b && a[d].get("visible") && (c = e, b = f)
                }
                this.set("mapNumber", c);
                this.B.D = !0;
                a = this.B.getMapStyle();
                this.B.D = !1;
                "GS(2019)6379" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Xa.sn.style.visibility = "hidden");
                c && this.Xa.sn.o6 && (this.Xa.sn.o6.innerHTML = "- " + c + "\u53f7", this.Xa.sn.style.visibility = "visible");
                return c
            }
        },
        wY: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
            g.Pj && (a ?
                g.Pj.flush() : this.A3 || (this.A3 = g.a.Yc(function() {
                    g.Pj.flush();
                    this.A3 = null
                }, this)))
        },
        eU: function(a) {
            var b = this,
                c = this.B.get("rasterLayer");
            c && (this.B.set("rasterLayer", void 0), this.B.X7 = !0, this.B.uk = this.B.La, this.vj && (this.vj.wD = !1), c.o && (c.o.XD = !0), a || (this.fU = g.a.rU(function() {
                b.fU = null;
                b.B && b.B.vk(c)
            })));
            a && this.fU && g.a.fQ(this.fU)
        },
        zr: function() {
            function a() {
                for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
                    var e = a[c].get("zooms");
                    if (!(a[c].uk || a[c].l5 || !e || b > e[1] || b < e[0] || !a[c].get("visible") ||
                            a[c].o && a[c].o.ga && 0 === a[c].o.ga.length || a[c].o && a[c].o.XD || a[c].o && a[c].o.La)) return !1
                }
                a = d.B.get("features");
                return ("all" === a || g.a.ka(a, "point")) && d.Hc && d.Hc.get("visible") && 0 < d.Hc.ga.length && !d.Hc.La && !d.Hc.oo ? !1 : !0
            }

            function b() {
                var a = { id: d.B.id };
                g.Be.mf.end(g.extend(a, { key: "rds" }));
                g.Be.mf.send(g.extend(a, { params: { rs: d.get("baseRender"), viewmode: d.B.view.type, fd: 0 === d.QJ ? 1 : 0, raster: d.B.uk ? 1 : 0 } }));
                d.B && d.B.tm && d.B.tm.NB && d.B.tm.NB();
                d.B.Q7 = 1;
                d.wY();
                d.set("display");
                d.LD = !0
            }

            function c() {
                g.Be.mf.end({
                    id: d.B.id,
                    key: "rd"
                });
                g.a.Yc(function() { this.q("complete") }, d);
                d.B.La = !0;
                d.set("display")
            }
            if (!this.yI)
                if (this.LD) 1 === this.Rt && 13 === this.get("zoom") && (g.a.jD.stop(this.tG), g.Be.mf.send({ id: this.B.id, params: { fps: this.tG.jD, type: "fps", rs: this.get("baseRender") } }), this.Rt = 2), this.wY();
                else {
                    var d = this,
                        e = this.B.get("rasterLayer"),
                        f = a();
                    e ? (e.o && e.o.La && (this.B.La || c()), f && (this.B.La || c(), this.eU(), b())) : f && (this.B.La || c(), b(), this.B.X7 = !0)
                }
        },
        layersChanged: function() {
            this.la = this.la || [];
            for (var a = this.get("layers"),
                    b = this.la.length - 1; 0 <= b; b -= 1) this.la[b] === this.td || this.la[b] === this.Ys || this.la[b].yB || this.la[b].S.yB || -1 !== g.a.indexOf(a, this.la[b].S) || (this.la[b].jg(), this.la[b].Jj && this.la[b].Jj.jg(), this.la[b].S.G("complete", this.zr, this), this.la[b].S.G("renderComplete", this.zr, this), this.la = g.a.Eo(this.la, b));
            for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1)
                if (!a[b].l5)
                    if (a[b].ti) - 1 === g.a.indexOf(this.la, a[b].o) && this.la.push(a[b].o);
                    else {
                        var f = this.dg(a[b]);
                        f && (this.la.push(f), a[b].ti = !0,
                            a[b].o = f);
                        a[b].h("complete", this.zr, this, !0);
                        a[b].h("renderComplete", this.zr, this)
                    }
            for (b = 0; b < this.la.length; b += 1) f = this.la[b].S, f.Eq && f.get("visible") && (c = !0, !1 === f.get("detectRetina") && (d = !1), e = f.get("textIndex") || e);
            this.Hc && (c || "3D" !== this.B.view.type ? this.Hc.oo = !1 : (c = g.a.find(a, function(a) { if (B.o.Gt && a instanceof B.o.Gt && a.get("visible")) return !0 }), this.Hc.oo = c = !!c));
            a = g.a.indexOf(this.la, this.Hc);
            c && this.B.get("showLabel") ? (-1 === a && this.la.push(this.Hc), this.Hc.ja = d && g.l.ja, this.Hc.BC(this.get("mapStyle") ||
                "normal"), this.Hc.set("zIndex", e), this.Hc.set("visible", !0), this.B.vD = !0, this.B.get("isHotspot") ? this.Hc.Lua() : this.Hc.oQ()) : (this.Hc && (this.Hc.set("visible", !1), this.B.vD = !1, this.Hc.oQ()), this.B.vD = !1);
            this.B.isHotspotChanged();
            this.set("display", 0);
            this.sE()
        },
        isHotspotChanged: function() { this.layersChanged() },
        controlsChanged: function() {
            var a = this.get("controls"),
                b, c;
            if (a.add && 0 < a.add.length)
                for (; 0 < a.add.length;) b = a.add.shift(), (c = b.wu || b.addTo) && c.call(b, this.B, this.Xa.controls);
            else if (a.remove &&
                a.remove.length)
                for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.Uv || b.removeFrom) && c.call(b, this.B, this.Xa.controls)
        },
        t1: function() {
            if (!this.yI) {
                var a = this;
                this.y1 = !1;
                a.td || (a.td = new g.o.ed(new B.o.ed, a), a.td.Cf = 36, a.td.lg = 36, a.td.set("zIndex", 120), a.la.push(a.td), a.td.XC = !0);
                for (var b = a.get("overlays"), c = [], d = 0; d < a.Xc.length; d += 1) - 1 === g.a.indexOf(b, a.Xc[d].Kb) && (a.Xc[d].Kb instanceof B.C.Ze || a.Xc[d].Kb instanceof B.C.Tn ? a.Xc[d].jg() : (a.td && a.Xc[d] instanceof g.C.ub ? (a.td.eh = g.a.zy(a.td.eh, a.Xc[d].L),
                    a.td.e8([a.Xc[d].L])) : a.Ys && a.Ys.e8([a.Xc[d].L]), a.Xc[d].L.fa ? (g.g.remove(a.Xc[d].L.fa), a.Xc[d].L.fa = null) : a.Xc[d].L.Ma && (g.g.remove(a.Xc[d].L.Ma.Rh), g.g.remove(a.Xc[d].L.Ma.Rc), g.g.remove(a.Xc[d].L.Ma.dir), a.Xc[d].L.Ma = null), a.Xc[d].Gn && a.Xc[d].Gn.stop(), a.Xc[d].Bh && a.Xc[d].Bh.stop(), a.Xc[d].Kb.ti = !1, a.Xc[d].Kb.Al(), a.Xc[d].Kb.C = null, a.Xc[d].Kb = null, a.Xc[d].L.Joa(), a.Xc[d].L = null, a.Xc[d].Al(), a.Xc[d].Ce = null, a.Xc[d].wi(), a.Xc[d].map = null), c.push(a.Xc[d]));
                for (d = 0; d < c.length; d += 1) a.Xc = g.a.Eo(a.Xc,
                    g.a.indexOf(a.Xc, c[d]));
                var e = [],
                    f = [];
                g.a.fxa(function(b) {
                    if (!b.ti && b.dh) {
                        var c = b.C || a.Lma(b);
                        c && (a.Xc.push(c), c instanceof g.C.Ze || c instanceof g.C.Tn ? c.Ss(a) : c instanceof g.C.ub ? e.push(c.L) : f.push(c.L), b.ti = !0)
                    }
                }, b);
                e.length && a.td.ay(e);
                f.length && (a.Ys || (a.Ys = new g.o.ed(new B.o.ed, a), a.Ys.set("zIndex", 110), a.la.push(a.Ys)), a.Ys.ay(f));
                a.set("display", 0)
            }
        },
        overlaysChanged: function() {
            this.Xc = this.Xc || [];
            this.get("overlays") && 0 === this.get("overlays").length ? this.t1() : this.y1 || (g.a.Yc(this.t1, this),
                this.y1 = !0)
        },
        contextmenusChanged: function() {
            var a = this.get("contextmenu");
            if (a) {
                var b = this;
                g.sb.load("overlay", function() {
                    b.ry = new g.C.Tn(a, b);
                    b.set("display", 0)
                })
            }
        },
        infosChanged: function() {
            var a = this.get("infos");
            if (a) {
                this.um = this.um || {};
                var b, c = this;
                g.sb.load("overlay", function() { for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.um[d] = c.um[d] || new g.C.Ze(b, c)) })
            }
        },
        Lma: function(a) {
            var b = null;
            if (a instanceof B.C.ub) b = new g.C.ub(a, this);
            else if (a instanceof B.C.Tn) b = new g.C.Tn(a, this);
            else if (a instanceof B.C.Ze) b = new g.C.Ze(a, this);
            else {
                var c = ["overlay"];
                "d" === this.get("overlayRender") ? (c.push("dvector"), g.l.En ? c.push("svg") : c.push("vml")) : c.push("cvector");
                if (!this.Cza && !g.sb.ID(c)) {
                    var d = this;
                    g.sb.Ig(c, function() {
                        this.Cza = !0;
                        d.overlaysChanged()
                    });
                    return
                }
                a instanceof B.C.Ec ? b = new g.C.Ec(a, this) : a instanceof B.C.tA ? b = new g.C.tA(a, this) : a instanceof B.C.ac ? b = new g.C.ac(a, this) : a instanceof B.C.jh ? b = new g.C.jh(a, this) : a instanceof B.C.Dt ? b = new g.C.Ec(a, this) : a instanceof B.C.Kt && (b = new g.C.Ec(a, this))
            }
            return b
        },
        I3: function() {
            var a = this.De;
            this.Mu && (!this.Te || !this.Te.Fp || this.B && this.B.is) && (a = "function" === typeof this.Mu ? this.Mu(this.vj.P.zoom) : this.Mu);
            return a
        },
        ACa: function() {
            function a() {}
            var b = new g.o.ed,
                c = [],
                d = new g.U(116.405467, 39.907761);
            new g.style.Pg.fi;
            for (var e = 0; 100 > e; e += 1)
                for (var f = 0; 100 > f; f += 1) {
                    var h = new g.U(d.R + 0.02 * f, d.Q + 0.02 * e),
                        h = new g.di({ name: "point" + (100 * e + f), map: this, W: new g.Aa.Og(this.Bb(h)) });
                    c[100 * e + f] = h;
                    h.h("hover", a, h)
                }
            b.ay(c);
            this.la.push(b)
        },
        nc: function() {},
        yCa: function(a) {
            var b =
                new g.o.ed,
                c = [],
                c = (new g.laa({ map: this })).TT(a);
            b.ay(c);
            this.la.push(b);
            this.set("display", 0)
        },
        dg: function(a) {
            var b = this;
            a = a.dg(this);
            if (!a) return null;
            if (a.length && "string" == typeof a[0]) g.sb.Ig(a, function() { b.layersChanged() });
            else return a;
            return null
        },
        tEa: function() { return this.Xa },
        IGa: function() { this.set("display", 0) },
        displayChanged: function(a) { this.l1 || this.PK(a) },
        PK: function(a) {
            if (a)
                if (g.a.ui(this.wE), g.l.Yl) {
                    var b = this;
                    setTimeout(function() { b.pc() }, 0)
                } else this.pc();
            else this.Dw || (this.wE =
                g.a.Yc(this.pc), this.Dw = !0)
        },
        pc: function() {
            this.wE = null;
            if (!this.yI) {
                this.q("render");
                this.Dw = !1;
                var a = {};
                if (this.la && (a.size = this.B.get("size"), a.size.width && a.size.height)) {
                    for (var b = this.B.view.type, c = [], d = 0, e = this.la.length; d < e; d += 1) this.la[d].Jf && this.la[d].Jf !== b ? this.la[d].La = !0 : (c.push(this.la[d]), this.la[d].Jj && c.push(this.la[d].Jj));
                    c.sort(function(a, b) {
                        var c = a.get("zIndex"),
                            d = b.get("zIndex");
                        return c > d ? 1 : c === d ? a.ex > b.ex ? 1 : -1 : -1
                    });
                    a.la = c;
                    c = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                    a.Q1 = 15E5 < a.size.width * a.size.height * c * c;
                    a.wD = !!this.B.get("rasterLayer");
                    a.ba = g.l.ba;
                    a.lang = this.get("lang");
                    a.P = this.B.sD();
                    a.Jf = b;
                    this.B.D = !0;
                    a.T = this.B.getResolution([0, 0]);
                    a.Bq = this.B.get("mapStyle");
                    a.Gi = this.Gi;
                    this.B.D = !1;
                    a.Ad = this.Sg;
                    a.Poa = this.Vm;
                    a.de = this.fj;
                    a.hf = this.wg;
                    a.SE = this.wg && g.l.ba;
                    a.oL = g.l.ba && this.fj;
                    a.nt = g.l.ba && this.Sg;
                    this.nt = a.nt;
                    b = this.get("targetLevel") || a.P.zoom;
                    a.qp = a.P.zoom > b;
                    a.Kf = a.P.zoom > b ? "zoomOut" : a.P.zoom < b ? "zoomIn" : "stable";
                    a.hua = !0;
                    a.ZH = this.ZH;
                    for (var b = !1,
                            f, c = !1, d = 0; d < this.la.length; d += 1) this.la[d].Ei && this.la[d].S.get("visible") && a.P.zoom <= this.la[d].S.get("zooms")[1] && (a.jU = !0), this.la[d].je().Kc && (b = !0);
                    for (d = 0; d < this.la.length; d += 1) this.la[d].S.TP && a.jU && (!this.fj && this.la[d].S.get("visible") && (f = this.la[d].S.TP(), f.aFa = 1, f.zoom = a.P.zoom), c = !0);
                    this.nb = [];
                    c && f && this.nb !== f && (this.nb = f);
                    a.nb = this.nb;
                    a.Kc = b;
                    a.scale = Math.pow(2, a.P.zoom - a.P.ke);
                    this.vj = a;
                    this.Oc = this.B.get("mask");
                    a.Oc = this.Oc;
                    a.YJ = this.YJ;
                    if (f = this.Oy()) f.pc(a), this.Gi = this.oR = this.YJ = !1
                }
            }
        },
        Nq: function(a) {
            if (!this.yI) {
                var b = {};
                if (this.la && (b.size = this.B.get("size"), b.size.width && b.size.height)) {
                    for (var c = this.B.view.type, d = [], e = 0, f = this.la.length; e < f; e += 1) this.la[e].Jf && this.la[e].Jf !== c || !(this.la[e] instanceof g.o.Pm) || 0 > a.indexOf(this.la[e].S) || (d.push(this.la[e]), this.la[e].Jj && d.push(this.la[e].Jj));
                    d.sort(function(a, b) {
                        var c = a.get("zIndex"),
                            d = b.get("zIndex");
                        return c > d ? 1 : c === d ? a.ex > b.ex ? 1 : -1 : -1
                    });
                    b.la = d;
                    a = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                    b.Q1 = 15E5 < b.size.width *
                        b.size.height * a * a;
                    b.wD = !!this.B.get("rasterLayer");
                    b.ba = g.l.ba;
                    b.lang = this.get("lang");
                    b.P = this.B.sD();
                    b.Jf = c;
                    this.B.D = !0;
                    b.T = this.B.getResolution([0, 0]);
                    b.Bq = this.B.get("mapStyle");
                    b.Gi = this.Gi;
                    this.B.D = !1;
                    b.Ad = this.Sg;
                    b.Poa = this.Vm;
                    b.de = this.fj;
                    b.hf = this.wg;
                    b.SE = this.wg && g.l.ba;
                    b.oL = g.l.ba && this.fj;
                    b.nt = g.l.ba && this.Sg;
                    this.nt = b.nt;
                    c = this.get("targetLevel") || b.P.zoom;
                    b.qp = b.P.zoom > c;
                    b.Kf = b.P.zoom > c ? "zoomOut" : b.P.zoom < c ? "zoomIn" : "stable";
                    b.hua = !0;
                    b.ZH = this.ZH;
                    c = !1;
                    for (a = 0; a < this.la.length; a += 1) this.la[a].je().Kc &&
                        (c = !0);
                    this.nb = [];
                    b.nb = this.nb;
                    b.Kc = c;
                    b.scale = Math.pow(2, b.P.zoom - b.P.ke);
                    this.vj = b;
                    this.Oc = this.B.get("mask");
                    b.Oc = this.Oc;
                    (c = this.Oy()) && c.Nq(b)
                }
            }
        },
        Oy: function() {
            if (!this.J || this.J.type !== this.B.view.type || this.J.Dta)
                if (this.J = null, "3D" == this.B.view.type) {
                    var a = this;
                    g.sb.load("Map3D", function() { a.J || (a.J = new g.Ea.CF(a), a.set("display")) })
                } else this.J = new g.M.canvas.Rb(this);
            return this.J
        },
        nqa: function() {
            var a = [],
                b = this.get("controls").Kd,
                c;
            for (c in b) b[c].Qy && b[c].Qy() && a.push(b[c].Qy());
            return a
        },
        destroyChanged: function() {
            delete g.Be.az[this.B._amap_id];
            this.yI = 1;
            this.eU(!0);
            this.V = {};
            this.Hc && (this.Hc.S.G("complete", this.zr, this), this.Hc.jg(), this.la = g.a.Eo(this.la, g.a.indexOf(this.la, this.Hc)));
            this.Te && this.Te.ee && this.Te.ee.S && this.Te.ee.S.setMap();
            this.Ika && clearTimeout(this.Ika);
            this.mka();
            this.oha();
            this.FO && this.FO();
            this.sla();
            this.Al();
            this.B = this.B.map = null;
            this.K = this.K.GM = null;
            this.wi();
            this.Je && (this.Je.stop(), this.Je = null);
            this.Xf && (this.Xf.stop(), this.Xf = null);
            this.Fd && (this.Fd.stop(),
                this.Fd = null);
            this.J && this.J.Of && this.J.Of();
            this.J = null
        },
        sla: function() {
            var a = this.K;
            this.hda();
            g.F.vna(a);
            g.g.Jz(a);
            this.Nl = null;
            g.g.eb(a, "amap-container");
            this.Xa = null
        },
        jogEnableChanged: function() { this.get("jogEnable") ? this.vv = !0 : this.vv = !1 },
        drawChanged: function() {
            var a = this,
                b, c, d = this.get("draw");
            if (d) {
                this.rq || (this.rq = []);
                b = 0;
                for (c = this.rq.length; b < c; b += 1) this.rq[b].nwa();
                g.sb.load("interaction", function() {
                    var b = new g.BAa({ type: d, o: a.Ys }, a);
                    a.rq.push(b);
                    a.loaded = !0
                })
            } else if (this.rq)
                for (b = 0,
                    c = this.rq.length; b < c; b += 1) this.rq[b].nwa(), this.rq[b].XCa(), this.G("click", this.rq[b].IEa, this)
        },
        le: function(a, b, c) { return this.B.view.le(a, b, c) },
        Bg: function(a, b, c) { return this.B.view.Bg(a, b, c) },
        y4: function(a, b) {
            var c = this.get("size"),
                d = document.createElement("canvas");
            a = a || c.width;
            b = b || c.height;
            d.width = a;
            d.height = b;
            for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Xa.o.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
            k.sort(function(a, b) { return a.style.zIndex - b.style.zIndex });
            for (l = 0; l < k.length; l += 1) {
                var m = k[l];
                if (g.g.An(m, "amap-layer") || g.g.An(m, "amap-e") || g.g.An(m, "amap-labels"))
                    if ("CANVAS" === m.tagName) {
                        var h = c,
                            n = e,
                            p = parseFloat(m.style.width) || m.width,
                            q = parseFloat(m.style.height) || m.height,
                            r = 1;
                        m.style.transform && (r = parseFloat(m.style.transform.split("(")[1]));
                        f.drawImage(m, n, h, p * r, q * r)
                    } else if ("DIV" === m.tagName)
                    for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
                        var v = r[u];
                        if ("CANVAS" === v.tagName || "IMG" === v.tagName) h =
                            parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n + m, h + s, p, q)
                    }
            }
            return d.toDataURL()
        }
    });
    g.Rb.Gb({
        dga: function() {
            this.DB = !1;
            g.l.Wf && ("3D" === this.B.view.type ? this.zca() : this.xca());
            g.l.ba || this.uca()
        },
        mka: function() {
            g.l.Wf && ("3D" === this.B.view.type ? this.uha() : this.tha());
            g.l.ba || this.pha()
        },
        rotateEnableChanged: function() {
            this.Wwa = this.get("rotateEnable");
            g.l.Wf && this.S1 && "3D" !== this.B.view.type && (this.Wwa ? this.S1() : this.rua())
        },
        zoomEnableChanged: function() {
            this.get("zoomEnable") ? (g.l.Wf && this.VP && "3D" !== this.B.view.type && this.VP(), g.l.ba || this.wca()) : (g.l.Wf && this.mT && this.mT(), g.l.ba ||
                this.sha())
        },
        mousewheelChanged: function() {},
        aT: function(a) { a && (this.DB = a.ru) },
        ww: function() { this.DB = !1 },
        Mi: function(a, b, c, d) {
            var e, f = {};
            a || (a = window.event);
            var h = g.F.nm(a, this.Xa.dd);
            g.l.Wf && ("touchend" !== a.type ? this.V.Jga = h : h = this.V.Jga);
            f.xb = h;
            f.Sa = this.Bg(h);
            f.Sa && (f.Sa = f.Sa.toFixed(3));
            f.ig = this.Nd(f.Sa);
            c || (c = this.DB ? this.DB ? [this.DB] : null : this.Tea(f.Sa, d)) && 0 < c.length && c[0].Hr && (e = c[0].Hr, f.ru = c[0]);
            e || "info" === a.af || (e = this);
            f.hd = e;
            f.BBa = a.altKey;
            f.ctrlKey = a.ctrlKey;
            f.button = void 0 === a.button ?
                0 : a.button;
            b || g.F.preventDefault(a);
            return f
        },
        cO: function(a) { return a && a !== this && a !== document },
        XO: function() {
            var a = this.V;
            a.hg && (a.ck.xb.x === a.hg.x && a.ck.xb.y === a.hg.y ? a.wg = !1 : (a.wg = !0, a.Cp || (a.iq.q("dragstart", a.hq), a.Cp = !0), a.iq.q("dragging", a.ck), a.hg = a.ck.xb))
        },
        Mxa: function(a) { for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c])); return b },
        Ov: function(a, b, c) { return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10) },
        Tea: function(a, b) {
            var c = this.Oy();
            if (!c) return null;
            var d, e = this;
            this.la.sort(function(a,
                b) { return a.get("zIndex") > b.get("zIndex") ? -1 : 1 });
            c.fv(a, this.la, function(a) {
                d = a;
                d = e.Mxa(d)
            }, function() { d = [] }, b);
            return d
        }
    });
    g.Rb.Gb({
        kga: function() {
            this.Vm = {};
            this.h("moveend", this.Z6, this);
            g.l.Yl && (g.l.vL || g.l.YH) && this.h("zoomend", this.JV, this);
            this.h("movestart", this.a7, this);
            this.h("zoomstart", this.i7, this);
            this.h("zoomend", this.h7, this);
            this.LM();
            this.Rt = 0;
            this.tG = {};
            "undefined" === typeof window.requestAnimationFrame && (this.Rt = 2)
        },
        i7: function() {
            2 !== this.Rt && 12 === this.get("zoom") && (this.Rt = 1, g.a.jD.start(this.tG));
            this.fj = !0
        },
        h7: function() {
            1 === this.Rt && 13 !== this.get("zoom") && (this.Rt = 0, g.a.jD.cancel(this.tG));
            this.fj = !1;
            this.set("display")
        },
        P0: function(a, b) {
            this.Vm.left = 0 < a;
            this.Vm.right = 0 > a;
            this.Vm.bF = 0 < b;
            this.Vm.KQ = 0 > b
        },
        mu: function() {
            this.Vm.left = !1;
            this.Vm.right = !1;
            this.Vm.bF = !1;
            this.Vm.KQ = !1
        },
        oha: function() {
            this.G("moveend", this.Z6, this);
            g.l.Yl && (g.l.vL || g.l.YH) && this.G("zoomend", this.JV, this);
            this.G("movestart", this.a7, this);
            this.G("zoomstart", this.i7, this);
            this.G("zoomend", this.h7, this);
            this.qha()
        },
        Z6: function(a) {
            this.wg = !1;
            this.mu();
            this.s8();
            !a.G5 && this.B.get("limitBounds", null, !0) ? (a = this.ena()) && !a.gb(this.get("center")) ?
                this.ZK(this.get("zoom"), a, !1, !0) : this.pa("moveend") : this.pa("moveend");
            this.set("display")
        },
        a7: function() {
            this.wg = !0;
            this.mu()
        },
        dragEnableChanged: function() {
            (this.YC = this.get("dragEnable")) ? this.KM(): this.EO()
        },
        pa: function(a, b) {
            if (this.B.te(a)) {
                var c;
                b && (c = b.L6 ? { type: a, newsize: b.L6, oldsize: b.sua } : { type: a, pixel: b.xb, target: this.B, lnglat: b.ig });
                this.B.q(a, c)
            }
        },
        LM: function() {
            this.h("click", this.s_);
            this.h("dblclick", this.w_);
            g.l.Wf && this.uX();
            g.l.ba || this.vca()
        },
        qha: function() {
            this.G("click", this.s_);
            this.G("dblclick", this.w_);
            g.l.Wf && this.h_();
            g.l.ba || this.rha()
        },
        eH: function(a, b) {
            var c = this.get("targetLevel") || this.get("zoom"),
                c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
                c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
            c === this.get("zoom") || this.Xf && this.Xf.Zv && c === this.Xf.end || this.rA(c, !1, a)
        },
        s_: function(a) { this.pa("click", a) },
        w_: function(a) {
            this.get("doubleClickZoom") && this.get("zoomEnable") && this.eH(a.Sa, 1);
            this.pa("dblclick", a)
        },
        hCa: function(a) {
            this.eH(a.AHa, a.B9);
            this.pa("touchend",
                a)
        },
        KM: function() { this.YC && ("3D" === this.B.view.type ? (this.h("dragstart", this.C_), this.h("dragging", this.y_), this.h("dragend", this.A_)) : (this.h("dragstart", this.B_), this.h("dragging", this.x_), this.h("dragend", this.z_))) },
        EO: function() { this.YC || ("3D" === this.B.view.type ? (this.G("dragstart", this.C_), this.G("dragging", this.y_), this.G("dragend", this.A_)) : (this.G("dragstart", this.B_), this.G("dragging", this.x_), this.G("dragend", this.z_))) },
        B_: function(a) {
            this.aT(a);
            this.mu();
            this.Sg = !0;
            this.V.Ey = a.xb.x;
            this.V.ZC =
                a.xb.y;
            this.Je && (this.Je.stop(), this.ss(!0));
            this.pa("dragstart");
            this.pa("movestart");
            this.q("movestart", a);
            this.Sxa()
        },
        x_: function() {
            var a = this.V,
                b = a.ck.xb.x - a.Ey,
                c = a.ck.xb.y - a.ZC;
            if (c || b) {
                this.V.wg = !0;
                this.P0(b, c);
                a.Ey = a.ck.xb.x;
                a.ZC = a.ck.xb.y;
                var a = b,
                    d = c,
                    e = this.rotation;
                e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c);
                a = this.get("centerCoords").$a((new g.H(a, d)).Md(this.T));
                (d = this.s2(a)) && (c = Math.round(this.le(d).$a(this.le(a)).y));
                this.Yo(this.Xa.Wr, b, c);
                a.x =
                    (a.x + g.a.Fa) % g.a.Fa;
                this.set("centerCoords", a, !0);
                this.set("center", this.Nd(a), !0);
                this.vv && (this.kh ? (a = new Date, this.Yt = 100 < a - this.kh ? new g.H(0, 0) : new g.H(b, c), this.kh = a) : this.kh = new Date);
                this.pa("dragging");
                this.pa("mapmove")
            } else this.V.wg = !1, this.Yt = null, this.mu()
        },
        Yo: function(a, b, c) {
            if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
                var d = parseFloat(a.style.top) || 0,
                    e = parseFloat(a.style.left) || 0,
                    f = "";
                this.rotation && (f = g.g.ot[g.g.sg] + ":rotate(" + this.rotation + "deg);overflow:visible;");
                a.style.cssText = "position:absolute;top:" +
                    (d + c) + "px;left:" + (e + b) + "px;" + f
            }
        },
        s2: function(a) {
            var b = this.B.view.XW(),
                c = this.PU.height * this.T / 2;
            return a.y < b.hc + c ? (a.y = b.hc + c, a) : a.y > b.tc - c ? (a.y = b.tc - c, a) : null
        },
        z_: function() {
            this.ww();
            100 < new Date - this.kh && (this.Yt = null);
            this.V.hg = null;
            this.Sg = !1;
            this.mu();
            this.pa("dragend");
            if (this.vv && this.Yt)
                if (this.V.wg) {
                    var a = this.Yt,
                        b = new g.H(0, 0);
                    this.Je = new g.Mj(a, b, function(a, b, e) { return 600 <= e ? b : a.Md(1 - Math.pow(e / 600, 2)).floor() }, 1);
                    this.Je.Hq = function(a) {
                        if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.Je.stop(),
                            this.q("moveend"), this.ss(), this.Yt = this.kh = null;
                        else {
                            var b = a.x,
                                e = a.y,
                                f = this.rotation;
                            f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
                            b = this.get("centerCoords").$a((new g.H(b, e)).Md(this.T));
                            e = this.s2(b);
                            f = a.y;
                            e && (f = Math.round(this.le(e).$a(this.le(b)).y));
                            this.Yo(this.Xa.Wr, a.x, f);
                            b.x = (b.x + g.a.Fa) % g.a.Fa;
                            this.set("centerCoords", b, !0);
                            this.set("center", this.Nd(b), !0);
                            this.pa("mapmove")
                        }
                    };
                    this.Je.Nn(this)
                } else this.q("moveend"), this.ss(!0), this.Yt = this.kh = null;
            else this.q("moveend"), this.ss(), this.Yt = this.kh = null
        },
        Sxa: function() {
            if (!this.V.refresh) {
                var a = this,
                    b = null;
                this.V.refresh = setInterval(function() { b !== a.V.hg && (a.set("display", 0), b = a.V.hg) }, g.l.ba ? 400 : 100)
            }
        },
        JV: function() {
            if (g.l.Yl && (g.l.vL || g.l.YH)) {
                for (var a = this.Xa.o.childNodes, b = 0; b < a.length; b += 1) {
                    var c = a[b];
                    c instanceof HTMLCanvasElement && (c.width = 0);
                    "amap-e" === c.className && (c.style.height = "0")
                }
                for (b = 0; b < this.la.length; b += 1) c = this.la[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap &&
                    (c.tu && (c.tu.width = 0), c.Wx && (c.Wx.width = 0))
            }
        },
        ss: function(a) {
            this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null);
            a || (this.JV(), this.set("display", 0))
        },
        s8: function(a) { this.set("refresh", a) }
    });
    g.Rb.Gb({
        setZoomSlow: function(a) { this.ZK(a, null, !this.get("animateEnable")) },
        setPanTo: function(a) { this.ZK(null, a, !this.get("animateEnable")) },
        zoomAndCenterChanged: function(a) {
            var b = a[0];
            b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
            b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
            this.ZK(b, a[1], a[2] || !this.get("animateEnable"))
        },
        zoomChanged: function() {
            this.T = Math.pow(2, 20 - this.get("zoom"));
            this.q("closeOverlays");
            this.set("display")
        },
        rotationChanged: function(a) {
            this.rotation = this.get("rotation");
            this.B.q("rotate", { rotation: this.rotation || 0 });
            !0 !== a && this.set("display", 0)
        },
        pitchChanged: function() {
            this.pitch = this.get("pitch");
            this.B.q("pitch", { pitch: this.pitch || 0 });
            this.set("display", 0)
        },
        centerCoordsChanged: function() {
            this.q("closeOverlays");
            this.GBa ? this.PK(!0) : this.PK(!1)
        }
    });
    g.OW = g.ca.extend({
        ka: [g.va, g.$e],
        A: function(a, b) {
            this.type = "2D";
            this.jf(b, !0);
            a && this.vma(a)
        },
        vma: function(a) {
            this.map = a;
            this.bf(["size", "refresh", "maxPitch"], a);
            this.centerChanged();
            a.bf(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
        },
        XW: function() { this.AM || this.Nna(); return this.AM },
        Nna: function() {
            var a;
            if (this.get("center") instanceof g.U) {
                a = new g.me(-180, -85, 180, 85);
                var b = this.map.Bb(a.ek());
                a = this.map.Bb(a.No());
                this.AM = { Jc: b.x, hc: b.y, Ic: a.x, tc: a.y }
            } else a = this.map.get("limitBounds",
                null, !0), this.AM = { Jc: a[0], hc: a[1], Ic: a[2], tc: a[3] }
        },
        sD: function() {
            var a = this.map,
                b = this.get("zoom");
            return { zoom: b, rh: this.get("center"), Ha: this.lm(), lb: this.get("centerCoords"), rotation: parseInt(this.get("rotation")), Sf: a.get("crs"), T: Math.pow(2, 20 - b), ke: Math.round(b), Jg: Math.pow(2, 20 - Math.round(this.get("zoom"))) }
        },
        centerChanged: function() { this.set("centerCoords", this.map.Bb(this.get("center")).toFixed(3), !0) },
        centerCoordsChanged: function() {
            var a = this.map;
            a.D = !0;
            var b = this.XW(),
                c = this.get("centerCoords"),
                d = a.getSize();
            a.D = !1;
            var e = this.get("zoom", null, !0),
                a = this.get("center", null, !0),
                d = d.height * Math.pow(2, 20 - e) / 2;
            a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Ic && (c.x = b.Ic);
            c.y < b.hc + d ? c.y = b.hc + d : c.y > b.tc - d && (c.y = b.tc - d);
            this.set("center", this.map.Nd(c), !0)
        }
    });
    g.OF = g.OW.extend({
        lm: function() {
            var a = this.get("size"),
                b = this.get("centerCoords"),
                c = parseInt(this.get("rotation")) % 360,
                d = this.get("zoom", null, !0),
                e = Math.pow(2, 20 - d),
                c = Math.PI * c / 180,
                a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
                e = new g.Yf(b.$a(a.Md(e)), b.add(a.Md(e))),
                c = this.map.get("targetLevel");
            if (c > d - 1) {
                var f = Math.pow(2, 20 - c);
                e.H$ = new g.Yf(b.$a(a.Md(f)), b.add(a.Md(f)))
            }
            e.z9 = c || d;
            e.Bc = a;
            return e
        },
        eqa: function(a) {
            var b =
                this.get("size"),
                c = this.get("centerCoords"),
                d = parseInt(this.get("rotation")) % 360,
                d = Math.PI * d / 180,
                b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
            a = Math.pow(2, 20 - a);
            return new g.Yf(c.$a(b.Md(a)), c.add(b.Md(a)))
        },
        Jd: function() {
            var a = this.lm(),
                b = a.Vd.x,
                c = a.kc.y,
                a = new g.H(a.kc.x, a.Vd.y),
                b = new g.H(b, c);
            return new g.me(this.map.Nd(a), this.map.Nd(b))
        },
        zoomChanged: function() {},
        le: function(a, b) {
            this.get("size");
            var c =
                a.cb(),
                d = this.get("centerCoords"),
                e = c.$a(d);
            e.x < -g.a.Fa / 2 ? e.x += g.a.Fa : e.x > g.a.Fa / 2 && (e.x -= g.a.Fa);
            var c = this.get("size").PE().kd(2),
                f = this.get("rotation") * Math.PI / 180,
                d = e.x * Math.cos(f) - Math.sin(f) * e.y,
                e = Math.sin(f) * e.x + Math.cos(f) * e.y;
            return c.add((new g.H(d, e)).Md(Math.pow(2, (b || this.get("zoom")) - 20)))
        },
        Bg: function(a, b) {
            var c = this.get("size").PE().kd(2),
                d = a.$a(c),
                e = this.get("rotation") * Math.PI / 180,
                c = d.x * Math.cos(e) + Math.sin(e) * d.y,
                d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
                c = this.get("centerCoords").add((new g.H(c,
                    d)).Md(Math.pow(2, 20 - (b || this.get("zoom")))));
            c.x = (c.x + 268435456) % 268435456;
            return c
        }
    });
    g.uM = g.OW.extend({
        A: function(a, b) {
            this.Ne = new g.Dc;
            this.cc = new g.Dc([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
            arguments.callee.ma.apply(this, arguments);
            this.scale = 1;
            this.type = "3D";
            this.mA = null;
            this.N7 = "";
            this.P = ["", 0, 0, "", 0];
            this.mA = {}
        },
        refreshChanged: function() { this.gr() },
        zoomChanged: function(a) {
            this.gr();
            this.P[4] = a
        },
        centerChanged: function(a) {
            arguments.callee.ma.apply(this, arguments);
            this.gr()
        },
        centerCoordsChanged: function(a) {
            arguments.callee.ma.apply(this, arguments);
            this.gr();
            this.P[0] = a.toString()
        },
        rotationChanged: function(a) {
            this.gr();
            this.P[2] = a
        },
        pitchChanged: function(a) {
            this.Ce.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
            this.gr();
            this.P[1] = a
        },
        gr: function() {
            if (!this.tza() && (this.xL(), this.Koa(), this.map)) {
                var a = this,
                    b = function() {
                        a.map.camera = a.M3();
                        a.map.q("camerachange", { map: a.map, camera: a.map.camera })
                    };
                a.map.La ? b() : this.map.h("complete", b, this)
            }
        },
        M3: function() { return { height: this.qn, fov: this.Tpa, aspect: this.uC, near: this.tz, far: this.OI, position: this.Sma, rotation: this.Ce.rotation, pitch: this.Ce.pitch } },
        Koa: function() { this.Kga = g.a.fg() },
        To: function() { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300; return g.a.fg() - this.Kga > a },
        xL: function() {
            var a = this.get("centerCoords"),
                b = this.get("pitch"),
                c = this.get("rotation"),
                d = (new g.Dc).W8(-a.x + g.a.dc.x, -a.y + g.a.dc.y, 0);
            this.Sma = { x: a.x - g.a.dc.x, y: a.y - g.a.dc.y };
            a = (new g.Dc).Sz(180 - b, 1, 0, 0);
            this.C7 = (new g.Dc).set(a);
            c = (new g.Dc).Sz(c, 0, 0, 1);
            this.Rq = (new g.Dc).set(c);
            this.Rpa = d.Gg();
            this.cc = (new g.Dc).W8(0, 0, -this.qn).multiply(a.multiply(c.multiply(d))).toFixed(8);
            this.cc.ef = this.cc.Gg()
        },
        tza: function(a) {
            a = a || this.get("zoom");
            var b = this.get("size"),
                c = b.width,
                b = b.height;
            if (!c || !b) return !0;
            this.uC = c /= b;
            b = b / 2 * Math.pow(2, 20 - a);
            a = g.a.vb((56 - a) * Math.PI / 180, 2);
            var d = g.a.vb(b / Math.tan(a / 2), 0);
            2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
            this.Tpa = a;
            this.qn = d;
            this.tz = this.qn / 10;
            this.OI = 50 * this.qn;
            this.toa = (this.qn - this.tz) / (this.OI - this.tz);
            this.Ne.T8(a, c, this.tz, this.OI);
            this.Ne.ef = this.Ne.Gg();
            a = this.Ne;
            var c = new g.eW,
                b = c.iE,
                e = this.Ne.elements,
                d = e[0],
                f = e[1],
                h = e[2],
                k = e[3],
                l =
                e[4],
                m = e[5],
                n = e[6],
                p = e[7],
                q = e[8],
                r = e[9],
                s = e[10],
                u = e[11],
                v = e[12],
                w = e[13],
                t = e[14],
                e = e[15];
            wc(b[0], k - d, p - l, u - q, e - v).normalize();
            wc(b[1], k + d, p + l, u + q, e + v).normalize();
            wc(b[2], k + f, p + m, u + r, e + w).normalize();
            wc(b[3], k - f, p - m, u - r, e - w).normalize();
            wc(b[4], k - h, p - n, u - s, e - t).normalize();
            wc(b[5], k + h, p + n, u + s, e + t).normalize();
            a.sR = c
        },
        sD: function() {
            var a = this.map;
            a.map.ht && (this.gr(), this.P[3] = a.get("size").toString());
            var b = this.P.toString();
            if (b !== this.N7) {
                var c = this.get("zoom"),
                    d = this.mA;
                d.zoom = c;
                d.uC = this.uC;
                d.top =
                    this.top;
                d.Ha = this.lm();
                d.lb = this.get("centerCoords");
                d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
                d.pitch = this.get("pitch") || 0;
                d.rIa = this.get("yaw");
                d.Sf = a.get("crs");
                d.T = Math.pow(2, 20 - c);
                d.ke = Math.round(c);
                d.k7 = Math.floor(c);
                d.Jg = Math.pow(2, 20 - d.ke);
                d.Tua = Math.pow(2, 20 - d.k7);
                d.Ne = this.Ne;
                d.cc = this.cc;
                this.N7 = d.key = b
            }
            this.mA.rh = this.get("center");
            this.mA.er = g.a.fg();
            this.mA.To = this.To();
            return this.mA
        },
        lm: function() {
            var a = this.get("size"),
                b = a.width,
                a = a.height;
            if (!b || !a) return null;
            var c, d;
            d = 0;
            var e = new g.H(0, d);
            c = this.Bg(e, !0);
            if (55 < this.Ce.pitch || !c)
                for (; !c;) d += a / 40, e.y = d, c = this.Bg(e, !0);
            this.top = d / a;
            e.x = b;
            d = this.Bg(e, !0);
            var f = 0,
                h = this.Ce.zoom;
            50 <= this.Ce.pitch && 18 <= h && (f = 0);
            e.y = a + f;
            f = this.Bg(e, !0);
            e.x = 0;
            h = this.Bg(e, !0);
            c = [c.yl(), d.yl(), f.yl(), h.yl(), c.yl()];
            c = new g.Y$(c);
            e.x = b / 2;
            e.y = a + 256;
            c.dQ = this.Bg(e, !0);
            return c
        },
        Jd: function() {
            var a = this.lm();
            if (a) {
                for (var b = [], c = 0; c < a.path.length; c += 1) {
                    var d = this.map.Nd(new g.H(a.path[c][0], a.path[c][1]));
                    b.push(d)
                }
                return new g.rp(b)
            }
        },
        le: function(a, b, c) {
            a.z = c || 0;
            a = this.C6([a]);
            a = a[0];
            return new g.H(a.x, a.y)
        },
        Q3: function(a) {
            var b = this.get("size");
            a = new g.Hl([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
            a.multiply(this.tz);
            return this.Ne.ef.Dh(a)
        },
        Bg: function(a, b, c) {
            var d;
            this.map ? (this.map.D = !0, d = this.map.getSize(!0), this.map.D = !1) : d = this.get("size");
            var e = a.x / d.width * 2 - 1;
            d = 1 - a.y / d.height * 2;
            a = new g.Hl([e, d, -1, 1]);
            a.multiply(this.tz);
            if (!this.Ne.ef) return null;
            a = this.Ne.ef.Dh(a);
            e = new g.Hl([e, d, 1, 1]);
            e.multiply(this.OI);
            d = this.Ne.ef.Dh(e);
            var f = this.cc.ef,
                e = f.Dh(a).elements;
            a = f.Dh(d).elements;
            c = (e[2] - (-c || 0)) / (e[2] - a[2]);
            if (0 > a[2] || 0 > c || b && c > 2.5 * this.toa) return null;
            b = e[0] - c * (e[0] - a[0]);
            c = e[1] - c * (e[1] - a[1]);
            return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.dc)
        },
        C6: function(a) {
            for (var b = this.get("centerCoords"), c = g.a.dc.x, d = g.a.dc.y, e = this.get("size"), f = g.a.Fa, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Hl([0, 0, 0, 1]), m = l.elements, n = new g.H(0, 0), p = g.Dc.multiply(this.Ne, this.cc), q = 0, r = a.length; q < r; q++)
                if (a[q]) {
                    a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
                        n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0);
                    h < n.x ? n.x -= f : b > n.x && (n.x += f);
                    m[0] = n.x - c;
                    m[1] = n.y - d;
                    m[2] = n.z;
                    var s = p.Dh(l);
                    s.multiply(1 / s.elements[3]);
                    k[q] = { x: (s.elements[0] + 1) / 2 * e.width, y: (-s.elements[1] + 1) / 2 * e.height, z: s.elements[2] }
                }
            return k
        },
        Wza: function(a) {
            var b = this.get("size");
            a = this.Ne.Dh(this.cc.Dh((new g.Hl).copy(a)));
            a.multiply(1 / a.elements[3]);
            b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
            b.z = a.elements[2];
            return b
        }
    });
    g.a.dc = new g.H(215440491, 106744817);
    g.Rb.Gb({
        n2: function(a, b, c) {
            var d = this;
            d.jF ? (clearTimeout(d.jF), d.jF = null) : (d.pa("zoomstart", { zoom: a }), d.q("zoomstart"));
            d.jF = setTimeout(function() {
                d.jF = null;
                d.pa("zoomend", { zoom: a });
                d.pa("zoomchange", { zoom: a });
                d.q("zoomend")
            }, 150);
            a = g.a.vb(a, 2);
            d.rA(a, !0, b, c)
        },
        rA: function(a, b, c, d) {
            var e = this.get("zoom");
            if (e !== a) {
                var f = this.get("zooms");
                "3D" !== this.B.view.type && (g.l.ba || g.l.Ie) && (b = !0);
                a = a || e;
                a = Math.min(Math.max(a, f[0]), f[1]);
                var h = a !== e,
                    k = !!c;
                this.Je && (this.Je.stop(), this.Je = null);
                c = c || this.get("centerCoords");
                var l = this.le(c);
                c = function(c) {
                    b || (c = g.a.vb(c, 2));
                    var d = this.Bg(l);
                    this.set("zoom", c);
                    var e = this.Bg(l),
                        d = e && e ? e.$a(d) : new g.H(0, 0);
                    this.set("centerCoords", this.get("centerCoords").$a(d).toFixed(3));
                    d.x && d.y && this.pa("mapmove");
                    c === a && a << 0 === a && (this.set("targetLevel", null), h && !this.jF && (this.pa("zoomchange"), this.pa("zoomend")), this.q("zoomend"), k && this.q("moveend"), this.Xf = null)
                };
                var m;
                this.Fd && this.Fd.Zv && (this.Fd.stop(), this.Fd.kS && (d = !0), this.Fd.tD && (m = !0), this.Fd = null, this.set("targetLevel",
                    null));
                this.Xf && this.Xf.Zv && (this.Xf.stop(), d = !0, this.Xf.tD && (m = !0), this.Xf = null, this.set("targetLevel", null));
                h && !d && this.pa("zoomstart");
                k && !m && this.pa("movestart");
                this.q("zoomstart");
                b ? c.call(this, a) : (this.Xf = new g.Mj(e, a, null, 0.04), this.Xf.kS = h, this.Xf.tD = k, this.Xf.transition = function(a, b, c) { return c >= g.r.TH ? b : (b - a) * (1 - Math.pow(1 - c / g.r.TH, 4)) + a }, this.Xf.Hq = c, this.Xf.Nn(this, !0), this.set("targetLevel", a))
            }
        },
        ZK: function(a, b, c, d) {
            var e = null;
            a || (a = this.Fd ? this.Fd.cya : this.get("targetLevel") || this.get("zoom"));
            var e = b ? this.Bb(b).toFixed(3) : this.Fd ? this.Fd.y9 : this.get("centerCoords"),
                f = a !== this.get("zoom"),
                h = !e.gb(this.get("centerCoords")),
                k = b = !1;
            this.Xf && this.Xf.Zv && (this.Xf.stop(), b = !0, this.Xf.tD && (k = !0), this.Xf = null, this.set("targetLevel", null));
            this.Fd && this.Fd.Zv && (this.Fd.stop(), this.Fd.kS && (b = !0), this.Fd.tD && (k = !0), this.Fd = null, this.set("targetLevel", null));
            this.Je && (this.Je.stop(), this.Je = null);
            if (f || h) {
                if (!this.B.view.lm().contains(e) || f && "3D" !== this.B.view.type && (g.l.ba || g.l.Ie)) c = !0;
                if (c) f && (b ||
                    (this.q("zoomstart"), this.pa("zoomstart")), this.set("zoom", a), this.pa("zoomchange"), this.pa("zoomend"), this.q("zoomend")), h && (k || d || (this.pa("movestart"), this.q("movestart")), this.set("centerCoords", e), this.pa("mapmove"), this.q("moveend", { G5: d })), this.set("targetLevel", null);
                else {
                    this.set("targetLevel", a);
                    var l = a - this.get("zoom"),
                        m = e.$a(this.get("centerCoords")).toFixed(3);
                    this.Fd = new g.Mj(1, 0, null, 0.001);
                    this.Fd.kS = f;
                    this.Fd.tD = h;
                    this.Fd.y9 = e;
                    this.Fd.cya = a;
                    this.Fd.transition = function(a, b, c) {
                        return Math.pow(1 -
                            Math.min(g.r.TH, c) / g.r.TH, 2)
                    };
                    this.Fd.Hq = function(b) {
                        0.02 > b ? (this.Fd && (this.Fd.stop(), this.Fd = null), f && (this.set("zoom", a), this.pa("zoomchange"), this.pa("zoomend"), f = !1, this.q("zoomend")), h && (this.set("centerCoords", e), this.q("mapmove"), this.q("moveend", { G5: d })), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.$a(m.Md(b)).toFixed(3), this.set("centerCoords", b), this.pa("mapmove")));
                        this.set("display", 1)
                    };
                    this.Fd.Nn(this);
                    f && !b && (this.q("zoomstart"), this.pa("zoomstart"));
                    !h || k || d || (this.q("movestart"),
                        this.pa("movestart"))
                }
            }
        }
    });
    g.o = {};
    g.o.Yb = g.ca.extend({
        ka: [g.va, g.$e],
        A: function(a, b) {
            this.S = a;
            this.bb = [3, 18];
            this.ex = g.a.yb(this);
            a && this.bf(["opacity", "visible", "zIndex", "zooms"], a);
            a.Jf = b.B.view.type;
            this.e = b;
            this.X("display", b)
        },
        jg: function() {
            this.Ei && this.oQ();
            if (g.Da && g.Da.ir && g.Da.ir.length) { var a = g.a.indexOf(g.Da.ir, this); - 1 !== a && (g.Da.ir = g.a.Eo(g.Da.ir, a)) }
            if (a = this.Mb) {
                if (a.length)
                    for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]);
                else a.parentNode && a.parentNode.removeChild(a);
                this.Mb = null
            }
            this.S.jg && this.S.jg();
            this.S.ti = !1;
            this.S.o = null;
            this.Al();
            var c;
            this.M && (this.M.bk(), this.M = null, c = "-" + this.mc);
            this.Df && (this.Df.bk(), this.Df = null, c = "-" + this.mc);
            if (c)
                for (var d in g.Da.Hj) g.a.dD(d, c) && delete g.Da.Hj[d]
        },
        pa: function(a, b) { this.S.q(a, b) },
        visibleChanged: function() { this.set("display", 0) },
        zIndexChanged: function() { this.set("display", 0) },
        FU: function(a) { g.g.Vq(a, this.opacity) },
        opacityChanged: function() {
            var a = this.get("opacity");
            this.opacity = Math.min(Math.max(0, a), 1);
            if (a = this.Mb)
                if (a.length)
                    for (var b = 0; b < a.length; b +=
                        1) this.FU(a[b]);
                else this.FU(a);
            this.e && this.e.B && "3D" == this.e.B.view.type && this.set("display", 0)
        },
        zn: function() { return this.e.Oc && !this.S.get("rejectMapMask") },
        dJ: function() {
            var a = this.get("bounds");
            if (a) {
                if (a instanceof g.me) {
                    var b = a.ek(),
                        a = a.No(),
                        c = this.e.Bb(new g.U(180, 0)).x,
                        d = this.e.Bb(b),
                        e = this.e.Bb(a),
                        f = this.e.get("center");
                    b.R > a.R && (0 < f.R ? e.x += c : d.x -= c);
                    this.I = [d.x, d.y, e.x, e.y]
                } else a instanceof g.Yf ? this.I = [a.kc.x, a.kc.y, a.Vd.x, a.Vd.y] : a instanceof g.PF && "3D" === this.S.Jf && (b = a.path[1], d =
                    this.e.Bb(a.path[0]), e = this.e.Bb(b), this.I = [d.x, d.y, e.x, e.y, a.I8, a.height]);
                return this.I
            }
            return null
        }
    });
    var Nc = function() {
        function a(a) { this.SF[g.a.yb(a)] = a; return this }

        function b(a) { this.SF[g.a.yb(a)] = null; return this }
        return function() {
            function c() {
                var a = c.SF,
                    b, f = [],
                    h;
                for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
                for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments), void 0 !== h && (b = h);
                return b
            }
            c.SF = {};
            c.E1 = a;
            c.GGa = b;
            return c
        }
    }();
    g.rg = g.ca.extend({
        ka: [g.va],
        A: function(a, b) {
            this.Gp = a | 0;
            this.VF = !!b;
            this.count = 0;
            this.mK = Nc();
            this.clear();
            this.CB = []
        },
        xh: function() { return !this.count },
        YEa: function() { return this.count >= this.Gp },
        oHa: function(a) { this.Gp !== a && (this.Gp = a | 0) && this.o1(this.Gp) },
        Kd: function(a) { return !!this.e[a] },
        get: function(a, b) { var c = this.tY(a); return c ? c.value : b },
        set: function(a, b) {
            var c = this.tY(a);
            c ? c.value = b : (c = new g.rg.rr(a, b), this.e[a] = c, this.tB(c), this.count += 1, this.count > this.Gp && this.o1(this.Gp))
        },
        yw: function(a) { this.remove(a) },
        remove: function(a) { return this.e.hasOwnProperty(a) && this.TB(this.e[a]) ? !0 : !1 },
        forEach: function(a, b) { for (var c = this.bd.next; c !== this.bd; c = c.next) a.call(b, c.value, c.key, this) },
        tK: function(a, b) { return this.e.hasOwnProperty(a) ? this.e[a].value : b },
        jGa: function() { return this.bd.next.value },
        kGa: function() { return this.bd.Ia.value },
        shift: function() { return this.h0(this.bd.next) },
        x2: function() { this.CB.length = 0 },
        m6: function(a) { this.CB.push(a) },
        push: function(a) {
            a = new g.rg.rr("", a);
            0 === this.count ? (this.bd.Ia = null,
                a.Ia = this.bd, this.bd.next = a) : (this.iC.next = a, a.Ia = this.iC);
            this.count += 1;
            this.iC = a
        },
        iza: function(a) {
            a = new g.rg.rr("", a);
            0 === this.count ? (this.bd.Ia = null, a.Ia = this.bd, this.iC = this.bd.next = a) : (this.bd.next.Ia = a, a.next = this.bd.next, a.Ia = this.bd, this.bd.next = a);
            this.count += 1
        },
        kua: function() {
            if (this.count) {
                this.count -= 1;
                var a = this.bd.next;
                a.next ? (a.next.Ia = this.bd, this.bd.next = a.next) : (this.bd.next = null, this.iC = this.bd.Ia = null);
                a.next = null;
                a.Ia = null;
                return a.value
            }
            return null
        },
        pop: function() { return this.h0(this.bd.Ia) },
        tY: function(a) { if (this.e.hasOwnProperty(a)) return a = this.e[a], this.VF && (a.remove(), this.tB(a)), a },
        tB: function(a) { this.VF ? (a.next = this.bd.next, a.Ia = this.bd, this.bd.next = a, a.next.Ia = a) : (a.Ia = this.bd.Ia, a.next = this.bd, this.bd.Ia = a, a.Ia.next = a) },
        o1: function(a) {
            if (!(this.count <= a || this.count < 2 * this.CB.length)) {
                for (var b = this.VF ? this.bd.Ia : this.bd.next, c = {}, d = 0, e = this.CB.length; d < e; d++) c[this.CB[d]] = !0;
                for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.VF ? b.Ia : b.next, b.key && !c[b.key] && this.TB(b) && this.mK(b.value),
                        b = d, b !== this.bd && b !== this.iC););
            }
        },
        TB: function(a) {
            if (this.xC && !1 == this.xC(a.value)) return !1;
            a.remove();
            delete this.e[a.key];
            this.count -= 1;
            return !0
        },
        h0: function(a) { this.bd !== a && (this.xC && console.log("Warnning!!!"), this.TB(a)); return a.value },
        clear: function() {
            this.e = {};
            this.bd = new g.rg.rr("", null);
            this.bd.Ia = this.bd.next = this.bd;
            this.count = 0
        }
    });
    g.rg.rr = function(a, b) {
        this.key = a;
        this.value = b
    };
    g.rg.rr.prototype.Ia = null;
    g.rg.rr.prototype.next = null;
    g.rg.rr.prototype.remove = function() {
        this.Ia.next = this.next;
        this.next.Ia = this.Ia;
        this.next = this.Ia = null
    };

    function Oc(a, b, c) {
        this.url = a;
        this.Nc = b;
        this.nR = c;
        this.rn = this.QK = !1
    }

    function Pc(a, b, c) { var d = Qc; return function() { return d.call(this, a, b, c) } }

    function Qc(a, b, c) {
        a.BDa = +new Date;
        a.loaded = b;
        clearTimeout(a.qya);
        var d = a.yta;
        d.Ln.remove(a.url) && d.Lga();
        d = a.Esa ? a.ga : a.Ba;
        a.ga = null;
        (c || b || a.nR) && a.Nc(b ? d : null, a);
        a.O5 ? (a.O5.wi(), a.O5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.Ba = null)
    }
    g.xF = g.ca.extend({
        DBa: "assets/image/blank.gif",
        A: function(a, b, c) {
            this.timeout = b || 15E3;
            this.Mq = new g.rg(1024);
            this.Ln = new g.rg(1024);
            this.H2 = a;
            this.ZQ = c
        },
        TM: function(a) { a && this.Ln.count >= this.H2 && (a = this.Ln.bd.Ia.value, a.rn && (this.Ln.remove(a.url), this.dX(a))); for (; this.Mq.count && !(this.Ln.count >= this.H2);) this.Xda(this.Mq.shift()) },
        Lga: function() {
            if (!this.MX) {
                this.MX = !0;
                var a = this;
                setTimeout(function() {
                    a.MX = !1;
                    a.TM()
                }, 0)
            }
        },
        Xda: function(a) {
            var b = document.createElement("img");
            a.Vpa && (b.crossOrigin =
                "anonymous");
            b.src = a.url;
            a.Ba = b;
            a.yta = this;
            a.startTime = +new Date;
            a.QK = !0;
            b.complete ? Qc(a, !0) : (this.Ln.set(a.url, a), b.onload = Pc(a, !0), b.onerror = Pc(a, !1, !0), b.onabort = Pc(a, !1), a.qya = setTimeout(Pc(a, !1, !0), this.timeout))
        },
        dX: function(a) { a.QK && (Qc(a, !1), a.rn = !0, a.xCa = !0) },
        wFa: function(a, b, c) { return this.nz(a.url, b, c, !0, a.ta.z + "_" + a.ta.x + "_" + a.ta.y) },
        nz: function(a, b, c, d, e) {
            var f = this.Ln.get(a);
            if (f && f.rn) f.rn = !1, f.Nc = b, f.nR = c;
            else {
                f = new Oc(a, b, c);
                f.Esa = d;
                f.key = e;
                if (this.Mq.get(g.a.yb(f))) return;
                this.Mq.set(g.a.yb(f),
                    f);
                this.TM(!0)
            }
            return f
        },
        ota: function(a, b, c) {
            var d = this.Ln.get(a);
            if (d && d.rn) d.rn = !1, d.Nc = b, d.nR = c;
            else {
                d = new Oc(a, b, c);
                d.Vpa = !0;
                if (this.Mq.get(g.a.yb(d))) return;
                this.Mq.set(g.a.yb(d), d);
                this.TM(!0)
            }
            return d
        },
        k2: function(a) { a.rn || (a.rn = !0, this.Mq.remove(g.a.yb(a))) },
        clear: function(a) {
            this.Mq.forEach(function(a) { a.rn = !0 });
            this.Mq.clear();
            if (a)
                for (; 0 < this.Ln.length;) a = this.Ln.pop(), this.dX(a);
            else this.Ln.forEach(function(a) { a.rn = !0 })
        }
    });

    function Rc(a, b, c) {
        this.z = a;
        this.x = b;
        this.y = c
    }
    Rc.prototype.cb = function() { return new Rc(this.z, this.x, this.y) };
    Rc.prototype.toString = function() { return this.z + "/" + this.x + "/" + this.y };
    g.qb = function(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
        this.ta = a;
        this.key = a.toString();
        this.Ke = b
    };
    g.mr = Rc;
    g.o.qb = g.o.Yb.extend({
        A: function(a, b, c, d, e) {
            arguments.callee.ma.apply(this, arguments);
            this.X("tileSize", a);
            this.X("tiles", a);
            this.bf(["zooms", "type", "detectRetina", "errorUrl"], a);
            a.HG && (this.X("lang", b, !0), this.X("mapStyle", b, !0), this.X("style", b, !0), this.X("features", b, !0));
            var f = "overlayer" === a.get("type") || !1 === a.get("blend");
            this.Ok = !f && !g.l.ba;
            if (g.l.Ie || g.l.kIa) this.Ok = !1;
            var h = b.get("size"),
                h = h.width * h.height / 65536;
            this.ja = g.l.ba && g.l.ja && this.get("detectRetina");
            g.l.Kc && g.l.ba && 9 < h && (this.Ok = !1);
            this.Zi = !f && !a.uk;
            this.$i = !f && !a.uk;
            this.lL = c;
            this.X("reload", a);
            a.Asa ? this.X("createTile", a) : this.X("tileFun", a);
            this.gf = d;
            this.tS = e
        },
        langChanged: function() {
            this.set("reload");
            this.S.Zs()
        },
        styleChanged: function() { this.e.Bd || (this.set("reload"), this.S.Zs()) },
        featuresChanged: function() {
            this.set("reload");
            this.S.Zs()
        },
        reloadChanged: function() { this.set("display", 0) },
        tileFunChanged: function() {
            var a = this.lL || this.get("tileFun");
            this.Ao = function(b, c, d) {
                var e = a(b.ta.x, b.ta.y, b.ta.z);
                if (!b.Hs || b.Hs.rn) b.loaded = !1, b.Hs = ("3D" === this.e.B.view.type ? g.sm.ota : g.sm.nz).call(g.sm, e, function(a) {
                    b.Hs = null;
                    a ? c(a) : d()
                }, !1)
            }
        },
        createTileChanged: function() {
            this.S.D = !0;
            var a = this.S.getCreateTile();
            this.S.D = !1;
            this.Ao = function(b, c, d) { a.call(this.f.S, b.ta.x, b.ta.y, b.ta.z, c, d, b) };
            this.set("reload")
        },
        je: function() {
            var a = this.S.get("zooms", null, !0);
            this.S.zsa && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
            return {
                Dd: this.S.get("tileSize"),
                visible: this.S.get("visible"),
                I: this.dJ(),
                bb: a,
                bI: this.Ok,
                Zi: this.Zi,
                $i: this.$i,
                opacity: this.S.get("opacity"),
                Ao: this.S.get("createTile"),
                Oo: this.lL || this.S.get("tileFun"),
                Kc: this.S.Eq ? !1 : this.S.get("detectRetina") && g.l.ja && g.l.ba,
                Oc: this.zn()
            }
        },
        am: function(a) { if (g.M.$d.Ui) return new g.M.$d.Ui(this, a) }
    });
    g.sm = new g.xF(6, null);
    g.o.ed = g.o.Yb.extend({
        A: function(a, b) {
            this.Ta = Math.min(2, window.devicePixelRatio || 1);
            this.Kc = g.l.ja;
            this.map = b;
            this.cr = 0;
            this.pm = !1;
            this.lg = this.Cf = 0;
            this.eh = [];
            arguments.callee.ma.apply(this, arguments);
            this.Jv = [];
            this.fm = new g.o.faa;
            a && (this.X("style", a), this.X("cursor", a, !0), this.Pxa = a.get("stable") || !1, this.X("dataSources", a), this.X("bubble", a));
            this.X("display", b);
            this.rca()
        },
        je: function() {
            return {
                visible: this.get("visible"),
                bb: this.get("zooms"),
                opacity: this.get("opacity"),
                zIndex: this.get("zIndex"),
                ey: this.S.get("alwaysRender") || !1,
                Oc: this.zn()
            }
        },
        dataSourcesChanged: function() {
            var a = this.get("dataSources");
            a && a.length ? "string" === typeof a ? (new g.jb.zb(a)).h("complete", function(a) {
                this.s7(a.data);
                this.ks = a.data;
                this.pm = !0;
                this.set("display");
                this.La = !0;
                this.S.q("complete")
            }, this) : a.length && (this.s7(a), this.ks = a, this.pm = !0, this.set("display"), this.La = !0, this.S.q("complete")) : this.clear()
        },
        getDatas: function() { return this.ks },
        nza: function() {
            if (this.S.mk) {
                var a = this.Em;
                this.Cf = a.Cf;
                this.lg = a.lg
            }
        },
        pa: function(a, b) {
            var c = { type: a, data: "mouseout" === a ? this.Iga || null : b.ru.hb, target: this.S };
            this.Iga = "mouseout" === a ? null : b.ru.hb;
            this.S.q(a, c)
        },
        sc: function(a) { this.pa(a.type, a) },
        rca: function() {
            this.h("click", this.sc);
            this.h("dblclick", this.sc);
            this.h("mousedown", this.sc);
            this.h("mouseup", this.sc);
            this.h("mouseover", this.sc);
            this.h("mouseout", this.sc);
            this.h("touchstart", this.sc);
            this.h("touchend", this.sc)
        },
        uCa: function() {
            this.G("click", this.sc);
            this.G("dblclick", this.sc);
            this.G("mousedown", this.sc);
            this.G("mouseup", this.sc);
            this.G("mouseover", this.sc);
            this.G("mouseout", this.sc);
            this.G("touchstart", this.sc);
            this.G("touchend", this.sc)
        },
        styleChanged: function() {
            this.Em = this.get("style");
            this.nza();
            this.set("display", 0)
        },
        s7: function(a) {
            if (a) {
                this.clear();
                for (var b = 0; b < a.length; b += 1) {
                    var c = a[b].lnglat;
                    a[b].lnglat = g.a.Ja(c);
                    c = this.map.Bb(c);
                    c = new g.di({ name: "point-" + g.a.yb(this), W: new g.Aa.Og([c.x, c.y], !0) });
                    c.Hr = this;
                    c.hb = a[b];
                    this.RH(c)
                }
            }
        },
        Tqa: function(a) {
            if ("geojson" === a) return new g.laa({ map: this.map });
            if ("topjson" === a) return new g.ZAa({ map: this.map });
            if ("subway" === a) return new g.UAa({ map: this.map })
        },
        yva: function(a) {
            if (a) {
                var b = [],
                    b = [],
                    c = {};
                if (a.rules) {
                    for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
                        for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (f[k] = new g.style.Pg.cW(h[k].fill)), h[k].stroke && (f[k] = new g.style.Pg.HW(h[k].stroke));
                        h = f;
                        b[d].iL = h;
                        b[d] = new g.style.dba(b[d])
                    }
                    c.rules = b
                }
                if (a.symbolizers) {
                    b = a.symbolizers;
                    a = 0;
                    for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.Pg.cW(b[a].fill)),
                        b[a].stroke && (b[a] = new g.style.Pg.HW(b[a].stroke));
                    c.iL = b
                }
                a = new g.pM(c)
            } else a = new g.pM({});
            this.set("style", a);
            return a
        },
        rCa: function(a, b) {
            var c = new g.jb.zb(a);
            c.h("complete", function(c) {
                c = this.ga[a] = this.Tqa(b).TT(c);
                this.ay(c);
                this.pa("complete")
            }, this);
            c.h("error", this.nc, this)
        },
        awa: function(a) { "px" === a.target.get("unit") ? (this.Cf = Math.max(a.vl, this.Cf), this.lg = Math.max(a.vl, this.lg)) : a.vl > this.Ms && (this.Ms = a.vl, this.qz = this.Ms / this.map.B.oj.lq(20)) },
        RH: function(a) {
            this.fm.add(a);
            if (!this.XC &&
                !this.S.mk) {
                if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
                    a.h("rad", this.awa, this);
                    var b = a.get("radius");
                    b.length && (b = Math.max.apply(null, b));
                    "px" === a.get("unit") ? (this.Cf = Math.max(b, this.Cf), this.lg = Math.max(b, this.lg)) : this.Ms ? b > this.Ms && (this.Ms = b, this.qz = this.Ms / this.map.B.oj.lq(20)) : (this.Ms = b, this.qz = this.Ms / this.map.B.oj.lq(20))
                }
                b = a.get("strokeWeight") || 0;
                if (!this.rz || b > this.rz) this.rz = b
            }
            this.Pxa || a.X("feature", this, !0)
        },
        ay: function(a) {
            this.pm = !0;
            for (var b = 0, c = a.length; b <
                c; b += 1) this.RH(a[b])
        },
        clear: function() {
            this.pm = !0;
            this.ks = [];
            this.fm.clear();
            this.set("display", 0)
        },
        yn: function(a) {
            var b, c;
            b = this.fm.yn([a[0] + g.a.Fa, a[1], a[2] + g.a.Fa, a[3]]);
            c = this.fm.yn([a[0] - g.a.Fa, a[1], a[2] - g.a.Fa, a[3]]);
            a = this.fm.yn(a);
            return g.extend(a, g.extend(b, c))
        },
        qEa: function(a) {
            var b, c = this.get("style"),
                d = a.wl;
            c instanceof g.pM || (c = this.yva(c));
            if (d && 0 < d.length) b = c.M2(d, a);
            else {
                if (c.C8.length || c.wl.length) b = c.goa(a);
                b || (b = a.vqa())
            }
            return b
        },
        $R: function(a) {
            function b(a, b) { return a.gm - b.gm }
            var c = [],
                d, e, f, h, k, l = {};
            for (d in a)
                if (a.hasOwnProperty(d)) {
                    f = a[d];
                    h = f.get("zIndex");
                    for (e in l)
                        if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
                        "undefined" === typeof l[h] && (c.push([
                        [],
                        [], h
                    ]), l[h] = c.length - 1);
                    h = c[l[h]];
                    h[0].push(f)
                }
            c.sort(this.Lxa);
            a = 0;
            for (d = c.length; a < d; a += 1) c[a][0].sort(b);
            return c
        },
        featureChanged: function(a) {
            this.pm = !0;
            var b = a.target,
                c = b.fc();
            0 !== this.fm.Aqa([g.a.yb(b)]).length && (this.fm.remove(b, a.Lv), c && !a.zoa && this.fm.add(b))
        },
        e8: function(a) {
            this.pm = !0;
            for (var b, c = 0, d = a.length; c <
                d; c += 1) b = a[c], b.W.Lv = null, b.qs(!0), b.zl("feature")
        },
        tHa: function(a, b) { return a[1].zIndex === b[1].zIndex ? g.a.yb(a[1]) - g.a.yb(b[1]) : a[1].zIndex - b[1].zIndex },
        Lxa: function(a, b) { return a[2] - b[2] },
        gHa: function(a) { return a.wEa() === g.o.dBa.NAa },
        am: function(a) { return this.XC ? new g.M.Me.Il(this, a) : "c" === this.map.get("overlayRender") && g.M.canvas.Il ? new g.M.canvas.Il(this, a) : g.M.$d.Il && "d" === this.map.get("overlayRender") ? new g.M.$d.Il(this, a) : null }
    });
    g.o.ed.Gb({ bm: function(a) { return this.XC ? new g.Ea.Me.Il(this, a) : this.S.mk ? new g.Ea.Maa(this, a) : new g.Ea.Il(this, a) } });
    g.o.faa = g.ca.extend({
        A: function() { this.clear() },
        clear: function() {
            this.oq = [];
            this.PT = new g.Nk
        },
        add: function(a) {
            var b = g.a.yb(a),
                c = a.fc();
            this.oq[b] || (this.count += 1, this.oq[b] = a, c && !g.I.gb(c.Jd(), [Infinity, Infinity, -Infinity, -Infinity]) && this.PT.Fs(c.Jd(), a))
        },
        kEa: function() { return this.oq },
        yn: function(a) { return this.PT.Zwa(a) },
        Aqa: function(a) {
            var b = a.length,
                c = [],
                d;
            for (d = 0; d < b; d += 1) this.oq[a[d]] && c.push(this.oq[a[d]]);
            return c
        },
        remove: function(a, b) {
            var c = g.a.yb(a).toString(),
                d = a.fc();
            this.oq[c] && (this.oq[c] =
                null, d && (c = "undefined" !== typeof b ? b : d.Jd(), this.PT.remove(c, a)))
        }
    });
    g.Nk = g.ca.extend({
        A: function(a) {
            this.s6 = "undefined" !== typeof a ? a : 6;
            this.ZJ = Math.floor(this.s6 / 2);
            this.UK = { I: [Infinity, Infinity, -Infinity, -Infinity], Ib: [] };
            this.count = 0
        },
        kna: function(a, b) {
            var c = -1,
                d = [],
                e;
            d.push(b);
            var f = b.Ib;
            do {
                -1 !== c && (d.push(f[c]), f = f[c].Ib, c = -1);
                for (var h = f.length - 1; 0 <= h; h -= 1) {
                    var k = f[h];
                    if ("undefined" !== typeof k.We) { c = -1; break }
                    var l = g.Nk.Uz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Ib.length + 1),
                        k = g.Nk.Uz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
                            (k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Ib.length + 2);
                    if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
                }
            } while (-1 !== c);
            return d
        },
        Fs: function(a, b, c) {
            a = { I: a, We: b };
            "undefined" !== typeof c && (a.type = c);
            this.q5(a, this.UK);
            this.count += 1
        },
        q5: function(a, b) {
            var c;
            if (0 === b.Ib.length) b.I = g.I.cb(a.I), b.Ib.push(a);
            else {
                var d = this.kna(a, b),
                    e = a;
                do {
                    if (c && "undefined" !== typeof c.Ib && 0 === c.Ib.length) {
                        var f = c;
                        c = d.pop();
                        for (var h = 0, k = c.Ib.length; h < k; h += 1)
                            if (c.Ib[h] === f || 0 === c.Ib[h].Ib.length) { c.Ib.splice(h, 1); break }
                    } else c = d.pop();
                    f =
                        e instanceof Array;
                    if ("undefined" !== typeof e.We || "undefined" !== typeof e.Ib || f) {
                        if (f) {
                            f = 0;
                            for (h = e.length; f < h; f += 1) g.I.extend(c.I, e[f].I);
                            c.Ib = c.Ib.concat(e)
                        } else g.I.extend(c.I, e.I), c.Ib.push(e);
                        if (c.Ib.length <= this.s6)
                            if (0 < d.length) e = { I: g.I.cb(c.I) };
                            else break;
                        else e = f = this.dta(c.Ib), 1 > d.length && (c.Ib.push(f[0]), d.push(c), e = f[1])
                    } else g.I.extend(c.I, e.I), e = { I: g.I.cb(c.I) }
                } while (0 < d.length)
            }
        },
        dta: function(a) { for (var b = this.Dva(a); 0 < a.length;) this.Eva(a, b[0], b[1]); return b },
        Dva: function(a) {
            for (var b =
                    a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
                var h = a[f];
                h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f);
                h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f)
            }
            Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
            return [{ I: g.I.cb(b.I), Ib: [b] }, { I: g.I.cb(c.I), Ib: [c] }]
        },
        Eva: function(a, b, c) {
            for (var d = g.Nk.Uz(b.I[2] - b.I[0], b.I[3] - b.I[1],
                    b.Ib.length + 1), e = g.Nk.Uz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Ib.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
                var m = a[l],
                    n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]],
                    n = Math.abs(g.Nk.Uz(n[1] - n[0], n[3] - n[2], b.Ib.length + 2) - d),
                    m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]],
                    m = Math.abs(g.Nk.Uz(m[1] - m[0], m[3] - m[2], c.Ib.length + 2) - e),
                    p = Math.abs(m - n);
                if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
                    b
            }
            d = a.splice(h, 1)[0];
            b.Ib.length + a.length + 1 <= this.ZJ ? (b.Ib.push(d), g.I.extend(b.I, d.I)) : c.Ib.length + a.length + 1 <= this.ZJ ? (c.Ib.push(d), g.I.extend(c.I, d.I)) : (k.Ib.push(d), g.I.extend(k.I, d.I))
        },
        remove: function(a, b) {
            var c = [];
            c[0] = { I: a };
            (c[1] = b) || (c[1] = !1);
            c[2] = this.UK;
            this.count -= 1;
            if (!1 === c[1]) {
                var d = 0,
                    e = [];
                do d = e.length, e = e.concat(this.h8.apply(this, c)); while (d !== e.length);
                return e
            }
            return this.h8.apply(this, c)
        },
        h8: function(a, b, c) {
            var d = [],
                e = [],
                f = [];
            if (!a || !g.I.ah(a.I, c.I)) return f;
            a = g.I.cb(a.I);
            var h;
            e.push(c.Ib.length);
            d.push(c);
            do {
                c = d.pop();
                var k = e.pop() - 1;
                if ("undefined" !== typeof b)
                    for (; 0 <= k;) {
                        var l = c.Ib[k];
                        if (g.I.ah(a, l.I))
                            if (b && "undefined" !== typeof l.We && l.We === b || !b && ("undefined" !== typeof l.We || g.I.I2(a, l.I))) {
                                "undefined" !== typeof l.Ib ? (f = this.Oz(l, !0, [], l), c.Ib.splice(k, 1)) : f = c.Ib.splice(k, 1);
                                g.Nk.ZT(c);
                                b = void 0;
                                c.Ib.length < this.ZJ && (h = this.Oz(c, !0, [], c));
                                break
                            } else "undefined" !== typeof l.Ib && (e.push(k), d.push(c), c = l, k = l.Ib.length);
                        k -= 1
                    } else if ("undefined" !== typeof h) {
                        c.Ib.splice(k + 1, 1);
                        0 < c.Ib.length && g.Nk.ZT(c);
                        k = 0;
                        for (l = h.length; k < l; k += 1) this.q5(h[k], c);
                        h.length = 0;
                        0 === d.length && 1 >= c.Ib.length ? (h = this.Oz(c, !0, h, c), c.Ib.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.Ib.length < this.ZJ ? (h = this.Oz(c, !0, h, c), c.Ib.length = 0) : h = void 0
                    } else g.Nk.ZT(c)
            } while (0 < d.length);
            return f
        },
        search: function(a, b) { return this.Oz({ I: a }, !1, [], this.UK, b) },
        Zwa: function(a, b) { return this.Oz({ I: a }, !1, [], this.UK, b, !0) },
        Oz: function(a, b, c, d, e, f) {
            var h = {},
                k = [];
            if (!g.I.ah(a.I, d.I)) return f ? h : c;
            k.push(d.Ib);
            do {
                d = k.pop();
                for (var l = d.length - 1; 0 <= l; l -= 1) {
                    var m = d[l];
                    if (g.I.ah(a.I, m.I))
                        if ("undefined" !== typeof m.Ib) k.push(m.Ib);
                        else if ("undefined" !== typeof m.We)
                        if (b) c.push(m);
                        else if ("undefined" === typeof e || m.type === e) m = m.We, "undefined" !== typeof f ? h[g.a.yb(m)] = m : c.push(m)
                }
            } while (0 < k.length);
            return "undefined" !== typeof f ? h : c
        }
    });
    g.Nk.ZT = function(a) {
        var b = a.Ib.length,
            c = a.I;
        if (0 === b) g.I.empty(c);
        else {
            var d = a.Ib[0].I;
            c[0] = d[0];
            c[2] = d[2];
            c[1] = d[1];
            c[3] = d[3];
            for (d = 1; d < b; d += 1) g.I.extend(c, a.Ib[d].I)
        }
    };
    g.Nk.Uz = function(a, b, c) {
        var d = (a + b) / 2;
        a *= b;
        return a * c / (a / (d * d))
    };
    g.C = g.C || {};
    g.C.Hh = g.ca.extend({
        ka: [g.va, g.$e],
        iva: ["position", "altitude", "visible", "clickable", "bubble"],
        A: function(a, b) {
            this.map = b;
            this.bf(this.iva, a);
            this.X("zIndex", a);
            this.X("draggable", a);
            g.l.Wf && this.yca();
            g.l.ba || this.LM();
            this.Kb = a;
            this.Kb.C = this
        },
        draggableChanged: function() { this.get("draggable") ? this.KM() : this.EO() },
        pa: function(a, b) {
            var c;
            c = b ? { type: a, pixel: b.xb, target: this.Kb, lnglat: b.ig } : { type: a };
            this.Kb && this.Kb.q(a, c)
        },
        sc: function(a) {
            ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type &&
                "longclick" !== a.type || this.get("clickable")) && this.pa(a.type, a)
        },
        JM: function() {
            this.h("click", this.sc);
            this.h("rightclick", this.sc);
            this.h("longclick", this.sc);
            this.h("longpress", this.sc);
            this.h("dblclick", this.sc)
        },
        q1: function() {
            this.G("click", this.sc);
            this.G("rightclick", this.sc);
            this.G("longclick", this.sc);
            this.G("longpress", this.sc);
            this.G("dblclick", this.sc)
        },
        LM: function() {
            this.get("clickable") && this.JM();
            this.h("mousemove", this.sc);
            this.h("mouseout", this.sc);
            this.h("mouseover", this.sc);
            this.h("mousedown",
                this.sc);
            this.h("mouseup", this.sc)
        },
        vCa: function() {
            this.q1();
            this.G("mousemove", this.sc);
            this.G("mouseout", this.sc);
            this.G("mouseover", this.sc);
            this.G("mousedown", this.sc);
            this.G("mouseup", this.sc)
        },
        clickableChanged: function() { this.get("clickable") ? this.JM() : this.q1() },
        yca: function() {
            this.get("clickable") && this.JM();
            this.h("touchstart", this.sc, this);
            this.h("touchmove", this.sc, this);
            this.h("touchend", this.sc, this)
        },
        KM: function() {
            this.h("dragstart", this.eu);
            this.h("dragging", this.cu);
            this.h("dragend",
                this.du)
        },
        eu: function(a) {
            this.map.aT(a);
            this.hg = a.xb;
            this.S5 = a.Sa;
            this.R5 = a.ig;
            this.pa("dragstart", a)
        },
        cu: function(a) {
            var b = this.map.B.view.type;
            if ("2D" == b) {
                var c = a.xb.$a(this.hg),
                    b = c.x,
                    c = c.y;
                this.hg = a.xb;
                var d = this.map.get("rotation") * Math.PI / 180,
                    e = b * Math.cos(d) + Math.sin(d) * c,
                    b = -Math.sin(d) * b + Math.cos(d) * c;
                this.Yo(new g.H(e, b));
                this.pa("dragging", a)
            } else "3D" == b && a.Sa && (c = a.xb.$a(this.hg), b = c.x, c = c.y, e = a.Sa.$a(this.S5), a.ig.$a(this.R5), this.hg = a.xb, "function" === typeof this.sz && this.sz(b, c, e), this.S5 =
                a.Sa, this.R5 = a.ig, this.pa("dragging", a))
        },
        du: function(a) {
            this.map.ww();
            "3D" == this.map.B.view.type && this.Kb.reset && this.Kb.reset();
            this.pa("dragend", a)
        },
        EO: function() {
            this.G("dragstart", this.eu);
            this.G("dragging", this.cu);
            this.G("dragend", this.du)
        },
        EN: function(a) {
            var b, c, d = [];
            if (a)
                for (b = 0, c = a.length; b < c; b += 1) d.push(this.FN(a[b]));
            return d
        },
        FN: function(a) { a = this.map.Bb(a); return [a.x, a.y] },
        kg: function(a) {
            var b = this.L.mb || this.map.get("centerCoords"),
                c = Math.pow(2, 20 - this.map.get("zoom"));
            return [(a[0] -
                b.x) / c, (a[1] - b.y) / c]
        },
        St: function(a, b) {
            var c = this.map.B,
                d = [],
                e = !1;
            a[0] instanceof Array && "number" !== typeof a[0][0] && (e = !0);
            if (e)
                for (var e = 0, f = a.length; e < f; e++) {
                    for (var h = [], k = 0, l = a[e].length; k < l; k++) {
                        var m = c.Bb(a[e][k]);
                        m.x += b[0];
                        m.y += b[1];
                        h.push(c.Nd(m))
                    }
                    d.push(h)
                } else
                    for (e = 0, f = a.length; e < f; e++) h = c.Bb(a[e]), h.x += b[0], h.y += b[1], d.push(c.Nd(h));
            return d
        }
    });
    g.C.ub = g.C.Hh.extend({
        fE: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor".split(" "),
        Yla: { AMAP_ANIMATION_NONE: !1, AMAP_ANIMATION_DROP: g.Mj.Easing.Bounce, AMAP_ANIMATION_BOUNCE: g.Mj.Easing.Cubic },
        A: function(a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.bf(this.fE, a);
            this.X("move", a);
            this.Nma();
            this.Eu();
            this.set("AnimationOffset", new g.H(0, 0), !0);
            this.X("raiseOnDrag", a);
            this.X("animation",
                a)
        },
        WN: function(a, b, c) {
            var d = this.get("animation");
            if (d && "AMAP_ANIMATION_NONE" !== d) {
                var e = this;
                this.Gn = new g.Mj;
                this.Gn.transition = function(c, h, k) {
                    if ("AMAP_ANIMATION_NONE" === d) return 0;
                    if (a && 600 <= k) return e.Gn.stop(), 0;
                    c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In";
                    "out" === b ? c = "Out" : "in" === b && (c = "In");
                    return e.Yla[d][c](k % 600 / 600)
                };
                c = c || 40;
                this.Gn.Hq = function(a) { e.set("AnimationOffset", e.HO.add(new g.H(0, -1 * c * a))) };
                this.HO = new g.H(0, 0);
                this.Gn.Nn()
            }
        },
        AnimationOffsetChanged: function() { this.positionChanged() },
        s0: function() {
            this.Gn && (this.Gn.stop(), this.set("AnimationOffset", this.HO));
            this.set("AnimationOffset", new g.H(0, -40));
            if (this.kr) this.kr.set("position", this.get("position"));
            else {
                var a = new B.C.ub({ zIndex: this.get("zIndex") - 1, icon: new B.C.fi({ image: g.r.Fb + "/theme/v1.3/dragCross.png", size: new g.xd(14, 11), innerOverlay: !0 }), offset: new g.H(-4, -5), position: this.get("position"), innerOverlay: !0 });
                a.Ca = !0;
                this.kr = a
            }
            this.kr.D = !0;
            this.kr.setMap(this.map.B);
            this.kr.D = !1
        },
        hY: function() {
            this.set("animation", "AMAP_ANIMATION_DROP", !0);
            this.WN(!0, "in");
            this.kr.D = !0;
            this.kr.D = !1
        },
        animationChanged: function() {
            this.Gn && (this.Gn.stop(), this.set("AnimationOffset", this.HO), this.Gn = null);
            var a = this.get("animation");
            a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.WN(!0, "in", 100) : this.WN())
        },
        Sg: function() { this.kr && this.kr.set("position", this.get("position")) },
        raiseOnDragChanged: function() {
            this.get("raiseOnDrag") ? (this.h("dragstart", this.s0, this), this.h("dragging", this.Sg, this), this.h("dragend", this.hY, this)) : (this.G("dragstart",
                this.s0, this), this.G("dragging", this.Sg, this), this.G("dragend", this.hY, this))
        },
        Yo: function(a) {
            var b = this.get("position");
            a = this.map.Bb(b).add(a.Md(Math.pow(2, 20 - this.map.get("zoom"))));
            b instanceof g.U ? this.set("position", this.map.Nd(a)) : this.set("position", a)
        },
        sz: function(a, b) {
            var c = this.get("position"),
                d = this.get("altitude"),
                c = this.map.Ks(c, d),
                d = this.map.Yp(new g.H(c.x + a, c.y + b), null, d);
            this.set("position", d)
        },
        Nma: function() {
            var a = this.get("content"),
                b = this.get("shadow"),
                c = this.get("offset"),
                d = this.get("label"),
                e, f = this;
            e = a ? this.X1(a, c) : this.ZP(this.get("icon"), function() { f.L && f.L.fa ? (g.l.Bi && g.a.iepngFix(e), f.offsetChanged(), f.wL()) : f.map && f.map.set("display") });
            this.set("contentDom", e, !0);
            b && (a = this.d2(b, c), this.set("shadowDom", a, !0));
            d && d.content && this.set("labelDom", this.$P(d.content), !0)
        },
        $P: function(a) {
            var b = document.createElement("div");
            b.className = "amap-marker-label";
            b.innerHTML = a;
            return b
        },
        Eu: function() {
            var a = this.get("position");
            if (this.map && a && !this.L) {
                var b = this.map,
                    a = this.map.Bb(a),
                    a = this.L =
                    new g.di({ name: "marker-" + g.a.yb(this), map: b, W: new g.Aa.Og([a.x, a.y]) });
                a.Rp = this.Kb.CLASS_NAME;
                a.Hr = this;
                this.X("coords", a, !0);
                a.bf("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
            }
        },
        getParams: function() {
            return {
                zIndex: this.get("zIndex"),
                Pp: this.get("angle"),
                Wg: this.get("contentDom"),
                LJ: this.get("labelDom"),
                Y8: this.get("shadowDom"),
                opacity: this.get("opacity"),
                altitude: this.get("altitude"),
                title: this.get("title"),
                label: this.get("label"),
                oF: this.get("AnimationOffset"),
                verticalAlign: this.get("verticalAlign"),
                textAlign: this.get("textAlign"),
                offset: this.get("offset"),
                L5: this.get("isTop"),
                shape: this.get("shape"),
                visible: this.get("visible") && !this.Kb.get("outOfZooms"),
                anchor: this.get("anchor")
            }
        },
        offsetChanged: function() {
            function a(a) {
                var c = b.get("offset"),
                    f = b.get("AnimationOffset"),
                    h = b.get("verticalAlign"),
                    k = b.get("textAlign"),
                    l = Math.round(a.x) + c.x + f.x;
                a = Math.round(a.y) + c.y + f.y;
                var f = b.get("anchor"),
                    m = b.L.Yj || g.g.Jo(b.L.Wg);
                b.L.Yj = m;
                c = m[0];
                m = m[1];
                f && (f = f.split("-"), 2 === f.length ? (k = f[1], h = f[0]) : 1 === f.length &&
                    "center" === f[0] && (k = "center", h = "middle"));
                switch (k) {
                    case "center":
                        l -= c / 2;
                        break;
                    case "right":
                        l -= c
                }
                switch (h) {
                    case "middle":
                        a -= m / 2;
                        break;
                    case "bottom":
                        a -= m
                }
                b.L.fa.style.left = l + "px";
                b.L.fa.style.top = a + "px"
            }
            if (this.map)
                if (this.L && this.L.fa) {
                    var b = this,
                        c = this.map.B.view.type;
                    "2D" == c ? (c = this.map.Bb(this.get("position")), c = c.$a(this.L.Na).kd(Math.pow(2, 20 - this.map.get("zoom"))), this.L.fa && (this.L.fa.KB && this.L.fa.parentNode !== this.L.fa.KB ? this.map.set("display") : a(c))) : "3D" == c && (c = this.get("position"), c =
                        this.map.Ks(c, this.get("altitude")), this.L.fa && (this.L.fa.KB && this.L.fa.parentNode !== this.L.fa.KB ? this.map.set("display") : a(c)))
                } else this.map.set("display")
        },
        altitudeChanged: function() { this.offsetChanged() },
        positionChanged: function() {
            if (this.L) {
                var a = this.map.Bb(this.get("position"));
                this.set("coords", [a.x, a.y]);
                this.map && (this.L.Xaa = !0, this.offsetChanged())
            }
        },
        anchorChanged: function() { this.TF() },
        textAlignChanged: function() { this.TF() },
        verticalAlignChanged: function() { this.TF() },
        TF: function() {
            this.L &&
                (this.L.Yj = null, this.L.pe = !0, this.map && (this.map.td.om = !0, this.map.set("display")))
        },
        contentChanged: function() {
            if (this.L) {
                this.L.Yj = null;
                this.map.td.om = !0; - 1 === g.a.indexOf(this.map.td.eh, this.L) && this.map.td.eh.push(this.L);
                var a = this.get("contentDom");
                this.L.fa && this.L.fa === a.parentNode && this.L.fa.removeChild(a);
                var a = this.get("content"),
                    b = this.get("offset"),
                    a = this.X1(a, b);
                this.set("contentDom", a);
                this.L.fa ? (g.l.Bi && g.a.iepngFix(a), this.L.fa.appendChild(a), this.L.Wg = a, this.offsetChanged(), this.wL()) :
                    this.map && this.map.set("display");
                this.titleChanged()
            }
        },
        iconChanged: function() {
            if (this.L && !this.get("content")) {
                this.L.Yj = null;
                this.map.td.om = !0; - 1 === g.a.indexOf(this.map.td.eh, this.L) && this.map.td.eh.push(this.L);
                this.L.fa && this.get("contentDom") && this.L.fa.removeChild(this.get("contentDom"));
                var a = this.get("icon");
                this.get("offset");
                var b = this,
                    c = this.ZP(a, function() { b.L && b.L.fa ? (g.l.Bi && g.a.iepngFix(c), b.offsetChanged(), b.wL()) : b.map && b.map.set("display") });
                this.set("contentDom", c);
                this.L.fa && (this.L.fa.appendChild(c),
                    this.L.Wg = c);
                this.titleChanged()
            }
        },
        shadowChanged: function() {
            if (this.L) {
                var a = this.get("shadowDom");
                this.L.fa && a && a.parentNode === this.L.fa && this.L.fa.removeChild(a);
                if (a = this.get("shadow")) {
                    var b = this.get("offset"),
                        a = this.d2(a, b);
                    this.set("shadowDom", a);
                    this.L.fa && this.L.fa.appendChild(a)
                }
            }
        },
        titleChanged: function() { this.L && this.L.Wg && "string" === typeof this.get("title") && this.L.Wg && this.get("title") && (this.L.Wg.title = this.get("title")) },
        wL: function(a, b) {
            a = a || this.get("label");
            b = b || this.get("labelDom");
            if (a && b) {
                var c = a.direction,
                    d = this.L.Yj || g.g.Jo(this.L.Wg),
                    e = d[0],
                    d = d[1],
                    f = g.g.Jo(b),
                    h = f[0],
                    k = f[1];
                this.L.Cv = f;
                var l = f = 0;
                switch (c) {
                    case "top":
                        f = -k;
                        l = (e - h) / 2;
                        break;
                    case "right":
                        f = (d - k) / 2;
                        l = e;
                        break;
                    case "bottom":
                        f = d;
                        l = (e - h) / 2;
                        break;
                    case "left":
                        f = (d - k) / 2;
                        l = -h;
                        break;
                    case "center":
                        f = (d - k) / 2, l = (e - h) / 2
                }
                a.offset && (f += a.offset.y, l += a.offset.x);
                b.style.top = f + "px";
                b.style.left = l + "px"
            }
        },
        labelChanged: function(a) {
            a = a || this.get("label");
            if (this.L && this.L.fa) {
                this.L.Cv = null;
                var b = this.L.fa,
                    c = this.get("labelDom");
                c && c.parentNode === b && b.removeChild(c);
                a && a.content && (c = "", a.content && (c = this.$P(a.content), b.appendChild(c), this.wL(a, c)), this.set("labelDom", c))
            } else a && a.content ? this.set("labelDom", this.$P(a.content), !0) : this.set("labelDom", null)
        },
        isTopChanged: function() {
            var a = this.map.td.nL,
                b = this.get("isTop"),
                c = this.get("zIndex");
            a ? a === this ? this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.cr + 10 : c, this.map.td.nL = b ? this : null) : (a.L && a.L.fa && (a.L.fa.style.zIndex = b ? a.get("zIndex") : this.map.td.cr + 10), this.L &&
                this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.cr + 10 : c), this.map.td.nL = b ? this : a) : (this.map.td.nL = this, this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.cr + 10 : c))
        },
        visibleChanged: function() { this.L && this.L.fa && (this.get("visible") && !this.Kb.get("outOfZooms") ? this.L.fa.style.display = "block" : this.L.fa.style.display = "none") },
        $ua: function() { this.visibleChanged() },
        angleChanged: function() {
            if (!g.l.Ie && this.L && this.L.fa) {
                var a = this.L,
                    b = a.get("params"),
                    c = b.textAlign,
                    d = b.verticalAlign,
                    e = b.offset,
                    b = e.x,
                    e = e.y;
                this.TF();
                if ("AMap.Text" == a.Rp) {
                    var e = b = 0,
                        f = a.Yj || g.g.Jo(a.Wg),
                        h = f[0],
                        k = f[1];
                    a.Yj = f;
                    switch (c) {
                        case "center":
                            b = h / 2;
                            break;
                        case "right":
                            b = h
                    }
                    switch (d) {
                        case "middle":
                            e = k / 2;
                            break;
                        case "bottom":
                            e = k
                    }
                } else b = -b, e = -e;
                g.g.rotate(this.L.fa, this.get("angle") || 0, { x: b, y: e })
            }
        },
        zIndexChanged: function() {
            var a = this.get("zIndex");
            if (a > this.map.td.cr) {
                this.map.td.cr = a;
                var b = this.map.td.nL;
                b && b.L && b.L.fa && (b.L.fa.style.zIndex = a + 10)
            }
            this.L && this.L.fa && (this.L.fa.style.zIndex = this.get("isTop") ? this.map.td.cr + 10 : this.get("zIndex"))
        },
        opacityChanged: function() {
            var a = this.get("contentDom"),
                b = this.get("shadowDom");
            a && g.g.Vq(a, this.get("opacity"));
            b && g.g.Vq(b, this.get("opacity"))
        },
        X1: function(a) {
            var b;
            b = document.createElement("div");
            b.className = "amap-marker-content";
            "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
            g.g.Vq(b, this.get("opacity"));
            return b
        },
        ZP: function(a, b) {
            var c, d = 0,
                e = 0,
                f, h, k, l, m, n;
            a ? ("string" === typeof a ? (c = a, n = !0) : (c = a.get("image"), e = a.get("size"),
                f = a.get("imageSize"), d = e.width, e = e.height, f && (l = f.width, m = f.height)), f = "string" !== typeof a ? a.get("imageOffset") : { x: 0, y: 0 }) : (c = g.r.Ii + "/mark_bs.png", f = { x: 0, y: 0 }, d = 19, e = 33, l = 19, m = 33);
            h = document.createElement("div");
            h.className = "amap-icon";
            h.style.position = "absolute";
            h.style.overflow = n ? "inherit" : "hidden";
            d && (h.style.width = d + "px");
            e && (h.style.height = e + "px");
            k = document.createElement("img");
            l && m && (k.style.width = l + "px", k.style.height = m + "px");
            k.style.top = f.y + "px";
            k.style.left = f.x + "px";
            h.appendChild(k);
            g.g.Vq(g.l.Ie &&
                n ? k : h, this.get("opacity"));
            d && e || (h.CM = !1);
            g.F.h(k, "load", function q() {
                this.L && (this.L.Yj = null);
                this.map && this.map.td && (this.map.td.om = !0);
                g.F.G(k, "load", q, this);
                if (this.L && this.L.fa) {
                    var a = this.get("labelDom");
                    a && this.L.fa.appendChild(a)
                }
                h.CM = !0;
                b && b()
            }, this);
            k.src = c;
            return h
        },
        d2: function(a) {
            a = this.ZP(a);
            a.style.zIndex = -1;
            return a
        },
        moveChanged: function() {
            var a = this.get("move");
            if (!1 === a) return this.Wxa();
            void 0 !== a && ("pause" === a.action ? this.Bva() : "[object Array]" === Object.prototype.toString.call(a.ig) ?
                a.ig && ("resume" === a.action && this.PG ? this.moveTo(a.ig[a.ig.Ip || 0], a.speed, a.wb) : (this.PG && this.q("movestop"), a.ig.Ip = 0, this.set("position", a.ig[0]), this.dua(a.ig, a.speed, a.wb, a.ona))) : this.moveTo(a.ig, a.speed, a.wb, !0))
        },
        moveTo: function(a, b, c, d) {
            if (!(0 >= b)) {
                var e = this.get("position");
                a.$a(e);
                var f = Math.round(a.He(e) / 1E3 / b * 36E5);
                if (0 === f) return this.q("moveend");
                this.Bh && (this.Bh.stop(), this.Bh = null);
                this.Bh = new g.Mj(e, a);
                c = c || function(a) { return a };
                this.Bh.transition = function(a, b, d) {
                    if (d >= f) return b;
                    var e = (b.R - a.R) * c(d / f) + a.R;
                    a = (b.Q - a.Q) * c(d / f) + a.Q;
                    return new g.U(e, a)
                };
                this.Bh.Hq = function(b) {
                    this.set("position", b);
                    d && this.Kb.q("moving", { target: this.Kb, passedPath: [this.Bh.start, this.get("position")] });
                    this.q("moving");
                    b.gb(a) && (this.Bh && (this.Bh.stop(), this.Bh = null), this.Kb.q("moveend", { target: this.Kb }), this.q("moveend"))
                };
                this.get("autoRotation") && !g.l.Ie && (b = "2D" == (this.map.B.view.type || "2D") ? this.Qea(e, a) : this.Rea(e, a), this.set("angle", b));
                this.Bh.Nn(this)
            }
        },
        Wxa: function() {
            this.Bh && (this.Bh.stop(),
                this.Bh = null, this.q("movestop"))
        },
        Bva: function() { this.Bh && (this.Bh.stop(), this.Bh = null, this.q("movepause")) },
        dua: function(a, b, c, d) {
            function e() {
                var b = a.slice(0, a.Ip || 0);
                b.push(this.get("position"));
                this.Kb.q("moving", { target: this.Kb, passedPath: b })
            }

            function f() { a.Ip < a.length - 1 ? (a.Ip += 1, this.moveTo(a[a.Ip], b, c)) : (this.pa("movealong"), d ? (a.Ip = 0, this.set("position", a[0]), this.moveTo(a[a.Ip], b, c)) : this.q("movestop")) }
            var h = Math.min(a.Ip || 0, a.length - 1);
            this.PG || (this.PG = !0, this.h("moving", e, this), this.h("moveend",
                f, this), this.h("movestop", function l() {
                this.PG = !1;
                this.G("moveend", f, this);
                this.G("moving", e, this);
                this.G("movestop", l, this)
            }, this));
            this.moveTo(a[h], b, c)
        },
        Rea: function(a, b) {
            var c = this.map,
                d = c.Ks(a),
                c = c.Ks(b),
                e = 0;
            c.He(d);
            var f = c.y - d.y,
                h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.vb(180 * e / Math.PI, 1)
        },
        Qea: function(a, b) {
            var c = this.map,
                d = c.Bb(a),
                c = c.Bb(b),
                e = 0;
            c.He(d);
            var f = c.y -
                d.y,
                h = c.x - d.x;
            0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
            return g.a.vb(180 * e / Math.PI, 1)
        }
    });
    g.C.Tn = g.C.Hh.extend({
        A: function(a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.X("items", a, !0);
            this.X("content", a, !0);
            this.X("resolution", b);
            this.X("centerCoords", b);
            this.Qp = a
        },
        Ss: function(a) {
            this.$g();
            this.tt();
            this.Gm();
            this.zl("resolution");
            this.zl("centerCoords");
            this.zl("render");
            this.X("resolution", a);
            this.X("centerCoords", a);
            this.X("render", a);
            this.map.h("movestart", this.bn, this);
            this.map.h("mapmove", this.bn, this);
            this.map.h("zoomstart", this.bn, this);
            this.map.h("click", this.bn, this);
            this.map.h("closeOverlays", this.bn, this);
            this.map.h("rotate", this.bn, this)
        },
        bn: function() { this.Qp.map && (this.Qp.D = !0, this.Qp.close(), this.Qp.D = !1) },
        mapChanged: function() {},
        positionChanged: function() { this.Gm() },
        renderChanged: function() { this.Gm() },
        $g: function() {
            this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null);
            var a = g.g.create("div", null, "amap-menu");
            g.F.h(a, "mousedown", function(a) { g.F.stopPropagation(a) }, this);
            this.K = a;
            this.map.Xa.C.appendChild(this.K)
        },
        tt: function() {
            var a =
                this,
                b = this.K;
            b.innerHTML = "";
            var c = this.get("content");
            if ("object" === typeof c) b.appendChild(c);
            else if ("string" === typeof c) b.innerHTML = c;
            else if ((c = this.get("items")) && c.length) {
                var d = g.g.create("ul", b, "amap-menu-outer");
                c.sort(function(a, b) { return isNaN(a.nK) || isNaN(b.nK) ? 0 : a.nK - b.nK });
                for (b = 0; b < c.length; b += 1)(function(b) {
                    var c = b.Qn,
                        h = b.wb,
                        k = g.g.create("li", d);
                    k.innerHTML = c;
                    g.F.h(k, "click", function() {
                        h.call(k);
                        a.Qp.D = !0;
                        a.Qp.close();
                        a.Qp.D = !1
                    }, k)
                })(c[b])
            } else this.K.innerHTML = ""
        },
        Gm: function() {
            var a =
                this.map,
                b = this.K;
            a && b && (this.map.get("zoom"), b = this.get("position"), b = a.Ks(b), a = b.y, b = b.x, this.K.style.right = "", this.K.style.bottom = "", this.K.style.left = b + "px", this.K.style.top = a + "px")
        },
        jg: function() { this.K && (this.map.G("click", this.JBa, this), this.map.Xa.C.removeChild(this.K), this.Qp.ti = !1, this.K = this.Qp.Ce.map = null, this.map.G("movestart", this.bn, this), this.map.G("zoomstart", this.bn, this), this.map.G("click", this.bn, this), this.map.G("closeOverlays", this.bn, this), this.map.G("rotate", this.bn, this)) },
        visibleChanged: function() { this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display = "none") },
        itemsChanged: function() { this.K && this.tt() }
    });
    g.C.Ze = g.C.Hh.extend({
        A: function(a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.bf("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor".split(" "), a);
            this.X("retainWhenClose", a, !0);
            a.X("toBeClose", this);
            this.sf = a
        },
        Ss: function(a) {
            this.Qna || (this.$g(), this.tt());
            this.zl("resolution");
            this.zl("centerCoords");
            this.zl("render");
            this.X("resolution", a);
            this.X("centerCoords", a);
            this.X("render", a);
            this.map = a;
            a.Xa.C.appendChild(this.Rc);
            this.AV();
            this.Gm();
            this.lX();
            this.Qna = !0;
            this.Fna();
            this.Kb.q("onAdd", { type: "onAdd", target: this.Kb })
        },
        $g: function() {
            var a = g.g.create("div");
            a.className = "amap-info";
            var b = g.g.create("div", a, "amap-info-shadowContainer"),
                c = g.g.create("div", a),
                d = this.get("anchor"),
                e = "amap-info-contentContainer";
            d && (e = d + " amap-info-contentContainer");
            d = g.g.create("div", c, e);
            a.style.position = "absolute";
            c.style.position = "absolute";
            c.style.bottom = "0px";
            c.style.left = "0px";
            b.style.position = "absolute";
            this.Rc = a;
            this.Rh = c;
            this.KU = b;
            this.sh =
                d;
            this.set("contentDom", this.sh, !0)
        },
        tt: function() {
            var a = this.get("contentU");
            if (a) {
                var b = this.get("isCustom"),
                    c = this.sh,
                    d = this.KU;
                c.innerHTML = "";
                var e = null;
                if (b) {
                    if ("string" === typeof a) c.innerHTML = a;
                    else if (a instanceof Array)
                        for (e = 0; e < a.length; e += 1) c.appendChild(a[e]);
                    else c.appendChild(a);
                    e = c;
                    d.parentNode && d.parentNode.removeChild(d)
                } else {
                    e = "amap-info-content amap-info-outer";
                    g.l.Ie && (e += " amap-info-content-ie8");
                    e = this.csa = d = g.g.create("div", c, e);
                    "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                    this.Sna = d;
                    a = g.g.create("a", this.csa, "amap-info-close");
                    a.innerHTML = "\u00d7";
                    this.nQ = a;
                    a.href = "javascript: void(0)";
                    g.l.Wf && (g.F.h(a, "touchstart", function(a) { g.F.stop(a) }, this), g.F.h(a, "touchend", function(a) {
                        g.F.stop(a);
                        this.sf.D = !0;
                        this.sf.close();
                        this.sf.D = !1
                    }, this), g.F.h(a, "click", function(a) {
                        g.F.stop(a);
                        this.sf.D = !0;
                        this.sf.close();
                        this.sf.D = !1
                    }, this));
                    g.l.ba || (g.F.h(a, "mousedown", function(a) { g.F.stop(a) }, this), g.F.h(a, "click", function(a) {
                            g.F.stop(a);
                            this.sf.D = !0;
                            this.sf.close();
                            this.sf.D = !1
                        },
                        this));
                    if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px");
                    this.get("anchor");
                    g.g.create("div", c, g.l.Ie ? "amap-info-sharp-old" : "amap-info-sharp");
                    this.KU.style.display = "block"
                }
                g.F.Uxa(e)
            }
        },
        AV: function() {
            var a = this.get("isCustom"),
                b = this.get("showShadow");
            if (!a && b) {
                var a = this.KU,
                    b = g.g.pJ(this.sh),
                    c = b.height - 23,
                    d = b.width;
                if (g.l.Bi || g.l.sv) c = this.sh.childNodes[0].offsetHeight, d = this.sh.childNodes[0].offsetWidth + 26;
                b = "background-image:url(" + g.r.Fb +
                    (g.l.Bi ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
                a.innerHTML = "";
                var e = [],
                    f;
                f = e[1] = {};
                f.height = 0.5 * c + 4;
                f.width = d;
                f.offsetX = 400;
                f.offsetY = 16;
                f.top = -f.height - 10 - 15;
                f.left = 23;
                f = e[2] = {};
                f.height = e[1].height;
                f.width = e[1].height;
                f.offsetX = 1075 - f.width;
                f.offsetY = e[1].offsetY;
                f.top = e[1].top;
                f.left = 23 + e[1].width;
                f = e[3] = {};
                f.height = 10;
                f.width = 22;
                f.offsetX = 30;
                f.offsetY = 445;
                f.top = -25;
                f.left = 23 + (g.l.sv || g.l.Bi ? 5 : 0);
                f = e[4] = {};
                f.height = 10;
                f.width = d / 2 - 15 - e[3].left - e[3].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[3].left + e[3].width;
                f = e[5] = {};
                f.height = 10;
                f.width = 70;
                f.offsetX = 80;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[4].left + e[4].width;
                f = e[6] = {};
                f.height = 10;
                f.width = d - e[5].left - e[5].width;
                f.offsetX = 132;
                f.offsetY = 445;
                f.top = -25;
                f.left = e[5].left + e[5].width;
                f = e[7] = {};
                f.height = 10;
                f.width = 30;
                f.offsetX = 621;
                f.offsetY = 445;
                f.top = -25;
                f.left = d;
                f = e[8] = {};
                f.height = 15;
                f.width = 70;
                f.offsetX = 47;
                f.offsetY = 470;
                f.top = -15;
                f.left = d / 2 - 15;
                for (c = 1; 8 >= c; c += 1) d = g.g.create("div", a), f = [], f.push("position:absolute;"), f.push(b), f.push("top:" +
                    e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" + e[c].width + "px;"), f.push("height:" + e[c].height + "px;"), f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style.cssText = f.join("")
            }
        },
        XHa: function() {},
        Gm: function() {
            var a = this.map,
                b = this.Rc,
                c = this.get("position"),
                d = this.get("anchor");
            if (a && b && c) {
                a = a.Ks(c, this.get("altitude"));
                d && (this.sh.className = d + " amap-info-contentContainer");
                var e = g.g.pJ(this.sh);
                if (g.l.Bi || g.l.sv) e.width = this.sh.childNodes[0].offsetWidth + 14;
                b = e.height;
                c = this.get("offset");
                this.get("isCustom");
                e = e.width;
                this.Rc.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + "px";
                this.Rc.style.top = Math.round(a.y + (c.y || 0)) + "px";
                if (d) {
                    var f;
                    "center" == d ? (d = "center", f = "middle") : (f = d.split("-"), d = f[1], f = f[0]);
                    switch (f) {
                        case "middle":
                            this.Rc.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + "px";
                            break;
                        case "top":
                            this.Rc.style.top = Math.round(a.y + b + (c.y || 0)) + "px"
                    }
                    switch (d) {
                        case "left":
                            this.Rc.style.left = Math.round(a.x + (c.x || 0)) + "px";
                            break;
                        case "right":
                            this.Rc.style.left = Math.round(a.x -
                                e + (c.x || 0)) + "px"
                    }
                }
                d = this.Sna;
                if (this.nQ && d.childNodes[0]) {
                    for (b = a = 0; b < d.childNodes.length; b += 1) a += d.childNodes[0].clientHeight || 0;
                    a > (this.get("size").height || d.clientHeight) ? this.nQ.style.right = "20px" : this.nQ.style.right = "5px"
                }
            }
        },
        tda: function() {
            var a = new g.H(2 - this.sh.offsetWidth / 2, 2 - this.sh.offsetHeight),
                b = this.get("offset") || new g.H(0, 0),
                c = this.get("anchor");
            if (c) {
                var a = this.sh.offsetWidth,
                    d = this.sh.offsetHeight,
                    e, f, h = 2 - a / 2,
                    k = 2 - d;
                c && (c = c.split("-"), 2 === c.length ? (e = c[1], f = c[0]) : 1 === c.length && "center" ===
                    c[0] && (e = "center", f = "middle"));
                switch (e) {
                    case "left":
                        h = 2;
                        break;
                    case "right":
                        h = -a
                }
                switch (f) {
                    case "middle":
                        k = -d / 2;
                        break;
                    case "top":
                        k = -2
                }
                a = new g.H(h, k)
            }
            this.get("isCustom") || (a = a.add(new g.H(0, -23)));
            return a.add(b)
        },
        altitudeChanged: function() { this.Gm() },
        lX: function() {
            if (this.get("position") && this.get("autoMove") && this.sh) {
                for (var a = this.map, b = new g.xd(this.sh.offsetWidth, this.sh.offsetHeight), c = a.Ks(this.get("position"), this.get("altitude")).add(this.tda()), d = c.add(b.PE()), e = a.get("size"), f = a.nqa(),
                        h = 0, k = 0, l = 0; l < f.length; l += 1) {
                    var m = f[l],
                        n = 0,
                        p = 0;
                    0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.zj() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.zj() - m[1] - (d.x + h), p = e.wj() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.wj() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
                }
                c = c.add(new g.H(h, k));
                d = d.add(new g.H(h,
                    k));
                l = f = 0;
                0 > c.x || b.zj() > e.zj() ? f = 20 - c.x : e.zj() < d.x && (f = e.zj() - d.x - 25);
                0 > c.y || b.wj() > e.wj() ? l = 5 - c.y : e.wj() < d.y && (l = e.wj() - d.y - 15);
                f += h;
                l += k;
                if (f || l) a.B.D = !0, a.B.panBy(f, l), a.B.D = !1
            }
        },
        Fna: function() { this.get("closeWhenClickMap") && (this.map.h("clickstart", this.u_, this, !1), this.map.h("clickend", this.t_, this, !1)) },
        u_: function() { this.sf.ti && (this.sf.D = !0, this.sf.getIsOpen() && (this.sf.mL = !0), this.sf.D = !1) },
        t_: function() { this.sf.ti && (this.sf.mL && (this.sf.D = !0, this.sf.close(), this.sf.D = !1), this.sf.mL = !1) },
        jg: function() { this.Rc && this.map && (this.sf.mL = !1, this.get("closeWhenClickMap") && (this.map.G("clickstart", this.u_, this), this.map.G("clickend", this.t_, this)), this.get("retainWhenClose") ? this.map.Nl.appendChild(this.Rc) : (this.Rc.parentNode === this.map.Xa.C && this.map.Xa.C.removeChild(this.Rc), this.sf.C = null), this.map = null, this.sf.ti = !1, this.Kb.q("close", { type: "close", target: this.Kb })) },
        TBa: function() {
            if (!this.get("isCustom")) return this.sh.offsetWidth;
            for (var a = this.ji, b = a.firstChild, c = a.lastChild; b && c &&
                b.style && c.style && b === c;) a = b, b = a.firstChild, c = a.lastChild;
            a = g.g.Vc(a, "width");
            return a = parseInt(a.replace("px", ""), 10)
        },
        renderChanged: function() { this.Gm() },
        positionChanged: function() { this.map && this.Rc && (this.Gm(), this.lX()) },
        anchorChanged: function() { this.positionChanged() },
        offsetChanged: function() { this.positionChanged() },
        contentChanged: function() {
            this.tt();
            this.AV();
            this.Gm()
        },
        sizeChanged: function() {
            this.tt();
            this.AV();
            this.Gm()
        }
    });
    g.Aa = {};
    g.Aa.Qe = g.ca.extend({
        ka: [g.va, g.$e],
        A: function() {},
        dv: function() {
            var a = this.Jd();
            a.rh || (a.rh = g.I.zi(a));
            return a.rh
        },
        cb: function() { return new this.A(this.za) },
        xR: function() { return this.za },
        setCoords: function(a) { this.M8(a) },
        M8: function(a) {
            this.Lv = this.Jd();
            this.Ag = null;
            if (g.Aa.vp && this instanceof g.Aa.vp) {
                var b = a.length;
                this.fe = this.fe.slice(0, b);
                for (var c = 0; c < b; c += 1)
                    if (this.fe[c]) this.fe[c].M8(a[c]);
                    else {
                        var d = new g.Aa.Ec(a[c]);
                        this.fe[c] = d
                    }
            } else if (g.Aa.Ec && this instanceof g.Aa.Ec) {
                b = a.length;
                this.Tf =
                    Array(b);
                for (var e, c = 0; c < b; c += 1)
                    if (d = a[c], e = new g.Aa.XL(d), this.Tf[c] = e, 0 === c) {
                        if (0 === d.length) break;
                        e.sq(d) || d.reverse()
                    } else 0 !== d.length && e.sq(d) && d.reverse()
            } else this.za = a
        }
    });
    g.Aa.Re = g.extend({}, { Uw: "point", TL: "linestring", oW: "linearring", FF: "polygon", dM: "multipoint", cM: "multilinestring", BF: "multipolygon", xAa: "geometrycollection" });
    g.di = g.ca.extend({
        ka: [g.va, g.$e],
        A: function(a) {
            a = a || {};
            a.wB && (this.wB = a.wB);
            a.YN && (this.YN = a.YN);
            a.EZ && (this.EZ = a.EZ);
            this.map = a.map;
            this.gm = a.zN || g.a.yb(this);
            this.name = a.name || "";
            this.pe = !1;
            this.set("visible", !0, !0);
            this.CU(a.W);
            this.wl = a.iL;
            this.style = a.style
        },
        Joa: function() {
            this.name = this.map = null;
            this.style = this.wl = this.Hr = this.Z5 = this.W = this.W.Qa = null;
            this.Al();
            this.wi()
        },
        hra: function() { return this.wl },
        zxa: function(a) {
            this.wl = a;
            this.zIndex = this.wl[0].Kk || this.zIndex
        },
        fc: function() { return this.W },
        CU: function(a) { a && (this.W = a, this.X("coords", a, !0), this.wB || this.YN) && (a.X("radius", this), a.X("center", this), a.X("resolution", this), a.X("strokeWeight", this)) },
        setStyle: function(a) {
            this.zxa(a);
            this.qs()
        },
        coordsChanged: function() { this.qs() },
        radiusChanged: function() {
            this.W.Lv = this.W.Jd();
            this.W.Ag = null;
            this.qs()
        },
        qs: function(a) {
            this.set("feature", { target: this, zoa: a, Lv: this.W.Lv || this.W.Jd(), jua: this.W.Jd() });
            this.W.Lv = this.W.Jd()
        },
        visibleChanged: function() { this.qs() },
        BEa: function(a) {
            for (var b = 0; b < this.wl.length; b +=
                1) { var c = this.wl[b]; if (a.gb(c.ty(this))) return c }
        },
        vqa: function() {
            var a = this.fc(),
                b = [];
            a.Ai() === g.Aa.Re.FF || a.Ai() === g.Aa.Re.BF ? b.push(new g.style.Ae.Ec({ fillColor: "#78cdd1", he: 0.2, strokeColor: "#122e29", ob: 0.5, qc: 1 })) : a.Ai() === g.Aa.Re.TL || a.Ai() === g.Aa.Re.oW || a.Ai() === g.Aa.Re.cM ? b.push(new g.style.Ae.up({ color: "#888888", width: 1, zIndex: 10 })) : a.Ai() !== g.Aa.Re.Uw && a.Ai() !== g.Aa.Re.dM || b.push(new g.style.Ae.fi({ url: g.r.Fb + "/theme/v1.3/markers/0.png", width: 36, height: 36, rotation: 0, oIa: -12, qIa: -36, zIndex: 100 }));
            return b
        }
    });
    g.di.sAa = "geometry";
    g.Aa.Og = g.Aa.Qe.extend({
        A: function(a, b) {
            this.za = a;
            this.mk = b;
            this.Ag = null
        },
        Jd: function() {
            if (!this.Ag) {
                var a = this.za[0],
                    b = this.za[1];
                if (this.mk) this.Ag = [a, b, a, b];
                else {
                    var c = this.get("radius"),
                        d = this.get("resolution") * this.get("strokeWeight") || 0,
                        c = c ? c / Math.cos(Math.PI * this.get("center").Q / 180) : 0;
                    this.Ag = [a - c - d, b - c - d, a + c + d, b + c + d]
                }
            }
            return this.Ag
        },
        Ai: function() { return g.Aa.Re.Uw }
    });
    g.M = { canvas: {}, $d: {}, Ye: {}, Me: {} };
    g.M.Yb = g.ca.extend({
        ka: [g.va, g.$e],
        A: function(a, b) {
            this.f = a;
            this.mk = a.S.mk;
            this.J = b;
            this.e = b.e;
            this.X("display", b)
        },
        bk: function() {
            this.Gq && this.Gq();
            this.Al();
            this.e = this.J = this.f = null
        },
        fv: function(a, b, c, d) {
            var e = this.zoom;
            c = [];
            var f = this.f;
            if (Math.floor(e) !== e) b(c, f);
            else {
                a = [a.x, a.y];
                if (f.om) {
                    for (var e = f.eh, h = !0, k = [], l = 0; l < e.length; l += 1) {
                        var m = e[l].Wg;
                        if (m)
                            if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.Nl && "none" !== m.parentNode.style.display) {
                                var n = g.g.Jo(m),
                                    m =
                                    n[0],
                                    n = n[1];
                                if (m && n) {
                                    var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n);
                                    f.Cf = Math.max(f.Cf, p);
                                    f.lg = Math.max(f.lg, p);
                                    e[l].width = m;
                                    e[l].height = n
                                } else h = !1, k.push(e[l])
                            } else h = !1, k.push(e[l])
                    }
                    h ? (f.om = !1, f.eh = []) : f.eh = k
                }
                e = Math.max(f.Cf, f.rz || 0) * this.T;
                h = Math.max(f.lg, f.rz || 0) * this.T;
                k = 0;
                f.qz && (k = f.qz / Math.cos(Math.PI * this.e.get("center").Q / 180));
                h = Math.max(h, k || 0);
                e = Math.max(e, k || 0);
                if (e = f.yn([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
                    for (var q in e)
                        if (e.hasOwnProperty(q) &&
                            (h = e[q], h.get("visible") && !h.get("noSelect")))
                            if (k = h.fc(), k instanceof g.Aa.Og)
                                if (this.mk) {
                                    l = this.f.Em;
                                    l instanceof Array && (l = "number" === typeof h.hb.style && l[h.hb.style] ? l[h.hb.style] : l[0]);
                                    var m = l.size.width * this.T,
                                        n = l.size.height * this.T,
                                        p = l.anchor.x * this.T,
                                        r = l.anchor.y * this.T,
                                        k = k.za,
                                        s = l.rotation_,
                                        u = [a[0], a[1]];
                                    if (s) {
                                        var v = (a[0] - k[0]) / this.T,
                                            w = (a[1] - k[1]) / this.T,
                                            t = s,
                                            s = Math.cos(-t),
                                            x = Math.sin(-t),
                                            t = v * s - w * x,
                                            v = v * x + w * s;
                                        u[0] = k[0] + t * this.T;
                                        u[1] = k[1] + v * this.T
                                    }
                                    m = g.I.WP([
                                        [u[0] - m + p, u[1] - n + r],
                                        [u[0] + p, u[1] +
                                            r
                                        ]
                                    ]);
                                    g.I.Sd(m, k) && c.push(h)
                                } else if ("undefined" !== typeof k.get("radius")) l = k.za, l = new g.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get("radius"), "px" === h.get("unit") ? m.He(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.He(l) * Math.cos(h.get("center").Q * Math.PI / 180) <= k / this.Aq * Math.pow(2, 20 - this.zoom) && c.push(h);
                    else if ("AMap.Text" == h.Rp) l = h.get("params"), l.visible && h.fa && g.g.HD(d, h.fa, "amap-markers") && c.push(h);
                    else {
                        if (l = h.get("params"), l.visible && h.fa)
                            if (l.shape)
                                for (k = k.za, s = l.Pp % 360, u = [a[0], a[1]], s && (v = (a[0] -
                                        k[0]) / this.T, w = (a[1] - k[1]) / this.T, t = Math.PI * s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s, u[0] = k[0] + t * this.T, u[1] = k[1] + v * this.T), m = h.width * this.T, n = h.height * this.T, p = l.offset.x * this.T, r = l.offset.y * this.T, m = g.I.WP([
                                        [u[0] - m - p, u[1] - n - r],
                                        [u[0] - p, u[1] - r]
                                    ]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <= n; n -= 1) { if (g.I.Sd(m, k[n])) { l.shape ? this.GD(h, u, k) && c.push(h) : c.push(h); break } } else g.g.HD(d, h.fa, "amap-markers") && c.push(h)
                    } else k.Sd ? k.Sd(a) && c.push(h) : k.By && 1.8 * k.By(a) <= h.get("strokeWeight") *
                        this.T && c.push(h);
                    this.mk ? c.sort(function(a, b) { return a.gm > b.gm ? -1 : 1 }) : c.sort(function(a, b) { return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.gm > b.gm ? -1 : 1 });
                    b(c, f)
                } else b([], f)
            }
        },
        GD: function(a, b, c) {
            var d = (b[0] - c[0][0]) / this.T;
            b = (b[1] - c[0][1]) / this.T;
            a = a.get("params");
            c = a.offset;
            var d = [d - c.x, b - c.y],
                e;
            a = a.shape;
            if ("circle" === a.w.type) { if (b = a.w.coords[0], c = a.w.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.w.coords[2]) return !0 } else {
                if ("poly" ===
                    a.w.type) return e = a.w.coords, e = this.jI(e), g.wd.Sd(d, e);
                if ("rect" === a.w.type) return e = a.w.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [
                    [a, b],
                    [c, b],
                    [c, e],
                    [a, e]
                ], g.wd.Sd(d, e)
            }
            return !1
        },
        jI: function(a) { for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]); return b },
        b4: function(a, b, c, d, e, f, h) {
            var k = ["position:absolute;"];
            k.push("top:" + Math.round(c) + "px;");
            k.push("left:" + Math.round(b) + "px;");
            k.push("width:" + Math.round(d) + "px;");
            k.push("height:" + Math.round(e) + "px;");
            1 > f && ("opacity" in a.style ? (k.push("opacity"),
                k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");")));
            k.push("z-index:" + h + ";");
            k.join("");
            g.g.N8(a, k.join(""))
        }
    });
    g.M.Rb = g.ca.extend({
        ka: [g.va, g.$e],
        A: function(a) {
            this.e = a;
            this.type = "2D";
            this.Ij = g.a.vb(a.get("zoom"), 1);
            this.Nl = a.Nl;
            this.K = a.Xa.o;
            this.X("display", a);
            this.X("rotateEnable", a);
            this.X("style", a);
            this.X("zoom", a);
            this.X("hightlight", a)
        },
        oT: function(a) { this.De = a || g.a.al("ff" + this.e.De.slice(1)) },
        fv: function(a, b, c, d, e) {
            function f(a, d) {
                a.length && (k[g.a.indexOf(b, d)] = a);
                l -= 1;
                0 >= l && (c(k), l = 0)
            }
            for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) m = b[p], m instanceof g.o.ed && m.get("visible") && (n.push(this.ys(m)),
                l += 1);
            for (h = 0; h < n.length; h += 1) n[h].fv(a, f, d, e)
        }
    });
    g.P2 = {
        mD: function(a, b, c) {
            for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
                var m = b[k];
                if (m < a) d = c[m], f = m;
                else {
                    e = c[m];
                    h = m;
                    break
                }
            }
            null === d ? (d = e, f = h) : null === e && (e = d, h = f);
            return { Hz: f, eK: h, Kq: d, WD: e }
        },
        kra: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {};
            c.Tb(a.nodes, function(a) {!1 !== a.value && null !== a.value && (e[a.zoom] = g.r.vc + "://" + a.value, d.push(a.zoom)) });
            return function(a) {
                a = c.vb(a, 1);
                void 0 === e[a] && (e[a] = b.mD(a, d, e).Kq);
                return e[a]
            }
        },
        Sqa: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {},
                f = a.transitional;
            c.Tb(a.nodes,
                function(a) { null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) });
            return function(a) {
                a = c.vb(a, 1);
                if (void 0 === e[a]) {
                    var k = b.mD(a, d, e);
                    e[a] = f && "none" !== f && k.eK !== k.Hz && k.Kq !== k.WD ? c.z4(k.Kq, k.WD, (a - k.Hz) / (k.eK - k.Hz), f) : k.Kq
                }
                return e[a]
            }
        },
        dqa: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {};
            c.Tb(a.nodes, function(a) { null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) });
            return function(a) {
                a = c.vb(a, 1);
                void 0 === e[a] && (e[a] = b.mD(a, d, e).Kq);
                return e[a]
            }
        },
        h4: function(a) {
            var b = this,
                c = g.a,
                d = [],
                e = {};
            c.Tb(a.nodes,
                function(a) { null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom)) });
            return function(a) {
                a = c.vb(a, 1);
                void 0 === e[a] && (e[a] = b.mD(a, d, e).Kq);
                return e[a]
            }
        },
        lqa: function(a, b, c) {
            var d = this,
                e = g.a,
                f = [],
                h = {},
                k = a.transitional;
            e.Tb(a.nodes, function(a) { a.value && (h[a.zoom] = e.ama(a.value, c ? "rgba" : "webgl"), f.push(a.zoom)) });
            return function(a) {
                var b = null;
                a = e.vb(a, 1);
                if (void 0 === h[a]) {
                    var b = d.mD(a, f, h),
                        n = b.Kq;
                    if (k && "none" !== k && b.Hz !== b.eK && b.Kq.join("") !== b.WD.join(""))
                        for (var n = n.slice(0), p = (a - b.Hz) / (b.eK - b.Hz), q = 0, r =
                                b.WD.length; q < r; q++) n[q] = e.z4(b.Kq[q], b.WD[q], p, k);
                    h[a] = n
                }
                b = h[a];
                return c && b ? "rgba(" + b.join(",") + ")" : b || ""
            }
        },
        Cz: function(a, b, c, d) {
            var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
                f;
            for (f in c)
                if (c.hasOwnProperty(f)) {
                    var h = c[f];
                    void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function(a, b) { return a.zoom - b.zoom }), a[f] = e.usa ? { Ye: d.call(this, b[h], c[f]), canvas: d.call(this, b[h], c[f], !0) } : d.call(this, b[h], c[f])) : e.tsa && (a[f] = !0)
                }
        },
        Qr: function(a, b) {
            for (var c = [], d = 0, e = a.length; d <
                e; d += 2) {
                var f = 0,
                    f = "str" === b ? g.a.vb(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.vb(parseInt(a.substr(d, 2), 16) / 255, 3);
                c.push(f)
            }
            return c.length ? (c.push(c.shift()), "str" === b ? "rgba(" + c.join(",") + ")" : c) : ""
        },
        v7: function(a, b, c) {
            if (b[c]) console.log("customType repeat!!", c);
            else {
                var d = {},
                    e = { visible: "visible", MU: "showLabel", yk: "showIcon" },
                    f = [
                        ["color", { color: "color" }, { opacity: "opacity" }],
                        ["fillColor", { fillColor: "fillColor" }, { he: "fillOpacity" }],
                        ["strokeColor", { strokeColor: "strokeColor" }, { ob: "strokeOpacity" }],
                        ["textFillColor", { fya: "textFillColor" }, { gya: "textFillOpacity" }],
                        ["textStrokeColor", { iya: "textStrokeColor" }, { jya: "textStrokeOpacity" }],
                        ["backgroundColor", { backgroundColor: "backgroundColor" }, { jma: "backgroundOpacity" }]
                    ],
                    h = { fontSize: "fontSize" },
                    k = { fillWidth: "fillWidth", strokeWidth: "strokeWidth" };
                if (a.styles) {
                    a = a.styles;
                    this.Cz(d, a, e, this.dqa, { tsa: !0 });
                    this.Cz(d, a, h, this.h4, { Isa: !0 });
                    this.Cz(d, a, k, this.h4, { Isa: !0 });
                    h = 0;
                    for (k = f.length; h < k; h++) {
                        var l = f[h];
                        a[l[0]] ? this.Cz(d, a, l[1], this.lqa, { usa: !0 }) : this.Cz(d,
                            a, l[2], this.Sqa)
                    }
                    a.texture && (this.Cz(d, a, { Ua: "texture" }, this.kra), d.nd = [], g.a.Tb(a.texture.nodes, function(a) { a.value && d.nd.push(g.r.vc + "://" + a.value) }))
                } else {
                    for (var m in e)
                        if (e.hasOwnProperty(m)) {
                            var n = e[m];
                            d[m] = void 0 === a[n] ? !0 : a[n]
                        }
                    e = 0;
                    for (m = f.length; e < m; e++) {
                        var p = f[e],
                            n = g.a.keys(p[1])[0],
                            q = p[1][n],
                            r = g.a.keys(p[2])[0],
                            p = p[2][r];
                        void 0 !== a[q] ? d[n] = { canvas: this.Qr(a[q], "str"), Ye: this.Qr(a[q]) } : d[r] = a[p]
                    }
                    for (l in h) h.hasOwnProperty(l) && void 0 !== a[l] && (d[l] = a[l]);
                    for (var s in k) k.hasOwnProperty(s) &&
                        void 0 !== a[s] && (d[s] = a[s]);
                    a.texture && (d.Ua = g.r.vc + "://" + a.texture)
                }
                b[c] = d
            }
        },
        DT: function(a, b, c, d) {
            if (a)
                for (var e in a)
                    if (a.hasOwnProperty(e) && g.a.kk(a[e], "object")) {
                        var f = a[e],
                            h = e;
                        c && (h = c + ":" + e);
                        if (f.detailedType) this.v7(f, b, h), this.DT(f.detailedType, b, h, f);
                        else if (f.subType) this.DT(f.subType, b, h);
                        else {
                            if (void 0 !== f.code) {
                                for (var k in d) d.hasOwnProperty(k) && !g.a.ka(["isDetailed", "detailedType", "styles"], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]);
                                h = c + ":" + f.code
                            }
                            this.v7(f, b, h)
                        }
                    }
        },
        xV: function(a) {
            if (!this.dq ||
                this.dq.zoom != a) {
                var b = g.a.Sh,
                    c = { zoom: a },
                    d;
                for (d in this.Nf)
                    if (this.Nf.hasOwnProperty(d)) {
                        var e = this.Nf[d];
                        c[d] = {};
                        for (var f in e)
                            if (e.hasOwnProperty(f)) {
                                var h = e[f];
                                h ? h.Ye ? (c[d][f] = {}, b(h.Ye) ? c[d][f].Ye = h.Ye(a) : c[d][f].Ye = h.Ye, b(h.canvas) ? c[d][f].canvas = h.canvas(a) : c[d][f].canvas = h.canvas) : b(h) ? c[d][f] = h(a) : c[d][f] = h : c[d][f] = h
                            }
                    }
                this.dq = c
            }
        },
        styleChanged: function() {
            if (this.e.B.Di) {
                var a = this.get("style");
                this.mm.RA || (this.mm = g.a.bind(this.mm, this), this.jq = g.a.bind(this.jq, this), this.mm.RA = !0);
                var b =
                    g.a;
                if (a) {
                    var c = {};
                    this.DT(a, c);
                    this.Nf = c
                } else this.Nf = null;
                var d, e, f, h;
                this.Nf && (d = this.Nf["regions:land"], e = this.Nf.water, f = this.Nf.sky, h = this.Nf.buildings);
                var k, l, m, n, p, a = this.Ij;
                if (d) {
                    c = "rgba(0, 0, 0, 0)";
                    if (d.visible) {
                        var q = this.jq(b.v8(this.e.De.substr(1)), d.opacity, d.color, !0, a);
                        q && (c = this.oA(q, d.visible, "rgba(0, 0, 0, 0)"), q = this.mm(b.ct(this.e.De.substr(1)), d.opacity, d.color, !0, a), k = this.oA(q, d.visible))
                    }
                    this.e.Mu = c
                } else this.e.Mu = "";
                e && e.visible && (l = this.mm(b.ct(this.e.NH.substr(1)), e.opacity,
                    e.color, !0, a), l = this.oA(l, e.visible));
                f && f.visible && (m = this.mm(b.ct(this.e.cC.substr(1)), void 0, f.color, !0, a), m = this.oA(m, f.visible));
                h && (h.visible ? (n = this.mm(b.al(this.e.WF[0]), void 0, h.fillColor, !0, a), n = this.oA(n, h.visible), p = this.mm(b.al(this.e.WF[1]), void 0, h.strokeColor, !0, a), p = this.oA(p, h.visible)) : (n = [1, 1, 1, 0], p = [1, 1, 1, 0]));
                this.oT && this.oT(k, l, m, [n, p]);
                this.l$ ? this.l$(this.Nf) : this.set("display");
                delete this.dq;
                this.xV(a)
            }
        },
        oA: function(a, b) {
            var c = 2 < arguments.length && void 0 !== arguments[2] ?
                arguments[2] : [0, 0, 0, 0],
                d = g.a.Sh;
            if (d(a) && d(b)) {
                var e = a;
                a = function(a) { return b(a) ? e(a) : c }
            }
            return a
        },
        jq: function(a, b, c, d, e) { if (a) { if (void 0 !== b) return a = a.split(","), c = b, "function" === typeof b && (c = b(e)), a[3] = g.a.vb(c, 3) + ")", a.join(","); if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(e) : c.canvas } return a },
        mm: function(a, b, c, d, e) { if (a) { if (b) return c = b, "function" === typeof b && (c = b(e)), [a[0], a[1], a[2], g.a.vb(c, 3)]; if (c) return "function" === typeof c.Ye ? d ? c.Ye : c.Ye(e) : c.Ye } return a },
        kJ: function(a,
            b, c) {
            var d = this.Nf;
            if (d) {
                this.dq && c && c == this.dq.zoom && (d = this.dq);
                if (b || 0 === b)
                    if (b = d[a + ":" + b]) return b;
                return d[a]
            }
        },
        km: function(a, b, c, d, e) {
            var f = null,
                h = a;
            d = d ? this.jq : this.mm;
            e = e || this.Ij;
            if (f = this.kJ(b, void 0, e))
                if ("function" === typeof f.visible && !f.visible(e) || !1 === f.visible) h = "";
                else {
                    var h = 1,
                        k = "";
                    if (c)
                        if (f.fillColor || f.he) h = f.he, k = f.fillColor;
                        else { if (f.color || f.opacity) h = f.opacity, k = f.color }
                    else if (f.strokeColor || f.ob) h = f.ob, k = f.strokeColor;
                    else if (f.color || f.opacity) h = f.opacity, k = f.color;
                    h = d(a,
                        h, k, !1, e)
                }
            this.Bs === b && (h = this.gv(h || a));
            return h
        },
        Vc: function(a, b, c) {
            var d = this.Nf;
            if (d) {
                this.dq && c && c == this.dq.zoom && (d = this.dq);
                if (b || 0 === b)
                    if (b = d[a + ":" + b]) return b;
                return d[a]
            }
        },
        kv: function(a, b) { var c = null; return c = this.Vc(a, void 0, b || this.Ij) },
        ws: function(a, b, c, d) {
            c = c ? this.jq : this.mm;
            var e = null,
                f = a;
            d = d || this.Ij;
            (e = this.kJ(b, void 0, d)) && (f = "function" === typeof e.visible && !e.visible(d) || !1 === e.visible ? "" : c(a, e.opacity, e.color, !1, d));
            this.Bs === b && (f = this.gv(f || a));
            return f
        },
        My: function(a, b, c, d, e,
            f) {
            var h = a,
                k = b,
                l = c,
                m = !0,
                n = !0,
                p, q = 1;
            f = f || this.Ij;
            var r = this.kJ(d, e, f);
            r && ("function" === typeof r.visible && !r.visible(f) || !1 === r.visible || "function" === typeof r.MU && !r.MU(f) || !1 === r.MU ? (n = m = !1, h = k = l = "") : (h = this.jq(a, r.gya, r.fya, !1, f), k = this.jq(b, r.jya, r.iya, !1, f), l = this.jq(c, r.jma, r.backgroundColor, !1, f), m = "function" === typeof r.yk ? r.yk(f) : r.yk, r.fontSize && (p = "function" === typeof r.fontSize ? r.fontSize(f) : r.fontSize, p = 12 <= p ? p : 12, p = 22 >= p ? p : 22), p && g.l.Kc && (p *= 2)));
            f = !1;
            this.Bs === d ? f = !0 : void 0 !== e && this.Bs ===
                d + "-" + e && (f = !0);
            f && (h = this.gv(h || a), k = this.gv(k || b), l = this.gv(l || c), q = 1 - 1.6 * this.zD, n = m = !0);
            return [h, k, l, m, n, q, p]
        },
        Ly: function(a, b, c, d, e) {
            var f = null,
                h = a,
                k = b;
            d = d ? this.jq : this.mm;
            var l = e || this.Ij;
            if (f = this.kJ(c, void 0, e)) "function" === typeof f.visible && !f.visible(l) || !1 === f.visible ? h = k = "" : (h = d(a, f.he, f.fillColor, !1, l), k = d(b, f.ob, f.strokeColor, !1, l));
            this.Bs === c && (b = k || b, h = this.gv(h || a), k = this.gv(b));
            return [h, k]
        }
    };
    g.M.Rb.Gb(g.P2);
    g.M.canvas.Rb = g.M.Rb.extend({
        A: function(a) { arguments.callee.ma.apply(this, arguments) },
        ys: function(a) {
            if (!a.M) {
                var b = a.am(this);
                b && !b.coa && (a.M = b)
            }
            return a.M
        },
        pc: function(a) {
            var b = this.e.I3();
            b && this.XT !== b && this.e.B.Di && (this.e.L8(b), this.XT = b);
            this.e.Xa.Wr.style.cssText = "";
            var c = a.la,
                b = a.P,
                d = this.e.B.get("features"),
                e = a.size.width,
                f = a.size.height;
            this.Ij = "vw" === this.e.B.Ce.baseRender ? g.a.vb(b.zoom, 1) : a.P.ke;
            this.T = b.T;
            if (!this.Na || 1E4 < Math.abs(b.lb.x - this.Na.x) / this.T || 1E4 < Math.abs(b.lb.y - this.Na.y) /
                this.T) this.Na = b.lb;
            this.Na.x - b.lb.x < -g.a.Fa / 2 ? this.Na = new g.H(this.Na.x + g.a.Fa, this.Na.y) : this.Na.x - b.lb.x > g.a.Fa / 2 && (this.Na = new g.H(this.Na.x - g.a.Fa, this.Na.y));
            for (var h = 0; h < c.length; h += 1) {
                var k = c[h],
                    l = this.ys(k),
                    m = c[h].je();
                if (l && l.f)
                    if (!m.visible || k.XD || m.bb[0] > b.zoom || m.bb[1] < b.zoom || k.ga && 0 === k.ga.length) {
                        if (l = l.yj())
                            if (l.length)
                                for (m = 0; m < l.length; m += 1) l[m].parentNode === this.K && this.K.removeChild(l[m]);
                            else l.parentNode === this.K && this.K.removeChild(l)
                    } else if (this.JJ(k, d)) {
                    l.pc(a, m);
                    l.lk &&
                        (a.re = l.re);
                    var k = l.yj(),
                        n, p, q = l.transform;
                    if (!q || !k || l.bh && !this.e.B.La) c[h].Bj && k.parentNode !== this.K && (this.K.appendChild(k), c[h].Mb = k);
                    else {
                        c[h].Mb = k;
                        k.length || (k = [k], q = [q]);
                        for (var r = 0; r < k.length; r += 1)
                            if (n = k[r], p = q[r], !p.Zy) {
                                var s = p.translate.x,
                                    u = p.translate.y;
                                c[h].IJ || (s = g.a.vb(s, 2), u = g.a.vb(u, 2));
                                var v = p.scale;
                                1E-5 > Math.abs(s) && (s = 0);
                                1E-5 > Math.abs(u) && (u = 0);
                                var w = [];
                                w.push("position:absolute");
                                w.push("z-index:" + (p.Kk || c[h].get("zIndex")));
                                c[h].XC ? (w.push("top:" + Math.floor(f / 2 + u) + "px"), w.push("left:" +
                                    Math.floor(e / 2 + s) + "px")) : n.E5 ? (w.push("height:" + n.height * v + "px"), w.push("width:" + n.width * v + "px"), w.push("top:" + (f / 2 - u * v) + "px"), w.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (w.push(g.g.ot[g.g.sg] + "-origin:" + s + "px " + u + "px"), w.push(g.g.ot[g.g.sg] + ":scale3d(" + v + "," + v + ",1)")), w.push("top:" + Math.floor(f / 2 - u) + "px"), w.push("left:" + Math.floor(e / 2 - s) + "px"), w.push("display:block"), l.ok && (w.push("height:" + n.height + "px"), w.push("width:" + n.width + "px")));
                                l.IJ || 1 === m.opacity || "number" !== typeof m.opacity || w.push(g.g.j4(n,
                                    m.opacity));
                                n.parentNode !== this.K && this.K.appendChild(n);
                                g.g.N8(n, w.join(";"))
                            }
                    }
                }
            }
            a = this.e.Xa.Wr;
            k = this.e.Xa.o;
            c = this.e.Xa.C;
            g.g.sg && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.g.sg + "Origin"] = e / 2 + "px " + f / 2 + "px", a.style[g.g.sg] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
            this.e.ht = !1
        },
        JJ: function(a, b) {
            if ("all" === b || void 0 === a.Xl) return !0;
            for (var c = 0, d = a.Xl.length; c < d; c++)
                if (g.a.ka(b, "region" === a.Xl[c] ? "bg" : a.Xl[c])) return !0;
            return !1
        },
        zoomChanged: function() {
            var a = this.e.get("zoom");
            this.Ij = "vw" === this.e.B.Ce.baseRender ? g.a.vb(a, 1) : Math.round(a);
            this.Nf && this.xV(this.Ij)
        }
    });
    g.M.Ui = g.M.Yb.extend({
        A: function(a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.X("reload", a, !0);
            var c = a.S.get("cacheSize");
            if (this.e && this.e.B) {
                var d = this.e.B.get("tileCacheSize");
                d && 0 < d && (c = d)
            }
            this.oa = new g.rg(c);
            var e = this;
            this.oa.mK.E1(function(a) { e.cB(a) });
            this.oa.xC = function(a) { return a.Pb ? (a.Pb.jj -= 1, 0 == a.Pb.jj && (a.zv = !1), delete a.Pb, !0) : a.zv ? a.jj ? !1 : !0 : !0 };
            this.gd = 1;
            this.Zn = 50;
            this.nX = !0;
            this.f.oa = this.oa;
            this.sm = new g.xF(6, null, a.ZQ);
            new g.xF(5, null, a.ZQ)
        },
        Gq: function() {
            this.clear();
            this.Lg = null;
            this.oa.clear();
            this.oa.xC = null;
            this.oa = this.oa.mK.SF = null;
            this.Lc && (this.Lc.G("tiles", this.bE, this), this.Lc.G("ack", this.aE, this), this.Lc.G("disable", this.ZD, this), this.Lc = null);
            this.e.G("zoomend", this.dk, this);
            this.e.G("moveend", this.dk, this)
        },
        reloadChanged: function() {
            this.f && (this.f.La = !1);
            this.oa.clear();
            this.reload = !0;
            this.set("display")
        },
        Ah: function(a, b, c) {
            function d(b) {
                a.loaded = !0;
                e.f && (a.status = "loaded", a.Ba = !0, a.Fe = b, e.set("display", 0), "function" === typeof c && c())
            }
            var e = this;
            a.status = "loading";
            this.f.Ao && this.f.Ao.call(this, a, d, function() {
                a.loaded = !0;
                e.f && (a.status = "loaded", a.Ba = !0, "function" === typeof c && c())
            })
        },
        PHa: function(a, b, c, d) {
            var e = [];
            c = c || 18;
            b = Math.pow(2, b - c);
            for (var f = 0; f < a.length; f += 1) {
                var h = a[f].ta,
                    k = Math.floor(h.x / b),
                    h = Math.floor(h.y / b);
                if (d) { if (k = c + "/" + k + "/" + h, (h = this.oa.get(k)) && "loaded" == h.status) continue } else h = new g.mr(c, k, h), k = h + "", h = new g.qb(h);
                !e[k] && h && (e.push(h), e[k] = 1)
            }
            return e
        },
        QI: function(a, b) {
            var c = this,
                d = this;
            if (this.f.xH) {
                var e, f, h, k, l, m,
                    n, p = function() {
                        var p = 0;
                        for (e = a.length - 1; 0 <= e; e -= 1) f = a[e], p += f.length;
                        if (0 == p) return b.call(c, a), { yL: void 0 };
                        d.fV = a;
                        for (e = a.length - 1; 0 <= e; e -= 1)
                            for (f = a[e], h = [], k = [], f.YT = h, f.Kv = k, l = f.length - 1; 0 <= l; l -= 1) m = f[l], n = m.ta, c.f.e.Te.ME(n.x, n.y, n.z, function() {
                                var c = l;
                                return function(e) {
                                    e ? h.push(f[c]) : k.push(f[c]);
                                    p -= 1;
                                    if (0 == p) {
                                        for (e = a.length - 1; 0 <= e; e -= 1) {
                                            var l = a[e];
                                            a[e] = l.YT;
                                            if (l.Kv)
                                                for (var m = l.Kv.length - 1; 0 <= m; m -= 1) {
                                                    var n = l.Kv[m];
                                                    n.status = "loaded";
                                                    n.loaded = !0;
                                                    n.Ba = !0
                                                }
                                        }
                                        b.call(d, a)
                                    }
                                }
                            }())
                    }();
                if ("object" === typeof p) return p.yL
            } else b.call(this,
                a)
        },
        qw: function(a, b, c) {
            if (a = this.oa.get(a + "/" + b + "/" + c)) {
                if (a.zv) return a;
                if (a.Pb) return a.Pb;
                a.zv = !0;
                a.jj = 0;
                return a
            }
        },
        nJ: function(a) {
            var b = a.ta;
            a = b.x;
            var c = b.y,
                b = b.z,
                d = Math.pow(2, b),
                e = (a + d) % d,
                f = e + d,
                d = e - d,
                h = null;
            e !== a && (h = this.qw(b, e, c));
            h || d === a || (h = this.qw(b, d, c));
            h || f === a || (h = this.qw(b, f, c));
            return h
        },
        Fn: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
            if ((!this.lk || !this.hf && !this.de) && a.length)
                if (this.LK) this.cK = !0;
                else {
                    for (var c = a.length - 1; 0 <= c; c -= 1) {
                        var d = a[c];
                        if (d.length)
                            for (var e =
                                    Math.pow(2, 20 - d[0].ta.z), c = d.length - 1; 0 <= c; c--) {
                                var f = d[c],
                                    h = f.ta;
                                h.T = e;
                                f.ra = {};
                                f.tn = 0;
                                if (10 > h.z) {
                                    var k = this.nJ(f);
                                    k && (f.Pb = k, f.status = "loaded", f.Ba = !0, k.jj += 1, f.tn = (h.x - k.ta.x) / Math.pow(2, h.z), d.splice(c, 1), this.set("display", 0))
                                }
                                this.oa.set(f.key, f);
                                !b && f.Ke ? f.Ke = !1 : f.status = "loading"
                            }
                    }
                    var l = this;
                    this.QI(a, function(a) {
                        for (var c = a.length - 1; 0 <= c; c -= 1) {
                            var d = a[c];
                            if (d.length)
                                if (l.Ei) {
                                    if (l.e.hA) break;
                                    var e = d[0].ta.z;
                                    l.ew(d, l.ok ? 1 : 0);
                                    for (var f = 0, h = 0; f < d.length;) l.$S(d.slice(10 * h, 10 * h + 10), e, b), f += 10,
                                        h += 1
                                } else
                                    for (e = function() {
                                            var a = d.length;
                                            return function() {
                                                if (0 === --a) {
                                                    var b = { key: "rb", index: 0, id: l.e.B.id };
                                                    l.f.S.uk || (g.Be.mf.end(b), g.Be.mf.end(g.extend(b, { index: 1 })))
                                                }
                                            }
                                        }(), l.ew(d), l.xq += d.length, f = d.length - 1; 0 <= f; f -= 1) l.Ah(d[f], l.sm, e)
                        }
                    })
                }
        },
        Sy: function(a, b) {
            var c = this.oa.get(a + "");
            c || b || (c = new g.qb(a.cb()));
            return c
        },
        cL: function(a, b) { return this.Dd * Math.pow(2, a - b) },
        cB: function(a) {
            a.Hs && this.sm.k2(a.Hs);
            a.QK = !1;
            a.loaded = !1;
            this.Of && this.Of(a)
        },
        qy: function(a, b) {
            var c = (2 < arguments.length && void 0 !==
                    arguments[2] ? arguments[2] : 0) || this.fb,
                d = a.Vd.x,
                e = a.Vd.y,
                f = a.kc.x,
                h = a.kc.y;
            new g.H(0, 0);
            var k = this.cL(20, c);
            b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[1] / k)));
            d /= k;
            e /= k;
            d = { Ic: 0 === d % 1 ? d - 1 : Math.floor(d), tc: 0 === e % 1 ? e - 1 : Math.floor(e), Jc: Math.floor(f / k), hc: Math.floor(h / k) };
            d.qE = d.Ic - d.Jc + 1;
            d.DK = d.tc - d.hc + 1;
            d.z = c;
            d.T = this.T * Math.pow(2, this.zoom - c);
            d.Uy = Math.ceil(d.qE / 2);
            return d
        },
        uv: function(a, b, c) {
            return b <
                a.Jc || b > a.Ic || c < a.hc || c > a.tc ? !1 : !0
        },
        ew: function(a, b) {
            if (a.length) {
                var c = this.lb.kd(this.Dd << 20 - a[0].ta.z),
                    d = Math.floor(c.x),
                    e = Math.floor(c.y);
                a.sort(function(a, c) {
                    var k = a.ta,
                        l = c.ta,
                        m = k.x - d,
                        k = k.y - e,
                        n = l.x - d,
                        l = l.y - e;
                    return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
                })
            }
        },
        clear: function() { this.sm.clear() },
        fp: function(a, b) {
            this.yg = !1;
            this.clear();
            this.$i = b.$i;
            this.Zi = b.Zi;
            this.Dd = b.Dd;
            var c = a.P;
            this.Sf = b.Sf || a.P.Sf;
            this.rh = c.rh;
            this.size = a.size;
            this.rotation = c.rotation;
            this.lb = c.lb;
            this.Ha = a.P.Ha;
            this.Kf = a.Kf;
            this.de =
                a.de;
            this.hf = a.hf;
            this.zoom = c.zoom;
            this.ke = c.ke;
            this.fb = "AMap.MapBox" == this.f.S.CLASS_NAME ? Math.max(2, this.ke - g.r.qr) : !1 === this.Ei && !this.f.tS && this.f.ja ? this.ke + 1 : this.ke;
            this.gf && this.fb > this.gf && (this.fb = this.gf);
            this.Xo && this.fb < this.Xo && (this.fb = this.Xo);
            this.T = c.T;
            this.Jg = c.Jg;
            c = a.P.Ha;
            this.rk = this.qy(c, b.I);
            this.Gw = c.H$ ? this.qy(c.H$, b.I) : null;
            var c = this.rk,
                d = this.Ha.z9,
                e = null,
                e = d < this.zoom && this.Gw ? this.Gw : c,
                f = [],
                h = [],
                k, l = [],
                m = [],
                n = [],
                p = new g.mr(0, 0, 0),
                q, r = this.zoom,
                m = this.Rk || "",
                s = {},
                u = {},
                v, w, t, x, y, F;
            this.be = 1E6 * Math.random() << 0;
            for (q = m.length - 1; 0 <= q; q -= 1)
                if (k = m[q], !(k.hx < b.opacity))
                    if (p.z = k.ta.z, p.x = k.ta.x, p.y = k.ta.y, p.z === this.fb) s[p + ""] |= 16;
                    else if (p.z < this.fb) {
                if (s[p + ""] |= 64, this.$i)
                    for (x = this.fb - p.z, v = Math.max(c.Jc, p.x << x), r = Math.min(c.Ic, (p.x + 1 << x) - 1), w = Math.max(c.hc, p.y << x), t = Math.min(c.tc, (p.y + 1 << x) - 1), p.z = this.fb, x = v; x <= r; x += 1)
                        for (p.x = x, y = w; y <= t; y += 1) p.y = y, F = p + "", s[F] |= 32, u[F] = u[F] ? Math.max(k.ta.z, u[F]) : k.ta.z
            } else if (this.Zi)
                for (v = 1; p.z >= this.fb;) {
                    s[p + ""] |= v;
                    v = p.x >> 1;
                    w = p.y >>
                        1;
                    r = v << 1;
                    t = w << 1;
                    k = 0;
                    for (x = 2; 0 < x; x -= 1)
                        for (p.x = r + x, y = 2; 0 < y; y -= 1) p.y = t + y, s[p + ""] & 5 && (k += 1);
                    p.z -= 1;
                    p.x = v;
                    p.y = w;
                    v = 4 === k ? 4 : 2
                }
            m = [];
            p.z = this.fb;
            q = !0;
            this.oa.x2();
            for (x = e.Jc; x <= e.Ic; x += 1)
                for (p.x = x, y = e.hc; y <= e.tc; y += 1) p.y = y, k = this.Sy(p), this.au(k), v = !1, k.Ba ? (k.be = this.be, this.uv(c, x, y) && (m.push(k), this.Ok && (k.gd !== this.gd || 1 > k.hx) && (v = !0))) : (q = !1, this.uv(c, x, y) && (v = !0), k.status && !k.Ke || this.ke !== d || this.Gw && !this.uv(this.Gw, x, y) || l.push(k)), v && n.push(k);
            q ? (this.gD || (this.gD = !0), this.f.La || (k = {
                key: this.f.bh ?
                    "rl" : "rb",
                index: 1,
                id: this.e.B.id
            }, this.f.S.uk || (g.Be.mf.end(k), g.Be.mf.push({ key: "ftc", Hf: m.length, id: this.e.B.id })))) : this.f.La = !1;
            this.yg = q;
            m.length && this.gD && (f.push(m), m.yg = q);
            h.push(l);
            d = !1;
            if (this.Zi) {
                n = n.slice(0);
                e = [];
                for (q = n.length - 1; 0 <= q; q -= 1) k = n[q], s[k.key] & 4 || e.push(k);
                k = b.bb[1];
                for (r = this.fb + 1; n.length && r <= k; r += 1) {
                    m = [];
                    l = n;
                    n = [];
                    p.z = r;
                    for (q = l.length - 1; 0 <= q; q -= 1)
                        if (x = l[q], v = s[x.key], v & 7)
                            for (v = x.ta.x << 1, w = x.ta.y << 1, x = 1; 0 <= x; x -= 1)
                                for (p.x = v + x, y = 1; 0 <= y; y -= 1) p.y = w + y, F = p + "", t = this.oa.tK(F), s[F] &
                                    5 && t && t.Ba ? (t.HB = !0, t.be = this.be, m.push(t), this.au(t)) : n.push(new g.qb(p.cb()));
                    m.length && (d = !0, f.push(m))
                }
                n = e
            }
            if (!d && this.$i)
                for (x = !f.length || this.ok ? b.bb[0] : Math.max(b.bb[0], this.fb - 2), Math.max(x, this.fb - this.Wga), r = this.fb - 1; n.length && r >= x; r -= 1) {
                    m = [];
                    y = {};
                    l = n;
                    n = [];
                    for (q = l.length - 1; 0 <= q; q -= 1) k = l[q], p.z = r, p.x = k.ta.x >> 1, p.y = k.ta.y >> 1, k = this.Sy(p), y[k.key] || (y[k.key] = 1, v = !1, k.Ba && (!this.Xia || s[k.key] & 64) ? (p.x = Math.min(c.Ic, Math.max(c.Jc, p.x << this.fb - r)), p.y = Math.min(c.tc, Math.max(c.hc, p.y << this.fb -
                        r)), p.z = this.fb, F = p + "", "number" === typeof u[F] && k.ta.z > u[F] ? v = !0 : k.HB = !0, k.be = this.be, m.push(k), this.au(k)) : v = !0, v && n.push(k));
                    m.length && f.push(m)
                }
            this.fV = h;
            this.Fv = this.xq = 0;
            this.Fn(h);
            this.Lg = f;
            this.f.set("tiles", f);
            this.Rv(a, b)
        },
        au: function(a) { this.oa.m6(a.sFa) },
        NR: function(a, b) {
            for (var c = [], d = this.e.B.getCoordsBoundByZoom(a), d = this.qy(d, b, a), e = d.Jc; e < d.Ic; e++)
                for (var f = d.hc; f < d.tc; f++) {
                    var h = [a, e, f].join("/");
                    this.oa.Kd(h) || c.push(new g.qb(new g.mr(a, e, f), !0))
                }
            return c
        },
        QM: function() {
            var a = this.e.B;
            return a.Q7 && a.get("preloadMode") && 200 <= this.oa.Gp && this.f.S.tq() && "stable" != this.Kf && this.Yx && this.Yx() && this.zoom !== this.fb
        },
        Rv: function(a, b) {
            var c = b.I,
                d = b.bb;
            if (this.QM() && this.fb >= d[0] + 1) {
                var d = [],
                    e = null,
                    e = "zoomOut" === this.Kf ? Math.floor(this.zoom) : Math.ceil(this.zoom),
                    e = this.NR(e, c);
                e.length && d.push(e);
                d.length && this.Fn(d, !0)
            }
        }
    });
    g.M.$d.Ui = g.M.Ui.extend({
        A: function(a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.Zn = 120;
            this.Ei = !1;
            this.$g();
            this.gf = a.gf;
            this.Xo = a.Xo
        },
        yj: function() { return this.Mb },
        $g: function() {
            this.Mb = document.createElement("div");
            this.Mb.className = this.f.S.get("className") || "amap-layer";
            this.av = document.createDocumentFragment()
        },
        Wv: function(a) {
            var b = Math.pow(2, a.P.zoom - this.Ef),
                c = a.P.lb.$a(this.Is).kd(this.zm);
            this.transform = { translate: this.transform.translate.add(c), scale: b, rotate: 0 };
            this.lb = a.P.lb
        },
        UP: function(a, b) {
            this.Na = this.J.Na;
            this.Ef = this.ke;
            this.zm = this.Jg;
            this.xe = !1;
            this.currentTime = +new Date;
            this.CV = b.CV;
            var c = this.rk;
            this.Ok = this.Zn && b.bI;
            var d = this.Lg,
                e = 256 * c.qE,
                c = 256 * c.DK;
            this.de = this.zoom << 0 !== this.zoom;
            var f = this.lb.$a(this.Na);
            f.x < -g.a.Fa / 2 ? f.x += g.a.Fa : f.x > g.a.Fa / 2 && (f.x -= g.a.Fa);
            this.gQ = f.kd(this.Jg);
            return [d, e, c, b]
        },
        Mz: function(a, b) {
            var c = this.UP(a, b);
            this.$s.apply(this, c);
            this.Pe(a);
            this.yg && !this.f.La && (c = this.f, c.S.uk || g.Be.mf.end({ key: "rb", index: 2, id: this.e.B.id }), c.La = !0, c.Id ? c.pa("renderComplete") : (c.Id = !0, c.pa("complete")))
        },
        pc: function(a, b) {
            this.qp = a.qp;
            this.hf = a.hf;
            this.fp(a, b);
            this.Is && g.l.Yl && (a.de || a.hf) ? this.Wv(a, b) : this.Mz(a, b);
            this.Is = this.lb;
            this.xe && this.set("display", 0)
        },
        Vv: function() { for (var a = this.Mb.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].gd !== this.gd && this.Mb.removeChild(a[b]) },
        pE: function(a, b) { return a.hc === b.hc && a.Jc === b.Jc && a.tc === b.tc && a.Ic === b.Ic },
        $s: function(a) {
            var b = this.gd;
            this.gd += 1;
            var c = !1,
                d, e, f;
            e = !1;
            var h = [],
                k, l;
            for (d = a.length -
                1; 0 <= d; d -= 1)
                if (f = a[d], f.length) {
                    e = f[0].ta.z;
                    var m, n, p = this.cL(this.ke, e),
                        q = !1;
                    this.lk && f.yg && f[0].ta.z == this.fb && (k = [], l = [], q = !0);
                    for (var r = f.length - 1; 0 <= r; r -= 1) {
                        n = f[r];
                        q && n.ga && (k.push.apply(k, n.ga), l.push(n.ta + ""));
                        this.oU(n);
                        if (this.Na === n.Na && n.Ef === this.Ef) {
                            var s = n.Fe;
                            if (s && s.parentNode === this.Mb && 1 === n.hx) {
                                h.push(n);
                                s.gd = this.gd;
                                n.gd = this.gd;
                                continue
                            }
                        }
                        n.Na = this.Na;
                        n.Ef = this.Ef;
                        m = n.ta;
                        var c = !0,
                            u = (new g.H((m.x << 20 - e) * this.Dd, (m.y << 20 - e) * this.Dd)).$a(this.Na),
                            u = u.kd(this.Jg);
                        u.x = g.a.vb(u.x, 1);
                        u.y = g.a.vb(u.y, 1);
                        var v = 1;
                        if (!n.iY || this.nX && n.gd !== b) n.iY = this.currentTime;
                        this.Ok && !n.HB ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.iY) / (1 / Math.pow(1.32, s) * this.Zn)), 1 !== v && (this.xe = !0)) : n.HB = !1;
                        n.gd = this.gd;
                        n.hx = v;
                        n.Ba ? (s = n.Fe, !s && n.Pb && n.Pb.Fe && (s = n.Pb.Fe), 0 !== v && s && (this.b4(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Mb && (g.l.Bi && "overlayer" === this.f.get("type") && (s.style.display = "none"), this.av.appendChild(s)), s.gd = this.gd, n.ke = this.ke, h.push(n))) : n.be = null
                    }
                    e = !0
                }
            this.lk &&
                k && (r = l.sort().join(";"), k.NS = r, r !== this.re.NS && (this.re = k));
            1 < a.length && (this.xe = !0);
            this.Rk = h;
            this.Vv();
            this.Mb.appendChild(this.av);
            return c || !e
        },
        oU: function() {},
        Pe: function() { this.transform = { translate: this.gQ, scale: Math.pow(2, this.zoom - this.ke), rotate: 0 } }
    });
    window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.FQ = function(a, b, c, d, e) {
        "undefined" === typeof e && (e = [10, 10]);
        this.moveTo(a, b);
        var f = c - a,
            h = d - b,
            k = Math.floor(Math.sqrt(f * f + h * h));
        d = f / k;
        c = h / k;
        e.Hg = 0;
        for (var l = [], f = this.vI, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.Hg += e[q], l[q] = { bD: e[q] * d, cD: e[q] * c, fz: h += e[q] }, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0);
        for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].bD, h = l[m].cD), a += f, b += h, this.GE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.GE = !this.GE, n = e[(m + 1) %
            e.length], m = (m + 1) % e.length;
        k -= p;
        a += k * d;
        b += k * c;
        this.GE ? this.moveTo(a, b) : this.lineTo(a, b);
        this.vI = (this.vI + p + k) % e.Hg
    }, window.CanvasRenderingContext2D.prototype.poa = function(a, b, c, d) {
        "undefined" === typeof d && (d = [10, 10]);
        var e = 2 * Math.PI * c,
            f = 0 >= d ? e : Math.round(e / (d[0] + d[1])),
            h = (d[0] + d[1]) / e * 2 * Math.PI;
        d = d[0] / e * 2 * Math.PI;
        for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
    });
    g.M.Me.Il = g.M.Ui.extend({
        A: function(a, b) {
            arguments.callee.ma.apply(this, arguments);
            this.$g()
        },
        RR: function() { return this.Za.XU },
        yj: function() { return this.Mb },
        $g: function() {
            this.Mb = document.createElement("div");
            this.Mb.className = "amap-markers";
            this.Za = new g.M.Me.ed(this.Mb);
            this.Za.f = this.f;
            this.J.K.appendChild(this.Mb)
        },
        ut: function(a, b) {
            this.av = b.av;
            this.iz = b;
            this.Sf = a.P.Sf;
            this.T = a.P.T;
            this.zoom = a.P.zoom;
            this.size = a.size;
            this.Ha = a.P.Ha;
            this.Aq = a.T;
            this.mb = a.P.lb;
            this.rh = a.P.rh;
            var c = !1;
            if (!this.Na ||
                500 < Math.abs(this.mb.x - this.Na.x) / this.T || 500 < Math.abs(this.mb.y - this.Na.y) / this.T) c = !0;
            if (c || this.zoom << 0 !== this.zoom || this.Ef !== this.zoom) this.Na = this.mb, this.Ef = this.zoom
        },
        jv: function(a) {
            var b = a.P.Ha.Bc.y * this.T;
            a = a.P.Ha.Bc.x * this.T;
            return [this.mb.x - a, this.mb.y - b, this.mb.x + a, this.mb.y + b]
        },
        Vv: function() {
            if (this.Vh && this.Vh)
                for (var a in this.Vh)
                    if (this.Vh.hasOwnProperty(a)) {
                        var b = this.Vh[a];
                        b.be !== this.be && b.fa && this.J.Nl.appendChild(b.fa)
                    }
        },
        pc: function(a, b) {
            this.be = 1E6 * Math.random() << 0;
            this.ut(a,
                b);
            this.P = a.P;
            this.size = a.size;
            var c = this.f;
            this.Dd = 256;
            var d, e;
            e = this.jv(a);
            var f = 0;
            c.om && (f = 50 * this.T);
            e[0] -= this.f.Cf * this.T + f;
            e[1] -= this.f.lg * this.T + f;
            e[2] += this.f.Cf * this.T + f;
            e[3] += this.f.lg * this.T + f;
            c = c.yn(e);
            for (d in c) c.hasOwnProperty(d) && (c[d].be = this.be, c[d].Z5 = this);
            this.Vv(c);
            this.ut.call(this.Za, a, b);
            this.Za.vE(c);
            this.Vh = c;
            this.Pe(a)
        },
        Pe: function() {
            var a = Math.pow(2, this.zoom - this.ke);
            this.transform = { translate: this.Na.$a(this.mb).kd(this.T), scale: a, rotate: 0 }
        }
    });
    g.M.Me.ed = g.ca.extend({
        A: function(a) { this.rl = a },
        vE: function(a, b) {
            var c = document.createDocumentFragment(),
                d = b && b.FS ? null : {},
                e = !0,
                f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var h = a[f],
                        k, l = h.get("params");
                    if (h.fa) k = h.fa;
                    else {
                        k = g.g.create("div");
                        k.className = "amap-marker";
                        var m = l.Wg,
                            n = l.Y8,
                            p = l.LJ;
                        m && k.appendChild(m);
                        n && k.appendChild(n);
                        p && !1 !== m.CM && k.appendChild(p);
                        h.fa = k;
                        h.Wg = m;
                        if (n = l.title) m.title = n;
                        this.f.om = !0; - 1 === g.a.indexOf(this.f.eh, h) && this.f.eh.push(h);
                        h.pe = !0
                    }
                    var p = l.offset,
                        q = p.x,
                        r = p.y,
                        s = l.textAlign,
                        u = l.verticalAlign,
                        n = l.anchor,
                        m = !1,
                        v, w;
                    n && (n = n.split("-"), 2 === n.length ? (s = n[1], u = n[0]) : 1 === n.length && "center" === n[0] && (s = "center", u = "middle"));
                    var t, n = t = 0;
                    if ("AMap.Text" == h.Rp || "AMap.Marker" == h.Rp) {
                        if (w = v = 0, k.parentNode !== this.rl && d && (m = !0, d[f] = h, e = !1), !m) {
                            h.pe || !h.Yj ? (t = g.g.Jo(h.Wg), h.Yj = t) : t = h.Yj;
                            n = t[0];
                            t = t[1];
                            switch (s) {
                                case "center":
                                    v = n / 2;
                                    break;
                                case "right":
                                    v = n
                            }
                            switch (u) {
                                case "middle":
                                    w = t / 2;
                                    break;
                                case "bottom":
                                    w = t
                            }
                            q -= v;
                            r -= w
                        }
                    } else v = -q, w = -r;
                    var x, y;
                    if (!m)
                        if (h.pe) {
                            var F = [];
                            x = this.Ju(h.W.za);
                            h.Na =
                                this.Na;
                            y = l.oF;
                            r = Math.round(x[1] + r + y.y);
                            q = Math.round(x[0] + q + y.x);
                            F.push("top:" + r + "px");
                            F.push("left:" + q + "px");
                            F.push("z-index:" + (l.L5 ? this.f.cr + 10 : l.zIndex));
                            if (!g.l.Ie) {
                                r = v;
                                q = w;
                                if ("AMap.Marker" == h.Rp) {
                                    r = -p.x;
                                    q = -p.y;
                                    switch (s) {
                                        case "center":
                                            r = -p.x + n / 2;
                                            q = -p.y + t / 2;
                                            break;
                                        case "right":
                                            r = -p.x + n
                                    }
                                    switch (u) {
                                        case "middle":
                                            q = -p.y + t / 2;
                                            break;
                                        case "bottom":
                                            q = -p.y + t
                                    }
                                }
                                F.push(g.g.w4(k, l.Pp, { x: r, y: q }))
                            }
                            F.push("display:" + (l.visible ? "block" : "none") + ";");
                            k.style.cssText = F.join(";");
                            if ((p = l.label) && p.content) {
                                l = l.LJ;
                                s =
                                    p.direction;
                                r = null;
                                h.Cv || (r = g.g.Jo(l), h.Cv = r);
                                u = (r = h.Cv) && r[0];
                                w = r && r[1];
                                q = r = 0;
                                if (s && u && w) switch (s) {
                                    case "top":
                                        r = -w;
                                        q = (n - u) / 2;
                                        break;
                                    case "right":
                                        r = (t - w) / 2;
                                        q = n;
                                        break;
                                    case "bottom":
                                        r = t;
                                        q = (n - u) / 2;
                                        break;
                                    case "left":
                                        r = (t - w) / 2;
                                        q = -u;
                                        break;
                                    case "center":
                                        r = (t - w) / 2, q = (n - u) / 2
                                }
                                p.offset ? (r = r + p.offset.y + "px", q = q + p.offset.x + "px") : (r += "px", q += "px");
                                l.style.top = r;
                                l.style.left = q
                            }
                        } else if (h.Xaa || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.rl || h.Na !== this.Na) x = this.Ju(h.W.za), h.Na = this.Na, y = l.oF,
                        r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top = r + "px", k.style.left = q + "px";
                    h.zoom = this.zoom;
                    k.parentNode !== this.rl && (g.l.Bi && g.a.iepngFix(k), c.appendChild(k));
                    h.pe = m;
                    k.KB = this.rl
                }
            this.rl.appendChild(c);
            e || this.vE(d, { FS: !0 })
        },
        Ju: function(a) {
            var b = a[0] - this.Na.x;
            b > g.a.Fa / 2 ? b -= g.a.Fa : b < -g.a.Fa / 2 && (b += g.a.Fa);
            return [b / this.T, (a[1] - this.Na.y) / this.T]
        }
    });
    var Mc = g.r,
        Sc = g.l,
        fc = g.ca.Qu,
        Tc = g.Gva,
        fa = document,
        Uc = !0,
        Vc = [];
    Sc.Wf && Vc.push("touch");
    Sc.ba || Vc.push("mouse");
    Sc.gL && (Vc.push("vectorlayer", "overlay"), Sc.op ? Vc.push("wgl") : Vc.push("cgl"));
    if (Tc) {
        for (var Wc = [], Xc = Tc.split(","), Ic = 0; Ic < Xc.length; Ic += 1) {
            var Yc = Xc[Ic];
            fc[Yc] && Wc.push.apply(Wc, fc[Yc]);
            Wc.push(Yc)
        }
        Vc = Vc.concat(Wc)
    }
    Vc.push("sync");
    if (Sc.Gv) {
        var Zc = !0,
            $c = [],
            ad = [];
        try {
            for (var Ic = 0, bd = Vc.length; Ic < bd; Ic++) {
                var cd = JSON.parse(localStorage.getItem("_AMap_" + Vc[Ic]));
                if (cd && cd.version === Mc.Gk) $c.push(cd.script), cd.css && ad.push(cd.css);
                else {
                    $c = void 0;
                    Zc = !1;
                    break
                }
            }
        } catch (dd) { $c = ad = void 0, Zc = !1 }
        if (Zc) try {
            ad.length && ed();
            var fd = $c.join(";");
            eval(fd)
        } catch (gd) { Uc = !1 } else Uc = !1
    } else Uc = !1;
    if (Uc)
        for (Ic = 0; Ic < Vc.length; Ic += 1) g.sb.QC(Vc[Ic]).status = 1;
    else Mc.PJ = !1, hd();

    function id() {
        for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1)
            if (0 === a[c].src.indexOf(Mc.Fb + "/maps?")) { b = a[c]; break }
        return Mc.Nc || b && b.async
    }

    function hd() {
        var a = Mc.Fb + "/maps/modules?v=" + Mc.vo + "&key=" + Mc.key + "&vrs=" + Mc.Gk + "&m=" + Vc.join(",");
        id() ? jd(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function() { fa.getElementById("amap_plus_js") || jd(a) }, 1))
    }

    function jd(a) {
        var b = fa.createElement("script");
        b.charset = "utf-8";
        b.src = a;
        b.id = "amap_plus_js";
        (a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b)
    }

    function ed() {
        var a = ad.join("\n"),
            b = fa.createElement("style");
        b.type = "text/css"; - 1 === Mc.Fb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Mc.Fb.split("://")[1]));
        "https" === Mc.vc && (a = a.replace(/http:/gi, "https:"));
        if (b.styleSheet) {
            var c = function() { try { b.styleSheet.cssText = a } catch (c) {} };
            b.styleSheet.disabled ? setTimeout(c, 10) : c()
        } else b.appendChild(fa.createTextNode(a));
        c = fa.head || fa.getElementsByTagName("head")[0];
        2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
    };
    (typeof _cssload_ == "function") && _cssload_("logo", ".amap-logo{display:block!important;pointer-events:none;}", true)
})(["589ea3372ca2433f0732f684c5343004", [116.116676, 38.470317, 117.259987, 40.085011, 116.704441, 39.523927], "https://webapi.amap.com", 1, "1.4.15", null, "131000", "AMap.Geocoder", true, false, false, true, "1591123414-20200522-1", false])