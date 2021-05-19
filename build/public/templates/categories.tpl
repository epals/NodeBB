<div class="row categories" itemscope itemtype="http://www.schema.org/ItemList">
	<div class="<!-- IF widgets.sidebar.length -->col-lg-9 col-sm-12<!-- ELSE -->col-lg-12<!-- ENDIF widgets.sidebar.length -->">
		{{{ if pagination.pages.length }}}
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
		{{{ end }}}
		<div class="row <!-- IF !disableMasonry -->masonry<!-- ENDIF !disableMasonry -->">
			<!-- BEGIN categories -->
			<!-- IF ../isSection -->
<div component="categories/category" class="col-xs-12 category-item">
	<h1 class="section">{../name}</h1>
</div>
<!-- ELSE -->
<div component="categories/category" class="<!-- IF ../class -->{../class}<!-- ELSE -->col-md-3 col-sm-6 col-xs-12<!-- ENDIF ../class --> category-item" data-cid="{../cid}" data-numRecentReplies="{../numRecentReplies}">
	<meta itemprop="name" content="{../name}">

	<div class="category-icon">
		<!-- IF ../link -->
		<a style="color: {../color};" href="{../link}" itemprop="url">
		<!-- ELSE -->
		<a style="color: {../color};" href="{config.relative_path}/category/{../slug}" itemprop="url">
		<!-- ENDIF ../link -->
			<div
				id="category-{../cid}" class="category-header category-header-image-{../imageClass}"
				style="
					<!-- IF ../backgroundImage -->background-image: url({../backgroundImage});<!-- ENDIF ../backgroundImage -->
					<!-- IF ../bgColor -->background-color: {../bgColor};<!-- ENDIF ../bgColor -->
					color: {../color};
				"
			>
				<!-- IF !../link -->
				<span class="badge {../unread-class}"><i class="fa fa-book" data-toggle="tooltip" title="[[global:topics]]"></i> <span class="human-readable-number" title="{../totalTopicCount}">{../totalTopicCount}</span>&nbsp; <i class="fa fa-pencil" data-toggle="tooltip" title="[[global:posts]]"></i> <span class="human-readable-number" title="{../totalPostCount}">{../totalPostCount}</span></span>
				<!-- ENDIF !../link -->

				<!-- IF ../icon -->
				<div><i class="fa {../icon} fa-4x"></i></div>
				<!-- ENDIF ../icon -->
			</div>
		</a>

		<div class="category-box">
			<div class="category-info">
				<!-- IF ../link -->
				<a href="{../link}" itemprop="url">
				<!-- ELSE -->
				<a href="{config.relative_path}/category/{../slug}" itemprop="url">
				<!-- ENDIF ../link -->
					<h4><!-- IF ../icon --><i class="fa {../icon} visible-xs-inline"></i> <!-- ENDIF ../icon -->{../name}</h4>
				</a>
				<div class="description" itemprop="description">{../descriptionParsed}</div>
			</div>

			<!-- IF !../link -->
			<!-- BEGIN posts -->
			<div component="category/posts" class="post-preview clearfix">
				<strong><a href="{config.relative_path}/topic/{../topic.slug}">{../topic.title}</a></strong>
				<hr/>
				<a style="color: {../color};" href="<!-- IF ../user.userslug -->{config.relative_path}/user/{../user.userslug}<!-- ELSE -->#<!-- ENDIF ../user.userslug -->">
					<!-- IF ../user.picture -->
					<img src="{../user.picture}" title="{../user.username}" class="pull-left user-img" />
					<!-- ELSE -->
					<div class="pull-left user-img user-icon" title="{../user.username}" style="background-color: {../user.icon:bgColor}">{../user.icon:text}</div>
					<!-- ENDIF ../user.picture -->
				</a>
				<div class="post-preview-content">

					<div class="content">
					{../content}
					</div>
					<p class="fade-out"></p>
				</div>

				<span class="pull-right post-preview-footer">
					<span class="timeago" title="{../timestampISO}"></span> &bull;
					<a href="{config.relative_path}/topic/{../topic.slug}<!-- IF ../index -->/{../index}<!-- ENDIF ../index -->">[[global:read_more]]</a>
				</span>
			</div>
			<!-- END posts -->
			<!-- ENDIF !../link -->
		</div>
	</div>
</div>
<!-- ENDIF ../isSection -->
			<!-- END categories -->
		</div>
		
<div component="pagination" class="text-center pagination-container<!-- IF !pagination.pages.length --> hidden<!-- ENDIF !pagination.pages.length -->">
	<ul class="pagination">
		<li class="previous pull-left<!-- IF !pagination.prev.active --> disabled<!-- ENDIF !pagination.prev.active -->">
			<a href="?{pagination.prev.qs}" data-page="{pagination.prev.page}"><i class="fa fa-chevron-left"></i> </a>
		</li>

		{{{each pagination.pages}}}
			<!-- IF pagination.pages.separator -->
			<li component="pagination/select-page" class="page select-page">
				<a href="#"><i class="fa fa-ellipsis-h"></i></a>
			</li>
			<!-- ELSE -->
			<li class="page<!-- IF pagination.pages.active --> active<!-- ELSE --> hidden-xs<!-- ENDIF pagination.pages.active -->" >
				<a href="?{pagination.pages.qs}" data-page="{pagination.pages.page}">{pagination.pages.page}</a>
			</li>
			<!-- ENDIF pagination.pages.separator -->
		{{{end}}}

		<li class="next pull-right<!-- IF !pagination.next.active --> disabled<!-- ENDIF !pagination.next.active -->">
			<a href="?{pagination.next.qs}" data-page="{pagination.next.page}"> <i class="fa fa-chevron-right"></i></a>
		</li>
	</ul>
</div>

	</div>

	<div data-widget-area="sidebar" class="col-lg-3 col-sm-12 <!-- IF !widgets.sidebar.length -->hidden<!-- ENDIF !widgets.sidebar.length -->">
		<!-- BEGIN widgets.sidebar -->
		{{widgets.sidebar.html}}
		<!-- END widgets.sidebar -->
	</div>
</div>
