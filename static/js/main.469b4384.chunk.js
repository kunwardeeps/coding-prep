(this["webpackJsonpcoding-prep"]=this["webpackJsonpcoding-prep"]||[]).push([[0],{12:function(e,n,t){e.exports=t(26)},17:function(e,n,t){},18:function(e,n,t){},24:function(e,n){},25:function(e,n){},26:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(6),c=t.n(a),i=(t(17),t(7)),u=t(8),l=t(11),s=t(10),h=(t(18),t(9)),f=t.n(h),p=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=n.call(this,e)).state={},o}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/kunwardeeps/coding-prep/master/Leetcode_Approach.xlsx").then((function(e){if(!e.ok)throw new Error("fetch failed");return e.arrayBuffer()})).then((function(n){var t=new Uint8Array(n),o=f.a.read(t,{type:"array"});console.log(o),e.setState(o.Sheets)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello, KD"),r.a.createElement("p",null,JSON.stringify(this.state)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.469b4384.chunk.js.map