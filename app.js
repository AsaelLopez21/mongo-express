const express = require('express')
const morgan = require('morgan')
const connectDB = require('./database/mongodb');
const estudiantesRoutes = require('./routes/estudiantes')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000

//!middleware
app.use(morgan());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

connectDB();


//!set
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/',(req,res)=>{
    res.send('index')
})

app.use('/estudiantes',estudiantesRoutes);

app.listen(port, () =>{
    console.log(`puerto en: http://localhost:${port}`);
})