class AddStatusColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :outfits, :status, :integer, default: 1
  end
end
