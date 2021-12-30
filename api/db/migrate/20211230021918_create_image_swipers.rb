class CreateImageSwipers < ActiveRecord::Migration[6.0]
  def change
    create_table :image_swipers do |t|
      t.integer :ipad_id
      t.integer :iphone_id
      t.integer :mac_id
      t.string :title, null: false
      t.string :url, null: false

      t.timestamps
    end
  end
end
