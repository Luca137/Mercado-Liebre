const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;
const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.listen(PORT,() => {
    console.log("Corriendo Correctamente")
});

app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});