(this.webpackJsonphacksber=this.webpackJsonphacksber||[]).push([[0],{17:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e(2),o=e.n(a),s=e(9),c=e.n(s),i=(e(17),e(1)),u=e.n(i),l=e(4),p=e(5),f=e(3),h=e.n(f),d=(e(7),e(8),e(10)),g=e.n(d),m={"\u0430\u043f\u0442\u0435\u043a\u0430":"apteka.png","\u043c\u0430\u0433\u0430\u0437\u0438\u043d":"shop.png"},v={"\u043f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430":"5.png","\u043c\u043e\u043d\u0435\u0442\u043a\u0430":"monetka.png"};function b(t){return(t=(t=(t=t.toLowerCase()).replace(" ","")).split(","))[0]}var j=function(t,n){var e=function(t,n){n=b(n),t=b(t);var e="/goofy-sber/logos/brands/",r=v[n];if(void 0===r&&void 0===(r=m[t]))return e+"default.png";return e+r}(t,n);return h.a.icon({iconUrl:e,iconRetinaUrl:e,iconSize:[18,18],iconAnchor:[20,20]})};function x(){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.a.v4());case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark((function t(n){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://eugene.gubanov.site/r.php?ip=",t.next=3,fetch("https://eugene.gubanov.site/r.php?ip="+n);case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",{lat:parseFloat(r.latitude),lng:parseFloat(r.longitude)});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.next=5,y(n);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var M={getIp:x,getLocation_by_ip:y,ApiSetLocation:function(){return k.apply(this,arguments)},geoFindMe:function(t){var n=null,e=null;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(r){var a=r.coords.latitude,o=r.coords.longitude;n=a,e=o,console.log("success",a,o),t(n,e)}),(function(){return alert("Errno"),[null,null]})):alert("\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043d\u0435\u0442!")},viewPoint:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;null===n&&null===e||t.setView([n,e]),null===r||t.setZoom(r)},addMarkers:function(t,n,e){for(var r=h.a.featureGroup(),a=0;a<n.length;a++){var o=n[a];try{h.a.marker([o.point.lat,o.point.lon],{icon:j(e,o.name)}).addTo(r)}catch(s){console.log(o.point),console.log("O",a,s)}}return[function(){r.addTo(t),t.fitBounds(r.getBounds())},function(){r.removeFrom(t)}]},setResetMyLocation:function(t,n,e){var r=h.a.featureGroup();return h.a.marker([n,e],{icon:function(){var t="/goofy-sber";return h.a.icon({iconUrl:t+"/logos/self_locate.png",iconRetinaUrl:t+"/logos/self_locate.png",iconSize:[28,28],iconAnchor:[28,28]})}()}).addTo(r),[function(){r.addTo(t),t.fitBounds(r.getBounds())},function(){r.removeFrom(t)}]}},P="/goofy-sber",F=function(t){var n=t.maps;return Object(r.jsx)("div",{onClick:function(){n.zoomIn()},className:"zoom-top-bar-up zoom-top-bar-btn",children:Object(r.jsx)("img",{src:P+"/logos/plus.svg",alt:"PlusZoom"})})},S=function(t){var n=t.maps;return Object(r.jsx)("div",{onClick:function(){n.zoomOut()},className:"zoom-top-bar-down zoom-top-bar-btn",children:Object(r.jsx)("img",{src:P+"/logos/minus.svg",alt:"MinusZoom"})})},_=function(t){var n=t.maps;return Object(r.jsxs)("div",{className:"zoom-top-bar",children:[Object(r.jsx)(F,{maps:n}),Object(r.jsx)(S,{maps:n})]})},z=function(t){var n=t.handler;return Object(r.jsx)("div",{onClick:n,className:"to-image-btn btn-my-location",children:Object(r.jsx)("img",{src:P+"/logos/find.svg",alt:"MyLocation"})})},C="rugtio3557";function L(t){return t*(Math.PI/180)}function N(t,n,e,r){var a=L(e-t),o=L(r-n),s=Math.sin(a/2)*Math.sin(a/2)+Math.cos(L(t))*Math.cos(L(e))*Math.sin(o/2)*Math.sin(o/2);return 6371e3*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}function B(t){return null===t?"":t<1e3?100*(t/100).toFixed(1)+" \u043c.":(t/1e3).toFixed(2)+" \u043a\u043c."}function I(){return(I=Object(l.a)(u.a.mark((function t(n,e){var r,a,o,s,c,i,l,p=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(t){var n=null;try{n=N(t.point.lat,t.point.lon,e[0],e[1])}catch(r){}finally{return t.distance={text:B(n),distance:n},t}},r=p.length>2&&void 0!==p[2]&&p[2],a=p.length>3&&void 0!==p[3]?p[3]:2e3,o=p.length>4&&void 0!==p[4]?p[4]:null,(s=new URL("https://catalog.api.2gis.com/3.0/items")).searchParams.set("key",C),s.searchParams.set("locale","ru_RU"),s.searchParams.set("fields",["items.point","items.address","items.reviews","items.schedule","items.contact_groups"]),s.searchParams.set("q",n),s.searchParams.set("sort_point",e[1]+","+e[0]),null!==o&&(s.searchParams.set("viewpoint1",o[0][1]+","+o[0][0]),s.searchParams.set("viewpoint2",o[0][1]+","+o[0][0])),null!==r&&r&&s.searchParams.set("point",e[1]+","+e[0]),s.searchParams.set("radius",parseInt(a)),console.log(s.toString()),t.next=16,fetch(s.toString());case 16:return c=t.sent,t.next=19,c.json();case 19:i=t.sent;try{i.result.items=i.result.items.map(l)}catch(u){}return t.abrupt("return",i);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var R={get_by_category:function(t,n){return I.apply(this,arguments)}};function T(){}var U=function(){var t=Object(a.useState)(null),n=Object(p.a)(t,2),e=n[0],o=n[1],s=Object(a.useState)([T]),c=Object(p.a)(s,2),i=c[0],f=c[1],d=Object(a.useState)(null),g=Object(p.a)(d,2),m=g[0],v=g[1],b=Object(a.useState)([T,T]),j=Object(p.a)(b,2),x=j[0],O=j[1];function y(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark((function t(){var n,r,a,o=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"\u0410\u043f\u0442\u0435\u043a\u0430",t.next=3,R.get_by_category(n,e);case 3:if(void 0!==(r=t.sent).result&&void 0!==r.result.items)try{console.log("search",r.result.items),a=M.addMarkers(m,r.result.items,n),console.log(a),x[1](),O(a),a[0]()}catch(s){console.log(s)}case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.ApiSetLocation();case 2:n=t.sent,o([n.lat,n.lng]);try{e=h.a.map("map",{center:[n.lat,n.lng],zoom:13}),v(e)}catch(r){console.log(r)}case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"main-map",children:[Object(r.jsx)("div",{id:"map"}),Object(r.jsx)("div",{onClick:y,className:"my-location-2"}),Object(r.jsx)("input",{onChange:function(t){y(t.target.value)},className:"search out"}),Object(r.jsx)(_,{maps:m}),Object(r.jsx)(z,{handler:function(){M.geoFindMe((function(t,n){if(null!==t&&null!==n){M.viewPoint(m,t,n,18),o([t,n]);var e=M.setResetMyLocation(m,t,n);i[0](),f([e[1]]),e[0]()}}))}})]})};var A=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("main",{children:Object(r.jsx)(U,{})})})},q=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,s=n.getTTFB;e(t),r(t),a(t),o(t),s(t)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),q()},7:function(t,n,e){}},[[27,1,2]]]);
//# sourceMappingURL=main.20ea556c.chunk.js.map