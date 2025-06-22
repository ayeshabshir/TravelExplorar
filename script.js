// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'white';
    }
});

// Category hover effects
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Article card hover effects
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Search functionality for destinations
const searchForm = document.getElementById('destinationSearch');
const searchInput = document.getElementById('searchInput');
const regionSelect = document.getElementById('regionSelect');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRegion = regionSelect.value.toLowerCase();
    
    // Filter destinations based on search term and region
    const destinationCards = document.querySelectorAll('.article-card');
    destinationCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const region = card.querySelector('.region').textContent.toLowerCase();
        
        if (selectedRegion === '' || region.includes(selectedRegion)) {
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        } else {
            card.style.display = 'none';
        }
    });
});

// Filter buttons functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter destinations based on button type
        const filterType = button.dataset.filter;
        const destinationCards = document.querySelectorAll('.article-card');
        
        destinationCards.forEach(card => {
            const type = card.querySelector('.type').textContent.toLowerCase();
            if (filterType === 'all' || type.includes(filterType)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Category card click handler
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const region = card.querySelector('h3').textContent.toLowerCase();
        // Here you can add logic to filter destinations based on region
        // or navigate to a specific region page
        console.log('Clicked on:', region);
    });
});

// Add loading animation for articles
window.addEventListener('load', function() {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
        article.style.opacity = '1';
        article.style.transform = 'translateY(0)';
    });
});

// Subscribe functionality
const subscribeButton = document.querySelector('.subscribe-button');
if (subscribeButton) {
    subscribeButton.addEventListener('click', function() {
        alert('Thank you for subscribing! We will keep you updated with our latest travel stories.');
    });
}

// Add loading animation for articles
window.addEventListener('load', function() {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
        article.style.opacity = '1';
        article.style.transform = 'translateY(0)';
    });
});
