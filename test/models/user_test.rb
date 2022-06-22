require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(first_name: "Example", last_name: "User", username: "user@example.com")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "first name should be present" do
    @user.first_name = ''

    assert_not @user.valid?
  end

  test "last name should be present" do
    @user.last_name = ''

    assert_not @user.valid?
  end

  test 'email/username should be present' do
    @user.username = ''

    assert_not @user.valid?
  end

  test 'first name is not too long' do 
    @user.first_name = 'a' * 26

    assert_not @user.valid?
  end

  test 'last name is not too long' do 
    @user.last_name = 'a' * 26

    assert_not @user.valid?
  end

  test 'username is not too long' do 
    @user.username = 'a' * 244 + '@example.com'

    assert_not @user.valid?
  end
end
