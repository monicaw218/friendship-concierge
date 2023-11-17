class RemoveAgeFromFriends < ActiveRecord::Migration[7.0]
  def change
    remove_column :friends, :age, :integer
  end
end
