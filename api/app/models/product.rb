class Product < ApplicationRecord
  validates :memo, length: { maximum: 500 }

  has_many :likes
end
