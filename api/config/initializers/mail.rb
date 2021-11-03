ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
  address: 'smtp.gmail.com',
  domain: 'gmail.com',
  port: 587,
  user_name: ENV['WELCOME_MAILER_ADDRESS'],
  password: ENV['WELCOME_MAILER_PASSWORD'],
  authentication: 'plain',
  enable_starttls_auto: true
}
