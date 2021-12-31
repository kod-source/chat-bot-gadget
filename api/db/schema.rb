# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_31_084306) do

  create_table "image_swipers", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "ipad_id"
    t.integer "iphone_id"
    t.integer "mac_id"
    t.string "title", null: false
    t.string "url", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ipads", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "product_id"
    t.float "screen_size"
    t.string "chip"
    t.boolean "high_perform_camera"
    t.boolean "type_c"
    t.boolean "five_g"
    t.boolean "pencil_two"
    t.boolean "face_id"
    t.boolean "clean_display"
    t.boolean "center_frame"
    t.integer "speaker_count"
    t.boolean "dual_speaker"
    t.boolean "thunderbolt"
    t.integer "weight"
    t.boolean "high_refresh_rate"
    t.boolean "smart_connector"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "many_colors"
  end

  create_table "likes", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "user_id"
    t.integer "product_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "macs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.bigint "product_id"
    t.boolean "apple_silicon"
    t.string "chips"
    t.float "size"
    t.integer "max_memory"
    t.integer "max_cpu_core"
    t.integer "max_gpu_core"
    t.integer "max_storage"
    t.integer "battery_driven_time"
    t.boolean "touch_bar"
    t.string "storages"
    t.string "memorys"
    t.boolean "mini_led_display"
    t.boolean "pro_motion_display"
    t.float "weight"
    t.integer "in_camra_pixel"
    t.integer "thunderbolt_count"
    t.boolean "hdmi_port"
    t.boolean "sa_card_slot"
    t.boolean "notch"
    t.boolean "wi_fi_six"
    t.integer "power_adaper"
    t.boolean "fan_existence"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_id"], name: "index_macs_on_product_id"
  end

  create_table "products", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.text "memo"
    t.string "image"
    t.integer "most_low_price", null: false
    t.integer "highest_price", null: false
    t.string "url", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "avatar"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.text "memo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "macs", "products"
end
