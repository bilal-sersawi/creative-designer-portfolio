document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.header .icon .toggle-menu');
    const navList = document.querySelector('.header .icon ul');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            menuBtn.classList.toggle('open');
            navList.classList.toggle('open');
        }); 
        const menuLinks = navList.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                navList.classList.remove('open');
            });
        });
        window.addEventListener('click', (e) => {
            if (navList.classList.contains('open') && !navList.contains(e.target) && e.target !== menuBtn) {
                menuBtn.classList.remove('open');
                navList.classList.remove('open');
            }
        });
    }
});