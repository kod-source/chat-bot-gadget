class NotificationMailer < ApplicationMailer
  default to: 'gadgetbot.4521@gmail.com'

  def contact_mail(mail_request)
    @name = mail_request['name']
    @email = mail_request['email']
    @text = mail_request['text']
    mail(
      to: 'gadgetbot.4521@gmail.com',
      subject: mail_request['category']
    )
  end
end
