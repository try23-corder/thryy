document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (this should be replaced with actual validation)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'student-list.html';
    } else {
        alert('Invalid username or password');
    }
});
