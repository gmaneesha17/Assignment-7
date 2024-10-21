document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageElement = document.getElementById('message');

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.className = 'message error';
        return;
    }

    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match.';
        messageElement.className = 'message error';
        return;
    }

    const userData = {
        name: name,
        email: email,
        password: password
    };
    console.log('User Data:', userData);

    messageElement.textContent = 'Registration successful!';
    messageElement.className = 'message';

    document.getElementById('registration-form').reset();
});