class LikesController < ApplicationController
  def create
    Like.create(user_id: current_user.id, product_id: params[:id])
    # redirect_to posts_path
    render json: { status: 200 }
  end

  def destroy
    Like.find_by(user_id: current_user.id, post_id: params[:id]).destroy
    # redirect_to posts_path
    render json: { status: 200 }
  end
end
