require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(first_name: "Example", last_name: "User", email: "user@example.com")
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

  test 'email should be present' do
    @user.email = ''

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

  test 'email is not too long' do 
    @user.email = 'a' * 244 + '@example.com'

    assert_not @user.valid?
  end

  test "email validation should accept valid addresses" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                          first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert @user.valid?, "#{valid_address.inspect} should be valid"
    end
  end
end
