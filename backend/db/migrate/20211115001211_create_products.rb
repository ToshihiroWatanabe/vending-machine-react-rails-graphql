class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.references :temperature, null: false, foreign_key: true
      t.integer :price, null: false
      t.references :vendor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
