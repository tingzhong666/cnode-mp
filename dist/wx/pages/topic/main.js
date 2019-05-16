require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(195);



new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]).$mount();

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_460c4774_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(198);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(196)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-460c4774"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_460c4774_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\topic\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-460c4774", Component.options)
  } else {
    hotAPI.reload("data-v-460c4774", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_load__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(16);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      id: null,
      loaded: false,
      data: null,
      md: null
    };
  },

  computed: {
    comments: function comments() {
      var _this = this;

      if (this.data) {
        var arr = [];
        this.data.replies.map(function (item, index) {
          item.order = ++index;
          item.create_at = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["b" /* time */])(item.create_at);
          item.content = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* md */])(item.content, _this);
          arr.unshift(item);
        });
        return arr;
      } else {
        return [];
      }
    },
    isCollect: function isCollect() {
      return this.data ? this.data.is_collect : false;
    }
  },
  components: {
    Load: __WEBPACK_IMPORTED_MODULE_2__components_load__["a" /* default */]
  },
  onLoad: function onLoad(query) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.init();
              _this2.id = query.id;
              _context.next = 4;
              return _this2.getTopic();

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }))();
  },

  methods: {
    // 请求数据
    getTopic: function getTopic() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_api__["k" /* topic */])(_this3.id);

              case 2:
                _this3.data = _context2.sent;

                _this3.md = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* md */])(_this3.data.content, _this3);
                _this3.loaded = true;

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    init: function init() {
      this.id = null;
      this.loaded = false;
      this.data = null;
      this.md = null;
    },

    // 收藏
    collect: function collect() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this4.$store.state.logined) {
                  _context3.next = 3;
                  break;
                }

                wx.showModal({
                  title: '提示',
                  content: '未登录',
                  showCancel: false
                });
                return _context3.abrupt('return');

              case 3:
                res = void 0;

                if (!_this4.isCollect) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_api__["g" /* deCollect */])(_this4.id);

              case 7:
                res = _context3.sent;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils_api__["d" /* collect */])(_this4.id);

              case 12:
                res = _context3.sent;

              case 13:
                if (res) _this4.data.is_collect = !_this4.isCollect;

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },

    // 用户详情
    user: function user(loginname) {
      wx.navigateTo({
        url: '/pages/user/main?loginname=' + loginname
      });
    }
  }
});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.loaded || !_vm.md) ? _c('Load', {
    attrs: {
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.loaded) ? _c('div', [_c('div', {
    staticClass: "author",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.user(_vm.data.author.loginname)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.data.author.avatar_url
    }
  }), _vm._v("\n      " + _vm._s(_vm.data.author.loginname) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.data.title))]), _vm._v(" "), (_vm.md) ? _c('towxml', {
    attrs: {
      "md": _vm.md,
      "mpcomid": '1'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v("\n      阅读 " + _vm._s(_vm.data.visit_count) + "\n      "), _c('div', {
    staticClass: "collect",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.collect
    }
  }, [_vm._v(_vm._s(_vm.isCollect ? '取消收藏' : '收藏'))])]), _vm._v(" "), _c('div', {
    staticClass: "comments"
  }, _vm._l((_vm.comments), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "comment"
    }, [_c('div', {
      staticClass: "author"
    }, [_c('div', {
      staticClass: "img",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.user(item.author.loginname)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.author.avatar_url
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.author.loginname))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v("\n              " + _vm._s(item.create_at) + " • 第" + _vm._s(item.order) + "楼\n            ")])]), _vm._v(" "), _c('div', {
      staticClass: "ups"
    }, [_vm._v("赞 " + _vm._s(item.ups.length))])]), _vm._v(" "), _c('towxml', {
      attrs: {
        "md": item.content,
        "mpcomid": '2_' + index
      }
    })], 1)
  }))], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-460c4774", esExports)
  }
}

/***/ })

},[194]);