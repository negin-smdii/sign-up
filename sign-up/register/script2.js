
let content=document.querySelector('.content');
let submitBtn=document.querySelector('.submit-btn');
let userEmail=localStorage.getItem("userEmail");
content.insertAdjacentHTML('afterbegin',`A confirmation email has been sent to <span style="font-weight:bold;">${userEmail}</span>. Please open it and click the button inside to confirm your subscription.`)

submitBtn.addEventListener('click',function(){
    history.back();

})
