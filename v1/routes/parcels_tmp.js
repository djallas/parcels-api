const express = require('express');
const router = express.Router();


const parcels = require('./../../data/parcels');

// GET /parcels
router.get('/', (req, res, next) =>{
    res.status(200).send({
        parcels: parcels
    })
});


router.post('/', (req, res, next) =>{
    const parcel = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        parcels: parcel
    });
});

router.get('/:id', (req, res, next) =>{
    const id = parseInt(req.params.id);
    parcels.map((parcel) => {
        if(parcel.id === id){
            return res.status(200).send({
                parcel:parcel
            });
        }
    });
});

router.patch('/:id', (req, res, next) =>{
    res.status(200).json({
        message: "Updated parcel order"
    });
});

router.delete('/:id', (req, res, next) =>{
    res.status(200).json({
        message: "Parcel Deleted"
    });
});

module.exports = router;