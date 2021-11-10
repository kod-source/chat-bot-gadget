class UsersController < ApplicationController
  def update
    user = User.find(params[:id])
    user.update! update_params

    render json: user
  end

  private
  def update_params
    params.permit(:name, :email, :memo, :avatar)
  end
end
