Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/contact'

  resources :users
  resources :friends

  namespace :api do
    namespace :v1 do
      get 'friends/index'
      post 'friends/create'
      delete 'friends/:id', to: 'friends#destroy'

      get 'users/index'
      get 'users/:id', to: 'users#show'
      post 'users/create'
      delete 'users/:id', to: 'users#destroy'
    end
  end

  get '/signup', to: 'users#new'
  get '/contact', to: 'static_pages#contact'
  get '/friends', to: 'friends#index'
  get '/users', to: 'users#index'

  root "static_pages#home"
end
