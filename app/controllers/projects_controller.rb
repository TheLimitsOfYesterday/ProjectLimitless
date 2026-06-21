class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  # Deep link, e.g. shared from the hover preview's GitHub-adjacent "open"
  # affordance, or bookmarked mid-session. Renders the same grid as #index
  # but tells the front end island which project to punch into on load - 
  # see phase 1 item 3 for the JS side of this contract.
  def show
    @projects = Project.all
    @initial_project_slug = params[:slug]

    render :index
  end
end