def guess_number(guess)
    number = 25
    if guess == number
        puts "You got it"
    elsif guess > number
        puts "Your guess was too high"
    elsif guess < number
        puts "Your guess was too low"
    end
end

guess_number(200)