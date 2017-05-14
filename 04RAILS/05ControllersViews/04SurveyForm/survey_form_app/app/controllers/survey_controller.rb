class SurveyController < ApplicationController
	def index
		session[:views] ||= 0
	end

	def process_form
		session[:survey] = params[:survey]
		session[:views] += 1

		flash[:message] = "Thanks for submitting this form! You have submitted this for #{session[:views]} times now."

		redirect_to '/results'
	end

	def result
		@survey = session[:survey]
	end
end
