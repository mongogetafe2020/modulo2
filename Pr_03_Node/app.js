// Servidor web estático
let express = require('express');

let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
})
