class Project < ApplicationRecord
  validates :title, presence: true
  validates :slug, presence: true, uniqueness: true,
  format: { with: /\A[a-z0-9\-]+\z/, message: "Must be lowercase numbers, and hyphens only"}
  validates :summary, presence: true
  validates :github_url, format: { with: URI::DEFAULT_PARSER.make_regexp(%w[http https]) }, allow_blank: true

  default_scope { order(:position, :title) }

  # This is used for `to_parse`, so `project_path(@project)` and `link_to project` naturally generates /projects/:slug links.
  
  def to_param
    slug
  end
end