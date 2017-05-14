# /////////////////
# POSTS
# /////////////////
class PostsController < ApplicationController
	http_basic_authenticate_with name: "tom", password "1234", except: [:index, :show]

	# ///////////
	# //INDEX
	# ///////////
	def index
		@posts = Post.all
	end

	# ///////////
	# //NEW
	# ///////////
	def new
		@post = Post.new
	end
	def create
		# render plain: params[:post].inspect
		@post = Post.new(post_params)
		if(@post.save)
			redirect_to @post
		else
			render 'new'
		end
	end

	# ///////////
	# //SHOW
	# ///////////
	def show
		@post = Post.find(params[:id])
	end
	
	# ///////////
	# //EDIT
	# ///////////
	def edit
		@post = Post.find(params[:id])
	end
	
	# ///////////
	# //UPDATE
	# ///////////
	def update
		@post = Post.find(params[:id])
		if(@post.update(post_params))
			redirect_to @post
		else
			render 'edit'
		end
	end
	
	# ///////////
	# //DELETE
	# ///////////
	def destroy
		@post = Post.find(params[:id])
		@post.destroy

		redirect_to posts_path
	end


	private
		def post_params
			params.require(:post).permit(:title, :body)
		end
end
# /////////////////
# /////////////////


# /////////////////
# COMMENTS Controller
# /////////////////
class CommentsController < ApplicationController
	http_basic_authenticate_with name: "tom", password "1234", only: [:destroy]
	
	# ///////////
	# //CREATE
	# ///////////
	def create
		@post = Post.find(params[:post_id])
		@comment = @post.comments.create(comment_params)
		redirect_to post_path(@post)
	end
	
	# ///////////
	# //DELETE
	# ///////////
	def destroy
		@post = Post.find(params[:post_id])
		@comment = @post.comments.find(params[:id])
		@comment.destroy
		redirect_to post_path(@post)
	end
	private
		def comment_params
			params.require(:comment).permit(:username, :body)
		end
end