class AddDiscount < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :discount, :boolean, default:false
  end
end
