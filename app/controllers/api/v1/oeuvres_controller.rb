class Api::V1::OeuvresController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    @oeuvres = Oeuvre.all
  end
end
