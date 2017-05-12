class HelloController < ApplicationController
  def hello
    render text: 'Hello CodingDojo!'
  end

  def say
    render text: 'Saying Hello'
  end

  def joe
    render text: "Saying Hello Joe!"
  end

  def micheal
    redirect_to 'joe'
  end


  # def name
  #   @name = params[:name]
  #   render text: "Saying Hello #{@name}!"
  # end

end
