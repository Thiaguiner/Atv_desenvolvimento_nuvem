(async () => {
    const query = new Parse.Query(livro);
    try {
      // here you put the objectId that you want to update
      const object = await query.get('xKue915KBG');
      object.set('nome', 'A string');
      object.set('descricao', 'A string');
      object.set('preco', 1);
      object.set('myField', 'A string');
      try {
        const response = await object.save();
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        // Access the Parse Object attributes using the .GET method
        console.log(response.get('nome'));
        console.log(response.get('descricao'));
        console.log(response.get('preco'));
        console.log(response.get('myField'));
        console.log('livro updated', response);
      } catch (error) {
        console.error('Error while updating livro', error);
        }
      } catch (error) {
        console.error('Error while retrieving object livro', error);
      }
  })();