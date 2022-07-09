require 'test_helper'

class FriendHistoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @friend = friends(:one)
    @user = users(:monica)
    @friend_history = FriendHistory.create!(friend_id: @friend.id, description: 'Went to Aruba last month')
  end

  test 'should create new' do
    log_in_as @user
    assert_difference('FriendHistory.count') do
      post friend_histories_url, params: { friend_history: {
        friend_id: 1,
        description: 'Got a puppy today!'
      } }
    end

    friend_history = @response.parsed_body
    assert_equal friend_history['friend_id'], 1
    assert_equal friend_history['description'], 'Got a puppy today!'
  end

  test 'should destroy friend history' do
    assert_difference('FriendHistory.count', -1) do
      delete friend_history_url(@friend_history)
    end
  end
end
