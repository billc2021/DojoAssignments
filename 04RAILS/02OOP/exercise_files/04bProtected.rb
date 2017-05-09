class Mammal
  # previous code removed for brevity
  
  def calling_speak
    speak
  end
  
  protected
    def speak
      puts "I am a protected method"
    end
end
class Human < Mammal
  # previous code removed for brevity
  
  def explicitily_speak
    self.speak
  end
  
  def implicitily_speak
    speak
  end
end
mammal = Mammal.new
mammal.speak # => protected method `speak' called for #<Mammal:0x007fa5438183d8> (NoMethodError)
mammal.calling_speak # => I am a protected method
person = Human.new
person.speak # => protected method `speak' called for #<Human:0x007fedfe824710> (NoMethodError)
person.explicitily_speak # => I am a protected method
person.implicitily_speak # => I am a protected method