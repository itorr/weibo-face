
STK.register("conf.trans.face", function(a) {
    var b = a.lib.kit.io.inter()
        , c = b.register;
    c("face", {
        url: "/aj/mblog/face?type=face&_wv=5"
    });
    c("magicFace", {
        url: "/aj/mblog/face?type=ani&_wv=5"
    });
    return b
});
STK.register("lib.face.face", function(a) {
    function j(b) {
        if (h.length) {
            b(h);
            return !0
        }
        a.conf.trans.face.request("face", {
            onSuccess: function(a, c) {
                h = [];
                a.data.usual.norm && h.push({
                    name: i,
                    hotmap: a.data.usual.hot.slice(0, 12),
                    map: a.data.usual.norm
                });
                for (var d in a.data.more)
                    a.data.more.hasOwnProperty(d) && h.push({
                        name: d,
                        map: a.data.more[d]
                    });
                b(h)
            },
            onError: function(b, c) {
                a.lib.dialog.ioError(b.code, b)
            }
        }, {});
        return !1
    }
    var b = ["thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four"]
        , c = 0
        , d = a.lib.kit.extra.language
        , e = ["first", "second", "third", "fouth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"]
        , f = {
        "默认": "default",
        "浪小花": "langxiaohua",
        "暴走漫画": "baozou",
        "小恐龙": "konglong",
        "冷兔": "lengtu",
        "明星表情": "star",
        "郭斯特": "ghost",
        "癫当": "diandang",
        "阿狸": "ali",
        "BOBO和TOTO": "boto",
        "搞怪": "gaoguai",
        "小纯洁": "chunjie",
        "罗小黑": "xiaohei",
        "白骨精": "baigujing",
        "hello菜菜": "hello",
        "面瘫萝卜": "miantan",
        "阿拉兔": "alatu",
        "小幺鸡": "yaoji",
        "心情": "mood",
        "摩丝摩丝": "mosi",
        "桂宝": "guibao",
        "懒猫猫": "lanmaomao",
        "彼尔德": "bierde",
        "天气": "weather",
        "休闲": "relax",
        "炮炮兵": "paopao",
        "哎呦熊": "eiyou",
        "块猫": "kuaimao",
        "柏夫": "baifu",
        "萌萌": "mengmeng",
        "管不着": "guanbuzhe",
        "臭臭": "chouchou",
        nonopanda: "nonopanda",
        "恐龙宝贝": "konglongbaobei",
        "影子": "shadow",
        "大耳兔": "daertu",
        "哈皮兔": "hapitu",
        "星座": "xingzuo",
        "爱心": "aixin",
        "张小盒": "zhangxiaohe",
        "悠嘻猴": "youxihou",
        "小新小浪": "xinlang",
        "大熊": "daxiong",
        "蘑菇点点": "mogu",
        "酷库熊": "kuku"
    }
        , g = '<div class="W_layer W_layer_pop"><div class="content"><div class="W_layer_close"><a href="javascript:void(0);" node-type="close" class="W_ficon ficon_close S_ficon">X</a></div><div class="layer_faces"><div class="WB_minitab"><ul class="minitb_ul S_line1 S_bg1 clearfix"><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li><li class="minitb_item S_line1" node-type="tab"><a href="javascript:void(0);" class="minitb_lk S_txt1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class="cur_block"></span></li></ul><ul class="W_fr minitb_ul S_line1 S_bg1 clearfix" node-type="face_nav"><li class="minitb_more S_line1" node-type="prev" action-type="prev"> <a href="javascript:void(0);" class="minitb_lk S_txt1"><i class="W_ficon ficon_arrow_left_lite S_ficon">j</i></a></li><li class="minitb_more S_line1" node-type="next" action-type="next"> <a href="javascript:void(0);" class="minitb_lk S_txt1"><i class="W_ficon ficon_arrow_right_lite S_ficon">i</i></a></li></ul></div><div class="faces_list_box"><div class="faces_list" node-type="scrollView"><div node-type="list"></div></div></div></div><div class="W_layer_arrow"><span class="W_arrow_bor" node-type="arrow"><i class="S_line3"></i><em class="S_bg2_br"></em></span></div></div></div>'
        , h = []
        , i = d("#L{默认}");
    return function(d, h) {
        var i = a.ui.bubble(g, {
            clickBlankToHide: !0,
            stopClickPropagation: !0,
            autoRelease: !0,
            showWithAni: "fadeInDown:fast",
            hideWithAni: "fadeOutUp:fast"
        });
        a.custEvent.define(i, "insert");
        var k = i.getDomList(!0).list, l = [].concat(i.getDomList(!0).tab), m, n = 0, o = 0;
        j(function(d) {
            function g() {
                i.getDomList().face_nav.style.display = d.length <= 5 ? "none" : "";
                a.foreach(l, function(b, c) {
                    c = c + o;
                    a.removeClassName(b, "current");
                    if (d[c]) {
                        if (c === n) {
                            a.addClassName(b, "current");
                            b.innerHTML = '<a href="javascript:void(0);" class="minitb_lk S_txt1 S_bg2" action-type="tab" action-data="index=' + c + '">' + d[c].name + '</a><span class="cur_block"></span>'
                        } else
                            b.innerHTML = '<a href="javascript:void(0);" class="minitb_lk S_txt1" action-type="tab" action-data="index=' + c + '">' + d[c].name + '</a><span class="cur_block"></span>';
                        b.title = d[c].name;
                        b.style.display = ""
                    } else {
                        b.innerHTML = '<a href="javascript:void(0);" class="minitb_lk S_txt1"></a><span class="cur_block"></span>';
                        b.title = "";
                        b.style.display = "none"
                    }
                    b.offsetWidth
                });
                o <= 0 ? a.addClassName(i.getDomList().prev, "W_btn_b_disable") : a.removeClassName(i.getDomList().prev, "W_btn_b_disable");
                o >= d.length - 5 ? a.addClassName(i.getDomList().next, "W_btn_b_disable") : a.removeClassName(i.getDomList().next, "W_btn_b_disable")
            }
            i.on("tab", "click", function(g) {
                n = g.data.index | 0;
                a.foreach(l, function(b, c) {
                    a.removeClassName(b, "current");
                    a.removeClassName(b.firstChild, "S_bg2")
                });
                a.addClassName(g.el.parentNode, "current");
                a.addClassName(g.el, "S_bg2");
                var h = "", j;
                if (d[n].hotmap) {
                    h += '<ul class="faces_list_hot clearfix">';
                    a.foreach([].concat(d[n].hotmap), function(a, b) {
                        j = 'suda="key=mainpub_default_expr&value=' + e[b] + '"';
                        h += '<li action-type="select" action-data="insert=' + encodeURIComponent(a.phrase) + '" title="' + a.phrase.replace(/\[|\]/g, "") + '" ' + j + '><img src="' + a.icon + '"/></li>'
                    });
                    h += "</ul>"
                }
                h += "<ul>";
                a.foreach([].concat(d[n].map), function(a) {
                    j = n === 0 ? 'suda="key=mainpub_default_expr&value=' + b[c++ % 72] + '"' : 'suda="key=pub_expression&value=' + f[d[n].name] + '"';
                    h += '<li action-type="select" action-data="insert=' + encodeURIComponent(a.phrase) + '" title="' + a.phrase.replace(/\[|\]/g, "") + '" ' + j + '><img src="' + a.icon + '"/></li>'
                });
                h += "</ul>";
                k.innerHTML = h;
                k.offsetWidth;
                m || (m = a.ui.scrollView(i.getDomList(!0).scrollView));
                setTimeout(function() {
                    m.reset();
                    m.scrollTop(0)
                })
            });
            i.on("prev", "click", function(a) {
                o = Math.max(o - 5, 0);
                g()
            });
            i.on("next", "click", function(a) {
                o = Math.min(o + 5, d.length - 5);
                g()
            });
            i.on("select", "click", function(b) {
                var c = a.sizzle("img", b.el)[0].getAttribute("src");
                i.trigger("insert", {
                    value: decodeURIComponent(b.data.insert),
                    url: c
                });
                var d = b.el.getAttribute("suda");
                if (d) {
                    d = a.queryToJson(d);
                    window.SUDA && window.SUDA.uaTrack && window.SUDA.uaTrack(d.key, d.value)
                }
            });
            i.on("beforeHide", function() {
                m.scrollEl.style.overflowY = "hidden"
            });
            i.on("hide", function() {
                if (m) {
                    m.destroy();
                    m = null
                }
            });
            g();
            i.trigger(l[0].firstChild, "click", null)
        });
        i.getBub = function() {
            return i
        }
        ;
        h.refer ? i.show().setArrow("top").setAlignPos(d, h.refer, h) : i.show().beside(d, h);
        return i
    }
});
STK.register("lib.publisher.widget.face", function(a) {
    var b = a.lib.face.face;
    return function(c, d) {
        var e = {}, f, g;
        d = a.core.json.merge({
            t: 0,
            l: -15,
            refer: c.nodeList.textEl,
            useAlign: !0,
            arrowOffset: 2,
            clickToHide: !1
        }, d || {});
        var h = function(a, b) {
            var e = c.API.getCurrentLogType();
            c.API.addShortUrlLog(e);
            c.API.insertText(b.value);
            d.clickToHide && f.getBub().hide()
        }
            , i = function() {
            a.core.evt.preventDefault();
            var g, i = a.fixEvent(a.getEvent()).target;
            g = i;
            f = b(g, d);
            a.custEvent.add(f, "insert", h);
            a.custEvent.define(c, "close");
            a.custEvent.add(c, "close", e.hide);
            a.custEvent.add(f, "hide", function() {
                a.custEvent.remove(f, "hide", arguments.callee);
                a.custEvent.remove(f, "insert", h);
                a.custEvent.remove(c, "close", e.hide)
            })
        };
        e.init = function(b, d, e) {
            c = b;
            g = d;
            a.addEvent(b.nodeList[g], "click", i)
        }
        ;
        e.show = i;
        e.hide = function() {
            f && f.getBub().hide()
        }
        ;
        e.destroy = function() {
            c = null
        }
        ;
        return e
    }
});