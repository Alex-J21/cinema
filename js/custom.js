$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
const closePopupButton = document.getElementById('popup-close');
const upPopupButton = document.getElementById('popup-open');
const popup = document.getElementById('popup');

closePopupButton.onclick = function(event){
    event.preventDefault();
    popup.classList.add('hidden')
}
upPopupButton.onclick = function(event){
    event.preventDefault();
    popup.classList.remove('hidden')
}