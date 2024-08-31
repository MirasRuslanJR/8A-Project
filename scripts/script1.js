document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.add('active');
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
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

document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('not-visible');
            } else {
                entry.target.classList.add('not-visible');
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

function animateNumber(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const current = Math.min(start + (end - start) * (progress / duration), end);

        element.textContent = Math.floor(current);

        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(step);
}

function startAnimations(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const end = parseInt(element.getAttribute('data-end'), 10);
            const duration = 2000;
            animateNumber(element, 0, end, duration);
            observer.unobserve(element);
        }
    });
}

const observer = new IntersectionObserver(startAnimations, {
    threshold: 0.7
});

document.querySelectorAll('.number').forEach(element => {
    observer.observe(element);
}); 

document.querySelector('.animation').addEventListener('click', function() {
    const kuratorArticle = document.querySelector('.kurator');
    kuratorArticle.classList.toggle('show');
  });

  window.onscroll = function() {
    var btn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

document.getElementById('scrollToTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};  