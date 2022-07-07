class Friend < ApplicationRecord
	has_many :friend_histories, dependent: :destroy

	validates :first_name, presence: true, length: { maximum: 25 }
	validates :last_name, presence: true, length: { maximum: 25 }

	scope :order_by_last_name, -> { order(:last_name, :first_name) }

	def full_name
		"#{first_name} #{last_name}"
	end

	# Capitalize first name before saving
	# The to_s is in case you get nil/non-string
	def first_name=(s)
    write_attribute(:first_name, s.to_s.titleize)
  end

  # Capitalize last name before saving
	def last_name=(s)
    write_attribute(:last_name, s.to_s.titleize)
  end
end
