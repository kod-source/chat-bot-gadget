class ContactsController < ApplicationController
  def contact_send_mail
    NotificationMailer.contact_mail(params['mail_request']).deliver_now
    render json: { status: 200 }
  end
end
