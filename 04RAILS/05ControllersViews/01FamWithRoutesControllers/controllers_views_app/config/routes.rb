Rails.application.routes.draw do

  root 'say#index'

  get 'hello' => 'hello#hello' 

  get 'say/hello' => 'hello#say'

  get 'say/hello/joe', to: 'hello#joe'

  get 'say/hello/micheal', to: 'hello#micheal'

  get '/times', to: 'times#index'

  get '/times/reset', to: 'times#reset'

  # get 'say/hello/:name', to: 'hello#name'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
