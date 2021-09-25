class Favoriteitem < ActiveRecord::Migration[6.1]
  def change
    create_table :favoriteitems do |t|
      t.integer :user_id
      t.integer :item.id
    end
  end
end
