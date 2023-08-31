/*! For license information please see 882.a9c56f4e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[882],{7457:function(t,r,e){e.d(r,{Z:function(){return f}});e(2791);var n,o,i=e(8820),a=e(168),c=e(5867),u=c.styled.div(n||(n=(0,a.Z)(["\n  margin-top: 16px;\n  display: flex;\n"]))),s=c.styled.button(o||(o=(0,a.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  padding: 8px 16px;\n  margin: 0px 16px 16px 0px;\n  border: none;\n  border-radius: 4px;\n  text-decoration: none;\n  color: ",";\n  font-size: 16px;\n  background-color: ",";\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: ",";\n    background-color: ",";\n    color: ",";\n  }\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n  }\n"])),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.accent}),(function(t){return t.theme.shadows.regular}),(function(t){return t.theme.colors.white}),(function(t){return t.theme.colors.accent})),l=e(184),f=function(t){var r=t.page,e=t.total,n=t.onClick;return(0,l.jsxs)(u,{children:[(0,l.jsxs)(s,{disabled:r<=1,name:"dec",onClick:n,children:[(0,l.jsx)(i.Tbq,{}),"Prev Page"]}),(0,l.jsxs)(s,{disabled:Number(r)===e,name:"inc",onClick:n,children:["Next Page ",(0,l.jsx)(i.qPp,{})]})]})}},9568:function(t,r,e){e.d(r,{Z:function(){return d}});e(2791);var n,o,i=e(7689),a=e(8014),c=e(168),u=e(5867),s=e(1087),l=e(9452),f=u.styled.li(n||(n=(0,c.Z)(["\n  padding: 4px 4px;\n  border-bottom: 1px solid transparent;\n  position: relative;\n"]))),h=(0,u.styled)(s.rU)(o||(o=(0,c.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 160px;\n    height: 240px;\n    display: block;\n    border-radius: 4px;\n    border: 1px solid rgba(43, 134, 197);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: -140px;\n    left: 400px;\n    z-index: 1;\n  }\n"])),(function(t){return t.theme.colors.accent}),(function(t){return t.cover?"url('https://image.tmdb.org/t/p/w500/".concat(t.cover,"')"):"url(".concat(l,")")})),p=e(184),d=function(t){var r=t.films,e=(0,i.TH)();return(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:r.map((function(t){var r=t.id,n=t.title,o=t.poster_path;return(0,p.jsx)(f,{children:(0,p.jsxs)(h,{to:"/movies/".concat(r),state:{from:e},cover:o,children:[(0,p.jsx)(a.sYI,{})," ",n]})},r)}))})})}},4722:function(t,r,e){e.d(r,{Hx:function(){return h},Kd:function(){return f},Mc:function(){return s},ZS:function(){return u},sI:function(){return l}});var n=e(5861),o=e(1243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function x(){}var w={};l(w,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(P([])));L&&L!==e&&n.call(L,c)&&(w=L);var E=x.prototype=g.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function P(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=l(x,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),l(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),l(E,s,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var a="8055d38de66a1b3925ebb8f70d56898e";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c={params:{api_key:a,language:"en-US"}},u=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?api_key=".concat(a,"&page=").concat(r));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r),c);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(r,e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/search/movie?query=".concat(r,"&page=").concat(e),c);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(r,"/credits?"),c);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(r,"/reviews?"),c);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},1882:function(t,r,e){e.r(r),e.d(r,{default:function(){return j}});var n,o,i,a=e(5861),c=e(9439),u=e(2791),s=e(1087),l=e(7596),f=e(4722),h=e(9568),p=e(9263),d=e(168),v=e(8820),y=e(5867).styled,g=y.form(n||(n=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n"]))),m=y.input(o||(o=(0,d.Z)(["\n  font-size: 1rem;\n  padding: 8px 32px 8px 8px;\n  width: 250px;\n  background-color: transparent;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-image: initial;\n  border-bottom: 2px solid rgb(8, 6, 138);\n  outline: none;\n  &:focus {\n    border-bottom: 2px solid rgb(197, 9, 9);\n  }\n"]))),x=y(v.RB5)(i||(i=(0,d.Z)(["\n  width: 25px;\n  height: 25px;\n  position: relative;\n  right: 32px;\n  z-index: 1;\n  opacity: 0.7;\n"]))),w=e(184),b=function(){var t=(0,s.lr)(),r=(0,c.Z)(t,2)[1],e=(0,u.useState)(""),n=(0,c.Z)(e,2),o=n[0],i=n[1];return(0,w.jsxs)(g,{onSubmit:function(t){t.preventDefault();var e=o;if(""===e)return l.Am.error("Enter film details",{position:"top-right",autoClose:3e3,closeOnClick:!0,theme:"light"}),r({});r({q:e,page:1}),i("")},style:{marginBottom:16},autoComplete:"off",children:[(0,w.jsx)(m,{onChange:function(t){i(t.target.value)},value:o,type:"text",name:"searchQuery",placeholder:"search film"}),(0,w.jsx)(x,{})]})},L=e(7457);function E(){E=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var x={};s(x,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==e&&n.call(b,a)&&(x=b);var L=m.prototype=y.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function P(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},j(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}var j=function(){var t,r,e=(0,u.useState)([]),n=(0,c.Z)(e,2),o=n[0],i=n[1],d=(0,u.useState)(!1),v=(0,c.Z)(d,2),y=v[0],g=v[1],m=(0,u.useState)(1),x=(0,c.Z)(m,2),j=x[0],_=x[1],k=(0,s.lr)(),O=(0,c.Z)(k,2),Z=O[0],N=O[1],S=null!==(t=Z.get("q"))&&void 0!==t?t:"",P=null!==(r=Z.get("page"))&&void 0!==r?r:1;(0,u.useEffect)((function(){if(1!==P||""!==S){var t=function(){var t=(0,a.Z)(E().mark((function t(){var r,e,n,o,a;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,f.sI)(S,P);case 4:r=t.sent,e=r.results,n=r.page,o=r.total_pages,a=r.total_results,i(e),_(o),0===a&&l.Am.info("Results not found",{position:"top-right",autoClose:3e3,closeOnClick:!0,theme:"light"}),n>1&&n===o&&l.Am.info("Its last page",{position:"top-right",autoClose:3e3,closeOnClick:!0,theme:"light"}),t.next=17;break;case 15:t.prev=15,t.t0=t.catch(0);case 17:return t.prev=17,g(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,15,17,20]])})));return function(){return t.apply(this,arguments)}}();t()}}),[S,P]);return(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{style:{marginBottom:16},children:"Movies"}),(0,w.jsx)(b,{}),y&&(0,w.jsx)(p.Z,{}),(0,w.jsx)(h.Z,{films:o}),(0,w.jsx)(L.Z,{page:P,total:j,onClick:function(t){switch(t.target.name){case"inc":N({q:S,page:Number(P)+1});break;case"dec":N({q:S,page:Number(P)-1})}}})]})}},9452:function(t,r,e){t.exports=e.p+"static/media/vecteezy_icon-image-not-found-vector_.a573b6549d35f288d82d.jpg"}}]);
//# sourceMappingURL=882.a9c56f4e.chunk.js.map