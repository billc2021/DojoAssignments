# Rails Commands

## Generate a rails app
	rails new simpleblog_app



## CONTROLLER
#### Generate a CONTROLLER
	rails g controller Posts (posts are alway plural)

## ROUTES
	root 'posts#index'

#### Syntax for a route:
		
-	'HTTP_verb' 'URL/route' =>  'Controller#html.erb file'
		
		get 'about' => 'pages#about'

### Resources
To have rails generate all of your CRUD routes:
		
		01. resources :posts
		02. rake routes

## MODEL
#### Generate a MODEL 
	01. rails g model Post (models are always singular)
	02. rake db:migrate