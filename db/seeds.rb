require 'open-uri'

Oeuvre.destroy_all

oeuvre = Oeuvre.new(nom: 'Promenade 1', dimensions: '100 x 100', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924896/Anna%20M%C3%A9rim%C3%A9e/promenade-1_fqws5o.jpg')
oeuvre.photo.attach(io: file, filename: 'Promenade 1')
oeuvre.save!
puts "Created #{oeuvre.nom}"

oeuvre = Oeuvre.new(nom: 'Promenade 2', dimensions: '65 x 92', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924899/Anna%20M%C3%A9rim%C3%A9e/promenade-2_fmggik.jpg')
oeuvre.photo.attach(io: file, filename: 'Promenade 2')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Sommeil', dimensions: '80 x 60', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924897/Anna%20M%C3%A9rim%C3%A9e/sommeil_zx2lwk.jpg')
oeuvre.photo.attach(io: file, filename: 'Sommeil')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Fenêtre à Uzès', dimensions: '27 x 35', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924895/Anna%20M%C3%A9rim%C3%A9e/porte-bleue_vhczjg.jpg')
oeuvre.photo.attach(io: file, filename: 'Fenêtre à Uzès')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Pivoines', dimensions: '60 x 50', categorie: 'Acrylique', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924893/Anna%20M%C3%A9rim%C3%A9e/pivoines_ucz08d.jpg')
oeuvre.photo.attach(io: file, filename: 'Pivoines')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Porte bleue', dimensions: '60 x 50', categorie: 'Aquarelle', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924893/Anna%20M%C3%A9rim%C3%A9e/automne_jjfaso.jpg')
oeuvre.photo.attach(io: file, filename: 'Porte bleue')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Artichauts (Encadré)', dimensions: '50 x 36', categorie: 'Aquarelle', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924894/Anna%20M%C3%A9rim%C3%A9e/artichauts_tisij6.jpg')
oeuvre.photo.attach(io: file, filename: 'Artichauts (Encadré)')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Poires', dimensions: '60 x 50', categorie: 'Acrylique', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924895/Anna%20M%C3%A9rim%C3%A9e/poires_abilzd.jpg')
oeuvre.photo.attach(io: file, filename: 'Poires')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Artichauts', dimensions: '40 x 30', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924888/Anna%20M%C3%A9rim%C3%A9e/artichauts-sur-bois_nfgk1y.jpg')
oeuvre.photo.attach(io: file, filename: 'Artichauts')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'En regardant par la fenêtre', dimensions: '92 x 65', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924890/Anna%20M%C3%A9rim%C3%A9e/fenetre-a-_dujcen.jpg')
oeuvre.photo.attach(io: file, filename: 'En regardant par la fenêtre')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Les bords de la rivière', dimensions: '100 x 80', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924898/Anna%20M%C3%A9rim%C3%A9e/les-bords-de-la-rivera_gghvor.jpg')
oeuvre.photo.attach(io: file, filename: 'Les bords de la rivière')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Les arbres pourpres', dimensions: '65 x 50', categorie: 'Acrylique', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924888/Anna%20M%C3%A9rim%C3%A9e/arbres-pourpres_dkoofu.jpg')
oeuvre.photo.attach(io: file, filename: 'Les arbres pourpres')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Le chandelier', dimensions: '50 x 50', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924897/Anna%20M%C3%A9rim%C3%A9e/le-chandelier_ilivwg.jpg')
oeuvre.photo.attach(io: file, filename: 'Le chandelier')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Pivoines roses', dimensions: '50 x 50', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924891/Anna%20M%C3%A9rim%C3%A9e/pivoines-roses_rwtddk.jpg')
oeuvre.photo.attach(io: file, filename: 'Pivoines roses')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: "Parcs les serres d'Auteuil", dimensions: '60 x 60', categorie: '46 x 60', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924887/Anna%20M%C3%A9rim%C3%A9e/lombre-de-larbre_mj0gkk.jpg')
oeuvre.photo.attach(io: file, filename: "Parcs les serres d'Auteuil")
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: "L'ombre de l'arbre", dimensions: '46 x 60', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924894/Anna%20M%C3%A9rim%C3%A9e/parcs-les-serres-dauteuil_vvk7jy.jpg')
oeuvre.photo.attach(io: file, filename: "L'ombre de l'arbre")
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Pins parasol à Rome', dimensions: '46 x 60', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924890/Anna%20M%C3%A9rim%C3%A9e/pins-parasol-a-rome_azoygl.jpg')
oeuvre.photo.attach(io: file, filename: 'Pins parasol à Rome')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Jardin en provence', dimensions: '54 x 65', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924892/Anna%20M%C3%A9rim%C3%A9e/jardin-en-provence_chrijv.jpg')
oeuvre.photo.attach(io: file, filename: 'Jardin en provence')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'La terrasse (encadré)', dimensions: '60 x 50', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924897/Anna%20M%C3%A9rim%C3%A9e/la-terrasse_iiw1mx.jpg')
oeuvre.photo.attach(io: file, filename: 'La terrasse')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Toscane (encadré)', dimensions: '50 x 60', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924901/Anna%20M%C3%A9rim%C3%A9e/toscane_mrzqbw.jpg')
oeuvre.photo.attach(io: file, filename: 'Toscane')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: "Vase d'anémones (encadré)", dimensions: '50 x 60', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924901/Anna%20M%C3%A9rim%C3%A9e/vase-danemones_mfcxcl.jpg')
oeuvre.photo.attach(io: file, filename: "Vase d'anémones")
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'La fenêtre ouverte', dimensions: '80 x 60', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924894/Anna%20M%C3%A9rim%C3%A9e/la-fenetre-ouverte_l475ga.jpg')
oeuvre.photo.attach(io: file, filename: 'La fenêtre ouverte')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Anémones (encadré)', dimensions: '42 x 36', categorie: 'Pastel', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924887/Anna%20M%C3%A9rim%C3%A9e/anemones_epyv8c.jpg')
oeuvre.photo.attach(io: file, filename: 'Anémones')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Paysage (encadré)', dimensions: '44 x 34', categorie: 'Aquarelle', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924889/Anna%20M%C3%A9rim%C3%A9e/paysage_pphrio.jpg')
oeuvre.photo.attach(io: file, filename: 'Paysage')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Le chemin (encadré)', dimensions: '44 x 34', categorie: 'Aquarelle', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924897/Anna%20M%C3%A9rim%C3%A9e/le-chemin_abkf9m.jpg')
oeuvre.photo.attach(io: file, filename: 'Le chemin')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Les îles du Golfe - 1 (encadré)', dimensions: '54 x 44', categorie: 'Aquarelle', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924900/Anna%20M%C3%A9rim%C3%A9e/les-iles-du-golfe-1_mfsnsl.jpg')
oeuvre.photo.attach(io: file, filename: 'Les îles du Golfe - 1')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Les îles du Golfe - 2 (encadré)', dimensions: '54 x 44', categorie: 'Aquarelle', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924898/Anna%20M%C3%A9rim%C3%A9e/les-iles-du-golfe-2_hqwj4f.jpg')
oeuvre.photo.attach(io: file, filename: 'Les îles du Golfe - 2')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Sous bois', dimensions: '36 x 44', categorie: "Dessin à l'encre", prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924899/Anna%20M%C3%A9rim%C3%A9e/sous-bois_pybnmk.jpg')
oeuvre.photo.attach(io: file, filename: 'Sous bois')
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: "L'escalier chez Mario", dimensions: '100 x 65', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924901/Anna%20M%C3%A9rim%C3%A9e/lescalier-chez-mario_tlkh3p.jpg')
oeuvre.photo.attach(io: file, filename: "L'escalier chez Mario")
oeuvre.save!
puts "Created #{oeuvre.nom}"
oeuvre = Oeuvre.new(nom: 'Nature morte', dimensions: '45 x 55', categorie: 'Huile', prix: 500)
file = URI.open('https://res.cloudinary.com/dkbvm5myl/image/upload/v1623924887/Anna%20M%C3%A9rim%C3%A9e/nature-morte_wqokce.jpg')
oeuvre.photo.attach(io: file, filename: 'Nature morte')
oeuvre.save!
puts "Created #{oeuvre.nom}"
