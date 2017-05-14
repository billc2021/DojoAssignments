In posts_controller.rb

class PostsController < ApplicationController
	def index
	end

	def new
	end

	def show
		@post = Post.find(params[:id])
	end

	def create
		@post = Post.new(post_params)
		@post.save
		redirect_to @post
	end

	private
		def post_params
			params.require(:post).pemit(:title, :body)
		end
end
