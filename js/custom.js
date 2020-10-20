$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
const closePopup = document.getElementById('popup-close');
const popup = document.getElementById('popup');

closePopup.onclick = function(event){
    event.preventDefault();
    popup.classList.add('hidden')
}