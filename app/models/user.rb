class User < ApplicationRecord
	validates :first_name, presence: true, length: { maximum: 25 }
	validates :last_name, presence: true, length: { maximum: 25 }
	validates :username, presence: true, length: { maximum: 255 }
end
