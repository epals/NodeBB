"use strict";define("forum/flags/list",["components","Chart","categoryFilter","autocomplete"],function(e,t,a,r){var i={};var n;i.init=function(){i.enableFilterForm();i.enableCheckboxes();i.handleBulkActions();n=[];if(ajaxify.data.filters.hasOwnProperty("cid")){n=Array.isArray(ajaxify.data.filters.cid)?ajaxify.data.filters.cid:[ajaxify.data.filters.cid]}a.init($('[component="category/dropdown"]'),{privilege:"moderate",selectedCids:n,onHidden:function(e){n=e.selectedCids}});e.get("flags/list").on("click","[data-flag-id]",function(e){if(["BUTTON","A"].includes(e.target.nodeName)){return}var t=this.getAttribute("data-flag-id");ajaxify.go("flags/"+t)});$("#flags-daily-wrapper").one("shown.bs.collapse",function(){i.handleGraphs()});r.user($("#filter-assignee, #filter-targetUid, #filter-reporterId"),(e,t)=>{setTimeout(()=>{e.target.value=t.item.user.uid})})};i.enableFilterForm=function(){const t=e.get("flags/filters");for(const e in ajaxify.data.filters){if(ajaxify.data.filters.hasOwnProperty(e)){t.find('[name="'+e+'"]').val(ajaxify.data.filters[e])}}t.find('[name="sort"]').val(ajaxify.data.sort);document.getElementById("apply-filters").addEventListener("click",function(){const e=t.serializeArray();n.forEach(function(t){e.push({name:"cid",value:t})});ajaxify.go("flags?"+(e.length?$.param(e):"reset=1"))});t.find('button[data-target="#more-filters"]').click(e=>{const t=e.target.getAttribute("data-text-variant");if(!t){return}e.target.setAttribute("data-text-variant",e.target.textContent);e.target.firstChild.textContent=t})};i.enableCheckboxes=function(){var e=document.querySelector('[component="flags/list"]');var t=e.querySelectorAll('[data-flag-id] input[type="checkbox"]');var a=document.querySelector('[component="flags/bulk-actions"] button');var r;document.querySelector('[data-action="toggle-all"]').addEventListener("click",function(){var e=this.checked;t.forEach(function(t){t.checked=e});a.disabled=!e});e.addEventListener("click",function(e){var i=e.target.closest('input[type="checkbox"]');if(i){e.stopImmediatePropagation();if(r&&e.shiftKey&&r!==i){var n=i.checked;var o=false;t.forEach(function(e){if([i,r].some(function(t){return t===e})){o=!o}if(o){e.checked=n}})}a.disabled=!Array.prototype.some.call(t,function(e){return e.checked});r=i}if(e.target.querySelector('input[type="checkbox"]')){e.stopImmediatePropagation()}})};i.handleBulkActions=function(){document.querySelector('[component="flags/bulk-actions"]').addEventListener("click",function(e){var t=e.target.closest("[data-action]");if(t){var a=t.getAttribute("data-action");var r=i.getSelected();var n=[];r.forEach(function(e){n.push(new Promise(function(t,r){var i=function(e){if(e){r(e)}t(arguments[1])};switch(a){case"bulk-assign":socket.emit("flags.update",{flagId:e,data:[{name:"assignee",value:app.user.uid}]},i);break;case"bulk-mark-resolved":socket.emit("flags.update",{flagId:e,data:[{name:"state",value:"resolved"}]},i);break}}))});Promise.allSettled(n).then(function(e){var t=e.filter(function(e){return e.status==="fulfilled"}).length;var a=e.filter(function(e){return e.status==="rejected"});if(t){app.alertSuccess("[[flags:bulk-success, "+t+"]]");ajaxify.refresh()}a.forEach(function(e){app.alertError(e.reason)})})}})};i.getSelected=function(){var e=document.querySelectorAll('[component="flags/list"] [data-flag-id] input[type="checkbox"]');var t=[];e.forEach(function(e){if(e.checked){t.push(e.closest("[data-flag-id]").getAttribute("data-flag-id"))}});return t};i.handleGraphs=function(){var e=document.getElementById("flags:daily");var a=utils.getDaysArray().map(function(e,t){return t%3?"":e});if(utils.isMobile()){t.defaults.global.tooltips.enabled=false}var r={"flags:daily":{labels:a,datasets:[{label:"",backgroundColor:"rgba(151,187,205,0.2)",borderColor:"rgba(151,187,205,1)",pointBackgroundColor:"rgba(151,187,205,1)",pointHoverBackgroundColor:"#fff",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",data:ajaxify.data.analytics}]}};e.width=$(e).parent().width();new t(e.getContext("2d"),{type:"line",data:r["flags:daily"],options:{responsive:true,animation:false,legend:{display:false},scales:{yAxes:[{ticks:{beginAtZero:true,precision:0}}]}}})};return i});
//# sourceMappingURL=list.js.map