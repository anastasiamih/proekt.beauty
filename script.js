


  let btn = document.querySelectorAll(".btn-primary")
  let card=document.querySelector(".count")
  let count=0 
  for (let i = 0; i <btn.length ; i++) {
    btn[i].addEventListener('click', function() {
   
     count +=1 
     card.innerHTML=count
     console.log(count)


     
    })
}
