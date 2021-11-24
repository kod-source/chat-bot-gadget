class ProductsController < ApplicationController
  def like_products
    likes = Like.includes(:product).where(user_id: current_user.id)
    products = likes.map { |like| like.product }

    render json: products
  end
end
