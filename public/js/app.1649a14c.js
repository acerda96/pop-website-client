(function(t) {
  function e(e) {
    for (
      var i, o, r = e[0], l = e[1], c = e[2], u = 0, m = [];
      u < r.length;
      u++
    )
      (o = r[u]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && m.push(a[o][0]),
        (a[o] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    d && d(e);
    while (m.length) m.shift()();
    return n.push.apply(n, c || []), s();
  }
  function s() {
    for (var t, e = 0; e < n.length; e++) {
      for (var s = n[e], i = !0, r = 1; r < s.length; r++) {
        var l = s[r];
        0 !== a[l] && (i = !1);
      }
      i && (n.splice(e--, 1), (t = o((o.s = s[0]))));
    }
    return t;
  }
  var i = {},
    a = { app: 0 },
    n = [];
  function o(e) {
    if (i[e]) return i[e].exports;
    var s = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = t),
    (o.c = i),
    (o.d = function(t, e, s) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (o.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          o.d(
            s,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return s;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var d = l;
  n.push([0, "chunk-vendors"]), s();
})({
  0: function(t, e, s) {
    t.exports = s("56d7");
  },
  3847: function(t, e, s) {},
  4678: function(t, e, s) {
    var i = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function a(t) {
      var e = n(t);
      return s(e);
    }
    function n(t) {
      if (!s.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return i[t];
    }
    (a.keys = function() {
      return Object.keys(i);
    }),
      (a.resolve = n),
      (t.exports = a),
      (a.id = "4678");
  },
  "56d7": function(t, e, s) {
    "use strict";
    s.r(e);
    var i = s("2b0e"),
      a = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "app" } },
          [s("Navigation"), s("router-view"), s("Footer")],
          1
        );
      },
      n = [],
      o = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "z-10" }, [
          s(
            "nav",
            { staticClass: "upper-navbar" },
            [
              s("MenuIcon", {
                staticClass: "upper-navbar__menu-icon",
                on: { click: t.toggleNav },
              }),
              s(
                "router-link",
                { staticClass: "upper-navbar__logo", attrs: { to: "/" } },
                [t._v("POP")]
              ),
              s(
                "ul",
                { staticClass: "upper-navbar__items" },
                t._l(t.links, function(e) {
                  return s("div", { key: e.name }, [
                    t.isLoggedIn == e.requiresLogin || e.alwaysShow
                      ? s(
                          "li",
                          {
                            class: t.getActive(t.$route.name),
                            on: {
                              click: function(s) {
                                return t.onClick(e.name);
                              },
                            },
                          },
                          [
                            s(
                              "router-link",
                              {
                                staticClass: "upper-navbar__link uppercase",
                                attrs: { to: e.to },
                              },
                              [t._v(t._s(e.title))]
                            ),
                          ],
                          1
                        )
                      : t._e(),
                  ]);
                }),
                0
              ),
            ],
            1
          ),
          s("nav", { ref: "nav", staticClass: "side-navbar" }, [
            s(
              "ul",
              t._l(t.links, function(e) {
                return s("div", { key: e.name }, [
                  t.isLoggedIn == e.requiresLogin || e.alwaysShow
                    ? s(
                        "li",
                        {
                          on: {
                            click: function(s) {
                              t.toggleNav(), t.onClick(e.name);
                            },
                          },
                        },
                        [
                          s(
                            "router-link",
                            {
                              staticClass: "upper-navbar__link",
                              attrs: { to: e.to },
                            },
                            [t._v(t._s(e.title))]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ]);
              }),
              0
            ),
          ]),
        ]);
      },
      r = [],
      l = s("8aa8");
    const c = [
      {
        title: "Browse",
        name: "browse",
        to: "/browse",
        requiresLogin: !1,
        alwaysShow: !0,
      },
      {
        title: "Host",
        name: "host",
        to: "/host",
        requiresLogin: !1,
        alwaysShow: !0,
      },
      {
        title: "Saved items",
        name: "saved",
        to: "/saved",
        requiresLogin: !0,
        alwaysShow: !0,
      },
      {
        title: "Login/Sign up",
        name: "login",
        to: "/login",
        requiresLogin: !1,
        alwaysShow: !1,
      },
      {
        title: "Account",
        name: "account",
        to: "/account",
        requiresLogin: !0,
        alwaysShow: !1,
      },
      {
        title: "Log out",
        name: "logout",
        to: "/",
        requiresLogin: !0,
        alwaysShow: !1,
      },
    ];
    var d = {
        name: "Navigation",
        components: { MenuIcon: l["a"] },
        data() {
          return { links: c };
        },
        computed: {
          isLoggedIn: function() {
            return !!this.$store.getters.token;
          },
        },
        methods: {
          toggleNav() {
            const t = this.$refs.nav.classList;
            t.contains("active") ? t.remove("active") : t.add("active");
          },
          getActive(t) {
            switch (t) {
              case "saved":
                return "text-gray";
            }
          },
          onClick(t) {
            switch (t) {
              case "logout":
                this.logout();
                break;
              case "about":
                this.scrollTo();
                break;
              default:
                return;
            }
          },
          async logout() {
            await this.$store.dispatch("logout");
          },
          scrollTo() {
            if ("/#about" === this.$route.fullPath) {
              let t = document.getElementById("about"),
                e = t.offsetTop;
              window.scrollTo(0, e - 100);
            }
          },
        },
      },
      u = d,
      m = s("2877"),
      p = Object(m["a"])(u, o, r, !1, null, null, null),
      v = p.exports,
      f = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "bg-white" }, [
          s("div", { staticClass: "flex justify-center h-full pt-4" }, [
            s(
              "div",
              { staticClass: "h-full w-full flex items-center justify-around" },
              [
                s(
                  "div",
                  { staticClass: "h-full pl-2 flex flex-col items-center" },
                  [
                    s("router-link", { attrs: { to: "/privacy" } }, [
                      s("div", { staticClass: "underline xxs:text-sm" }, [
                        t._v("Privacy"),
                      ]),
                    ]),
                  ],
                  1
                ),
                s(
                  "div",
                  { staticClass: "h-full flex flex-col items-center px-2" },
                  [
                    t._m(0),
                    s(
                      "div",
                      { staticClass: "flex items-center justify-center pt-1" },
                      [
                        s(
                          "a",
                          {
                            staticClass: "underline xxs:text-sm text-gray-600 ",
                            attrs: {
                              href: "https://twitter.com/Pop_Marketplace",
                            },
                          },
                          [
                            s("Twitter", {
                              staticClass: "icon",
                              attrs: { size: 20 },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                ),
                s(
                  "div",
                  { staticClass: "h-full pr-2 flex flex-col items-center" },
                  [
                    s("router-link", { attrs: { to: "/contact" } }, [
                      s("div", { staticClass: "underline xxs:text-sm" }, [
                        t._v("Contact Us"),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]
            ),
          ]),
        ]);
      },
      g = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "flex items-center" }, [
            s("div", [t._v("©")]),
            s("div", { staticClass: "xxs:text-sm text-center" }, [
              t._v("Pop Marketplace"),
            ]),
          ]);
        },
      ],
      h = s("e792"),
      _ = { name: "Footer", components: { Twitter: h["a"] } },
      b = _,
      w = Object(m["a"])(b, f, g, !1, null, null, null),
      y = w.exports,
      x = { name: "App", components: { Navigation: v, Footer: y } },
      C = x,
      k = (s("5c0b"), Object(m["a"])(C, a, n, !1, null, null, null)),
      j = k.exports,
      E = s("8c4f"),
      P = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "fade-in-scroll flex flex-col items-center justify-center my-10 mt-20 xs:mt-0 h-4/6 xs:h-full xs:mt-5",
          },
          [
            s(
              "div",
              {
                staticClass:
                  "home__main bg-white flex flex-col items-center mb-10",
              },
              [
                s(
                  "div",
                  {
                    staticClass:
                      "home__title flex flex-col items-center pt-20 xs:pt-10",
                  },
                  [
                    s("div", { staticClass: "text-8xl text-center title" }, [
                      t._v("Your Local Marketplace"),
                    ]),
                    s(
                      "div",
                      {
                        staticClass:
                          "text-2xl text-center px-2 my-5 xs:my-0 sm:text-lg xs:text-base",
                      },
                      [t._v(" Discover new brands & support small businesses ")]
                    ),
                    s("router-link", { attrs: { to: "/browse" } }, [
                      s(
                        "button",
                        {
                          staticClass:
                            "bg-black text-white text-xl hover:bg-gray-200 hover:text-black p-2 px-6 uppercase xs:text-xs",
                        },
                        [t._v(" Browse now ")]
                      ),
                    ]),
                  ],
                  1
                ),
              ]
            ),
          ]
        );
      },
      S = [],
      L = { name: "Home" },
      N = L,
      I = Object(m["a"])(N, P, S, !1, null, null, null),
      T = I.exports,
      D = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "bg-white w-full" },
          [
            s("BrowseNav", {
              staticClass: "z-10",
              on: { getItems: t.getItems },
            }),
            s(
              "div",
              { staticClass: "flex flex-col items-center mt-24" },
              [
                t.isLoading ? s("Loader") : t._e(),
                t.isLoading
                  ? t._e()
                  : s(
                      "div",
                      { staticClass: "browse__items fade-in" },
                      t._l(t.items, function(e) {
                        return s(
                          "div",
                          {
                            key: e._id,
                            staticClass: "browse__item fade-in\\ z-0",
                          },
                          [
                            s(
                              "router-link",
                              { attrs: { to: "/item/" + e._id } },
                              [
                                s("img", {
                                  staticClass: "browse__item-thumbnail",
                                  attrs: {
                                    src:
                                      "data:image/jpeg;base64," +
                                      e.images[0].buffer,
                                  },
                                }),
                              ]
                            ),
                            s(
                              "div",
                              { staticClass: "browse__item-details" },
                              [
                                s("div", [
                                  s("div", [t._v(t._s(e.name))]),
                                  s("div", [t._v("£" + t._s(e.unitPrice))]),
                                ]),
                                s("SaveIcon", {
                                  staticClass: "pt-1",
                                  attrs: { isSaved: e.isSaved },
                                  nativeOn: {
                                    click: function(s) {
                                      return t.updateSavedItems(e._id);
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                t.isLoading || 0 != t.items.length
                  ? t._e()
                  : s("div", [t._v("No items to display")]),
              ],
              1
            ),
          ],
          1
        );
      },
      $ = [],
      A = s("bc3a"),
      O = s.n(A),
      M = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "bg-accent-dark fixed w-full mt-6 xs:mt-0" },
          [
            s("Map"),
            s("div", { staticClass: "browse-nav" }, [
              s("div", { staticClass: "flex" }, [
                s(
                  "button",
                  { staticClass: "map-marker pr-2" },
                  [
                    s("MapMarker", {
                      staticClass: "text-accent-light",
                      on: {
                        click: function(e) {
                          return t.$modal.show("mapModal");
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
              s(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.sortCriterion,
                      expression: "sortCriterion",
                    },
                  ],
                  staticClass: "filter dropdown ",
                  on: {
                    change: [
                      function(e) {
                        var s = Array.prototype.filter
                          .call(e.target.options, function(t) {
                            return t.selected;
                          })
                          .map(function(t) {
                            var e = "_value" in t ? t._value : t.value;
                            return e;
                          });
                        t.sortCriterion = e.target.multiple ? s : s[0];
                      },
                      t.onChange,
                    ],
                  },
                },
                [
                  s("option", { attrs: { value: "", disabled: "" } }, [
                    t._v("Sort by..."),
                  ]),
                  s("option", { attrs: { value: "0" } }, [
                    t._v("Nearest first"),
                  ]),
                  s("option", { attrs: { value: "1" } }, [
                    t._v("Recently added"),
                  ]),
                  s("option", { attrs: { value: "2" } }, [t._v("Price")]),
                ]
              ),
            ]),
          ],
          1
        );
      },
      q = [],
      z = s("6484"),
      B = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "modal",
          {
            attrs: {
              name: "mapModal",
              clickToClose: !0,
              adaptive: !0,
              scrollable: !0,
              height: 700,
            },
          },
          [
            s(
              "div",
              { staticClass: "flex flex-col items-center" },
              [
                s(
                  "div",
                  { staticClass: "w-full flex justify-between items-center" },
                  [
                    s("h2", { staticClass: "text-3xl pl-4 py-2" }, [
                      t._v("Find stores"),
                    ]),
                    s("Close", {
                      staticClass: "pr-4 cursor-pointer",
                      on: {
                        click: function(e) {
                          return t.$modal.hide("mapModal");
                        },
                      },
                    }),
                  ],
                  1
                ),
                s(
                  "GmapMap",
                  {
                    staticClass: "map",
                    attrs: {
                      center: {
                        lat: t.currentPosition.lat,
                        lng: t.currentPosition.lng,
                      },
                      zoom: 8,
                      "map-type-id": "terrain",
                    },
                  },
                  [
                    s("GmapMarker", {
                      attrs: {
                        position: t.currentPosition,
                        clickable: !0,
                        icon:
                          "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                      },
                      on: {
                        click: function(e) {
                          t.center = t.currentPosition;
                        },
                      },
                    }),
                    t._l(t.stores, function(e) {
                      return s(
                        "div",
                        { key: e._id },
                        [
                          s("GmapMarker", {
                            attrs: {
                              position: e.position,
                              clickable: !0,
                              icon:
                                "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",
                            },
                            on: {
                              click: function(s) {
                                return t.viewStore(e);
                              },
                            },
                          }),
                        ],
                        1
                      );
                    }),
                  ],
                  2
                ),
                s("p", { staticClass: "pt-2" }, [
                  t._v("Click a pin to view a store's details"),
                ]),
                s(
                  "div",
                  { staticClass: "flex justify-between w-full px-10" },
                  [
                    s("div", { staticClass: "flex flex-col" }, [
                      s("div", { staticClass: "text-xl" }, [
                        t._v(" " + t._s(t.previewingStore.name) + " "),
                      ]),
                      s("div", { staticClass: "flex flex-col" }, [
                        t.previewingStore.addressLine1
                          ? s("div", [
                              t._v(
                                " " +
                                  t._s(t.previewingStore.addressLine1) +
                                  ", "
                              ),
                            ])
                          : t._e(),
                        t.previewingStore.addressLine2
                          ? s("div", [
                              t._v(
                                " " +
                                  t._s(t.previewingStore.addressLine2) +
                                  ", "
                              ),
                            ])
                          : t._e(),
                        t.previewingStore.city
                          ? s("div", [t._v(t._s(t.previewingStore.city) + ",")])
                          : t._e(),
                        t.previewingStore.postcode
                          ? s("div", [
                              t._v(
                                " " + t._s(t.previewingStore.postcode) + " "
                              ),
                            ])
                          : t._e(),
                        s(
                          "a",
                          {
                            staticClass: "pt-5 underline",
                            attrs: { href: t.previewingStore.website },
                          },
                          [t._v(" " + t._s(t.previewingStore.website) + " ")]
                        ),
                      ]),
                    ]),
                    t.previewingStore.name
                      ? s(
                          "router-link",
                          {
                            staticClass: "underline",
                            attrs: { to: "/store/" + t.previewingStore._id },
                          },
                          [t._v(" View Store ")]
                        )
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            ),
          ]
        );
      },
      Q = [],
      R = s("7eb5"),
      Y = {
        name: "Map",
        components: { Close: R["a"] },
        data() {
          return {
            currentPosition: { lat: 0, lng: 0 },
            stores: [],
            previewingStore: {
              name: "",
              addressLine1: "",
              addressLine2: "",
              city: "",
              postcode: "",
            },
          };
        },
        async created() {
          this.getStores();
        },
        methods: {
          async getStores() {
            const { data: t } = await O.a.get("stores"),
              e = (t) => this.stores.push(t),
              s = await this.$getLocation({});
            (this.currentPosition = s),
              t.forEach((t) => {
                const s = {
                  address_line_1: t.addressLine1,
                  address_line_2: t.addressLine2,
                  city: t.city,
                  postal_code: t.postcode,
                };
                this.$geocoder.send(s, async (s) => {
                  const i = s.results[0].geometry.location;
                  e({ ...t, position: i });
                });
              });
          },
          viewStore(t) {
            this.previewingStore = t;
          },
        },
      },
      F = Y,
      H = Object(m["a"])(F, B, Q, !1, null, null, null),
      U = H.exports,
      G = {
        name: "BrowseNav",
        components: { MapMarker: z["a"], Map: U },
        data() {
          return { sortCriterion: 0, searchTerm: "" };
        },
        methods: {
          onChange() {
            this.$emit("getItems", this.sortCriterion);
          },
        },
      },
      W = G,
      V = Object(m["a"])(W, M, q, !1, null, null, null),
      J = V.exports,
      K = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "browse__heart-icon" },
          [t.isSaved ? s("HeartFilled") : s("HeartOutline")],
          1
        );
      },
      X = [],
      Z = s("4f97"),
      tt = s("3a9d"),
      et = {
        name: "SaveIcon",
        props: ["isSaved"],
        components: { HeartOutline: Z["a"], HeartFilled: tt["a"] },
      },
      st = et,
      it = Object(m["a"])(st, K, X, !1, null, null, null),
      at = it.exports,
      nt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      ot = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "lds-ring" }, [
            s("div"),
            s("div"),
            s("div"),
            s("div"),
          ]);
        },
      ],
      rt = { name: "Loader" },
      lt = rt,
      ct = Object(m["a"])(lt, nt, ot, !1, null, null, null),
      dt = ct.exports,
      ut = s("2f62");
    const mt = {
        setToken(t, e) {
          t.token = e;
        },
      },
      pt = {
        async login({ commit: t }, { user: e, isRegister: s }) {
          try {
            const {
              data: { token: i },
            } = s
              ? await O.a.post("account/register", e)
              : await O.a.post("account/login", e);
            i &&
              (t("setToken", i),
              localStorage.setItem("token", i, "7d"),
              We.push("/browse"),
              (O.a.defaults.headers.common["Authorization"] = i));
          } catch {
            t("setToken", null), localStorage.removeItem("token");
          }
        },
        logout({ commit: t }) {
          t("setToken", null),
            localStorage.removeItem("token"),
            We.push("/login"),
            delete O.a.defaults.headers.common["Authorization"];
        },
      };
    i["a"].use(ut["a"]);
    var vt = new ut["a"].Store({
      state: { token: localStorage.getItem("token") },
      mutations: { ...mt },
      actions: { ...pt },
      getters: { token: (t) => t.token },
    });
    async function ft() {
      let t;
      try {
        const { data: e } = await O.a.get("individual");
        t = e;
      } catch {
        vt.dispatch("logout");
      }
      return t;
    }
    var gt = {
        name: "Browse",
        components: { BrowseNav: J, SaveIcon: at, Loader: dt },
        computed: {
          isLoggedIn: function() {
            return !!this.$store.getters.token;
          },
        },
        data() {
          return { isLoading: !0, individual: {}, items: [] };
        },
        async mounted() {
          this.isLoggedIn && (this.individual = await ft());
          const t = 1;
          this.getItems(t);
        },
        methods: {
          async getItems(t) {
            this.isLoading = !0;
            const { lat: e, lng: s } = await this.$getLocation({}),
              { data: i } = await O.a.get(
                `items?latitude=${e}&longitude=${s}&sortCriterion=${t}`
              );
            this.isLoggedIn
              ? (this.items = this.markSaved(i))
              : (this.items = i),
              (this.isLoading = !1);
          },
          markSaved(t) {
            const e = this.individual.savedItems;
            return t.map((t) => ({
              ...t,
              isSaved: e.some((e) => e === t._id),
            }));
          },
          async updateSavedItems(t) {
            try {
              await O.a.put("individual", { itemId: t }), this.toggleSaved(t);
            } catch (e) {
              console.log(e);
            }
          },
          toggleSaved(t) {
            this.items = this.items.map((e) =>
              e._id === t ? { ...e, isSaved: !e.isSaved } : e
            );
          },
        },
      },
      ht = gt,
      _t = Object(m["a"])(ht, D, $, !1, null, null, null),
      bt = _t.exports,
      wt = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "bg-white w-full mt-10 my-4 xs:mt-5" }, [
          s("h2", { staticClass: "text-3xl text-center py-3" }, [
            t._v("Saved Items"),
          ]),
          s("hr", { staticClass: "w-full" }),
          s(
            "div",
            { staticClass: "flex justify-center" },
            [
              t.isLoading ? s("Loader") : t._e(),
              t.isLoading
                ? t._e()
                : s(
                    "div",
                    { staticClass: "browse__items fade-in" },
                    t._l(t.items, function(e) {
                      return s(
                        "div",
                        { key: e._id, staticClass: "browse__item" },
                        [
                          s(
                            "router-link",
                            { attrs: { to: "/item/" + e._id } },
                            [
                              s("img", {
                                staticClass: "browse__item-thumbnail",
                                attrs: {
                                  src:
                                    "data:image/jpeg;base64," +
                                    e.images[0].buffer,
                                },
                              }),
                            ]
                          ),
                          s(
                            "div",
                            { staticClass: "browse__item-details" },
                            [
                              s("div", [
                                s("div", [t._v(t._s(e.name))]),
                                s("div", [t._v("£" + t._s(e.unitPrice))]),
                              ]),
                              s("SaveIcon", {
                                staticClass: "pt-1",
                                attrs: { isSaved: e.isSaved },
                                nativeOn: {
                                  click: function(s) {
                                    return t.toggleSaved(e._id);
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    0
                  ),
            ],
            1
          ),
        ]);
      },
      yt = [],
      xt = {
        name: "SavedItems",
        components: { Loader: dt, SaveIcon: at },
        data() {
          return { isLoading: !0, individual: {}, items: [] };
        },
        async mounted() {
          (this.individual = await ft()), this.getSavedItems();
        },
        methods: {
          async getSavedItems() {
            try {
              const { data: t } = await O.a.get("individual/saved-items");
              (this.items = t.map((t) => ({ ...t, isSaved: !0 }))),
                (this.isLoading = !1);
            } catch (t) {
              console.log(t);
            }
          },
          toggleSaved(t) {
            (this.items = this.items.map((e) =>
              e._id === t ? { ...e, isSaved: !e.isSaved } : e
            )),
              this.updateSavedItems(t);
          },
          async updateSavedItems(t) {
            try {
              await O.a.put("individual", { itemId: t });
            } catch (e) {
              console.log(e);
            }
          },
        },
      },
      Ct = xt,
      kt = Object(m["a"])(Ct, wt, yt, !1, null, null, null),
      jt = kt.exports,
      Et = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "fade-in flex justify-center mt-10" }, [
          s("div", [
            s(
              "form",
              {
                staticClass: "basic-form",
                on: {
                  submit: function(e) {
                    return e.preventDefault(), t.submit(e);
                  },
                },
              },
              [
                s("div", { staticClass: "basic-form__heading" }, [
                  t._v("Contact Us"),
                ]),
                s("div", { staticClass: "basic-form__input-ctn--large" }, [
                  s("label", { attrs: { for: "name" } }, [
                    t._v(" First name "),
                  ]),
                  s("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.firstName,
                        expression: "firstName",
                      },
                    ],
                    attrs: { type: "text", name: "firstName" },
                    domProps: { value: t.firstName },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.firstName = e.target.value);
                      },
                    },
                  }),
                ]),
                s("div", { staticClass: "basic-form__input-ctn--large" }, [
                  s("label", { attrs: { for: "name" } }, [t._v(" Last name ")]),
                  s("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.lastName,
                        expression: "lastName",
                      },
                    ],
                    attrs: { type: "text", name: "lastName" },
                    domProps: { value: t.lastName },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.lastName = e.target.value);
                      },
                    },
                  }),
                ]),
                s("div", { staticClass: "basic-form__input-ctn--large" }, [
                  s("label", { attrs: { for: "name" } }, [t._v(" Email ")]),
                  s("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email",
                      },
                    ],
                    attrs: { type: "text", name: "email" },
                    domProps: { value: t.email },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.email = e.target.value);
                      },
                    },
                  }),
                ]),
                s("div", { staticClass: "basic-form__input-ctn--large" }, [
                  s("label", { attrs: { for: "name" } }, [t._v(" Message ")]),
                  s("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.message,
                        expression: "message",
                      },
                    ],
                    attrs: { type: "text", name: "message" },
                    domProps: { value: t.message },
                    on: {
                      input: function(e) {
                        e.target.composing || (t.message = e.target.value);
                      },
                    },
                  }),
                ]),
                s(
                  "button",
                  { staticClass: "square-btn", attrs: { type: "submit" } },
                  [t._v("Submit")]
                ),
                t.success
                  ? s("div", { staticClass: "basic-form--success" }, [
                      t._v(
                        " Thanks, we will try to get back to you within 24 hours! "
                      ),
                    ])
                  : t._e(),
              ]
            ),
          ]),
        ]);
      },
      Pt = [],
      St = {
        name: "ContactUs",
        data() {
          return {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            success: null,
          };
        },
        methods: {
          async submit() {
            try {
              await O.a.post("contact", {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                message: this.message,
              }),
                (this.success = !0),
                (this.firstName = ""),
                (this.lastName = ""),
                (this.email = ""),
                (this.message = "");
            } catch (t) {
              console.log(t);
            }
          },
        },
      },
      Lt = St,
      Nt = Object(m["a"])(Lt, Et, Pt, !1, null, null, null),
      It = Nt.exports,
      Tt = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "fade-in flex justify-center mt-5 pt-5" },
          [
            s("div", [
              s(
                "form",
                {
                  staticClass: "basic-form",
                  on: {
                    submit: function(e) {
                      return e.preventDefault(), t.login(e);
                    },
                  },
                },
                [
                  s("div", { staticClass: "basic-form__heading" }, [
                    t._v(" Welcome back! "),
                  ]),
                  s("hr"),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "email" } }, [t._v(" Email ")]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.email,
                          expression: "email",
                        },
                      ],
                      attrs: { type: "email", name: "email", required: "" },
                      domProps: { value: t.email },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.email = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "password" } }, [
                      t._v(" Password "),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.password,
                          expression: "password",
                        },
                      ],
                      attrs: {
                        type: "password",
                        name: "password",
                        required: "",
                      },
                      domProps: { value: t.password },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.password = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s(
                    "div",
                    {
                      staticClass:
                        "w-full flex flex-col items-center justify-around",
                    },
                    [
                      s(
                        "button",
                        {
                          staticClass: "square-btn",
                          attrs: { type: "submit" },
                        },
                        [t._v("Login")]
                      ),
                      s("router-link", { attrs: { to: "/sign-up" } }, [
                        t._v("Don't have an account?"),
                      ]),
                    ],
                    1
                  ),
                  t.error
                    ? s("div", { staticClass: "mt-5 text-red-700" }, [
                        t._v(" Your email or password is incorrect "),
                      ])
                    : t._e(),
                ]
              ),
            ]),
          ]
        );
      },
      Dt = [],
      $t = {
        name: "Login",
        data() {
          return { email: "", password: "", error: !1 };
        },
        methods: {
          async login() {
            const t = { email: this.email, password: this.password };
            await this.$store.dispatch("login", { user: t, isRegister: !1 }),
              (this.error = !this.$store.getters.token);
          },
        },
      },
      At = $t,
      Ot = Object(m["a"])(At, Tt, Dt, !1, null, null, null),
      Mt = Ot.exports,
      qt = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "bg-white w-full mt-10 my-4 flex flex-col items-center xs:mt-5",
          },
          [
            s("StoreNew"),
            s("h2", { staticClass: "text-3xl text-center py-3" }, [
              t._v("My Stores"),
            ]),
            s("hr", { staticClass: "w-full" }),
            t.isLoading
              ? s("Loader")
              : s(
                  "div",
                  { staticClass: "flex flex-col items-center mb-10 w-full" },
                  [
                    s("p", { staticClass: "pt-3" }, [
                      t._v(
                        " Only approved stores/items will be visible to the public. "
                      ),
                    ]),
                    s(
                      "div",
                      {
                        staticClass:
                          "fade-in flex justify-center flex-wrap w-1/2",
                      },
                      t._l(t.stores, function(e) {
                        return s(
                          "div",
                          {
                            key: e.id,
                            staticClass: "flex flex-col items-center",
                          },
                          [
                            s(
                              "div",
                              {
                                staticClass:
                                  "bg-white flex p-5 mx-5 mt-5 justify-center cursor-pointer border border-gray-700 w-40 text-center shadow-md hover:bg-gray-100",
                              },
                              [
                                s(
                                  "router-link",
                                  {
                                    attrs: { tag: "p", to: "/store/" + e._id },
                                  },
                                  [
                                    s("p", [t._v(t._s(e.name))]),
                                    s(
                                      "p",
                                      {
                                        staticClass:
                                          "italic text-accent-medium",
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              "approved" == e.status
                                                ? "Approved"
                                                : "Pending approval"
                                            ) +
                                            " "
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            s("CloseOutline", {
                              staticClass:
                                "underline text-accent-medium mt-2 mb-5 cursor-pointer",
                              on: {
                                click: function(s) {
                                  return t.deleteStore(e._id);
                                },
                              },
                            }),
                          ],
                          1
                        );
                      }),
                      0
                    ),
                    s(
                      "button",
                      {
                        staticClass: "square-btn",
                        on: {
                          click: function(e) {
                            return t.$modal.show("newStoreModal");
                          },
                        },
                      },
                      [t._v(" Add ")]
                    ),
                  ]
                ),
          ],
          1
        );
      },
      zt = [],
      Bt = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "modal",
          {
            attrs: {
              name: "newStoreModal",
              clickToClose: !1,
              adaptive: !0,
              scrollable: !0,
              height: 700,
            },
          },
          [
            s("div", { staticClass: "flex justify-center pt-5" }, [
              s("div", [
                s(
                  "form",
                  {
                    staticClass: "basic-form",
                    on: {
                      submit: function(e) {
                        return e.preventDefault(), t.addStore(e);
                      },
                    },
                  },
                  [
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.name,
                          expression: "name",
                        },
                      ],
                      staticClass: "add__heading-input",
                      attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Store name",
                      },
                      domProps: { value: t.name },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.name = e.target.value);
                        },
                      },
                    }),
                    s("div", { staticClass: "basic-form__input-ctn--large " }, [
                      s("label", { attrs: { for: "addressLine1" } }, [
                        t._v(" Address Line 1 "),
                      ]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.addressLine1,
                            expression: "addressLine1",
                          },
                        ],
                        attrs: { type: "text", name: "addressLine1" },
                        domProps: { value: t.addressLine1 },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.addressLine1 = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "basic-form__input-ctn--large " }, [
                      s("label", { attrs: { for: "addressLine2" } }, [
                        t._v(" Address Line 2 "),
                      ]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.addressLine2,
                            expression: "addressLine2",
                          },
                        ],
                        attrs: { type: "text", name: "addressLine2" },
                        domProps: { value: t.addressLine2 },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.addressLine2 = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "basic-form__input-ctn--large " }, [
                      s("label", { attrs: { for: "postcode" } }, [
                        t._v(" Postcode "),
                      ]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.postcode,
                            expression: "postcode",
                          },
                        ],
                        attrs: { type: "text", name: "postcode" },
                        domProps: { value: t.postcode },
                        on: {
                          input: function(e) {
                            e.target.composing || (t.postcode = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "basic-form__input-ctn--large " }, [
                      s("label", { attrs: { for: "city" } }, [t._v(" City ")]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.city,
                            expression: "city",
                          },
                        ],
                        attrs: { type: "city", name: "city" },
                        domProps: { value: t.city },
                        on: {
                          input: function(e) {
                            e.target.composing || (t.city = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "basic-form__input-ctn--large " }, [
                      s("label", { attrs: { for: "website" } }, [
                        t._v(" Website "),
                      ]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.website,
                            expression: "website",
                          },
                        ],
                        attrs: { type: "website", name: "website" },
                        domProps: { value: t.website },
                        on: {
                          input: function(e) {
                            e.target.composing || (t.website = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "basic-form__input-ctn--large " }, [
                      s("label", { attrs: { for: "description" } }, [
                        t._v(" Description "),
                      ]),
                      s("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.description,
                            expression: "description",
                          },
                        ],
                        attrs: { type: "text", name: "description" },
                        domProps: { value: t.description },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.description = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "add__buttons-ctn" }, [
                      s(
                        "button",
                        {
                          staticClass: "square-btn",
                          attrs: { type: "submit" },
                        },
                        [t._v(" Submit for approval ")]
                      ),
                      s(
                        "button",
                        {
                          staticClass: "square-btn",
                          on: {
                            click: function(e) {
                              return t.$modal.hide("newStoreModal");
                            },
                          },
                        },
                        [t._v(" Cancel ")]
                      ),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]
        );
      },
      Qt = [],
      Rt = {
        name: "StoreNew",
        data() {
          return {
            individual: {},
            name: "",
            description: "",
            addressLine1: "",
            addressLine2: "",
            postcode: "",
            city: "",
            website: "",
          };
        },
        async mounted() {
          this.individual = await ft();
        },
        methods: {
          async addStore() {
            let t = {
              name: this.name,
              description: this.description,
              addressLine1: this.addressLine1,
              addressLine2: this.addressLine2,
              postcode: this.postcode,
              city: this.city,
              website: this.website,
            };
            const e = {
              address_line_1: this.addressLine1,
              address_line_2: this.addressLine2,
              city: this.city,
              postal_code: this.postcode,
            };
            this.$geocoder.send(e, async (e) => {
              const s = e.results[0].geometry.location;
              t.position = s;
              try {
                const { data: e } = await O.a.post("stores", t);
                this.$router.push("/store/" + e._id);
              } catch (i) {
                console.log(i);
              }
            });
          },
        },
      },
      Yt = Rt,
      Ft = Object(m["a"])(Yt, Bt, Qt, !1, null, null, null),
      Ht = Ft.exports,
      Ut = s("5961"),
      Gt = {
        name: "Host",
        data() {
          return { individual: {}, stores: [], isLoading: null };
        },
        components: { Loader: dt, StoreNew: Ht, CloseOutline: Ut["a"] },
        async mounted() {
          (this.isLoading = !0),
            (this.individual = await ft()),
            this.getStores();
        },
        methods: {
          async getStores() {
            try {
              const { data: t } = await O.a.get(
                "stores?userId=" + this.individual._id
              );
              (this.stores = t), (this.isLoading = !1);
            } catch (t) {
              console.log(t);
            }
          },
          async deleteStore(t) {
            if (window.confirm("Are you sure you want to delete this store?"))
              try {
                await O.a.delete("stores/" + t), this.getStores();
              } catch (e) {
                console.log(e);
              }
          },
        },
      },
      Wt = Gt,
      Vt = Object(m["a"])(Wt, qt, zt, !1, null, null, null),
      Jt = Vt.exports,
      Kt = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "flex justify-center my-10 xs:w-full" },
          [
            s(
              "div",
              {
                staticClass:
                  "flex justify-center bg-white w-5/6 xs:w-full xs:my-1",
              },
              [
                t.error
                  ? s("div", { staticClass: "pt-5" }, [t._v("Store not found")])
                  : t._e(),
                t.individual._id
                  ? s("NewItemModal", { on: { getItems: t.getItems } })
                  : t._e(),
                t.isLoading ? s("Loader") : t._e(),
                t.isLoading || t.error
                  ? t._e()
                  : s("div", { staticClass: "store__details fade-in" }, [
                      s(
                        "div",
                        {
                          staticClass:
                            "flex justify-between items-center w-full",
                        },
                        [
                          t.isEditingName
                            ? s(
                                "form",
                                {
                                  on: {
                                    submit: function(e) {
                                      return (
                                        e.preventDefault(),
                                        t.putStore(t.store, "isEditingName")
                                      );
                                    },
                                  },
                                },
                                [
                                  s("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.store.name,
                                        expression: "store.name",
                                      },
                                    ],
                                    staticClass:
                                      "border border-accent-dark pl-4",
                                    domProps: { value: t.store.name },
                                    on: {
                                      input: function(e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.store,
                                            "name",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                ]
                              )
                            : s("div", { staticClass: "flex items-center" }, [
                                s("h2", { staticClass: "text-2xl py-3" }, [
                                  t._v(" " + t._s(t.store.name) + " "),
                                ]),
                                t.isAbleToEdit
                                  ? s(
                                      "div",
                                      {
                                        staticClass: "text-accent-medium pl-5",
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(
                                              "approved" === t.store.status
                                                ? "Approved"
                                                : "Pending approval"
                                            ) +
                                            " "
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]),
                          t.isAbleToEdit
                            ? s("EditButton", {
                                attrs: {
                                  document: t.store,
                                  fields: ["name"],
                                  fieldName: "isEditingName",
                                  isEditing: t.isEditingName,
                                },
                                on: {
                                  "update:isEditing": function(e) {
                                    t.isEditingName = e;
                                  },
                                  "update:is-editing": function(e) {
                                    t.isEditingName = e;
                                  },
                                  callback: t.putStore,
                                  toggleEdit: t.toggleEdit,
                                },
                              })
                            : t._e(),
                        ],
                        1
                      ),
                      s("hr", { staticClass: "w-full" }),
                      s(
                        "div",
                        {
                          staticClass:
                            "flex flex-col justify-start w-full mb-5",
                        },
                        [
                          s(
                            "div",
                            { staticClass: "flex justify-between" },
                            [
                              s("h4", { staticClass: "text-xl" }, [
                                t._v("Description"),
                              ]),
                              t.isAbleToEdit
                                ? s("EditButton", {
                                    attrs: {
                                      document: t.store,
                                      fields: ["description"],
                                      fieldName: "isEditingDescription",
                                      isEditing: t.isEditingDescription,
                                    },
                                    on: {
                                      "update:isEditing": function(e) {
                                        t.isEditingDescription = e;
                                      },
                                      "update:is-editing": function(e) {
                                        t.isEditingDescription = e;
                                      },
                                      callback: t.putStore,
                                      toggleEdit: t.toggleEdit,
                                    },
                                  })
                                : t._e(),
                            ],
                            1
                          ),
                          t.isEditingDescription
                            ? s("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.store.description,
                                    expression: "store.description",
                                  },
                                ],
                                staticClass:
                                  "border border-accent-dark pl-4 w-full",
                                domProps: { value: t.store.description },
                                on: {
                                  input: function(e) {
                                    e.target.composing ||
                                      t.$set(
                                        t.store,
                                        "description",
                                        e.target.value
                                      );
                                  },
                                },
                              })
                            : s("p", [t._v(t._s(t.store.description))]),
                        ]
                      ),
                      s("hr", { staticClass: "w-full" }),
                      s(
                        "div",
                        {
                          staticClass:
                            "flex flex-col justify-start w-full mb-5",
                        },
                        [
                          s(
                            "div",
                            { staticClass: "flex justify-between" },
                            [
                              s("h4", { staticClass: "text-xl" }, [
                                t._v("Location"),
                              ]),
                              t.isAbleToEdit
                                ? s("EditButton", {
                                    attrs: {
                                      document: t.store,
                                      fields: [
                                        "addressLine1",
                                        "addressLine2",
                                        "postcode",
                                        "city",
                                      ],
                                      fieldName: "isEditingLocation",
                                      isEditing: t.isEditingLocation,
                                    },
                                    on: {
                                      "update:isEditing": function(e) {
                                        t.isEditingLocation = e;
                                      },
                                      "update:is-editing": function(e) {
                                        t.isEditingLocation = e;
                                      },
                                      callback: t.putStore,
                                      toggleEdit: t.toggleEdit,
                                    },
                                  })
                                : t._e(),
                            ],
                            1
                          ),
                          t.isEditingLocation
                            ? s("div", { staticClass: "flex flex-col" }, [
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.store.addressLine1,
                                      expression: "store.addressLine1",
                                    },
                                  ],
                                  staticClass: "border border-accent-dark pl-4",
                                  domProps: { value: t.store.addressLine1 },
                                  on: {
                                    input: function(e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.store,
                                          "addressLine1",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.store.addressLine2,
                                      expression: "store.addressLine2",
                                    },
                                  ],
                                  staticClass: "border border-accent-dark pl-4",
                                  domProps: { value: t.store.addressLine2 },
                                  on: {
                                    input: function(e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.store,
                                          "addressLine2",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.store.postcode,
                                      expression: "store.postcode",
                                    },
                                  ],
                                  staticClass: "border border-accent-dark pl-4",
                                  domProps: { value: t.store.postcode },
                                  on: {
                                    input: function(e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.store,
                                          "postcode",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.store.city,
                                      expression: "store.city",
                                    },
                                  ],
                                  staticClass: "border border-accent-dark pl-4",
                                  domProps: { value: t.store.city },
                                  on: {
                                    input: function(e) {
                                      e.target.composing ||
                                        t.$set(t.store, "city", e.target.value);
                                    },
                                  },
                                }),
                              ])
                            : s("div", [
                                t.store.addressLine1
                                  ? s("p", [
                                      t._v(t._s(t.store.addressLine1) + ","),
                                    ])
                                  : t._e(),
                                t.store.addressLine2 && !t.isEditingLocation
                                  ? s("p", [
                                      t._v(
                                        " " + t._s(t.store.addressLine2) + ", "
                                      ),
                                    ])
                                  : t._e(),
                                t.store.postcode
                                  ? s("p", [t._v(t._s(t.store.postcode) + ",")])
                                  : t._e(),
                                t.store.city
                                  ? s("p", [t._v(t._s(t.store.city))])
                                  : t._e(),
                              ]),
                        ]
                      ),
                      s("hr", { staticClass: "w-full" }),
                      s(
                        "div",
                        {
                          staticClass:
                            "flex flex-col justify-start w-full mb-5",
                        },
                        [
                          s("div", { staticClass: "flex justify-between" }, [
                            s("h4", { staticClass: "text-xl" }, [
                              t._v("Dates"),
                            ]),
                            !t.isNewDateActive && t.isAbleToEdit
                              ? s(
                                  "button",
                                  {
                                    staticClass: "underline text-accent-dark",
                                    on: { click: t.toggleNewDate },
                                  },
                                  [t._v(" Add date ")]
                                )
                              : t._e(),
                            t.isNewDateActive
                              ? s(
                                  "div",
                                  { staticClass: "store__add-date-btns" },
                                  [
                                    s(
                                      "button",
                                      {
                                        staticClass:
                                          "underline text-accent-dark p-3",
                                        on: { click: t.saveNewDate },
                                      },
                                      [t._v(" Save ")]
                                    ),
                                    s(
                                      "button",
                                      {
                                        staticClass:
                                          "underline text-accent-dark",
                                        on: { click: t.toggleNewDate },
                                      },
                                      [t._v(" Cancel ")]
                                    ),
                                  ]
                                )
                              : t._e(),
                          ]),
                          t.isNewDateActive
                            ? s("new-date", {
                                attrs: {
                                  newDate: t.newDate,
                                  newStartTime: t.newStartTime,
                                  newEndTime: t.newEndTime,
                                },
                                on: {
                                  "update:newDate": function(e) {
                                    t.newDate = e;
                                  },
                                  "update:new-date": function(e) {
                                    t.newDate = e;
                                  },
                                  "update:newStartTime": function(e) {
                                    t.newStartTime = e;
                                  },
                                  "update:new-start-time": function(e) {
                                    t.newStartTime = e;
                                  },
                                  "update:newEndTime": function(e) {
                                    t.newEndTime = e;
                                  },
                                  "update:new-end-time": function(e) {
                                    t.newEndTime = e;
                                  },
                                },
                              })
                            : t._e(),
                          t._l(t.store.dates, function(e, i) {
                            return s(
                              "div",
                              { key: i, staticClass: "store__date" },
                              [
                                s("p", [
                                  t._v(
                                    " " +
                                      t._s(e.formatted.date) +
                                      ", " +
                                      t._s(e.formatted.startTime) +
                                      " - " +
                                      t._s(e.formatted.endTime) +
                                      " "
                                  ),
                                ]),
                                t.isAbleToEdit
                                  ? s(
                                      "p",
                                      {
                                        staticClass: "store__date-remove",
                                        on: {
                                          click: function(s) {
                                            return t.deleteDate(e.id);
                                          },
                                        },
                                      },
                                      [t._v(" Remove ")]
                                    )
                                  : t._e(),
                              ]
                            );
                          }),
                        ],
                        2
                      ),
                      s("hr", { staticClass: "w-full" }),
                      s(
                        "div",
                        {
                          staticClass:
                            "flex flex-col justify-start w-full mb-5",
                        },
                        [
                          s("div", { staticClass: "flex justify-between" }, [
                            s("h4", { staticClass: "text-xl" }, [
                              t._v("Items"),
                            ]),
                            t.isAbleToEdit
                              ? s(
                                  "button",
                                  {
                                    staticClass: "underline text-accent-dark",
                                    on: {
                                      click: function(e) {
                                        return t.$modal.show("newItemModal");
                                      },
                                    },
                                  },
                                  [t._v(" Add ")]
                                )
                              : t._e(),
                          ]),
                          s(
                            "div",
                            { staticClass: "store__items" },
                            t._l(t.items, function(e) {
                              return s(
                                "div",
                                {
                                  key: e.id,
                                  staticClass:
                                    "store__item flex flex-col items-center",
                                },
                                [
                                  s(
                                    "router-link",
                                    { attrs: { to: "/item/" + e._id } },
                                    [
                                      s("img", {
                                        staticClass: "store__item-thumbnail",
                                        attrs: {
                                          src:
                                            "data:image/jpeg;base64," +
                                            e.images[0].buffer,
                                        },
                                      }),
                                    ]
                                  ),
                                  s(
                                    "div",
                                    {
                                      staticClass:
                                        "flex justify-center items-center w-full mt-1",
                                    },
                                    [
                                      s("div", [
                                        s("div", [
                                          t._v(
                                            " " +
                                              t._s(e.name) +
                                              " £" +
                                              t._s(e.unitPrice) +
                                              " "
                                          ),
                                        ]),
                                        t.isAbleToEdit
                                          ? s(
                                              "div",
                                              {
                                                staticClass:
                                                  "italic text-accent-medium",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      "approved" === e.status
                                                        ? "Approved"
                                                        : "Pending approval"
                                                    ) +
                                                    " "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]),
                                      t.isAbleToEdit
                                        ? s("CloseOutline", {
                                            staticClass:
                                              "underline text-accent-medium cursor-pointer pl-2",
                                            on: {
                                              click: function(s) {
                                                return t.deleteItem(e._id);
                                              },
                                            },
                                          })
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
              ],
              1
            ),
          ]
        );
      },
      Xt = [],
      Zt = s("c1df"),
      te = s.n(Zt),
      ee = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "fade-in datetime-picker" }, [
          s("div", { staticClass: "datetime-picker__dates" }, [
            s(
              "div",
              { staticClass: "datetime-picker__col" },
              [
                s("p", [t._v("Date")]),
                s("datetime", {
                  attrs: { "min-datetime": t.currentDateTime, type: "date" },
                  model: {
                    value: t.date,
                    callback: function(e) {
                      t.date = e;
                    },
                    expression: "date",
                  },
                }),
              ],
              1
            ),
            s(
              "div",
              { staticClass: "datetime-picker__col" },
              [
                s("p", [t._v("Start time")]),
                s("datetime", {
                  staticClass: "datetime-picker__time",
                  attrs: {
                    "min-datetime": t.currentDateTime,
                    type: "time",
                    title: "Start time",
                  },
                  model: {
                    value: t.startTime,
                    callback: function(e) {
                      t.startTime = e;
                    },
                    expression: "startTime",
                  },
                }),
              ],
              1
            ),
            s(
              "div",
              { staticClass: "datetime-picker__col" },
              [
                s("p", [t._v("End time")]),
                s("datetime", {
                  staticClass: "datetime-picker__time",
                  attrs: {
                    "min-datetime": t.startTime,
                    type: "time",
                    title: "End time",
                  },
                  model: {
                    value: t.endTime,
                    callback: function(e) {
                      t.endTime = e;
                    },
                    expression: "endTime",
                  },
                }),
              ],
              1
            ),
          ]),
        ]);
      },
      se = [],
      ie = {
        name: "BrowseNowButton",
        components: {},
        props: ["newDate", "newStartTime", "newEndTime"],
        computed: {
          date: {
            get() {
              return this.newDate;
            },
            set(t) {
              this.$emit("update:newDate", t);
            },
          },
          startTime: {
            get() {
              return this.newStartTime;
            },
            set(t) {
              this.$emit("update:newStartTime", t);
            },
          },
          endTime: {
            get() {
              return this.newStartTime > this.newEndTime
                ? (this.$emit("update:newEndTime", this.newStartTime),
                  this.newStartTime)
                : this.newEndTime;
            },
            set(t) {
              this.$emit("update:newEndTime", t);
            },
          },
        },
        data() {
          return { currentDateTime: new Date().toISOString() };
        },
      },
      ae = ie,
      ne = Object(m["a"])(ae, ee, se, !1, null, null, null),
      oe = ne.exports,
      re = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t.currentlyEditing
            ? t._e()
            : s(
                "button",
                {
                  staticClass: "underline text-accent-dark",
                  on: { click: t.emitToggleEdit },
                },
                [t._v(" Edit ")]
              ),
          t.currentlyEditing
            ? s("div", { staticClass: "store__add-date-btns" }, [
                s(
                  "button",
                  {
                    staticClass: "underline p-3 text-accent-dark",
                    on: {
                      click: function(e) {
                        return t.saveEdit();
                      },
                    },
                  },
                  [t._v(" Save ")]
                ),
                s(
                  "button",
                  {
                    staticClass: "underline text-accent-dark",
                    on: { click: t.emitToggleEdit },
                  },
                  [t._v(" Cancel ")]
                ),
              ])
            : t._e(),
        ]);
      },
      le = [],
      ce = {
        name: "EditButton",
        props: ["isEditing", "fieldName", "document", "fields"],
        computed: {
          currentlyEditing: {
            get() {
              return this.isEditing;
            },
          },
        },
        methods: {
          emitToggleEdit() {
            this.$emit("toggleEdit", this.fieldName, !this.currentlyEditing);
          },
          saveEdit() {
            const t = {};
            this.fields.forEach((e) => {
              t[e] = this.document[e];
            }),
              this.$emit("callback", t, this.fieldName);
          },
        },
      },
      de = ce,
      ue = Object(m["a"])(de, re, le, !1, null, null, null),
      me = ue.exports,
      pe = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "modal",
          {
            attrs: {
              name: "newItemModal",
              clickToClose: !1,
              adaptive: !0,
              scrollable: !0,
              height: 600,
            },
          },
          [
            s("div", { staticClass: "flex justify-center items-center pt-5" }, [
              s("div", [
                s(
                  "form",
                  {
                    staticClass: "basic-form",
                    attrs: { enctype: "multipart/form-data" },
                    on: {
                      submit: function(e) {
                        return e.preventDefault(), t.addItem(e);
                      },
                    },
                  },
                  [
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.name,
                          expression: "name",
                        },
                      ],
                      staticClass: "add__heading-input",
                      attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Item name",
                      },
                      domProps: { value: t.name },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.name = e.target.value);
                        },
                      },
                    }),
                    s("div", { staticClass: "basic-form__sub-ctn" }, [
                      s("div", { staticClass: "basic-form__input-ctn" }, [
                        s("label", { attrs: { for: "initialQuantity" } }, [
                          t._v(" Quantity "),
                        ]),
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.initialQuantity,
                              expression: "initialQuantity",
                            },
                          ],
                          staticClass: "basic-form__input--small",
                          staticStyle: { width: "100px" },
                          attrs: { type: "text", name: "initialQuantity" },
                          domProps: { value: t.initialQuantity },
                          on: {
                            input: function(e) {
                              e.target.composing ||
                                (t.initialQuantity = e.target.value);
                            },
                          },
                        }),
                      ]),
                      s("div", { staticClass: "basic-form__input-ctn" }, [
                        s("label", { attrs: { for: "unitPrice" } }, [
                          t._v(" Price "),
                        ]),
                        s("div", [
                          t._v(" £ "),
                          s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.unitPrice,
                                expression: "unitPrice",
                              },
                            ],
                            staticClass: "basic-form__input--small",
                            staticStyle: { width: "100px" },
                            attrs: { type: "unitPrice", name: "unitPrice" },
                            domProps: { value: t.unitPrice },
                            on: {
                              input: function(e) {
                                e.target.composing ||
                                  (t.unitPrice = e.target.value);
                              },
                            },
                          }),
                        ]),
                      ]),
                    ]),
                    s("div", { staticClass: "basic-form__input-ctn--large" }, [
                      s("label", { attrs: { for: "description" } }, [
                        t._v(" Description "),
                      ]),
                      s("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.description,
                            expression: "description",
                          },
                        ],
                        staticClass: "description",
                        attrs: { type: "text", name: "description" },
                        domProps: { value: t.description },
                        on: {
                          input: function(e) {
                            e.target.composing ||
                              (t.description = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "add__image-preview" }, [
                      s("input", {
                        ref: "fileInput",
                        staticClass: "border-0",
                        attrs: { type: "file" },
                        on: { input: t.pickFile },
                      }),
                      s("div", { staticClass: "add__image-ctn" }, [
                        t.previewImage
                          ? s("img", {
                              staticClass: "add__image-thumbnail",
                              attrs: { src: t.previewImage },
                            })
                          : t._e(),
                      ]),
                    ]),
                    s("div", { staticClass: "add__buttons-ctn" }, [
                      s(
                        "button",
                        {
                          staticClass: "square-btn",
                          attrs: { type: "submit" },
                        },
                        [t._v("Add item")]
                      ),
                      s(
                        "button",
                        {
                          staticClass: "square-btn",
                          on: {
                            click: function(e) {
                              return t.$modal.hide("newItemModal");
                            },
                          },
                        },
                        [t._v(" Cancel ")]
                      ),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]
        );
      },
      ve = [],
      fe = {
        name: "StoreNew",
        data() {
          return {
            individual: {},
            previewImage: null,
            image: {},
            name: "",
            description: "",
            initialQuantity: "",
            type: "",
            unitPrice: "",
          };
        },
        async mounted() {
          this.individual = await ft();
        },
        methods: {
          async addItem() {
            let t = {
                name: this.name,
                description: this.description,
                initialQuantity: this.initialQuantity,
                type: this.type,
                unitPrice: this.unitPrice,
              },
              e = new FormData();
            e.append("images", this.image),
              Object.keys(t).forEach((s) => {
                e.append(s, t[s]);
              }),
              e.append("storeId", this.$route.params.storeId);
            try {
              await O.a.post("items", e),
                this.$modal.hide("newItemModal"),
                this.$emit("getItems");
            } catch (s) {
              console.log(s);
            }
          },
          pickFile() {
            let t = this.$refs.fileInput,
              e = t.files;
            if (((this.image = e[0]), e && e[0])) {
              let t = new FileReader();
              (t.onload = (t) => {
                this.previewImage = t.target.result;
              }),
                t.readAsDataURL(e[0]);
            }
          },
        },
      },
      ge = fe,
      he = Object(m["a"])(ge, pe, ve, !1, null, null, null),
      _e = he.exports,
      be = {
        name: "Store",
        components: {
          Loader: dt,
          NewDate: oe,
          NewItemModal: _e,
          EditButton: me,
          CloseOutline: Ut["a"],
        },
        data() {
          return {
            isLoading: !0,
            individual: {},
            store: null,
            items: [],
            isNewDateActive: !1,
            newDate: new Date().toISOString(),
            newStartTime: new Date().toISOString(),
            newEndTime: new Date().toISOString(),
            isEditingName: !1,
            isEditingLocation: !1,
            isEditingDescription: !1,
            error: !1,
            isAbleToEdit: !1,
          };
        },
        computed: {
          isLoggedIn: function() {
            return !!this.$store.getters.token;
          },
        },
        async mounted() {
          this.isLoggedIn && (this.individual = await ft()),
            this.getStore(),
            this.getItems();
        },
        methods: {
          async getStore() {
            try {
              const { data: t } = await O.a.get(
                "stores/" + this.$route.params.storeId
              );
              if ("approved" !== t.status && this.individual._id !== t.userId)
                throw Error();
              (this.store = t),
                (this.isAbleToEdit = this.individual._id === this.store.userId);
            } catch {
              this.error = !0;
            }
          },
          async getItems() {
            try {
              const { data: t } = await O.a.get(
                "items?sortCriterion=1&storeId=" + this.$route.params.storeId
              );
              (this.items = t), (this.isLoading = !1);
            } catch (t) {
              console.log(t), (this.isLoading = !1);
            }
          },
          toggleNewDate() {
            this.isNewDateActive = !this.isNewDateActive;
          },
          saveNewDate() {
            this.addDate(), (this.isNewDateActive = !1);
          },
          async deleteDate(t) {
            const e = this.store.dates.filter((e) => e.id !== t);
            console.log(e);
            try {
              await O.a.put("stores/" + this.$route.params.storeId, {
                dates: e,
              }),
                await this.getStore();
            } catch (s) {
              console.log(s);
            }
          },
          toggleEdit(t, e) {
            this[t] = e;
          },
          async putStore(t, e) {
            const s = {
              address_line_1: this.store.addressLine1,
              address_line_2: this.store.addressLine2,
              city: this.store.city,
              postal_code: this.store.postcode,
            };
            this.$geocoder.send(s, async (s) => {
              const i = s.results[0].geometry.location;
              t.position = i;
              try {
                await O.a.put("stores/" + this.$route.params.storeId, t),
                  e && this.toggleEdit(e, !1),
                  await this.getStore();
              } catch (a) {
                console.log(a);
              }
            });
          },
          async addDate() {
            const t =
                new Date(this.newStartTime).getTime() -
                new Date(this.newStartTime).setHours(0, 0, 0, 0),
              e =
                new Date(this.newEndTime).getTime() -
                new Date(this.newEndTime).setHours(0, 0, 0, 0),
              s = new Date(this.newDate).getTime() + t,
              i = new Date(this.newDate).getTime() + e,
              a = te()(s).format("ddd Do MMM, YYYY"),
              n = te()(s).format("HH:mm"),
              o = te()(i).format("HH:mm"),
              r = {
                id: 1e8 * Math.random(),
                iso: {
                  start: new Date(s).toISOString(),
                  end: new Date(i).toISOString(),
                },
                formatted: { date: a, startTime: n, endTime: o },
              },
              l = this.store.dates;
            l.push(r),
              await O.a.put("stores/" + this.$route.params.storeId, {
                dates: l,
              });
          },
          async deleteItem(t) {
            if (window.confirm("Are you sure you want to delete this item?"))
              try {
                await O.a.delete("items/" + t), this.getItems();
              } catch (e) {
                console.log(e);
              }
          },
        },
      },
      we = be,
      ye = Object(m["a"])(we, Kt, Xt, !1, null, null, null),
      xe = ye.exports,
      Ce = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "flex justify-center" }, [
          s(
            "div",
            {
              staticClass:
                "flex flex-col items-center my-10 py-10 bg-white w-4/6 xs:w-full",
            },
            [
              t.error ? s("div", [t._v("Item not found")]) : t._e(),
              t.isLoading ? s("Loader") : t._e(),
              t.isLoading || t.error
                ? t._e()
                : s(
                    "div",
                    {
                      staticClass:
                        "w-full h-full flex flex-col fade-in justify-between",
                    },
                    [
                      s("div", [
                        s("div", { staticClass: "flex justify-around" }, [
                          s("img", {
                            staticClass: "item__thumbnail",
                            attrs: {
                              src:
                                "data:image/jpeg;base64," +
                                t.item.images[0].buffer,
                            },
                          }),
                        ]),
                        s(
                          "div",
                          { staticClass: "flex flex-col items-center" },
                          [
                            s(
                              "div",
                              {
                                staticClass:
                                  "flex items-center justify-between px-10 w-full",
                              },
                              [
                                t.isEditingName
                                  ? s(
                                      "form",
                                      {
                                        on: {
                                          submit: function(e) {
                                            return (
                                              e.preventDefault(),
                                              t.putItem(t.item, "isEditingName")
                                            );
                                          },
                                        },
                                      },
                                      [
                                        s("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.item.name,
                                              expression: "item.name",
                                            },
                                          ],
                                          staticClass:
                                            "border border-accent-dark pl-4",
                                          domProps: { value: t.item.name },
                                          on: {
                                            input: function(e) {
                                              e.target.composing ||
                                                t.$set(
                                                  t.item,
                                                  "name",
                                                  e.target.value
                                                );
                                            },
                                          },
                                        }),
                                      ]
                                    )
                                  : s(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        s(
                                          "h2",
                                          { staticClass: "text-2xl py-3" },
                                          [t._v(" " + t._s(t.item.name) + " ")]
                                        ),
                                        t.isAbleToEdit
                                          ? s(
                                              "div",
                                              {
                                                staticClass:
                                                  "text-accent-medium pl-5",
                                              },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      "approved" ===
                                                        t.item.status
                                                        ? "Approved"
                                                        : "Pending approval"
                                                    ) +
                                                    " "
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                t.isAbleToEdit
                                  ? s("EditButton", {
                                      attrs: {
                                        document: t.item,
                                        fields: ["name"],
                                        fieldName: "isEditingName",
                                        isEditing: t.isEditingName,
                                      },
                                      on: {
                                        "update:isEditing": function(e) {
                                          t.isEditingName = e;
                                        },
                                        "update:is-editing": function(e) {
                                          t.isEditingName = e;
                                        },
                                        callback: t.putItem,
                                        toggleEdit: t.toggleEdit,
                                      },
                                    })
                                  : t._e(),
                              ],
                              1
                            ),
                            s("hr", { staticClass: "w-full" }),
                            s("div", { staticClass: "px-10 w-full" }, [
                              s(
                                "div",
                                {
                                  staticClass:
                                    "flex items-center justify-between",
                                },
                                [
                                  s("h4", { staticClass: "text-xl" }, [
                                    t._v(" Description "),
                                  ]),
                                  t.isAbleToEdit
                                    ? s("EditButton", {
                                        attrs: {
                                          document: t.item,
                                          fields: ["description"],
                                          fieldName: "isEditingDescription",
                                          isEditing: t.isEditingDescription,
                                        },
                                        on: {
                                          "update:isEditing": function(e) {
                                            t.isEditingDescription = e;
                                          },
                                          "update:is-editing": function(e) {
                                            t.isEditingDescription = e;
                                          },
                                          callback: t.putItem,
                                          toggleEdit: t.toggleEdit,
                                        },
                                      })
                                    : t._e(),
                                ],
                                1
                              ),
                              t.isEditingDescription
                                ? s("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.item.description,
                                        expression: "item.description",
                                      },
                                    ],
                                    staticClass:
                                      "border border-accent-dark pl-4 w-full",
                                    domProps: { value: t.item.description },
                                    on: {
                                      input: function(e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.item,
                                            "description",
                                            e.target.value
                                          );
                                      },
                                    },
                                  })
                                : s("p", [
                                    t._v(" " + t._s(t.item.description) + " "),
                                  ]),
                              t._v(" "),
                              s(
                                "div",
                                { staticClass: "flex justify-between pt-5" },
                                [
                                  s("div", [
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "flex justify-between items-center",
                                      },
                                      [
                                        s(
                                          "h4",
                                          { staticClass: "text-xl pr-5" },
                                          [t._v("Price")]
                                        ),
                                        t.isAbleToEdit
                                          ? s("EditButton", {
                                              attrs: {
                                                document: t.item,
                                                fields: ["unitPrice"],
                                                fieldName: "isEditingPrice",
                                                isEditing: t.isEditingPrice,
                                              },
                                              on: {
                                                "update:isEditing": function(
                                                  e
                                                ) {
                                                  t.isEditingPrice = e;
                                                },
                                                "update:is-editing": function(
                                                  e
                                                ) {
                                                  t.isEditingPrice = e;
                                                },
                                                callback: t.putItem,
                                                toggleEdit: t.toggleEdit,
                                              },
                                            })
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                    t.isEditingPrice
                                      ? s(
                                          "form",
                                          {
                                            on: {
                                              submit: function(e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.putItem(
                                                    t.item,
                                                    "isEditingPrice"
                                                  )
                                                );
                                              },
                                            },
                                          },
                                          [
                                            t._v(" £"),
                                            s("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.item.unitPrice,
                                                  expression: "item.unitPrice",
                                                },
                                              ],
                                              staticClass:
                                                "border border-accent-dark pl-4 ml-1",
                                              domProps: {
                                                value: t.item.unitPrice,
                                              },
                                              on: {
                                                input: function(e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.item,
                                                      "unitPrice",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                          ]
                                        )
                                      : s("p", [
                                          t._v("£" + t._s(t.item.unitPrice)),
                                        ]),
                                  ]),
                                  s("div", [
                                    s(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        s(
                                          "h4",
                                          { staticClass: "text-xl pr-5" },
                                          [t._v("Initial quantity")]
                                        ),
                                        t.isAbleToEdit
                                          ? s("EditButton", {
                                              attrs: {
                                                document: t.item,
                                                fields: ["initialQuantity"],
                                                fieldName: "isEditingQuantity",
                                                isEditing: t.isEditingQuantity,
                                              },
                                              on: {
                                                "update:isEditing": function(
                                                  e
                                                ) {
                                                  t.isEditingQuantity = e;
                                                },
                                                "update:is-editing": function(
                                                  e
                                                ) {
                                                  t.isEditingQuantity = e;
                                                },
                                                callback: t.putItem,
                                                toggleEdit: t.toggleEdit,
                                              },
                                            })
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                    t.isEditingQuantity
                                      ? s(
                                          "form",
                                          {
                                            on: {
                                              submit: function(e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.putItem(
                                                    t.item,
                                                    "isEditingQuantity"
                                                  )
                                                );
                                              },
                                            },
                                          },
                                          [
                                            s("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.item.initialQuantity,
                                                  expression:
                                                    "item.initialQuantity",
                                                },
                                              ],
                                              staticClass:
                                                "border border-accent-dark pl-4",
                                              domProps: {
                                                value: t.item.initialQuantity,
                                              },
                                              on: {
                                                input: function(e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.item,
                                                      "initialQuantity",
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                          ]
                                        )
                                      : s("p", [
                                          t._v(t._s(t.item.initialQuantity)),
                                        ]),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                        t.items.length > 0
                          ? s(
                              "div",
                              {
                                staticClass:
                                  "mt-10 flex flex-col items-center w-full",
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "flex" },
                                  [
                                    s("div", { staticClass: "text-xl pt-3" }, [
                                      t._v("Other items by"),
                                    ]),
                                    s(
                                      "router-link",
                                      {
                                        staticClass:
                                          "text-xl pl-5 pt-3 hover:underline",
                                        attrs: { to: "/store/" + t.store._id },
                                      },
                                      [t._v(" " + t._s(t.store.name) + " ")]
                                    ),
                                  ],
                                  1
                                ),
                                s(
                                  "div",
                                  {
                                    staticClass:
                                      "flex flex-wrap justify-center w-full",
                                  },
                                  t._l(t.items, function(e) {
                                    return s(
                                      "router-link",
                                      {
                                        key: e._id,
                                        staticClass: "m-5",
                                        attrs: { to: "/item/" + e._id },
                                      },
                                      [
                                        s("img", {
                                          staticClass: "store__item-thumbnail",
                                          attrs: {
                                            src:
                                              "data:image/jpeg;base64," +
                                              e.images[0].buffer,
                                          },
                                        }),
                                        s(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            t._v(
                                              " " +
                                                t._s(e.name) +
                                                " £" +
                                                t._s(e.unitPrice) +
                                                " "
                                            ),
                                          ]
                                        ),
                                      ]
                                    );
                                  }),
                                  1
                                ),
                              ]
                            )
                          : t._e(),
                      ]),
                      0 == t.items.length
                        ? s(
                            "div",
                            { staticClass: "flex justify-center" },
                            [
                              s(
                                "div",
                                { staticClass: "text-lg pt-3 italic h-full" },
                                [t._v("Hosted by")]
                              ),
                              s(
                                "router-link",
                                {
                                  staticClass:
                                    "text-lg pl-5 pt-3 hover:underline italic",
                                  attrs: { to: "/store/" + t.store._id },
                                },
                                [t._v(" " + t._s(t.store.name) + " ")]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ]
                  ),
            ],
            1
          ),
        ]);
      },
      ke = [],
      je = {
        name: "Item",
        components: { Loader: dt, EditButton: me },
        computed: {
          isLoggedIn: function() {
            return !!this.$store.getters.token;
          },
        },
        data() {
          return {
            isLoading: !0,
            individual: {},
            isBrowsePage: "browse-item" === this.$route.name,
            item: {},
            items: [],
            store: {},
            error: !1,
            isAbleToEdit: !0,
            isEditingName: !1,
            isEditingDescription: !1,
            isEditingPrice: !1,
            isEditingQuantity: !1,
          };
        },
        async mounted() {
          this.isLoggedIn && (this.individual = ft()),
            await this.getItem(),
            await this.getItems();
        },
        methods: {
          async getItem() {
            try {
              const { data: t } = await O.a.get(
                "items/" + this.$route.params.itemId
              );
              this.item = t;
              const { data: e } = await O.a.get("stores/" + this.item.storeId);
              this.store = e;
            } catch (t) {
              (this.error = !0), (this.isLoading = !1);
            }
          },
          async getItems() {
            try {
              const { data: t } = await O.a.get(
                "items?sortCriterion=1&storeId=" + this.item.storeId
              );
              (this.items = t
                .filter((t) => t._id !== this.item._id)
                .slice(0, 4)),
                (this.isLoading = !1);
            } catch (t) {
              console.log(t), (this.isLoading = !1);
            }
          },
          toggleEdit(t, e) {
            this[t] = e;
          },
          async putItem(t, e) {
            try {
              await O.a.put("items/" + this.$route.params.itemId, t),
                this.toggleEdit(e, !1),
                await this.getItem();
            } catch (s) {
              console.log(s);
            }
          },
        },
      },
      Ee = je,
      Pe = Object(m["a"])(Ee, Ce, ke, !1, null, null, null),
      Se = Pe.exports,
      Le = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "fade-in flex justify-center mt-5 pt-5" },
          [
            s("div", [
              s(
                "form",
                {
                  staticClass: "basic-form",
                  on: {
                    submit: function(e) {
                      return e.preventDefault(), t.register(e);
                    },
                  },
                },
                [
                  s("div", { staticClass: "basic-form__heading" }, [
                    t._v(" Create your account "),
                  ]),
                  s("hr"),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "name" } }, [
                      t._v(" Full name "),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.name,
                          expression: "name",
                        },
                      ],
                      attrs: { type: "text", name: "name", required: "" },
                      domProps: { value: t.name },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.name = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "company" } }, [
                      t._v(" Company (optional) "),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.company,
                          expression: "company",
                        },
                      ],
                      attrs: { type: "text", name: "company" },
                      domProps: { value: t.company },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.company = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "mobileNumber" } }, [
                      t._v(" Mobile number "),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.mobileNumber,
                          expression: "mobileNumber",
                        },
                      ],
                      attrs: {
                        type: "text",
                        name: "mobileNumber",
                        required: "",
                      },
                      domProps: { value: t.mobileNumber },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            (t.mobileNumber = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "email" } }, [t._v(" Email ")]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.email,
                          expression: "email",
                        },
                      ],
                      attrs: { type: "email", name: "email", required: "" },
                      domProps: { value: t.email },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.email = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "password" } }, [
                      t._v(" Password "),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.password,
                          expression: "password",
                        },
                      ],
                      attrs: {
                        type: "password",
                        name: "password",
                        required: "",
                      },
                      domProps: { value: t.password },
                      on: {
                        input: function(e) {
                          e.target.composing || (t.password = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "basic-form__input-ctn--large" }, [
                    s("label", { attrs: { for: "confirmPassword" } }, [
                      t._v(" Confirm password "),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.confirmPassword,
                          expression: "confirmPassword",
                        },
                      ],
                      attrs: {
                        type: "password",
                        name: "confirmPassword",
                        required: "",
                      },
                      domProps: { value: t.confirmPassword },
                      on: {
                        input: function(e) {
                          e.target.composing ||
                            (t.confirmPassword = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s(
                    "div",
                    {
                      staticClass:
                        "w-full flex flex-col items-center justify-around",
                    },
                    [
                      s(
                        "button",
                        {
                          staticClass: "square-btn",
                          attrs: { type: "submit" },
                        },
                        [t._v("Sign up")]
                      ),
                      s("router-link", { attrs: { to: "/login" } }, [
                        t._v("Already have an account?"),
                      ]),
                    ],
                    1
                  ),
                  t.error
                    ? s("div", { staticClass: "mt-5 text-red-700" }, [
                        t._v(" Please fill in all fields "),
                      ])
                    : t._e(),
                ]
              ),
            ]),
          ]
        );
      },
      Ne = [],
      Ie = {
        name: "Register",
        data() {
          return {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            mobileNumber: "",
            company: "",
            error: !1,
          };
        },
        methods: {
          async register() {
            let t = {
              email: this.email,
              name: this.name,
              password: this.password,
              confirmPassword: this.confirmPassword,
              mobileNumber: this.mobileNumber,
              company: this.company,
            };
            await this.$store.dispatch("login", { user: t, isRegister: !0 }),
              (this.error = !this.$store.getters.token);
          },
        },
      },
      Te = Ie,
      De = Object(m["a"])(Te, Le, Ne, !1, null, null, null),
      $e = De.exports,
      Ae = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "bg-white m-10 p-8" },
          [
            s("h1", { staticClass: "text-3xl" }, [
              t._v("Privacy Policy for Pop Marketplace"),
            ]),
            s("p", [
              t._v(
                " At www.pop-marketplace.co.uk, accessible from https://www.pop-marketplace.co.uk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by www.pop-marketplace.co.uk and how we use it. "
              ),
            ]),
            s("p", [
              t._v(
                " If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. "
              ),
            ]),
            t._m(0),
            s("h2", { staticClass: "text-2xl mt-4" }, [t._v("Consent")]),
            s("p", [
              t._v(
                " By using our website, you hereby consent to our Privacy Policy and agree to its terms. "
              ),
            ]),
            s("h2", { staticClass: "text-2xl mt-4" }, [
              t._v("Information we collect"),
            ]),
            s("p", [
              t._v(
                " The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. "
              ),
            ]),
            s("p", [
              t._v(
                " If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. "
              ),
            ]),
            s("p", [
              t._v(
                " When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number. "
              ),
            ]),
            s("h2", { staticClass: "text-2xl mt-4" }, [
              t._v("How we use your information"),
            ]),
            s("p", [
              t._v(
                "We use the information we collect in various ways, including to:"
              ),
            ]),
            t._m(1),
            s("h2", { staticClass: "text-2xl mt-4" }, [t._v("Log Files")]),
            s("p", [
              t._v(
                " www.pop-marketplace.co.uk follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. "
              ),
            ]),
            s("h2", { staticClass: "text-2xl mt-4" }, [
              t._v("Advertising Partners Privacy Policies"),
            ]),
            s("P", [
              t._v(
                "You may consult this list to find the Privacy Policy for each of the advertising partners of www.pop-marketplace.co.uk."
              ),
            ]),
            s("p", [
              t._v(
                " Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on www.pop-marketplace.co.uk, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. "
              ),
            ]),
            s("p", [
              t._v(
                " Note that www.pop-marketplace.co.uk has no access to or control over these cookies that are used by third-party advertisers. "
              ),
            ]),
            s("h2", { staticClass: "text-2xl mt-4" }, [
              t._v("Third Party Privacy Policies"),
            ]),
            s("p", [
              t._v(
                " www.pop-marketplace.co.uk's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. "
              ),
            ]),
            s("p", [
              t._v(
                " You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. "
              ),
            ]),
            s("h2", { staticClass: "text-2xl mt-4" }, [
              t._v(
                " CCPA Privacy Rights (Do Not Sell My Personal Information) "
              ),
            ]),
            s("p", [
              t._v(
                " Under the CCPA, among other rights, California consumers have the right to: "
              ),
            ]),
            s("p", [
              t._v(
                " Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. "
              ),
            ]),
            s("p", [
              t._v(
                " Request that a business delete any personal data about the consumer that a business has collected. "
              ),
            ]),
            s("p", [
              t._v(
                " Request that a business that sells a consumer's personal data, not sell the consumer's personal data. "
              ),
            ]),
            s("p", [
              t._v(
                " If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us. "
              ),
            ]),
            s("h2", { staticClass: "text-2xl mt-4" }, [
              t._v("GDPR Data Protection Rights"),
            ]),
            s("p", [
              t._v(
                " We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: "
              ),
            ]),
            s("p", [
              t._v(
                " The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service. "
              ),
            ]),
            s("p", [
              t._v(
                " The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. "
              ),
            ]),
            s("p", [
              t._v(
                " The right to erasure – You have the right to request that we erase your personal data, under certain conditions. "
              ),
            ]),
            s("p", [
              t._v(
                " The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions. "
              ),
            ]),
            s("p", [
              t._v(
                " The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions. "
              ),
            ]),
            s("p", [
              t._v(
                " The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions. "
              ),
            ]),
            s("p", [
              t._v(
                " If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us. "
              ),
            ]),
            s("h2", { staticClass: "text-2xl mt-4" }, [
              t._v("Children's Information"),
            ]),
            s("p", [
              t._v(
                " Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. "
              ),
            ]),
            s("p", [
              t._v(
                " www.pop-marketplace.co.uk does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records. "
              ),
            ]),
          ],
          1
        );
      },
      Oe = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v(
              " This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in www.pop-marketplace.co.uk. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the "
            ),
            s(
              "a",
              { attrs: { href: "https://www.privacypolicygenerator.info" } },
              [t._v("Privacy Policy Generator")]
            ),
            t._v(" and the "),
            s(
              "a",
              {
                attrs: {
                  href:
                    "https://www.privacypolicyonline.com/privacy-policy-generator/",
                },
              },
              [t._v("Free Privacy Policy Generator")]
            ),
            t._v(". "),
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("ul", [
            s("li", { staticClass: "list-disc ml-10" }, [
              t._v(" Provide, operate, and maintain our website "),
            ]),
            s("li", { staticClass: "list-disc ml-10" }, [
              t._v(" Improve, personalise, and expand our website "),
            ]),
            s("li", { staticClass: "list-disc ml-10" }, [
              t._v(" Understand and analyse how you use our website "),
            ]),
            s("li", { staticClass: "list-disc ml-10" }, [
              t._v(
                " Develop new products, services, features, and functionality "
              ),
            ]),
            s("li", { staticClass: "list-disc ml-10" }, [
              t._v(
                " Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes "
              ),
            ]),
            s("li", { staticClass: "list-disc ml-10" }, [
              t._v("Send you emails"),
            ]),
            s("li", { staticClass: "list-disc ml-10" }, [
              t._v("Find and prevent fraud"),
            ]),
          ]);
        },
      ],
      Me = { name: "PrivacyPolicy" },
      qe = Me,
      ze = Object(m["a"])(qe, Ae, Oe, !1, null, null, null),
      Be = ze.exports,
      Qe = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "flex flex-col items-center mt-3 bg-white h-1/2 pt-10",
          },
          [
            s("div", [
              s("div", { staticClass: "flex flex-col" }, [
                s("label", [t._v(" Password: ")]),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.password,
                      expression: "password",
                    },
                  ],
                  staticClass: "border",
                  attrs: { type: "password" },
                  domProps: { value: t.password },
                  on: {
                    input: function(e) {
                      e.target.composing || (t.password = e.target.value);
                    },
                  },
                }),
              ]),
              s(
                "button",
                {
                  staticClass: "square-btn w-40 m-5",
                  on: { click: t.deleteAccount },
                },
                [t._v(" Delete account ")]
              ),
              t.error
                ? s("div", { staticClass: "mt-5 text-red-700 text-center" }, [
                    t._v(" Incorrect password "),
                  ])
                : t._e(),
            ]),
          ]
        );
      },
      Re = [],
      Ye = {
        name: "Account",
        data() {
          return { individual: {}, password: "", error: !1 };
        },
        async mounted() {
          this.individual = await ft();
        },
        methods: {
          async deleteAccount() {
            if (window.confirm("Are you sure you want to delete your account?"))
              try {
                await O.a.post("account/delete", { password: this.password }),
                  this.$store.dispatch("logout"),
                  (this.error = !1);
              } catch {
                this.error = !0;
              }
          },
        },
      },
      Fe = Ye,
      He = Object(m["a"])(Fe, Qe, Re, !1, null, null, null),
      Ue = He.exports;
    i["a"].use(E["a"]);
    let Ge = new E["a"]({
      mode: "history",
      routes: [
        { path: "/", name: "home", component: T },
        { path: "/browse", name: "browse", component: bt },
        { path: "/login", name: "login", component: Mt },
        { path: "/sign-up", name: "sign-up", component: $e },
        { path: "/contact", name: "contact-us", component: It },
        { path: "/privacy", name: "privacy", component: Be },
        {
          path: "/store/:storeId",
          name: "store",
          component: xe,
          meta: { requiresAuth: !1 },
        },
        {
          path: "/host",
          name: "host",
          component: Jt,
          meta: { requiresAuth: !0 },
        },
        {
          path: "/item/:itemId",
          name: "item",
          component: Se,
          meta: { requiresAuth: !1 },
        },
        {
          path: "/saved",
          name: "saved",
          component: jt,
          meta: { requiresAuth: !0 },
        },
        { path: "/account", name: "account", component: Ue },
      ],
    });
    Ge.beforeEach((t, e, s) => {
      if (t.matched.some((t) => t.meta.requiresAuth)) {
        if (localStorage.getItem("token")) return void s();
        s("/login");
      } else s();
      "/login" === t.fullPath && localStorage.getItem("token") && s("/browse");
    });
    var We = Ge,
      Ve = s("f13c"),
      Je = s.n(Ve),
      Ke = s("58ca"),
      Xe = s("ebfd"),
      Ze = s.n(Xe),
      ts = s("68f6"),
      es = s("755e"),
      ss = s("859b"),
      is = s("1881"),
      as = s.n(is);
    s("3847");
    (O.a.defaults.withCredentials = !0),
      (O.a.defaults.headers["X-Requested-With"] = "XMLHttpRequest"),
      (O.a.defaults.baseURL = Object({
        NODE_ENV: "production",
        BASE_URL: "/",
      }).VUE_APP_BASE_URL),
      O.a.interceptors.request.use((t) => {
        const e = vt.getters.token;
        return e && (t.headers.Authorization = "Bearer " + e), t;
      }),
      O.a.interceptors.response.use(
        (t) => t,
        (t) => {
          401 === t.response.status &&
            (vt.dispatch("logout"), We.push("/login"));
        }
      ),
      i["a"].use(as.a, { componentName: "modal" }),
      i["a"].use(ut["a"]),
      i["a"].use(Ke["a"]),
      i["a"].use(Je.a),
      i["a"].use(Ze.a),
      i["a"].use(es, {
        load: {
          key: Object({ NODE_ENV: "production", BASE_URL: "/" })
            .VUE_APP_GOOGLE_MAPS_API_KEY,
          libraries: "places",
        },
      }),
      i["a"].use(ts["a"], {
        defaultCountryCode: "GB",
        defaultLanguage: "en",
        defaultMode: "address",
        googleMapsApiKey: Object({ NODE_ENV: "production", BASE_URL: "/" })
          .VUE_APP_GOOGLE_MAPS_API_KEY,
      }),
      i["a"].component("datetime", ss["Datetime"]),
      (i["a"].config.productionTip = !1),
      new i["a"]({ router: We, store: vt, render: (t) => t(j) }).$mount("#app");
  },
  "5c0b": function(t, e, s) {
    "use strict";
    var i = s("9c0c"),
      a = s.n(i);
    a.a;
  },
  "9c0c": function(t, e, s) {},
});
//# sourceMappingURL=app.1649a14c.js.map
