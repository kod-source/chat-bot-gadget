class Product < ApplicationRecord
  validates :memo, length: { maximum: 500 }
end
