<div class="login">
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
		<!-- IF allowLocalLogin -->
		<div class="col-md-12">
			<div class="login-block">
				<div class="alert alert-danger" id="login-error-notify" <!-- IF error -->style="display:block"<!-- ELSE -->style="display: none;"<!-- ENDIF error -->>
					<button type="button" class="close" data-dismiss="alert">&times;</button>
					<strong>[[login:failed_login_attempt]]</strong>
					<p>{error}</p>
				</div>

				<form class="form-horizontal" method="post" target="login" id="login-form">
					<div class="form-group">
						<label for="username" class="col-lg-2 control-label">{allowLoginWith}</label>
						<div class="col-lg-10">
							<input class="form-control" type="text" placeholder="{allowLoginWith}" name="username" id="username" autocorrect="off" autocapitalize="off" value="{username}"/>
						</div>
					</div>
					<div class="form-group">
						<label for="password" class="col-lg-2 control-label">[[user:password]]</label>
						<div class="col-lg-10">
							<input class="form-control" type="password" placeholder="[[user:password]]" name="password" id="password" <!-- IF username -->autocomplete="off"<!-- ENDIF username -->/>
						</div>
					</div>
					<div class="form-group">
						<div class="col-lg-offset-2 col-lg-10">
							<div class="checkbox">
								<label>
									<input type="checkbox" name="remember" id="remember" checked /> [[login:remember_me]]
									<i class="input-helper"></i>
								</label>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="col-lg-offset-2 col-lg-10">
							<button class="btn btn-primary btn-lg btn-block" id="login" type="submit">[[global:login]]</button>

							<div class="register-forgot-pwd">
							<!-- IF allowRegistration -->
							<span>[[login:dont_have_account]] <a href="{config.relative_path}/register">[[register:register]]</a></span>
							<!-- ENDIF allowRegistration -->
							&nbsp; <a id="reset-link" href="{config.relative_path}/reset">[[login:forgot_password]]</a>
							</div>
						</div>
					</div>
				</form>

			</div>
		</div>
		<!-- ENDIF allowLocalLogin -->

		<!-- IF alternate_logins -->
		<div class="col-lg-offset-2 col-lg-10">
			<div class="alt-logins">
				<!-- BEGIN authentication -->
				<div class="{authentication.name}"><a rel="nofollow noopener noreferrer" target="_top" href="{config.relative_path}{authentication.url}"><i class="fa {authentication.icon} fa-3x"></i></a></div>
				<!-- END authentication -->
			</div>
		</div>
		<!-- ENDIF alternate_logins -->
	</div>
</div>
