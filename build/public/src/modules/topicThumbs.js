"use strict";define("topicThumbs",["api","bootbox","uploader","benchpress","translator","jquery-ui/widgets/sortable"],function(t,e,o,a,l){const d={};d.get=(e=>t.get(`/topics/${e}/thumbs`,{}));d.getByPid=(e=>t.get(`/posts/${e}`,{}).then(t=>d.get(t.tid)));d.delete=((e,o)=>t.del(`/topics/${e}/thumbs`,{path:o}));d.deleteAll=(t=>{d.get(t).then(e=>{Promise.all(e.map(e=>d.delete(t,e.url)))})});d.upload=(t=>new Promise(e=>{o.show({title:"[[topic:composer.thumb_title]]",method:"put",route:config.relative_path+`/api/v3/topics/${t}/thumbs`},function(t){e(t)})}));d.modal={};d.modal.open=function(t){const{id:o,pid:s}=t;let{modal:r}=t;let n;return new Promise(m=>{Promise.all([d.get(o),s?d.getByPid(s):[]]).then(t=>new Promise(e=>{const o=t.reduce((t,e)=>t.concat(e));n=o.length;e(o)})).then(t=>a.render("modals/topic-thumbs",{thumbs:t})).then(a=>{if(r){l.translate(a,function(t){r.find(".bootbox-body").html(t);d.modal.handleSort({modal:r,numThumbs:n})})}else{r=e.dialog({title:"[[modules:thumbs.modal.title]]",message:a,buttons:{add:{label:'<i class="fa fa-plus"></i> [[modules:thumbs.modal.add]]',className:"btn-success",callback:()=>{d.upload(o).then(()=>{d.modal.open({...t,modal:r});require(["composer"],t=>{t.updateThumbCount(o,$(`[component="composer"][data-uuid="${o}"]`));m()})});return false}},close:{label:"[[global:close]]",className:"btn-primary"}}});d.modal.handleDelete({...t,modal:r});d.modal.handleSort({modal:r,numThumbs:n})}})})};d.modal.handleDelete=(o=>{const a=o.modal.get(0);a.addEventListener("click",a=>{if(a.target.closest('button[data-action="remove"]')){e.confirm("[[modules:thumbs.modal.confirm-remove]]",e=>{if(!e){return}const l=a.target.closest(".media[data-id]").getAttribute("data-id");const s=a.target.closest(".media[data-path]").getAttribute("data-path");t.del(`/topics/${l}/thumbs`,{path:s}).then(()=>{d.modal.open(o)}).catch(app.alertError)})}})});d.modal.handleSort=(({modal:t,numThumbs:e})=>{if(e>1){const e=t.find(".topic-thumbs-modal");e.sortable({items:"[data-id]"});e.on("sortupdate",d.modal.handleSortChange)}});d.modal.handleSortChange=((e,o)=>{const a=o.item.get(0).parentNode.querySelectorAll("[data-id]");Array.from(a).forEach((e,o)=>{const a=e.getAttribute("data-id");let l=e.getAttribute("data-path");l=l.replace(new RegExp(`^${config.upload_url}`),"");t.put(`/topics/${a}/thumbs/order`,{path:l,order:o}).catch(app.alertError)})});return d});
//# sourceMappingURL=topicThumbs.js.map