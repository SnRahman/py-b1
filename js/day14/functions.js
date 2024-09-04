// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')
// console.log('Hello!!!')



// function name() {
// }

function hello(){
    console.log('Hello!!!')
}


// hello();
// hello();
// hello();
// hello();
// hello();
// hello();
// hello();


// function with parameters

function display(text){
    console.log(text)
}

display('hello');
display('World');
display('ahmad');


// function with multi parameters
function sum(a,b,c){
    var result = a + b + c
    console.log(result)
}
sum(12,18,40);


// example
function concat(a,b,c,d){
    console.log(a + b + c + d)
}


concat(23,23,'hello',54)

// check wheither a number is multiplier of 2 or not


function multiplier_of_2(number){

    if (number % 2 == 0){
        console.log('Multiplier of 2')
    }else{
        console.log('Not a Multiplier of 2')
    }

}


multiplier_of_2(646563)


function check_multiplier(num, mul){
    
    if (num % mul == 0){
        console.log(num + ' Multiplier of ' + mul)
    }else{
        console.log(num + ' is not Multiplier of ' + mul)
    }
}

check_multiplier(64655657,9)
check_multiplier(64657,4)


// OPTIONAL PARAMETERS

// function circle_radius(r){
//     var pie = 3.14
//     var radius = pie * (r**2)
//     console.log(radius)
// }

// circle_radius(12,3.14)
// circle_radius(12)


// function circle_radius(r, pie = 3.14){
    function circle_radius(r, pie = 3.14){
    var radius = pie * (r**2)
    console.log(radius)
}

circle_radius(45)
circle_radius(45,3.1475785757)


// parameters calling by name

function mul(a,b,c,d){
    console.log(a * b * c * d)
}


mul(10,25,30,10)
mul(a=10, b=25, c=30, d=10)
mul(d=10, a=20, c=10, b= 10)
mul(10, b =10,d= 45,c=10)

































