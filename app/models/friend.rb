class Friend < ApplicationRecord
	has_many :friend_histories, dependent: :destroy

	def full_name
		"#{first_name} #{last_name}"
	end
end
