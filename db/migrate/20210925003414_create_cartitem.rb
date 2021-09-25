class CreateCartitem < ActiveRecord::Migration[6.1]
  def change
    create_table :cartitems do |t|
      t.integer :item_id
      t.integer :cart_id
      t.integer :quantity
    end
  end
end
