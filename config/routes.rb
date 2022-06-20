Rails.application.routes.draw do
  resources :users
  namespace :api do
    namespace :v1 do
      get 'friends/index'
      post 'friends/create'
      delete 'friends/:id', to: 'friends#destroy'
    end
  end

  root "friends#index"
end
