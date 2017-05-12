To add an email column:
- rails generate migration AddEmailColumnToUsers email:string

To get the status of your migrations:
- rake db:migrate:status


** Functions: **
A list of the most popular ones:

* create_table(name, options)
* drop_table(name)
* rename_table(old_name, new_name)
* add_column(table_name, column_name, type, options)
* rename_column(table_name, column_name, new_column_name)
* change_column(table_name, column_name, type, options)
* remove_column(table_name, column_name)
* add_index(table_name, column_name, index_type)
* remove_index(table_name, column_name)
* add_reference(table_name, referenced_model, index:true)

** Rollback: **
* rake db:rollback
* rake db:rollback STEP=N - Rolls back the schema N steps, where N is an integer:
    - rake db:rollback STEP=2
* Specific rollbacks:
    * rake db:migrate:up VERSION=MIGRATION_ID - Turns up the a specific migration
      - rake db:migrate:up VERSION=20080906120000

    * rake db:migrate:down VERSION=MIGRATION_ID - Turns down the a specific migration
      - rake db:migrate:down VERSION=20080906120000
