const check=document.querySelector('#checkbox');
const css=document.querySelectorAll('link')[3];

check.addEventListener('click',()=>{
   if(check.checked==true){
       console.log(true);
       css.setAttribute("href","light-style.css");
   }else{
    console.log(false);
    css.setAttribute("href","style.css");
   }
});