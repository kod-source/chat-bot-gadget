class CreateIpads < ActiveRecord::Migration[6.0]
  def change
    create_table :ipads do |t|
      t.string :product_id
      t.float :screen_size
      t.string :chip
      t.boolean :high_perform_camera
      t.boolean :type_c
      t.boolean :five_g
      t.boolean :penil_two
      t.boolean :face_id
      t.boolean :clean_display
      t.boolean :center_frame
      t.integer :speaker_count
      t.boolean :dual_speaker
      t.boolean :thunderbolt
      t.integer :weight
      t.boolean :high_refresh_rate
      t.boolean :smart_connector

      t.timestamps
    end
  end
end
