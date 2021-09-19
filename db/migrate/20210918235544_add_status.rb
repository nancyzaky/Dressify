class AddStatus < ActiveRecord::Migration[6.1]
  def change
    add_column :shoppingsessions, :status, :integer, default: 0
  end
end
