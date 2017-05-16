class UsersController < ApplicationController
    def login
        @user = User.new
   end

   def register
        @user = User.create(user_params)
        session[:user] = @user
        redirect_to '/posts'
    end

   def submit_login
        
   end

   def logout
        reset_session
    end


   private
        def user_params
            params.require(:user).permit(:email, :password)
        end       
end