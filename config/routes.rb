Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#intro"
  get "/dashboard", to: "oeuvres#index", as: "dashboard"
  get "/nouvelle-oeuvre", to: "oeuvres#new"
  post "/dashboard", to: "oeuvres#create"
  get "oeuvres/:id/edit", to: "oeuvres#edit", as: "edit_oeuvre"
  patch "oeuvres/:id", to: "oeuvres#update", as: "update_oeuvre"
  delete "oeuvres/:id", to: "oeuvres#destroy", as: "destroy_oeuvre"
  get "/accueil", to: "pages#accueil"
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :oeuvres, only: [:index]
    end
  end
  get '*path', to: 'pages#accueil'
end
