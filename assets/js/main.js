const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
document.body.appendChild(cursorDot);

const blob = document.querySelector('.cursor-blob');
let timeout;

function updateCursor(e) {
    requestAnimationFrame(() => {
        blob.style.left = `${e.clientX}px`;
        blob.style.top = `${e.clientY}px`;
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        
        blob.style.transform = 'translate(-50%, -50%) scale(1.1)';
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            blob.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
    });
}

document.addEventListener('mousemove', updateCursor);

function createParticle(x, y, interactive = false) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * (interactive ? 6 : 4) + (interactive ? 2 : 1);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const hue = Math.random() * 60 + 230;
    particle.style.background = `hsl(${hue}, 70%, 70%)`;
    particle.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 70%, 70%)`;
    
    particle.style.left = `${x || Math.random() * 100}%`;
    particle.style.top = `${y || Math.random() * 100}%`;
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    particle.style.setProperty('--tx', `${Math.cos(angle) * velocity}px`);
    particle.style.setProperty('--ty', `${Math.sin(angle) * velocity}px`);
    
    const duration = Math.random() * 1.5 + 1;
    particle.style.animation = `particle-animation ${duration}s linear${interactive ? '' : ' infinite'}`;
    
    document.getElementById('particles').appendChild(particle);
    setTimeout(() => particle.remove(), duration * 1000);
}

setInterval(() => createParticle(), 30);

document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {
        createParticle(e.clientX, e.clientY, true);
    }
});

function initializeButtonEffects() {
    document.querySelectorAll('.magnetic-button').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 10;
            button.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });

    document.querySelectorAll('.ripple-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeButtonEffects();
}); 