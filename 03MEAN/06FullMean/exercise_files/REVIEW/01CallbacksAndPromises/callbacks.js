
// Callback Example

/* Failed Example */
function buyDonut(){
    orderDonut();
    console.log('pay');
    console.log('walk out door');
}
/* function that gets a donut */
function orderDonut(){
    var x = setTimeout(function () {
        console.log('donut on counter');
    }, 10);
}
buyDonut();


/* Callback Example */
    function buyDonut2(){
    orderDonut2(function whatToDoAfterDonutOnCounter(){
        console.log('pay');
        console.log('walk out door');
    });
}
/* function that gets a donut */
function orderDonut2(callback){
    var x = setTimeout(function () {
        console.log('donut is on counter');
        callback();
    }, 10);
}
buyDonut2();
    
