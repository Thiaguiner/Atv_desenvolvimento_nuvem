(async () => {
    const myNewObject = new Parse.Object('livro');
    myNewObject.set('nome', 'A string');
    myNewObject.set('descricao', 'A string');
    myNewObject.set('preco', 1);
    myNewObject.set('myField', 'A string');
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('livro created', result);
    } catch (error) {
      console.error('Error while creating livro: ', error);
    }
  })();