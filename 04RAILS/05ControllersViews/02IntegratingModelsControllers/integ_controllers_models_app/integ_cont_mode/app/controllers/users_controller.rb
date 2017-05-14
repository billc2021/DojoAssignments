class UsersController < ApplicationController
  def new
  end

  def total
    total = User.all 
    @total = total.length
  end

  def users
    @users = User.all
  end

  def user 
    user = params[:id]
    @user = User.find(user)
  end

  def edit
    user = params[:id]
    @user = User.find(user)
  end

  def create
    User.create(name: params[:name])
    redirect_to '/users'
  end
end
