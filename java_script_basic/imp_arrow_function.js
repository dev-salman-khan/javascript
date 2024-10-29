const user = {
    username : "Md Salman Khan",
    price : 999,
    welcomeMessage : function(){
        console.log ( ` ${this.username} Welcome To pLaylist OF Javascript Price Of ${this.price}`)

    }
} 
user.welcomeMessage();
user.username = "Mohd Salman Khan";
console.log("++++++++++++++++++++=After The Username Change By Variable User+++++++++++++++++")
user.welcomeMessage();
/////////////////// Explisit Return ////////////////
// This Way We Use Less
// const arrow_data = (num1 , num2)=>{
//     return num1 + num2
// }
// Use Arrow Function LIke It 
/////////////////// implysit Return ////////////////
const aroow_fun = (num1, num2) => ( num1 + num2 )
console.log(aroow_fun(22,300050))
