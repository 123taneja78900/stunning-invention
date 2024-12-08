// Login Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementsByClassName('close')[0];

loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

closeBtn.onclick = function() {
    loginModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Login Form Submission
const loginForm = document.getElementById('loginForm');

loginForm.onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login attempt:', email, password);
    // Here you would typically send the login data to your server
    alert('Login functionality is not implemented in this demo.');
    loginModal.style.display = "none";
}

// Feedback Form Submission
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.onsubmit = function(e) {
    e.preventDefault();
    const feedbackText = document.getElementById('feedbackText').value;
    console.log('Feedback submitted:', feedbackText);
    // Here you would typically send the feedback to your server
    alert('Thank you for your feedback!');
    document.getElementById('feedbackText').value = '';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation menu for mobile devices
const navToggle = document.createElement('button');
navToggle.innerHTML = '&#9776;'; // Hamburger icon
navToggle.className = 'nav-toggle';
document.querySelector('nav').appendChild(navToggle);

const navList = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Simple animation for blog cards
const blogCards = document.querySelectorAll('.blog-card');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

blogCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});