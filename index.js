const express = require('express');
const repoContext =require('./repository/repository-wrapper');
const cors = require('cors');
const {validateProduct} = require('./middleware/products-validation')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, function() {
    console.log("Server started. Listening on port 5000");
});

app.get('/api/products', (req, res) => {
    const products = repoContext.products.findAllProducts();
    return res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = repoContext.products.findProductById(id);
    return res.send(product);
});

app.post('/api/products', [validateProduct], (req,res) => {
    const newProduct = req.body;
    const addedProduct = repoContext.products.createProduct(newProduct);
    return res.send(addedProduct);
});

app.put('/app/products/id', [validateProduct], (req, res) => {
    const id = id = req.params.id;
    const productPropertiesToUpdate = req.body;
    const updatedProduct = repoContext.products.updateProduct(id, productPropertiesToUpdate);
    return res.send(updatedProduct)
});

app.delete('/app/products/id', (req, res) => {
    const id = id = req.params.id;
    const updatedDataSet = repoContext.products.deleteProduct(id);
    return res.send(updatedDataSet)
});






app.get('/api/songs', (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
});

app.get('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const song = repoContext.products.findSongById(id);
    return res.send(song);
});

app.post('/api/songs', [validateProduct], (req,res) => {
    const newProduct = req.body;
    const addedProduct = repoContext.products.createSong(newProduct);
    return res.send(addedProduct);
});

app.put('/app/songs/id', [validateProduct], (req, res) => {
    const id = id = req.params.id;
    const productPropertiesToUpdate = req.body;
    const updatedProduct = repoContext.products.updateSong(id, productPropertiesToUpdate);
    return res.send(updatedProduct)
});

app.delete('/app/songs/id', (req, res) => {
    const id = id = req.params.id;
    const updatedDataSet = repoContext.products.deleteSong(id);
    return res.send(updatedDataSet)
});

