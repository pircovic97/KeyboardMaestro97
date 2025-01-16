const hamMenu = document.querySelector(".ham");
const nav = document.querySelector(".nav");

hamMenu.addEventListener("click" , ()=> {
    hamMenu.classList.toggle("active");
    nav.classList.toggle("active");
})

function toggleView(view) {
    const gridBtn = document.querySelector('.grid-view');
    const listBtn = document.querySelector('.list-view');
    const productsGrid = document.querySelector('.products-grid');
    
    if (view === 'grid') {
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
        productsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
        productsGrid.style.gridTemplateColumns = '1fr';
    }
}

