//Scroll Reveal Animation
const hiddenElements=document.querySelectorAll('.hidden');

const observer=new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

//Contact Form Alert
const form=document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
});
