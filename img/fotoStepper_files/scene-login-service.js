(window["webpackJsonp-ae-fe/cosmos-1"]=window["webpackJsonp-ae-fe/cosmos-1"]||[]).push([[7],{1052:function(e,t,n){"use strict";n.r(t),n.d(t,"doLogin",(function(){return N})),n.d(t,"canAutoLogin",(function(){return E})),n.d(t,"autoLogin",(function(){return T})),n.d(t,"popupLogin",(function(){return A})),n.d(t,"logout",(function(){return U})),n.d(t,"isInAbTest",(function(){return z}));n(115);var r=n(119),o=n(0),a=n.n(o),i=n(1),c=n.n(i),u=n(14),s=n(11),l=n(153),p=n(239),f=n(167),d=n(70),g=n(77),b=n(114),m=n(152),w=n(64);function y(e){try{return JSON.parse(window.sessionStorage.getItem(e))}catch(e){return console.error(e),!1}}function v(e,t){try{return window.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){return console.error(e),!1}}var O,h=(O=y("global-is-new-user"),!("true"===Object(l.a)("global-is-new-user")&&!O||(v("global-is-new-user","true"),Object(l.b)("global-is-new-user","true"),0))),x=function(){if("true"!==y("global-user-show")){var e=Number(y("global-user-step")||0);return(document.referrer||"").indexOf("aliexpress.")>-1||(h?e>=2:!document.referrer||e>=2)}},_=function(){v("global-user-show","true")},j=function(){v("global-user-step",Number(y("global-user-step")||0)+1)},k=function(){var e=a()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.google){e.next=3;break}return e.next=3,Object(u.a)({url:"https://accounts.google.com/gsi/client",type:"script"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){try{var e,t;null!==(e=window)&&void 0!==e&&null!==(t=e._global_header_namespace_)&&void 0!==t&&t.refreshLogin&&window._global_header_namespace_.refreshLogin(),window.getUserLoginMsg&&window.getUserLoginMsg({data:[{}]})}catch(e){}},S={google:{popupLogin:function(){var e=a()(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(),!w.a.isLoggedIn()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k();case 5:if(n="google"===Object(l.a)("sns-thirdparty-login"),t||n||x()){e.next=9;break}return e.abrupt("return");case 9:try{r=+new Date>+(Object(l.a)("sns-autologin-faigue")||0),window.google.accounts.id.initialize({client_id:p.a.clientId.google,auto_select:r,callback:function(e){Object(d.a)({ae_button_type:"google_onetap_login_try"}),N(e.credential,{returnUrl:window.location.href,onSuccess:function(){Object(l.b)("sns-thirdparty-login","google"),Object(d.b)({exp_trigger:"",exp_type:"google_onetap_login_success",exp_attribute:"refer="+window.location.href}),Object(d.a)({ae_button_type:"google_onetap_login_success"}),P()}})}}),window.google.accounts.id.prompt((function(e){e.isDisplayed()&&(r&&Object(l.b)("sns-autologin-faigue",+new Date+3e5),_(),Object(d.b)({exp_trigger:"",exp_type:"google_onetap_login_show",exp_attribute:"refer="+window.location.href})),e.isNotDisplayed()&&Object(d.a)({ae_button_type:"google_onetap_login_not_show"}),e.isSkippedMoment()&&Object(d.b)({exp_trigger:"",exp_type:"google_onetap_login_close",exp_attribute:"refer="+window.location.href})}))}catch(e){Object(d.a)({ae_button_type:"google_onetap_login_error"})}case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=a()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:window.google.accounts.id.disableAutoSelect(),Object(l.b)("deny-google-autologin","1");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},C=function(){var e=a()(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u.a,e.t1=p.a.loginApi,e.t2=t.token,e.t3=t.returnUrl,e.next=6,b.a.getUmidToken();case 6:return e.t4=e.sent,e.t5={umidToken:e.t4},e.t6={token:e.t2,snsType:"google_onetap",redirectUri:e.t3,uicContext:e.t5},e.t7={url:e.t1,data:e.t6,withCredentials:!0,method:"post"},e.abrupt("return",(0,e.t0)(e.t7));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=a()(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return Object(u.a)({url:e,method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:6e3,withCredentials:!0})})),r=new Promise((function(e){setTimeout((function(){e(null)}),5e3)})),e.next=4,Promise.race([Promise.all(n).catch((function(e){console.log(e)})),r]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=a()(c.a.mark((function e(t,n){var o,a,i,u,s,l,p,f,b,w;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.returnUrl,a=n.onSuccess,e.next=3,C({token:t,returnUrl:o});case 3:if(!(i=e.sent).success){e.next=19;break}if("SYNC_DOMAIN_COOKIE"!==(s=null==i||null===(u=i.module)||void 0===u?void 0:u.actionType)){e.next=16;break}return f=null==i||null===(l=i.module)||void 0===l||null===(p=l.actionParams)||void 0===p?void 0:p.tokenLoginUrl,e.next=10,D(f);case 10:if(!Object(g.c)()||!Object(g.b)()){e.next=15;break}return Object(d.b)({exp_trigger:"",exp_type:"google_onetap_login_success",exp_attribute:"refer="+window.location.href}),Object(d.a)({ae_button_type:"google_onetap_login_success"}),Object(m.a)(f),e.abrupt("return");case 15:a&&a();case 16:"REDIRECT"===s&&(window.location.href=null==i||null===(b=i.module)||void 0===b?void 0:b.redirectUrl),e.next=20;break;case 19:r.a.show({content:null==i||null===(w=i.errorCode)||void 0===w?void 0:w.displayMessage,type:"error"});case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)("sns-thirdparty-login")||"";return e||"google"},E=function(){var e=L(),t=S[e];return!(null==t||!t.canAutoLogin)&&t.canAutoLogin()},T=function(){var e=L(),t=S[e];null!=t&&t.autoLogin&&t.autoLogin()},A=function(){var e=a()(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=L(),r=S[n],e.next=4,Object(b.b)();case 4:null!=r&&r.popupLogin&&r.popupLogin(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=L(),t=S[e];null!=t&&t.logout&&t.logout()},z=function(){var e=a()(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({component:"page@45",module:Object(s.a)("__loginAbTest")||"1663813719127",variationIntKey:"isNewPage"});case 2:return t=e.sent,Object(d.b)({exp_type:"googlesdk-ab-login",exp_page:"googlesdk-ab-login",UTABTest:Object(f.b)(t.dataTracks)}),e.abrupt("return",""+t.intVariationValue=="1");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},114:function(e,t,n){"use strict";n.d(t,"b",(function(){return h}));var r,o,a,i,c=n(4),u=n.n(c),s=n(0),l=n.n(s),p=n(1),f=n.n(p),d=n(14),g=n(64),b=n(70),m=n(191),w="",y=function(){return""},v=new Promise((function(e){r=e})),O={load:!1,ready:function(){return Promise.race([v,Object(m.a)(3e3)])},getUA:(i=l()(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.ready();case 2:return e.abrupt("return",y());case 3:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)}),getUmidToken:(a=l()(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.ready();case 2:return e.abrupt("return",w);case 3:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)}),getBaxia:(o=l()(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.ready();case 2:if(window.baxiaCommon){e.next=5;break}return e.next=5,Object(d.a)({url:"https://assets.alicdn.com/g/sd/baxia-entry/baxiaCommon.js",type:"script"});case 5:return e.abrupt("return",window.baxiaCommon);case 6:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})};function h(e,t){return x.apply(this,arguments)}function x(){return(x=l()(f.a.mark((function e(t,n){var o,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=+new Date,!O.load){e.next=3;break}return e.abrupt("return");case 3:if(O.load=!0,window.AWSC){e.next=7;break}return e.next=7,Object(d.a)({url:"https://assets.alicdn.com/g/??AWSC/AWSC/awsc.js,sd/baxia-entry/baxiaCommon.js",type:"script"});case 7:if(window.AWSC){e.next=10;break}return r(),e.abrupt("return");case 10:return Object(b.a)({ae_button_type:"batman_login_awsc_loaded",ae_object_value:+new Date-o}),o=+new Date,e.next=14,new Promise((function(e){window.AWSC.configFY((function(t){e(t)}),u()({appName:"ctl",serviceLocation:t||("CN"===g.a.getRegion()?"cn":"us")},n?{mfrom:n}:{}),void 0,8e3)}));case 14:if(a=e.sent){e.next=18;break}return r(),e.abrupt("return");case 18:Object(b.a)({ae_button_type:"batman_login_awsc_configed",ae_object_value:+new Date-o}),y=a.getUA.bind(a),(w=a.umidToken)||Object(b.a)({ae_button_type:"batman_login_umid_empty"}),r();case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=O},115:function(e,t,n){"use strict";n(97),n(280),n(229),n(75)},119:function(e,t,n){"use strict";var r=n(59),o=n.n(r),a=n(28),i=n.n(a),c=n(61),u=n.n(c),s=n(60),l=n.n(s),p=n(599),f=n(600),d=n(182),g=n(73),b=["prefixCls","visible","mobile","content","type"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.prefixCls,n=e.visible,r=e.mobile,c=void 0!==r&&r,s=e.content,m=e.type,y=u()(e,b),v=Object(a.useContext)(g.a),O=v.getPrefixCls,h=v.mobile,x=O("toast",t),_=c||h,j={success:i.a.createElement(p.a,{className:l()("".concat(x,"-icon"),"".concat(x,"-icon-success"))}),error:i.a.createElement(f.a,{className:l()("".concat(x,"-icon"),"".concat(x,"-icon-error"))})},k=m&&j[m];return i.a.createElement(d.a,w(w({},y),{},{visible:n,mask:!1,needClassName:!1,needTemplate:!1,closable:!1,scrollLock:!1,customizePrefixCls:x,destroyOnClose:!0,wrapClassName:l()(o()({},"".concat(x,"-center"),_))}),!_&&k?k:null,s)};y.displayName="Toast";var v=y,O=n(195);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={};var j={show:function(e){var t,n,r,o="string"==typeof e?{content:e}:e;return _.timeout&&(null===(t=_)||void 0===t||null===(n=t.destroy)||void 0===n||n.call(t),clearTimeout(null===(r=_)||void 0===r?void 0:r.timeout)),(_=Object(O.a)(x(x({},o),{},{autoDestroy:!0}),a.createElement(v,null))).timeout=setTimeout((function(){var e,t;null===(e=_)||void 0===e||null===(t=e.destroy)||void 0===t||t.call(e),_.timeout=0}),1e3*(e.duration||3)),_},hide:function(){var e,t;return _?null===(e=_)||void 0===e||null===(t=e.destroy)||void 0===t?void 0:t.call(e):void 0}};t.a=j},152:function(e,t,n){"use strict";var r=n(77);t.a=function(e,t){var n="";Object(r.e)(t)&&(n="aliexpress.us");var o,a=e.find((function(e){return-1!==e.indexOf(n)})),i=e.find((function(e){return-1!==e.indexOf("login.aliexpress.com")}));o=(o=-1!==(window.location.hostname||"").indexOf("aliexpress.com")?a:i)+"&returnUrl="+(t||r.f||encodeURIComponent(window.location.href)),window.location.href=o}},153:function(e,t,n){"use strict";function r(e){try{return window.localStorage.getItem(e)}catch(e){return""}}function o(e,t){try{return window.localStorage.setItem(e,t)}catch(e){return!1}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(26),u=function(){var e=o()(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.request({api:"mtop.aliexpress.account.mtop.abTest",v:"1.0",appKey:"24815441",timeout:3e3,type:"POST",dataType:"json",data:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){if(!e)return"";try{var t,n=JSON.parse(e);return"aliabtest"+(null==n||null===(t=n[0])||void 0===t?void 0:t.abtest)}catch(e){return""}},l=function(e){if(!e)return"";try{var t=e.match(/abtest["|']\s*:\s*["|'](\d+_\d+)/);return"aliabtest"+(null==t?void 0:t[1])}catch(e){return""}}},191:function(e,t,n){"use strict";t.a=function(e,t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(59),o=n.n(r),a=n(28),i=n(45);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=[];function l(e,t){var n=e.autoDestroy,r=void 0!==n&&n,o={},c=document.createElement("div");document.body.appendChild(c);var l=u(u({},e),{},{close:d,visible:!0});function p(){i.unmountComponentAtNode(c)&&c.parentNode&&c.parentNode.removeChild(c);for(var e=0;e<s.length;e++){if(s[e]===d){s.splice(e,1);break}}}function f(e){i.render(a.cloneElement(t,u({},e)),c)}function d(){f(l=u(u({},l),{},{visible:!1,afterClose:function(){var t;null==e||null===(t=e.afterClose)||void 0===t||t.call(e),!r&&p()}})),r&&p()}return f(l),s.push(d),o=u(u({},o),{},{destroy:d,update:function(e){f(u(u({},l),e))},destroyAll:function(){for(;s.length;){var e=s.pop();e&&e()}}})}},239:function(e,t,n){"use strict";var r=n(64);t.a={loginApi:"//thirdparty.aliexpress.com/user/api/loginByOAuthCode.do",getConfigApi:"//login.aliexpress.com/join/loginDisplayConfig.htm",msiteLoginUrl:"//login.aliexpress.com/h5.htm",thirdpartyURL:"//thirdparty.aliexpress.com/login.htm?type={loginType}&from=msite&return_url={returnUrl}",clientId:{google:"438567566819-3k1nk9qd1vr39c42rmjr0dh24ngth0s4.apps.googleusercontent.com"},extra:{agreementUrl:"//www.aliexpress.com/p/account-legacy/index.html?lang="+r.a.getLocale()+"&type=membership",policyUrl:"//www.aliexpress.com/p/account-legacy/index.html?lang="+r.a.getLocale()+"&type=privacy"}}},280:function(e,t,n){},599:function(e,t,n){"use strict";var r=n(59),o=n.n(r),a=n(61),i=n.n(a),c=n(28),u=n(74),s=["className","fontSize","style"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t){var n=e.className,r=e.fontSize,o=e.style,a=i()(e,s);return c.createElement(u.a,p(p({},a),{},{ref:t,className:"comet-icon-rightline ".concat(n||""),fontSize:r,style:o}),c.createElement("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"false",focusable:"false"},c.createElement("path",{d:"M512 64c54.976 0 107.648 9.898667 156.330667 28.032l13.162666 5.141333C844.885333 164.010667 960 324.565333 960 512c0 247.424-200.576 448-448 448-187.434667 0-347.989333-115.114667-414.826667-278.506667l-5.141333-13.162666A447.061333 447.061333 0 0 1 64 512c0-54.976 9.898667-107.648 28.032-156.330667l5.141333-13.162666a449.514667 449.514667 0 0 1 245.333334-245.333334l13.162666-5.141333A447.061333 447.061333 0 0 1 512 64z m0 64C299.925333 128 128 299.925333 128 512s171.925333 384 384 384 384-171.925333 384-384S724.074667 128 512 128z m241.066667 229.482667a32 32 0 0 1 3.157333 42.773333l-2.133333 2.474667-250.944 262.741333a32 32 0 0 1-43.946667 2.197333l-2.346667-2.197333-165.034666-172.8a32 32 0 0 1 43.882666-46.442667l2.389334 2.24 141.909333 148.544 227.797333-238.485333a32 32 0 0 1 45.248-1.045333z"})))},d=c.forwardRef(f);d.displayName="RightLine",t.a=d},600:function(e,t,n){"use strict";var r=n(59),o=n.n(r),a=n(61),i=n.n(a),c=n(28),u=n(74),s=["className","fontSize","style"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t){var n=e.className,r=e.fontSize,o=e.style,a=i()(e,s);return c.createElement(u.a,p(p({},a),{},{ref:t,className:"comet-icon-wrongline ".concat(n||""),fontSize:r,style:o}),c.createElement("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"false",focusable:"false"},c.createElement("path",{d:"M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 64c-200.298667 0-362.666667 162.368-362.666667 362.666667s162.368 362.666667 362.666667 362.666667 362.666667-162.368 362.666667-362.666667-162.368-362.666667-362.666667-362.666667z"}),c.createElement("path",{d:"M361.376 361.376a32 32 0 0 1 43.712-1.44l1.536 1.44 256 256a32 32 0 0 1-43.712 46.688l-1.536-1.44-256-256a32 32 0 0 1 0-45.248z"}),c.createElement("path",{d:"M617.376 361.376a32 32 0 0 1 46.688 43.712l-1.44 1.536-256 256a32 32 0 0 1-46.688-43.712l1.44-1.536 256-256z"})))},d=c.forwardRef(f);d.displayName="WrongLine",t.a=d},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(4),o=n.n(r),a=n(6),i=function(){var e={country:"",firstName:"",lastName:"",memberSeq:""},t=(a.a.get("xman_us_f","x_user")||"").split("|");return t.length>=5&&(e.country=t[0],e.firstName=t[1].replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.lastName=t[2].replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.memberSeq=t[4]),e};function c(e){var t=e.key,n=e.value,r=e.expires,o=void 0===r?30:r,a=new Date((new Date).getTime()+864e5*o).toUTCString(),i=(document.domain.match(/\..*/)||[])[0]||document.domain;document.cookie=t+"="+n+";expires="+a+";domain="+i+";path=/"}t.a=o()({},a.a,{isNewUser:function(){return""===i().memberSeq},getMemberSeq:function(){return i().memberSeq},getLoginId:function(){return a.a.get("xman_us_t","rmb_pp")},getReSns:function(){return a.a.get("aep_usuc_f","re_sns")}})},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(4),o=n.n(r),a=n(8).util.tracker,i=function(e){try{return a.clk(o()({},e,{"spm-cnt-cd":(e.ae_button_type||"")+".0"}))}catch(e){}},c=function(e){try{return a.exp(o()({},e,{"spm-cnt-cd":(e.exp_type||"")+".0"}))}catch(e){}}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return p}));var r=n(64);function o(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]===e)return r[1]}return null}var a="",i=function(){if(!a){var e,t,n=null===(e=window.document.location)||void 0===e||null===(t=e.hostname)||void 0===t?void 0:t.split(".");a=n[n.length-1]||"com"}return a},c=o("return_url")||o("return")||o("returnurl")||o("returnUrl"),u=function(){var e=navigator.userAgent.toLowerCase();return(-1!==e.indexOf("safari")||-1!==e.indexOf("firefox"))&&-1===e.indexOf("chrome")},s=function(){return-1===window.location.hostname.indexOf("login.aliexpress")&&"thirdparty.aliexpress.com"!==window.location.hostname},l=function(e){var t=(r.a.getSite()||"").toLowerCase();return s()?"usa"===t:"usa"===t||-1!==(e||c||"").indexOf("aliexpress.us")},p=function(e){return l(e)}}}]);