function addtocart(...number){
return number
}
console.log(addtocart(200,2000,20,5665,654,645,546,))
// making Object Here And Fill Details For User 
const user_details_shooping ={
    username :"Md Salman Khan",
    phone_number : 7981007015 ,
    item_price :500,
    address_details : "Zooo Park Main Road Hyd Telangana India, 50064"
}
// making function With Object 
function user_data (data_object){
    console.log(`The Name OF User Is ${data_object.username} And Phone Number Is ${data_object.phone_number} The Price OF The Item Is ${data_object.item_price} And Address Of The Client Is ${data_object.address_details} Order In One Date Plz`)
}

user_data(user_details_shooping);