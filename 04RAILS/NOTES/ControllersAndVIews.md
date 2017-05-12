## Routes

### Syntax for directing HTTP request to the appropriate controller#method:

HTTP_VERB "<RELATIVE_URL>" => "controller#method

### Example:
app/config/routes.rb:
* get "products" => "products#index"
* get "products/new" => "products#new"
* post "products" => "products#create"
* get "products/:id" => "products#show"
* get "products/:id/edit" => "products#edit"
* patch "products/:id" => "products#update"
* delete "products/:id" => "products#destroy"

The collection of CRUD operations via a URI is called a resource. Ruby on Rails has created a special method that will create all these 7 routes for us in one line.

app/config/routes.rb

	resource :products


#### Custom Routes
	
	Example:

	get "profile" => "users#show"

#### To redirect the root route

	root 'products#index'


## Controllers

### To create a controller

Syntax - rails g(generate) controller <CONTROLLER_NAME> <METHODS_SPACE_SEPERATED>

Example: (the controller name is capitalized and plural)

	rails g controller Comments index new edit

### Render
To Render a view other than the default you tell the controller to
render "filename" or render "folder/filename"

	Example:

		def home
			# renders the home.html.erb view in the views/users folder
			render "home" 
		end

		def list_products
			# renders the all.html.erb view in the views/products folder
			render "products/all"
		end

### Redirect_to

To redirect_to

	Example:

		def new
			if signed_in?
			redirect_to "/users/profile"
			end
		end
		
		def profile
		end

## Passing Information to the view using @<VARIABLES>
In the Controller file

	Example:

		class UsersController < ApplicationController
			def index
				@users = User.all **
			end
		end

In the app/views/user/index.html.erb file

	Example:

		<h1>Listing Users</h1>
		<table>
		<thead>
			<tr>
			<td>First Name</td>
			<td>Last Name</td>
			<td>Email</td>
			</tr>
		</thead>
		<tbody>
		<% @users.each do |user| %>
			<tr>
			<td><%= user.first_name %></td>
			<td><%= user.last_name %></td>
			<td><%= user.email %></td>
			</tr>
		<% end %>  
		</tbody>
		</table>