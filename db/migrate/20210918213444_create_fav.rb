class CreateFav < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :name
      t.string :url
      t.string :price
      t.integer :user_id
    end
  end
end
