 const buttons = document.querySelectorAll('.button')
//  console.log(buttons);
const body = document.querySelector("body")



  buttons.forEach(function (buttons) {
    console.log(buttons);
    buttons.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='brown'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='pink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='orange'){
            body.style.backgroundColor = e.target.id;
        }
    })
  });