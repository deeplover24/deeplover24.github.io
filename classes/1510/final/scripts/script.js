/*
    Student Name: Tyren Wilson
    File Name: script.js
    Date: 4/3/2025
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}

//Function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.textContent = "Just about any cooking tool you can imagine and more , strainers , pots , pans , forks , spoons , mixing spoons , whisk , bottles , cups , knives , blenders, air friers and much much more !!!";
}

//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "1 week return policy for unsuned products";
}

//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "anywhere from 1 day to 2 weeks , we do our best to ship the product as fast as posible";
}

//Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "We are always looking for job applicants , go to contacts to contact us and learn more ";
}
