document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(`Nombre: ${name}, Email: ${email}`);
    alert("Felicidades, te has registrado con éxito. Ahora recibirás nuestras recetas primero.");
    this.reset(); // Limpia el formulario
});
