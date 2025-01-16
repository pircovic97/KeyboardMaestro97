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

    const hamMenu = document.querySelector(".ham");
    const nav = document.querySelector(".nav");
    
    hamMenu.addEventListener("click" , ()=> {
        hamMenu.classList.toggle("active");
        nav.classList.toggle("active");
    })
    });