(this.webpackJsonpverta=this.webpackJsonpverta||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),s=(n(11),n(2)),l=n.n(s),o=n(3),i=n(1),m=n(16),v=(n(13),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),s=Object(i.a)(u,2),v=s[0],f=s[1],h=Object(a.useState)(10),d=Object(i.a)(h,2),p=d[0],b=d[1],j=Object(a.useState)(-1),k=Object(i.a)(j,2),g=k[0],E=k[1],w=Object(a.useState)(null),O=Object(i.a)(w,2),y=O[0],N=O[1],x=Object(a.useRef)(""),S=Object(a.useRef)(10),B=Object(a.useRef)(null),C=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.current=t,n="http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com/search?count=".concat(p,"&prefix=").concat(t,"&randomDelay=true"),f(!0),e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,x.current===t&&(c(r.results),E(-1),f(!1));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(m.a)(C,250),D=Object(i.a)(A,1)[0],I=Object(a.useCallback)((function(e){null===y?(e.target!==B.current&&("ArrowDown"===e.key&&E((function(e){return e<n.length-1&&n.length>0?e+1:0})),"ArrowUp"===e.key&&E((function(e){return e>0?e-1:n.length-1}))),"Enter"===e.key&&n[g]&&R(n[g])):"Backspace"===e.key&&N(null)}),[g,n,y]),R=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com/static/".concat(t),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.text();case 6:r=e.sent,N(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return document.addEventListener("keydown",I),function(){document.removeEventListener("keydown",I)}}),[I]),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,"Verta Assignment"),r.a.createElement("div",null,"search query:"," ",r.a.createElement("input",{className:"queryInput",onChange:function(e){var t=e.target.value;D(t)},disabled:null!==y})),r.a.createElement("div",null,"num results:",r.a.createElement("input",{min:1,disabled:null!==y,ref:B,className:"numInput",type:"number",value:p,onChange:function(e){var t=e.target.value;b(t)},onBlur:function(){var e=parseInt(p,10);isNaN(e)?b(S.current):e<1?(b(1),S.current=1):(S.current=e,b(e))}})),v&&r.a.createElement("div",{className:"spinner"}),!v&&n.length>0&&r.a.createElement("div",{className:"results"},r.a.createElement("h1",null,"Results:"),n.map((function(e,t){return r.a.createElement("div",{key:e,className:t===g?"highlight":""},e)}))),!v&&0===n.length&&"no results",y&&r.a.createElement("div",{className:"contentDialog"},r.a.createElement("button",{onClick:function(){return N(null)}},"Back"),r.a.createElement("div",{className:"contentDialogContent"},y)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.1700fe3e.chunk.js.map