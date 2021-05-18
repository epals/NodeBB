<div class="popular">
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


	<div class="btn-toolbar">
		<div class="pull-left">
			<!-- IF loggedIn -->
			<button component="category/post" id="new_topic" class="btn btn-primary">[[category:new_topic_button]]</button>
			<!-- ELSE -->
			<a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
			<!-- ENDIF loggedIn -->
		</div>


		<div component="category/dropdown" class="btn-group pull-right category-dropdown-container bottom-sheet">
   <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    {{{ if selectedCategory }}}<span class="fa-stack" style="{function.generateCategoryBackground, selectedCategory}"><i class="fa fa-fw fa-stack-1x {selectedCategory.icon}" style="color: {selectedCategory.color};"></i></span> <span class="visible-sm-inline visible-md-inline visible-lg-inline">{selectedCategory.name}</span>{{{ else }}}
    <span class="visible-sm-inline visible-md-inline visible-lg-inline">[[unread:all_categories]]</span><span class="visible-xs-inline"><i class="fa fa-fw fa-list"></i></span>{{{ end }}} <span class="caret"></span>
</button>
<div component="category-selector-search" class="hidden">
    <input type="text" class="form-control" autocomplete="off">
</div>
<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">
    {{{ if allCategoriesUrl }}}
    <li role="presentation" class="category" data-all="all">
        <a role="menu-item" href="{config.relative_path}/{allCategoriesUrl}"><i component="category/select/icon" class="fa fa-fw fa-check {{{if selectedCategory}}}invisible{{{end}}}"></i> [[unread:all_categories]]</a>
    </li>
    {{{ end }}}
    {{{each categoryItems}}}
    <li role="presentation" class="category {{{ if ../disabledClass }}}disabled{{{ end }}}" data-cid="{../cid}" data-parent-cid="{../parentCid}" data-name="{../name}">
        <a role="menu-item" href="#">{../level}<i component="category/select/icon" class="fa fa-fw fa-check {{{ if !../selected }}}invisible{{{ end }}}"></i><span component="category-markup" style="{{{ if ../match }}}font-weight: bold;{{{end}}}">{{{ if ../icon }}}<span class="fa-stack" style="{function.generateCategoryBackground}"><i class="fa fa-fw fa-stack-1x {../icon}" style="color: {../color};"></i></span>{{{ end }}} {../name}</span></a>
    </li>
    {{{end}}}
</ul>
</div>

		<div class="btn-group pull-right <!-- IF !filters.length -->hidden<!-- ENDIF !filters.length -->">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			{selectedFilter.name} <span class="caret"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<!-- BEGIN filters -->
				<li role="presentation" class="category">
					<a role="menu-item" href="{config.relative_path}/{filters.url}"><i class="fa fa-fw <!-- IF filters.selected -->fa-check<!-- ENDIF filters.selected -->"></i>{filters.name}</a>
				</li>
				<!-- END filters -->
			</ul>
		</div>

		<div class="btn-group pull-right <!-- IF !terms.length -->hidden<!-- ENDIF !terms.length -->">
			<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
			{selectedTerm.name} <span class="caret"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<!-- BEGIN terms -->
				<li role="presentation" class="category">
					<a role="menu-item" href="{config.relative_path}/{terms.url}"><i class="fa fa-fw <!-- IF terms.selected -->fa-check<!-- ENDIF terms.selected -->"></i>{terms.name}</a>
				</li>
				<!-- END terms -->
			</ul>
		</div>
	</div>

	<div class="category">
		<!-- IF !topics.length -->
		<div class="alert alert-warning" id="category-no-topics">[[recent:no_popular_topics]]</div>
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
	</div>
</div>