class CreateShoppingSession < ActiveRecord::Migration[6.1]
  def change
    create_table :shopping_sessions do |t|
      t.integer :user_id
      t.timestamps
    end
  end
end
