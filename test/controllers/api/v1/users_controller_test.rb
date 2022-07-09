require 'test_helper'

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:monica)
  end

  test 'should create new' do
    assert_difference('User.count') do
      post api_v1_users_url, params: { user: {
        first_name: 'Brenda',
        last_name: 'Song',
        email: 'bsong@gmail.com',
        password: 'password'
      } }
    end

    user = @response.parsed_body
    assert_equal user['first_name'], 'Brenda'
    assert_equal user['last_name'], 'Song'
    assert_equal user['email'], 'bsong@gmail.com'
  end

  # @WIP - mweitekamp
  # test "should update user" do
  #   patch user_url(@user), params: { user: { first_name: @user.first_name, last_name: @user.last_name, email: @user.email } }
  #   assert_redirected_to user_url(@user)
  # end

  test 'should destroy user' do
    assert_difference('User.count', -1) do
      delete api_v1_user_url(@user)
    end
  end

  test "should prevent user from accessing other user profiles" do
    log_in_as(users(:matthew))
    get api_v1_user_url(@user)
    assert_response 422
  end
end
