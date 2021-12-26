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
    ipads = search_thunderbolt(
              search_high_refresh_rate(
                search_dual_speaker(
                  search_center_frame(
                    search_face_id(
                      search_speaker_count(
                        search_five_g(
                          search_type_c(
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
                        )
                      )
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

  def search_five_g(ipads)
    return ipads unless params[:five_g]

    ipads.where(five_g: params[:five_g])
  end

  def search_speaker_count(ipads)
    return ipads unless params[:speaker_count]

    ipads.where(speaker_count: params[:speaker_count])
  end

  def search_face_id(ipads)
    return ipads unless params[:face_id]

    ipads.where(face_id: params[:face_id])
  end

  def search_center_frame(ipads)
    return ipads unless params[:center_frame]

    ipads.where(center_frame: params[:center_frame])
  end

  def search_dual_speaker(ipads)
    return ipads unless params[:dual_speaker]

    ipads.where(dual_speaker: params[:dual_speaker])
  end

  def search_high_refresh_rate(ipads)
    return ipads unless params[:high_refresh_rate]

    ipads.where(high_refresh_rate: params[:high_refresh_rate])
  end

  def search_thunderbolt(ipads)
    return ipads unless params[:thunderbolt]

    ipads.where(thunderbolt: params[:thunderbolt])
  end
end
