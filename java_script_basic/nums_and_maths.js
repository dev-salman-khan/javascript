   
    const value = 500;
    const value_to_number = new Number(4500)
    console.log(value_to_number);
    console.log(value)
    // converting Number to String 
    console.log(value_to_number.toString().length)
    // this Is Used mainly Used For E Com Websites in Payment gateway
    console.log(value_to_number.toFixed(3))

    const Price_number = new Number(4505.999)
    console.log(Price_number.toPrecision(4))
    // Show Values In Indian rupees With Commas 
    const Indian_amout = 500000000
    console.log(Indian_amout.toLocaleString('en-IN'))
    // ================== Maths Operation ======================== //
    console.log(Math)
    console.log(Math.abs(-4))
    console.log(Math.round(4.6))
    console.log(Math.ceil(4.6))
    console.log(Math.trunc(4.6000))
    //  maths calculation with max min random 
    console.log(Math.random())
    console.log((Math.random()*20) + 2)
    console.log(Math.floor(Math.random()*20) + 2)
    const min = 10
    const max = 20
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
