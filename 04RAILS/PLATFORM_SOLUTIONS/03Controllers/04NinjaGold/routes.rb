Rails.application.routes.draw do
  root "rpg#index"
  post "process" => "rpg#new"
end