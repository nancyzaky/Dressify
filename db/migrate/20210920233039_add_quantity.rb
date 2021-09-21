class AddQuantity < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :quantity, :integer, default:1
  end
end
