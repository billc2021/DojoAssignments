class TimesController < ApplicationController
	def index
		if session[:count].nil?
			session[:count] = 1
		else
			session[:count] += 1
		end
		render text: "You have been here #{session[:count]} times"
	end

	def reset
		reset_session
		render text: 'Destroyed the session!'
	end
end
