!function(e,o){var t=1e4,g_moduleConfig={uabModule:{grey:["AWSC/uab/1.140.0/collina.js"],stable:["AWSC/uab/1.140.0/collina.js"],greyBr:["AWSC-br/uab/1.140.0/collina.js"],stableBr:["AWSC-br/uab/1.140.0/collina.js"],ratio:10000,greyConfig:{},stableConfig:{}},fyModule:{grey:["AWSC/fireyejs/1.227.0/fireyejs.js"],stable:["AWSC/fireyejs/1.227.0/fireyejs.js"],greyBr:["AWSC-br/fireyejs/1.227.0/fireyejs.js"],stableBr:["AWSC-br/fireyejs/1.227.0/fireyejs.js"],ratio:10000,greyConfig:{},stableConfig:{}},nsModule:{grey:["js/nc/60.js"],stable:["js/nc/60.js"],ratio:1e4,greyConfig:{},stableConfig:{}},umidPCModule:{grey:["AWSC/WebUMID/1.93.0/um.js"],stable:["AWSC/WebUMID/1.93.0/um.js"],greyBr:["AWSC-br/WebUMID/1.93.0/um.js"],stableBr:["AWSC-br/WebUMID/1.93.0/um.js"],ratio:10000,greyConfig:{},stableConfig:{}},etModule:{grey:["AWSC/et/1.70.9/et_f.js","AWSC/et/1.70.9/et_n.js"],stable:["AWSC/et/1.70.8/et_f.js","AWSC/et/1.70.8/et_n.js"],greyBr:["AWSC-br/et/1.75.1/et_f.js","AWSC-br/et/1.75.0/et_n.js"],stableBr:["AWSC-br/et/1.74.0/et_f.js","AWSC-br/et/1.74.1/et_n.js"],ratio:104,greyConfig:{"whitelist":["taobao","alibaba.com","alipay.com","tmall.com","lazada","aliexpress","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode","mp.dfkhgj.com","mp.bcvbw.com","m.dfkhgj.com","pailitao.com","youku.com","jiaoyimao","sm.cn","dingtalk.com","guoguo-app","kaola","alicdn","soku","koubei.com"]},stableConfig:{"whitelist":["taobao","alibaba.com","alipay.com","tmall.com","lazada","aliexpress","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode","mp.dfkhgj.com","mp.bcvbw.com","m.dfkhgj.com","pailitao.com","youku.com","jiaoyimao","sm.cn","dingtalk.com","guoguo-app","kaola","alicdn","soku","koubei.com"]}},ncModule:{grey:["AWSC/nc/1.94.0/nc.js"],stable:["AWSC/nc/1.94.0/nc.js"],ratio:10000,greyConfig:{},stableConfig:{}}},a=[{name:"umidPCModule",features:["umpc","um","umh5"],depends:[],sync:!1},{name:"uabModule",features:["uab"],depends:[],sync:!1},{name:"fyModule",features:["fy"],depends:[],sync:!1},{name:"nsModule",features:["ns"],depends:[],sync:!1},{name:"etModule",features:["et"],depends:[],sync:!1},{name:"ncModule",features:["nc","nvc","ic"],depends:["fy"],sync:!1}],n=navigator.userAgent,r=n.match(/Chrome\/(\d*)/);r&&(r=+r[1]);var i=n.match(/Edge\/([\d]*)/),m=n.match(/Safari\/([\d]*)/),s=n.match(/Firefox\/([\d]*)/),l=n.match(/MSIE|Trident/);function c(){var e="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";return"WebkitAppearance"in document.documentElement.style&&escape(navigator.javaEnabled.toString())===e?!0:!1}function d(o,a){var n="AWSC_SPECIFY_"+o.toUpperCase()+"_ADDRESSES";if(e[n])return e[n];var d={normalAddresses:[],brAddresses:[]};for(var u in g_moduleConfig)if(g_moduleConfig.hasOwnProperty(u)&&u===o){var b=g_moduleConfig[u],f=Math.ceil(Math.random()*t)<=b.ratio;d.normalAddresses=f?b.grey.slice():b.stable.slice(),b.stableBr&&b.greyBr&&(d.brAddresses=f?b.greyBr.slice():b.stableBr.slice()),"etModule"===o&&(i?(d.normalAddresses.pop(),d.brAddresses.pop()):r?(d.normalAddresses.pop(),d.brAddresses.pop()):m||s||l?(d.normalAddresses.shift(),d.brAddresses.shift()):c()?(d.normalAddresses.pop(),d.brAddresses.pop()):(d.normalAddresses.shift(),d.brAddresses.shift()));for(var g=0;g<d.normalAddresses.length;g++){var h=a?"https://"+a+"/":v;("https://assets.alicdn.com/"===h||"https://lzd-g.slatic.net/"===h||"https://g.lazcdn.com/"===h)&&(h+="g/"),d.normalAddresses[g]=h+d.normalAddresses[g],d.brAddresses[g]&&(d.brAddresses[g]=h+d.brAddresses[g])}return d}}var u=[],b="loading",f="loaded",g="timeout",h="unexpected",p="no such feature",y=new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),v=_(A());function _(e){var o="https://g.alicdn.com/";if(!e)return o;if(/aliexpress/.test(location.href))return"https://aeis.alicdn.com/";var t=y.exec(e);return t?"https://"+t[3]+(t[4]?":"+t[4]:"")+"/":o}function A(){for(var e=document.getElementsByTagName("script"),o=0;o<e.length;o++){var t=e[o],a=t.hasAttribute?t.src:t.getAttribute("src",4);if(/\/awsc\.js/.test(a))return a}}function C(e){for(var o=void 0,t=0;t<a.length;t++){for(var n=a[t],r=0;r<n.features.length;r++)if(n.features[r]===e){o=n;break}if(o)break}return o}function j(e){for(var o=0;o<u.length;o++){var t=u[o];if(t.name===e)return t}}function w(e){for(var o=void 0,t=0;t<a.length;t++){var n=a[t];if(n.name===e){o=n;break}if(o)break}return o}function S(e,t,a){if(a)for(var n=0;n<e.normalAddresses.length;n++){var r=e.normalAddresses[n];o.write("<script src="+r+"></script>")}else{function i(e,a,n){for(var r=0;r<e.length;r++){var i=e[r],m=o.createElement("script");m.async=!1,m.src=i,m.id=t,m.onerror=a||function(){},m.onload=n||function(){};var s=o.getElementsByTagName("script")[0];s&&s.parentNode?s.parentNode.insertBefore(m,s):(s=o.body||o.head,s&&s.appendChild(m))}}i(e.normalAddresses)}}function k(o,t,a){var n="https://acjs.aliyun.com/error?v="+o+"&e="+encodeURIComponent(t)+"&stack="+encodeURIComponent(a),r=new Image,i="_awsc_img_"+Math.floor(1e6*Math.random());e[i]=r,r.onload=r.onerror=function(){try{delete e[i]}catch(o){e[i]=null}},r.src=n}function W(e,o){Math.random()<1e-4&&k("awsc_state","feature="+e.name+"&state="+e.state+"&href="+encodeURIComponent(location.href));for(var t=void 0;t=e.callbacks.shift();)try{if("function"==typeof t)t(e.state,e.exportObj);else if("object"==typeof t){var a=e.exportObj;a&&"function"==typeof a.init&&a.init(t)}}catch(n){if(o)throw n;k(e.name,n.message,n.stack)}}function T(e,o,t,a){var n=C(e);if(!n)return"function"==typeof o&&o(p),void 0;var r=t&&t.cdn,i=t&&t.sync,m=t&&t.timeout||5e3;if(0!==n.depends.length)for(var s=0;s<n.depends.length;s++){var l=n.depends[s];t&&(delete t.sync,delete t.timeout,delete t.cdn),M(l,void 0,t)}var c=a||{};c.module=n,c.name=e,c.state=b,c.callbacks=c.callbacks||[],c.options=t,o&&c.callbacks.push(o),c.timeoutTimer=setTimeout(function(){c.state=g,W(c,t&&t.throwExceptionInCallback)},m),a||u.push(c);var f=n.sync;i&&(f=i);var h=d(n.name,r);S(h,"AWSC_"+n.name,f)}function M(e,o,t){var a=j(e);if(a)if(a.state===g)T(e,o,t,a);else if(a.state===f){if("function"==typeof o)o(a.state,a.exportObj);else if("object"==typeof o){var n=a.exportObj;n&&"function"==typeof n.init&&n.init(o)}}else a.state===b?o&&a.callbacks.push(o):void 0;else T(e,o,t)}function x(e,o,t){var a=!1;try{var n=w(e);n||void 0,n.moduleLoadStatus=f;for(var r=void 0,i=0;i<u.length;i++){var m=u[i];m.module===n&&m.name===o&&(a=m.options&&m.options.throwExceptionInCallback,r=m,clearTimeout(r.timeoutTimer),delete r.timeoutTimer,r.exportObj=t,m.state===b||m.state===g?(r.state=f,setTimeout(function(){W(r,a)},0)):void 0)}r||(r={},r.module=n,r.name=o,r.state=f,r.exportObj=t,r.callbacks=[],u.push(r))}catch(s){if(a)throw s;k("awsc_error",s.message,s.stack)}}function B(e){e.AWSCFY=function(){},e.AWSC.configFY=function(e,t,a,n){return o(e,t,a,n)},e.AWSC.configFYSync=function(e,t){return o(null,e,t)};function o(o,t,a,n){var r=location.protocol+"//"+location.host+location.pathname,i=new e.AWSCFY;e._umopt_npfp=0;var m=!1;i.umidToken="defaultToken1_um_not_loaded@@"+r+"@@"+(new Date).getTime(),e.AWSC.use("um",function(e,o){"loaded"===e?(i.umidToken="defaultToken3_init_callback_not_called@@"+r+"@@"+(new Date).getTime(),o.init(t,function(e,o){"success"===e?i.umidToken=o.tn:i.umidToken="defaultToken4_init_failed with "+e+"@@"+r+"@@"+(new Date).getTime(),m=!0,c()})):(i.umidToken="defaultToken2_load_failed with "+e+"@@"+r+"@@"+(new Date).getTime(),m=!0,c())});var s=!1;if(i.getUA=function(){return"defaultUA1_uab_not_loaded@@"+r+"@@"+(new Date).getTime()},e.AWSC.use("uab",function(e,o){s=!0,"loaded"===e?(i.uabModule=o,i.uabConfig=a,i.getUA=function(){return this.uabModule.getUA(this.uabConfig)}):i.getUA=function(){return"defaultUA2_load_failed with "+e+"@@"+r+"@@"+(new Date).getTime()},c()}),null!=o)var l=e.setTimeout(function(){c(!0)},n?n:2e3);function c(t){null!=o&&(s&&m||t)&&(o(i),e.clearTimeout(l))}return null==o?i:void 0}}function U(e){var o=function(){};e.AWSC.configFYEx=function(e,o,a){return t(e,o,a)},e.AWSC.configFYSyncEx=function(e){return t(null,e)};function t(t,a,n){var r=(location.protocol+"//"+location.host+location.pathname).substr(0,128),i=new o;if(n=n||5e3,"function"==typeof t)var m=e.setTimeout(function(){s()},n);function s(){"function"==typeof t&&(t(i),e.clearTimeout(m))}return i.getFYToken=i.getUidToken=function(){return"defaultFY1_fyjs_not_loaded@@"+r+"@@"+(new Date).getTime()},e.fyglobalopt=a,e.AWSC.use("fy",function(e,o){"loaded"===e?(i.getFYToken=i.getUidToken=function(){return"defaultFY3_fyjs_not_initialized@@"+r+"@@"+(new Date).getTime()},i.fyObj=o,o.init(a,function(e){i.getFYToken=function(){return this.fyObj.getFYToken(a)},i.getUidToken=function(){return this.fyObj.getUidToken(a)},s()})):(i.getFYToken=i.getUidToken=function(){return"defaultFY2_load_failed with "+e+"@@"+r+"@@"+(new Date).getTime()},s())},{timeout:n}),"function"==typeof t?void 0:i}}function D(e){var o=g_moduleConfig.etModule,a=Math.ceil(Math.random()*t)<=o.ratio,n=a?o.greyConfig.whitelist:o.stableConfig.whitelist,r=new RegExp(("^"+n.join("$|^")+"$").replace(/\*/g,".*"));r.test(location.host+location.pathname)&&(window.etrprtrt=.01,e.__etModule||e.AWSC.use("et"))}function E(e){e.AWSC||(e.AWSC={},e.AWSC.use=M,e.AWSCInner={},e.AWSCInner.register=x,B(e),U(e),D(e))}E(e)}(window,document);