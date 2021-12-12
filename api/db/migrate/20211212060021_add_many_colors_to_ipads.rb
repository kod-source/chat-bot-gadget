class AddManyColorsToIpads < ActiveRecord::Migration[6.0]
  def change
    add_column :ipads, :many_colors, :boolean
  end
end
