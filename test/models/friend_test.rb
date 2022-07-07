require "test_helper"

class FriendTest < ActiveSupport::TestCase
  setup do
    @friend = friends(:one)
  end

  test "should be valid" do
    assert @friend.valid?
  end

  test "first name should be present" do
    @friend.first_name = ''

    assert_not @friend.valid?
  end

  test "last name should be present" do
    @friend.last_name = ''

    assert_not @friend.valid?
  end

  test 'first name is not too long' do 
    @friend.first_name = 'a' * 26

    assert_not @friend.valid?
  end

  test 'last name is not too long' do 
    @friend.last_name = 'a' * 26

    assert_not @friend.valid?
  end

  test '#full_name' do
    assert_equal('Monica Weitekamp', @friend.full_name)    
  end

  test 'names are always capitalized on save' do
    friend2 = Friend.create!(first_name: "mo", last_name: "we")
    assert_equal('Mo', friend2.first_name);
    assert_equal('We', friend2.last_name);
  end
end
