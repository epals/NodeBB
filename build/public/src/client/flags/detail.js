"use strict";define("forum/flags/detail",["forum/flags/list","components","translator","benchpress","forum/account/header","accounts/delete"],function(e,t,a,r,i,s){var n={};n.init=function(){$("#state").val(ajaxify.data.state).removeAttr("disabled");$("#assignee").val(ajaxify.data.assignee).removeAttr("disabled");$("#content > div").on("click","[data-action]",function(){var e=this.getAttribute("data-action");var t=$(this).parents("[data-uid]").attr("data-uid");var a=document.getElementById("note");switch(e){case"assign":$("#assignee").val(app.user.uid);case"update":socket.emit("flags.update",{flagId:ajaxify.data.flagId,data:$("#attributes").serializeArray()},function(e,t){if(e){return app.alertError(e.message)}app.alertSuccess("[[flags:updated]]");n.reloadHistory(t)});break;case"appendNote":socket.emit("flags.appendNote",{flagId:ajaxify.data.flagId,note:a.value,datetime:parseInt(a.getAttribute("data-datetime"),10)},function(e,t){if(e){return app.alertError(e.message)}app.alertSuccess("[[flags:note-added]]");n.reloadNotes(t.notes);n.reloadHistory(t.history);a.removeAttribute("data-datetime")});break;case"chat":app.newChat(t);break;case"ban":i.banAccount(t,ajaxify.refresh);break;case"delete-account":s.account(t,ajaxify.refresh);break;case"delete-content":s.content(t,ajaxify.refresh);break;case"delete-all":s.purge(t,ajaxify.refresh);break;case"delete-post":o("delete",ajaxify.data.target.pid,ajaxify.data.target.tid);break;case"purge-post":o("purge",ajaxify.data.target.pid,ajaxify.data.target.tid);break;case"restore-post":o("restore",ajaxify.data.target.pid,ajaxify.data.target.tid);break;case"delete-note":var r=parseInt(this.closest("[data-datetime]").getAttribute("data-datetime"),10);bootbox.confirm("[[flags:delete-note-confirm]]",function(e){if(e){socket.emit("flags.deleteNote",{flagId:ajaxify.data.flagId,datetime:r},function(e,t){if(e){return app.alertError(e.message)}app.alertSuccess("[[flags:note-deleted]]");n.reloadNotes(t.notes);n.reloadHistory(t.history)})}});break;case"prepare-edit":var d=this.closest("[data-index]");var f=d.getAttribute("data-index");var c=document.getElementById("note");c.value=ajaxify.data.notes[f].content;c.setAttribute("data-datetime",ajaxify.data.notes[f].datetime);var l=d.parentElement.children;for(var u in l){if(l.hasOwnProperty(u)){l[u].classList.remove("editing")}}d.classList.add("editing");c.focus();break}})};function o(e,t,r){a.translate("[[topic:post_"+e+"_confirm]]",function(a){bootbox.confirm(a,function(a){if(!a){return}socket.emit("posts."+e,{pid:t,tid:r},function(e){if(e){app.alertError(e.message)}ajaxify.refresh()})})})}n.reloadNotes=function(e){ajaxify.data.notes=e;r.render("flags/detail",{notes:e},"notes").then(function(e){var a=t.get("flag/notes");a.empty();a.html(e);a.find("span.timeago").timeago();document.getElementById("note").value=""})};n.reloadHistory=function(e){app.parseAndTranslate("flags/detail","history",{history:e},function(e){var a=t.get("flag/history");a.empty();a.html(e);a.find("span.timeago").timeago()})};return n});
//# sourceMappingURL=detail.js.map