"use strict";define("flags",["hooks","components"],function(a,e){var t={};var o;var n;var l;t.showFlagModal=function(a){app.parseAndTranslate("partials/modals/flag_modal",a,function(e){o=e;o.on("hidden.bs.modal",function(){o.remove()});n=o.find("#flag-post-commit");l=o.find("#flag-reason-custom");o.on("click",".flag-reason",function(){var e=$(this).text();if(l.val().length===0){return s(a.type,a.id,e)}bootbox.confirm({title:"[[flags:modal-submit-confirm]]",message:'<p>[[flags:modal-submit-confirm-text]]</p><p class="help-block">[[flags:modal-submit-confirm-text-help]]</p>',callback:function(t){if(t){s(a.type,a.id,e)}}})});n.on("click",function(){s(a.type,a.id,o.find("#flag-reason-custom").val())});o.on("click",".toggle-custom",function(){l.prop("disabled",false);l.focus()});o.modal("show");$(window).trigger("action:flag.showModal",{modalEl:o,type:a.type,id:a.id});o.find("#flag-reason-custom").on("keyup blur change",i)})};t.resolve=function(e){socket.emit("flags.update",{flagId:e,data:[{name:"state",value:"resolved"}]},function(t){if(t){return app.alertError(t.message)}app.alertSuccess("[[flags:resolved]]");a.fire("action:flag.resolved",{flagId:e})})};function s(a,t,n){if(!a||!t||!n){return}var l={type:a,id:t,reason:n};socket.emit("flags.create",l,function(n,s){if(n){return app.alertError(n.message)}o.modal("hide");app.alertSuccess("[[flags:modal-submit-success]]");if(a==="post"){var i=e.get("post","pid",t);i.find('[component="post/flag"]').addClass("hidden").parent().attr("hidden","");i.find('[component="post/already-flagged"]').removeClass("hidden").parent().attr("hidden",null)}$(window).trigger("action:flag.create",{flagId:s,data:l})})}function i(){if(o.find("#flag-reason-custom").val()){n.removeAttr("disabled")}else{n.attr("disabled",true)}}return t});
//# sourceMappingURL=flags.js.map