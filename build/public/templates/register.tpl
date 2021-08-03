<div class="register">
<!-- IF breadcrumbs.length -->
<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
	{{{each breadcrumbs}}}
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<meta itemprop="position" content="{@index}" />
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="item"><!-- ENDIF !@last -->
			<span itemprop="name">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}" itemprop="item"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	{{{end}}}
</ol>
<!-- ENDIF breadcrumbs.length -->


	<div class="row">
		<div class="col-md-12">
			<div class="register-block">
				<div class="alert alert-danger<!-- IF !error --> hidden<!-- ENDIF !error -->" id="register-error-notify" >
					<strong>[[error:registration-error]]</strong>
					<p>{error}</p>
				</div>
				<form component="register/local" class="form-horizontal" action="{config.relative_path}/register" method="post">
					<div class="form-group">
						<label for="email" class="col-lg-3 control-label">[[register:email_address]]</label>
						<div class="col-lg-7">
							<input class="form-control" type="email" placeholder="[[register:email_address_placeholder]]" name="email" id="email" autocorrect="off" autocapitalize="off" />
							<span class="register-feedback" id="email-notify"></span>
							<span class="help-block">[[register:help.email]]</span>
						</div>
					</div>
					<div class="form-group">
						<label for="username" class="col-lg-3 control-label">[[register:username]]</label>
						<div class="col-lg-7">
							<input class="form-control" type="text" placeholder="[[register:username_placeholder]]" name="username" id="username" autocorrect="off" autocapitalize="off" autocomplete="off" />
							<span class="register-feedback" id="username-notify"></span>
							<span class="help-block">[[register:help.username_restrictions, {minimumUsernameLength}, {maximumUsernameLength}]]</span>
						</div>
					</div>
					<div class="form-group">
						<label for="password" class="col-lg-3 control-label">[[register:password]]</label>
						<div class="col-lg-7">
							<input class="form-control" type="password" placeholder="[[register:password_placeholder]]" name="password" id="password" />
							<span class="register-feedback" id="password-notify"></span>
							<span class="help-block">[[register:help.minimum_password_length, {minimumPasswordLength}]]</span>
						</div>
					</div>
					<div class="form-group">
						<label for="password-confirm" class="col-lg-3 control-label">[[register:confirm_password]]</label>
						<div class="col-lg-7">
							<input class="form-control" type="password" placeholder="[[register:confirm_password_placeholder]]" name="password-confirm" id="password-confirm" />
							<span class="register-feedback" id="password-confirm-notify"></span>
						</div>
					</div>

					<!-- BEGIN regFormEntry -->
					<div class="form-group">
						<label for="register-{regFormEntry.styleName}" class="col-lg-3 control-label">{regFormEntry.label}</label>
						<div id="register-{regFormEntry.styleName}" class="col-lg-7">
							{{regFormEntry.html}}
						</div>
					</div>
					<!-- END regFormEntry -->

					<div class="form-group">
						<div class="col-lg-offset-3 col-lg-7">
							<button class="btn btn-primary btn-lg btn-block" id="register" type="submit">[[register:register_now_button]]</button>
						</div>
					</div>
					<input id="token" type="hidden" name="token" value="" />
				</form>
			</div>
		</div>

		<!-- IF alternate_logins -->
		<div class="col-lg-offset-3 col-lg-7">
			<div class="alt-logins">
				<!-- BEGIN authentication -->
				<div class="{authentication.name}"><a rel="nofollow noopener noreferrer" target="_top" href="{config.relative_path}{authentication.url}"><i class="fa {authentication.icon} fa-3x"></i></a></div>
				<!-- END authentication -->
			</div>
		</div>
		<!-- ENDIF alternate_logins -->
	</div>
</div>