document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_9zh3y5h','template_07h837y', {
        from_name:name,
        to_name: "Edson",
        message: message,
        reply_to: email,
    })
    .then(response => {
        document.getElementById('responseMessage').innerText = 'Message sent successfully!';
        document.getElementById('contactForm').reset(); //clear the form
    },  
    error =>{
        document.getElementById('responseMessage').innerText = 'Failed to send message. Please try again.'
    })
});

