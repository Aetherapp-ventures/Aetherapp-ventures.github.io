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

document.querySelectorAll('section').forEach(section => {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = section.dataset.scrollRate || 0.3;
        section.style.transform = `translate3d(0, ${scrolled * rate}px, 0)`;
    });
});

document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            translateZ(20px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

const cursor = document.querySelector('.cursor-blob');
let cursorTimeout;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    clearTimeout(cursorTimeout);
    
    cursorTimeout = setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
});

class SmoothMouseTrail {
    constructor() {
        this.trail = [];
        this.trailLength = 20; 
        this.currentMousePos = { x: 0, y: 0 };
        this.init();
    }

    init() {
        for (let i = 0; i < this.trailLength; i++) {
            const dot = document.createElement('div');
            dot.className = 'mouse-trail-dot';
            document.body.appendChild(dot);
            this.trail.push({
                element: dot,
                x: 0,
                y: 0
            });
        }

        const style = document.createElement('style');
        style.textContent = `
            .mouse-trail-dot {
                position: fixed;
                width: 8px;
                height: 8px;
                background: rgba(98, 0, 234, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                transform: translate(-50%, -50%);
            }
        `;
        document.head.appendChild(style);

        document.addEventListener('mousemove', (e) => {
            this.currentMousePos.x = e.clientX;
            this.currentMousePos.y = e.clientY;
        });

        this.animate();
    }

    animate() {
        let x = this.currentMousePos.x;
        let y = this.currentMousePos.y;

        this.trail.forEach((dot, index) => {
            const nextDot = this.trail[index + 1] || this.trail[0];
            
            dot.x += (x - dot.x) * 0.3;
            dot.y += (y - dot.y) * 0.3;

            dot.element.style.left = `${dot.x}px`;
            dot.element.style.top = `${dot.y}px`;
            dot.element.style.opacity = 1 - (index / this.trailLength);
            dot.element.style.transform = `translate(-50%, -50%) scale(${1 - (index / this.trailLength)})`;

            x = dot.x;
            y = dot.y;
        });

        requestAnimationFrame(() => this.animate());
    }
}

new SmoothMouseTrail();

class CookieConsent {
    constructor() {
        this.cookieName = 'cookieConsent';
        this.consentBanner = this.createBanner();
        this.init();
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to enhance your experience. 
                   By continuing to visit this site you agree to our use of cookies.</p>
                <div class="cookie-buttons">
                    <button class="accept-button">Accept</button>
                    <button class="decline-button">Decline</button>
                </div>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .cookie-consent-banner {
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(10px);
                padding: 1.5rem 2rem;
                border-radius: 1rem;
                z-index: 9999;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(255, 255, 255, 0.1);
                max-width: 500px;
                width: 90%;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .cookie-content {
                color: white;
                text-align: center;
            }
            .cookie-buttons {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 1rem;
            }
            .cookie-buttons button {
                padding: 0.5rem 1.5rem;
                border: none;
                border-radius: 0.5rem;
                cursor: pointer;
                transition: transform 0.2s ease;
            }
            .cookie-buttons button:hover {
                transform: translateY(-2px);
            }
            .accept-button {
                background: #6200ea;
                color: white;
            }
            .decline-button {
                background: rgba(255, 255, 255, 0.1);
                color: white;
            }
        `;
        document.head.appendChild(style);

        return banner;
    }

    init() {
        if (!this.getCookie(this.cookieName)) {
            document.body.appendChild(this.consentBanner);
            setTimeout(() => {
                this.consentBanner.style.opacity = '1';
            }, 100);

            this.consentBanner.querySelector('.accept-button').addEventListener('click', () => {
                this.setCookie(this.cookieName, 'accepted', 365);
                this.hideBanner();
            });

            this.consentBanner.querySelector('.decline-button').addEventListener('click', () => {
                this.setCookie(this.cookieName, 'declined', 365);
                this.hideBanner();
            });
        }
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    getCookie(name) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    hideBanner() {
        this.consentBanner.style.opacity = '0';
        setTimeout(() => {
            this.consentBanner.remove();
        }, 300);
    }
}

new CookieConsent();