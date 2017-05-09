class Mammal
  # previous code removed for brevity
  
  def calling_cry
    cry
  end
  
  private
    def cry
      puts "Sniff sniff..."
    end
end
class Human < Mammal
  # previous code removed for brevity
  
  def explicitily_cry
    self.cry
  end
  
  def implicitily_cry
    cry
  end
end
mammal = Mammal.new
mammal.calling_cry # => Sniff sniff...
mammal.cry # => private method `cry' called for #<Mammal:0x007fd9830de5f8> (NoMethodError)
person = Human.new
person.cry # => private method `cry' called for #<Human:0x007f8f298de248> (NoMethodError)
person.explicitily_cry # => `explicitily_cry': private method `cry' called for #<Human:0x007f87a30bf450> (NoMethodError)
person. implicitily_cry # => Sniff sniff...