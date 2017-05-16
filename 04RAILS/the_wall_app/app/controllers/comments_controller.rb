class CommentsController < ApplicationController
	# http_basic_authenticate_with name: "tom", password "1234", only: [:destroy]
	def create
		# fail
		@post = Post.find(params[:post_id])
		@user = User.find(session[:user]['id'])
		@comment = @post.comments.create(body:comment_params[:body], post:@post, user:@user)
		redirect_to post_path(@post)
	end

	def destroy
		@post = Post.find(params[:post_id])
		@comment = @post.comments.find(params[:id])
		@comment.destroy
		redirect_to post_path(@post)
	end

	def show
		@test = Comment.joins(:user).select('comments.body, users.email').where("post_id = ?", params[:id])
	end

	private
		def comment_params
			params.require(:comment).permit(:username, :body)
		end
end
