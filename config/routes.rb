Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get  all tasks
    get '/task', to: 'tasks#index'
    post '/task', to: 'tasks#create'
    get '/task/:id', to: 'tasks#show'
    put '/task/:id', to: 'tasks#update'
    delete '/task/:id', to: 'tasks#destroy'
end
