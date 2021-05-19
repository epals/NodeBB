<div class="chats-full">
	<div component="chat/nav-wrapper" data-loaded="<!-- IF roomId -->1<!-- ELSE -->0<!-- END -->">
		<div class="chat-search dropdown">
			<input class="form-control" type="text" component="chat/search" placeholder="[[users:enter_username]]" data-toggle="dropdown" />
			<ul component="chat/search/list" class="dropdown-menu"></ul>
		</div>
		<ul component="chat/recent" class="chats-list" data-nextstart="{nextStart}">
			{{{each rooms}}}
			<li component="chat/recent/room" data-roomid="{rooms.roomId}" class="<!-- IF rooms.unread -->unread<!-- ENDIF rooms.unread -->">
	<strong class="room-name">
		<!-- IF !rooms.lastUser.uid -->
		<span>[[modules:chat.no-users-in-room]]</span>
		<!-- ELSE -->
		<span component="chat/title"><!-- IF rooms.roomName -->{rooms.roomName}<!-- ELSE -->{rooms.usernames}<!-- ENDIF rooms.roomName --></span>
		<!-- ENDIF !rooms.lastUser.uid -->
	</strong>
	<div class="avatar-placeholder"></div>
	{{{each rooms.users}}}
	<!-- IF @first -->
	<div class="main-avatar">
		<a href="{config.relative_path}/user/{rooms.users.userslug}">{buildAvatar(rooms.users, "sm", true)}</a>
	</div>
	<!-- ENDIF @first -->
	{{{end}}}

	<ul class="members">
		{{{each rooms.users}}}
		<li>
			<a href="{config.relative_path}/user/{rooms.users.userslug}">{buildAvatar(rooms.users, "sm", true)}</a>
		</li>
		{{{end}}}
	</ul>
</li>
			{{{end}}}
		</ul>
	</div>
	<div component="chat/main-wrapper">
		<!-- IF roomId -->
<div component="chat/messages" class="expanded-chat" data-roomid="{roomId}">
	<div component="chat/header">
		<button type="button" class="close" data-action="pop-out"><span aria-hidden="true"><i class="fa fa-compress"></i></span><span class="sr-only">[[modules:chat.pop-out]]</span></button>
		<button type="button" class="close" aria-label="Close" data-action="close"><span aria-hidden="true">&times;</span></button>

		<div class="dropdown pull-right">
			<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>
			<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">
				<!-- IF users.length -->
				<li class="dropdown-header">[[modules:chat.in-room]]</li>
				{{{each users}}}
				<li>
					<a href="{config.relative_path}/uid/{../uid}">{buildAvatar(users, "sm", true)} {../username}</a>
				</li>
				{{{end}}}
				<li role="separator" class="divider"></li>
				<!-- END -->
				<li class="dropdown-header">[[modules:chat.options]]</li>
				<li>
					<a href="#" data-action="members"><i class="fa fa-fw fa-cog"></i> [[modules:chat.manage-room]]</a>
				</li>
				<li>
					<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>
				</li>
				<li>
					<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>
				</li>
			</ul>
		</div>
		<span class="members">
			[[modules:chat.chatting_with]]:
			{{{each users}}}
			<a href="{config.relative_path}/uid/{../uid}">{../username}</a><!-- IF !@last -->,<!-- END -->
			{{{end}}}
		</span>
	</div>
	<ul class="chat-content">
		{{{each messages}}}
	{{{ if !./system }}}
	<li component="chat/message" class="chat-message clear<!-- IF ../deleted --> deleted<!-- END -->" data-index="{messages.index}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}">
	<div class="message-header">
		<a href="{config.relative_path}/user/{messages.fromUser.userslug}">{buildAvatar(messages.fromUser, "md", true, "not-responsive")}</a>
		<strong><span class="chat-user">{messages.fromUser.displayname}</span></strong>
		<span class="chat-timestamp timeago" title="{messages.timestampISO}"></span>
	</div>
	<div component="chat/message/body" class="message-body">
		<!-- IF messages.edited -->
		<small class="text-muted pull-right" title="[[global:edited]] {messages.editedISO}"><i class="fa fa-edit"></i></span></small>
		<!-- ENDIF messages.edited -->
		<!-- IF !config.disableChatMessageEditing -->
		<!-- IF messages.self -->
		<div class="pull-right btn-group controls">
			<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>
			<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>
			<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>
		</div>
		<!-- ENDIF messages.self -->
		<!-- ENDIF !config.disableChatMessageEditing -->
		{messages.content}
	</div>
</li>
	{{{ else }}}
	<li component="chat/system-message" class="system-message clear" data-index="{messages.index}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="0" data-timestamp="{messages.timestamp}">
	[[modules:chat.system.{messages.content}, {messages.fromUser.username}]]
</li>
	{{{ end }}}
{{{end}}}
	</ul>
	<div component="chat/composer">
		<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="2"></textarea>
		<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>
		<span component="chat/message/remaining">{maximumChatMessageLength}</span>
	</div>
</div>
<!-- ELSE -->
<div class="alert alert-info">
	[[modules:chat.no-messages]]
</div>
<!-- ENDIF roomId -->
	</div>
</div>