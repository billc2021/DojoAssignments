function printStudents(arr){
    for(var i = 0; i < arr.length; i++){
        for(var name in arr[i])
        console.log(arr[i].first_name + " " +arr[i].last_name);
    }
}

var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

console.log(printStudents(students));