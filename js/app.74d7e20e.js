(function(e){function t(t){for(var o,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-26998b15":"2924441b","chunk-2d210a28":"30955f2c","chunk-2d2172fb":"86d7a22a","chunk-3415690a":"f4cc6aea","chunk-34424003":"78e6ba7f","chunk-af5dea4a":"c42bf746","chunk-e8e5fd8a":"52e4d15b"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var c,i=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(e),c=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+c+")");a.type=o,a.request=c,n[1](a)}r[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:s})},12e4);s.onerror=s.onload=c,i.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"25db":function(e,t,n){},"2f70":function(e,t,n){"use strict";var o=n("25db"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"app"}},[n("router-view")],1)},c=[],a=n("d81b"),u={data:function(){return{loading:!0}},mounted:function(){var e=this;setInterval(function(){e.loading=!a["a"].connected()},300)}},i=u,s=(n("034f"),n("2877")),l=Object(s["a"])(i,r,c,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,p=n("5c96"),f=n.n(p);n("0fae");o["default"].use(f.a);var h=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("el-input",{attrs:{type:"text",placeholder:"学号"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}),n("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("el-button",{on:{click:e.login}},[e._v("登陆")])],1)},v=[],g=(n("96cf"),n("1da1"));function m(e,t){window.localStorage&&window.localStorage.setItem(e,t)}function w(e,t){var n="";return window.localStorage&&(n=window.localStorage.getItem(e)),null!=n&&""!=n||(n=t),n}var k={get:w,set:m},y={name:"Login",data:function(){return{account:k.get("user.account",""),password:k.get("user.password","")}},methods:{login:function(){var e=this;Object(g["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a["a"].call("login",{account:e.account,password:e.password});case 3:n=t.sent,k.set("user.account",e.account),k.set("user.password",e.password),"student"==n.details.role?Object(g["a"])(regeneratorRuntime.mark(function t(){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a["a"].call("appointment.student.status");case 3:n=t.sent,o=n.details.status,t.t0=o,t.next="done"===t.t0?8:"appointed"===t.t0?10:"unappointed"===t.t0?12:14;break;case 8:return e.$router.push("/student/done"),t.abrupt("break",16);case 10:return e.$router.push("/student/appointed"),t.abrupt("break",16);case 12:return e.$router.push("/student/trs"),t.abrupt("break",16);case 14:console.log("unexpect status:",o),e.$router.push("/error");case 16:t.next=22;break;case 18:t.prev=18,t.t1=t["catch"](0),console.log(t.t1),e.$router.push("/error");case 22:case"end":return t.stop()}},t,this,[[0,18]])}))():"teacher"==n.details.role?e.$router.push("/teacher"):"admin"==n.details.role?(e.$message("TODO"),e.$router.push("/error")):e.$router.push("/error"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),"unauthorized"==t.t0.status?e.$message.error("学号或密码错误"):e.$message.error("登陆失败");case 12:case"end":return t.stop()}},t,this,[[0,9]])}))()}}},E=y,S=(n("2f70"),Object(s["a"])(E,b,v,!1,null,"33f7bac6",null));S.options.__file="Login.vue";var O=S.exports;o["default"].use(h["a"]);var x=function(){return n.e("chunk-e8e5fd8a").then(n.bind(null,"e19d"))},R=function(){return n.e("chunk-af5dea4a").then(n.bind(null,"d670"))},A=function(){return n.e("chunk-34424003").then(n.bind(null,"57ec"))},N=function(){return n.e("chunk-2d2172fb").then(n.bind(null,"c63e"))},T=function(){return n.e("chunk-2d210a28").then(n.bind(null,"b972"))},I=function(){return n.e("chunk-3415690a").then(n.bind(null,"6b7b"))},_=function(){return n.e("chunk-26998b15").then(n.bind(null,"6895"))},C=new h["a"]({mode:"history",routes:[{path:"/",alias:"/login",name:"login",component:O},{path:"/student/trs",name:"student/trs",component:x},{path:"/student/appointed",name:"student/appointed",component:R},{path:"/student/done",component:T},{path:"/teacher",component:A},{path:"/teacher/schedule",component:I},{path:"/teacher/manage/student",component:_},{path:"/error",props:!0,component:N},{path:"*",redirect:"/"}]});o["default"].config.productionTip=!0,new o["default"]({router:C,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,n){},d81b:function(e,t,n){"use strict";n("96cf");var o=n("1da1"),r=n("53ca");n("cadf"),n("551c"),n("097d");function c(e){return new Promise(function(t,n){setTimeout(function(){t()},e)})}var a=c;function u(e,t,n){var o={debug:!1,automaticOpen:!0,reconnectInterval:1e3,maxReconnectInterval:3e4,reconnectDecay:1.5,timeoutInterval:2e3,maxReconnectAttempts:null,binaryType:"blob"};for(var r in n||(n={}),o)"undefined"!==typeof n[r]?this[r]=n[r]:this[r]=o[r];this.url=e,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var c,a=this,i=!1,s=!1,l=document.createElement("div");function d(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}l.addEventListener("open",function(e){a.onopen(e)}),l.addEventListener("close",function(e){a.onclose(e)}),l.addEventListener("connecting",function(e){a.onconnecting(e)}),l.addEventListener("message",function(e){a.onmessage(e)}),l.addEventListener("error",function(e){a.onerror(e)}),this.addEventListener=l.addEventListener.bind(l),this.removeEventListener=l.removeEventListener.bind(l),this.dispatchEvent=l.dispatchEvent.bind(l),this.open=function(e){if(c=new WebSocket(a.url,t||[]),c.binaryType=this.binaryType,e){if(this.maxReconnectAttempts&&this.reconnectAttempts>this.maxReconnectAttempts)return}else l.dispatchEvent(d("connecting")),this.reconnectAttempts=0;(a.debug||u.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",a.url);var n=c,o=setTimeout(function(){(a.debug||u.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",a.url),s=!0,n.close(),s=!1},a.timeoutInterval);c.onopen=function(t){clearTimeout(o),(a.debug||u.debugAll)&&console.debug("ReconnectingWebSocket","onopen",a.url),a.protocol=c.protocol,a.readyState=WebSocket.OPEN,a.reconnectAttempts=0;var n=d("open");n.isReconnect=e,e=!1,l.dispatchEvent(n)},c.onclose=function(t){if(clearTimeout(o),c=null,i)a.readyState=WebSocket.CLOSED,l.dispatchEvent(d("close"));else{a.readyState=WebSocket.CONNECTING;var n=d("connecting");n.code=t.code,n.reason=t.reason,n.wasClean=t.wasClean,l.dispatchEvent(n),e||s||((a.debug||u.debugAll)&&console.debug("ReconnectingWebSocket","onclose",a.url),l.dispatchEvent(d("close")));var o=a.reconnectInterval*Math.pow(a.reconnectDecay,a.reconnectAttempts);setTimeout(function(){a.reconnectAttempts++,a.open(!0)},o>a.maxReconnectInterval?a.maxReconnectInterval:o)}},c.onmessage=function(e){(a.debug||u.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",a.url,e.data);var t=d("message");t.data=e.data,l.dispatchEvent(t)},c.onerror=function(e){(a.debug||u.debugAll)&&console.debug("ReconnectingWebSocket","onerror",a.url,e),l.dispatchEvent(d("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(e){if(c)return(a.debug||u.debugAll)&&console.debug("ReconnectingWebSocket","send",a.url,e),c.send(e);throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(e,t){"undefined"==typeof e&&(e=1e3),i=!0,c&&c.close(e,t)},this.refresh=function(){c&&c.close()}}u.prototype.onopen=function(e){},u.prototype.onclose=function(e){},u.prototype.onconnecting=function(e){},u.prototype.onmessage=function(e){},u.prototype.onerror=function(e){},u.debugAll=!1,u.CONNECTING=WebSocket.CONNECTING,u.OPEN=WebSocket.OPEN,u.CLOSING=WebSocket.CLOSING,u.CLOSED=WebSocket.CLOSED;var i=u,s=new i("ws://39.105.42.45:8100/ws",null,{maxReconnectInterval:3e3,reconnectDecay:1}),l=!1,d={},p=1;function f(e,t,n){void 0!=t&&null!=t||(t={}),"object"!=Object(r["a"])(n)&&(n={});var c=n.log||function(){};p++;var u=String(p);return new Promise(function(){var n=Object(o["a"])(regeneratorRuntime.mark(function n(o,r){var i;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:i=0;case 1:if(!(i<1e8)||l){n.next=7;break}return n.next=4,a(100);case 4:i++,n.next=1;break;case 7:c({req_id:u}),l?(c({req_id:u}),d[u]=function(e){c({ret:e}),"ok"==e.status?o(e):r(e)},s.send(JSON.stringify({id:u,func:e,argv:t})),c("sent")):r({status:"err",details:{err:"unconnected"}});case 9:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}())}function h(e){return"ok"===e.status}s.onopen=function(){l=!0},s.onclose=function(){l=!1,d={},p=1},s.onmessage=function(e){var t=JSON.parse(e.data),n=d[t.id];"function"==typeof n&&(n(t),delete d[t.id])};t["a"]={call:f,ok:h,needAuth:function(e){return!h(e)&&"require-auth"==e.details.err},connected:function(){return l}}}});
//# sourceMappingURL=app.74d7e20e.js.map