let random=Math.floor(Math.random()*3);
let user = document.querySelectorAll(".userpick");
let computer= document.querySelectorAll(".computerpick");
let triangle=document.querySelector(".triangle");
let you=document.querySelector(".user");
let pc=document.querySelector(".pc"); 
let winnerside =document.querySelector(".winner_side");
let winside=document.querySelector(".win");
let playbttn=document.querySelector(".play_bttn");
let tieside =document.querySelector(".tie_side");
let tie=document.querySelector(".tie");
let replaybttn=document.querySelector(".replay_bttn")
let yoursc=document.getElementById("player-score")
let computersc=document.getElementById("computer-score")

let usercount=0;
let computercount=0;

user.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        you.style.opacity="1";
        triangle.style.display="none";
       user.forEach(game_bttn =>{
        game_bttn.style.display="none";
       });
       element.style.display="block";
       element.classList.add("user_icon");
       setTimeout(()=>{
        pc.style.opacity="1";
         setTimeout(()=>{
            computer[random].style.display="block";
            computer[random].classList.add("computer_icon");
         },500);
         setTimeout(()=>{
            if(index==random)
            {
                tieside.style.display="grid";
                tie.innerHTML="TIE UP";

            }else if(index==1 && random==2 || index==0  && random==1 || index==0 && random==2)
            {
                winnerside.style.display="grid";
                winside.innerHTML="YOU WIN ";
                usercount++;
                yoursc.innerHTML=usercount;
            
            }else{ 
                winnerside.style.display="grid";
                winside.innerHTML="YOU LOOSE ";
                computercount++;
                computersc.innerHTML=computercount;
                
                
                
             }
         },1000);
       },500);
    })
    playbttn.addEventListener("click",() =>{
        window.location.reload();
    })

replaybttn.addEventListener("click",() =>{
    window.location.reload();
})
});
    


