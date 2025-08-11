
        // Dark Mode Toggle
        const modeToggle = document.getElementById('modeToggle');
        const body = document.body;
        
        // Check for saved user preference or use system preference
        if (localStorage.getItem('darkMode') === 'true' || 
            (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            body.classList.add('dark-mode');
        }
        
        modeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });
        
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Animation on Scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.project-card, .skill-progress');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    if (element.classList.contains('skill-progress')) {
                        // Animate skill bars to their specified width
                        const width = element.style.width;
                        element.style.width = '0';
                        setTimeout(() => {
                            element.style.width = width;
                        }, 100);
                    } else {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                }
            });
        };
        
        // Initialize animations
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress-bar');
            
            // Initialize Intersection Observer for lazy loading animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const percent = progressBar.getAttribute('data-percent');
                        progressBar.style.width = percent + '%';
                    }
                });
            }, {
                threshold: 0.5
            });

            progressBars.forEach(bar => {
                observer.observe(bar);
            });
        });

         document.addEventListener('DOMContentLoaded', () => {
            // Initialize or increment counter
            let counter = localStorage.getItem('visitorCounter');
            if (!counter) {
                counter = 1;
            } else {
                counter = parseInt(counter) + 1;
            }
            localStorage.setItem('visitorCounter', counter);
            document.getElementById('counter').textContent = counter;
            
            // Create particles when counter changes
            createParticles();
            
            // Reset button functionality
            document.getElementById('resetBtn').addEventListener('click', () => {
                localStorage.removeItem('visitorCounter');
                document.getElementById('counter').textContent = '0';
                createParticles();
            });
        });
        
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            particlesContainer.innerHTML = '';
            
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 20 + 5;
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const opacity = Math.random() * 0.6 + 0.2;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;
                particle.style.opacity = opacity;
                
                particlesContainer.appendChild(particle);
            }
        }



