class FixAddressColumnNames < ActiveRecord::Migration[7.0]
  def change
    rename_column :friends, :address_line_1, :address_line1
    rename_column :friends, :address_line_2, :address_line2
  end
end
