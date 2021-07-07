<form role="form" class="import-users-csv-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">Import Users</div>
		<div class="col-sm-10 col-xs-12">
			<p class="lead">
				Upload spreadsheet (.csv file) to create users. Note that the first row will be ignored.
				After choosing the file, clicking Import file should display the information in the section below.
				If nothing is shown, please reload the page and try again.
			</p>

			<!-- Group Name Input -->
			<div class="form-group">
				<label for="setting-1">New group name</label>
				<input type="text" class="form-text" id="new_group_name">
				<br />
				<br />
				<div class="form-group green-border-focus">
					<label for="setting-1">Description</label>
					<textarea class="form-control" id="new_group_description" rows="3"></textarea>
				</div>
			</div>

			<!-- CSV File Input -->
			<div class="form-group">
				<label for="setting-2">Choose file here</label>
				<input type="file" class="form-control-file" id="csv_input_file">
				<br />
				<button id="csv_submit_button" type="button" name="button">Import file</button>
			</div>

			<!-- Error Checking -->
			<div class="form-group">
				<label for="setting-3">Parsed information</label>
				<div id="results_table_container">
				</div>
			</div>

			<!-- Confirm user creation before emailing -->
			<div class="form-group">
				<button id="confirm_create_users" type="button" name="button">Create Users and Notify through email</button>
				<p id="confirmation_display">
				</p>
			</div>
		</div>
	</div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="material-icons">save</i>
</button>
