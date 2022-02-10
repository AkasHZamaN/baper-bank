// get email user
document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'akash@gmail.com' && userPassword == 'akash2022'){
        window.location.href = 'banking.html';
    }
    else{
        console.log('invalid user');
    }
})
