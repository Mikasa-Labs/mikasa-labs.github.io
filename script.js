// Smooth scroll behavior and fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to elements when page loads
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe hero and card sections
    const heroSection = document.querySelector('.hero-section');
    const card = document.querySelector('.card');

    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        heroSection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(heroSection);
        // Trigger immediately for hero
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }

    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    }
});
