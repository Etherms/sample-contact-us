document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Capture form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send('service_05o71j4', 'template_0y4l862', {
        from_name: name,         // Ensure variable names match the template
        to_name: "Edson", // Customize as needed
        reply_to: email,
        message: message         // Matches the `{{message}}` field in the template
    })
    .then(response => {
        document.getElementById('responseMessage').innerText = 'Message sent successfully!';
        document.getElementById('contactForm').reset(); // Clear the form
    }, error => {
        document.getElementById('responseMessage').innerText = 'Failed to send message. Please try again.';
    });
});
