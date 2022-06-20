Rails.application.routes.draw do
  resources :users
  resources :friends
  namespace :api do
    namespace :v1 do
      get 'friends/index'
      post 'friends/create'
      delete 'friends/:id', to: 'friends#destroy'
    end
  end

  get '/signup', to: 'users#new'

  root "friends#index"
end
