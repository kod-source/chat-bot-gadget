class LikesController < ApplicationController
  def index
    likes = Like.where(user_id: current_user.id)

    render json: likes
  end

  def create
    Like.create(user_id: current_user.id, product_id: params[:id])
    render json: { status: 200 }
  end

  def destroy
    Like.find_by(user_id: current_user.id, product_id: params[:id]).destroy
    render json: { status: 200 }
  end
end
