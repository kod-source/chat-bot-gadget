class Ipad < ApplicationRecord
  belongs_to :product
  has_many :image_swipers, dependent: :destroy
end
