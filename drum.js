alert("Welcome to drum game!");
var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",hand);

}
function hand(){
 // var audio=new Audio("tom-1.mp3");
 // audio.play();
 this.style.color="white";
 var button=this.innerHTML;
  beat(button);
  animation(button);

}

// for keyboard
document.addEventListener("keypress",function(event){

  beat(event.key);
  animation(event.key);
})




function beat(key){
  switch (key) {
    case "w":
    var audio=new Audio("tom-1.mp3");
    audio.play();
      break;
     case "a":
     var audio=new Audio("tom-2.mp3");
     audio.play();
     break;
     case "s":
     var audio=new Audio("tom-3.mp3");
     audio.play();
     break;
     case "d":
     var audio=new Audio("tom-4.mp3");
     audio.play();
     break;
     case "j":
     var audio=new Audio("crash.mp3");
     audio.play();
     break;
     case "k":
     var audio=new Audio("kick-bass.mp3");
     audio.play();
     break;
     case "l":
     var audio=new Audio("snare.mp3");
     audio.play();
     break;

    default:

  }
}
function animation(currentkey){
  var active=document.querySelector("." + currentkey);
  active.classlist.add("pressed");
  setTimeout(function(){
    active.classlist.remove("pressed");
  },100);
}
