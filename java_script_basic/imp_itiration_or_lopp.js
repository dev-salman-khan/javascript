for (let index = 0; index < 10; index++) {
    const element = index;
   
    if(element === 6){
        console.log("till 6 you Has Fetch The Foor loop  Has excuted Till this number khow")
    }
    console.log(element)
    
}
for (let i = 0; i <  10 ; i++) {
    console.log(`Outer Loop:- ${i}`);
    for (let j = 0; j < 10  ; j++) {
       
    // console.log(`inner Loop:- ${j} and inner Loop ${i}`);
    console.log(i +'*'+ j + '=' + i * j)
        
        
    }
    
}