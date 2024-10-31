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

class ModernCookieBanner {
    constructor() {
        this.cookieName = 'aetherCookieConsent';
        this.banner = this.createBanner();
        this.init();
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.className = 'modern-cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <div class="cookie-header">
                    <i class="fas fa-cookie-bite text-2xl text-purple-500"></i>
                    <h3 class="text-xl font-bold">Cookie Settings</h3>
                </div>
                <p class="cookie-text">
                    We use cookies to enhance your browsing experience and analyze our traffic. 
                    Please choose your preferences below.
                </p>
                <div class="cookie-options">
                    <label class="cookie-option">
                        <input type="checkbox" checked disabled>
                        <span>Essential Cookies</span>
                        <span class="text-sm text-gray-400">(Required)</span>
                    </label>
                    <label class="cookie-option">
                        <input type="checkbox" id="analytics-cookies">
                        <span>Analytics</span>
                    </label>
                </div>
                <div class="cookie-actions">
                    <button class="accept-all-btn">Accept All</button>
                    <button class="save-preferences-btn">Save Preferences</button>
                </div>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .modern-cookie-banner {
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%) translateY(100%);
                background: rgba(17, 17, 17, 0.95);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 1rem;
                padding: 2rem;
                width: 90%;
                max-width: 500px;
                z-index: 9999;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                color: white;
            }

            .modern-cookie-banner.show {
                transform: translateX(-50%) translateY(0);
            }

            .cookie-content {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .cookie-header {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .cookie-text {
                line-height: 1.6;
                color: rgba(255, 255, 255, 0.8);
            }

            .cookie-options {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .cookie-option {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                cursor: pointer;
            }

            .cookie-option input[type="checkbox"] {
                width: 1.2rem;
                height: 1.2rem;
                accent-color: #6200ea;
            }

            .cookie-actions {
                display: flex;
                gap: 1rem;
                margin-top: 1rem;
            }

            .accept-all-btn, .save-preferences-btn {
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                border: none;
                cursor: pointer;
                transition: transform 0.2s ease, background-color 0.2s ease;
                font-weight: 500;
            }

            .accept-all-btn {
                background: #6200ea;
                color: white;
                flex: 1;
            }

            .save-preferences-btn {
                background: rgba(255, 255, 255, 0.1);
                color: white;
                flex: 1;
            }

            .accept-all-btn:hover, .save-preferences-btn:hover {
                transform: translateY(-2px);
            }
        `;
        document.head.appendChild(style);

        return banner;
    }

    init() {
        if (!this.getCookie(this.cookieName)) {
            document.body.appendChild(this.banner);
            setTimeout(() => {
                this.banner.classList.add('show');
            }, 100);

            this.banner.querySelector('.accept-all-btn').addEventListener('click', () => {
                this.setCookie(this.cookieName, 'all', 365);
                this.hideBanner();
            });

            this.banner.querySelector('.save-preferences-btn').addEventListener('click', () => {
                const analytics = this.banner.querySelector('#analytics-cookies').checked;
                this.setCookie(this.cookieName, analytics ? 'analytics' : 'essential', 365);
                this.hideBanner();
            });
        }
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
    }

    getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    hideBanner() {
        this.banner.classList.remove('show');
        setTimeout(() => {
            this.banner.remove();
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ModernCookieBanner();
});

// Add these new animation classes
class TextSplitAnimation {
    constructor(element) {
        this.element = element;
        this.originalText = element.innerText;
        this.init();
    }

    init() {
        this.element.innerHTML = this.originalText
            .split('')
            .map(char => `<span class="char">${char}</span>`)
            .join('');

        this.chars = this.element.querySelectorAll('.char');
        this.addHoverEffect();
    }

    addHoverEffect() {
        this.element.addEventListener('mouseover', () => {
            this.chars.forEach((char, i) => {
                char.style.transition = `transform 0.3s ease ${i * 0.03}s, color 0.3s ease ${i * 0.03}s`;
                char.style.transform = 'translateY(-10px)';
                char.style.color = '#6200ea';
            });
        });

        this.element.addEventListener('mouseout', () => {
            this.chars.forEach((char, i) => {
                char.style.transition = `transform 0.3s ease ${i * 0.03}s, color 0.3s ease ${i * 0.03}s`;
                char.style.transform = 'translateY(0)';
                char.style.color = '';
            });
        });
    }
}

class EnhancedMouseTrail {
    constructor() {
        this.points = [];
        this.init();
    }

    init() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
        `;
        document.body.appendChild(canvas);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        document.addEventListener('mousemove', e => {
            this.points.push({
                x: e.clientX,
                y: e.clientY,
                age: 0
            });
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < this.points.length; i++) {
                const point = this.points[i];
                point.age++;
                
                if (point.age > 30) {
                    this.points.splice(i, 1);
                    i--;
                    continue;
                }

                const opacity = 1 - point.age / 30;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(98, 0, 234, ${opacity})`;
                ctx.fill();
            }

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(98, 0, 234, 0.5)';
            ctx.lineWidth = 2;
            
            for (let i = 0; i < this.points.length - 1; i++) {
                const point = this.points[i];
                const nextPoint = this.points[i + 1];
                
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(nextPoint.x, nextPoint.y);
            }
            ctx.stroke();

            requestAnimationFrame(animate);
        };
        animate();
    }
}

class MagneticEffect {
    constructor(elements) {
        this.elements = elements;
        this.init();
    }

    init() {
        this.elements.forEach(el => {
            el.addEventListener('mousemove', e => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                el.style.transition = 'transform 0.1s ease';
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
                el.style.transition = 'transform 0.3s ease';
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('h1, h2').forEach(heading => {
        new TextSplitAnimation(heading);
    });

    new EnhancedMouseTrail();

    new MagneticEffect(document.querySelectorAll('.neo-button, .glass-card'));

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .feature-card').forEach(el => {
        el.style.transform = 'translateY(50px)';
        el.style.opacity = '0';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});


class GlowingCursor {
    constructor() {
        this.init();
    }

    init() {
        const glowingOrb = document.createElement('div');
        glowingOrb.className = 'glowing-orb';
        document.body.appendChild(glowingOrb);

        const style = document.createElement('style');
        style.textContent = `
            .glowing-orb {
                position: fixed;
                width: 300px;
                height: 300px;
                background: radial-gradient(
                    circle at center,
                    rgba(98, 0, 234, 0.15) 0%,
                    rgba(98, 0, 234, 0.1) 20%,
                    transparent 65%
                );
                pointer-events: none;
                z-index: 9998;
                transform: translate(-50%, -50%);
                transition: width 0.3s ease, height 0.3s ease;
                mix-blend-mode: screen;
            }
        `;
        document.head.appendChild(style);

        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                glowingOrb.style.left = `${e.clientX}px`;
                glowingOrb.style.top = `${e.clientY}px`;
            });
        });

        document.querySelectorAll('a, button, .glass-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                glowingOrb.style.width = '400px';
                glowingOrb.style.height = '400px';
            });
            el.addEventListener('mouseleave', () => {
                glowingOrb.style.width = '300px';
                glowingOrb.style.height = '300px';
            });
        });
    }
}

class InteractiveStars {
    constructor() {
        this.stars = [];
        this.mousePos = { x: 0, y: 0 };
        this.init();
    }

    init() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 9997;
        `;
        document.body.appendChild(canvas);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        for (let i = 0; i < 50; i++) {
            this.stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speed: Math.random() * 2 + 1
            });
        }

        document.addEventListener('mousemove', (e) => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            this.stars.forEach(star => {
                const dx = this.mousePos.x - star.x;
                const dy = this.mousePos.y - star.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    const angle = Math.atan2(dy, dx);
                    star.x -= Math.cos(angle) * star.speed;
                    star.y -= Math.sin(angle) * star.speed;
                }

                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(98, 0, 234, ${0.5 - dist / 300})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };
        animate();
    }
}

class MagneticLinks {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const dist = Math.sqrt(x * x + y * y);
                const strength = Math.min(dist / 5, 15);

                el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
                el.style.transition = 'transform 0.15s ease';
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
                el.style.transition = 'transform 0.3s ease';
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GlowingCursor();
    new InteractiveStars();
    new MagneticLinks();
});