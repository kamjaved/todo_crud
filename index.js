/*Import project dependencies*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
/*Initialize Express server*/
const app = express();



const todoRoutes = require('./routes/todoRoutes')


const DB = "mongodb+srv://kamran:1234@cluster0-fvxek.mongodb.net/cresentek?retryWrites=true&w=majority";
;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err))



/*Call body-parser and cors middleware*/
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*Create default route*/
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the REST API" });
});


app.use('/todo', todoRoutes);

/*Set PORT and listen for request*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});