﻿   /*<![CDATA[*/window._wpemojiSettings =
           {
               baseUrl: "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/72x72\/",
               ext: ".png",
               svgUrl: "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/svg\/",
               svgExt: ".svg",
               source:
               {
                   concatemoji: "https:\/\/certy.px-lab.com\/designer\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.8.5"
               }

           };

!function (a, b, c)
{
    function d(a)
    {
        var b, c, d, e, f = String.fromCharCode;
        if (!k || !k.fillText)
            return !1;

        switch (k.clearRect(0, 0, j.width, j.height),
            k.textBaseline = "top",
            k.font = "600 32px Arial", a)
        {
            case "flag":
                return k.fillText(f(55356, 56826, 55356, 56819), 0, 0),
                    b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height),
                    k.fillText(f(55356, 56826, 8203, 55356, 56819), 0, 0),
                    c = j.toDataURL(), b !== c && (k.clearRect(0, 0, j.width, j.height),
                    k.fillText(f(55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447), 0, 0),
                    b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height),
                    k.fillText(f(55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447), 0, 0),
                    c = j.toDataURL(), b !== c);

            case "emoji4":
                return k.fillText(f(55358, 56794, 8205, 9794, 65039), 0, 0),
                    d = j.toDataURL(), k.clearRect(0, 0, j.width, j.height),
                    k.fillText(f(55358, 56794, 8203, 9794, 65039), 0, 0),
                    e = j.toDataURL(), d !== e
        };
        return !1
    }

    function e(a)
    {
        var c = b.createElement("script");
        c.src = a, c.defer = c.type = "text/javascript",
        b.getElementsByTagName("head")[0].appendChild(c)
    };

    var f, g, h, i, j = b.createElement("canvas"),
        k = j.getContext && j.getContext("2d");

    for (i = Array("flag", "emoji4"),
        c.supports = { everything: !0, everythingExceptFlag: !0 },h = 0; h < i.length; h++)
        c.supports[i[h]] = d(i[h]),
        c.supports.everything = c.supports.everything && c.supports[i[h]],
        "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
    c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag,
    c.DOMReady = !1,
    c.readyCallback = function ()
    {
        c.DOMReady = !0
    },

    c.supports.everything || (g = function () { c.readyCallback() },
    b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1),
    a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g),
    b.attachEvent("onreadystatechange", function ()
    {
        "complete" === b.readyState && c.readyCallback()
    })),

f = c.source || {},
f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}

(window, document, window._wpemojiSettings)/*]]>*/