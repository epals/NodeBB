"use strict";define("admin/modules/dashboard-line-graph",["Chart","translator","benchpress","api","hooks"],function(a,t,e,r,n){const s={_current:null};let i=false;s.init=(({set:e,dataset:r})=>{const n=document.getElementById("analytics-traffic");const d=n.getContext("2d");const o=utils.getHoursArray();i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(i){a.defaults.global.tooltips.enabled=false}s.handleUpdateControls({set:e});var l=t.Translator.create();return new Promise(t=>{l.translateKey(`admin/menu:${ajaxify.data.template.name.replace("admin/","")}`,[]).then(i=>{const l={labels:o,datasets:[{label:i,backgroundColor:"rgba(151,187,205,0.2)",borderColor:"rgba(151,187,205,1)",pointBackgroundColor:"rgba(151,187,205,1)",pointHoverBackgroundColor:"rgba(151,187,205,1)",pointBorderColor:"#fff",pointHoverBorderColor:"rgba(151,187,205,1)",data:r||[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]};n.width=$(n).parent().width();l.datasets[0].yAxisID="left-y-axis";s._current=new a(d,{type:"line",data:l,options:{responsive:true,legend:{display:true},scales:{yAxes:[{id:"left-y-axis",ticks:{beginAtZero:true,precision:0},type:"linear",position:"left",scaleLabel:{display:true,labelString:i}}]},tooltips:{mode:"x"}}});if(!r){s.update(e).then(t)}else{t(s._current)}})})});s.handleUpdateControls=(({set:a})=>{$('[data-action="updateGraph"]:not([data-units="custom"])').on("click",function(){var t=new Date;var e=$(this).attr("data-amount");if($(this).attr("data-units")==="days"){t.setHours(0,0,0,0)}t=t.getTime();s.update(a,$(this).attr("data-units"),t,e);require(["translator"],function(a){a.translate("[[admin/dashboard:page-views-custom]]",function(a){$('[data-action="updateGraph"][data-units="custom"]').text(a)})})});$('[data-action="updateGraph"][data-units="custom"]').on("click",function(){var t=$(this);e.render("admin/partials/pageviews-range-select",{}).then(function(e){var r=bootbox.dialog({title:"[[admin/dashboard:page-views-custom]]",message:e,buttons:{submit:{label:"[[global:search]]",className:"btn-primary",callback:n}}}).on("shown.bs.modal",function(){var a=new Date;var e=a.toISOString().substr(0,10);a.setDate(a.getDate()-1);var n=a.toISOString().substr(0,10);r.find("#startRange").val(t.attr("data-startRange")||n);r.find("#endRange").val(t.attr("data-endRange")||e)});function n(){var e=r.find("form").serializeObject();var n=/\d{4}-\d{2}-\d{2}/;if(!e.startRange&&!e.endRange){s.update(a,"days");return}else if(!n.test(e.startRange)||!n.test(e.endRange)){r.find(".alert-danger").removeClass("hidden");return false}var i=new Date(e.endRange);i.setDate(i.getDate()+1);i=i.getTime();var d=(i-new Date(e.startRange).getTime())/(1e3*60*60*24);s.update(a,"days",i,d);t.attr("data-startRange",e.startRange);t.attr("data-endRange",e.endRange);t.html(e.startRange+" &ndash; "+e.endRange)}})})});s.update=((a,t=ajaxify.data.query.units||"hours",e=ajaxify.data.query.until,i=ajaxify.data.query.count)=>{if(!s._current){return Promise.reject(new Error("[[error:invalid-data]]"))}return new Promise(d=>{r.get(`/admin/analytics/${a}`,{units:t,until:e,amount:i}).then(a=>{if(t==="days"){s._current.data.xLabels=utils.getDaysArray(e,i)}else{s._current.data.xLabels=utils.getHoursArray()}s._current.data.datasets[0].data=a;s._current.data.labels=s._current.data.xLabels;s._current.update();var r=$("#view-as-json");var o=$.param({units:t||"hours",until:e,count:i});r.attr("href",`${config.relative_path}/api/v3/admin/analytics/${ajaxify.data.set}?${o}`);ajaxify.updateHistory(`${ajaxify.data.url.slice(1)}?${o}`,true);n.fire("action:admin.dashboard.updateGraph",{graph:s._current});d(s._current)})})});return s});
//# sourceMappingURL=dashboard-line-graph.js.map