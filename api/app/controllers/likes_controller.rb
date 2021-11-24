class LikesController < ApplicationController
  def create
    Like.create(user_id: current_user.id, product_id: params[:id])
    render json: { status: 200 }
  end

  def destroy
    p 'params', params[:id]
    Like.find_by(user_id: current_user.id, product_id: params[:id]).destroy
    render json: { status: 200 }
  end
end
