Rails.application.routes.draw do
  root "dojos#index"
  resources :dojos, only: [:index]
end