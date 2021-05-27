
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<h1><i class=\"fa fa-picture-o\"></i> S3 Uploads Configuration</h1>\n<hr/>\n\n<p>You can configure this plugin via a combination of the below, for instance, you can use <em>instance meta-data</em>\n\tand <em>environment variables</em> in combination. You can also specify values in the form below, and those will be\n\tstored in the database.</p>\n\n<h3>Environment Variables</h3>\n<pre><code>export AWS_ACCESS_KEY_ID=\"xxxxx\"\nexport AWS_SECRET_ACCESS_KEY=\"yyyyy\"\nexport S3_UPLOADS_BUCKET=\"zzzz\"\nexport S3_UPLOADS_HOST=\"host\"\nexport S3_UPLOADS_PATH=\"path\"\n</code></pre>\n\n<p>\n\tAsset host and asset path are optional. You can leave these blank to default to the standard asset url -\n\thttp://mybucket.s3.amazonaws.com/uuid.jpg.<br/>\n\tAsset host can be set to a custom asset host. For example, if set to cdn.mywebsite.com then the asset url is\n\thttp://cdn.mywebsite.com/uuid.jpg.<br/>\n\tAsset path can be set to a custom asset path. For example, if set to /assets, then the asset url is\n\thttp://mybucket.s3.amazonaws.com/assets/uuid.jpg.<br/>\n\tIf both are asset host and path are set, then the url will be http://cdn.mywebsite.com/assets/uuid.jpg.\n</p>\n\n<h3>Instance meta-data</h3>\n<p>This plugin is compatible with the instance meta-data API, you'll need to setup role delegation for this to work. See\n\tthe following links:</p>\n<ul>\n\t<li><a href=\"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html\">EC2 Documentation:\n\t\tInstance Metadata and User Data</a></li>\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-assume-role.html\">IAM Documentation: Assuming a\n\t\tRole</a></li>\n\t<li><a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/role-usecase-ec2app.html\">IAM Documentation: EC2 Role\n\t\tExample</a></li>\n\t<li><a href=\"http://docs.aws.amazon.com/STS/latest/UsingSTS/sts_delegate.html\">STS Documentation: Delegation</a>\n\t</li>\n</ul>\n<div class=\"alert alert-warning\">\n\t<p>If you need help, create an <a href=\"https://github.com/LewisMcMahon/nodebb-plugin-s3-uploads/issues/\">issue on\n\t\tGithub</a>.</p>\n</div>\n\n<h3>Database Stored configuration:</h3>\n<form id=\"s3-upload-bucket\">\n\t<label for=\"s3bucket\">Bucket</label><br/>\n\t<input type=\"text\" id=\"s3bucket\" name=\"bucket\" value=\"" + 
      __escape(guard((context != null) ? context['bucket'] : null)) + 
      "\" title=\"S3 Bucket\" class=\"form-control input-lg\"\n\t       placeholder=\"S3 Bucket\"><br/>\n\n\t<label for=\"s3host\">Host</label><br/>\n\t<input type=\"text\" id=\"s3host\" name=\"host\" value=\"" + 
      __escape(guard((context != null) ? context['host'] : null)) + 
      "\" title=\"S3 Host\" class=\"form-control input-lg\"\n\t       placeholder=\"website.com\"><br/>\n\n\t<label for=\"s3path\">Path</label><br/>\n\t<input type=\"text\" id=\"s3path\" name=\"path\" value=\"" + 
      __escape(guard((context != null) ? context['path'] : null)) + 
      "\" title=\"S3 Path\" class=\"form-control input-lg\"\n\t       placeholder=\"/assets\"><br/>\n\n\t<label for=\"aws-region\">Region</label><br/>\n\t<select id=\"aws-region\" name=\"region\" title=\"AWS Region\" class=\"form-control\">\n\t\t<option value=\"\">..</option>\n\t\t<option value=\"us-east-1\">Standard (us-east-1)</option>\n\t\t<option value=\"us-west-1\">N. California (us-west-1)</option>\n\t\t<option value=\"us-west-2\">Oregon (us-west-2)</option>\n\t\t<option value=\"ca-central-1\">Canada (ca-central-1)</option>\n\t\t<option value=\"eu-west-1\">Ireland (eu-west-1)</option>\n\t\t<option value=\"eu-west-2\">London (eu-west-2)</option>\n\t\t<option value=\"eu-central-1\">Frankfurt (eu-central-1)</option>\n\t\t<option value=\"ap-northeast-1\">Tokyo (ap-northeast-1)</option>\n\t\t<option value=\"ap-northeast-2\">Seoul (ap-northeast-2)</option>\n\t\t<option value=\"ap-southeast-1\">Singapore (ap-southeast-1)</option>\n\t\t<option value=\"ap-southeast-2\">Sydney (ap-southeast-2)</option>\n\t\t<option value=\"ap-south-1\">Mumbai (ap-south-1)</option>\n\t\t<option value=\"sa-east-1\">São Paulo (sa-east-1)</option>\n\t</select>\n\t<br/>\n\n\t<button class=\"btn btn-primary\" type=\"submit\">Save</button>\n</form>\n\n<br><br>\n<form id=\"s3-upload-credentials\">\n\t<label for=\"bucket\">Credentials</label><br/>\n\t<div class=\"alert alert-warning\">\n\t\tConfiguring this plugin using the fields below is <strong>NOT recommended</strong>, as it can be a potential\n\t\tsecurity issue. We highly recommend that you investigate using either <strong>Environment Variables</strong> or\n\t\t<strong>Instance Meta-data</strong>\n\t</div>\n\t<input type=\"text\" name=\"accessKeyId\" value=\"" + 
      __escape(guard((context != null) ? context['accessKeyId'] : null)) + 
      "\" maxlength=\"20\" title=\"Access Key ID\"\n\t       class=\"form-control input-lg\" placeholder=\"Access Key ID\"><br/>\n\t<input type=\"text\" name=\"secretAccessKey\" value=\"" + 
      __escape(guard((context != null) ? context['secretAccessKey'] : null)) + 
      "\" title=\"Secret Access Key\"\n\t       class=\"form-control input-lg\" placeholder=\"Secret Access Key\"><br/>\n\t<button class=\"btn btn-primary\" type=\"submit\">Save</button>\n</form>\n\n<script>\n\t$(document).ready(function () {\n\n\t\t$('#aws-region option[value=\"" + 
      __escape(guard((context != null) ? context['region'] : null)) + 
      "\"]').prop('selected', true)\n\n\t\t$(\"#s3-upload-bucket\").on(\"submit\", function (e) {\n\t\t\te.preventDefault();\n\t\t\tsave(\"s3settings\", this);\n\t\t});\n\n\t\t$(\"#s3-upload-credentials\").on(\"submit\", function (e) {\n\t\t\te.preventDefault();\n\t\t\tvar form = this;\n\t\t\tbootbox.confirm(\"Are you sure you wish to store your credentials for accessing S3 in the database?\", function (confirm) {\n\t\t\t\tif (confirm) {\n\t\t\t\t\tsave(\"credentials\", form);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\n\t\tfunction save(type, form) {\n\t\t\tvar data = {\n\t\t\t\t_csrf: '" + 
      __escape(guard((context != null) ? context['csrf'] : null)) + 
      "' || $('#csrf_token').val()\n\t\t\t};\n\n\t\t\tvar values = $(form).serializeArray();\n\t\t\tfor (var i = 0, l = values.length; i < l; i++) {\n\t\t\t\tdata[values[i].name] = values[i].value;\n\t\t\t}\n\n\t\t\t$.post('" + 
      __escape(guard((context != null) ? context['forumPath'] : null)) + 
      "api/admin/plugins/s3-uploads/' + type, data).done(function (response) {\n\t\t\t\tif (response) {\n\t\t\t\t\tajaxify.refresh();\n\t\t\t\t\tapp.alertSuccess(response);\n\t\t\t\t}\n\t\t\t}).fail(function (jqXHR, textStatus, errorThrown) {\n\t\t\t\tajaxify.refresh();\n\t\t\t\tapp.alertError(jqXHR.responseJSON ? jqXHR.responseJSON.error : 'Error saving!');\n\t\t\t});\n\t\t}\n\t});\n</script>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
