(this.webpackJsonphacksber=this.webpackJsonphacksber||[]).push([[0],{20:function(t,n,e){},30:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e(0),c=e.n(a),o=e(9),u=e.n(o),i=(e(20),e(2)),s=e.n(i),l=e(3),p=e(5),f=e(32),g=e(10),b=e.n(g),h=(e(7),e(8),e(11)),v=e.n(h);function j(){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",v.a.v4());case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(s.a.mark((function t(n){var e,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://eugene.gubanov.site/r.php?ip=",t.next=3,fetch("https://eugene.gubanov.site/r.php?ip="+n);case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",{lat:parseFloat(r.latitude),lng:parseFloat(r.longitude)});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=Object(l.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return n=t.sent,t.next=5,O(n);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var w={getIp:j,getLocation_by_ip:O,ApiSetLocation:function(){return x.apply(this,arguments)},geoFindMe:function(t){var n=null,e=null;if(navigator.geolocation){var r=navigator.geolocation.getCurrentPosition((function(r){var a=r.coords.latitude,c=r.coords.longitude;n=a,e=c,console.log("success",a,c),t(n,e)}),(function(){return alert("Errno"),[null,null]}));console.log("r:",r)}else alert("\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043d\u0435\u0442!");return console.log([n,e]),[n,e]},viewPoint:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;null===n&&null===e||t.setView([n,e]),null===r||t.setZoom(r)}};var y=function(){var t=Object(a.useState)(Object(r.jsx)(f.a,{size:"large"})),n=Object(p.a)(t,2),e=(n[0],n[1]),c=Object(a.useState)(null),o=Object(p.a)(c,2),u=(o[0],o[1]),i=Object(a.useState)(null),g=Object(p.a)(i,2),h=g[0],v=g[1];return Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.ApiSetLocation();case 2:n=t.sent,e(null),u([n.lat,n.lng]),r=b.a.map("map",{center:[n.lat,n.lng],zoom:13}),v(r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("JJJ"),function(){t.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"main-map",children:[Object(r.jsx)("div",{id:"map"}),Object(r.jsx)("div",{onClick:function(){w.geoFindMe((function(t,n){null!==t&&null!==n&&(w.viewPoint(h,t,n,18),u([t,n]))}))},className:"my-location"})]})};var k=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("main",{children:Object(r.jsx)(y,{})})})},F=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,33)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;e(t),r(t),a(t),c(t),o(t)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),F()},7:function(t,n,e){}},[[30,1,2]]]);
//# sourceMappingURL=main.d6a0c2da.chunk.js.map