const mongoose = require('mongoose');
const Hospital = require('./models/Hospital.model');  // Assuming you have a Hospital model

const hospitalArray = [
    {
        name: "City Hospital",
        location: "New York, NY",
        numberOfDoctors: 120,
        numberOfBeds: 300
    },
    {
        name: "St. Mary's Hospital",
        location: "Los Angeles, CA",
        numberOfDoctors: 80,
        numberOfBeds: 200
    }
];

async function seedDB() {
    await Hospital.insertMany(hospitalArray);
    console.log("Hospital data seeded successfully");
}

module.exports = seedDB;
