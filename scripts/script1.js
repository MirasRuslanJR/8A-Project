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

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    if (window.scrollY > 350) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Visibility level at which the animation triggers
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class to trigger the fade-in animation
                entry.target.classList.remove('not-visible'); // Remove class for fade-out
            } else {
                entry.target.classList.add('not-visible'); // Add class to trigger the fade-out animation
                entry.target.classList.remove('visible'); // Remove class for fade-in
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element); // Start observing the elements
    });
});



// Функция анимации числа
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

// Функция для запуска анимаций, когда элемент становится видимым
function startAnimations(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const end = parseInt(element.getAttribute('data-end'), 10);
            const duration = 2000; // Продолжительность анимации в миллисекундах
            animateNumber(element, 0, end, duration);
            // Отменяем наблюдение после завершения анимации
            observer.unobserve(element);
        }
    });
}

// Создаем наблюдатель для элементов
const observer = new IntersectionObserver(startAnimations, {
    threshold: 0.7 // Элемент считается видимым, когда 50% его площади видно
});

// Добавляем элементы в наблюдатель
document.querySelectorAll('.number').forEach(element => {
    observer.observe(element);
}); 

document.querySelector('.animation').addEventListener('click', function() {
    const kuratorArticle = document.querySelector('.kurator');
    kuratorArticle.classList.toggle('show');
  });