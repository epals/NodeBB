"use strict";define("accounts/delete",["api","bootbox"],function(e){var t={};t.account=function(e,t){n(e,"[[user:delete_this_account_confirm]]","/account","[[user:account-deleted]]",t)};t.content=function(e,t){n(e,"[[user:delete_account_content_confirm]]","/content","[[user:account-content-deleted]]",t)};t.purge=function(e,t){n(e,"[[user:delete_all_confirm]]","","[[user:account-deleted]]",t)};function n(t,n,c,o,u){bootbox.confirm(n,function(n){if(!n){return}e.del(`/users/${t}${c}`,{}).then(()=>{app.alertSuccess(o);if(typeof u==="function"){return u()}}).catch(function(e){app.alertError(e)})})}return t});
//# sourceMappingURL=delete.js.map