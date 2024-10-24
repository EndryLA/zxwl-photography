const hamburger = document.getElementById('hamburger');
        const openIcon = document.getElementById('open-icon');
        const closeIcon = document.getElementById('close-icon');
        const navbarLinks = document.getElementById('navbar-links');


hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');

    if (navbarLinks.classList.contains('open')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});