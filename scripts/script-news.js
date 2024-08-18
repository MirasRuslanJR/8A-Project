document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.add('active'); // Открытие меню
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active'); // Закрытие меню при клике вне его области
        }
    });
});


var prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;
    const menu = document.getElementById('menu');
    
    if (prevScrollpos > currentScrollPos) {
        menu.style.top = "0";
    } else {
        menu.style.top = "-100px";
    }
    
    if (window.scrollY > 350) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
    
    prevScrollpos = currentScrollPos;
});