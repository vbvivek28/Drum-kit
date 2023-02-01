for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("touch",function ()
{
   var buttonInhtml=this.innerHTML;
   makesound(buttonInhtml);
   animated(buttonInhtml);
}
);
//  var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
}


document.addEventListener("keydown",function(event){
   makesound(event.key);  
   animated(event.key);
})

function makesound(keycheck){
   switch(keycheck){
      case 'W':
      case 'w':var tom1=new Audio("sounds/tom-1.mp3");
               tom1.play();
      break;  
      case 'A':
      case "a":var tom2=new Audio("sounds/tom-2.mp3");
               tom2.play();
               break;
      case "S":        
      case "s":var tom3=new Audio("sounds/tom-3.mp3");
               tom3.play();
               break;
      case "D":
      case "d":var tom4=new Audio("sounds/tom-4.mp3");
               tom4.play();
               break;
      case "J":
      case "j":var snare=new Audio("sounds/snare.mp3");
               snare.play();
               break;
      case "K":         
      case "k":var crash=new Audio("sounds/crash.mp3");
               crash.play();
               break;
      case "L":         
      case "l":var kickbass=new Audio("sounds/kick-bass.mp3");
               kickbass.play();
               break;
      default:console.log("Wrong input!!!!!");
}
}

function animated(crr_key){

   var active_button=document.querySelector("."+crr_key);
   active_button.classList.add("pressed");

   setTimeout(function(){
      active_button.classList.remove("pressed");
   },100);
}
