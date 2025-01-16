document.addEventListener("DOMContentLoaded", function() {

    // Dropdown functionality
    const dropdownProducts = document.querySelectorAll('.dropdown-products');

    // Loop through all dropdowns to handle their showing and hiding
    dropdownProducts.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownLink = dropdown.querySelector('.nav-link');

        // When hovering over the "Shop by Categories" or "Services" link
        dropdown.addEventListener('mouseenter', () => {
            dropdownContent.style.display = 'block'; // Show the dropdown
            dropdownContent.style.opacity = '1'; // Ensure opacity is 1 for visibility
        });

        // When hovering out of the dropdown
        dropdown.addEventListener('mouseleave', () => {
            dropdownContent.style.opacity = '0'; // Fade out the dropdown
            setTimeout(() => {
                dropdownContent.style.display = 'none'; // Hide dropdown after opacity transition
            }, 2500); // Match with the transition time (in milliseconds)
        });
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.ham');
    const nav = document.querySelector('.nav-list');

    // Toggle the mobile navigation on hamburger click
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the 'active' class on the nav list
        hamburger.classList.toggle('active'); // Optional: you can animate the hamburger icon
    });

    // Login button functionality (optional, in case you want to redirect or perform actions on click)
    const loginBtn = document.querySelector('.btn-login');
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior (e.g., page refresh or navigation)
        alert("Redirecting to login page..."); // This can be replaced with actual login functionality
    });

});
