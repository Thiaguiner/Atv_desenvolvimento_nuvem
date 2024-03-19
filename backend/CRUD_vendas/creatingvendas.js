(async () => {
    const myNewObject = new Parse.Object('vender');
    myNewObject.set('nome_livro', new Parse.Object("livro"));
    myNewObject.set('quantidade', 1);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('vender created', result);
    } catch (error) {
      console.error('Error while creating vender: ', error);
    }
  })();