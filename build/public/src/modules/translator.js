"use strict";(function(e){function t(e,t){return new Promise(function(n,r){jQuery.getJSON([config.assetBaseUrl,"language",e,t].join("/")+".json?"+config["cache-buster"],function(r){const a={language:e,namespace:t,data:r};$(window).trigger("action:translator.loadClient",a);n(a.promise?Promise.resolve(a.promise):r)}).fail(function(e,t,n){r(new Error(t+", "+n))})})}var n=function(){console.warn.apply(console,arguments)};if(typeof define==="function"&&define.amd){define("translator",[],function(){return e(utils,t,n)})}else if(typeof module==="object"&&module.exports){(function(){var t=require("../../../src/languages");if(global.env==="development"){var r=require("winston");n=function(e){r.warn(e)}}module.exports=e(require("../utils"),t.get,n)})()}})(function(e,t,n){var r=Object.assign||jQuery.extend;function a(t){return e.escapeHTML(e.decodeHTMLEntities(String(t).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")))}var i=function(){function r(e){var t=this;if(!e){throw new TypeError("Parameter `language` must be a language string. Received "+e+(e===""?"(empty string)":""))}t.modules=Object.keys(r.moduleFactories).map(function(t){var n=r.moduleFactories[t];return[t,n(e)]}).reduce(function(e,t){var n=t[0];var r=t[1];e[n]=r;return e},{});t.lang=e;t.translations={}}r.prototype.load=t;r.prototype.translate=function e(t){var n="a-zA-Z0-9\\-_.\\/";var r=new RegExp("["+n+"]");var a=new RegExp("[^"+n+"\\]]");var i=0;var o=0;var s=t.length;var c=[];var l=false;function u(e){var t=e.length;var n=[];var r=0;var a=0;var i=0;while(r+2<=t){if(e[r]==="["&&e[r+1]==="["){i+=1;r+=1}else if(e[r]==="]"&&e[r+1]==="]"){i-=1;r+=1}else if(i===0&&e[r]===","&&e[r-1]!=="\\"){n.push(e.slice(a,r).trim());r+=1;a=r}r+=1}n.push(e.slice(a,r+1).trim());return n}i=t.indexOf("[[",i);while(i+2<=s&&i!==-1){c.push(t.slice(o,i));i+=2;o=i;l=true;var f=0;var g;var p;var h=false;var v=false;var m=false;var d=false;while(i+2<=s){g=t[i];p=t[i+1];if(!h&&r.test(g)){h=true;i+=1}else if(h&&!v&&g===":"){v=true;i+=1}else if(v&&!m&&r.test(g)){m=true;i+=1}else if(m&&!d&&g===","){d=true;i+=1}else if(!(h&&v&&m&&d)&&a.test(g)){i+=1;o-=2;l=false;if(f>0){f-=1}else{break}}else if(g==="["&&p==="["){f+=1;i+=2}else if(g==="]"&&p==="]"){if(f===0){var y=t.slice(o,i);var b=u(y);var w=b[0];var j=b.slice(1);var T="";if(j&&j.length){T=this.translate(y)}c.push(this.translateKey(w,j,T));i+=2;o=i;l=false;break}f-=1;i+=2}else{i+=1}}i=t.indexOf("[[",i)}var q=t.slice(o);if(l){q=this.translate(q)}c.push(q);return Promise.all(c).then(function(e){return e.join("")})};r.prototype.translateKey=function e(t,r,i){var o=this;var s=t.split(":",2);var c=s[0];var l=s[1];if(o.modules[c]){return Promise.resolve(o.modules[c](l,r))}if(c&&s.length===1){return Promise.resolve("[["+c+"]]")}if(c&&!l){n('Missing key in translation token "'+t+'" for language "'+o.lang+'"');return Promise.resolve("[["+c+"]]")}var u=this.getTranslation(c,l);return u.then(function(e){if(!e){n('Missing translation "'+t+'" for language "'+o.lang+'"');return i||l}var s=r.map(function(e){return o.translate(a(e))});return Promise.all(s).then(function(t){var n=e;t.forEach(function(e,t){var r=e.replace(/%(?=\d)/g,"&#37;").replace(/\\,/g,"&#44;");r=r.replace(/&amp;lsqb;/g,"&lsqb;").replace(/&amp;rsqb;/g,"&rsqb;");n=n.replace(new RegExp("%"+(t+1),"g"),r)});return n})})};r.prototype.getTranslation=function e(t,r){var a;if(!t){n("[translator] Parameter `namespace` is "+t+(t===""?"(empty string)":""));a=Promise.resolve({})}else{this.translations[t]=this.translations[t]||this.load(this.lang,t).catch(function(){return{}});a=this.translations[t]}if(r){return a.then(function(e){if(typeof e[r]==="string")return e[r];const t=r.split(".");for(let n=0;n<=t.length;n++){if(n===t.length){return e[t[n-1]]!==undefined?e[t[n-1]]:e[""]}switch(typeof e[t[n]]){case"object":e=e[t[n]];break;case"string":if(n===t.length-1){return e[t[n]]}return false;default:return false}}})}return a};function i(e){var t=[];function n(e){if(e.nodeType===3){t.push(e)}else{for(var r=0,a=e.childNodes,i=a.length;r<i;r+=1){n(a[r])}}}n(e);return t}r.prototype.translateInPlace=function t(n,r){r=r||["placeholder","title"];var a=i(n);var o=a.map(function(t){return e.escapeHTML(t.nodeValue)}).join("  ||  ");var s=r.reduce(function(e,t){var r=Array.prototype.map.call(n.querySelectorAll("["+t+'*="[["]'),function(e){return[t,e]});return e.concat(r)},[]);var c=s.map(function(e){return e[1].getAttribute(e[0])}).join("  ||  ");return Promise.all([this.translate(o),this.translate(c)]).then(function(e){var t=e[0];var n=e[1];if(t){t.split("  ||  ").forEach(function(e,t){$(a[t]).replaceWith(e)})}if(n){n.split("  ||  ").forEach(function(e,t){s[t][1].setAttribute(s[t][0],e)})}})};r.getLanguage=function t(){var n;if(typeof window==="object"&&window.config&&window.utils){n=e.params().lang||config.userLang||config.defaultLang||"en-GB"}else{var r=require("../../../src/meta");n=r.config&&r.config.defaultLang?r.config.defaultLang:"en-GB"}return n};r.create=function e(t){if(!t){t=r.getLanguage()}r.cache[t]=r.cache[t]||new r(t);return r.cache[t]};r.cache={};r.registerModule=function e(t,n){r.moduleFactories[t]=n;Object.keys(r.cache).forEach(function(e){var a=r.cache[e];a.modules[t]=n(a.lang)})};r.moduleFactories={};r.removePatterns=function e(t){var n=t.length;var r=0;var a=0;var i=0;var o="";var s;while(r<n){s=t.slice(r,r+2);if(s==="[["){if(i===0){o+=t.slice(a,r)}i+=1;r+=2}else if(s==="]]"){i-=1;r+=2;if(i===0){a=r}}else{r+=1}}o+=t.slice(a,r);return o};r.escape=function e(t){return typeof t==="string"?t.replace(/\[\[/g,"&lsqb;&lsqb;").replace(/\]\]/g,"&rsqb;&rsqb;"):t};r.unescape=function e(t){return typeof t==="string"?t.replace(/&lsqb;/g,"[").replace(/\\\[/g,"[").replace(/&rsqb;/g,"]").replace(/\\\]/g,"]"):t};r.compile=function e(){var t=Array.prototype.slice.call(arguments,0).map(function(e){return String(e).replace(/%/g,"&#37;").replace(/,/g,"&#44;")});return"[["+t.join(", ")+"]]"};return r}();var o={Translator:i,compile:i.compile,escape:i.escape,unescape:i.unescape,getLanguage:i.getLanguage,flush:function(){Object.keys(i.cache).forEach(function(e){i.cache[e].translations={}})},flushNamespace:function(e){Object.keys(i.cache).forEach(function(t){if(i.cache[t]&&i.cache[t].translations&&i.cache[t].translations[e]){i.cache[t].translations[e]=null}})},translate:function e(t,r,a){var o=a;var s=r;if(typeof r==="function"){o=r;s=null}if(!(typeof t==="string"||t instanceof String)||t===""){if(o){return setTimeout(o,0,"")}return""}return i.create(s).translate(t).then(function(e){if(o){setTimeout(o,0,e)}return e},function(e){n("Translation failed: "+e.stack)})},addTranslation:function e(t,n,a){i.create(t).getTranslation(n).then(function(e){r(e,a)})},getTranslations:function e(t,n,r){r=r||function(){};i.create(t).getTranslation(n).then(r)},load:function e(t,n,r){o.getTranslations(t,n,r)},toggleTimeagoShorthand:function t(n){function a(){var e=r({},jQuery.timeago.settings.strings);jQuery.timeago.settings.strings=r({},o.timeagoShort);o.timeagoShort=r({},e);if(typeof n==="function"){n()}}if(!o.timeagoShort){var i=e.userLangToTimeagoCode(config.userLang);if(!config.timeagoCodes.includes(i+"-short")){i="en"}var s=r({},jQuery.timeago.settings.strings);o.switchTimeagoLanguage(i+"-short",function(){o.timeagoShort=r({},jQuery.timeago.settings.strings);jQuery.timeago.settings.strings=r({},s);a()})}else{a()}},switchTimeagoLanguage:function e(t,n){delete o.timeagoShort;var r="timeago/locales/jquery.timeago."+t;require.undef(r);require([r],function(){n()})},prepareDOM:function e(){o.translate("[[language:dir]]",function(e){if(e&&!$("html").attr("data-dir")){jQuery("html").css("direction",e).attr("data-dir",e)}})}};return o});
//# sourceMappingURL=translator.js.map