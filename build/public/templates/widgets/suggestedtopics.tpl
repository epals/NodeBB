<div class="category">
			<ul component="category" id="topics-container" data-nextstart="{nextStart}">
			<meta itemprop="itemListOrder" content="descending">
			<!-- BEGIN topics -->
			<li component="category/topic" class="category-item {function.generateTopicClass}" itemprop="itemListElement" data-tid="{topics.tid}" data-index="{topics.index}" data-cid="{topics.cid}" itemprop="itemListElement">
				<a id="{../index}" data-index="{../index}" component="topic/anchor"></a>
				<meta itemprop="name" content="{function.stripTags, title}">

				<div class="category-body">
					<div class="row">

						<div class="col-md-7 col-sm-8">

							<!-- IF showSelect -->
							<i class="fa fa-fw fa-square-o pull-left select pointer" component="topic/select"></i>
							<!-- ENDIF showSelect -->

							<div class="category-profile-pic">
								<a href="<!-- IF topics.user.userslug -->{config.relative_path}/user/{topics.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.user.userslug -->">
									<!-- IF topics.thumb -->
									<img src="{topics.thumb}" class="user-img" title="{topics.user.username}" />
									<!-- ELSE -->
									<!-- IF topics.user.picture -->
									<img component="user/picture" data-uid="{topics.user.uid}" src="{topics.user.picture}" class="user-img" title="{topics.user.username}" />
									<!-- ELSE -->
									<div class="user-icon" style="background-color: {topics.user.icon:bgColor};" title="{topics.user.username}">{topics.user.icon:text}</div>
									<!-- ENDIF topics.user.picture -->
									<!-- ENDIF topics.thumb -->
								</a>
							</div>
							<div class="category-text">
								<p><strong><i component="topic/pinned" class="fa fa-thumb-tack<!-- IF !topics.pinned --> hide<!-- ENDIF !topics.pinned -->"></i> <i component="topic/locked" class="fa fa-lock<!-- IF !topics.locked --> hide<!-- ENDIF !topics.locked -->"></i></strong>
									<!-- IF !topics.noAnchor -->
									<a component="topic/header" href="{config.relative_path}/topic/{topics.slug}" itemprop="url" class="topic-title">{topics.title}</a><br />
									<!-- ELSE -->
									<a component="topic/header" itemprop="url" class="topic-title">{topics.title}</a><br />
									<!-- ENDIF !topics.noAnchor -->

									<small>
									<a href="{config.relative_path}/category/{topics.category.slug}"><span class="fa-stack" style="{function.generateCategoryBackground, topics.category}"><i style="color:{topics.category.color};" class="fa {topics.category.icon} fa-stack-1x"></i></span> {topics.category.name}</a> &bull; <span class="timeago" title="{topics.timestampISO}"></span>
									<!-- IF !topics.unreplied -->
									<span class="hidden-md hidden-lg" component="topic/teaser">
									<br/>
									<a href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}"><span class="timeago" title="{topics.teaser.timestampISO}"></span></a>
									</span>
									<!-- ENDIF !topics.unreplied -->
									<br/>
									<!-- IF topics.tags.length -->
	{{{each tags}}}
		<a href="{config.relative_path}/tags/{topics.tags.valueEscaped}"><span class="tag-item" data-tag="{topics.tags.valueEscaped}" style="<!-- IF topics.tags.color -->color: {topics.tags.color};<!-- ENDIF topics.tags.color --><!-- IF topics.tags.bgColor -->background-color: {topics.tags.bgColor};<!-- ENDIF topics.tags.bgColor -->">{topics.tags.valueEscaped}</span><span class="tag-topic-count">{topics.tags.score}</span></a>
	{{{end}}}
<!-- ENDIF topics.tags.length -->
									</small>
								</p>
							</div>
						</div>

						<div class="col-xs-1 category-stat hidden-xs stats-votes">
							<strong class="human-readable-number" title="{topics.votes}">{topics.votes}</strong><br />
							<small>[[global:votes]]</small>
						</div>

						<div class="col-xs-1 category-stat hidden-xs stats-postcount">
							<strong class="human-readable-number" title="{topics.postcount}">{topics.postcount}</strong><br />
							<small>[[global:posts]]</small>
						</div>

						<div class="col-xs-1 category-stat hidden-xs stats-viewcount">
							<strong class="human-readable-number" title="{topics.viewcount}">{topics.viewcount}</strong><br />
							<small>[[global:views]]</small>
						</div>

						<div class="col-xs-2 category-stat replies hidden-sm hidden-xs" component="topic/teaser">
							<!-- IF topics.unreplied -->
							<p class="no-replies"><a href="{config.relative_path}/topic/{topics.slug}" itemprop="url">[[category:no_replies]]</a></p>
							<!-- ELSE -->
							<a href="<!-- IF topics.teaser.user.userslug -->{config.relative_path}/user/{topics.teaser.user.userslug}<!-- ELSE -->#<!-- ENDIF topics.teaser.user.userslug -->">
								<!-- IF topics.teaser.user.picture -->
								<img class="teaser-pic" src="{topics.teaser.user.picture}" title="{topics.teaser.user.username}"/>
								<!-- ELSE -->
								<div class="teaser-pic user-icon" style="background-color: {topics.teaser.user.icon:bgColor};" title="{topics.teaser.user.username}">{topics.teaser.user.icon:text}</div>
								<!-- ENDIF topics.teaser.user.picture -->
							</a>
							<a href="{config.relative_path}/topic/{topics.slug}/{topics.teaser.index}">
								<span class="timeago" title="{topics.teaser.timestampISO}"></span>
							</a>

							<!-- ENDIF topics.unreplied -->
						</div>
					</div>
				</div>

			</li>
			<!-- END topics -->
		</ul>

</div>
