function playBackground() {
  let audio = new Audio();
        //Source goes here:
        audio.src = "soundfiles/happy-monkey-circle.mp3"
        document.body.addEventListener("click",function(){
          audio.play();
          audio.loop = true;
        });
}
  