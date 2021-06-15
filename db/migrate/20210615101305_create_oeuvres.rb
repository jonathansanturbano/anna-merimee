class CreateOeuvres < ActiveRecord::Migration[6.0]
  def change
    create_table :oeuvres do |t|
      t.string :nom
      t.string :dimensions
      t.string :categorie
      t.integer :prix
      t.boolean :disponible, null: false, default: true

      t.timestamps
    end
  end
end
