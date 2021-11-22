class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :memo
      t.string :image
      t.integer :most_low_price, null: false
      t.integer :highest_price, null: false
      t.string :url, null: false

      t.timestamps
    end
  end
end
