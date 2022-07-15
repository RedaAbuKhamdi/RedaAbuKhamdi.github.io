function pok(ab){
   console.log(ab)
   let blok1 =  document.getElementsByClassName("blocks")[ab]
   if (blok1.style.height == "15rem"){
      blok1.style.height = "fit-content";

   }
   else{
      blok1.style.height = "15rem";
   }
}

function scroll(){
   let blokscroll = document.getElementById("scroll")
   let S = $(window).scrollTop()
   console.log(S)
   if(S >= 872 ){
      let btn = document.getElementsByClassName("btn1")[0]
      let btn2 = document.getElementsByClassName("btn2")[0]
      btn.style.display = "inline-block"
      btn2.style.display = "none"
   }
   else{
      let btn = document.getElementsByClassName("btn1")[0]
      let btn2 = document.getElementsByClassName("btn2")[0]
      btn.style.display = "none"
      btn2.style.display = "inline-block"
   }
}
