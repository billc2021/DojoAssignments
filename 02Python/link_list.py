class Node: 
  def __init__(self, cargo=None, next=None): 
    self.cargo = cargo 
    self.next  = next 

  def __str__(self): 
    return str(self.cargo)

node = Node("test")

node1 = node 

print(node1 is node)

node1.cargo = "New String"

print(node)