Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'posts#index', as: 'home'

  #   URL/route   Controller#html.erb file
  get 'about' => 'pages#about', as: 'about'


  resources :posts do
    resources :comments
  end

  get 'login' => 'users#login'

  post 'submit_login' => 'users#submit_login'

  post 'register' => 'users#register'
end
