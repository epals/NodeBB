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
	<div class="category col-lg-12 col-sm-12">
		{{{ if children.length }}}
<div class="subcategory">
	{{{ if hasMoreSubCategories }}}
	<div><div component="category-selector" class="btn-group bottom-sheet">
<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span component="category-selector-selected">{{{ if selectedCategory }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> {selectedCategory.name}{{{ else }}}
    {{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread_tools.select_category]]{{{ end }}}{{{ end }}}</span> <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden">
    <input type="text" class="form-control" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li component="category/no-matches" role="presentation" class="category hidden">
        <a role="menu-item">[[search:no-matches]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled {{{ end }}}" data-cid="{../cid}" data-name="{../name}" data-parent-cid="{../parentCid}">
        <a role="menu-item">{../level}<span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">{{{ if ./icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {../color};" class="fa fa-stack-1x fa-fw {../icon}"></i></span>{{{ end }}} {../name}</span></a>
    </li>
    {{{ end }}}
</ul>
</div></div>
	{{{ else }}}
	<p>[[category:subcategories]]</p>
	{{{ end }}}

	<div component="category/subcategory/container" class="categories" itemscope itemtype="http://www.schema.org/ItemList">
		{{{each children}}}
		<div class="row" component="categories/category" data-cid="{children.cid}" data-numRecentReplies="1">
		    <div class="col-md-8 col-xs-12">
		        <div class="category-info">
		            <div class="category-info-content">
		            	<div class="category-icon">
		                	<i class="fa fa-fw {children.icon}"></i>
		                </div>
		                <a class="category-title" href="{config.relative_path}/category/{children.slug}" title="{children.name}">{children.name}</a>

		                <div class="category-description">
		                    {children.descriptionParsed}
		                </div>
		            </div>
		        </div>
		    </div>
		    <div class="col-md-1 hidden-xs hidden-sm">
		        <div class="total-topic-count human-readable-number" title="{children.totalTopicCount}">
		            {children.totalTopicCount}
		        </div>
		    </div>
		    <div class="col-md-1 hidden-xs hidden-sm">
		        <div class="total-post-count human-readable-number" title="{children.totalPostCount}">
		            {children.totalPostCount}
		        </div>
		    </div>
		    <div class="col-md-2 hidden-xs hidden-sm">
		        <div class="teaser" component="topic/teaser">
		            <!-- BEGIN posts -->
		    	    <!-- IF @first -->

		    		<!-- IF ../user.picture -->
		    		<img class="user-avatar" title="{../user.username}" alt="{../user.username}" src="{../user.picture}" title="{../user.username}"/>
		    		<!-- ELSE -->
		    		<div class="user-icon" title="{../user.username}" style="background-color: {../user.icon:bgColor};">{../user.icon:text}</div>
		    		<!-- ENDIF ../user.picture -->

		    		<a href="{config.relative_path}/user/{../user.userslug}">{../user.username}</a>

		    		<a class="permalink" href="{config.relative_path}/topic/{../topic.slug}<!-- IF ../index -->/{../index}<!-- ENDIF ../index -->">
		    			<small class="timeago" title="{../timestampISO}"></small>
		    		</a>
		    		<!-- ENDIF @first -->
		    	    <!-- END posts -->

		    	    <!-- IF !../posts.length -->
					[[category:no_new_posts]]
			        <!-- ENDIF !../posts.length -->
			    </div>
		    </div>
		</div>
		{{{end}}}
	</div>
	{{{ if hasMoreSubCategories}}}
	<button class="btn btn-default" component="category/load-more-subcategories">[[category:x-more-categories, {subCategoriesLeft}]]</button>
	{{{ end }}}
</div>
{{{ end }}}

		<!-- IF children.length --><hr class="hidden-xs"/><!-- ENDIF children.length -->

		<div class="clearfix">
			<!-- IF privileges.topics:create -->
			<button component="category/post" id="new_topic" class="btn btn-primary">[[category:new_topic_button]]</button>
			<!-- ELSE -->
				<!-- IF !loggedIn -->
				<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
				<!-- ENDIF !loggedIn -->
			<!-- ENDIF privileges.topics:create -->

			<a href="{url}" class="inline-block">
				<div class="alert alert-warning hide" id="new-topics-alert"></div>
			</a>

			<!-- IF privileges.topics:read -->
			<span class="pull-right" component="category/controls">
				<!-- IF config.loggedIn -->
<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">

	<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
		<span component="category/watching/menu" <!-- IF !../isWatched -->class="hidden"<!-- ENDIF !../isWatched -->><i class="fa fa-fw fa-inbox"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>
		<span component="category/notwatching/menu" <!-- IF !../isNotWatched -->class="hidden"<!-- ENDIF !../isNotWatched -->><i class="fa fa-fw fa-clock-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:not-watching]]</span></span>
		<span component="category/ignoring/menu" <!-- IF !../isIgnored -->class="hidden"<!-- ENDIF !../isIgnored -->><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>
		<span class="caret"></span>
	</button>

	<ul class="dropdown-menu dropdown-menu-right">
		<li><a href="#" component="category/watching" data-state="watching"><i component="category/watching/check" class="fa fa-fw <!-- IF ../isWatched -->fa-check<!-- ENDIF ../isWatched -->"></i><i class="fa fa-fw fa-inbox"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>
		<li><a href="#" component="category/notwatching" data-state="notwatching"><i component="category/notwatching/check" class="fa fa-fw <!-- IF ../isNotWatched -->fa-check<!-- ENDIF ../isNotWatched -->"></i><i class="fa fa-fw fa-clock-o"></i> [[category:not-watching]]<p class="help-text"><small>[[category:not-watching.description]]</small></p></a></li>
		<li><a href="#" component="category/ignoring" data-state="ignoring"><i component="category/ignoring/check" class="fa fa-fw <!-- IF ../isIgnored -->fa-check<!-- ENDIF ../isIgnored -->"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>
	</ul>
</div>
<!-- ENDIF config.loggedIn -->
				<div class="btn-group bottom-sheet" component="thread/sort">
	<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
		<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:sort_by]]</span>
		<span class="visible-xs-inline"><i class="fa fa-fw fa-sort"></i></span>
		<span class="caret"></span>
	</button>

	<ul class="dropdown-menu pull-right">
		<li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>
		<li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>
		<li><a href="#" class="most_posts" data-sort="most_posts"><i class="fa fa-fw"></i> [[topic:most_posts]]</a></li>
	</ul>
</div>

				<!-- IF privileges.editable -->
<div class="btn-group thread-tools bottom-sheet">
	<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
		<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>
		<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu pull-right">
		<li>
			<a component="topic/mark-unread-for-all" href="#">
				<i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]
			</a>
		</li>
		<li>
			<a component="topic/pin" href="#">
				<i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]
			</a>
		</li>
		<li>
			<a component="topic/unpin" href="#" class="hidden">
				<i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]
			</a>
		</li>

		<li>
			<a component="topic/lock" href="#">
				<i class="fa fa-fw fa-lock"></i> [[topic:thread_tools.lock]]
			</a>
		</li>
		<li>
			<a component="topic/unlock" href="#" class="hidden">
				<i class="fa fa-fw fa-unlock"></i> [[topic:thread_tools.unlock]]
			</a>
		</li>

		<li class="divider"></li>

		<li>
			<a component="topic/move" href="#">
				<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move]]
			</a>
		</li>
		<li>
			<a component="topic/move-all" href="#">
				<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move_all]]
			</a>
		</li>
		<li>
			<a component="topic/merge" href="#">
				<i class="fa fa-fw fa-code-fork"></i> [[topic:thread_tools.merge]]
			</a>
		</li>

		<li class="divider"></li>

		<li>
			<a component="topic/delete" href="#">
				<i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]
			</a>
		</li>
		<li>
			<a component="topic/restore" href="#" class="hidden">
				<i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]
			</a>
		</li>
		<li>
			<a component="topic/purge" href="#" class="hidden">
				<i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]
			</a>
		</li>

		<!-- BEGIN thread_tools -->
		<li>
			<a href="#" class="{thread_tools.class}"><i class="fa fa-fw {thread_tools.icon}"></i> {thread_tools.title}</a>
		</li>
		<!-- END thread_tools -->
	</ul>
</div>
<!-- ENDIF privileges.editable -->
			</span>
			<!-- ENDIF privileges.topics:read -->
		</div>

		<!-- IF privileges.topics:read -->
		<hr class="hidden-xs" />

		<h4 class="hidden-xs">{name}</h4>

		<!-- IF !topics.length -->
		<div class="alert alert-warning" id="category-no-topics">
			[[category:no_topics]]
		</div>
		<!-- ENDIF !topics.length -->

		<div component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="{nextStart}" data-set="{set}">
	<meta itemprop="itemListOrder" content="descending">
	<!-- IF topics.length -->
	<div class="row topics-header hidden-xs hidden-sm">
		<div class="col-md-8 col-xs-12"><div class="header-title">[[global:topics]]</div></div>
		<div class="col-md-1"><div class="header-title">[[global:posts]]</div></div>
		<div class="col-md-1"><div class="header-title">[[global:views]]</div></div>
		<div class="col-md-2"><div class="header-title">Last Reply</div></div>
	</div>
	<!-- ENDIF topics.length -->
	<!-- BEGIN topics -->
	<div component="category/topic" class="row category-item {function.generateTopicClass}" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement">
		<a id="{../index}" data-index="{../index}" component="topic/anchor"></a>
		<meta itemprop="name" content="{function.stripTags, title}">
		<div class="col-md-8 col-xs-12">
			<!-- IF showSelect -->
			<div class="checkbox pull-left" component="topic/select">
				<label>
					<div class="select"></div>
					<i class="input-helper"></i>
				</label>
			</div>
			<!-- ENDIF showSelect -->
			<div class="topic-author">
				<a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->" class="pull-left">
					<!-- IF topics.thumb -->
					<img src="{topics.thumb}" class="user-img" alt="{topics.user.username}" />
					<!-- ELSE -->
					<!-- IF topics.user.picture -->
					<img class="user-avatar" component="user/picture" data-uid="{topics.user.uid}" src="{topics.user.picture}" alt="{topics.user.username}" />
					<!-- ELSE -->
					<div class="user-icon" style="background-color: {topics.user.icon:bgColor};">{topics.user.icon:text}</div>
					<!-- ENDIF topics.user.picture -->
					<!-- ENDIF topics.thumb -->
				</a>
			</div>
			<div component="topic/header" class="title">
				<i component="topic/pinned" class="fa fa-thumb-tack <!-- IF !topics.pinned -->hide<!-- ENDIF !topics.pinned -->" title="{{{ if !../pinExpiry }}}[[topic:pinned]]{{{ else }}}[[topic:pinned-with-expiry, {../pinExpiryISO}]]{{{ end }}}"></i>
				<i component="topic/locked" class="fa fa-lock <!-- IF !topics.locked -->hide<!-- ENDIF !topics.locked -->" title="[[topic:locked]]"></i>
				<i component="topic/moved" class="fa fa-arrow-circle-right <!-- IF !topics.oldCid -->hide<!-- ENDIF !topics.oldCid -->" title="[[topic:moved]]"></i>
				<!-- IF !topics.noAnchor -->
				<a href="{config.relative_path}/topic/{topics.slug}<!-- IF topics.bookmark -->/{topics.bookmark}<!-- ENDIF topics.bookmark -->" itemprop="url">{topics.title}</a>
				<!-- ELSE -->
				<span>{topics.title}</span>
				<!-- ENDIF !topics.noAnchor -->

				<small>
					<a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->">{topics.user.displayname}</a> &bull; <span class="timeago" title="{topics.timestampISO}"></span>
				</small>
			</div>
		</div>
		<div class="col-md-1 hidden-xs hidden-sm">
			<div class="total-post-count human-readable-number" title="{topics.postcount}">
				{topics.postcount}
			</div>
		</div>
		<div class="col-md-1 hidden-xs hidden-sm">
			<div class="total-view-count human-readable-number" title="{topics.viewcount}">
				{topics.viewcount}
			</div>
		</div>
		<div class="col-md-2 hidden-xs hidden-sm">
			<div class="teaser" component="topic/teaser">
				<!-- IF topics.unreplied -->
				<p>
					[[category:no_replies]]
				</p>
				<!-- ELSE -->
				<!-- IF topics.teaser.pid -->
				<!-- IF topics.teaser.user.picture -->
				<img title="{topics.teaser.user.username}" class="user-avatar" src="{topics.teaser.user.picture}" alt="{topics.teaser.user.username}" />
				<!-- ELSE -->
				<div title="{topics.teaser.user.username}" class="user-icon" style="background-color: {topics.teaser.user.icon:bgColor};">{topics.teaser.user.icon:text}</div>
				<!-- ENDIF topics.teaser.user.picture -->

				<a href="{config.relative_path}/user/{topics.teaser.user.userslug}">{topics.teaser.user.displayname}</a>
				<a class="permalink" href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}">
					<span class="timeago" title="{topics.teaser.timestampISO}"></span>
				</a>
				<!-- ENDIF topics.teaser.pid -->
				<!-- ENDIF topics.unreplied -->
			</div>
		</div>
	</div>
	<!-- END topics -->
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
		<!-- ENDIF privileges.topics:read -->
	</div>
</div>

<div id="move_thread_modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="move_topic_label" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h3 id="move_topic_label">[[topic:move_topic]]</h3>
			</div>
			<div class="modal-body">
				<div component="category-selector" class="btn-group bottom-sheet">
<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span component="category-selector-selected">{{{ if selectedCategory }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> {selectedCategory.name}{{{ else }}}
    {{{ if selectCategoryLabel }}}{selectCategoryLabel}{{{ else }}}[[topic:thread_tools.select_category]]{{{ end }}}{{{ end }}}</span> <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden">
    <input type="text" class="form-control" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    <li component="category/no-matches" role="presentation" class="category hidden">
        <a role="menu-item">[[search:no-matches]]</a>
    </li>
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled {{{ end }}}" data-cid="{../cid}" data-name="{../name}" data-parent-cid="{../parentCid}">
        <a role="menu-item">{../level}<span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">{{{ if ./icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i style="color: {../color};" class="fa fa-stack-1x fa-fw {../icon}"></i></span>{{{ end }}} {../name}</span></a>
    </li>
    {{{ end }}}
</ul>
</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" id="move_thread_cancel">[[global:buttons.close]]</button>
				<button type="button" class="btn btn-primary" id="move_thread_commit" disabled>[[topic:confirm_move]]</button>
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
