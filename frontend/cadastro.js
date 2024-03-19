async function handleCadastro() {
    const name = document.getElementById('inputNome').value;
    const email = document.getElementById('inputEmailCadastro').value;
    const isAdmin = false;
    const password = document.getElementById('inputSenhaCadastro').value;
  
    try {
      const response = await axios.post('http://localhost:3500/users', {
        name: name,
        email: email,
        isAdmin: isAdmin,
        password: password,
      });
  
      console.log('Login bem-sucedido:', response.data);
  
    } catch (error) {
      console.error('Erro no login:', error.message);
    }
  }