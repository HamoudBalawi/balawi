const links = document.querySelectorAll(".nav-link");

links.forEach((items)=>{
   items.addEventListener("click",()=>
   {

       let el = document.getElementById(items.getAttribute("data-link"));
       el.scrollIntoView({behavior:"smooth", block:"start"})
   })
})