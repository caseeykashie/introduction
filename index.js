document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill out all fields.');
        return;
    }

    // You can add more complex validation here
    // For example, checking if the phone number is a valid format

    // If all validation passes, you would typically send this data to a server
    console.log('Form submitted successfully!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
});