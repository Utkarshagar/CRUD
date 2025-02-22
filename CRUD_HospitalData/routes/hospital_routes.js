const express = require('express');
const Hospital = require('../models/Hospital'); 
const router = express.Router();


router.get('/hospitals', async (req, res) => {
    let hospitals = await Hospital.find();
    res.render('hospitals/index', { hospitals });
});


router.get('/hospitals/new', async (req, res) => {
    res.render('hospitals/new');
});


router.post('/hospitals', async (req, res) => {
    const { hospitalName, location, numberOfDoctors, numberOfBed } = req.body;
    await Hospital.create({ hospitalName, location, numberOfDoctors, numberOfBed });
    res.redirect('/hospitals');
});


router.get('/hospitals/:id', async (req, res) => {
    let { id } = req.params;
    let foundHospital = await Hospital.findById(id);
    res.render('hospitals/view', { foundHospital });
});


router.get('/hospitals/:id/edit', async (req, res) => {
    let { id } = req.params;
    let foundHospital = await Hospital.findById(id);
    res.render('hospitals/edit', { foundHospital });
});

// Edit the hospital's details
router.patch('/hospitals/:id', async (req, res) => {
    let { id } = req.params;
    const { location, numberOfDoctors, numberOfBed } = req.body; // Only editable fields
    await Hospital.findByIdAndUpdate(id, { location, numberOfDoctors, numberOfBed });
    res.redirect(`/hospitals/${id}`);
});

// Delete a hospital
router.delete('/hospitals/:id', async (req, res) => {
    let { id } = req.params;
    await Hospital.findByIdAndDelete(id);
    res.redirect('/hospitals');
});

module.exports = router;
