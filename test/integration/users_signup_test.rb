require "test_helper"

class UsersSignupTest < ActionDispatch::IntegrationTest

  test "invalid signup information" do
    get signup_path
    assert_no_difference 'User.count' do
      post api_v1_users_path, params: { user: { first_name: "",
                                                last_name: "",
                                                email: "user@invalid.com",
                                                password: "foo",
                                                password_confirmation: "bar" } }
    end
  end
end
