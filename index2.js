// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.createElement('div');

// Create overlay for mobile menu
menuOverlay.className = 'menu-overlay';
document.body.appendChild(menuOverlay);

function toggleMenu() {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Change hamburger icon
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking on overlay
menuOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking on nav links
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Contact Form Functionality
const contactForm = document.getElementById('contactForm');
const errorElement = document.getElementById('error');
const successElement = document.getElementById('success');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

        // Clear previous messages
        errorElement.textContent = '';
        successElement.textContent = '';

        if (nameInput === '' || emailInput === '' || messageInput === '') {
            errorElement.textContent = 'Please fill out all required fields.';
        } else {
            successElement.textContent = 'Thank you for your message! I will be in touch shortly.';
            
            // Reset form
            contactForm.reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                successElement.textContent = '';
            }, 5000);
        }
    });
}