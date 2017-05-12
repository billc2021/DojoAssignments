Rails Commands

01. Create a new Rails project
- rails new <PROJECT_NAME>

02. Create a Schema for a model
- rails g (or generate) model <SCHEMA_NAME> <NAME_OF_FIELD:DATA_TYPE>
	- rails generate model User first_name:string age:integer

- The different data types:

	* :binary
	* :boolean
	* :date
	* :datetime
	* :decimal
	* :float
	* :integer
	* :primary_key
	* :references
	* :string
	* :text
	* :time
	* :timestamp

03. Create Database
- rake db:migrate