class ImageSwipersController < ApplicationController
  def index
    return list_by_ipad if params[:ipad_id].present?
    return list_by_iphone if params[:iphone_id].present?
    return list_by_mac if params[:mac_id].present?

    render json: ImageSwiper.all
  end

  private

  def list_by_ipad
    ipad = Ipad.find(params[:ipad_id])
    render json: ipad.image_swipers
  end

  def list_by_iphone
    iphone = Iphone.find(params[:iphone_id])
    render json: iphone.image_swipers
  end

  def list_by_mac
    mac = Mac.find(params[:mac_id])
    render json: mac.image_swipers
  end
end
