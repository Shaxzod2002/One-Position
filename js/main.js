const times = document.getElementById('times');
const formBox = document.getElementById('form-box');
const bars = document.getElementById('bars');
const navbarBrand = document.getElementById('navbar-brand');
const navbarTimes = document.getElementById('navbar-times');
const dropdown = document.getElementById('dropdown');
times.addEventListener('click', () => {
    bars.style.display = 'block';
    formBox.classList.add('remove');
    formBox.classList.remove('active');
})
bars.addEventListener('click', () => {
    bars.style.display = 'none';
    formBox.classList.remove('remove');
    formBox.classList.add('active');
})

navbarBrand.addEventListener('click', () => {
    dropdown.style.display = 'block';
    navbarBrand.style.display = 'none';
    navbarTimes.style.display = 'block';
})

navbarTimes.addEventListener('click', () => {
    navbarBrand.style.display = 'block';
    navbarTimes.style.display = 'none';
    dropdown.style.display = 'none';
})