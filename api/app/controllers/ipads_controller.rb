class IpadsController < ApplicationController
  def index
    ipads = Ipad.all

    render json: ipads
  end

  def show
    product = Product.includes(:ipad).find(params[:id])

    render json: product.ipad
  end

  def search
    products = Product.includes(:ipad).where(most_low_price: ...params[:price])
    ipad_ids = products.map{ |p| p.ipad.id }
    ipads = search_type_c(
      search_many_colors(
        search_clean_display(
          search_perform_camera(
            search_chip(
              search_size(Ipad.includes(:product).where(id: ipad_ids))
            )
          )
        )
      )
    )

    render json: ipads.map{ |ipad| ipad.product }
  end

  private

  def search_size(ipads)
    return ipads unless params[:min_size] && params[:max_size]

    ipads.where(screen_size: params[:min_size] .. params[:max_size])
  end

  def search_chip(ipads)
    return ipads unless params[:chips]

    ipads.where(chip: params[:chips])
  end

  def search_perform_camera(ipads)
    return ipads unless params[:high_perform_camera]

    ipads.where(high_perform_camera: params[:high_perform_camera])
  end

  def search_clean_display(ipads)
    return ipads unless params[:clean_display]

    ipads.where(clean_display: params[:clean_display])
  end

  def search_many_colors(ipads)
    return ipads unless params[:many_colors]

    ipads.where(many_colors: params[:many_colors])
  end

  def search_type_c(ipads)
    return ipads unless params[:type_c]

    ipads.where(type_c: params[:type_c])
  end
end
