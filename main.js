

// Highlight active page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;
    let currentFilename = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Handle cases where the URL is just the directory (e.g., file:///C:/path/to/portfolio/)
    // In such cases, currentFilename will be empty, and we assume it's index.html
    if (currentFilename === '' && (currentPath.endsWith('/') || currentPath.endsWith('\\'))){ 
        currentFilename = 'index.html';
    }

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkFilename = linkHref.substring(linkHref.lastIndexOf('/') + 1);

        if (linkFilename === currentFilename) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}





