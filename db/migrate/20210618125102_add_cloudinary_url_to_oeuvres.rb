class AddCloudinaryUrlToOeuvres < ActiveRecord::Migration[6.0]
  def change
    add_column :oeuvres, :cloudinary_url, :string
  end
end
