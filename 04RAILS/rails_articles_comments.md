01. Create a new PROJECT:
rails new blog


02. CONTROLLER:

create a new controller named Welcome
rails g controller Welcome index

========================
03. ROUTES
========================
declare a standard REST route set
resources :articles

re-define root route
root ‘welcome#index’

default GET route
get 'welcome/index'
	
to see your routes
rails routes

========================
04. MODELS
========================
create a model named Article
rails g model Article title:string text:text
rake db:migrate


VALIDATION

in the app/model/article.rb file
validates :title, presence: true, length: { minimum: 5 }

rails automatically wraps fields that contain an error with a div with the class field_with_errors that you can define a css rule for.

========================
05. VIEWS
========================
form_for 
<%= form_for :article do |f| %>
	<p>
		<%= f.label :text %>
		<%= f.text_field :text %>
	</p>
	<p>
		<%= f.label :text %>
		<%= f.text_area :text %>
	</p>
	<p>
		<%= f.submit %>
	</p>
<% end %>

when you call form_for you pass it an identifying object (form_for :article)

to correct the forms action attribute change the first line to

	<%= form_for :article, url: articles_path do |f| %>

the articles_path helper tell rails to point the form to the uri pattern associated with the article prefix


ADDING LINKS
the link_to method creates a hyperlink based on text to display and where to go.
you don’t need to specify the :controller option if you are linking to an action in the same controller

<%= link_to ‘My Blog’, controller: ‘articles’ %>
<%= link_to ‘New Article’, new_article_path %>
<%= link_to ‘Back’, articles_path (or :back) %> 
<%= link_to 'Edit', edit_article_path(@article) %>


PARTIALS
create an html.erb file that starts with an _ in the appropriate views folders
_form.html.erb

then in the .html.erb files that will render it place 
<%= render ‘form’ %>

========================
06. CRUD
========================
the standard CRUD actions and their order:
	index, show, new, edit, create, update, destroy

CREATE
def create
	@article = Article.new(allowed_params)
	
	@article.save
	redirect_to @article (this line redirects to the show action)
end

private
	def allowed_params
		params.required(:article).permit(:title, :text)
	end
end


SHOW
def show
	@article = Article.find(params[:id])
end


UPDATE

Need edit to display the form to make 

def edit
	@article = Article.find(params[:id])
end
 
def update
	@article = Article.find(params[:id])

	if @article.update(article_params)
		redirect_to @article
	else
		render ‘edit’
	end
end


DELETE
def destroy
	@article = Article.find(params[:id])

	@article.destroy
end

use the following link in the html form
<%= link_to 'Destroy', article_path(article),  method: :delete, data: { confirm: 'Are you sure?' } %>





========================
07. ADDING A SECOND MODEL
======================== 

create the 2nd model
rails g model Comment commenter:string body:text article:references

in the app/models/article.rb add
has_many :comments

in app/config/routes.rb add
	resources :articles do
		resources :comments
	end

generate a controller
rails g controller Comments


CREATE a comment
class CommentsController < ApplicationController
  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    redirect_to article_path(@article)
  end
 
  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end


DELETE a comment
in the app/controllers/comments_controller.rb file add

def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
end


in the _comment.html.erb partial file add

<p>
  <%= link_to 'Destroy Comment', [comment.article, comment],
               method: :delete,
               data: { confirm: 'Are you sure?' } %>
</p>


deleting associated objects

class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  validates :title, presence: true,
                    length: { minimum: 5 }
end


========================
08. SECURITY
======================== 
in app/controllers/articles_controllers.rb add

http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]


in app/controllers/comments_controllers.rb add

http_basic_authenticate_with name: "dhh", password: "secret", only: :destroy