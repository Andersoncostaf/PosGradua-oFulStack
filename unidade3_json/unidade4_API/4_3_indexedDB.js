<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IndexedDB</title>
    <script>
        let livros = {
            {id: 1, titulo: 'Ilíada', autor: 'Homero'},
            {id: 2, titulo: 'Odisseia', autor: 'Anderson'},
        };



        let bd;
        let reqBD = indexedDB.open('meuDB', 1);
        reqBD.onsucess = () => {
            bd = reqBD.result;
        };
        reqBD.onerror = () => {
            console.log(reqBD.error);
        };
        reqBD.onupgradeneeded = (e) => {
            bd = reqBD.result;
            if(!bd.objectStoreNames.contains('livros'))
            bd.createObjectStore('livros', {keyPath: 'id'});
        };

        onload = () => {};

    </script>
<body>
    <h1>JavaScript</h1>
    <p id="output"></p>
</body>
</html>