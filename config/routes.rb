Rails.application.routes.draw do
  root "pages#home"

  get "about", to: "pages#about"
  get "resume", to: "pages#resume"

  # `param: :slug` so URLs read /projects/celestia-track instead of /projects/1,
  # matching the deep-linking requirement under Core Requirement 1.
  resources :projects, only: [:index, :show], param: :slug

  # Reserved for Phase 3 (Admin CMS):
  # namespace :admin do
  #   resources :projects
  #   resources :timeline_entries
  #   resources :skills
  # end
end
