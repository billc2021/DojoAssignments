var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
            for(var i = 0; i < x.length; i++){
                console.log(x[i]);
            }
            x.push(100);
            x.push(["hello", "world", "JavaScript is Fun"]);
            console.log(x);

            var sum = 0;
            for(var i = 0; i < 501; i++){
                 sum = sum + i;
            }
            console.log(sum);

            var max = 0;
            var array = [1, 5, 90, 25, -3, 0];
            for (var i = 0; i < array.length; i++){
                if (array[i] > max){
                    max = array[i]
                }
            }
            console.log(max);

            sum = 0;
            for (var i = 0; i < array.length; i++){
                sum = sum + array[i];
            }
            console.log(sum / array.length);

        var newNinja = {
            name: 'Jessica',
            profession: 'coder',
            favorite_language: 'JavaScript', //like that's even a question!
            dojo: 'Dallas'
        }

        for (key in newNinja){
            console.log(key + ", " + newNinja[key]);
        }
        