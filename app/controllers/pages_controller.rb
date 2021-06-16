class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:intro, :home]
  def intro
  end

  def home
  end

  def dashboard
    @oeuvres = Oeuvre.all
  end
end
