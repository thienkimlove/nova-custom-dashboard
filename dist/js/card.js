!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(6)},function(t,e,n){Nova.booting(function(t,e,r){t.component("nova-custom-dashboard",n(2))})},function(t,e,n){var r=n(3)(n(4),n(5),!1,null,null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r,o,s){var i,c=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,c=t.default);var u,l="function"==typeof c?c.options:c;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(t,e){return u.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:c,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],mounted:function(){}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("card",{staticClass:"flex flex-col items-center justify-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"flex items-center py-3 border-b border-50"},[e("div",{staticClass:"flex items-center"},[e("h2",{staticClass:"text-center text-3xl text-40 font-light"},[this._v("Chào mừng đến hệ thống quản lý giao dịch.")])]),this._v(" "),e("div",{staticClass:"overflow-hidden overflow-x-auto relative"})])])])},staticRenderFns:[]}},function(t,e){}]);