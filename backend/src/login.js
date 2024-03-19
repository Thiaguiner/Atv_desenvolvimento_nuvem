function togglePassword() {
    const passwordInput = document.getElementById('inputSenha');
    const passwordToggle = document.querySelector('.toggle-password svg');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.style.color = 'green'; //visivel
    } else {
        passwordInput.type = 'password';
        passwordToggle.style.color = '#991818'; //oculto
    }
}