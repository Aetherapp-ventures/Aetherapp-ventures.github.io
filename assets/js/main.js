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

class AdvancedParticle {
    constructor() {
        this.particle = document.createElement('div');
        this.particle.className = 'advanced-particle';
        this.reset();
        document.getElementById('particles').appendChild(this.particle);
    }

    reset() {
        const size = Math.random() * 10 + 5;
        const hue = Math.random() * 60 + 230;
        
        this.particle.style.width = `${size}px`;
        this.particle.style.height = `${size}px`;
        this.particle.style.background = `hsl(${hue}, 70%, 70%)`;
        this.particle.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 70%, 70%)`;
        
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        
        this.particle.style.left = `${this.x}px`;
        this.particle.style.top = `${this.y}px`;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > window.innerWidth || 
            this.y < 0 || this.y > window.innerHeight) {
            this.reset();
        }

        this.particle.style.left = `${this.x}px`;
        this.particle.style.top = `${this.y}px`;
    }
}

const particles = Array.from({ length: 50 }, () => new AdvancedParticle());

function updateParticles() {
    particles.forEach(particle => particle.update());
    requestAnimationFrame(updateParticles);
}

updateParticles();

class AdvancedCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor-blob');
        this.cursorDot = document.querySelector('.cursor-dot');
        this.pos = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };
        this.speed = 0.1;
        
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        this.updateCursor();
    }

    updateCursor() {
        this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
        this.pos.y += (this.mouse.y - this.pos.y) * this.speed;

        this.cursor.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) scale(1)`;
        this.cursorDot.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px)`;

        requestAnimationFrame(() => this.updateCursor());
    }
}

new AdvancedCursor();

class ParallaxScroll {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            this.sections.forEach(section => {
                const speed = section.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                section.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

new ParallaxScroll();

document.querySelectorAll('.neo-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
}); 