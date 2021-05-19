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
	<div class="topic col-lg-12 col-sm-12" data-has-widget-class="topic col-lg-9 col-sm-12" data-has-widget-target="sidebar">

		<h1 component="post/header" class="hidden-xs">
			<i component="topic/pinned" class="pull-left fa fa-thumb-tack <!-- IF !pinned -->hidden<!-- ENDIF !pinned -->" title="{{{ if !pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {pinExpiryISO}]]{{{ end }}}"></i>
			<i component="topic/locked" class="pull-left fa fa-lock <!-- IF !locked -->hidden<!-- ENDIF !locked -->" title="[[topic:locked]]"></i>
			<i class="pull-left fa fa-arrow-circle-right <!-- IF !oldCid -->hidden<!-- ENDIF !oldCid -->" title="[[topic:moved]]"></i>
			<!-- BEGIN icons -->@value<!-- END icons -->
			<span class="topic-title" component="topic/title">{title}</span>
		</h1>

		<!-- IF merger -->
		<div component="topic/merged/message" class="alert alert-warning clearfix">
			<span class="pull-left">[[topic:merged_message, {mergeIntoTid}, {merger.mergedIntoTitle}]]</span>
			<span class="pull-right">
				<a href="{config.relative_path}/user/{merger.userslug}">
					<strong>{merger.username}</strong>
				</a>
				<small class="timeago" title="{mergedTimestampISO}"></small>
			</span>
		</div>
		<!-- ENDIF merger -->

		<div component="topic/deleted/message" class="alert alert-warning<!-- IF !deleted --> hidden<!-- ENDIF !deleted --> clearfix">
    <span class="pull-left">[[topic:deleted_message]]</span>
    <span class="pull-right">
        <!-- IF deleter -->
        <a href="{config.relative_path}/user/{deleter.userslug}">
            <strong>{deleter.username}</strong>
        </a>
        <small class="timeago" title="{deletedTimestampISO}"></small>
        <!-- ENDIF deleter -->
    </span>
</div>

		<div component="topic" class="posts" data-tid="{tid}" data-cid="{cid}">
			<!-- BEGIN posts -->
				<div component="post" class="<!-- IF posts.deleted -->deleted<!-- ENDIF posts.deleted -->" data-index="{posts.index}" data-pid="{posts.pid}" data-uid="{posts.uid}" data-timestamp="{posts.timestamp}" data-username="{posts.user.username}" data-userslug="{posts.user.userslug}" itemscope itemtype="http://schema.org/Comment">
					<a component="post/anchor" data-index="{posts.index}"></a>

					<meta itemprop="datePublished" content="{posts.timestampISO}">
					<meta itemprop="dateModified" content="{posts.editedISO}">

					<div class="row post-header">
	<div class="col-xs-12">
		<div class="post-time pull-left">
			<span class="timeago" title="{posts.timestampISO}"></span>
		</div>
		<div class="post-editor pull-left">
			<i component="post/edit-indicator" class="fa fa-pencil-square pointer edit-icon <!-- IF !posts.editor.username -->hidden<!-- ENDIF !posts.editor.username -->"></i>
			<small data-editor="{posts.editor.userslug}" component="post/editor" class="hidden">[[global:last_edited_by, {posts.editor.username}]] <span class="timeago" title="{posts.editedISO}"></span></small>
		</div>
		<!-- IF !reputation:disabled -->
		<div class="votes pull-right">
			<a component="post/upvote" href="#" class="<!-- IF posts.upvoted -->upvoted<!-- ENDIF posts.upvoted -->">
				<i class="fa fa-chevron-up"></i>
			</a>

			<span component="post/vote-count" data-votes="{posts.votes}">{posts.votes}</span>

			<!-- IF !downvote:disabled -->
			<a component="post/downvote" href="#" class="<!-- IF posts.downvoted -->downvoted<!-- ENDIF posts.downvoted -->">
				<i class="fa fa-chevron-down"></i>
			</a>
			<!-- ENDIF !downvote:disabled -->
		</div>
		<!-- ENDIF !reputation:disabled -->
	</div>
</div>
<div class="row post">
	<div class="col-sm-2 col-md-2 col-lg-2 post-author">
		<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->">
			<!-- IF posts.user.picture -->
			<img component="user/picture" data-uid="{posts.user.uid}" class="user-avatar" src="{posts.user.picture}" alt="{posts.user.username}" itemprop="image" />
			<!-- ELSE -->
			<div component="user/picture" data-uid="{posts.user.uid}" class="user-icon" style="background-color: {posts.user.icon:bgColor};">{posts.user.icon:text}</div>
			<!-- ENDIF posts.user.picture -->
		</a>
		<div class="author">
			<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->">
			{posts.user.displayname}
		</a>
		<!-- BEGIN posts.user.selectedGroups -->
			<br>
			<!-- IF posts.user.selectedGroups.slug -->
			<a href="{config.relative_path}/groups/{posts.user.selectedGroups.slug}"><small class="label group-label" style="color:{posts.user.selectedGroups.textColor}; background-color: {posts.user.selectedGroups.labelColor};"><!-- IF posts.user.selectedGroups.icon --><i class="fa {posts.user.selectedGroups.icon}"></i> <!-- ENDIF posts.user.selectedGroups.icon -->{posts.user.selectedGroups.userTitle}</small></a>
			<!-- ENDIF posts.user.selectedGroups.slug -->
		<!-- END posts.user.selectedGroups -->
		</div>
	</div>
	<div class="col-sm-10 col-md-10 col-lg-10 post-content" component="post/content">
		{posts.content}
	</div>
	<!-- IF posts.user.signature -->
	<div class="col-sm-10 col-md-10 col-lg-10">
		<div class="post-signature" component="post/signature" data-uid="{posts.user.uid}">
			{posts.user.signature}
		</div>
	</div>
	<!-- ENDIF posts.user.signature -->
</div>
<div class="row post-footer">
	<div class="col-xs-12">
		<div class="pull-left">
			{posts.reactions}
		</div>
		<div class="pull-right">
			<div class="post-tools">
				<a component="post/reply" href="#" class="no-select <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:reply]]</a>
				<a component="post/quote" href="#" class="no-select <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:quote]]</a>
			</div>

			<div component="post/tools" class="dropdown moderator-tools bottom-sheet <!-- IF !posts.display_post_menu -->hidden<!-- ENDIF !posts.display_post_menu -->">
	<a href="#" data-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-v"></i></a>
	<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>
</div>

		</div>
	</div>
</div>

				</div>
				<!-- IF !posts.index -->
				<div class="post-bar-placeholder"></div>
				<!-- ENDIF !posts.index -->
			<!-- END posts -->
		</div>

		<!-- IF privileges.topics:reply -->
<div class="row quick-reply">
    <div class="col-sm-2 hidden-xs reply-user">
    	<a href="<!-- IF loggedInUser.userslug -->{config.relative_path}/user/{loggedInUser.userslug}<!-- ELSE -->#<!-- ENDIF loggedInUser.userslug -->">
			<!-- IF loggedInUser.picture -->
			<img component="user/picture" data-uid="{loggedInUser.uid}" class="user-avatar" src="{loggedInUser.picture}" align="left" itemprop="image" />
			<!-- ELSE -->
			<div component="user/picture" data-uid="{loggedInUser.uid}" class="user-icon" style="background-color: {loggedInUser.icon:bgColor};">{loggedInUser.icon:text}</div>
			<!-- ENDIF loggedInUser.picture -->
		</a>
		<div class="author">
			<a href="<!-- IF loggedInUser.userslug -->{config.relative_path}/user/{loggedInUser.userslug}<!-- ELSE -->#<!-- ENDIF loggedInUser.userslug -->">
				{loggedInUser.username}
			</a>
		</div>
	</div>
	<div class="col-xs-12 col-sm-10 quickreply-message">
		<textarea component="topic/quickreply/text" class="form-control" rows="5"></textarea>
	</div>
	<button component="topic/quickreply/button" class="btn btn-primary">Post quick reply</button>
</div>
<!-- ENDIF privileges.topics:reply -->

		<div class="post-bar">
			<div class="clearfix">
	<div class="tags pull-left hidden-xs">
		<!-- BEGIN tags -->
		<a href="{config.relative_path}/tags/{tags.value}">
		<span class="tag-item" data-tag="{tags.value}" style="<!-- IF tags.color -->color: {tags.color};<!-- ENDIF tags.color --><!-- IF tags.bgColor -->background-color: {tags.bgColor};<!-- ENDIF tags.bgColor -->">{tags.value}</span>
		<span class="tag-topic-count human-readable-number" title="{tags.score}">{tags.score}</span></a>
		<!-- END tags -->
	</div>

	<div component="topic/browsing-users" class="inline-block hidden-xs">
	{{{each browsingUsers}}}
	<div class="pull-left" data-uid="{browsingUsers.uid}">
		<a href="<!-- IF browsingUsers.userslug -->{config.relative_path}/user/{browsingUsers.userslug}<!-- ELSE -->#<!-- ENDIF browsingUsers.userslug -->">
			<!-- IF browsingUsers.picture -->
			<img class="avatar avatar-sm avatar-rounded" component="user/picture" src="{browsingUsers.picture}" align="left" itemprop="image" title="{browsingUsers.username}"/>
			<!-- ELSE -->
			<div class="avatar avatar-sm avatar-rounded" component="user/picture" title="{browsingUsers.username}" style="background-color: {browsingUsers.icon:bgColor};">{browsingUsers.icon:text}</div>
			<!-- ENDIF browsingUsers.picture -->
		</a>
	</div>
	{{{end}}}
</div>

	<div class="topic-main-buttons pull-right">
		<span class="loading-indicator btn pull-left hidden">
			<span class="hidden-xs">[[topic:loading_more_posts]]</span> <i class="fa fa-refresh fa-spin"></i>
		</span>

		<div class="stats text-muted">
	<i class="fa fa-fw fa-user" title="[[global:posters]]"></i>
	<span title="{postercount}" class="human-readable-number">{postercount}</span>
</div>
<div class="stats text-muted">
	<i class="fa fa-fw fa-pencil" title="[[global:posts]]"></i>
	<span component="topic/post-count" title="{postcount}" class="human-readable-number">{postcount}</span>
</div>
<div class="stats text-muted">
	<i class="fa fa-fw fa-eye" title="[[global:views]]"></i>
	<span class="human-readable-number" title="{viewcount}">{viewcount}</span>
</div>

		<div component="topic/reply/container" class="btn-group action-bar bottom-sheet <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">
	<a href="{config.relative_path}/compose?tid={tid}&title={title}" class="btn btn-sm btn-primary" component="topic/reply" data-ajaxify="false" role="button"><i class="fa fa-reply visible-xs-inline"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:reply]]</span></a>
	<button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown">
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu pull-right" role="menu">
		<li><a href="#" component="topic/reply-as-topic">[[topic:reply-as-topic]]</a></li>
	</ul>
</div>

<!-- IF loggedIn -->
<!-- IF !privileges.topics:reply -->
<!-- IF locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF locked -->
<!-- ENDIF !privileges.topics:reply -->

<!-- IF !locked -->
<a component="topic/reply/locked" class="btn btn-sm btn-primary hidden" disabled><i class="fa fa-lock"></i> [[topic:locked]]</a>
<!-- ENDIF !locked -->

<!-- ELSE -->

<!-- IF !privileges.topics:reply -->
<a component="topic/reply/guest" href="{config.relative_path}/login" class="btn btn-sm btn-primary">[[topic:guest-login-reply]]</a>
<!-- ENDIF !privileges.topics:reply -->
<!-- ENDIF loggedIn -->

		<!-- IF loggedIn -->
		<button component="topic/mark-unread" class="btn btn-sm btn-default">
			<i class="fa fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline"> [[topic:mark_unread]]</span>
		</button>
		<!-- ENDIF loggedIn -->

		<!-- IF config.loggedIn -->
<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">
	<button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button"
		{{{if isFollowing}}}title="[[topic:watching]]"{{{end}}}
		{{{if isNotFollowing}}}title="[[topic:not-watching]]"{{{end}}}
		{{{if isIgnoring}}}title="[[topic:ignoring]]"{{{end}}}
	>
		<span component="topic/following/menu" <!-- IF !isFollowing -->class="hidden"<!-- ENDIF !isFollowing -->><i class="fa fa-fw fa-bell-o"></i></span>

		<span component="topic/not-following/menu" <!-- IF !isNotFollowing -->class="hidden"<!-- ENDIF !isNotFollowing -->><i class="fa fa-fw fa-bell-slash-o"></i></span>

		<span component="topic/ignoring/menu" <!-- IF !isIgnoring -->class="hidden"<!-- ENDIF !isIgnoring -->><i class="fa fa-fw fa-eye-slash"></i></span>

	</button>
	<ul class="dropdown-menu dropdown-menu-right">
		<li><a href="#" component="topic/following"><i component="topic/following/check" class="fa fa-fw <!-- IF isFollowing -->fa-check<!-- ENDIF isFollowing -->"></i><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]<p class="help-text hidden-xs"><small>[[topic:watching.description]]</small></p></a></li>
		<li><a href="#" component="topic/not-following"><i component="topic/not-following/check" class="fa fa-fw <!-- IF isNotFollowing -->fa-check<!-- ENDIF isNotFollowing -->"></i><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]<p class="help-text hidden-xs"><small>[[topic:not-watching.description]]</small></p></a></li>
		<li><a href="#" component="topic/ignoring"><i component="topic/ignoring/check" class="fa fa-fw <!-- IF isIgnoring -->fa-check<!-- ENDIF isIgnoring -->"></i><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]<p class="help-text hidden-xs"><small>[[topic:ignoring.description]]</small></p></a></li>
	</ul>
</div>
<!-- ENDIF config.loggedIn -->

		<div title="[[topic:sort_by]]" class="btn-group bottom-sheet hidden-xs" component="thread/sort">
	<button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
	<span><i class="fa fa-fw fa-sort"></i></span></button>
	<ul class="dropdown-menu dropdown-menu-right">
		<li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>
		<li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>
		<li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>
	</ul>
</div>


		<!-- IF privileges.view_thread_tools -->
<div title="[[topic:thread_tools.title]]" class="btn-group thread-tools bottom-sheet">
	<button class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" type="button">
		<i class="fa fa-fw fa-gear"></i>
	</button>
	<ul class="dropdown-menu dropdown-menu-right"></ul>
</div>
<!-- ENDIF privileges.view_thread_tools -->
	</div>
</div>
		</div>

		<!-- IF config.usePagination -->
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
		<!-- ENDIF config.usePagination -->

		<div class="pagination-block text-center">
    <div class="progress-bar"></div>
    <div class="wrapper dropup">
        <i class="fa fa-2x fa-angle-double-up pointer fa-fw pagetop"></i>

        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <span class="pagination-text"></span>
        </a>

        <i class="fa fa-2x fa-angle-double-down pointer fa-fw pagebottom"></i>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <li>
                <div class="row">
                    <div class="col-xs-8 post-content"></div>
                    <div class="col-xs-4 text-right">
                        <div class="scroller-content">
                            <span class="pointer pagetop">[[topic:first-post]] <i class="fa fa-angle-double-up"></i></span>
                            <div class="scroller-container">
                                <div class="scroller-thumb">
                                    <span class="thumb-text"></span>
                                    <div class="scroller-thumb-icon"></div>
                                </div>
                            </div>
                            <span class="pointer pagebottom">[[topic:last-post]] <i class="fa fa-angle-double-down"></i></span>
                        </div>
                    </div>
                </div>
                <input type="text" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">
            </li>
        </ul>
    </div>
</div>
	</div>
</div>

<!-- IF !config.usePagination -->
<noscript>
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
</noscript>
<!-- ENDIF !config.usePagination -->
