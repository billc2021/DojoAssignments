class RpgController < ApplicationController
  def index
    session[:gold] ||= 0
    session[:messages] ||= []
  end

  def process_farm
    # render text: 'Processing farm...'
    @gold = rand(10..20)
    repeated_steps
    redirect_to :root
  end

  def process_cave
    # render text: 'Processing cave...'
    @gold = rand(5..10)
    repeated_steps
    redirect_to :root
  end

  def process_house
    # render text: 'Processing house...'
    @gold = rand(2..5)
    repeated_steps
    redirect_to :root
  end

  def process_casino
    # render text: 'Processing casino...'
    @gold = rand(0..50)
    flip = rand(1..2)
    puts "\n\n\n\n\n\n"
    puts "Flip is #{flip}"
    if flip % 2 != 0
      @gold *= -1
      puts "Gold is #{@gold}"
      puts "\n\n\n\n\n\n"
    end
    repeated_steps
    redirect_to :root
  end

  def repeated_steps
    if @gold < 0
      outcome = "lost"
    else
      outcome = "earned"
    end
    @message = "You #{outcome} #{@gold} pieces of gold"
    session[:gold] += @gold
    session[:messages] << @message.to_str
  end

  def reset
    reset_session
    redirect_to :root
  end
end