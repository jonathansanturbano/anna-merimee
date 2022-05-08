class ChangePrixToStringFromOeuvres < ActiveRecord::Migration[6.0]
  def change
    change_column :oeuvres, :prix, :string
  end
end
