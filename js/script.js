//for side bar phone view
var hamBurger = document.getElementById('ham-burger');
var dropdownMenu = document.getElementById('dropdown-menu');
var crossBar = document.getElementById('cross-bar');

hamBurger.onclick = function () {
  dropdownMenu.style.display = "block";
};

crossBar.onclick = function () {
  dropdownMenu.style.display = "none";
}


// for banner form 
var getStarted = document.getElementById('get-started');
var bannerForm = document.getElementById('banner-form');
var formCrossBar = document.getElementById('cross-bar-form');

getStarted.onclick = function () {
  bannerForm.style.display = "block";
}

formCrossBar.onclick = function () {
  bannerForm.style.display = "none";
}

//for social media icon in mobile view

var socialMedia = document.querySelectorAll('#socialMedia li');
var show = document.getElementById('socialMediaDown');
var hide = document.getElementById('socialMediaUp');

show.addEventListener('click', slideDown);
hide.addEventListener('click', slideUp);

function slideUp() {
  socialMedia.forEach(element => {
    element.style.display = "none";
  })
  show.style.display = "block";
  hide.style.display = "none";
}
function slideDown() {
  socialMedia.forEach(element => {
    element.style.display = "block";
  })
  show.style.display = "none";
  hide.style.display = "block";
}