

var acc = document.getElementsByClassName("selects");
var abb=document.getElementsByClassName("activicon");
var commentcounter=document.getElementsByClassName("commentCounter");
var commentcounter2=document.getElementsByClassName("commentCounter2");
var commentCounter3=document.getElementsByClassName("commentCounter3");
var commentCounter4=document.getElementsByClassName("commentCounter4");
var commentCounter5=document.getElementsByClassName("commentCounter5");
var commentCounter6=document.getElementsByClassName("commentCounter6");





var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (i = 0; i < acc.length; i++) {
        var panell = acc[i].nextElementSibling;
        acc[i].classList.remove("active");
        panell.style.display = "none";
    }
    
    // for(i=0;i< abb.length;i++){
    //     abb[i].classList.add("activeback");
    // }
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
       this.classList.add("active");
     
    }
  },3000);
}

// for(i=0;i< commentcounter2.length; i++){
  
//    commentcounter2[i].addEventListener("click",function(){
//     for(let j=0;j<commentcounter2.length;j++)
//     {
//         commentcounter2[j].classList.remove("active");
//     }
//     this.classList.add("active");
    
// })
//    }
   for(i=0;i< commentcounter.length; i++){
  
    commentcounter[i].addEventListener("click",function(){
     for(let j=0;j<commentcounter.length;j++)
     {
         commentcounter[j].classList.remove("active");
     }
     this.classList.add("active");
     
 
    })


   }
for(i=0;i< commentcounter2.length; i++){
  
    commentcounter2[i].addEventListener("click",function(){
     for(let j=0;j<commentcounter2.length;j++)
     {
         commentcounter2[j].classList.remove("active");
     }
     this.classList.add("active");
     
 
    })
}
for(i=0;i< commentCounter3.length; i++){
  
    commentCounter3[i].addEventListener("click",function(){
     for(let j=0;j<commentCounter3.length;j++)
     {
         commentCounter3[j].classList.remove("active");
     }
     this.classList.add("active");
     
 
    })
}
for(i=0;i< commentCounter4.length; i++){
  
    commentCounter4[i].addEventListener("click",function(){
     for(let j=0;j<commentCounter4.length;j++)
     {
         commentCounter4[j].classList.remove("active");
     }
     this.classList.add("active");
     
 
    })
}
for(i=0;i< commentCounter5.length; i++){
  
    commentCounter5[i].addEventListener("click",function(){
     for(let j=0;j<commentCounter5.length;j++)
     {
         commentCounter5[j].classList.remove("active");
     }
     this.classList.add("active");
     
 
    })
    }
    for(i=0;i< commentCounter6.length; i++){
  
        commentCounter6[i].addEventListener("click",function(){
         for(let j=0;j<commentCounter6.length;j++)
         {
             commentCounter6[j].classList.remove("active");
         }
         this.classList.add("active");
         
     
        })
        }
var htm=document.querySelector("html")
var bod=document.querySelector("html")
var bac=document.querySelector(".backtop")

$('.backtop').click(function(e){
    $("html, body").animate({ scrollTop: document.documentElement.scrollHeight },2000);
    })
