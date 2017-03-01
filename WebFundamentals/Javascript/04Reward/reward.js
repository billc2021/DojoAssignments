var num = 1;
var total = 0;
for(var i = 1; i<=31; i++)
{
  console.log(num);
  total = num;
  num = num + num;
}
console.log("His total reward is $" + (total * 0.01) + " dollars.");