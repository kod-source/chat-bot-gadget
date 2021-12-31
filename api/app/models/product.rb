class Product < ApplicationRecord
  validates :memo, length: { maximum: 500 }

  has_many :likes
  has_one :ipad
  has_one :mac
end
