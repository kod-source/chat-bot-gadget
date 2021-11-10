class RegistrationsController < ApplicationController
    def signup
        @user = User.ew(ristrations_params)
        @user = User.new(registrations_params)
        if @user.save
            login!
            render json: { status: :created, user: @user }
        else
            render json: { status: 500 }
        end
    end

    private

    def registrations_params
        params.permit(:name, :avatar, :email, :password, :password_confirmation)
    end
end