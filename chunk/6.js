/*! For license information please see 6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"112":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var s=function createCommonjsModule(e,t,r){return e(r={"path":t,"exports":{},"require":function(e,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}((function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var n=classNames.apply(null,s);n&&e.push(n)}}else if("object"===a)if(s.toString===Object.prototype.toString)for(var i in s)t.call(s,i)&&s[i]&&e.push(i);else e.push(s.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}))},"93":function(e,t,r){"use strict";r.r(t),r.d(t,"taro_navigator_core",(function(){return i}));var s=r(34),a=r(112);const n=r(17),i=class{"constructor"(e){Object(s.g)(this,e),this.onSuccess=Object(s.c)(this,"cuccess",7),this.onFail=Object(s.c)(this,"fail",7),this.onComplete=Object(s.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}"onClick"(){const{"openType":e,"onSuccess":t,"onFail":r,"onComplete":s}=this;let a=Promise.resolve();switch(e){case"navigate":a=n.navigateTo({"url":this.url});break;case"redirect":a=n.redirectTo({"url":this.url});break;case"switchTab":a=n.switchTab({"url":this.url});break;case"reLaunch":a=n.reLaunch({"url":this.url});break;case"navigateBack":a=n.navigateBack({"delta":this.delta});break;case"exit":a=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'))}a&&a.then(e=>{t.emit(e)}).catch(e=>{r.emit(e)}).finally(()=>{s.emit()})}"render"(){const{"isHover":e,"hoverClass":t}=this;return Object(s.e)(s.a,{"class":Object(a.a)({[t]:e})})}};i.style=".navigator-hover{background:#efefef}"}}]);