class AuthorsController < ApplicationController

	def index
		@authors = Author.all
	end

	def new
		@author = Author.new
	end

	def create
		if @author = Author.create(author_params)
			redirect_to(authors_path)
		else
			@author
			render('new')
		end
	end

	def edit
		@author = Author.find(params[:id])
	end

	def update
		@author = Author.find(params[:id])
		if @author.update_attributes(author_params)
			redirect_to(authors_path)
		else
			@author
			render('edit')
		end
	end

	private
	def author_params
		params.require(:author).permit(:name)
	end
end
