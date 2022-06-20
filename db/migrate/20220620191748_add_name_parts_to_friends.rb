class AddNamePartsToFriends < ActiveRecord::Migration[7.0]
  def up
    add_column :friends, :first_name, :string
    add_column :friends, :last_name, :string

    remove_column :friends, :name
  end

  def down
    remove_column :friends, :first_name
    remove_column :friends, :last_name

    add_column :friends, :name, :string
  end
end
