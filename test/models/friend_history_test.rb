require 'test_helper'

class FriendHistoryTest < ActiveSupport::TestCase
  setup do
    @friend = friends(:one)
    @friend_history = FriendHistory.new(friend_id: @friend.id, description: 'cheese')
  end

  test 'friend must be valid' do
    assert @friend_history.valid?
  end

  test 'friend history must have a friend id' do
    @friend_history.friend_id = nil
    assert_not @friend_history.valid?
  end

  test 'friend history must have a description' do
    @friend_history.description = nil
    assert_not @friend_history.valid?
  end
end
