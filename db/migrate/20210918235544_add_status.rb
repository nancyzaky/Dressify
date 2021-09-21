class AddStatus < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :status, :integer, default: 1
  end
end
