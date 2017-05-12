# new instance of the Picture model. Take note of the imageable_id and imageable_type columns
Picture.new
=> #<Picture id: nil, imageable_id: nil, imageable_type: nil, created_at: nil, updated_at: nil> 
# let's create a couple of employees and products so that we can add pictures to them
Employee.create(first_name: "John", last_name: "Doe")
Employee.create(first_name: "Jane", last_name: "Doe")
Product.create(name: "Pillow")
Product.create(name: "Sofa")
# let's create a some pictures for the employees and products we just created. There are a couple of ways to do this.
# first example:
Picture.create(imageable_id: 1, imageable_type: "Employee")
Picture.create(imageable_id: 1, imageable_type: "Product")
# second example:
Picture.create(imageable: Employee.second)
Picture.create(imageable: Product.second)
# now to retrieve the pictures of any employee or products we can do the following:
pics1 = Employee.first.pictures
pics2 = Employee.second.pictures
pics3 = Product.first.pictures
pics4 = Product.second.pictures