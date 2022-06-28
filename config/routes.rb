Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/contact'

  resources :users, only: [:index, :show, :new]
  resources :friends

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

  root "static_pages#home"
end
