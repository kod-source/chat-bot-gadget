class User < ApplicationRecord
  has_secure_password

  mount_uploader :avatar, AvatarUploader
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :memo, length: { maximum: 500 }
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  has_many :likes
end