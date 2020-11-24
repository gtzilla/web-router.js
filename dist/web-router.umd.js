!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).webRouterJs={})}(this,function(n){function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,u=Object.prototype,i="undefined"!=typeof Symbol?Symbol.prototype:null,o=e.push,a=e.slice,l=u.toString,f=u.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,s=Array.isArray,p=Object.keys,v=Object.create,h=c&&ArrayBuffer.isView,d=isNaN,g=isFinite,y=!{toString:null}.propertyIsEnumerable("toString"),m=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],b=Math.pow(2,53)-1;function w(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}}function j(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function x(n){return!0===n||!1===n||"[object Boolean]"===l.call(n)}function _(n){return function(t){return l.call(t)==="[object "+n+"]"}}var A=_("String"),E=_("Number"),S=_("Date"),k=_("RegExp"),I=_("Error"),O=_("Symbol"),M=_("Map"),L=_("WeakMap"),R=_("Set"),N=_("WeakSet"),B=_("ArrayBuffer"),D=_("DataView"),F=s||_("Array"),T=_("Function");"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof(r.document&&r.document.childNodes)&&(T=function(n){return"function"==typeof n||!1});var V=T;function K(n,t){return null!=n&&f.call(n,t)}var P=_("Arguments");!function(){P(arguments)||(P=function(n){return K(n,"callee")})}();var U=P;function q(n){return E(n)&&d(n)}function W(n){return function(){return n}}function C(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=b}}function z(n){return function(t){return null==t?void 0:t[n]}}var J=z("byteLength"),$=C(J),G=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,H=c?function(n){return h?h(n)&&!D(n):$(n)&&G.test(l.call(n))}:W(!1),Q=z("length"),X=C(Q);function Y(n,t){t=function(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return t[n]},push:function(r){return t[r]=!0,n.push(r)}}}(t);var r=m.length,e=n.constructor,i=V(e)&&e.prototype||u,o="constructor";for(K(n,o)&&!t.contains(o)&&t.push(o);r--;)(o=m[r])in n&&n[o]!==i[o]&&!t.contains(o)&&t.push(o)}function Z(n){if(!j(n))return[];if(p)return p(n);var t=[];for(var r in n)K(n,r)&&t.push(r);return y&&Y(n,t),t}function nn(n,t){var r=Z(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function tn(n){return n instanceof tn?n:this instanceof tn?void(this._wrapped=n):new tn(n)}function rn(n){if(!j(n))return[];var t=[];for(var r in n)t.push(r);return y&&Y(n,t),t}function en(n){for(var t=Z(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function un(n){for(var t={},r=Z(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function on(n){var t=[];for(var r in n)V(n[r])&&t.push(r);return t.sort()}function an(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,l=0;l<a;l++){var f=o[l];t&&void 0!==r[f]||(r[f]=i[f])}return r}}tn.VERSION="1.11.0",tn.prototype.valueOf=tn.prototype.toJSON=tn.prototype.value=function(){return this._wrapped},tn.prototype.toString=function(){return String(this._wrapped)};var ln=an(rn),fn=an(Z),cn=an(rn,!0);function sn(n){if(!j(n))return{};if(v)return v(n);var t=function(){};t.prototype=n;var r=new t;return t.prototype=null,r}function pn(n){return j(n)?F(n)?n.slice():ln({},n):n}function vn(n){return n}function hn(n){return n=fn({},n),function(t){return nn(t,n)}}function dn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function gn(n){return F(n)?function(t){return dn(t,n)}:z(n)}function yn(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}}function mn(n,t,r){return null==n?vn:V(n)?yn(n,t,r):j(n)&&!F(n)?hn(n):gn(n)}function bn(n,t){return mn(n,t,Infinity)}function wn(n,t,r){return tn.iteratee!==bn?tn.iteratee(n,t):mn(n,t,r)}function jn(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}tn.iteratee=bn;var xn=Date.now||function(){return(new Date).getTime()};function _n(n){var t=function(t){return n[t]},r="(?:"+Z(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,t):n}}var An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},En=_n(An),Sn=_n(un(An)),kn=tn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},In=/(.)^/,On={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Mn=/\\|'|\r|\n|\u2028|\u2029/g;function Ln(n){return"\\"+On[n]}var Rn=0;function Nn(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=sn(n.prototype),o=n.apply(i,u);return j(o)?o:i}var Bn=w(function(n,t){var r=Bn.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),a=0;a<i;a++)o[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)o.push(arguments[u++]);return Nn(n,e,this,this,o)};return e});Bn.placeholder=tn;var Dn=w(function(n,t,r){if(!V(n))throw new TypeError("Bind must be called on a function");var e=w(function(u){return Nn(n,e,t,this,r.concat(u))});return e});function Fn(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=Infinity;for(var u=e.length,i=0,o=Q(n);i<o;i++){var a=n[i];if(X(a)&&(F(a)||U(a)))if(t>1)Fn(a,t-1,r,e),u=e.length;else for(var l=0,f=a.length;l<f;)e[u++]=a[l++];else r||(e[u++]=a)}return e}var Tn=w(function(n,t){var r=(t=Fn(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=Dn(n[e],n)}return n}),Vn=w(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),Kn=Bn(Vn,tn,1);function Pn(n){return function(){return!n.apply(this,arguments)}}function Un(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}var qn=Bn(Un,2);function Wn(n,t,r){t=wn(t,r);for(var e,u=Z(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e}function Cn(n){return function(t,r,e){r=wn(r,e);for(var u=Q(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}var zn=Cn(1),Jn=Cn(-1);function $n(n,t,r,e){for(var u=(r=wn(r,e,1))(t),i=0,o=Q(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i}function Gn(n,t,r){return function(e,u,i){var o=0,l=Q(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+l,o):l=i>=0?Math.min(i+1,l):i+l+1;else if(r&&i&&l)return e[i=r(e,u)]===u?i:-1;if(u!=u)return(i=t(a.call(e,o,l),q))>=0?i+o:-1;for(i=n>0?o:l-1;i>=0&&i<l;i+=n)if(e[i]===u)return i;return-1}}var Hn=Gn(1,zn,$n),Qn=Gn(-1,Jn);function Xn(n,t,r){var e=(X(n)?zn:Wn)(n,t,r);if(void 0!==e&&-1!==e)return n[e]}function Yn(n,t,r){var e,u;if(t=yn(t,r),X(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=Z(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n}function Zn(n,t,r){t=wn(t,r);for(var e=!X(n)&&Z(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i}function nt(n){var t=function(t,r,e,u){var i=!X(t)&&Z(t),o=(i||t).length,a=n>0?0:o-1;for(u||(e=t[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var l=i?i[a]:a;e=r(e,t[l],l,t)}return e};return function(n,r,e,u){var i=arguments.length>=3;return t(n,yn(r,u,4),e,i)}}var tt=nt(1),rt=nt(-1);function et(n,t,r){var e=[];return t=wn(t,r),Yn(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e}function ut(n,t,r){t=wn(t,r);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0}function it(n,t,r){t=wn(t,r);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1}function ot(n,t,r,e){return X(n)||(n=en(n)),("number"!=typeof r||e)&&(r=0),Hn(n,t,r)>=0}var at=w(function(n,t,r){var e,u;return V(t)?u=t:F(t)&&(e=t.slice(0,-1),t=t[t.length-1]),Zn(n,function(n){var i=u;if(!i){if(e&&e.length&&(n=dn(n,e)),null==n)return;i=n[t]}return null==i?i:i.apply(n,r)})});function lt(n,t){return Zn(n,gn(t))}function ft(n,t,r){var e,u,i=-Infinity,o=-Infinity;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,l=(n=X(n)?n:en(n)).length;a<l;a++)null!=(e=n[a])&&e>i&&(i=e);else t=wn(t,r),Yn(n,function(n,r,e){((u=t(n,r,e))>o||-Infinity===u&&-Infinity===i)&&(i=n,o=u)});return i}function ct(n,t,r){if(null==t||r)return X(n)||(n=en(n)),n[jn(n.length-1)];var e=X(n)?pn(n):en(n),u=Q(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var a=jn(o,i),l=e[o];e[o]=e[a],e[a]=l}return e.slice(0,t)}function st(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=wn(e,u),Yn(r,function(t,u){var o=e(t,u,r);n(i,t,o)}),i}}var pt=st(function(n,t,r){K(n,r)?n[r].push(t):n[r]=[t]}),vt=st(function(n,t,r){n[r]=t}),ht=st(function(n,t,r){K(n,r)?n[r]++:n[r]=1}),dt=st(function(n,t,r){n[r?0:1].push(t)},!0),gt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function yt(n,t,r){return t in r}var mt=w(function(n,t){var r={},e=t[0];if(null==n)return r;V(e)?(t.length>1&&(e=yn(e,t[1])),t=rn(n)):(e=yt,t=Fn(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}return r}),bt=w(function(n,t){var r,e=t[0];return V(e)?(e=Pn(e),t.length>1&&(r=t[1])):(t=Zn(Fn(t,!1,!1),String),e=function(n,r){return!ot(t,r)}),mt(n,e,r)});function wt(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function jt(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:wt(n,n.length-t)}function xt(n,t,r){return a.call(n,null==t||r?1:t)}var _t=w(function(n,t){return t=Fn(t,!0,!0),et(n,function(n){return!ot(t,n)})}),At=w(function(n,t){return _t(n,t)});function Et(n,t,r,e){x(t)||(e=r,r=t,t=!1),null!=r&&(r=wn(r,e));for(var u=[],i=[],o=0,a=Q(n);o<a;o++){var l=n[o],f=r?r(l,o,n):l;t&&!r?(o&&i===f||u.push(l),i=f):r?ot(i,f)||(i.push(f),u.push(l)):ot(u,l)||u.push(l)}return u}var St=w(function(n){return Et(Fn(n,!0,!0))});function kt(n){for(var t=n&&ft(n,Q).length||0,r=Array(t),e=0;e<t;e++)r[e]=lt(n,e);return r}var It=w(kt);function Ot(n,t){return n._chain?tn(t).chain():t}function Mt(n){return Yn(on(n),function(t){var r=tn[t]=n[t];tn.prototype[t]=function(){var n=[this._wrapped];return o.apply(n,arguments),Ot(this,r.apply(tn,n))}}),tn}Yn(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];tn.prototype[n]=function(){var r=this._wrapped;return null!=r&&(t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0]),Ot(this,r)}}),Yn(["concat","join","slice"],function(n){var t=e[n];tn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=t.apply(n,arguments)),Ot(this,n)}});var Lt=Mt({__proto__:null,VERSION:"1.11.0",restArguments:w,isObject:j,isNull:function(n){return null===n},isUndefined:function(n){return void 0===n},isBoolean:x,isElement:function(n){return!(!n||1!==n.nodeType)},isString:A,isNumber:E,isDate:S,isRegExp:k,isError:I,isSymbol:O,isMap:M,isWeakMap:L,isSet:R,isWeakSet:N,isArrayBuffer:B,isDataView:D,isArray:F,isFunction:V,isArguments:U,isFinite:function(n){return!O(n)&&g(n)&&!isNaN(parseFloat(n))},isNaN:q,isTypedArray:H,isEmpty:function(n){return null==n||(X(n)&&(F(n)||A(n)||U(n))?0===n.length:0===Z(n).length)},isMatch:nn,isEqual:function(n,t){return function n(t,r,e,u){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return!1;if(t!=t)return r!=r;var o=typeof t;return("function"===o||"object"===o||"object"==typeof r)&&function t(r,e,u,o){r instanceof tn&&(r=r._wrapped),e instanceof tn&&(e=e._wrapped);var a=l.call(r);if(a!==l.call(e))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+r==""+e;case"[object Number]":return+r!=+r?+e!=+e:0==+r?1/+r==1/e:+r==+e;case"[object Date]":case"[object Boolean]":return+r==+e;case"[object Symbol]":return i.valueOf.call(r)===i.valueOf.call(e);case"[object ArrayBuffer]":return t(new DataView(r),new DataView(e),u,o);case"[object DataView]":var f=J(r);if(f!==J(e))return!1;for(;f--;)if(r.getUint8(f)!==e.getUint8(f))return!1;return!0}if(H(r))return t(new DataView(r.buffer),new DataView(e.buffer),u,o);var c="[object Array]"===a;if(!c){if("object"!=typeof r||"object"!=typeof e)return!1;var s=r.constructor,p=e.constructor;if(s!==p&&!(V(s)&&s instanceof s&&V(p)&&p instanceof p)&&"constructor"in r&&"constructor"in e)return!1}o=o||[];for(var v=(u=u||[]).length;v--;)if(u[v]===r)return o[v]===e;if(u.push(r),o.push(e),c){if((v=r.length)!==e.length)return!1;for(;v--;)if(!n(r[v],e[v],u,o))return!1}else{var h,d=Z(r);if(v=d.length,Z(e).length!==v)return!1;for(;v--;)if(!K(e,h=d[v])||!n(r[h],e[h],u,o))return!1}return u.pop(),o.pop(),!0}(t,r,e,u)}(n,t)},keys:Z,allKeys:rn,values:en,pairs:function(n){for(var t=Z(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},invert:un,functions:on,methods:on,extend:ln,extendOwn:fn,assign:fn,defaults:cn,create:function(n,t){var r=sn(n);return t&&fn(r,t),r},clone:pn,tap:function(n,t){return t(n),n},has:function(n,t){if(!F(t))return K(n,t);for(var r=t.length,e=0;e<r;e++){var u=t[e];if(null==n||!f.call(n,u))return!1;n=n[u]}return!!r},mapObject:function(n,t,r){t=wn(t,r);for(var e=Z(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=t(n[a],a,n)}return i},identity:vn,constant:W,noop:function(){},property:gn,propertyOf:function(n){return null==n?function(){}:function(t){return F(t)?dn(n,t):n[t]}},matcher:hn,matches:hn,times:function(n,t,r){var e=Array(Math.max(0,n));t=yn(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},random:jn,now:xn,escape:En,unescape:Sn,templateSettings:kn,template:function(n,t,r){!t&&r&&(t=r),t=cn({},t,tn.templateSettings);var e,u=RegExp([(t.escape||In).source,(t.interpolate||In).source,(t.evaluate||In).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(u,function(t,r,e,u,a){return o+=n.slice(i,a).replace(Mn,Ln),i=a+t.length,r?o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{e=new Function(t.variable||"obj","_",o)}catch(n){throw n.source=o,n}var a=function(n){return e.call(this,n,tn)};return a.source="function("+(t.variable||"obj")+"){\n"+o+"}",a},result:function(n,t,r){F(t)||(t=[t]);var e=t.length;if(!e)return V(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=V(i)?i.call(n):i}return n},uniqueId:function(n){var t=++Rn+"";return n?n+t:t},chain:function(n){var t=tn(n);return t._chain=!0,t},iteratee:bn,partial:Bn,bind:Dn,bindAll:Tn,memoize:function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return K(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},delay:Vn,defer:Kn,throttle:function(n,t,r){var e,u,i,o,a=0;r||(r={});var l=function(){a=!1===r.leading?0:xn(),e=null,o=n.apply(u,i),e||(u=i=null)},f=function(){var f=xn();a||!1!==r.leading||(a=f);var c=t-(f-a);return u=this,i=arguments,c<=0||c>t?(e&&(clearTimeout(e),e=null),a=f,o=n.apply(u,i),e||(u=i=null)):e||!1===r.trailing||(e=setTimeout(l,c)),o};return f.cancel=function(){clearTimeout(e),a=0,e=u=i=null},f},debounce:function(n,t,r){var e,u,i=function(t,r){e=null,r&&(u=n.apply(t,r))},o=w(function(o){if(e&&clearTimeout(e),r){var a=!e;e=setTimeout(i,t),a&&(u=n.apply(this,o))}else e=Vn(i,t,this,o);return u});return o.cancel=function(){clearTimeout(e),e=null},o},wrap:function(n,t){return Bn(t,n)},negate:Pn,compose:function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},after:function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},before:Un,once:qn,findKey:Wn,findIndex:zn,findLastIndex:Jn,sortedIndex:$n,indexOf:Hn,lastIndexOf:Qn,find:Xn,detect:Xn,findWhere:function(n,t){return Xn(n,hn(t))},each:Yn,forEach:Yn,map:Zn,collect:Zn,reduce:tt,foldl:tt,inject:tt,reduceRight:rt,foldr:rt,filter:et,select:et,reject:function(n,t,r){return et(n,Pn(wn(t)),r)},every:ut,all:ut,some:it,any:it,contains:ot,includes:ot,include:ot,invoke:at,pluck:lt,where:function(n,t){return et(n,hn(t))},max:ft,min:function(n,t,r){var e,u,i=Infinity,o=Infinity;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,l=(n=X(n)?n:en(n)).length;a<l;a++)null!=(e=n[a])&&e<i&&(i=e);else t=wn(t,r),Yn(n,function(n,r,e){((u=t(n,r,e))<o||Infinity===u&&Infinity===i)&&(i=n,o=u)});return i},shuffle:function(n){return ct(n,Infinity)},sample:ct,sortBy:function(n,t,r){var e=0;return t=wn(t,r),lt(Zn(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")},groupBy:pt,indexBy:vt,countBy:ht,partition:dt,toArray:function(n){return n?F(n)?a.call(n):A(n)?n.match(gt):X(n)?Zn(n,vn):en(n):[]},size:function(n){return null==n?0:X(n)?n.length:Z(n).length},pick:mt,omit:bt,first:jt,head:jt,take:jt,initial:wt,last:function(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:xt(n,Math.max(0,n.length-t))},rest:xt,tail:xt,drop:xt,compact:function(n){return et(n,Boolean)},flatten:function(n,t){return Fn(n,t,!1)},without:At,uniq:Et,unique:Et,union:St,intersection:function(n){for(var t=[],r=arguments.length,e=0,u=Q(n);e<u;e++){var i=n[e];if(!ot(t,i)){var o;for(o=1;o<r&&ot(arguments[o],i);o++);o===r&&t.push(i)}}return t},difference:_t,unzip:kt,transpose:kt,zip:It,object:function(n,t){for(var r={},e=0,u=Q(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},range:function(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u},chunk:function(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(a.call(n,e,e+=t));return r},mixin:Mt,default:tn});Lt._=Lt;var Rt={},Nt=!1,Bt=!0,Dt=null,Ft=["[data-navigo]","[data-route]"],Tt=Ft.slice(0),Vt=null;function Kt(n,t,r,e){void 0===r&&(r=null),void 0===e&&(e=function(){}),Lt.isFunction(t.hooks[n])?t.hooks[n](function(n){void 0===n&&(n=!0),n&&e(n)},r):Lt.isArray(t.hooks[n])?function n(t,r,e){if(void 0===r&&(r=null),!t.length)return e(!0);var u=Lt.first(t);Lt.isFunction(u)&&u(function(u){if(void 0===u&&(u=!0),!u)return e(!1);n(Lt.rest(t),r,e)})}(t.hooks[n],r,function(n){void 0===n&&(n=!0),n&&e(n)}):e()}function Pt(n,t){return void 0===t&&(t=null),Kt("before",n,t,function(r){Lt.isArray(t)?n.method.apply({},t):n.method(t)})}function Ut(n,t,r){return void 0===t&&(t=null),void 0===r&&(r=function(n){}),Kt("after",n,t,r)}function qt(n){var t,r;return Dt&&(Nt&&console.log("was a last resolve",Dt),void 0===(t=n)&&(t=null),void 0===r&&(r=function(n){}),Kt("leave",Dt,t,r)),this.resolve(),this}function Wt(n){return Object.assign(this,n),this}n.WebRouter=function(){function n(n){for(var t in void 0===n&&(n={}),Dt=null,n)this.on(t,n[t]);Bt&&(this.listen(),this.updatePageLinks())}var r,e,u,i=n.prototype;return i.on=function(n,t,r){void 0===n&&(n="/"),void 0===r&&(r={}),Nt&&console.log(".on(",n,t,r,")");var e=n,u=!1,i=[];if(Lt.isRegExp(n))u=!0,e=n.toString();else{var o=e.split("/").map(function(n){return n.startsWith(":")?(u=!0,i.push(n.slice(1)),"([^/]{1,})"):n});n=new RegExp("^"+o.join("/")+"$")}return Rt[e]=new Wt({name:e,regExp:u?n:null,regExpKeys:i,method:t,hooks:r}),this},i.off=function(){var t=[].slice.call(arguments);if(Nt&&console.log(".off(",t,")"),0===t.length)n.reset(),window.removeEventListener("popstate",qt.bind(this),!1),delete window.hasListenerAttached;else{var r=t[0];delete Rt[r]}return this},i.listen=function(){return window.hasListenerAttached||(Nt&&console.log("listen() Attaching to window"),window.addEventListener("popstate",qt.bind(this),!1),window.hasListenerAttached=!0),this},i.updatePageLinks=function(n){var t=this;return void 0===n&&(n=null),Nt&&console.log("updatePageLinks",Tt),Tt.forEach(function(r){var e=document.querySelectorAll(r);Lt.each(e,function(r){r.hasListenerAttached||r.addEventListener("click",function(r){if(Nt&&console.log("CLICKED. Now navigate",r),(r.ctrlKey||r.metaKey)&&"a"===r.target.tagName.toLowerCase())return!1;r.preventDefault();var e=r.target.getAttribute("href");n?n.call(t,e):t.navigate(e)},!1),r.hasListenerAttached=!0})}),this},i.navigate=function(n,t){return void 0===t&&(t=null),window.history.pushState(t,null,n),this.resolve(),this},i.notFound=function(n){return Lt.isFunction(n)&&(Vt=n),this},i.resolve=function(n){void 0===n&&(n=window.location.pathname),Nt&&console.log("Resolve",n);var t=!1,r=function(r){var e=Rt[r];if(e.regExp){if(e.regExp){var u=n.match(e.regExp)||[],i=u.slice(1,e.regExpKeys.length+1),o={};if(u&&u.length){i.forEach(function(n,t){o[e.regExpKeys[t]]=decodeURIComponent(n)});var a=e.regExpKeys.length?o:u.slice(1).map(function(n){return decodeURIComponent(n)});t=!0,Dt=e,Pt(e,a),Ut(e,a)}}}else r===n&&(t=!0,Dt=e,Pt(e,{}),Ut(e,null))};for(var e in Rt)r(e);return t?Nt&&console.log("Route Matched",Dt):(Dt=null,Vt&&(Nt&&console.log("notFound"),Vt.call(this))),this},n.reset=function(){Rt={},Bt=!0,Dt=null,Vt=null,Tt=Ft.slice(0)},n.addPageLinkSelectors=function(n){var t;void 0===n&&(n=[]),(t=Tt).push.apply(t,n),Tt=Lt.unique(Tt)},r=n,u=[{key:"autoListen",set:function(n){return Bt=!!n}},{key:"routes",get:function(){return Rt}},{key:"lastResolved",get:function(){return Dt}},{key:"debug",set:function(n){Nt=!!n}}],(e=[{key:"all",get:function(){return Rt}}])&&t(r.prototype,e),u&&t(r,u),n}()});
//# sourceMappingURL=web-router.umd.js.map
