"use strict";define("composer/drafts",["topicThumbs","api"],function(t,e){var a={};var i;a.init=function(t,e){var n=t.find(".draft-icon");function s(){r();i=setTimeout(function(){o(t,n,e)},1e3)}t.on("keyup","textarea, input.handle, input.title",s);t.on("click",'input[type="checkbox"]',s);t.on("thumb.uploaded",s);n.on("animationend",function(){$(this).toggleClass("active",false)});$(window).on("unload",function(){var t=[];try{t=localStorage.getItem("drafts:open");t=JSON.parse(t)||[]}catch(e){console.warn("[composer/drafts] Could not read list of open/available drafts");t=[]}if(t.length){t.forEach(function(t){a.updateVisibility("open",t)})}});a.migrateGuest();a.migrateThumbs(...arguments)};function r(){if(i){clearTimeout(i);i=0}}a.getDraft=function(t){console.warn("[composer/drafts] drafts.getDraft is deprecated! Use drafts.get() instead.");return localStorage.getItem(t)};function n(t){return parseInt(t,10)>0?localStorage:sessionStorage}a.get=function(t){var e=t.split(":")[1];var a=n(e);var i={text:a.getItem(t)};["cid","title","tags","uuid"].forEach(function(e){const r=a.getItem(t+":"+e);if(r){i[e]=r}});if(!parseInt(e,10)){i.handle=a.getItem(t+":handle")}$(window).trigger("action:composer.drafts.get",{save_id:t,draft:i,storage:a});return i};function o(t,e,i){if(s(app.user.uid?"localStorage":"sessionStorage")&&i&&i.save_id&&t.length){const s=t.find("input.title");const u=s&&s.val();var r=t.find("textarea").val();var o=n(app.user.uid);if(i.hasOwnProperty("cid")&&!i.save_id.endsWith(":cid:"+i.cid)){a.removeDraft(i.save_id);i.save_id=i.save_id.replace(/cid:\d+$/,"cid:"+i.cid)}if(r.length||u&&u.length){o.setItem(i.save_id,r);o.setItem(`${i.save_id}:uuid`,t.attr("data-uuid"));if(i.hasOwnProperty("cid")){const e=t.find("input.tags").val();o.setItem(i.save_id+":tags",e);o.setItem(i.save_id+":title",u)}if(!app.user.uid){var d=t.find("input.handle").val();o.setItem(i.save_id+":handle",d)}$(window).trigger("action:composer.drafts.save",{storage:o,postData:i,postContainer:t});e.toggleClass("active",true)}else{a.removeDraft(i.save_id)}}}a.removeDraft=function(t){if(!t){return}r();a.updateVisibility("available",t);a.updateVisibility("open",t);var e=t.split(":")[1];var i=n(e);const o=Object.keys(i).filter(e=>e.startsWith(t));o.forEach(t=>i.removeItem(t))};a.updateVisibility=function(t,e,a){if(!s(app.user.uid?"localStorage":"sessionStorage")||!e){return}var i=[];try{i=localStorage.getItem("drafts:"+t);i=i?JSON.parse(i):[]}catch(t){console.warn("[composer/drafts] Could not read list of open drafts");i=[]}var r=i.indexOf(e);if(a&&r===-1){i.push(e)}else if(!a&&r!==-1){i.splice(r,1)}localStorage.setItem("drafts:"+t,JSON.stringify(i))};a.migrateGuest=function(){if(s("localStorage")&&app.user.uid){var t=/^composer:\d+:\w+:\d+(:\w+)?$/;var e=Object.keys(sessionStorage).filter(function(e){return t.test(e)});var i=new Set([]);var r=e.map(function(t){var e=t.split(":");e[1]=app.user.uid;i.add(e.slice(0,4).join(":"));return e.join(":")});e.forEach(function(t,e){localStorage.setItem(r[e],sessionStorage.getItem(t));sessionStorage.removeItem(t)});i.forEach(function(t){a.updateVisibility("available",t,1)});return i}};a.migrateThumbs=function(t,i){const r=t.attr("data-uuid");const n=a.get(i.save_id);if(n&&n.uuid){e.put(`/topics/${n.uuid}/thumbs`,{tid:r}).then(()=>{require(["composer"],function(e){e.updateThumbCount(r,t)})})}};a.loadOpen=function(){if(ajaxify.data.template.login||ajaxify.data.template.register){return}var t;var e=[];try{t=localStorage.getItem("drafts:available");e=localStorage.getItem("drafts:open");t=JSON.parse(t)||[];e=JSON.parse(e)||[]}catch(a){console.warn("[composer/drafts] Could not read list of open/available drafts");t=[];e=[]}if(t.length&&app.user&&app.user.uid!==0){t.forEach(function(t){if(!t){return}var i=t.split(":");var r=i[1];var n=i[2];var o=i[3];var s=a.get(t);if(e.indexOf(t)!==-1){return}if(parseInt(app.user.uid,10)!==parseInt(r,10)){return}if(!s||s.text&&s.title&&!s.text.title&&!s.text.length){a.updateVisibility("available",t);a.updateVisibility("open",t);return}require(["composer"],function(t){if(n==="cid"){t.newTopic({cid:o,title:s.title,body:s.text,tags:[]})}else if(n==="tid"){socket.emit("topics.getTopic",o,function(e,a){if(e){return app.alertError(e.message)}t.newReply(o,undefined,a.title,s.text)})}else if(n==="pid"){t.editPost(o)}})})}};function s(t){var e;try{e=window[t];var a="__storage_test__";e.setItem(a,a);e.removeItem(a);return true}catch(t){return t instanceof DOMException&&(t.code===22||t.code===1014||t.name==="QuotaExceededError"||t.name==="NS_ERROR_DOM_QUOTA_REACHED")&&(e&&e.length!==0)}}return a});
//# sourceMappingURL=drafts.js.map