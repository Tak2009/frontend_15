Rails.application.routes.draw do
  root to: 'rooms#show'
  # get 'rooms/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # mount ActionCable.server => "/cunsumer"
end
