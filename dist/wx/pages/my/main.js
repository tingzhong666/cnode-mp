require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(184);



new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]).$mount();

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ea35deea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ea35deea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ea35deea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea35deea", Component.options)
  } else {
    hotAPI.reload("data-v-ea35deea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fnlist__ = __webpack_require__(52);

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
      loaded: false,
      mode: 'my'
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["e" /* mapState */])(['logined', 'userInfo', 'collect']), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])(['recentTopics', 'recentReplies']), {
    // 功能选项列表
    list: function list() {
      return [{
        label: '创建的主题',
        fonticon: 'iconfont icon-huati',
        count: (this.logined ? this.recentTopics.length : -1) < 0 ? '' : this.recentTopics.length + '篇'
      }, {
        label: '参与的主题',
        fonticon: 'iconfont icon-canyu',
        count: (this.logined ? this.recentReplies.length : -1) < 0 ? '' : this.recentReplies.length + '篇'
      }, {
        label: '收藏的主题',
        fonticon: 'iconfont icon-shoucang2',
        count: (this.collect ? this.collect.length : -1) < 0 ? '' : this.collect.length + '篇'
      }, {
        label: '关于',
        fonticon: 'iconfont icon-guanyu',
        count: ''
      }];
    }
  }),
  components: {
    User: __WEBPACK_IMPORTED_MODULE_1__components_user__["a" /* default */],
    FnList: __WEBPACK_IMPORTED_MODULE_3__components_fnlist__["a" /* default */]
  },
  onShow: function onShow() {
    this.$store.dispatch('init');
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["d" /* mapMutations */])(['clear']), {
    login: function login() {
      if (this.logined) return;
      wx.navigateTo({
        url: '/pages/login/main'
      });
    },

    // 功能列表
    fn: function fn(label) {
      // 权限
      var power = ['创建的主题', '参与的主题', '收藏的主题'];
      if (!this.logined && power.includes(label)) {
        wx.showModal({
          title: '提示',
          content: '未登录',
          showCancel: false
        });
        return;
      }
      if (power.includes(label)) {
        wx.navigateTo({
          url: '/pages/topics/main?loginname=' + this.userInfo.loginname + '&label=' + label
        });
        return;
      }
      wx.navigateTo({
        url: '/pages/about/main'
      });
    }
  })
});

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "margin-top": "20rpx"
    }
  }), _vm._v(" "), _c('User', {
    attrs: {
      "hover": !_vm.logined,
      "img": _vm.logined ? _vm.userInfo.avatar_url : "/static/images/logout.png",
      "name": _vm.logined ? _vm.userInfo.loginname : "未登录",
      "github": _vm.logined ? _vm.userInfo.githubUsername : "",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.login
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "20rpx"
    }
  }), _vm._v(" "), _c('FnList', {
    attrs: {
      "list": _vm.list,
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.fn
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "logout",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("\n    退出登录\n  ")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ea35deea", esExports)
  }
}

/***/ })

},[183]);