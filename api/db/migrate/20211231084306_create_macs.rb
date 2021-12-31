class CreateMacs < ActiveRecord::Migration[6.0]
  def change
    create_table :macs do |t|
      t.references :product, foreign_key: true
      t.boolean :apple_silicon
      t.string :chips
      t.float :size
      t.integer :max_memory
      t.integer :max_cpu_core
      t.integer :max_gpu_core
      t.integer :max_storage
      t.integer :battery_driven_time
      t.boolean :touch_bar
      t.string :storages
      t.string :memorys
      t.boolean :mini_led_display
      t.boolean :pro_motion_display
      t.float :weight
      t.integer :in_camra_pixel
      t.integer :thunderbolt_count
      t.boolean :hdmi_port
      t.boolean :sa_card_slot
      t.boolean :notch
      t.boolean :wi_fi_six
      t.integer :power_adaper
      t.boolean :fan_existence

      t.timestamps
    end
  end
end
