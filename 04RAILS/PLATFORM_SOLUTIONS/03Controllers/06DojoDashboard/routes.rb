Rails.application.routes.draw do
  root "dojos#index"
  resources :dojos, only: [:index, :new, :create]
end