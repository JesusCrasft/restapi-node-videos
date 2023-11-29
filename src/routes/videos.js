const { Router } = require('express');
const router = Router();

const videos = require('../sample.json')

router.post('/sendch', (req, res) => {
    const { channel } = req.body;
    console.log(channel);
});

router.get('/getvids', (req, res) => {
    res.json(videos);
});

router.delete('/:id', (req,res) => {
    
});

module.exports = router;