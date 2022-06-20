Rails.application.routes.draw do
  # get 'static_pages/home'
  # get 'static_pages/contact'
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
  get '/contact', to: 'static_pages#contact'

  root "static_pages#home"
end
