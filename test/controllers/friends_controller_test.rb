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

  # @WIP - mweitekamp, 6/21/2022
  # test "should create friend" do
  #   assert_difference("Friend.count") do
  #     post friends_url, params: { friend: { address_line_1: @friend.address_line_1, address_line_2: @friend.address_line_2, age: @friend.age, city: @friend.city, interests: @friend.interests, name: @friend.name, nickname: @friend.nickname, state: @friend.state, zip: @friend.zip } }
  #   end

  #   assert_redirected_to friend_url(Friend.last)
  # end

  # @WIP - mweitekamp, 6/21/2022
  # test "should show friend" do
  #   get friend_url(@friend)
  #   assert_response :success
  # end

  test "should get edit" do
    get edit_friend_url(@friend)
    assert_response :success
  end

  # @WIP - mweitekamp, 6/21/2022
  # test "should update friend" do
  #   patch friend_url(@friend), params: { friend: { address_line_1: @friend.address_line_1, address_line_2: @friend.address_line_2, age: @friend.age, city: @friend.city, interests: @friend.interests, name: @friend.name, nickname: @friend.nickname, state: @friend.state, zip: @friend.zip } }
  #   assert_redirected_to friend_url(@friend)
  # end

  # @WIP - mweitekamp, 6/21/2022
  # test "should destroy friend" do
  #   assert_difference("Friend.count", -1) do
  #     delete friend_url(@friend)
  #   end

  #   assert_redirected_to friends_url
  # end
end
