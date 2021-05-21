'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
function catWalk() {
  // TODO complete this function
  const walkingCat = document.querySelector('img');
  const originalCatURL = walkingCat.src;
  const dancingCatURL= "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";
  let walkingStep = 0;
  let isDancing = true;
  function catWalkClosure(){
   walkingCat.style.left = `${walkingStep}px`;
   walkingStep +=10;
   if(walkingStep + walkingCat.width >= Math.floor(document.body.clientWidth/2 + walkingCat.width/2) && isDancing){
      clearInterval(walkingInterval);
      isDancing = false;
      walkingCat.src = dancingCatURL;
      setTimeout(() => {
         walkingCat.src = originalCatURL;
         walkingInterval =  setInterval(() => startWalkingTheCat(), 50);
         }, 5000);
      
      
   }
   if(walkingStep + walkingCat.width >= document.body.clientWidth){
      walkingStep = 0;
      isDancing = true;
   }
  }

  return catWalkClosure;
  
  
}

// TODO execute `catWalk` when the browser has completed loading the page
const startWalkingTheCat = catWalk();
let walkingInterval;
window.onload = () => {
   walkingInterval =  setInterval(() => startWalkingTheCat(), 50);
}