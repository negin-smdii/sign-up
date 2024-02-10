let submitBtn=document.querySelector('.submit-btn');
let emailInput=document.getElementById('email-input');
let errorMessage=document.querySelector('.message');
let emailRegEx= /.+@.+.com/;
let emailValue;

emailInput.addEventListener('blur',function(){

    let validation=emailRegEx.test(emailInput.value);
    
    if(validation==true)
    {
      localStorage.setItem("userEmail",emailInput.value);
    }
    else{

        errorMessage.innerHTML='Valid email required';
        errorMessage.style.cssText='color:#f44336;font-weight:700;';
        emailInput.style.cssText='background-color:#fbe9e7;border-color:#f44336;color:#f44336;';
    }
});


submitBtn.addEventListener('click',function(){
    window.location.href='file:///C:/Users/Negin/Desktop/sign-up/register/register.html';
})