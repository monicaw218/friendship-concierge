require 'test_helper'

class Api::V1::FriendsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @friend = friends(:one)
    @user = users(:monica)
  end

  test 'should create new' do
    assert_difference('Friend.count') do
      log_in_as @user
      post api_v1_friends_url, params: { friend: {
        age: @friend.age,
        interests: @friend.interests,
        first_name: @friend.first_name,
        last_name: @friend.last_name
      } }
    end

    friend = @response.parsed_body
    assert_equal friend['first_name'], 'Monica'
    assert_equal friend['last_name'], 'Weitekamp'
    assert_equal friend['age'], 29
    assert_equal friend['interests'], 'Website development, volleyball, gardening, skiing, learning new languages'
  end

  test 'should destroy friend' do
    assert_difference('Friend.count', -1) do
      delete api_v1_friend_url(@friend)
    end
  end
end
