class OeuvresController < ApplicationController

  def index
    @oeuvres = Oeuvre.all.includes(photo_attachment: :blob)
  end

  def new
    @oeuvre = Oeuvre.new
  end

  def create
    @oeuvre = Oeuvre.new(oeuvre_params)
      if is_anna? && @oeuvre.save
        redirect_to dashboard_path
      else
        flash.now[:error] = @oeuvre.errors
        render :new
      end
  end

  def edit
    @oeuvre = Oeuvre.find(params[:id])
  end

  def update
    @oeuvre = Oeuvre.find(params[:id])
    @oeuvre.update(oeuvre_params)
    redirect_to dashboard_path
  end

  def destroy
    @oeuvre = Oeuvre.find(params[:id])
    @oeuvre.delete
    redirect_to dashboard_path, notice: "#{@oeuvre.nom} a été suprimée"
  end

  private

  def oeuvre_params
    params.require(:oeuvre).permit(:nom, :dimensions, :prix, :categorie, :disponible, :photo)
  end

  def is_anna?
    current_user.email == "merimee.anna@orange.fr"
  end
end
