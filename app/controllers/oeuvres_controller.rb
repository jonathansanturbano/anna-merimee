class OeuvresController < ApplicationController

  def new
    @oeuvre = Oeuvre.new
  end

  def create
    @oeuvre = Oeuvre.new(oeuvre_params)
    if @oeuvre.save
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
    redirect_to dashboard_path
  end

  private

  def oeuvre_params
    params.require(:oeuvre).permit(:nom, :dimensions, :prix, :categorie, :disponible, :photo)
  end
end
