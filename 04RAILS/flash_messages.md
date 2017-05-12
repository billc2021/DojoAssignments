## Flash Messages

    Example:

        class UsersController < ApplicationController
          def index
            if errors?
              flash[:error] = "You have errors"
              redirect_to '/users/' #pathing will be explained later
            else
              flash[:success] = "You did it!"
              redirect_to '/users/'
            end
          end
        end

    More Examples:
    
        redirect_to root_url, flash: { referral_code: 1234 }
        redirect_to root_url, notice: "You have successfully logged out."
        redirect_to root_url, alert: "You're stuck here!"
