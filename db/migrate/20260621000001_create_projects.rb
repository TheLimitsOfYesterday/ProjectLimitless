class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.string  :title,              null: false
      t.string  :slug,               null: false
      t.text    :summary,            null: false, default: ""
      t.string  :github_url
      t.string  :preview_image_url
      t.boolean :mobile_compatible,  null: false, default: false
      t.integer :position,           null: false, default: 0
      # `embed_config` holds how the project shell mounts the project
      # (iframe src + sandbox flags, or an in-app route key) — kept generic
      # now, fleshed out when Phase 1 item 3 (ProjectShell) lands.
      t.json   :embed_config,       null: false, default: {}

      t.timestamps
    end

    add_index :projects, :slug, unique: true
    add_index :projects, :position
  end
end
