class SessionsController < ApplicationController
    def login
        @user = User.find_by(email: session_params[:email])
        if @user && @user.authenticate(session_params[:password])
            login!
            render json: { logged_in: true, user: @user }
        else
            render json: { logged_in: false }
        end
    end

    def logout
        reset_session
        render json: { status: 200, logged_out: true }
    end

    def logged_in?
        if current_user
            render json: { logged_in: true, user: current_user }
        else
            render json: { logged_in: false, message: 'ユーザーが存在しません' }
        end
    end

    def destroy
        current_user.destroy!
        reset_session

        render json: { status: 200 }
    end

    private

    def session_params
        params.require(:user).permit(:username, :name, :avatar, :email, :password)
    end
end