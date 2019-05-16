require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(142);



new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]).$mount();

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08864829_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(143)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08864829"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_08864829_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08864829", Component.options)
  } else {
    hotAPI.reload("data-v-08864829", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 143:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tab__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_topics__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_api__ = __webpack_require__(7);


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
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      tab: ['全部', '精华', '分享', '问答', '招聘'],
      listAll: null,
      listGood: null,
      listShare: null,
      listAsk: null,
      listJob: null,
      animationData: null,
      height: 0,
      downLoaded: true,
      refreshing: false
    };
  },

  components: {
    Tab: __WEBPACK_IMPORTED_MODULE_2__components_tab__["a" /* default */],
    Topics: __WEBPACK_IMPORTED_MODULE_3__components_topics__["a" /* default */]
  },
  methods: {
    // 数据请求
    init: function init() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])('全部', 1);

              case 2:
                res = _context.sent;

                _this.listAll = res;
                _context.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])('精华', 1);

              case 6:
                res = _context.sent;

                _this.listGood = res;
                _context.next = 10;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])('分享', 1);

              case 10:
                res = _context.sent;

                _this.listShare = res;
                _context.next = 14;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])('问答', 1);

              case 14:
                res = _context.sent;

                _this.listAsk = res;
                _context.next = 18;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])('招聘', 1);

              case 18:
                res = _context.sent;

                _this.listJob = res;

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // tab 点击
    tabClick: function tabClick(label, index) {
      // 如果点击的就是当前分类，则跳出 > 已经在组件中判断了，这里无需判断
      this.animation(index);
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])(label, 1);
    },

    // 动画
    animation: function animation(index) {
      var width = wx.getSystemInfoSync().windowWidth;
      var animation = wx.createAnimation({
        timingFunction: 'ease'
      });
      animation.translateX(-index * width).step();
      this.animationData = animation.export();
    },

    // 主题点击
    topicClick: function topicClick(id) {
      wx.navigateTo({
        url: '/pages/topic/main?id=' + id
      });
    },

    // 动态设置 scroll 高度
    scrollHeight: function scrollHeight() {
      var _this2 = this;

      var query = wx.createSelectorQuery();
      query.select('.tabs').boundingClientRect();
      query.exec(function (res) {
        _this2.height = wx.getSystemInfoSync().windowHeight - res[0].height;
      });
    },

    // 触底加载
    downLoad: function downLoad(label, page) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this3.downLoaded) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _this3.downLoaded = false;
                _context2.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])(label, ++page);

              case 5:
                res = _context2.sent;
                _context2.t0 = label;
                _context2.next = _context2.t0 === '全部' ? 9 : _context2.t0 === '精华' ? 11 : _context2.t0 === '分享' ? 13 : _context2.t0 === '问答' ? 15 : _context2.t0 === '招聘' ? 17 : 19;
                break;

              case 9:
                _this3.listAll = _this3.listAll.concat(res);
                return _context2.abrupt('break', 19);

              case 11:
                _this3.listGood = _this3.listGood.concat(res);
                return _context2.abrupt('break', 19);

              case 13:
                _this3.listShare = _this3.listShare.concat(res);
                return _context2.abrupt('break', 19);

              case 15:
                _this3.listAsk = _this3.listAsk.concat(res);
                return _context2.abrupt('break', 19);

              case 17:
                _this3.listJob = _this3.listJob.concat(res);
                return _context2.abrupt('break', 19);

              case 19:
                _this3.downLoaded = true;

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },

    // 当前分类刷新
    refresh: function refresh(label) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // 正在刷新中，再次点击无效 > 已在组件中判断了
                // 启动刷新动画
                _this4.refreshing = true;
                _context3.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_api__["l" /* topics */])(label, 1);

              case 3:
                res = _context3.sent;
                _context3.t0 = label;
                _context3.next = _context3.t0 === '全部' ? 7 : _context3.t0 === '精华' ? 9 : _context3.t0 === '分享' ? 11 : _context3.t0 === '问答' ? 13 : _context3.t0 === '招聘' ? 15 : 17;
                break;

              case 7:
                _this4.listAll = res;
                return _context3.abrupt('break', 17);

              case 9:
                _this4.listGood = res;
                return _context3.abrupt('break', 17);

              case 11:
                _this4.listShare = res;
                return _context3.abrupt('break', 17);

              case 13:
                _this4.listAsk = res;
                return _context3.abrupt('break', 17);

              case 15:
                _this4.listJob = res;
                return _context3.abrupt('break', 17);

              case 17:
                // 刷新完成，关闭动画
                _this4.refreshing = false;

              case 18:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    }
  },
  onLoad: function onLoad() {
    this.init();
  },
  mounted: function mounted() {
    this.scrollHeight();
  }
});

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_tab_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0323a7e6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_tab_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0323a7e6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_tab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0323a7e6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_tab_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\tab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0323a7e6", Component.options)
  } else {
    hotAPI.reload("data-v-0323a7e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


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
      animationData: null,
      tabs: this.tab.map(function (item, index) {
        return {
          label: item,
          active: index === 0
        };
      }),
      refreshA: null,
      style: '',
      rotate: 0,
      refreshI: null
    };
  },

  props: ['tab', 'refreshing'],
  watch: {
    refreshing: function refreshing(newV, oldV) {
      var _this = this;

      // 没有正在刷新 > 正在刷新 设置循环动画
      if (newV && !oldV) {
        this.style = 'color: #fff;';
        this.refreshI = setInterval(function () {
          _this.rotate += 360;
          var animation = wx.createAnimation();
          animation.rotateZ(_this.rotate).step();
          _this.refreshA = animation.export();
        }, 300);
        return;
      }
      // 从正在刷新 > 刷新完成  清空循环定时器动画
      if (!newV && oldV) {
        if (!this.refreshA) this.style = '';
        clearInterval(this.refreshI);
        this.refreshA = null;
      }
    }
  },
  methods: {
    // tab 点击，同时触发动画
    click: function click(e, item, index) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!item.active) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                // 选中
                _this2.tabs.forEach(function (v) {
                  v.active = v.label === item.label;
                });
                // 动画
                _this2.animation(e.mp.currentTarget.offsetLeft);
                // 提交给外部事件
                _this2.$emit('click', item.label, index);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },

    // 动画
    animation: function animation(left) {
      // 下划线动画
      var animation = wx.createAnimation({
        timingFunction: 'ease'
      });
      // 下划线移动
      animation.left(left).step();
      // 导出
      this.animationData = animation.export();
    },

    // 刷新按钮点击
    refresh: function refresh() {
      // 正在刷新 则跳出
      if (this.refreshing) return;
      // 否则提交刷新事件
      var label = this.tabs.find(function (item) {
        return item.active;
      }).label;
      this.$emit('refresh', label);
    },

    // 刷新动画结束
    refreshend: function refreshend() {
      this.style = '';
    }
  }
});

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab"
  }, [_vm._l((_vm.tabs), function(item, index) {
    return _c('div', {
      key: item.label,
      staticClass: "item",
      class: item.active ? 'active' : '',
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.click($event, item, index)
        }
      }
    }, [_vm._v("\n    " + _vm._s(item.label) + "\n  ")])
  }), _vm._v(" "), _c('div', {
    staticClass: "down-line",
    attrs: {
      "animation": _vm.animationData
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "iconfont icon-shuaxin",
    style: (_vm.style),
    attrs: {
      "animation": _vm.refreshA,
      "eventid": '1'
    },
    on: {
      "transitionend": _vm.refreshend,
      "click": _vm.refresh
    }
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0323a7e6", esExports)
  }
}

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_topics_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3156f15c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_topics_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(150)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3156f15c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_topics_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3156f15c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_topics_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\topics.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topics.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3156f15c", Component.options)
  } else {
    hotAPI.reload("data-v-3156f15c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_load__ = __webpack_require__(49);
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
      page: 1,
      downed: false
    };
  },

  props: ['list', 'height', 'label'],
  components: {
    Load: __WEBPACK_IMPORTED_MODULE_0__components_load__["a" /* default */]
  },
  methods: {
    // 触底
    down: function down(e) {
      this.downed = true;
      this.$emit('down', this.label, this.page);
    },

    // 主题点击
    click: function click(id) {
      this.$emit('click', id);
    }
  },
  watch: {
    list: function list(newV, oldV) {
      if (!oldV) return;
      if (newV.length !== oldV.length) {
        ++this.page;
        this.downed = false;
      }
    }
  }
});

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.list) ? _c('Load', {
    attrs: {
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.list) ? _c('div', {
    staticClass: "list"
  }, [_c('scroll-view', {
    style: ('height: ' + _vm.height + 'px;'),
    attrs: {
      "scroll-y": "",
      "lower-threshold": "500",
      "eventid": '1'
    },
    on: {
      "scrolltolower": _vm.down
    }
  }, [_vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "li",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.click(item.id)
        }
      }
    }, [_c('div', {
      staticClass: "author"
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": item.author.avatar_url,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.author.loginname))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v("\n              发布于 " + _vm._s(item.create_at) + " • 新回复 " + _vm._s(item.last_reply_at) + "\n            ")])]), _vm._v(" "), _c('div', {
      staticClass: "tab"
    }, [_vm._v(_vm._s(item.tab))])]), _vm._v(" "), _c('div', {
      staticClass: "topic"
    }, [_c('div', {
      staticClass: "title"
    }, [(item.badge) ? _c('span', {
      staticClass: "badge"
    }, [_vm._v(_vm._s(item.badgeT))]) : _vm._e(), _vm._v("\n            " + _vm._s(item.title) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.content))])]), _vm._v(" "), _c('div', {
      staticClass: "action"
    }, [_c('div', {
      staticClass: "container"
    }, [_c('span', {
      staticClass: "iconfont icon-pinglun"
    }), _vm._v("\n            " + _vm._s(item.reply_count) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "container"
    }, [_c('span', {
      staticClass: "iconfont icon-liulanliang"
    }), _vm._v("\n            " + _vm._s(item.visit_count) + "\n          ")])])])
  }), _vm._v(" "), (_vm.downed) ? _c('Load', {
    attrs: {
      "mpcomid": '1'
    }
  }) : _vm._e()], 2)], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3156f15c", esExports)
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('view', {
    staticClass: "tabs"
  }, [_c('Tab', {
    attrs: {
      "tab": _vm.tab,
      "refreshing": _vm.refreshing,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.tabClick,
      "refresh": _vm.refresh
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list",
    attrs: {
      "animation": _vm.animationData
    }
  }, [_c('div', {
    staticClass: "li"
  }, [_c('Topics', {
    attrs: {
      "height": _vm.height,
      "list": _vm.listAll,
      "label": "全部",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.topicClick,
      "down": _vm.downLoad
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "li"
  }, [_c('Topics', {
    attrs: {
      "height": _vm.height,
      "list": _vm.listGood,
      "label": "精华",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.topicClick,
      "down": _vm.downLoad
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "li"
  }, [_c('Topics', {
    attrs: {
      "height": _vm.height,
      "list": _vm.listShare,
      "label": "分享",
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.topicClick,
      "down": _vm.downLoad
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "li"
  }, [_c('Topics', {
    attrs: {
      "height": _vm.height,
      "list": _vm.listAsk,
      "label": "问答",
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.topicClick,
      "down": _vm.downLoad
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "li"
  }, [_c('Topics', {
    attrs: {
      "height": _vm.height,
      "list": _vm.listJob,
      "label": "招聘",
      "eventid": '5',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.topicClick,
      "down": _vm.downLoad
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08864829", esExports)
  }
}

/***/ })

},[141]);