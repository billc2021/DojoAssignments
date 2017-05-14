## Passing Form Data

#### Pass the form data as a hash
    <form action='/products/' method='post'>
        <input type='text' name='product[name]' placeholder='name' />
        <input type='text' name='product[description]' placeholder='description' />
        <input type='submit' value='Create' />
    </form>


#### Read the for hashed form data
    def create
        @product = Product.create( params[:product] )

            #this redirect only applies for when the product was successfully created! You'll have to modify this  code with an if statement to RENDER the new view IF there are errors ELSE REDIRECT to the products view if there weren't errors.

        redirect_to '/products'
    end

#### To hide your form data from being changed make them private

    def create
      @product = Product.create( product_params )
      redirect_to '/products'
    end
    private
      def product_params
       params.require(:product).permit(:name, :description)
      end


#### Updating private form data

    def create
      @product = Product.create( product_params )
      redirect_to '/products'
    end
    def update
      @product = Product.update( product_params )
      redirect_to '/products'
    end
    private
      def product_params
       params.require(:product).permit(:name, :description)
      end
