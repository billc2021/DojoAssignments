Rails.application.routes.draw do
  get 'users/new'

  get 'users/total'

  get '/users', to: 'users#users'

  get '/users/:id', to: 'users#user'

  get '/users/:id/edit', to: 'users#edit'

  post 'users', to: 'users#create'

  get '/users/total', to: 'users#total'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
