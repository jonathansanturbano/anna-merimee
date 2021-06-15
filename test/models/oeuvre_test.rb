require 'test_helper'

class OeuvreTest < ActiveSupport::TestCase
  CATEGORIES = ["Huile", "Acrylique", "Aquarelle"]

  test "Oeuvre needs to have a name" do
    oeuvre = Oeuvre.new
    assert_not oeuvre.save, "Saved oeuvre without name"
  end

  test "Oeuvre needs to have a price" do
    oeuvre = Oeuvre.new(nom: "Nature Morte")
    assert_not oeuvre.save, "Saved oeuvre without price"
  end

  test "Oeuvre needs to have an integer as price" do
    oeuvre = Oeuvre.new(nom: "Nature Morte", prix: "ABCD")
    assert_not oeuvre.save, "Saved oeuvre with a non-numerical price"
    oeuvre = Oeuvre.new(nom: "Nature Morte", prix: 500, dimensions: "50cm x 100cm")
    assert oeuvre.save, "Saved oeuvre with a numerical price"
  end

  test "Oeuvre needs to have a positive integer as price" do
    oeuvre = Oeuvre.new(nom: "Nature Morte", prix: -5, dimensions: "50cm x 100cm")
    assert_not oeuvre.save, "Saved oeuvre with a negative integer price"
  end

  test "Oeuvre needs to have dimensions" do
    oeuvre = Oeuvre.new(nom: "Nature Morte", prix: 500)
    assert_not oeuvre.save, "Saved oeuvre without dimensions"
  end

  test "Oeuvre defaults to sold = false" do
    oeuvre = Oeuvre.new(nom: "Nature Morte", prix: 100, dimensions: "50cm x 100cm")
    assert oeuvre.save
    assert_equal true, oeuvre.disponible, "New oeuvre doesn't appear by default as disponible = true"
  end

  test "Oeuvre should have a category of either 'Huile', 'Acrylique' or 'Aquarelle'" do
    oeuvre = Oeuvre.new(nom: "Nature Morte", prix: 100, dimensions: "50cm x 100cm", categorie: "Huile")
    assert oeuvre.save
    assert_includes CATEGORIES, oeuvre.categorie, "New oeuvre doesn't have a category"
  end
end
