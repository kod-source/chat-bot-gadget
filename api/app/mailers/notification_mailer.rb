class NotificationMailer < ApplicationMailer
  default to: 'gadgetbot.4521@gmail.com'

  def contact_mail
    # @user = user
    mail(
      to: 'kod4185@gmail.com',
      subject: "お問合せです。"
    )
  end
end
