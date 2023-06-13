Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for "User", at: "auth", controllers: {
        registrations: 'api/v1/auth/registrations'
      }
      resources :users, only: [:show, :update]
      resources :posts
    end
  end
end