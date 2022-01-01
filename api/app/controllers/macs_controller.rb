class MacsController < ApplicationController
  def index
    macs = Mac.all

    render json: macs
  end

  def show
    product = Product.includes(:mac).find(params[:id])

    render json: product.mac
  end
end
