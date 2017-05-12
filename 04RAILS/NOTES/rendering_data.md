## Rending Data
	
### JSON
	def index
		@products = Product.all
		render json: @products
	end


### Text
	def create
		@product = Product.create(name: params[:name], description: params[:description])
		render text: 'Successfully created a new product'
	end