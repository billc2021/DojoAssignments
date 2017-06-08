class BooksController < ApplicationController
	before_action :set_author

	def index
		@books = Book.all
	end

	def show
		
	end

	def new
		@authors = Author.all
		@book = Book.new(:author_id => @author.id)
	end

	def create
		@book = Book.new(book_params)
		@book.author = @author
		if @book.save
			flash[:notice] = "Book successfully created"
			redirect_to(author_books_path(:author_id => @author.id))
		else
			flash[:notice] = "Error creating book"
			render('new')	
		end
	end

	private
	def book_params
		params.require(:book).permit(:title, :author_id, :rating)
	end

	def set_author
		@author = Author.find(params[:author_id])
	end
end
