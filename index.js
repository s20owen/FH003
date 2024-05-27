// Navigation
const slidingNav = document.getElementById("Sidenav");

function openNav(){
    slidingNav.style.width = "100%";
}

function closeNav(){
    slidingNav.style.width = "0";
}

const close = document.querySelectorAll(".close");
close.forEach(element => {
    element.addEventListener('click', () => {
        closeNav();
    });
});

document.querySelectorAll('.work-items img').forEach(function(image) {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'flex';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};