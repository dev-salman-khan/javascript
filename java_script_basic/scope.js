let a= 100
// const b=20
// var c = 30


// What Is Scope 
// {}  This Is The Scope
if(true){
    let a= 100
    const b=20

console.log("Inner Scope In The If Condition",a);
console.log("Inner Scope In The If Condition Of B",b);
}
console.log(a)
// console.log(b)
// console.log(c)

// This Is None As Closer 
// nested Funtion When We Use This Type Of funtion We Have To Call both Of The Function For Excutions
function one(){
    const name_one = "Salman";
    function two(){
        const name_two ="Khan"
        console.log(name_one);
        // console.log(name_two);
        
    }
    two()
}
one()
if(true){
    const data = "Salman Khan";
    if(data == "Salman Khan"){
        const add = " Is Full Stack Developer";
        console.log(data + add)
    }
    // console.log(add)

}
// console.log(data + add)

// ++++++++++++++++++++++++++++++++ INRESTING TOPICS +++++++++++++++++++++//
// we Can Excute Funtion Any Where OR before the Function Or After  It Will Excute 
console.log(only_function(5))
function only_function(hi){
    return hi + 1
}

// console.log(varfun(20)); it Will Be Error When variable Is declare Frist
const varfun = function (va_da){
    return va_da + 1
    
}
console.log(varfun(20)); // when variable is declare After it will Excution
