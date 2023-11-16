class AddBirthdayToFriends < ActiveRecord::Migration[7.0]
  def change
    add_column :friends, :birthday, :date
  end
end
