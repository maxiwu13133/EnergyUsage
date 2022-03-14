const express = require("express");
const mysql = require("mysql");
const argon2 = require("argon2");
const PORT = 8585;
const connection = mysql.createPool({
    host: "localhost",
    user: "mincasaadmin",
    password: "3BjJAXKh6jZRZYA5",
    database: "mincasa"
});
const app = express();

// stats variables
let reqCountLogin = 0;
let reqCountAdmin = 0;
let reqCountSignup = 0;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    next();
});

app.post("/API/v1/admin", (req, res) => {
    reqCountAdmin++;
    let body = "";
    req.on('data', function (chunk) {
        if (chunk != null) { // Data may come in multiple chunks
            body += chunk;
        }
    });

    req.on('end', async function () {
        const parsedObj = JSON.parse(body);
        const username = parsedObj.username;
        const password = parsedObj.password;
        const sqlQuery = `SELECT password, admin FROM user WHERE username = "${username}"`;
        connection.query(sqlQuery, async (sqlErr, sqlRes) => {   // Crashes when username doesn't exist.
                if (sqlErr) {
                    if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                        res.status(400).send(sqlErr.message);
                    } else {
                        res.status(404).send(sqlErr.message);
                    }
                    
                    return console.log(sqlErr);
                }
                if (await argon2.verify(sqlRes[0].password, password)) {
                    if (sqlRes[0].admin) {
                        let response = {
                            admin: sqlRes[0].admin,
                            reqCountLogin: reqCountLogin,
                            reqCountSignup: reqCountSignup,
                            reqCountAdmin: reqCountAdmin
                        };
                        res.status(200).json(JSON.stringify(response));
                    } else {
                        res.status(401).json("Unauthorized.");
                    }
                    
                } else {
                    res.status(400).json("Incorrect password.");
                }
            });
    });
});

app.post("/API/v1/login", (req, res) => {
    reqCountLogin++;
    let body = "";
    req.on('data', function (chunk) {
        if (chunk != null) { // Data may come in multiple chunks
            body += chunk;
        }
    });

    req.on('end', async function () {
        const parsedObj = JSON.parse(body);
        const username = parsedObj.username;
        const password = parsedObj.password;
        const sqlQuery = `SELECT password FROM user WHERE username = "${username}"`;
        connection.query(sqlQuery, async (sqlErr, sqlRes) => {   // Crashes when username doesn't exist.
                if (sqlErr) {
                    if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                        res.status(400).send(sqlErr.message);
                    } else {
                        res.status(404).send(sqlErr.message);
                    }
                    return console.log(sqlErr);
                }

                if (await argon2.verify(sqlRes[0].password, password)) {                    
                    res.status(200).json("successful login.");
                } else {
                    res.status(400).json("Incorrect password.");
                }
            });
    });
});

app.post("/API/v1/signup", (req, res) => {
    reqCountSignup++;
    let body = "";
    req.on('data', function (chunk) {
        if (chunk != null) { // Data may come in multiple chunks
            body += chunk;
        }
    });

    req.on('end', async function () {
        const parsedObj = JSON.parse(body);
        const hashpass = await argon2.hash(parsedObj.password, {type: argon2.argon2id})
        const sqlQuery = `INSERT INTO user (username, password, admin) 
                          VALUES ('${parsedObj.username}', '${hashpass}', FALSE)`;
        connection.query(sqlQuery,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                        res.status(400).send(sqlErr.message);
                    } else {
                        res.status(404).send(sqlErr.message);
                    }
                    
                    return console.log(sqlErr);
                }
                res.status(200).send(JSON.stringify(sqlRes.message));
            });
    });
});


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Listening to PORT: ", PORT);
})