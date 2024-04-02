// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 0){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// ------Form validation------------

// Function to show the popup form when page load

var openFormButtons = document.getElementsByClassName("openFormBtn");
for (var i = 0; i < openFormButtons.length; i++) {
    openFormButtons[i].addEventListener("click", function() {
        var popupForm = document.getElementById("popupContainer");
        popupForm.style.display = "flex";
    });
}
// Function to open the popup form when the button is DOWMLOAD Broucher btn clicked-

var openFormButtonsD = document.getElementsByClassName("openFormBtnDownload");
for (var i = 0; i < openFormButtonsD.length; i++) {
    openFormButtonsD[i].addEventListener("click", function() {
        var popupFormD = document.getElementById("popupContainer-download");
        popupFormD.style.display = "flex";
    });
}

// pop up Form for Download  when Interested3BHK-S button click
var openFormButtonsInt = document.getElementsByClassName("openFormBtnInt3bhks");
for (var i = 0; i < openFormButtonsInt.length; i++) {
    openFormButtonsInt[i].addEventListener("click", function() {
        var popupFormInt = document.getElementById("popupContainer-interestedBtn3bhks");
        popupFormInt.style.display = "flex";
    });
}

// pop up Form for Download  when Interested3BHK-L button click
var openFormButtonsInt = document.getElementsByClassName("openFormBtnInt3bhkl");
for (var i = 0; i < openFormButtonsInt.length; i++) {
    openFormButtonsInt[i].addEventListener("click", function() {
        var popupFormInt = document.getElementById("popupContainer-interestedBtn3bhkl");
        popupFormInt.style.display = "flex";
    });
}
// pop up Form for Download  when Interested4BHK-S button click
var openFormButtonsInt = document.getElementsByClassName("openFormBtnInt4bhks");
for (var i = 0; i < openFormButtonsInt.length; i++) {
    openFormButtonsInt[i].addEventListener("click", function() {
        var popupFormInt = document.getElementById("popupContainer-interestedBtn4bhks");
        popupFormInt.style.display = "flex";
    });
}
// pop up Form for Download  when Interested4BHK-M button click
var openFormButtonsInt = document.getElementsByClassName("openFormBtnInt4bhkm");
for (var i = 0; i < openFormButtonsInt.length; i++) {
    openFormButtonsInt[i].addEventListener("click", function() {
        var popupFormInt = document.getElementById("popupContainer-interestedBtn4bhkm");
        popupFormInt.style.display = "flex";
    });
}
// pop up Form for Download  when Interested4BHK-L button click
var openFormButtonsInt = document.getElementsByClassName("openFormBtnInt4bhkl");
for (var i = 0; i < openFormButtonsInt.length; i++) {
    openFormButtonsInt[i].addEventListener("click", function() {
        var popupFormInt = document.getElementById("popupContainer-interestedBtn4bhkl");
        popupFormInt.style.display = "flex";
    });
}

// JavaScript function to validate the form and handle submission

const forms = document.querySelectorAll('.needs-validation');

Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        // console.log(form.checkValidity());
        if (!form.checkValidity()) {
          //error block
          event.preventDefault();
          event.stopPropagation();
        } else {
          //successful block
          console.log('Form submitted succefuly');
          sendEmail();
        }

        form.classList.add('was-validated');
      },
    )});

function sendEmail() {
    setTimeout(function() {
        redirectToThankyou();
    }, 1000); 
}

function redirectToThankyou() {
    window.location.href = 'index2.html';
}