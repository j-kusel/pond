!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="http://localhost:9002",n(n.s=4)}([function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,u=[],f=n(12);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function b(t){var e=document.createElement("style");return t.attrs.type="text/css",m(e,t.attrs),v(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=l++;n=c||(c=b(e)),r=w.bind(null,n,s,!1),o=w.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",m(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e){t.exports=((t,e,n)=>{t.navlinks=n.navlinks,t.title=n.title,e.fakeposts.query({}).$promise.then(e=>t.fakeposts=e||{}).catch(t=>console.log(t))})},function(t,e,n){const r=n(21);t.exports=function(){return{restrict:"E",replace:!0,scope:{api:"="},template:r,link:(t,e,n)=>{console.log("sassy link works")}}}},function(t,e,n){"use strict";n.r(e);const r=n(23);var o=function(){return{restrict:"E",scope:{name:"="},replace:!0,template:r,link:(t,e,n)=>{}}};angular.module("laboratory.ngDemo",[]).directive("greeter",[o]);const i=n(22);var s=function(){return{restrict:"E",replace:!0,template:i,link:(t,e,n)=>{}}},a=(angular.module("laboratory.layoutSass",[]).directive("bloc",[s]),n(3)),c=n.n(a);const l=n(20);var u=function(){return{restrict:"E",replace:!0,scope:{links:"="},template:l}};const f=n(19);const p=n(18);const d=n(17);var v=n(2),h=n.n(v),b=angular.module("laboratory.sassPlay",["ngResource"]).directive("sassy",[c.a]).directive("navbar",[u]).directive("headbar",[function(){return{restrict:"E",replace:!0,scope:{title:"="},template:f}}]).directive("feed",[function(){return{restrict:"E",replace:!0,template:p,transclude:!0}}]).directive("post",[function(){return{restrict:"E",replace:!0,scope:{post:"="},template:d}}]).constant("CONSTANTS",{navlinks:[{name:"home",url:"/"},{name:"about",url:"/about"},{name:"news",url:"/news"}],mongo:"http://localhost:9003/api/sassplay",title:"this is a big title"}).factory("API",["$resource","CONSTANTS",function(t,e){return{fakeposts:t(e.mongo+"/fakeposts",{TITLE:"@TITLE",CONTENT:"@CONTENT"})}}]).controller("NavController",["$scope","API","CONSTANTS",h.a]).name;n(16),n(11);angular.module("laboratory",["laboratory.ngDemo","laboratory.layoutSass",b])},,,,,,function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".bloc {\n  background-color: white;\n  color: #008080;\n  -moz-transition: background-color, 1s, 5s;\n  -o-transition: background-color, 1s, 5s;\n  -webkit-transition: background-color, 1s, 5s;\n  transition: background-color, 1s, 5s; }\n  .bloc:hover {\n    background-color: #008080;\n    color: white; }\n",""])},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){t.exports=n.p+"1db0c0f0dbe368d6724833bd95c8a94f.otf"},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){var r=n(14);(t.exports=n(1)(!1)).push([t.i,"@font-face {\n  font-family: 'Orkney';\n  src: url("+r(n(13))+') format("opentype");\n  font-weight: normal;\n  font-style: normal; }\n',""])},function(t,e,n){var r=n(15);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e){t.exports='<div class="post">\n    <h3 class="post-title">{{ post.TITLE }}</h3>\n    <p class="post-content">{{ post.CONTENT }}</p>\n</div>\n'},function(t,e){t.exports='<div id="feed">\n    <ng-transclude></ng-transclude>\n</div>\n'},function(t,e){t.exports='<div id="headbar">\n    <p class="headbar-title">{{ title }}</p>\n</div>\n'},function(t,e){t.exports='<ul id="navbar">\n    <li class="navbar-link" ng-repeat="link in links"><a class="navbar-a" ng-href="{{ link.url }}">{{ link.name }}</a></li>\n</ul>\n'},function(t,e){t.exports="<p>Yay we got here</p>\n"},function(t,e){t.exports='<div class="bloc">\n    <p>this is a bloc</p>\n</div>\n'},function(t,e){t.exports='<div>\n    <p class="greeting">Hello, {{ name }}!</p>\n</div>\n'}]);