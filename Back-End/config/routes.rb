Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    # reset password
    post "reset_password", to: "users#reset_password"
    put "update_password/:reset_password_token", to: "users#update_password"
    put "reset_password/:reset_password_token", to: "users#update_password"
  
    # user login/register
    post "/users/login", to: "authentication#login"
    post "/users/register", to: "users#create"
    get '/users/me', to: 'users#me'

  # get  all tasks
    get '/users/:user_id/tasks', to: 'tasks#index'
    post '/task', to: 'tasks#create'
    get '/task/:id', to: 'tasks#show'
    put '/task/:id', to: 'tasks#update'
    delete '/task/:id', to: 'tasks#destroy'
end
