(async () => {
    const livro = Parse.Object.extend('livro');
    const query = new Parse.Query(livro);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const nome = object.get('nome')
        const descricao = object.get('descricao')
        const preco = object.get('preco')
        const myField = object.get('myField')
        console.log(nome);
        console.log(descricao);
        console.log(preco);
        console.log(myField);
      }
    } catch (error) {
      console.error('Error while fetching livro', error);
    }
  })();