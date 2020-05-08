const options = {
    threshold: .6
}

const cards = document.querySelectorAll('.card');

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

cards.forEach(card => {
    observer.observe(card);
});