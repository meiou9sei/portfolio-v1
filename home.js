document.querySelectorAll(".about-nav").forEach(e => {e.addEventListener('click', function(e) {
    console.log('hi');
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
})});