Rails.application.routes.draw do
  get 'products/index'

  get 'products/indexf'

  get 'user/home'

  get 'user/list_products'

  get 'user/new'

  get 'user/index'

  get 'comments/index'

  get 'comments/new'

  get 'comments/edit'

  root 'products#index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :products

end
