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


	<div class="row">
		<div class="col-md-12">
			<form class="form-horizontal edit-form">
				<div class="form-group">
					<label class="col-sm-3 col-lg-2 control-label" for="inputNewEmail">[[user:email]]</label>
					<div class="col-sm-9 col-lg-10">
						<input class="form-control" type="text" id="inputNewEmail" placeholder="[[user:email]]" value="{email}">
					</div>
				</div>
		
				<!-- disables autocomplete on FF --><input type="password" style="display:none">
		
				<!-- IF isSelf -->
				<div class="form-group">
					<label class="col-sm-3 col-lg-2 control-label" for="inputCurrentPassword">[[user:current_password]]</label>
					<div class="col-sm-9 col-lg-10">
						<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current_password]]" value=""<!-- IF !hasPassword --> disabled<!-- ENDIF !hasPassword -->>
					</div>
				</div>
				<!-- ENDIF isSelf -->
		
				<input type="hidden" name="uid" id="inputUID" value="{uid}" />
		
				<br/>
				<div class="form-group form-actions">
					<div class="col-sm-offset-3 col-sm-9 col-lg-offset-2 col-lg-10">
						<a id="submitBtn" href="#" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change_email]]</a>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
