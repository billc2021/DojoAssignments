################
# PART I
################
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def names(dict):
    for data in dict:
        print data['first_name'] + " " + data['last_name']

names(students)

################
# PART II
################
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def names2(dict):
    count = 1
    for keys, data in dict.items():
        print keys.title()
        for value in data:
            print "{} - {} {} - {}".format(count, value['first_name'], value['last_name'], len(value['first_name'] + value['last_name']) )
            count += 1
        

names2(users)