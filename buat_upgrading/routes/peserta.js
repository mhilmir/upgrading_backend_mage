const router = require('express').Router();
const Peserta = require('../models/Peserta');

router.get(`/`, async (req, res) => {
    // res.send(`gw ada di peserta  GET`);
    try{
        const allPeserta = await Peserta.find();
        res.json(allPeserta);
    } catch(err){
        res.json({message: err});
    }
});

router.post('/', async (req,res) => {
    // res.send('gw ada di peserta POST');
    const peserta = new Peserta({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
    });

    try{
        const savedPeserta = await peserta.save();
        res.json(savedPeserta);
    } catch(err){
        res.json({message: err});
    }
});

router.delete('/:peserta_id', async (req,res) => {
    // console.log(req.params.peserta_id);
    try{
        const deletedPeserta = await Peserta.findOneAndDelete({_id: req.params.peserta_id});
        res.json(deletedPeserta);
    } catch(err){
        res.json({message: err});
    }
});

router.patch('/:peserta_id', async (req,res) => {
    try{
        const updatedPeserta = await Peserta.findByIdAndUpdate(req.params.peserta_id, {$set: {
            name: req.body.name
        }});
        res.json(updatedPeserta);
    } catch(err){
        res.json({message: err});
    }
});
// router.post('/olimp', (req,res) => {
//     res.send('gw ada di peserta/olimp POST');
// });

module.exports = router;