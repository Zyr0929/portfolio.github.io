document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    const textToType = textElement.textContent; // The full text content
    textElement.textContent = ''; // Clear the original text content
    
    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            textElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 50); 
        }
    }
    
    typeWriter(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a'); 
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href')); 
            const offset = target.offsetTop - (window.innerHeight / 2) + (target.offsetHeight / 2); 
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
});
