class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:intro, :accueil]
  def intro
  end

  def accueil
  end

  def dashboard
    @oeuvres = Oeuvre.all.includes(photo_attachment: :blob)
  end
end
