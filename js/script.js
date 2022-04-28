
function backspace(){
    let inputValue = form1.screen.value;
    form1.screen.value=inputValue.substring(0, inputValue.length-1);
    console.log(inputValue); 
   let para = document.querySelector("p");
   para.addEventListener('click', ()=>{
    console.log();
   })

    }
  






