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

function genaratePin(){
  const random = Math.round(Math.random()* 10000)
  return random ;
}
document.getElementById('generate-btn').addEventListener('click',function(){
  const pin = getPin()
  //input k value hisabe dekate hbe :
  const input = document.getElementById('input-pin');
  input.value = pin ;
})

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
