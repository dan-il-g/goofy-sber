(this.webpackJsonphacksber=this.webpackJsonphacksber||[]).push([[0],{16:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),s=n.n(a),o=n(8),c=n.n(o),i=(n(16),n(1)),l=n.n(i),u=n(3),p=n(4),d=n(5),h=n.n(d),g=(n(7),n(18),n(9)),j=n.n(g),v={"\u0430\u043f\u0442\u0435\u043a\u0430":"apteka.png","\u043e\u0431\u0443\u0432\u044c":"shoes.png","\u043e\u0434\u0435\u0436\u0434\u0430":"shirt.png","\u0434\u043b\u044f \u0441\u043f\u043e\u0440\u0442\u0430":"sport.png","\u0434\u043b\u044f \u0434\u043e\u043c\u0430":"home.png","\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435":"hammer.png","\u043a\u0430\u0444\u0435":"kafe.png","\u043f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u0430\u044f":"cut.png","\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":"shop.png"},b={"\u043f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430":"5.png","\u043a\u0438\u0440\u043e\u0432\u0441\u043a\u0438\u0439":"kirovsky.png","\u043c\u043e\u043d\u0435\u0442\u043a\u0430":"monetka.png","\u043c\u0430\u043a\u0434\u043e\u043d\u0430\u043b\u0434\u0441":"macdonalds.png",kfc:"kfc.png","\u0441\u043f\u043e\u0440\u0442\u043c\u0430\u0441\u0442\u0435\u0440":"sportmaster.png",nike:"nike.png",newbalance:"nb.png","new-balance":"nb.png","\u0433\u0430\u043b\u0430\u043c\u0430\u0440\u0442":"gala.png",dodo:"dodo.png","\u0432\u0438\u043b\u043a\u0430\u043b\u043e\u0436\u043a\u0430":"vilka.png","\u0432\u0438\u043b\u043a\u0430 \u043b\u043e\u0436\u043a\u0430":"vilka.png","\u0436\u0438\u0432\u0438\u043a\u0430":"zhivika.png","\u043a\u0443\u0437\u044c\u043c\u0430":"kuzma.png",hm:"hm.png","\u0438\u043a\u0435\u0430":"ikea.png",ikea:"ikea.png","\u043b\u0435\u0440\u0443\u0430":"lerua.png"};function f(e){return(e=(e=(e=e.toLowerCase()).replace(" ","")).split(","))[0]}var m=function(e,t){var n=function(e,t){t=f(t),e=f(e);var n="/goofy-sber/logos/brands/",r=b[t];if(void 0===r&&void 0===(r=v[e]))return n+"default.png";return n+r}(e,t);return h.a.icon({iconUrl:n,iconRetinaUrl:n,iconSize:[22,22],iconAnchor:[22,22]})};function x(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j.a.v4());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hse.gubanov.site/?ip=",e.next=3,fetch("https://hse.gubanov.site/?ip="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",{lat:parseFloat(r.latitude),lng:parseFloat(r.longitude)});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return t=e.sent,e.next=5,k(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={getIp:x,getLocation_by_ip:k,ApiSetLocation:function(){return w.apply(this,arguments)},geoFindMe:function(e){var t=null,n=null;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(r){var a=r.coords.latitude,s=r.coords.longitude;t=a,n=s,console.log("success",a,s),e(t,n)}),(function(){return alert("Errno"),[null,null]})):alert("\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u043d\u0435\u0442!")},viewPoint:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;null===t&&null===n||e.setView([t,n]),null===r||e.setZoom(r)},addMarkers:function(e,t,n){for(var r=h.a.featureGroup(),a=0;a<t.length;a++){var s=t[a];try{h.a.marker([s.point.lat,s.point.lon],{icon:m(n,s.name)}).addTo(r)}catch(o){console.log(s.point),console.log("O",a,o)}}return[function(){r.addTo(e),e.fitBounds(r.getBounds())},function(){r.removeFrom(e)}]},setResetMyLocation:function(e,t,n){var r=h.a.featureGroup();return h.a.marker([t,n],{icon:function(){var e="/goofy-sber";return h.a.icon({iconUrl:e+"/logos/self_locate.png",iconRetinaUrl:e+"/logos/self_locate.png",iconSize:[28,28],iconAnchor:[28,28]})}()}).addTo(r),[function(){r.addTo(e),e.fitBounds(r.getBounds())},function(){r.removeFrom(e)}]}},S="/goofy-sber",_=function(e){var t=e.maps;return Object(r.jsx)("div",{onClick:function(){t.zoomIn()},className:"zoom-top-bar-up zoom-top-bar-btn",children:Object(r.jsx)("img",{src:S+"/logos/plus.svg",alt:"PlusZoom"})})},M=function(e){var t=e.maps;return Object(r.jsx)("div",{onClick:function(){t.zoomOut()},className:"zoom-top-bar-down zoom-top-bar-btn",children:Object(r.jsx)("img",{src:S+"/logos/minus.svg",alt:"MinusZoom"})})},C=function(e){var t=e.maps;return Object(r.jsxs)("div",{className:"zoom-top-bar",children:[Object(r.jsx)(_,{maps:t}),Object(r.jsx)(M,{maps:t})]})},P=function(e){var t=e.handler;return Object(r.jsx)("div",{onClick:t,className:"to-image-btn btn-my-location",children:Object(r.jsx)("img",{src:S+"/logos/find.svg",alt:"MyLocation"})})},F="rugtio3557";function L(e){return e*(Math.PI/180)}function z(e,t,n,r){var a=L(n-e),s=L(r-t),o=Math.sin(a/2)*Math.sin(a/2)+Math.cos(L(e))*Math.cos(L(n))*Math.sin(s/2)*Math.sin(s/2);return 6371e3*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))}function q(e){return null===e?"":e<1e3?Math.round(100*(e/100).toFixed(1))+" \u043c.":(e/1e3).toFixed(2)+" \u043a\u043c."}function A(){return(A=Object(u.a)(l.a.mark((function e(t,n){var r,a,s,o,c,i,u,p,d,h=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(e){return e.delivery=!1,e.rubrics.forEach((function(t){if(void 0!==t.name){var n=t.name.toLowerCase();console.log(n),-1!=="\u0433\u0438\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u044b\u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u044b\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0433\u0438\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u043f\u044f\u0442\u0451\u0440\u043e\u0447\u043a\u0430\u043f\u044f\u0442\u0435\u0440\u043e\u0447\u043a\u0430".indexOf(n)&&(e.delivery=!0)}})),e},p=function(e){var t={phone:null,instagram:null,vkontakte:null};return e.contact_groups.forEach((function(e){e.contacts.forEach((function(e){void 0!==t[e.type]&&(t[e.type]=e.value)}))})),e.contact_groups=t,e},u=function(e){var t=null;try{t=z(e.point.lat,e.point.lon,n[0],n[1])}catch(r){}finally{return e.distance={text:q(t),distance:t},e}},r=h.length>2&&void 0!==h[2]&&h[2],a=h.length>3&&void 0!==h[3]?h[3]:2e3,s=h.length>4&&void 0!==h[4]?h[4]:null,(o=new URL("https://catalog.api.2gis.com/3.0/items")).searchParams.set("key",F),o.searchParams.set("locale","ru_RU"),o.searchParams.set("fields",["items.point","items.address","items.reviews","items.schedule","items.contact_groups","items.rubrics"]),o.searchParams.set("q",t),o.searchParams.set("sort_point",n[1]+","+n[0]),null!==s&&(o.searchParams.set("viewpoint1",s[0][1]+","+s[0][0]),o.searchParams.set("viewpoint2",s[0][1]+","+s[0][0])),null!==r&&r&&o.searchParams.set("point",n[1]+","+n[0]),o.searchParams.set("radius",parseInt(a)),console.log(o.toString()),e.next=18,fetch(o.toString());case 18:return c=e.sent,e.next=21,c.json();case 21:i=e.sent;try{i.result.items=i.result.items.map(u),i.result.items=i.result.items.map(p),i.result.items=i.result.items.map(d)}catch(l){}return e.abrupt("return",i);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E={get_by_category:function(e,t){return A.apply(this,arguments)}};function I(e){console.log("schedule",e);var t=function(e){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return t[(new Date).getDay()%t.length]}();if(void 0!==e[t].working_hours){var n=function(e){if(void 0!==e){console.log("A, a",e);var t=e.length-1;if(void 0!==e[t])return e[t].to}return""}(e[t].working_hours);if(""!==n)return"\u041e\u0442\u043a\u0440\u044b\u0442\u043e \u0434\u043e "+n}return""}var T=function(e){var t=e.rating;console.log("rating:",t);for(var n=function(e){var t="star-fill.svg";return e.isHide&&(t="star.svg"),t="/goofy-sber/logos/"+t,Object(r.jsx)("img",{className:"star-item",src:t,alt:"star"})},a=Math.round(t),s=[],o=1;o<=5;o++)s.push(a<=0),a-=1;return console.log(s),s=s.map((function(e){return Object(r.jsx)(n,{isHide:e})})),Object(r.jsxs)("div",{className:"Stars",children:[s,Object(r.jsx)("p",{className:"star-item text",children:t.toFixed(1)})]})};function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e.length<=t?e:t||n?(n=n||"...",e.substr(0,t-n.length)+n):e}var R=[["shop.svg","\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b"],["shoes.svg","\u041e\u0431\u0443\u0432\u044c"],["macdonalds.svg","\u041c\u0430\u043a\u0434\u043e\u043d\u0430\u043b\u044c\u0434\u0441","\u0420\u0435\u043a\u043b\u0430\u043c\u0430"],["shirt.svg","\u041e\u0434\u0435\u0436\u0434\u0430"],["sport.svg","\u0421\u043f\u043e\u0440\u0442 \u0442\u043e\u0432\u0430\u0440\u044b"],["home.svg","\u0422\u043e\u0432\u0430\u0440\u0430 \u0434\u043b\u044f \u0434\u043e\u043c\u0430"],["hammer.svg","\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435"],["sber.svg","\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u043d\u0430 \u0434\u043e\u043c","\u0420\u0435\u043a\u043b\u0430\u043c\u0430","https://sbermarket.ru/"],["apteka.svg","\u0410\u043f\u0442\u0435\u043a\u0438"],["eat.svg","\u041a\u0430\u0444\u0435"]];var U=function(e){var t=e.row,n=e.hook,a="";return void 0!==t[2]&&(a=Object(r.jsx)("p",{className:"gray-color",children:t[2]})),Object(r.jsx)("div",{onClick:function(){void 0!==t[3]?window.open(t[3]):n(t[1].toLowerCase())},className:"category-list_item",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"/goofy-sber/logos/category/"+t[0]}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("p",{children:t[1]}),a]})]})})},D=function(e){var t=e.hook,n=R.map((function(e){return Object(r.jsx)(U,{hook:t,row:e})}));return Object(r.jsx)("div",{className:"category-list",children:n})},Z=function(e){var t=e.row,n=e.hook,a=e.querySearch;console.log("querySearch:",a);var s="";void 0!==t.distance.text&&""!==t.distance.text&&(s=Object(r.jsx)("p",{className:"gray-color",children:t.distance.text}));var o=function(e){var t="/goofy-sber/logos/category/",n=t+"default.svg";return R.forEach((function(r){e==r[1].toLowerCase()&&(n=t+r[0])})),n}(a);return Object(r.jsxs)("div",{onClick:function(){n(t)},className:"category-list_item",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:o}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("p",{children:B(t.name,27)}),Object(r.jsx)("p",{className:"gray-color",children:t.address_name})]})]}),s]})},G=function(e){var t=e.data,n=e.hook,a=e.querySearch;try{var s=t.map((function(e,t){return Object(r.jsx)(Z,{querySearch:a,hook:n,row:e},t)}));return Object(r.jsx)("div",{className:"category-list",children:s})}catch(o){return Object(r.jsx)("div",{className:"category-list",children:"..."})}},H=function(e){var t=e.hook,n=e.clearAllPoint,s=e.focusPoint,o="/goofy-sber/logos/",c=Object(a.useState)("popupClose"),i=Object(p.a)(c,2),d=i[0],h=i[1],g=Object(a.useState)(""),j=Object(p.a)(g,2),v=j[0],b=j[1],f=Object(a.useState)(!0),m=Object(p.a)(f,2),x=m[0],O=m[1],k=Object(a.useState)([]),y=Object(p.a)(k,2),w=y[0],N=y[1],S=Object(a.useState)(!1),_=Object(p.a)(S,2),M=_[0],C=_[1],P=Object(a.useState)(null),F=Object(p.a)(P,2),L=F[0],z=F[1],q="popupOpen",A="popupClose";function E(e){console.log("new_state:",e),h("open"===e?q:"close"===e?A:"")}function B(e){document.getElementById("you-input-search-box").value=e,n[0]()}function R(e){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=7;break}b(""),O(!0),N([]),B(""),e.next=12;break;case 7:return b(n),e.next=10,t(n);case 10:r=e.sent,N(r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z="";if(Z=""===v?Object(r.jsxs)("div",{className:"popup-container",children:[Object(r.jsx)("h1",{className:"gray-color",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(r.jsx)(D,{hook:R})]}):Object(r.jsx)("div",{className:"popup-container",children:Object(r.jsx)(G,{querySearch:v,data:w,hook:function(e){s(e),z(e),C(!0),O(!1)}})}),M&&null!==L&&void 0!==L){console.log(L);var H="";void 0!==L.distance.text&&""!==L.distance.text&&(H=Object(r.jsx)("p",{children:L.distance.text}));var J="";void 0!==L.schedule&&(J=I(L.schedule),console.log(">>>",J));var V=function(e){var t=function(e){var t=e.path,n=e.link;return void 0!==n&&null!==n?Object(r.jsx)("div",{onClick:function(){window.open(n)},className:"socials",children:Object(r.jsx)("img",{className:"socials__icon",src:"/goofy-sber/logos/more/"+t,alt:"MoreIcon"})}):""};return[Object(r.jsx)(t,{path:"vk.svg",link:e.vkontakte}),Object(r.jsx)(t,{path:"inst.svg",link:e.instagram}),Object(r.jsx)(t,{path:"phone.svg",link:"tel:"+e.phone})]}(L.contact_groups),W=L.delivery?"show":"unshow";return Object(r.jsx)("div",{id:"popup-trigger-one",className:"popup p-full border-radius",children:Object(r.jsxs)("div",{className:"p-small",children:[Object(r.jsxs)("div",{className:"name-row",children:[Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)("p",{children:L.name}),Object(r.jsx)("p",{className:"gray-color",children:L.address_name})]}),Object(r.jsx)("img",{onClick:function(){C(!1),z(null),O(!0)},src:o+"close.svg",alt:"close"})]}),Object(r.jsx)("div",{className:"text gray-color stars",children:Object(r.jsx)(T,{rating:L.reviews.general_rating})}),Object(r.jsxs)("div",{className:"text gray-color",children:[Object(r.jsx)("p",{children:J}),H]}),Object(r.jsxs)("div",{className:"last-row",children:[Object(r.jsxs)("div",{onClick:function(){"show"==W&&window.open("https://sbermarket.ru/")},className:"buy-button "+W,children:[Object(r.jsx)("a",{children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"}),Object(r.jsx)("img",{src:o+"sber.svg"})]}),V[0],V[1],V[2]]})]})})}return Object(r.jsxs)("div",{id:"popup-trigger-one",className:"popup p-full border-radius "+d,children:[Object(r.jsx)("div",{onClick:function(){d===q||""===d?E("close"):d===A&&E(x?"open":"")},className:"separating-line"}),Object(r.jsx)("div",{className:"popup-container",children:Object(r.jsxs)("div",{className:"search-box",children:[Object(r.jsx)("img",{className:"search-box_img",src:o+"search.svg",alt:"search"}),Object(r.jsx)("input",{id:"you-input-search-box",onClick:function(){E("open")},onChange:function(e){R(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u0438\u043b\u0438 \u0430\u0434\u0440\u0435\u0441"}),Object(r.jsx)("img",{onClick:function(){R("")},className:"search-box_img",src:o+"close.svg",alt:"close"})]})}),Object(r.jsx)("div",{className:"separating-line"}),Z]})};function J(){}var V=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)([J]),c=Object(p.a)(o,2),i=c[0],d=c[1],g=Object(a.useState)(null),j=Object(p.a)(g,2),v=j[0],b=j[1],f=Object(a.useState)([J,J]),m=Object(p.a)(f,2),x=m[0],O=m[1];function k(){return(k=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(){var t,r,a,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"\u0410\u043f\u0442\u0435\u043a\u0430",e.next=3,E.get_by_category(t,n);case 3:if(void 0===(r=e.sent).result||void 0===r.result.items){e.next=17;break}return e.prev=5,a=N.addMarkers(v,r.result.items,t),x[1](),O(a),a[0](),e.abrupt("return",r.result.items);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:return e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.ApiSetLocation();case 2:t=e.sent,s([t.lat,t.lng]);try{n=h.a.map("map",{center:[t.lat,t.lng],zoom:13}),b(n)}catch(r){console.log(r)}case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"main-map",children:[Object(r.jsx)("div",{id:"map"}),Object(r.jsx)(C,{maps:v}),Object(r.jsx)(P,{handler:function(){N.geoFindMe((function(e,t){if(null!==e&&null!==t){N.viewPoint(v,e,t,18),s([e,t]);var n=N.setResetMyLocation(v,e,t);i[0](),d([n[1]]),n[0]()}}))}}),Object(r.jsx)(H,{clearAllPoint:[x[1]],hook:function(e){return k.apply(this,arguments)},focusPoint:function(e){var t=e.point.lat,n=e.point.lon;N.viewPoint(v,t,n,16)}})]})};var W=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("main",{children:Object(r.jsx)(V,{})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root")),K()},7:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.4e0b4e92.chunk.js.map