## Sessions

No need to start the session; it is there by default

    Example:

        class UsersController < ApplicationController
          def create
            #adds the value in params[:id] to the :id key in session
            session[:id] = params[:id] #we will talk about params in a bit
          end
          def log_out
            #sets the session[:id] to nil, overwriting the previous value
            session[:id] = nil
          end
        end

    If you need to clear a whole session, you can use  session.clear (or: reset_session).
