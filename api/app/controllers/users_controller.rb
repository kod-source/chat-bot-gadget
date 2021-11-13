class UsersController < ApplicationController
  def update
    user = User.find(params[:id])
    if params[:avatar].class == String
      user.update! params.permit(:name, :email, :memo)
    else
      user.update! update_params
    end

    render json: user
  end

  private
  def update_params
    params.permit(:name, :email, :memo, :avatar)
  end
end
