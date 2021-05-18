<div class="notifications">

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
		<div class="btn-group dropdown pull-right">
			<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
				<!-- IF selectedFilter -->{selectedFilter.name}<!-- ENDIF selectedFilter --> <span class="caret"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<!-- BEGIN filters -->
				<!-- IF filters.separator -->
				<li role="separator" class="divider"></li>
				<!-- ELSE -->
				<li role="presentation" class="category">
					<a role="menu-item" href="{config.relative_path}/notifications?filter={filters.filter}"><i class="fa fa-fw <!-- IF filters.selected -->fa-check<!-- ENDIF filters.selected -->"></i> {filters.name}</a>
				</li>
				<!-- ENDIF filters.separator -->
				<!-- END filters -->
			</ul>
		</div>
		<div class="btn-group pull-right">
			<button class="btn btn-default" type="button" component="notifications/mark_all">
				[[notifications:mark_all_read]]
			</button>
		</div>
	</div>

	<div class="alert alert-info <!-- IF notifications.length -->hidden<!-- ENDIF notifications.length -->">
		[[notifications:no_notifs]]
	</div>

	<div class="notifications-list" data-nextstart="{nextStart}">
	<!-- BEGIN notifications -->
		<div data-nid="{notifications.nid}" class="{notifications.readClass}" component="notifications/item">
			<div class="notification-image">
				<!-- IF notifications.image -->
				<!-- IF notifications.from -->
				<a class="pull-left" href="{config.relative_path}/user/{notifications.user.userslug}"><img class="user-avatar" src="{notifications.image}" /></a>
				<!-- ENDIF notifications.from -->
				<!-- ELSE -->
				<a class="pull-left" href="{config.relative_path}/user/{notifications.user.userslug}"><div class="user-icon" style="background-color: {notifications.user.icon:bgColor};">{notifications.user.icon:text}</div></a>
				<!-- ENDIF notifications.image -->
			</div>
			<div class="notification-msg">
				<a component="notifications/item/link" href="{notifications.path}">{notifications.bodyShort}</a>

				<span class="timeago" title="{notifications.datetimeISO}"></span>
			</div>
		</div>
	<!-- END notifications -->
	</div>
</div>