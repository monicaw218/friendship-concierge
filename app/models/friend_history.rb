class FriendHistory < ApplicationRecord
	has_one :friend

	default_scope { order(created_at: :desc) }
end
