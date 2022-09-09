document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'jasim.ice.iu@gmail.com' && userPassword == 'ju211267xy@') {
        window.location.href = 'banking.html';
    }
})

