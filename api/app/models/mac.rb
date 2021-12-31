class Mac < ApplicationRecord
  belongs_to :product
  has_many :image_swipers, dependent: :destroy

  serialize :chips, Array
  serialize :storages, Array
  serialize :memorys, Array
end
