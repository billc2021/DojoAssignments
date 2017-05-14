Rails.application.routes.draw do
  root 'rpg#index'
  
  get 'rpg/farm' => 'rpg#process_farm'

  get 'rpg/cave' => 'rpg#process_cave'

  get 'rpg/casino' => 'rpg#process_casino'

  get 'rpg/house' => 'rpg#process_house'

  get 'rpg/index' => 'rpg#index'

  get 'rpg/reset' => 'rpg#reset'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
