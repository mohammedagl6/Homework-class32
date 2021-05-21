'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  const currentTime = new Date();
  const hours = (`0${currentTime.getHours()}`).slice(-2);
  const minutes = (`0${currentTime.getMinutes()}`).slice(-2);
  const seconds = (`0${currentTime.getSeconds()}`).slice(-2);
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  /*const formattedTime = currentTime.toLocaleTimeString('nl-NL', {hour12: false});*/
  
  timeContainer.textContent = formattedTime;
  
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
const timeContainer = document.createElement('p');
window.addEventListener('DOMContentLoaded', ()=>{
  document.body.prepend(timeContainer);
  setInterval(() => addCurrentTime(), 1000);
});