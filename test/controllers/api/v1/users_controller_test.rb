require 'test_helper'

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  # setup do
  #   @user = users(:monica)
  # end

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
end
