require "test_helper"

class FriendsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @friend = friends(:one)
  end

  test "should get index" do
    get friends_url
    assert_response :success
  end

  test "should get new" do
    get new_friend_url
    assert_response :success
  end

  test "should show friend" do
    get friend_url(@friend)
    assert_response :success
  end

  # @WIP - mweitekamp, 6/30/2022
  # test "should get edit" do
  #   get edit_friend_url(@friend)
  #   assert_response :success
  # end

  # @WIP - mweitekamp, 6/21/2022
  # test "should update friend" do
  #   patch friend_url(@friend), params: { friend: { address_line_1: @friend.address_line_1, address_line_2: @friend.address_line_2, age: @friend.age, city: @friend.city, interests: @friend.interests, name: @friend.name, nickname: @friend.nickname, state: @friend.state, zip: @friend.zip } }
  #   assert_redirected_to friend_url(@friend)
  # end
end
