Rails.application.routes.draw do
  get 'sessions/new'
  get 'static_pages/home'
  get 'static_pages/contact'

  resources :users, only: [:index, :show, :new]
  resources :friends, only: [:index, :show, :new]

  namespace :api do
    namespace :v1 do
      resources :friends
      resources :users
    end
  end

  get '/signup', to: 'users#new'
  get '/contact', to: 'static_pages#contact'
  get '/friends', to: 'friends#index'
  get '/users', to: 'users#index'
  get '/login', to: 'sessions#new'
  delete '/logout', to: 'sessions#destroy'

  root "static_pages#home"
end
