document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(`Nombre: ${name}, Email: ${email}`);
    
    // Muestra el modal de éxito de Bootstrap
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
    
    // Oculta el modal automáticamente después de 3 segundos
    setTimeout(() => {
        successModal.hide();
    }, 5000);
    
    this.reset(); // Limpia el formulario
});
