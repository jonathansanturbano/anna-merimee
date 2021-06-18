class Oeuvre < ApplicationRecord
  CATEGORIES = ["Huile", "Acrylique", "Aquarelle", "Dessin à l'encre", "Pastel"]
  validates :nom, presence: true
  validates :dimensions, presence: true
  validates :prix, presence: true, numericality: { greater_than: 0 }
  has_one_attached :photo
  before_save :save_cloudinary_url

  def save_cloudinary_url
    cloudinary_key = self.photo.key
    options = { width: 300 }
    self.cloudinary_url = Cloudinary::Utils.cloudinary_url(cloudinary_key, options)
  end
end
