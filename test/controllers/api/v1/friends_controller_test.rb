require 'test_helper'

class Api::V1::FriendsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @friend = friends(:one)
    @friend2 = friends(:two)
    @user = users(:monica)
  end

  test 'should create new' do
    assert_difference('Friend.count') do
      log_in_as @user
      post api_v1_friends_url, params: { friend: {
        interests: @friend.interests,
        first_name: @friend.first_name,
        last_name: @friend.last_name,
        birthday: @friend.birthday
      } }
    end

    friend = @response.parsed_body
    assert_equal friend['first_name'], 'Monica'
    assert_equal friend['last_name'], 'Weitekamp'
    assert_equal friend['interests'], 'Website development, volleyball, gardening, skiing, learning new languages'
  end

  test 'should destroy friend' do
    assert_difference('Friend.count', -1) do
      delete api_v1_friend_url(@friend)
    end
  end

  test 'when a friend is deleted, its friend histories are, too' do
    FriendHistory.create!(friend_id: @friend.id, description: 'Lives on Skid Row')
    FriendHistory.create!(friend_id: @friend.id, description: 'Oh whoa also some other stuff')
    FriendHistory.create!(friend_id: @friend2.id, description: 'Here is an update for friend two')
    assert_difference('FriendHistory.count', -2) do
      delete api_v1_friend_url(@friend)
    end
  end

  test 'should update friend' do
    patch api_v1_friend_url(@friend), params: { friend: {
      interests: 'Dentistry, marine life',
      first_name: 'Patrick',
      last_name: 'Sherman',
      birthday: '2003-05-30'
    } }

    friend = @response.parsed_body
    assert_equal 'Patrick', friend['first_name']
    assert_equal 'Sherman', friend['last_name']
    assert_equal 'Dentistry, marine life', friend['interests']
  end
end
