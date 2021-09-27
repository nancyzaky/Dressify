class CreateFavorite < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :item_id
    end
  end
end
