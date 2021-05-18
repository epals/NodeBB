"use strict";define("forum/infinitescroll",function(){var e={};var r;var o=0;var t=false;var i;var n=0;e.init=function(e,t){if(typeof e==="function"){r=e;i=$("body")}else{r=t;i=e||$("body")}o=$(window).scrollTop();$(window).off("scroll",a).on("scroll",a)};function a(){if(n){clearTimeout(n)}n=setTimeout(function(){n=0;l()},60)}function l(){var e=utils.findBootstrapEnvironment();var n=(e==="xs"||e==="sm")&&$("html").hasClass("composing");if(t||n){return}var a=$(window).scrollTop();var l=$(window).height();var f=i.height()-l;var s=i.offset()?i.offset().top:0;var c=100*(a-s)/(f<=0?l:f);var u=15;var v=85;var d=a>o?1:-1;if(c<u&&a<o){r(d)}else if(c>v&&a>o){r(d)}else if(c<0&&d>0&&f<0){r(d)}o=a}e.loadMore=function(e,r,o){if(t){return}t=true;var i={method:e,data:r};$(window).trigger("action:infinitescroll.loadmore",i);socket.emit(i.method,i.data,function(e,r){if(e){t=false;return app.alertError(e.message)}o(r,function(){t=false})})};e.loadMoreXhr=function(e,r){if(t){return}t=true;var o=config.relative_path+"/api"+location.pathname.replace(new RegExp("^"+config.relative_path),"");var i={url:o,data:e};$(window).trigger("action:infinitescroll.loadmore.xhr",i);$.get(o,e,function(e){r(e,function(){t=false})}).fail(function(e){t=false;app.alertError(String(e.responseJSON||e.statusText))})};e.removeExtra=function(e,r,o){if(e.length<=o){return}var t=e.length-o;if(r>0){var i=$(document).height();var n=$(window).scrollTop();e.slice(0,t).remove();$(window).scrollTop(n+($(document).height()-i))}else{e.slice(e.length-t).remove()}};return e});
//# sourceMappingURL=infinitescroll.js.map