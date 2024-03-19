(async () => {
    const query = new Parse.Query(vender);
    try {
      // here you put the objectId that you want to update
      const object = await query.get('xKue915KBG');
      object.set('nome_livro', new Parse.Object("livro"));
      object.set('quantidade', 1);
      try {
        const response = await object.save();
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        // Access the Parse Object attributes using the .GET method
        console.log(response.get('nome_livro'));
        console.log(response.get('quantidade'));
        console.log('vender updated', response);
      } catch (error) {
        console.error('Error while updating vender', error);
        }
      } catch (error) {
        console.error('Error while retrieving object vender', error);
      }
  })();