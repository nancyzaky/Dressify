class CreateCart < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :shoppingsession_id
      t.timestamps
    end
  end
end
