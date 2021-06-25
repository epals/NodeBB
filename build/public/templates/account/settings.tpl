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
		<div class="col-xs-12">
			<!-- IF false -->
				<!-- IF allowUserHomePage -->
				<h4>[[user:select-homepage]]</h4>
				<div class="user-setting">
					<div class="form-group">
						<label for="dailyDigestFreq">[[user:homepage]]</label>
						<select class="form-control" data-property="homePageRoute">
							<option value="none">None</option>
							<!-- BEGIN homePageRoutes -->
							<option value="{homePageRoutes.route}" <!-- IF homePageRoutes.selected -->selected="1"<!-- ENDIF homePageRoutes.selected -->>{homePageRoutes.name}</option>
							<!-- END homePageRoutes -->
						</select>
						<p class="help-block">[[user:homepage_description]]</p>
					</div>
					<div id="homePageCustom" class="form-group" style="display: none;">
						<label for="homePageCustom">[[user:custom_route]]</label>
						<input type="text" class="form-control" data-property="homePageCustom" id="homePageCustom" value="{settings.homePageRoute}"/>
						<p class="help-block">[[user:custom_route_help]]</p>
					</div>
				</div>
				<!-- ENDIF allowUserHomePage -->
			<!-- ENDIF false  -->

			<h4>[[global:privacy]]</h4>
			<div class="user-setting">
				<!-- IF !hideEmail -->
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="showemail" <!-- IF settings.showemail -->checked <!-- ENDIF settings.showemail -->/><i class="input-helper"></i> <strong>[[user:show_email]]</strong>
					</label>
				</div>
				<!-- ENDIF !hideEmail -->
				<!-- IF !hideFullname -->
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="showfullname" <!-- IF settings.showfullname -->checked<!-- ENDIF settings.showfullname -->/><i class="input-helper"></i> <strong>[[user:show_fullname]]</strong>
					</label>
				</div>
				<!-- ENDIF !hideFullname -->

				<!-- IF !config.disableChat -->
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="restrictChat" <!-- IF settings.restrictChat -->checked<!-- ENDIF settings.restrictChat -->/><i class="input-helper"></i> <strong>[[user:restrict_chats]]</strong>
					</label>
				</div>
				<!-- ENDIF !config.disableChat -->
			</div>

			<!-- IF false -->
			<h4>[[user:browsing]]</h4>
			<div class="user-setting">
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="openOutgoingLinksInNewTab" <!-- IF settings.openOutgoingLinksInNewTab -->checked<!-- ENDIF settings.openOutgoingLinksInNewTab -->/><i class="input-helper"></i> <strong>[[user:open_links_in_new_tab]]</strong>
					</label>
				</div>
				<!-- IF inTopicSearchAvailable -->
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="topicSearchEnabled" <!-- IF settings.topicSearchEnabled -->checked<!-- ENDIF settings.topicSearchEnabled -->/><i class="input-helper"></i> <strong>[[user:enable_topic_searching]]</strong>
					</label>
				</div>
				<p class="help-block">[[user:topic_search_help]]</p>
				<!-- ENDIF inTopicSearchAvailable -->
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="updateUrlWithPostIndex" {{{ if settings.updateUrlWithPostIndex }}}checked{{{ end }}}/> <strong>[[user:update_url_with_post_index]]</strong>
					</label>
				</div>
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="scrollToMyPost" <!-- IF settings.scrollToMyPost -->checked<!-- ENDIF settings.scrollToMyPost -->/><i class="input-helper"></i> <strong>[[user:scroll_to_my_post]]</strong>
					</label>
				</div>
			</div>
			<!-- ENDIF false -->



			<!-- IF !disableEmailSubscriptions -->
			<h4>[[global:email]]</h4>
			<div class="user-setting">
				<div class="form-group">
					<label for="dailyDigestFreq">[[user:digest_label]]</label>
					<select class="form-control" id="dailyDigestFreq" data-property="dailyDigestFreq" autocomplete="off">
						<!-- BEGIN dailyDigestFreqOptions -->
						<option value="{dailyDigestFreqOptions.value}" <!-- IF dailyDigestFreqOptions.selected -->selected="1"<!-- ENDIF dailyDigestFreqOptions.selected -->>{dailyDigestFreqOptions.name}</option>
						<!-- END dailyDigestFreqOptions -->
					</select>
					<p class="help-block">[[user:digest_description]]</p>
				</div>
			</div>
			<!-- ENDIF !disableEmailSubscriptions -->

			<!-- IF false -->
			<h4>[[topic:watch]]</h4>
			<div class="user-setting">
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="followTopicsOnCreate" <!-- IF settings.followTopicsOnCreate -->checked <!-- ENDIF settings.followTopicsOnCreate -->/><i class="input-helper"></i> <strong>[[user:follow_topics_you_create]]</strong>
					</label>
				</div>
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="followTopicsOnReply" <!-- IF settings.followTopicsOnReply -->checked<!-- ENDIF settings.followTopicsOnReply -->/><i class="input-helper"></i> <strong>[[user:follow_topics_you_reply_to]]</strong>
					</label>
				</div>
				<div class="form-group">
					<label>[[user:default-category-watch-state]]</label>
					<select class="form-control" data-property="categoryWatchState">
						<option value="watching" <!-- IF categoryWatchState.watching -->selected<!-- ENDIF categoryWatchState.watching -->>[[category:watching]]</option>
						<option value="notwatching" <!-- IF categoryWatchState.notwatching -->selected<!-- ENDIF categoryWatchState.notwatching -->>[[category:not-watching]]</option>
						<option value="ignoring" <!-- IF categoryWatchState.ignoring -->selected<!-- ENDIF categoryWatchState.ignoring -->>[[category:ignoring]]</option>
					</select>
				</div>
			</div>
			<!-- ENDIF false -->

			<h4>[[global:pagination]]</h4>
			<div class="user-setting">
				<div class="checkbox">
					<label>
						<input type="checkbox" data-property="usePagination" <!-- IF settings.usePagination -->checked<!-- ENDIF settings.usePagination -->><i class="input-helper"></i> <strong>[[user:paginate_description]]</strong>
					</label>
				</div>

				<div class="form-group">
					<label for="topicsPerPage">[[user:topics_per_page]] ([[user:max_items_per_page, {maxTopicsPerPage}]])</label>
					<input type="text" class="form-control" data-property="topicsPerPage" value="{settings.topicsPerPage}">
				</div>

				<div class="form-group">
					<label for="postsPerPage">[[user:posts_per_page]] ([[user:max_items_per_page, {maxPostsPerPage}]])</label>
					<input type="text" class="form-control" data-property="postsPerPage" value="{settings.postsPerPage}">
				</div>
			</div>

			<h4>[[global:language]]</h4>
			<div class="user-setting">
				<div class="row">
					<div class="form-group col-lg-12">
						<select data-property="userLang" class="form-control">
							<!-- BEGIN languages -->
							<option value="{languages.code}" <!-- IF languages.selected -->selected<!-- ENDIF languages.selected -->>{languages.name} ({languages.code})</option>
							<!-- END languages -->
						</select>
					</div>
				</div>
				<!-- IF isAdmin -->
				<!-- IF isSelf -->
				<label>[[user:acp_language]]</label>
				<div class="row">
					<div class="form-group col-lg-12">
						<select data-property="acpLang" class="form-control">
							<!-- BEGIN acpLanguages -->
							<option value="{acpLanguages.code}" <!-- IF acpLanguages.selected -->selected<!-- ENDIF acpLanguages.selected -->>{acpLanguages.name} ({acpLanguages.code})</option>
							<!-- END acpLanguages -->
						</select>
					</div>
				</div>
				<!-- ENDIF isSelf -->
				<!-- ENDIF isAdmin -->
			</div>

			<!-- IF false -->
			<h4>[[user:notifications]]</h4>
			<div class="user-setting">
				<!-- BEGIN notificationSettings -->
				<label>{notificationSettings.label}</label>
				<div class="row">
					<div class="form-group col-xs-12">
						<select class="form-control" data-property="{notificationSettings.name}">
							<option value="none" <!-- IF notificationSettings.none -->selected<!-- ENDIF notificationSettings.none -->>[[notifications:none]]</option>
							<option value="notification" <!-- IF notificationSettings.notification -->selected<!-- ENDIF notificationSettings.notification -->>[[notifications:notification_only]]</option>
							<option value="email" <!-- IF notificationSettings.email -->selected<!-- ENDIF notificationSettings.email -->>[[notifications:email_only]]</option>
							<option value="notificationemail" <!-- IF notificationSettings.notificationemail -->selected<!-- ENDIF notificationSettings.notificationemail -->>[[notifications:notification_and_email]]</option>
						</select>
					</div>
				</div>
				<!-- END notificationSettings -->

				<label for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>
				<div class="row">
					<div class="form-group col-xs-12">
						<select class="form-control" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">
							<!-- BEGIN upvoteNotifFreq -->
							<option value="{upvoteNotifFreq.name}" <!-- IF upvoteNotifFreq.selected -->selected<!-- ENDIF upvoteNotifFreq.selected -->>
								[[user:upvote-notif-freq.{upvoteNotifFreq.name}]]
							</option>
							<!-- END upvoteNotifFreq -->
						</select>
					</div>
				</div>
			</div>
			<!-- ENDIF false -->

			<!-- BEGIN customSettings -->
			<h4>{customSettings.title}</h4>
			<div class="user-setting">
				{customSettings.content}
			</div>
			<!-- END customSettings -->

		</div>
	</div>
	<div class="form-actions">
		<a id="submitBtn" href="#" class="btn btn-primary">[[global:save_changes]]</a>
	</div>
</div>