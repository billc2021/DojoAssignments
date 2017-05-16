Rails.application.routes.draw do
  get 'dojos/index'
  root 'dojos#index'
  get 'dojos/new' => 'dojos#new'
  post 'dojos/create' => 'dojos#create'
  post 'dojos/update' => 'dojos#update'
  get 'dojos/:id' => 'dojos#show'
  get 'dojos/:id/edit' => 'dojos#edit'
  get 'dojos/:id/delete' => 'dojos#delete'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
