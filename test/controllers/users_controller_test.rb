require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:monica)
  end

  test 'should get index' do
    get users_url
    assert_response :success
  end

  test 'should get new' do
    get new_user_url
    assert_response :success
  end

  test 'should show user' do
    get user_url(@user)
    assert_response :success
  end

  # test "should get edit" do
  #   get edit_user_url(@user)
  #   assert_response :success
  # end
end
