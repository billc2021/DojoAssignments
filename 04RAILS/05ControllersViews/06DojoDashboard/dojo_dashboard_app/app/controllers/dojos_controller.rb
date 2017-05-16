class DojosController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @dojos = Dashboard.all
  end

  def new
    
  end

  def create
    @dojo = params[:dojo]
    Dashboard.create(post_params)
    redirect_to '/dojos/index'
  end

  def show
    @dojo = Dashboard.find(params[:id])
  end

  def edit
    @dojo = Dashboard.find(params[:id])
  end

  def update
    @dojo = params[:dojo]
    dojo = Dashboard.find(@dojo[:id])
    dojo.update(post_params)
    redirect_to '/dojos/index'
  end

  def delete
    dojo = Dashboard.find(params[:id])
    dojo.destroy
    redirect_to '/dojos/index'
  end

  private 
    def post_params
      params.require(:dojo).permit(:id, :branch, :state, :street, :city)
    end
end
