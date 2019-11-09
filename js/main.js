const hamburger = document.querySelector('.btn-open');
hamburger.addEventListener('click', () => {
    document.getElementById('container-menu').classList.toggle('is-active');
});