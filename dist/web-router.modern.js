var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,r=Object.prototype,e="undefined"!=typeof Symbol?Symbol.prototype:null,u=t.push,i=t.slice,o=r.toString,a=r.hasOwnProperty,l="undefined"!=typeof ArrayBuffer,c=Array.isArray,f=Object.keys,s=Object.create,p=l&&ArrayBuffer.isView,h=isNaN,v=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),y=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],d=Math.pow(2,53)-1;function m(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),u=0;u<r;u++)e[u]=arguments[u+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(t+1);for(u=0;u<t;u++)i[u]=arguments[u];return i[t]=e,n.apply(this,i)}}function b(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function w(n){return!0===n||!1===n||"[object Boolean]"===o.call(n)}function j(n){return function(t){return o.call(t)==="[object "+n+"]"}}var _=j("String"),A=j("Number"),x=j("Date"),E=j("RegExp"),S=j("Error"),I=j("Symbol"),O=j("Map"),k=j("WeakMap"),M=j("Set"),L=j("WeakSet"),N=j("ArrayBuffer"),B=j("DataView"),R=c||j("Array"),D=j("Function");"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof(n.document&&n.document.childNodes)&&(D=function(n){return"function"==typeof n||!1});var F=D;function T(n,t){return null!=n&&a.call(n,t)}var V=j("Arguments");!function(){V(arguments)||(V=function(n){return T(n,"callee")})}();var K=V;function q(n){return A(n)&&h(n)}function P(n){return function(){return n}}function U(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=d}}function W(n){return function(t){return null==t?void 0:t[n]}}var z=W("byteLength"),C=U(z),J=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,$=l?function(n){return p?p(n)&&!B(n):C(n)&&J.test(o.call(n))}:P(!1),G=W("length"),H=U(G);function Q(n,t){t=function(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return t[n]},push:function(r){return t[r]=!0,n.push(r)}}}(t);var e=y.length,u=n.constructor,i=F(u)&&u.prototype||r,o="constructor";for(T(n,o)&&!t.contains(o)&&t.push(o);e--;)(o=y[e])in n&&n[o]!==i[o]&&!t.contains(o)&&t.push(o)}function X(n){if(!b(n))return[];if(f)return f(n);var t=[];for(var r in n)T(n,r)&&t.push(r);return g&&Q(n,t),t}function Y(n,t){var r=X(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0}function Z(n){return n instanceof Z?n:this instanceof Z?void(this._wrapped=n):new Z(n)}function nn(n){if(!b(n))return[];var t=[];for(var r in n)t.push(r);return g&&Q(n,t),t}function tn(n){for(var t=X(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e}function rn(n){for(var t={},r=X(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t}function en(n){var t=[];for(var r in n)F(n[r])&&t.push(r);return t.sort()}function un(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,l=0;l<a;l++){var c=o[l];t&&void 0!==r[c]||(r[c]=i[c])}return r}}Z.VERSION="1.11.0",Z.prototype.valueOf=Z.prototype.toJSON=Z.prototype.value=function(){return this._wrapped},Z.prototype.toString=function(){return String(this._wrapped)};var on=un(nn),an=un(X),ln=un(nn,!0);function cn(n){if(!b(n))return{};if(s)return s(n);var t=function(){};t.prototype=n;var r=new t;return t.prototype=null,r}function fn(n){return b(n)?R(n)?n.slice():on({},n):n}function sn(n){return n}function pn(n){return n=an({},n),function(t){return Y(t,n)}}function hn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function vn(n){return R(n)?function(t){return hn(t,n)}:W(n)}function gn(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}}function yn(n,t,r){return null==n?sn:F(n)?gn(n,t,r):b(n)&&!R(n)?pn(n):vn(n)}function dn(n,t){return yn(n,t,Infinity)}function mn(n,t,r){return Z.iteratee!==dn?Z.iteratee(n,t):yn(n,t,r)}function bn(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}Z.iteratee=dn;var wn=Date.now||function(){return(new Date).getTime()};function jn(n){var t=function(t){return n[t]},r="(?:"+X(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,t):n}}var _n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},An=jn(_n),xn=jn(rn(_n)),En=Z.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Sn=/(.)^/,In={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},On=/\\|'|\r|\n|\u2028|\u2029/g;function kn(n){return"\\"+In[n]}var Mn=0;function Ln(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=cn(n.prototype),o=n.apply(i,u);return b(o)?o:i}var Nn=m(function(n,t){var r=Nn.placeholder,e=function(){for(var u=0,i=t.length,o=Array(i),a=0;a<i;a++)o[a]=t[a]===r?arguments[u++]:t[a];for(;u<arguments.length;)o.push(arguments[u++]);return Ln(n,e,this,this,o)};return e});Nn.placeholder=Z;var Bn=m(function(n,t,r){if(!F(n))throw new TypeError("Bind must be called on a function");var e=m(function(u){return Ln(n,e,t,this,r.concat(u))});return e});function Rn(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=Infinity;for(var u=e.length,i=0,o=G(n);i<o;i++){var a=n[i];if(H(a)&&(R(a)||K(a)))if(t>1)Rn(a,t-1,r,e),u=e.length;else for(var l=0,c=a.length;l<c;)e[u++]=a[l++];else r||(e[u++]=a)}return e}var Dn=m(function(n,t){var r=(t=Rn(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=Bn(n[e],n)}return n}),Fn=m(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),Tn=Nn(Fn,Z,1);function Vn(n){return function(){return!n.apply(this,arguments)}}function Kn(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}var qn=Nn(Kn,2);function Pn(n,t,r){t=mn(t,r);for(var e,u=X(n),i=0,o=u.length;i<o;i++)if(t(n[e=u[i]],e,n))return e}function Un(n){return function(t,r,e){r=mn(r,e);for(var u=G(t),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(r(t[i],i,t))return i;return-1}}var Wn=Un(1),zn=Un(-1);function Cn(n,t,r,e){for(var u=(r=mn(r,e,1))(t),i=0,o=G(n);i<o;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i}function Jn(n,t,r){return function(e,u,o){var a=0,l=G(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+l,a):l=o>=0?Math.min(o+1,l):o+l+1;else if(r&&o&&l)return e[o=r(e,u)]===u?o:-1;if(u!=u)return(o=t(i.call(e,a,l),q))>=0?o+a:-1;for(o=n>0?a:l-1;o>=0&&o<l;o+=n)if(e[o]===u)return o;return-1}}var $n=Jn(1,Wn,Cn),Gn=Jn(-1,zn);function Hn(n,t,r){var e=(H(n)?Wn:Pn)(n,t,r);if(void 0!==e&&-1!==e)return n[e]}function Qn(n,t,r){var e,u;if(t=gn(t,r),H(n))for(e=0,u=n.length;e<u;e++)t(n[e],e,n);else{var i=X(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n}function Xn(n,t,r){t=mn(t,r);for(var e=!H(n)&&X(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i}function Yn(n){var t=function(t,r,e,u){var i=!H(t)&&X(t),o=(i||t).length,a=n>0?0:o-1;for(u||(e=t[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var l=i?i[a]:a;e=r(e,t[l],l,t)}return e};return function(n,r,e,u){var i=arguments.length>=3;return t(n,gn(r,u,4),e,i)}}var Zn=Yn(1),nt=Yn(-1);function tt(n,t,r){var e=[];return t=mn(t,r),Qn(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e}function rt(n,t,r){t=mn(t,r);for(var e=!H(n)&&X(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0}function et(n,t,r){t=mn(t,r);for(var e=!H(n)&&X(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1}function ut(n,t,r,e){return H(n)||(n=tn(n)),("number"!=typeof r||e)&&(r=0),$n(n,t,r)>=0}var it=m(function(n,t,r){var e,u;return F(t)?u=t:R(t)&&(e=t.slice(0,-1),t=t[t.length-1]),Xn(n,function(n){var i=u;if(!i){if(e&&e.length&&(n=hn(n,e)),null==n)return;i=n[t]}return null==i?i:i.apply(n,r)})});function ot(n,t){return Xn(n,vn(t))}function at(n,t,r){var e,u,i=-Infinity,o=-Infinity;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,l=(n=H(n)?n:tn(n)).length;a<l;a++)null!=(e=n[a])&&e>i&&(i=e);else t=mn(t,r),Qn(n,function(n,r,e){((u=t(n,r,e))>o||-Infinity===u&&-Infinity===i)&&(i=n,o=u)});return i}function lt(n,t,r){if(null==t||r)return H(n)||(n=tn(n)),n[bn(n.length-1)];var e=H(n)?fn(n):tn(n),u=G(e);t=Math.max(Math.min(t,u),0);for(var i=u-1,o=0;o<t;o++){var a=bn(o,i),l=e[o];e[o]=e[a],e[a]=l}return e.slice(0,t)}function ct(n,t){return function(r,e,u){var i=t?[[],[]]:{};return e=mn(e,u),Qn(r,function(t,u){var o=e(t,u,r);n(i,t,o)}),i}}var ft=ct(function(n,t,r){T(n,r)?n[r].push(t):n[r]=[t]}),st=ct(function(n,t,r){n[r]=t}),pt=ct(function(n,t,r){T(n,r)?n[r]++:n[r]=1}),ht=ct(function(n,t,r){n[r?0:1].push(t)},!0),vt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function gt(n,t,r){return t in r}var yt=m(function(n,t){var r={},e=t[0];if(null==n)return r;F(e)?(t.length>1&&(e=gn(e,t[1])),t=nn(n)):(e=gt,t=Rn(t,!1,!1),n=Object(n));for(var u=0,i=t.length;u<i;u++){var o=t[u],a=n[o];e(a,o,n)&&(r[o]=a)}return r}),dt=m(function(n,t){var r,e=t[0];return F(e)?(e=Vn(e),t.length>1&&(r=t[1])):(t=Xn(Rn(t,!1,!1),String),e=function(n,r){return!ut(t,r)}),yt(n,e,r)});function mt(n,t,r){return i.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function bt(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:mt(n,n.length-t)}function wt(n,t,r){return i.call(n,null==t||r?1:t)}var jt=m(function(n,t){return t=Rn(t,!0,!0),tt(n,function(n){return!ut(t,n)})}),_t=m(function(n,t){return jt(n,t)});function At(n,t,r,e){w(t)||(e=r,r=t,t=!1),null!=r&&(r=mn(r,e));for(var u=[],i=[],o=0,a=G(n);o<a;o++){var l=n[o],c=r?r(l,o,n):l;t&&!r?(o&&i===c||u.push(l),i=c):r?ut(i,c)||(i.push(c),u.push(l)):ut(u,l)||u.push(l)}return u}var xt=m(function(n){return At(Rn(n,!0,!0))});function Et(n){for(var t=n&&at(n,G).length||0,r=Array(t),e=0;e<t;e++)r[e]=ot(n,e);return r}var St=m(Et);function It(n,t){return n._chain?Z(t).chain():t}function Ot(n){return Qn(en(n),function(t){var r=Z[t]=n[t];Z.prototype[t]=function(){var n=[this._wrapped];return u.apply(n,arguments),It(this,r.apply(Z,n))}}),Z}Qn(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=t[n];Z.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),It(this,t)}}),Qn(["concat","join","slice"],function(n){var r=t[n];Z.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),It(this,n)}});var kt=Ot({__proto__:null,VERSION:"1.11.0",restArguments:m,isObject:b,isNull:function(n){return null===n},isUndefined:function(n){return void 0===n},isBoolean:w,isElement:function(n){return!(!n||1!==n.nodeType)},isString:_,isNumber:A,isDate:x,isRegExp:E,isError:S,isSymbol:I,isMap:O,isWeakMap:k,isSet:M,isWeakSet:L,isArrayBuffer:N,isDataView:B,isArray:R,isFunction:F,isArguments:K,isFinite:function(n){return!I(n)&&v(n)&&!isNaN(parseFloat(n))},isNaN:q,isTypedArray:$,isEmpty:function(n){return null==n||(H(n)&&(R(n)||_(n)||K(n))?0===n.length:0===X(n).length)},isMatch:Y,isEqual:function(n,t){return function n(t,r,u,i){if(t===r)return 0!==t||1/t==1/r;if(null==t||null==r)return!1;if(t!=t)return r!=r;var a=typeof t;return("function"===a||"object"===a||"object"==typeof r)&&function t(r,u,i,a){r instanceof Z&&(r=r._wrapped),u instanceof Z&&(u=u._wrapped);var l=o.call(r);if(l!==o.call(u))return!1;switch(l){case"[object RegExp]":case"[object String]":return""+r==""+u;case"[object Number]":return+r!=+r?+u!=+u:0==+r?1/+r==1/u:+r==+u;case"[object Date]":case"[object Boolean]":return+r==+u;case"[object Symbol]":return e.valueOf.call(r)===e.valueOf.call(u);case"[object ArrayBuffer]":return t(new DataView(r),new DataView(u),i,a);case"[object DataView]":var c=z(r);if(c!==z(u))return!1;for(;c--;)if(r.getUint8(c)!==u.getUint8(c))return!1;return!0}if($(r))return t(new DataView(r.buffer),new DataView(u.buffer),i,a);var f="[object Array]"===l;if(!f){if("object"!=typeof r||"object"!=typeof u)return!1;var s=r.constructor,p=u.constructor;if(s!==p&&!(F(s)&&s instanceof s&&F(p)&&p instanceof p)&&"constructor"in r&&"constructor"in u)return!1}a=a||[];for(var h=(i=i||[]).length;h--;)if(i[h]===r)return a[h]===u;if(i.push(r),a.push(u),f){if((h=r.length)!==u.length)return!1;for(;h--;)if(!n(r[h],u[h],i,a))return!1}else{var v,g=X(r);if(h=g.length,X(u).length!==h)return!1;for(;h--;)if(!T(u,v=g[h])||!n(r[v],u[v],i,a))return!1}return i.pop(),a.pop(),!0}(t,r,u,i)}(n,t)},keys:X,allKeys:nn,values:tn,pairs:function(n){for(var t=X(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},invert:rn,functions:en,methods:en,extend:on,extendOwn:an,assign:an,defaults:ln,create:function(n,t){var r=cn(n);return t&&an(r,t),r},clone:fn,tap:function(n,t){return t(n),n},has:function(n,t){if(!R(t))return T(n,t);for(var r=t.length,e=0;e<r;e++){var u=t[e];if(null==n||!a.call(n,u))return!1;n=n[u]}return!!r},mapObject:function(n,t,r){t=mn(t,r);for(var e=X(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=t(n[a],a,n)}return i},identity:sn,constant:P,noop:function(){},property:vn,propertyOf:function(n){return null==n?function(){}:function(t){return R(t)?hn(n,t):n[t]}},matcher:pn,matches:pn,times:function(n,t,r){var e=Array(Math.max(0,n));t=gn(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},random:bn,now:wn,escape:An,unescape:xn,templateSettings:En,template:function(n,t,r){!t&&r&&(t=r),t=ln({},t,Z.templateSettings);var e,u=RegExp([(t.escape||Sn).source,(t.interpolate||Sn).source,(t.evaluate||Sn).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(u,function(t,r,e,u,a){return o+=n.slice(i,a).replace(On,kn),i=a+t.length,r?o+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{e=new Function(t.variable||"obj","_",o)}catch(n){throw n.source=o,n}var a=function(n){return e.call(this,n,Z)};return a.source="function("+(t.variable||"obj")+"){\n"+o+"}",a},result:function(n,t,r){R(t)||(t=[t]);var e=t.length;if(!e)return F(r)?r.call(n):r;for(var u=0;u<e;u++){var i=null==n?void 0:n[t[u]];void 0===i&&(i=r,u=e),n=F(i)?i.call(n):i}return n},uniqueId:function(n){var t=++Mn+"";return n?n+t:t},chain:function(n){var t=Z(n);return t._chain=!0,t},iteratee:dn,partial:Nn,bind:Bn,bindAll:Dn,memoize:function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return T(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},delay:Fn,defer:Tn,throttle:function(n,t,r){var e,u,i,o,a=0;r||(r={});var l=function(){a=!1===r.leading?0:wn(),e=null,o=n.apply(u,i),e||(u=i=null)},c=function(){var c=wn();a||!1!==r.leading||(a=c);var f=t-(c-a);return u=this,i=arguments,f<=0||f>t?(e&&(clearTimeout(e),e=null),a=c,o=n.apply(u,i),e||(u=i=null)):e||!1===r.trailing||(e=setTimeout(l,f)),o};return c.cancel=function(){clearTimeout(e),a=0,e=u=i=null},c},debounce:function(n,t,r){var e,u,i=function(t,r){e=null,r&&(u=n.apply(t,r))},o=m(function(o){if(e&&clearTimeout(e),r){var a=!e;e=setTimeout(i,t),a&&(u=n.apply(this,o))}else e=Fn(i,t,this,o);return u});return o.cancel=function(){clearTimeout(e),e=null},o},wrap:function(n,t){return Nn(t,n)},negate:Vn,compose:function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},after:function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},before:Kn,once:qn,findKey:Pn,findIndex:Wn,findLastIndex:zn,sortedIndex:Cn,indexOf:$n,lastIndexOf:Gn,find:Hn,detect:Hn,findWhere:function(n,t){return Hn(n,pn(t))},each:Qn,forEach:Qn,map:Xn,collect:Xn,reduce:Zn,foldl:Zn,inject:Zn,reduceRight:nt,foldr:nt,filter:tt,select:tt,reject:function(n,t,r){return tt(n,Vn(mn(t)),r)},every:rt,all:rt,some:et,any:et,contains:ut,includes:ut,include:ut,invoke:it,pluck:ot,where:function(n,t){return tt(n,pn(t))},max:at,min:function(n,t,r){var e,u,i=Infinity,o=Infinity;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,l=(n=H(n)?n:tn(n)).length;a<l;a++)null!=(e=n[a])&&e<i&&(i=e);else t=mn(t,r),Qn(n,function(n,r,e){((u=t(n,r,e))<o||Infinity===u&&Infinity===i)&&(i=n,o=u)});return i},shuffle:function(n){return lt(n,Infinity)},sample:lt,sortBy:function(n,t,r){var e=0;return t=mn(t,r),ot(Xn(n,function(n,r,u){return{value:n,index:e++,criteria:t(n,r,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")},groupBy:ft,indexBy:st,countBy:pt,partition:ht,toArray:function(n){return n?R(n)?i.call(n):_(n)?n.match(vt):H(n)?Xn(n,sn):tn(n):[]},size:function(n){return null==n?0:H(n)?n.length:X(n).length},pick:yt,omit:dt,first:bt,head:bt,take:bt,initial:mt,last:function(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:wt(n,Math.max(0,n.length-t))},rest:wt,tail:wt,drop:wt,compact:function(n){return tt(n,Boolean)},flatten:function(n,t){return Rn(n,t,!1)},without:_t,uniq:At,unique:At,union:xt,intersection:function(n){for(var t=[],r=arguments.length,e=0,u=G(n);e<u;e++){var i=n[e];if(!ut(t,i)){var o;for(o=1;o<r&&ut(arguments[o],i);o++);o===r&&t.push(i)}}return t},difference:jt,unzip:Et,transpose:Et,zip:St,object:function(n,t){for(var r={},e=0,u=G(n);e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},range:function(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u},chunk:function(n,t){if(null==t||t<1)return[];for(var r=[],e=0,u=n.length;e<u;)r.push(i.call(n,e,e+=t));return r},mixin:Ot,default:Z});let Mt;kt._=kt;let Lt={},Nt=!1,Bt=!0,Rt=null,Dt=["[data-navigo]","[data-route]"],Ft=null;function Tt(n,t,r=null,e=(()=>{})){kt.isFunction(t.hooks[n])?t.hooks[n]((n=!0)=>{n&&e(n)},r):kt.isArray(t.hooks[n])?function n(t,r=null,e){if(!t.length)return e(!0);const u=kt.first(t);kt.isFunction(u)&&u((u=!0)=>{if(!u)return e(!1);n(kt.rest(t),r,e)})}(t.hooks[n],r,(n=!0)=>{n&&e(n)}):e()}function Vt(n,t=null){return Tt("before",n,t,r=>{kt.isArray(t)?n.method.apply({},t):n.method(t)})}function Kt(n,t=null,r=(n=>{})){return Tt("after",n,t,r)}function qt(n){return Rt&&(Nt&&console.log("was a last resolve",Rt),function(n,t=null,r=(n=>{})){Tt("leave",Rt,t,r)}(0,null)),this.resolve(),this}class Pt{constructor(n="/",t={}){Mt=n,Rt=null;for(const n in t)this.on(n,t[n]);Bt&&(this.listen(),this.updatePageLinks())}on(n,t,r={}){Nt&&console.log(".on(",n,t,r,")");let e=n,u=!1;const i=[];if(kt.isRegExp(n))u=!0,e=n.toString();else{const t=e.split("/").map(n=>n.startsWith(":")?(u=!0,i.push(n.slice(1)),"([^/]{1,})"):n);n=new RegExp(t.join("/"))}return Lt[e]={name:e,regExp:u?n:null,regExpKeys:i,method:t,hooks:r},this}off(...n){if(Nt&&console.log(".off(",n,")"),0===n.length)Pt.reset(),window.removeEventListener("popstate",qt.bind(this),!1),delete window.hasListenerAttached;else{const[t]=n;delete Lt[t]}return this}listen(){return window.hasListenerAttached||(Nt&&console.log("listen() Attaching to window"),window.addEventListener("popstate",qt.bind(this),!1),window.hasListenerAttached=!0),this}updatePageLinks(n=null){return Nt&&console.log("updatePageLinks",Dt),Dt.forEach(t=>{const r=document.querySelectorAll(t);kt.each(r,t=>{t.hasListenerAttached||t.addEventListener("click",t=>{if(Nt&&console.log("CLICKED. Now navigate",t),(t.ctrlKey||t.metaKey)&&"a"===t.target.tagName.toLowerCase())return!1;t.preventDefault();const r=t.target.getAttribute("href");n?n.call(this,r):this.navigate(r)},!1),t.hasListenerAttached=!0})}),this}navigate(n,t=null){return window.history.pushState(t,null,n),this.resolve(),this}notFound(n){kt.isFunction(n)&&(Ft=n)}resolve(n=window.location.pathname){Nt&&console.log("Resolve",n);let t=!1;for(const r in Lt){const e=Lt[r];if(e.regExp){if(e.regExp){let r=[];const u={},i=n.match(e.regExp)||[];i&&i.length&&(r=i.slice(1,e.regExpKeys.length+1),r.forEach((n,t)=>{u[e.regExpKeys[t]]=n}));const o=e.regExpKeys.length?u:i.slice(1);i&&i.length&&(t=!0,Rt=e,Vt(e,o),Kt(e,o))}}else r===n&&(t=!0,Rt=e,Vt(e,null),Kt(e,null))}return t?Nt&&console.log("Route Matched",Rt):(Rt=null,Ft&&Ft.call(this)),this}get root(){return Mt}get all(){return Lt}static set autoListen(n){Bt=!!n}static get root(){return Mt}static setRoot(n){Mt=n}static get routes(){return Lt}static get lastResolved(){return Rt}static reset(){Lt={}}static set debug(n){Nt=!!n}static addPageLinkSelectors(n=[]){Dt.push(...n),Dt=kt.unique(Dt)}}export{Pt as WebRouter};
//# sourceMappingURL=web-router.modern.js.map
