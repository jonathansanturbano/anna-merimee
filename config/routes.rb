Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#intro"
  get "/dashboard", to: "pages#dashboard"
  get "/nouvelle-oeuvre", to: "oeuvres#new"
  post "/dashboard", to: "oeuvres#create"
  get "/home", to: "pages#home"
end
