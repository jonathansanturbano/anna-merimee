class Oeuvre < ApplicationRecord
  CATEGORIES = ["Huile", "Acrylique", "Aquarelle"]
  validates :nom, presence: true
  validates :dimensions, presence: true
  validates :prix, presence: true, numericality: {greater_than: 0}
  has_one_attached :photo
end
