"use strict";define("composer/preview",["hooks"],function(e){var i={};var n=0;i.render=function(i,r){r=r||function(){};if(!i.find(".preview-container").is(":visible")){return r()}if(n){clearTimeout(n);n=0}var o=i.find("textarea");n=setTimeout(function(){socket.emit("plugins.composer.renderPreview",o.val(),function(o,t){n=0;if(o){return}t=$("<div>"+t+"</div>");t.find("img:not(.not-responsive)").addClass("img-responsive");i.find(".preview").html(t);e.fire("action:composer.preview");r()})},250)};i.matchScroll=function(e){if(!e.find(".preview-container").is(":visible")){return}var i=e.find("textarea");var n=e.find(".preview");if(i.length&&n.length){var r=i[0].scrollHeight-i.height();if(r===0){return}var o=i.scrollTop()/r;n.scrollTop(Math.max(n[0].scrollHeight-n.height(),0)*o)}};i.handleToggler=function(e){i.env=utils.findBootstrapEnvironment();var n=e.find(".write-container .toggle-preview");var r=e.find(".preview-container .toggle-preview");var o=$(".preview-container");var t=$(".write-container");function s(){a(false);if(i.env!=="xs"&&i.env!=="sm"){localStorage.setItem("composer:previewToggled",true)}}function l(){a(true);if(i.env!=="xs"&&i.env!=="sm"){localStorage.removeItem("composer:previewToggled")}}function a(r){if(i.env==="xs"||i.env==="sm"){o.toggleClass("hide",false);t.toggleClass("maximized",false);n.toggleClass("hide",true);o.toggleClass("hidden-xs hidden-sm",!r);t.toggleClass("hidden-xs hidden-sm",r);if(r){i.render(e,function(){})}}else{o.toggleClass("hide",!r);t.toggleClass("maximized",!r);n.toggleClass("hide",r)}i.matchScroll(e)}i.toggle=a;r.on("click",function(){s();e.find(".write").focus()});n.on("click",function(){l();e.find(".write").focus()});if(localStorage.getItem("composer:previewToggled")||(i.env==="xs"||i.env==="sm")){s()}else{l()}};return i});
//# sourceMappingURL=preview.js.map