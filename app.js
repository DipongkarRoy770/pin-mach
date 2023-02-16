//2nd step:getPin funtion use kore :
function getPin(){
 const pin = genaratePin() ;
 const pinString = pin + '' ;
 if(pinString.length === 4){
  return pin ;
 }
 else{
  return getPin() ;
 }
}
//1step:funtion use kore random number ber korci:
function genaratePin(){
  const random = Math.round(Math.random()* 10000)
  return random ;
}
//3step:btn diye kaj kore funtion k call korte hbe random number ber korte hbe.
document.getElementById('generate-btn').addEventListener('click',function(){
  const pin = getPin()
  //input k value hisabe dekate hbe :
  const input = document.getElementById('input-pin');
  input.value = pin ;
})

//calculator id k diye kaj korbo del & clear diya condition diya kaj korbo .
document.getElementById('calculator').addEventListener('click',function(event){
  const number = event.target.innerText ;
  const typeNumberField = document.getElementById('input-field');
  const previousTypeNumber =typeNumberField.value ;
  //input field add kora:
  if(isNaN(number)){
    if( number === 'Clear'){
    typeNumberField.value = '' ;
    }
    else if (number === 'Del'){
      const digits = previousTypeNumber.split('') ;
      //console.log(digits)
      digits.pop() ;
      const remingingDigits = digits.join('');
       typeNumberField.value = remingingDigits ;
      
    }
  }
  
  else{
 const newTypeNumber = previousTypeNumber + number ;

  typeNumberField.value = newTypeNumber;
  }
})
//4step: 2 ta input mach korte hole conditon use easy kaj korte hbe.
document.getElementById('submit-btm').addEventListener('click',function(){
  // console.log('btn clicked')

  const inputPin = document.getElementById('input-pin');
  const inputPinUser =inputPin.value ;

  const input = document.getElementById('input-field') ;
  const userInput = input.value ;


  
  const success = document.getElementById('success')
  const disabed = document.getElementById('disabed')

  if(userInput === inputPinUser){
    
    success. style.display = 'block' ;
    disabed.style.display = 'none';
  }

  else{
    
    disabed.style.display = 'block'
    success.style.display = 'none';
  }  
})
