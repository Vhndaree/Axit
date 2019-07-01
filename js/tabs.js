var tabButton1 = document.getElementById('tab1');
var tabButton2 = document.getElementById('tab2');
var tabButton3 = document.getElementById('tab3');

var sliderContainer = document.getElementsByClassName('tab-slider-container')[0];
var tabDescriptionWrapper = document.getElementsByClassName('tab-description-wrapper')[0];
var tabDescription = document.querySelectorAll('.tab-slider-container .tab-description');

tabButton1.addEventListener('click', handleSlide);
tabButton2.addEventListener('click', handleSlide);
tabButton3.addEventListener('click', handleSlide);

function handleSlide(event) {
  event.preventDefault();
  var tabDescriptionWrapperWidth = window.getComputedStyle(tabDescriptionWrapper).width;
  var currentActiveTab = document.querySelector('.tabs .active');
  var tab = event.currentTarget.dataset.index;
  var clickedTab = event.currentTarget;

  sliderContainer.style.marginLeft = -(parseFloat(tabDescriptionWrapperWidth) * tab) + 'px';
  sliderContainer.style.transition = 'margin 0.5s';
  currentActiveTab.classList.remove('active');
  clickedTab.classList.add('active');
}

window.addEventListener('resize', resizeContainer);

function resizeContainer() {
  var tabDescriptionWrapperWidth = window.getComputedStyle(tabDescriptionWrapper).width;
  sliderContainer.style.width = (parseFloat(tabDescriptionWrapperWidth) * 3) + 'px';
  tabDescription.forEach(element => {
      element.style.width = parseFloat(tabDescriptionWrapperWidth) + 'px';
  });
}