class IpadsController < ApplicationController
  def index
    ipads = Ipad.all

    render json: ipads
  end

  def show
    product = Product.includes(:ipad).find(params[:id])

    render json: product.ipad
  end
end
