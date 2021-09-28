class CreateFavorite < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :item_id
    end
  end
end


# class AddStatusColumn < ActiveRecord::Migration[6.1]
#   def change
#     add_column :draganddrops, :status, :integer, default:1
#   end
# end
# class CreateTableDragDrop < ActiveRecord::Migration[6.1]
#   def change
#     create_table :draganddrops do |t|
#       t.integer :user_id
#       t.integer :item_id
#     end
#   end
# end