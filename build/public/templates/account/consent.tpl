<div class="account">
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


	<div class="row account-menu">
	<div class="col-xs-12">
		<ul class="nav nav-pills pull-right">
			<!-- IF false -->
				<li>
					<a href="{config.relative_path}/user/{userslug}" class="inline-block" id="profile">[[user:profile]]</a>
				</li>
			<!-- ENDIF false -->
			<!-- IF showHidden -->
			<!-- IF false -->
				<li><a href="{config.relative_path}/user/{userslug}/edit">[[user:edit]]</a></li>
			<!-- ENDIF false -->
			<li><a href="{config.relative_path}/user/{userslug}/settings">[[user:settings]]</a></li>
			<!-- ENDIF showHidden -->
			<!-- IF false -->
				<li class="dropdown bottom-sheet">

					<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
					[[user:more]] <span class="caret"></span>
					</a>
					<ul class="dropdown-menu dropdown-menu-right">
						<!-- IF loggedIn -->
						<!-- IF !isSelf -->
						<!-- IF !banned -->
						<!-- IF !config.disableChat -->
						<li><a component="account/chat" href="#">[[user:chat_with, {username}]]</a></li>
						<!-- ENDIF !config.disableChat -->

						<li><a component="account/flag" href="#">[[user:flag-profile]]</a></li>
						<li>
							<a component="account/block" href="#"><!-- IF !../isBlocked -->[[user:block_user]]<!-- ELSE -->[[user:unblock_user]]<!-- END --></a>
						</li>
						<li class="divider"></li>
						<!-- ENDIF !banned -->
						<!-- ENDIF !isSelf -->
						<!-- ENDIF loggedIn -->


						<!-- IF !isSelf -->
						<!-- IF canBan -->
						<li class="<!-- IF banned -->hide<!-- ENDIF banned -->">
							<a component="account/ban" href="#">[[user:ban_account]]</a>
						</li>
						<li class="<!-- IF !banned -->hide<!-- ENDIF !banned -->">
							<a component="account/unban" href="#">[[user:unban_account]]</a>
						</li>
						<!-- ENDIF canBan -->
						<!-- IF isAdmin -->
						<li><a component="account/delete" href="#" class="">[[user:delete_account]]</a></li>
						<!-- ENDIF isAdmin -->
						<li class="divider"></li>
						<!-- ENDIF !isSelf -->


						<li><a href="{config.relative_path}/user/{userslug}/following">[[user:following]]</a></li>
						<li><a href="{config.relative_path}/user/{userslug}/followers">[[user:followers]]</a></li>
						<!-- IF showHidden -->
						<li><a href="{config.relative_path}/user/{userslug}/blocks">[[user:blocks]]</a></li>
						<!-- ENDIF showHidden -->
						<li class="divider"></li>
						<li><a href="{config.relative_path}/user/{userslug}/topics">[[global:topics]]</a></li>
						<li><a href="{config.relative_path}/user/{userslug}/posts">[[global:posts]]</a></li>
						<!-- IF !reputation:disabled -->
						<li><a href="{config.relative_path}/user/{userslug}/best">[[global:best]]</a></li>
						<!-- ENDIF !reputation:disabled -->
						<li><a href="{config.relative_path}/user/{userslug}/groups">[[global:header.groups]]</a></li>

						<!-- IF showHidden -->
						<li><a href="{config.relative_path}/user/{userslug}/bookmarks">[[user:bookmarks]]</a></li>
						<li><a href="{config.relative_path}/user/{userslug}/watched">[[user:watched]]</a></li>
						<li><a href="{config.relative_path}/user/{userslug}/ignored">[[user:ignored]]</a></li>
						<!-- IF !reputation:disabled -->
						<li><a href="{config.relative_path}/user/{userslug}/upvoted">[[global:upvoted]]</a></li>
						<!-- IF !downvote:disabled -->
						<li><a href="{config.relative_path}/user/{userslug}/downvoted">[[global:downvoted]]</a></li>
						<!-- ENDIF !downvote:disabled -->
						<!-- ENDIF !reputation:disabled -->
						<li><a href="{config.relative_path}/user/{userslug}/uploads">[[global:uploads]]</a></li>
						<!-- ENDIF showHidden -->

						<!-- BEGIN profile_links -->
						<!-- IF @first -->
						<li class="divider"></li>
						<!-- ENDIF @first -->
						<li id="{profile_links.id}" class="plugin-link <!-- IF profile_links.public -->public<!-- ELSE -->private<!-- ENDIF profile_links.public -->"><a href="{config.relative_path}/user/{userslug}/{profile_links.route}"><!-- IF profile_links.icon --><i class="fa fa-fw {profile_links.icon}"></i> <!-- ENDIF profile_links.icon -->{profile_links.name}</a></li>
						<!-- END profile_links -->
					</ul>
				</li>
			<!-- ENDIF false -->
		</ul>
	</div>
</div>

	<h2>[[user:consent.title]]</h2>
	<p class="lead">[[user:consent.lead]]</p>
	<p>[[user:consent.intro]]</p>

	<hr />

	<div class="row">
		<div class="col-sm-6">
			<!-- IF gdpr_consent -->
			<div class="alert alert-success">
				<i class="fa fa-check pull-right fa-3x"></i>
				[[user:consent.received]]
			</div>
			<!-- ELSE -->
			<div class="alert alert-warning">
				[[user:consent.not_received]]
				<br /><br />
				<div class="text-center">
					<button class="btn btn-warning" data-action="consent">[[user:consent.give]]</button>
				</div>
			</div>
			<!-- END -->
			<div class="panel panel-default">
				<div class="panel-body">
					<p>[[user:consent.email_intro]]</p>
					<!-- IF digest.enabled -->
					<p>[[user:consent.digest_frequency, {digest.frequency}]]</p>
					<!-- ELSE -->
					[[user:consent.digest_off]]
					<!-- END -->

					<div class="text-center">
						<a class="btn btn-default" href="./settings">
							<i class="fa fa-cog"></i>
							[[pages:account/settings]]
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="panel panel-default">
				<div class="panel-body">
					<p><strong>[[user:consent.right_of_access]]</strong></p>
					<p>[[user:consent.right_of_access_description]]</p>
					<p><strong>[[user:consent.right_to_rectification]]</strong></p>
					<p>[[user:consent.right_to_rectification_description]]</p>
					<p><strong>[[user:consent.right_to_erasure]]</strong></p>
					<p>[[user:consent.right_to_erasure_description]]</p>
					<p><strong>[[user:consent.right_to_data_portability]]</strong></p>
					<p>[[user:consent.right_to_data_portability_description]]</p>

					<div class="btn-group-vertical btn-block">
						<a class="btn btn-default" href="{config.relative_path}/api/user/uid/{userslug}/export/profile">
							<i class="fa fa-download"></i> [[user:consent.export_profile]]
						</a>
						<a class="btn btn-default" href="{config.relative_path}/api/user/uid/{userslug}/export/posts">
							<i class="fa fa-download"></i> [[user:consent.export_posts]]
						</a>
						<a class="btn btn-default" href="{config.relative_path}/api/user/uid/{userslug}/export/uploads">
							<i class="fa fa-download"></i> [[user:consent.export_uploads]]
						</a>
					</div>
				</div>
			</div>
	</div>
</div>