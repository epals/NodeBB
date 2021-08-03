"use strict";(function(e){if(typeof module==="object"&&module.exports){var a=require("nconf").get("relative_path");module.exports=e(require("../utils"),require("benchpressjs"),a)}else if(typeof define==="function"&&define.amd){define("helpers",["benchpress"],function(a){return e(utils,a,config.relative_path)})}})(function(e,a,r){a.setGlobal("true",true);a.setGlobal("false",false);var i={displayMenuItem:s,buildMetaTag:n,buildLinkTag:o,stringify:u,escape:c,stripTags:l,generateCategoryBackground:f,generateChildrenCategories:p,generateTopicClass:d,membershipBtn:g,spawnPrivilegeStates:m,localeToHTML:b,renderTopicImage:h,renderDigestAvatar:v,userAgentIcons:w,buildAvatar:k,register:x,__escape:t};function t(e){return e}function s(e,a){var r=e.navigation[a];if(!r){return false}if(r.route.match("/users")&&e.user&&!e.user.privileges["view:users"]){return false}if(r.route.match("/tags")&&e.user&&!e.user.privileges["view:tags"]){return false}if(r.route.match("/groups")&&e.user&&!e.user.privileges["view:groups"]){return false}return true}function n(e){var a=e.name?'name="'+e.name+'" ':"";var r=e.property?'property="'+e.property+'" ':"";var i=e.content?'content="'+e.content.replace(/\n/g," ")+'" ':"";return"<meta "+a+r+i+"/>\n\t"}function o(e){const a=["link","rel","as","type","href","sizes","title"];const[r,i,t,s,n,o,u]=a.map(a=>e[a]?`${a}="${e[a]}" `:"");return"<link "+r+i+t+s+o+u+n+"/>\n\t"}function u(e){return JSON.stringify(e).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/g,"&quot;")}function c(a){return e.escapeHTML(a)}function l(a){return e.stripHTMLTags(a)}function f(e){if(!e){return""}var a=[];if(e.bgColor){a.push("background-color: "+e.bgColor)}if(e.color){a.push("color: "+e.color)}if(e.backgroundImage){a.push("background-image: url("+e.backgroundImage+")");if(e.imageClass){a.push("background-size: "+e.imageClass)}}return a.join("; ")+";"}function p(e){var a="";if(!e||!e.children||!e.children.length){return a}e.children.forEach(function(e){if(e&&!e.isSection){var i=e.link?e.link:r+"/category/"+e.slug;a+='<span class="category-children-item pull-left">'+'<div role="presentation" class="icon pull-left" style="'+f(e)+'">'+'<i class="fa fa-fw '+e.icon+'"></i>'+"</div>"+'<a href="'+i+'"><small>'+e.name+"</small></a></span>"}});a=a?'<span class="category-children">'+a+"</span>":a;return a}function d(e){var a=[];if(e.locked){a.push("locked")}if(e.pinned){a.push("pinned")}if(e.deleted){a.push("deleted")}if(e.unread){a.push("unread")}if(e.scheduled){a.push("scheduled")}return a.join(" ")}function g(e){if(e.isMember&&e.name!=="administrators"){return'<button class="btn btn-danger" data-action="leave" data-group="'+e.displayName+'"'+(e.disableLeave?" disabled":"")+'><i class="fa fa-times"></i> [[groups:membership.leave-group]]</button>'}if(e.isPending&&e.name!=="administrators"){return'<button class="btn btn-warning disabled"><i class="fa fa-clock-o"></i> [[groups:membership.invitation-pending]]</button>'}else if(e.isInvited){return'<button class="btn btn-link" data-action="rejectInvite" data-group="'+e.displayName+'">[[groups:membership.reject]]</button><button class="btn btn-success" data-action="acceptInvite" data-group="'+e.name+'"><i class="fa fa-plus"></i> [[groups:membership.accept-invitation]]</button>'}else if(!e.disableJoinRequests&&e.name!=="administrators"){return'<button class="btn btn-success" data-action="join" data-group="'+e.displayName+'"><i class="fa fa-plus"></i> [[groups:membership.join-group]]</button>'}return""}function m(e,a){var r=[];for(var i in a){if(a.hasOwnProperty(i)){r.push({name:i,state:a[i]})}}return r.map(function(a){var r=["groups:moderate","groups:posts:upvote","groups:posts:downvote","groups:local:login","groups:group:create"];var i=["groups:find","groups:read","groups:topics:read","groups:view:users","groups:view:tags","groups:view:groups"];var t=["groups:moderate"];var s=e==="guests"&&(r.includes(a.name)||a.name.startsWith("groups:admin:"))||e==="spiders"&&!i.includes(a.name)||e==="Global Moderators"&&t.includes(a.name);return'<td class="text-center" data-privilege="'+a.name+'" data-value="'+a.state+'"><input autocomplete="off" type="checkbox"'+(a.state?" checked":"")+(s?' disabled="disabled"':"")+" /></td>"}).join("")}function b(e,a){e=e||a||"en-GB";return e.replace("_","-")}function h(e){if(e.thumb){return'<img src="'+e.thumb+'" class="img-circle user-img" title="'+e.user.username+'" />'}return'<img component="user/picture" data-uid="'+e.user.uid+'" src="'+e.user.picture+'" class="user-img" title="'+e.user.username+'" />'}function v(e){if(e.teaser){if(e.teaser.user.picture){return'<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%;" src="'+e.teaser.user.picture+'" title="'+e.teaser.user.username+'" />'}return'<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: '+e.teaser.user["icon:bgColor"]+'; color: white; text-align: center; display: inline-block; border-radius: 50%;">'+e.teaser.user["icon:text"]+"</div>"}if(e.user.picture){return'<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%;" src="'+e.user.picture+'" title="'+e.user.username+'" />'}return'<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: '+e.user["icon:bgColor"]+'; color: white; text-align: center; display: inline-block; border-radius: 50%;">'+e.user["icon:text"]+"</div>"}function w(e){var a="";switch(e.platform){case"Linux":a+='<i class="fa fa-fw fa-linux"></i>';break;case"Microsoft Windows":a+='<i class="fa fa-fw fa-windows"></i>';break;case"Apple Mac":a+='<i class="fa fa-fw fa-apple"></i>';break;case"Android":a+='<i class="fa fa-fw fa-android"></i>';break;case"iPad":a+='<i class="fa fa-fw fa-tablet"></i>';break;case"iPod":case"iPhone":a+='<i class="fa fa-fw fa-mobile"></i>';break;default:a+='<i class="fa fa-fw fa-question-circle"></i>';break}switch(e.browser){case"Chrome":a+='<i class="fa fa-fw fa-chrome"></i>';break;case"Firefox":a+='<i class="fa fa-fw fa-firefox"></i>';break;case"Safari":a+='<i class="fa fa-fw fa-safari"></i>';break;case"IE":a+='<i class="fa fa-fw fa-internet-explorer"></i>';break;case"Edge":a+='<i class="fa fa-fw fa-edge"></i>';break;default:a+='<i class="fa fa-fw fa-question-circle"></i>';break}return a}function k(e,a,r,i,t){if(!e){e=this}var s=['alt="'+e.username+'"','title="'+e.username+'"','data-uid="'+e.uid+'"','loading="lazy"'];var n=[];i=i||"";if(["xs","sm","sm2x","md","lg","xl"].includes(a)){i+=" avatar-"+a}else if(!isNaN(parseInt(a,10))){n.push("width: "+a+"px;","height: "+a+"px;","line-height: "+a+"px;","font-size: "+parseInt(a,10)/16+"rem;")}else{i+=" avatar-sm"}s.unshift('class="avatar '+i+(r?" avatar-rounded":"")+'"');if(t){s.push('component="'+t+'"')}else{s.push('component="avatar/'+(e.picture?"picture":"icon")+'"')}if(e.picture){return"<img "+s.join(" ")+' src="'+e.picture+'" style="'+n.join(" ")+'" />'}n.push("background-color: "+e["icon:bgColor"]+";");return"<span "+s.join(" ")+' style="'+n.join(" ")+'">'+e["icon:text"]+"</span>"}function x(){Object.keys(i).forEach(function(e){a.registerHelper(e,i[e])})}return i});
//# sourceMappingURL=helpers.js.map