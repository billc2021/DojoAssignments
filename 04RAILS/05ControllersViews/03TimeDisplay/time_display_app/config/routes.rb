Rails.application.routes.draw do
  root 'date_times#index'
  get 'date_times/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
