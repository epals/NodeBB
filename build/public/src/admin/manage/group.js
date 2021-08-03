"use strict";define("admin/manage/group",["forum/groups/memberlist","iconSelect","translator","categorySelector","groupSearch","slugify","api"],function(e,a,r,n,o,i,t){var s={};s.init=function(){var r=$("#group-icon");var s=$("#change-group-user-title");var l=$("#change-group-label-color");var p=$("#change-group-text-color");var g=$("#group-label-preview");var d=$("#group-label-preview-text");var f=ajaxify.data.group.name;$("#group-selector").on("change",function(){ajaxify.go("admin/manage/groups/"+$(this).val()+window.location.hash)});e.init("admin/manage/group");s.on("keyup",function(){d.translateText(s.val())});l.on("keyup input",function(){g.css("background-color",l.val()||"#000000")});p.on("keyup input",function(){g.css("color",p.val()||"#ffffff")});c();$("#group-icon, #group-icon-label").on("click",function(){var e=r.attr("value");a.init(r,function(){var a=r.attr("value");if(a===e){return}if(a==="fa-nbb-none"){a="hidden"}$("#group-icon-preview").attr("class","fa fa-fw "+(a||"hidden"));app.flags=app.flags||{};app.flags._unsaved=true})});n.init($('.edit-privileges-selector [component="category-selector"]'),{onSelect:function(e){u(e.cid)},showLinks:true});var v=n.init($('.member-post-cids-selector [component="category-selector"]'),{onSelect:function(e){var a=($("#memberPostCids").val()||"").split(",").map(e=>parseInt(e,10));a.push(e.cid);a=a.filter((e,a,r)=>r.indexOf(e)===a);$("#memberPostCids").val(a.join(","));v.selectCategory(0)}});o.init($('[component="group-selector"]'));$("form [data-property]").on("change",function(){app.flags=app.flags||{};app.flags._unsaved=true});$("#save").on("click",function(){t.put(`/groups/${i(f)}`,{name:$("#change-group-name").val(),userTitle:s.val(),description:$("#change-group-desc").val(),icon:r.attr("value"),labelColor:l.val(),textColor:p.val(),userTitleEnabled:$("#group-userTitleEnabled").is(":checked"),private:$("#group-private").is(":checked"),hidden:$("#group-hidden").is(":checked"),memberPostCids:$("#memberPostCids").val(),disableJoinRequests:$("#group-disableJoinRequests").is(":checked"),disableLeave:$("#group-disableLeave").is(":checked")}).then(()=>{var e=$("#change-group-name").val();if(f!==e){ajaxify.go("admin/manage/groups/"+encodeURIComponent(e),undefined,true)}app.alertSuccess("[[admin/manage/groups:edit.save-success]]")}).catch(app.alertError);return false})};function c(){$('[component="groups/members"]').on("click","[data-action]",function(){var e=$(this);var a=e.parents("[data-uid]");var r=a.find(".member-name .user-owner-icon");var n=!r.hasClass("invisible");var o=a.attr("data-uid");var i=e.attr("data-action");switch(i){case"toggleOwnership":t[n?"del":"put"](`/groups/${ajaxify.data.group.slug}/ownership/${o}`,{}).then(()=>{r.toggleClass("invisible")}).catch(app.alertError);break;case"kick":bootbox.confirm("[[admin/manage/groups:edit.confirm-remove-user]]",function(e){if(!e){return}t.del("/groups/"+ajaxify.data.group.slug+"/membership/"+o).then(()=>{a.slideUp().remove()}).catch(app.alertError)});break;default:break}})}function u(e){if(e){var a="admin/manage/privileges/"+e+"?group="+ajaxify.data.group.nameEncoded;if(app.flags&&app.flags._unsaved===true){r.translate("[[global:unsaved-changes]]",function(e){bootbox.confirm(e,function(e){if(e){app.flags._unsaved=false;ajaxify.go(a)}})});return}ajaxify.go(a)}}return s});
//# sourceMappingURL=group.js.map