class CreateFriendHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :friend_histories do |t|
      t.integer :friend_id
      t.datetime :alternate_update_time
      t.string :description

      t.timestamps
    end
  end
end
