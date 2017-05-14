Rails.application.routes.draw do
  root 'posts#index', as: 'home'

  #   URL/route   Controller#html.erb file
  get 'about' => 'pages#about', as: 'about'

  resources :posts do
    resources :comments
  end
end