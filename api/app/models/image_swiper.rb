class ImageSwiper < ApplicationRecord
  belongs_to :ipad, optional: true
  belongs_to :mac, optional: true
end
