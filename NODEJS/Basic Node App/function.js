// Functions 


// Example 1
function add (a , b ){
    return a + b
}
const sumresult = add(2,3)
console.log(sumresult);


//Example 2
const minus = function(x , y){
    return x -y ;
}
const minusresult =minus(5,3)
console.log(minusresult);


//Example 3
let sum = (m,n) => { return m + n}
let total = sum(8,2)
console.log(total);


//  Example 4 
let sub = (p,q) => p -q 
let subtotal = sub(8,2)
console.log(subtotal);

// Example 5 
(function(){
    console.log('Sayak');
}) 
();



// CALL BACK FUNCTION 

function callback(){ 
    console.log('Result is Announced');   
}

const addition = function(a,b,callback){
    var new_result = a + b;
    console.log(`Addition Result is ${new_result} `);
    callback()    
}

addition(5,6,callback);


// Call Back another approach

const substraction = function(s,r ,callbaack){
    let new_total= s - r ;
    console.log(`Substraction Result is ${new_total}`);
    callbaack();
}

//  
substraction(8, 2 ,function(){
    console.log('New Result Announced');
});

//

substraction(8,3 ,() => console.log('Latest Updated result')
);
