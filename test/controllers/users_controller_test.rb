require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:monica)
  end

  test "should get index" do
    get users_url
    assert_response :success
  end

  test "should get new" do
    get new_user_url
    assert_response :success
  end

  # @WIP - mweitekamp
  # test "should create user" do
  #   assert_difference("User.count") do
  #     post users_url, params: { user: { first_name: @user.first_name, last_name: @user.last_name, email: @user.email } }
  #   end

  #   assert_redirected_to user_url(User.last)
  # end

  test "should show user" do
    get user_url(@user)
    assert_response :success
  end

  # test "should get edit" do
  #   get edit_user_url(@user)
  #   assert_response :success
  # end

  # @WIP - mweitekamp
  # test "should update user" do
  #   patch user_url(@user), params: { user: { first_name: @user.first_name, last_name: @user.last_name, email: @user.email } }
  #   assert_redirected_to user_url(@user)
  # end

  # @WIP - mweitekamp
  # test "should destroy user" do
  #   assert_difference("User.count", -1) do
  #     delete user_url(@user)
  #   end

  #   assert_redirected_to users_url
  # end
end
