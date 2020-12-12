//install library yang diperlukan npm i express body-parser mysql, lalu masukan library ke dalam app,js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const ejs = require("ejs");

//membuat koneksi dengan database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cahyaseptia011',
    database: 'employee'
});

//mengatur folder views
app.set('views', path.join(__dirname, 'views'));

//mengatur folder public
app.use(express.static("public"));

//mengatur view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//menampilkan query
app.get('/', (req, res) => {
    let sql = "SELECT * FROM users_tb";
    let query = connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.render('user_index', {
            title: "DW EMPLOYEE",
            users_tb: rows
        });
    });
})

//menambahkan fitur tambah
app.post('/save', (req, res) => {
    let data = {
        name: req.body.name,
        photo: req.body.photo
    };
    let sql = "INSERT INTO users_tb SET ?";

    let query = connection.query(sql, data, (err, results) => {
        {
            if (err) throw err;
            res.redirect('/');
        };
    });
});
//koneksikan dengan database
connection.connect(function(error) {
    if (!!error) console.log("error");
    else console.log("Database connected!");
});

//membuat local server
app.listen(4500, () => {
    console.log("Berjalan dengan menggunakan port 4500!");
});