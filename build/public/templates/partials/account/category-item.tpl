<li component="categories/category" data-cid="{../cid}" data-parent-cid="{../parentCid}" class="row clearfix">
	<meta itemprop="name" content="{../name}">

	<div class="content col-xs-12 col-md-10 col-sm-12 depth-{../depth}">
		<div class="icon pull-left" style="{function.generateCategoryBackground}">
			<i class="fa fa-fw {../icon}"></i>
		</div>

		<h2 class="title">
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
		</h2>
		<div>
			<!-- IF ../descriptionParsed -->
			<div class="description">
				{../descriptionParsed}
			</div>
			<!-- ENDIF ../descriptionParsed -->
		</div>
	</div>

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
</li>