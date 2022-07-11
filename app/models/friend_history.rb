class FriendHistory < ApplicationRecord
  has_one :friend

  default_scope { order(created_at: :desc) }

  validates :friend_id, presence: true
  validates :description, presence: true
end
