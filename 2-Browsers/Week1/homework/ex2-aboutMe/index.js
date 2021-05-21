'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.body.style.fontFamily = "Arial, sans-serif";
const nickname = document.querySelector('#nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.querySelector('#hometown');
nickname.textContent = "Ameri";
favFood.textContent = "Pizza";
hometown.textContent = "Groningen";
const listItems = document.querySelectorAll('li');
listItems.forEach(listItem => listItem.classList.add('list-item'));