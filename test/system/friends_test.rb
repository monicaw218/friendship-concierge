require 'application_system_test_case'

class FriendsTest < ApplicationSystemTestCase
  setup do
    @friend = friends(:one)
  end

  test 'visiting the index' do
    visit friends_url
    assert_selector 'h1', text: 'Friends'
  end

  test 'should create friend' do
    visit friends_url
    click_on 'New friend'

    fill_in 'Address line 1', with: @friend.address_line1
    fill_in 'Address line 2', with: @friend.address_line2
    fill_in 'City', with: @friend.city
    fill_in 'Interests', with: @friend.interests
    fill_in 'Name', with: @friend.name
    fill_in 'Nickname', with: @friend.nickname
    fill_in 'State', with: @friend.state
    fill_in 'Zip', with: @friend.zip
    click_on 'Create Friend'

    assert_text 'Friend was successfully created'
    click_on 'Back'
  end

  test 'should update Friend' do
    visit friend_url(@friend)
    click_on 'Edit this friend', match: :first

    fill_in 'Address line 1', with: @friend.address_line1
    fill_in 'Address line 2', with: @friend.address_line2
    fill_in 'City', with: @friend.city
    fill_in 'Interests', with: @friend.interests
    fill_in 'Name', with: @friend.name
    fill_in 'Nickname', with: @friend.nickname
    fill_in 'State', with: @friend.state
    fill_in 'Zip', with: @friend.zip
    click_on 'Update Friend'

    assert_text 'Friend was successfully updated'
    click_on 'Back'
  end

  test 'should destroy Friend' do
    visit friend_url(@friend)
    click_on 'Destroy this friend', match: :first

    assert_text 'Friend was successfully destroyed'
  end
end
