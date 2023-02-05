< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>IndexedDB</title>
            <script>
              let bd;
              let reqBD = indexedDB.open('meuDB', 1);
        reqBD.onsuccess = () => {
                bd = reqBD.result;
        };
        reqBD.onerror = () => {
                console.log(reqBD.error);
        };
        reqBD.onupgradeneeded = (e) => {
                bd = reqBD.result;
              if(!bd.objectStoreNames.contains('livros')){
                let livrosOS = bd.createObjectStore('livros', {keyPath: 'id'});
              livrosOS.createIndex('tituloIDX', 'titulo', {unique: false});
              livrosOS.createIndex('autorIDX', 'autor', {unique: false}); 
        };
    };

        onload = () => {
                //metodo btnC
                btnC.onclick = () => {
                  let livro = {
                    id: +idLivro.value,
                    titulo: titulo.value,
                    autor: autor.value
                  };
                  let transaction = bd.transaction(['livros'], 'readwrite'); //transaction
                  let livrosOS = transaction.objectStore('livros'); //objectStore
                  let reqOS = livrosOS.add(livro);
                  reqOS.onsuccess = (e) => {
                    console.log(reqOS.result);
                  };
                  reqOS.onerror = (e) => {
                    console.log(reqOS.error);
                  };
                };

            //metodo btnR leitura
            btnR.onclick = () => {
                bd
                  .transaction('livros')
                  .objectStore('livros')
                  .get(+idLivro.value)
                  .onsuccess = (e) => {
                    titulo.value = e.target.result.titulo;
                    autor.value = e.target.result.autor;
                  };
                };

                //metodo DELET
                btnD.onclick = () => {
                bd
                  .transaction(['livros'], 'readwrite')
                  .objectStore('livros')
                  .delete(+idLivro.value).onsuccess = (e) => {
                    console.log('livro excluido');
                  };
                };    

                btnU.onclick = () => {
                let livro = {
                id: +idLivro.value,
              titulo: titulo.value,
              autor: autor.value,
                    };
              bd
              .transaction(['livros'], 'readwrite')
              .objectStore('livros')
                    .put(livro).onsuccess = (e) => {
                console.log('livro atualizado');   
                    };  
                };

                //listagem btnL
                btnL.onclick = () => {
                bd
                  .transaction('livros')
                  .objectStore('livros')
                  .openCursor(IDBKeyRange.upperBound(1))
                  .onsuccess = (e) => {
                    let cursor = e.target.result;
                    if (cursor) {
                      console.log(cursor.value);
                      cursor.continue();
                    } else {
                      console.log('fim');
                    }
                  };
            };

                 //metodo btnRT leitura e titulo
                 btnRT.onclick = () => {
                bd
                  .transaction('livros')
                  .objectStore('livros')
                  .index('tituloIDX')
                  .get(titulo.value).onsuccess = (e) => {
                    console.log(e.target.result);
                    idLivro.value = e.target.result.id;
                    titulo.value = e.target.result.titulo;
                    autor.value = e.target.result.autor;
                  };
                };

                //metodo listagem por autor.
                 btnLA.onclick = () => {
                bd
                  .transaction('livros')
                  .objectStore('livros')
                  .index('tituloIDX')
                  .getALL(IDBKeyRange.only(autor.value)).onsuccess = (e) => {
                    console.log(e.target.result);

                  };
                };


        };

            </script>
            <body>
              <h1>JavaScript</h1>
              <p><label for="idLivro">ID: </label><input type="number" id="idLivro" /></p>
              <p><label for="titulo">Título: </label><input type="text" id="titulo" /></p>
              <p><label for="autor">Autor: </label><input type="text" id="autor" /></p>
              <p>
                <button id="btnC">Incluir: </button>
                <button id="btnR">Ler: </button>
                <button id="btnD">Deletar: </button>
                <button id="btnU">Atualizar: </button>
                <button id="btnL">Listagem: </button>
                <button id="btnRT">Ler por título</button>
                <button id="btnLA">Listagem por autor</button>
              </p>
              <p id="output"></p>
            </body>
          </html>

