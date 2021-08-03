"use strict";define("forum/topic/diffs",["api","bootbox","forum/topic/images"],function(t,e){const n={};const s={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"};n.open=function(s){if(!config.enablePostHistory){return}t.get(`/posts/${s}/diffs`,{}).then(t=>{i(t).then(i=>{const o=e.dialog({title:"[[topic:diffs.title]]",message:i,size:"large"});if(!t.timestamps.length){return}const a=o.find("select");const r=o.find('button[data-action="restore"]');const p=o.find('button[data-action="delete"]');const c=o.find("ul.posts-list");const f=o.find(".number-of-diffs strong");a.on("change",function(){n.load(s,this.value,c);r.prop("disabled",t.timestamps.indexOf(this.value)===0);p.prop("disabled",t.timestamps.indexOf(this.value)===0)});r.on("click",function(){n.restore(s,a.val(),o)});p.on("click",function(){n.delete(s,a.val(),a,f)});o.on("shown.bs.modal",function(){n.load(s,a.val(),c);r.prop("disabled",true);p.prop("disabled",true)})})}).catch(app.alertError)};n.load=function(e,n,s){if(!config.enablePostHistory){return}t.get(`/posts/${e}/diffs/${n}`,{}).then(t=>{t.deleted=!!parseInt(t.deleted,10);app.parseAndTranslate("partials/posts_list","posts",{posts:[t]},function(t){s.empty().append(t)})}).catch(app.alertError)};n.restore=function(e,n,s){if(!config.enablePostHistory){return}t.put(`/posts/${e}/diffs/${n}`,{}).then(()=>{s.modal("hide");app.alertSuccess("[[topic:diffs.post-restored]]")}).catch(app.alertError)};n.delete=function(e,n,s,o){t.del(`/posts/${e}/diffs/${n}`).then(t=>{i(t,"diffs").then(t=>{s.empty().append(t);s.trigger("change");const e=s.find("option").length;o.text(e);app.alertSuccess("[[topic:diffs.deleted]]")})}).catch(app.alertError)};function i(t,e){return new Promise(n=>{const i=[{diffs:t.revisions.map(function(t){const e=parseInt(t.timestamp,10);return{username:t.username,timestamp:e,pretty:new Date(e).toLocaleString(config.userLang.replace("_","-"),s)}}),numDiffs:t.timestamps.length,editable:t.editable,deletable:t.deletable},function(t){n(t)}];if(e){i.unshift(e)}app.parseAndTranslate("partials/modals/post_history",...i)})}return n});
//# sourceMappingURL=diffs.js.map