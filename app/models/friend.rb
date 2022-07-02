class Friend < ApplicationRecord
	has_many :friend_histories, dependent: :destroy

	validates :first_name, presence: true, length: { maximum: 25 }
	validates :last_name, presence: true, length: { maximum: 25 }

	def full_name
		"#{first_name} #{last_name}"
	end
end
