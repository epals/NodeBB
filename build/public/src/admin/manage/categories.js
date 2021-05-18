"use strict";define("admin/manage/categories",["translator","benchpress","categorySelector","api","Sortable","bootbox"],function(a,e,t,i,n,r){var o={};var c=-1;var d;o.init=function(){t.init($('.category [component="category-selector"]'),{parentCid:ajaxify.data.selectedCategory?ajaxify.data.selectedCategory.cid:0,onSelect:function(a){ajaxify.go("/admin/manage/categories"+(a.cid?"?cid="+a.cid:""))},localCategories:[]});o.render(ajaxify.data.categoriesTree);$('button[data-action="create"]').on("click",o.throwCreateModal);$(".categories").on("click",'.category-tools [data-action="toggle"]',function(){var a=$(this);var e=a.attr("data-disable-cid");var t=a.parents('li[data-cid="'+e+'"]');var i=t.hasClass("disabled");var n=t.find("li[data-cid]");var r=n.map(function(){return $(this).attr("data-cid")}).get();o.toggle([e].concat(r),!i)});$(".categories").on("click",".toggle",function(){var a=$(this);a.find("i").toggleClass("fa-minus").toggleClass("fa-plus");a.closest("[data-cid]").find("> ul[data-cid]").toggleClass("hidden")});$(".categories").on("click",".set-order",function(){var a=$(this).attr("data-cid");var e=$(this).attr("data-order");var t=r.dialog({title:"[[admin/manage/categories:set-order]]",message:'<input class="form-control input-lg" value='+e+" />",show:true,buttons:{save:{label:"[[modules:bootbox.confirm]]",className:"btn-primary",callback:function(){var e=t.find("input").val();if(e&&a){var n={};n[a]={order:Math.max(1,parseInt(e,10))};i.put("/categories/"+a,n[a]).then(function(){ajaxify.refresh()}).catch(a=>app.alertError(a))}else{return false}}}}})});$("#collapse-all").on("click",function(){a(false)});$("#expand-all").on("click",function(){a(true)});function a(a){var e=$(".categories .toggle");e.find("i").toggleClass("fa-minus",a).toggleClass("fa-plus",!a);e.closest("[data-cid]").find("> ul[data-cid]").toggleClass("hidden",!a)}};o.throwCreateModal=function(){e.render("admin/partials/categories/create",{}).then(function(a){var e=r.dialog({title:"[[admin/manage/categories:alert.create]]",message:a,buttons:{save:{label:"[[global:save]]",className:"btn-primary",callback:d}}});var i={localCategories:[{cid:0,name:"[[admin/manage/categories:parent-category-none]]",icon:"fa-none"}]};var n=t.init(e.find('#parentCidGroup [component="category-selector"]'),i);var c=t.init(e.find('#cloneFromCidGroup [component="category-selector"]'),i);function d(){var a=e.find("form").serializeObject();a.description="";a.icon="fa-comments";a.uid=app.user.uid;a.parentCid=n.getSelectedCid();a.cloneFromCid=c.getSelectedCid();o.create(a);e.modal("hide");return false}$("#cloneChildren").on("change",function(){var a=$(this);var t=e.find('#parentCidGroup [component="category-selector"] .dropdown-toggle');if(a.prop("checked")){t.attr("disabled","disabled");n.selectCategory(0)}else{t.removeAttr("disabled")}});e.find("form").on("submit",d)})};o.create=function(a){i.post("/categories",a,function(a,e){if(a){return app.alertError(a.message)}app.alert({alert_id:"category_created",title:"[[admin/manage/categories:alert.created]]",message:"[[admin/manage/categories:alert.create-success]]",type:"success",timeout:2e3});ajaxify.go("admin/manage/categories/"+e.cid)})};o.render=function(e){var t=$(".categories");if(!e||!e.length){a.translate("[[admin/manage/categories:alert.none-active]]",function(a){$("<div></div>").addClass("alert alert-info text-center").text(a).appendTo(t)})}else{d={};g(e,t,0)}};o.toggle=function(a,e){const t=document.querySelector(".categories ul");Promise.all(a.map(a=>i.put("/categories/"+a,{disabled:e?1:0}).then(()=>{const i=t.querySelector(`li[data-cid="${a}"]`);i.classList[e?"add":"remove"]("disabled");$(i).find('li a[data-action="toggle"]').first().translateText(e?"[[admin/manage/categories:enable]]":"[[admin/manage/categories:disable]]")}).catch(app.alertError)))};function s(a){c=a.to.dataset.cid}function l(a){var e=parseInt(c,10)!==-1;if(a.newIndex!=null&&parseInt(a.oldIndex,10)!==parseInt(a.newIndex,10)||e){var t=a.item.dataset.cid;var n={};var r=(ajaxify.data.pagination.currentPage-1)*ajaxify.data.categoriesPerPage;n[t]={order:r+a.newIndex+1};if(e){n[t].parentCid=c}c=-1;i.put("/categories/"+t,n[t])}}function g(e,t,i){var r=0;e.forEach(function(e,t,i){a.translate(e.name,function(a){if(e.name!==a){e.name=a}r+=1;if(r===i.length){o()}})});if(!e.length){o()}function o(){app.parseAndTranslate("admin/partials/categories/category-rows",{cid:i,categories:e},function(a){t.append(a);for(var r=0,o=e.length;r<o;r+=1){g(e[r].children,$('li[data-cid="'+e[r].cid+'"]'),e[r].cid)}d[i]=n.create($('ul[data-cid="'+i+'"]')[0],{group:"cross-categories",animation:150,handle:".information",dataIdAttr:"data-cid",ghostClass:"placeholder",onAdd:s,onEnd:l})})}}return o});
//# sourceMappingURL=categories.js.map