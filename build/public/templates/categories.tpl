<div class="categories" itemscope itemtype="http://www.schema.org/ItemList">
    <div class="row categories-header hidden-xs hidden-sm">
        <div class="col-md-8 col-xs-12"><div class="header-title">[[category:category]]</div></div>
        <div class="col-md-1"><div class="header-title">[[global:topics]]</div></div>
        <div class="col-md-1"><div class="header-title">[[global:posts]]</div></div>
        <div class="col-md-2"><div class="header-title">Last Post</div></div>
    </div>
    <!-- BEGIN categories -->
    <div class="row" component="categories/category" data-cid="{categories.cid}" data-numRecentReplies="1">
        <div class="col-md-8 col-xs-12">
            <div class="category-info">
                <div class="category-info-content">
                    <div class="category-icon">
                        <i class="fa fa-fw {categories.icon}"></i>
                    </div>
                    <!-- IF ../isSection -->
<span class="category-title">{../name}</span>
<!-- ELSE -->
<!-- IF ../link -->
<a class="category-title" href="{../link}" itemprop="url" title="{../name}">
<!-- ELSE -->
<a class="category-title" href="{config.relative_path}/category/{../slug}" itemprop="url" title="{../name}">
<!-- ENDIF ../link -->
{../name}
</a>
<!-- ENDIF ../isSection -->

                    <div class="category-description">
                        {categories.descriptionParsed}
                    </div>
                </div>

                <!-- IF !config.hideSubCategories -->
                <div class="subcategories">
                    <!-- BEGIN categories.children -->
                    <div class="subcategory">
                        <i class="fa fa-fw {categories.children.icon} subcategory-icon"></i>
                        <!-- IF categories.children.link -->
                        <a class="subcategory-title" href="{categories.children.link}" title="{categories.children.name}">{categories.children.name}</a>
                        <!-- ELSE -->
                        <a class="subcategory-title" href="{config.relative_path}/category/{categories.children.slug}" title="{categories.children.name}">{categories.children.name}</a>
                        <!-- ENDIF categories.children.link -->
                    </div>
                    <!-- END categories.children -->
                </div>
                <!-- ENDIF !config.hideSubCategories -->
            </div>
        </div>
        <div class="col-md-1 hidden-xs hidden-sm">
            <div class="total-topic-count human-readable-number" title="{categories.totalTopicCount}">
                {categories.totalTopicCount}
            </div>
        </div>
        <div class="col-md-1 hidden-xs hidden-sm">
            <div class="total-post-count human-readable-number" title="{categories.totalPostCount}">
                {categories.totalPostCount}
            </div>
        </div>
        <div class="col-md-2 hidden-xs hidden-sm">
            <div class="teaser" component="topic/teaser">
                <!-- BEGIN posts -->
        	    <!-- IF @first -->
                <div component="category/posts">
                    <a href="{config.relative_path}/user/{../user.userslug}">
                		<!-- IF ../user.picture -->
                		<img class="user-avatar" title="{../user.username}" alt="{../user.username}" src="{../user.picture}" />
                		<!-- ELSE -->
                		<div class="user-icon" title="{../user.username}" style="background-color: {../user.icon:bgColor};">{../user.icon:text}</div>
                		<!-- ENDIF ../user.picture -->
            		</a>

            		<a class="permalink" href="{config.relative_path}/topic/{../topic.slug}<!-- IF ../index -->/{../index}<!-- ENDIF ../index -->">
            		    {../user.displayname}
            			<small class="timeago" title="{../timestampISO}"></small>
            		</a>
        		</div>
        		<!-- ENDIF @first -->
        	    <!-- END posts -->

        	    <!-- IF !../posts.length -->
    			[[category:no_new_posts]]
    	        <!-- ENDIF !../posts.length -->
            </div>
        </div>
    </div>
    <!-- END categories -->
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