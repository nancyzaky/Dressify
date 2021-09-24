class AddIdColumnItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :outfit_id, :integer
  end
end
