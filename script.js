document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById('contact-form').reset();
});
