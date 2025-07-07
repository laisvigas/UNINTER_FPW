document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            //simulação de envio
            alert('Formulário enviado!');
            contactForm.reset(); // Clear the form
        });
    }
});