Rails.application.routes.draw do

  post '/signup', to: 'registrations#signup'

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/logged_in', to: 'sessions#logged_in?'
  delete '/destroy', to: 'sessions#destroy'
  post '/contact_send_mail', to: 'contacts#contact_send_mail'
  resources :users, only: [:update]
  resources :likes, only: [:index, :create, :destroy]
  get '/like_products', to: 'products#like_products'
  resources :products, only: [:show]
  get '/ipads/search', to: 'ipads#search'
  resources :ipads, only: [:index, :show]
  resources :image_swipers, only: [:index]
  get '/macs/search', to: 'macs#search'
  resources :macs, only: [:index, :show]
end