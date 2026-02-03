function createLightning() {
    const container = document.getElementById('lightning');
    const lightning = document.createElement('div');
    lightning.className = 'lightning';
    lightning.style.left = Math.random() * 100 + '%';
    lightning.style.top = Math.random() * 80 + '%';
    lightning.style.height = (Math.random() * 150 + 80) + 'px';
    lightning.style.animation = `strike ${Math.random() * 0.5 + 0.3}s ease-out`;
    container.appendChild(lightning);
    
    setTimeout(() => {
        lightning.remove();
    }, 800);
}

setInterval(createLightning, 3000);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});