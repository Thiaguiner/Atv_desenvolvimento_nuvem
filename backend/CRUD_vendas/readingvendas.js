(async () => {
    const vender = Parse.Object.extend('vender');
    const query = new Parse.Query(vender);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const nome_livro = object.get('nome_livro')
        const quantidade = object.get('quantidade')
        console.log(nome_livro);
        console.log(quantidade);
      }
    } catch (error) {
      console.error('Error while fetching vender', error);
    }
  })();