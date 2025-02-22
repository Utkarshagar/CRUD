const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const hospitalRoutes = require('./routes/hospital_routes');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/hospitalManagement')
.then(() => {
    console.log('Connected to Hospital Management Database');
})
.catch((err) => {
    console.log(err);
    console.log('MongoDB connection failed');
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(hospitalRoutes);

app.listen(8000, () => {
    console.log(`Server is listening on port 8000 at http://localhost:8000/hospitals`);
});
