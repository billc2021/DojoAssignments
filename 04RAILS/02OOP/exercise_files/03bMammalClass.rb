class Mammal
  def initialize
    puts "I am alive"
  end
  def breath  
    puts "Inhale and exhale"
  end
  
  def who_am_i
    # printing the current object
    puts self
  end
end
my_mammal = Mammal.new # => "I am alive"
my_mammal.who_am_i # => #<Mammal:0x007f9e86025dd8>
my_mammal.who_am_i.breath # => undefined method `breath' for nil:NilClass (NoMethodError)