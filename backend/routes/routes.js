const express = require('express');
const router = express.Router();

const {getPosts, sendPosts} = require('../routes/consultas');



router.get('/posts', async (req, res) => {
    const results = await getPosts();
    res.json(results)
})

router.post('/posts', async (req, res) => {
    const {titulo, img, descripcion} = req.body;
    await sendPosts(titulo, img, descripcion);
    res.send('viaje agregado')
})

module.exports = router;