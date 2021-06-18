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


	<div class="profile row">
		<div class="col-xs-12">
			<div class="user-info" data-uid="{uid}">
				<!-- IF picture -->
				<img id="user-current-picture" class="user-avatar" src="{picture}" alt="{username}" />
				<!-- ELSE -->
				<div class="user-icon" style="background-color: {icon:bgColor};">{icon:text}</div>
				<!-- ENDIF picture -->
				<i component="user/status" class="fa fa-circle status {status}" title="[[global:{status}]]"></i>
				<h1 class="fullname">
					<!-- IF fullname -->{fullname}
					<!-- ELSE -->{username}
					<!-- ENDIF fullname -->
				</h1>
				<h4 class="username">
					<!-- IF !banned -->@{username}
					<!-- ELSE -->[[user:banned]]
					<!-- ENDIF !banned -->
				</h4>

				<!-- IF isAdminOrGlobalModeratorOrModerator -->
				<!-- IF banned -->
				<div class="text-center">
				<!-- IF banned_until -->
				[[user:info.banned-until, {banned_until_readable}]]
				<!-- ELSE -->
				[[user:info.banned-permanently]]
				<!-- ENDIF banned_until -->
				</div>
				<!-- ENDIF banned -->
				<!-- ENDIF isAdminOrGlobalModeratorOrModerator -->

				<!-- IF loggedIn -->
				<!-- IF !isSelf -->
				<!-- IF !banned -->
				<!-- IF !config.disableChat -->
				<a component="account/chat" href="#" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-comment-o"></i> Chat</a>
				<!-- ENDIF !config.disableChat -->
				<!-- IF false -->
					<a id="follow-btn" component="account/follow" href="#" class="btn btn-success btn-sm <!-- IF isFollowing -->hide<!-- ENDIF isFollowing -->">[[user:follow]]</a>
					<a id="unfollow-btn" component="account/unfollow" href="#" class="btn btn-warning btn-sm <!-- IF !isFollowing -->hide<!-- ENDIF !isFollowing -->">[[user:unfollow]]</a>
				<!-- ENDIF false -->
				<!-- ENDIF !banned -->
				<!-- ENDIF !isSelf -->
				<!-- ENDIF loggedIn -->
			</div>

			<!-- IF aboutme -->
			<span component="aboutme" class="text-center aboutme">{aboutmeParsed}</span>
			<!-- ENDIF aboutme -->

			<div class="account-stats">
				<!-- IF !reputation:disabled -->
				<div class="stat">
					<div class="human-readable-number" title="{reputation}">{reputation}</div>
					<span class="stat-label">[[global:reputation]]</span>
				</div>
				<!-- ENDIF !reputation:disabled -->

				<div class="stat">
					<div class="human-readable-number" title="{postcount}">{postcount}</div>
					<span class="stat-label">[[global:posts]]</span>
				</div>

				<!-- IF false -->
				<div class="stat">
					<div class="human-readable-number" title="{profileviews}">{profileviews}</div>
					<span class="stat-label">[[user:profile_views]]</span>
				</div>

				<div class="stat">
					<div class="human-readable-number" title="{followerCount}">{followerCount}</div>
					<span class="stat-label">[[user:followers]]</span>
				</div>

				<div class="stat">
					<div class="human-readable-number" title="{followingCount}">{followingCount}</div>
					<span class="stat-label">[[user:following]]</span>
				</div>
				<!-- ENDIF false -->
			</div>

			<!-- IF false -->
				<div class="text-center profile-meta">
					<span>[[user:joined]]</span>
					<strong class="timeago" title="{joindateISO}"></strong>

					<span>[[user:lastonline]]</span>
					<strong class="timeago" title="{lastonlineISO}"></strong><br />

					<!-- IF email -->
					<span>[[user:email]]</span>
					<strong><i class="fa fa-eye-slash {emailClass}" title="[[user:email_hidden]]"></i> {email}</strong>
					<!-- ENDIF email -->

					<!-- IF websiteName -->
					<span>[[user:website]]</span>
					<strong><a href="{websiteLink}" rel="nofollow noopener noreferrer">{websiteName}</a></strong>
					<!-- ENDIF websiteName -->

					<!-- IF location -->
					<span>[[user:location]]</span>
					<strong>{location}</strong>
					<!-- ENDIF location -->

					<!-- IF age -->
					<span>[[user:age]]</span>
					<strong>{age}</strong>
					<!-- ENDIF age -->
				</div>
			<!-- ENDIF false -->
		</div>
	</div>

	<hr />
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
		<div class="col-xs-12 account-block hidden">
			<div class="account-picture-block text-center">
				<span>
					<span class="account-username"> {username}</span>
				</span>

				<!-- IF !isSelf -->
				<!-- IF isFollowing -->
				<a component="account/unfollow" href="#" class="btn btn-warning btn-sm">[[user:unfollow]]</a>
				<!-- ELSE -->
				<a component="account/follow" href="#" class="btn btn-success btn-sm">[[user:follow]]</a>
				<!-- ENDIF isFollowing -->
				<!-- ENDIF !isSelf -->
			</div>
		</div>
	</div>

	<div class="row">
		<!-- IF false -->
			<div class="col-xs-6">
				<h1 class="section-title">[[pages:account/best, {username}]]</h1>

				<!-- IF !bestPosts.length -->
				<div class="alert alert-warning">[[user:has_no_posts]]</div>
				<!-- ENDIF !bestPosts.length -->

				<div component="posts" class="posts-list">
				{{{each bestPosts}}}
				<div component="post" class="posts-list-item<!-- IF ../deleted --> deleted<!-- ELSE --><!-- IF ../topic.deleted --> deleted<!-- ENDIF ../topic.deleted --><!-- ENDIF ../deleted -->" data-pid="{../pid}" data-uid="{../uid}">
    <div class="post-body">
        <a class="topic-title" href="{config.relative_path}/post/{../pid}">
            <!-- IF !../isMainPost -->RE: <!-- ENDIF !../isMainPost -->{../topic.title}
        </a>

        <div component="post/content" class="content">
            {../content}
        </div>

        <span class="topic-category"><a href="{config.relative_path}/category/{../category.slug}">[[global:posted_in, {../category.name}]]</a></span> &bull; <span class="timeago" title="{../timestampISO}"></span>
    </div>
</div>
				{{{end}}}
				</div>
			</div>
		<!-- ENDIF false -->
		<div class="col-xs-6">
			<h1 class="section-title">[[pages:account/latest-posts, {username}]]</h1>

			<!-- IF !latestPosts.length -->
			<div class="alert alert-warning">[[user:has_no_posts]]</div>
			<!-- ENDIF !latestPosts.length -->
			<div component="posts" class="posts-list">
			{{{each latestPosts}}}
			<div component="post" class="posts-list-item<!-- IF ../deleted --> deleted<!-- ELSE --><!-- IF ../topic.deleted --> deleted<!-- ENDIF ../topic.deleted --><!-- ENDIF ../deleted -->" data-pid="{../pid}" data-uid="{../uid}">
    <div class="post-body">
        <a class="topic-title" href="{config.relative_path}/post/{../pid}">
            <!-- IF !../isMainPost -->RE: <!-- ENDIF !../isMainPost -->{../topic.title}
        </a>

        <div component="post/content" class="content">
            {../content}
        </div>

        <span class="topic-category"><a href="{config.relative_path}/category/{../category.slug}">[[global:posted_in, {../category.name}]]</a></span> &bull; <span class="timeago" title="{../timestampISO}"></span>
    </div>
</div>
			{{{end}}}
			</div>
		</div>
	</div>

	<div id="user-action-alert" class="alert alert-success hide"></div>
</div>
