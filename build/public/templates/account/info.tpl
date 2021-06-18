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


	<!-- IF sessions.length -->
	<div class="row">
		<div class="col-xs-12 col-md-12">
			<h4>[[global:sessions]]</h4>
			<ul class="list-group" component="user/sessions">
				<!-- BEGIN sessions -->
				<li class="list-group-item" data-uuid="{../uuid}">
					<div class="pull-right">
						<!-- IF !../current -->
						<!-- IF isSelfOrAdminOrGlobalModerator -->
						<button class="btn btn-xs btn-default" type="button" data-action="revokeSession">Revoke Session</button>
						<!-- ENDIF isSelfOrAdminOrGlobalModerator -->
						<!-- ENDIF !../current -->
						{function.userAgentIcons}
						<i class="fa fa-circle text-<!-- IF ../current -->success<!-- ELSE -->muted<!-- ENDIF ../current -->"></i>
					</div>
					{../browser} {../version} on {../platform}<br />
					<small class="timeago text-muted" title="{../datetimeISO}"></small>
					<ul>
						<li><strong>[[global:ip_address]]</strong>: {../ip}</li>
					</ul>
				</li>
				<!-- END sessions -->
			</ul>
		</div>
	</div>
	<!-- ENDIF sessions.length -->

	<div class="row">
		<div class="col-sm-6">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">[[global:recentips]]</h3>
				</div>
				<div class="panel-body">
					<ul>
						<!-- BEGIN ips -->
						<li>@value</li>
						<!-- END ips -->
					</ul>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">[[user:info.username-history]]</h3>
				</div>
				<div class="panel-body">
					<ul class="list-group">
						<!-- BEGIN usernames -->
						<li class="list-group-item">
							{../value}
							<small class="pull-right"><span class="timeago" title="{../timestampISO}"></span></small>
						</li>
						<!-- END usernames -->
					</ul>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">[[user:info.email-history]]</h3>
				</div>
				<div class="panel-body">
					<ul class="list-group">
						<!-- BEGIN emails -->
						<li class="list-group-item">
							{../value}
							<small class="pull-right"><span class="timeago" title="{../timestampISO}"></span></small>
						</li>
						<!-- END emails -->
					</ul>
				</div>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">[[user:info.latest-flags]]</h3>
				</div>
				<div class="panel-body">
					<!-- IF history.flags.length -->
					<ul class="recent-flags">
						<!-- BEGIN history.flags -->
						<li>
							<p>
								{{{ if history.flags.targetPurged }}}
								<div>[[flags:target-purged]]</div>
								{{{ else }}}
								<a class="title" href="{config.relative_path}/post/{../pid}">{../title}</a><br />
								{{{ end }}}
								<span class="timestamp">[[flags:flagged-timeago-readable, {../timestampISO}, {../timestampReadable}]]</span>
							</p>
						</li>
						<!-- END history.flags -->
					</ul>
					<!-- ELSE -->
					<div class="alert alert-success">[[user:info.no-flags]]</div>
					<!-- ENDIF history.flags.length -->
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">

						[[user:info.ban-history]]

						<!-- IF !banned -->
						<!-- IF !isSelf -->
						<button class="btn btn-xs pull-right btn-danger" component="account/ban">[[user:ban_account]]</button>
						<!-- ENDIF !isSelf -->
						<!-- ELSE -->
						<!-- IF !isSelf -->
						<button class="btn btn-xs pull-right btn-success" component="account/unban">[[user:unban_account]]</button>
						<!-- ENDIF !isSelf -->
						<!-- ENDIF !banned -->
					</h3>
				</div>
				<div class="panel-body">
					<!-- IF history.bans.length -->
					<ul class="ban-history">
						<!-- BEGIN history.bans -->
						<li>
							<p>
								<span class="timestamp timeago" title="{../timestampISO}"></span> &mdash; {../timestampReadable}<br />
								<!-- IF ../until -->
								<span class="expiry">[[user:info.banned-until, {../untilReadable}]]</span><br />
								<!-- ELSE -->
								<span class="expiry">[[user:info.banned-permanently]]</span><br />
								<!-- ENDIF ../until -->
								<span class="reason"><strong>[[user:info.banned-reason-label]]</strong>: {../reason}</span>
							</p>
						</li>
						<!-- END history.bans -->
					</ul>
					<!-- ELSE -->
					<div class="alert alert-success">[[user:info.no-ban-history]]</div>
					<!-- ENDIF history.bans.length -->
				</div>
			</div>
			<!-- IF isAdminOrGlobalModerator -->
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">[[user:info.moderation-note]]</h3>
				</div>
				<div class="panel-body">
					<textarea component="account/moderation-note" class="form-control" rows="5"></textarea>
					<br/>
					<button class="btn btn-sm btn-primary" component="account/save-moderation-note">[[user:info.moderation-note.add]]</button>
					<div component="account/moderation-note/list">
						<!-- BEGIN moderationNotes -->
						<hr>
						<div class="row moderation-note">
							<div class="col-sm-2 col-md-2 col-lg-2 note-author">
								<a href="<!-- IF moderationNotes.user.userslug -->{config.relative_path}/user/{moderationNotes.user.userslug}<!-- ELSE -->#<!-- ENDIF moderationNotes.user.userslug -->">
									<!-- IF moderationNotes.user.picture -->
									<img component="user/picture" data-uid="{moderationNotes.user.uid}" class="user-avatar" src="{moderationNotes.user.picture}" alt="{moderationNotes.user.username}" itemprop="image" />
									<!-- ELSE -->
									<div component="user/picture" data-uid="{moderationNotes.user.uid}" class="user-icon" style="background-color: {moderationNotes.user.icon:bgColor};">{moderationNotes.user.icon:text}</div>
									<!-- ENDIF moderationNotes.user.picture -->
								</a>
								<div class="author">
									<a href="<!-- IF moderationNotes.user.userslug -->{config.relative_path}/user/{moderationNotes.user.userslug}<!-- ELSE -->#<!-- ENDIF moderationNotes.user.userslug -->">
										{moderationNotes.user.username}
									</a>
								</div>
							</div>
							<div class="col-sm-10 col-md-10 col-lg-10 content">
								<div>
									<span class="timeago" title="{moderationNotes.timestampISO}"></span>
								</div>
								<div>
									{moderationNotes.note}
								</div>
							</div>
						</div>
						<!-- END moderationNotes -->
					</div>
					<div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination hidden-xs">
		<li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page select-page">
				<a href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page<!-- IF pagination.pages.active --> active<!-- ENDIF pagination.pages.active -->" >
				<a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		{{{end}}}

		<li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>

	<ul class="pagination hidden-sm hidden-md hidden-lg">
		<li class="first<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.first.qs}" data-page="1"><i class="fa fa-fast-backward"></i> </a>
		</li>

		<li class="previous<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		<li component="pagination/select-page" class="page select-page">
			<a href="#">{pagination.currentPage} / {pagination.pageCount}</a>
		</li>

		<li class="next<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>

		<li class="last<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.last.qs}" data-page="{pagination.pageCount}"><i class="fa fa-fast-forward"></i> </a>
		</li>
	</ul>
</div>
				</div>
			</div>
			<!-- ENDIF isAdminOrGlobalModerator -->
		</div>
	</div>
</div>
