class MacsController < ApplicationController
  def index
    macs = Mac.all

    render json: macs
  end

  def show
    product = Product.includes(:mac).find(params[:id])

    render json: product.mac
  end

  def search
    mac_product_ids = Mac.all.map{ |m| m.product_id }
    products = Product.where(id: mac_product_ids, most_low_price: ...params[:price])
    mac_ids = products.map{ |p| p.mac.id }
    macs = search_max_memory(
            search_wi_fi_fix(
              search_notch(
                search_sd_card_slot(
                  search_thunderbolt_count(
                    search_chips(
                      search_fan_existence(
                        search_size(
                          search_apple_silicon(
                            Mac.includes(:product).where(id: mac_ids)
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )

    render json: macs.map{ |mac| mac.product }
  end

  private

  def search_apple_silicon(mac)
    return mac unless params[:apple_silicon]

    mac.where(apple_silicon: params[:apple_silicon])
  end

  def search_size(mac)
    return mac unless params[:min_size]

    mac.where(size: params[:min_size] .. params[:max_size])
  end

  def search_fan_existence(mac)
    return mac unless params[:fan_existence]

    mac.where(fan_existence: params[:fan_existence])
  end

  def search_chips(mac)
    return mac unless params[:chips]

    first_chip = params[:chips].first
    params[:chips].drop(1).inject(
      mac.where("chips LIKE ?", "%#{first_chip}%")
    ) {
      |m, chip| m.or(mac.where("chips LIKE ?", "%#{chip}%")) 
    }
  end

  def search_thunderbolt_count(mac)
    return mac unless params[:thunderbolt_count]

    mac.where(thunderbolt_count: params[:thunderbolt_count]..)
  end

  def search_sd_card_slot(mac)
    return mac unless params[:sd_card_slot]

    mac.where(sd_card_slot: params[:sd_card_slot])
  end

  def search_notch(mac)
    return mac unless params[:notch]

    mac.where(notch: params[:notch])
  end

  def search_wi_fi_fix(mac)
    return mac unless params[:wi_fi_six]

    mac.where(wi_fi_six: params[:wi_fi_six])
  end

  def search_max_memory(mac)
    return mac unless params[:max_memory]

    mac.where(max_memory: params[:max_memory]..)
  end
end
