const express = require("express");
const mysql = require("mysql");
const argon2 = require("argon2");
const url = require("url");
const PORT = 8585;
const connection = mysql.createPool({
    host: "localhost",
    user: "mincasaadmin",
    password: "3BjJAXKh6jZRZYA5",
    database: "mincasa"
});
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    next();
});

app.post("/API/v1/admin", (req, res) => {
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='admin'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

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
                if (sqlRes.length > 0) {

                    if (await argon2.verify(sqlRes[0].password, password)) {
                        if (sqlRes[0].admin) {
                            connection.query(`SELECT * FROM request`, (sqlErr, sqlRes) => {
                                if (sqlErr) {
                                    if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                                        res.status(400).send(sqlErr.message);
                                    } else {
                                        res.status(404).send(sqlErr.message);
                                    }
                                }
                                else {
                                    let response = {};
                                    sqlRes.forEach(item => {
                                        response[item.endpoint] = item.count;
                                    });
                                    res.status(200).send(JSON.stringify(response));
                                }
                            });
                        } else {
                            res.status(401).send("Unauthorized.");
                        }
                        
                    } else {
                        res.status(401).send("Incorrect password.");
                    }
                }
                else {
                    res.status(404).send("Username doesn't exist.");
                }
            });
    });
});

app.post("/API/v1/login", (req, res) => {
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='login'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

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

                if (sqlRes.length > 0) {
                    if (await argon2.verify(sqlRes[0].password, password)) {                    
                        res.status(200).send("successful login.");
                    } else {
                        res.status(401).send("Incorrect password.");
                    }
                }
                else {
                    res.status(404).send("Username doesn't exist.");
                }
            });
    });
});

app.post("/API/v1/signup", (req, res) => {
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='signup'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

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
                }
                else {
                    res.status(200).send(JSON.stringify(sqlRes.message));
                }
            });
    });
});

app.put("/API/v1/settings/password", (req, res) => {
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='update-password'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

    let body = "";
    req.on('data', function (chunk) {
        if (chunk != null) { // Data may come in multiple chunks
            body += chunk;
        }
    });

    req.on('end', async function () {
        const parsedObj = JSON.parse(body);
        const hashpass = await argon2.hash(parsedObj.password, {type: argon2.argon2id})
        const sqlQuery = `UPDATE user 
                          SET password = '${hashpass}'
                          WHERE username = '${parsedObj.username}'`;
        connection.query(sqlQuery,
            (sqlErr, sqlRes) => {
                if (sqlErr) {
                    if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                        res.status(400).send(sqlErr.message);
                    } else {
                        res.status(404).send(sqlErr.message);
                    }
                }
                else {
                    res.status(200).send(JSON.stringify(sqlRes.message));
                }
            });
    });
});

app.delete("/API/v1/settings/delete", (req, res) => {
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='delete-user'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

    const q = url.parse(req.url, true);
    const username = q.query.username;
    const sqlQuery = `DELETE FROM user
                        WHERE username='${username}'`;
    connection.query(sqlQuery, (sqlErr, sqlRes) => {
        if (sqlErr) {
            if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                res.status(400).send(sqlErr.message);
            } else {
                res.status(404).send(sqlErr.message);
            }
        }
        else {
            res.status(200).send(JSON.stringify(sqlRes.message));
        }
    });
});

app.delete("/API/v1/usage/bill", (req, res) => {
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='delete-bill'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });
    
    const q = url.parse(req.url, true);
    const bill_id = q.query.bill_id;
    const sqlQuery = `DELETE FROM bill
                      WHERE bill_id='${bill_id}'`;
    connection.query(sqlQuery, (sqlErr, sqlRes) => {
        if (sqlErr) {
            if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                res.status(400).send(sqlErr.message);
            } else {
                res.status(404).send(sqlErr.message);
            }
        }
        else {
            res.status(200).send(JSON.stringify(sqlRes.message));
        }
    });
});

app.get("/API/v1/usage", (req, res) => { // http://mincasa.khademsam.com/API/v1/usage/?username=sam -> {"average":92.5,"current_amount":95,"prev_amount":95}
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='get-usage'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });
    
    const q = url.parse(req.url, true);
    const username = q.query.username;
    const sqlQuery = `SELECT * FROM bill
                      WHERE username='${username}'`;
    connection.query(sqlQuery, (sqlErr, sqlRes) => {
        if (sqlErr) {
            if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                res.status(400).send(sqlErr.message);
            } else {
                res.status(404).send(sqlErr.message);
            }
        } else {
            const current_date = new Date();
            const current_year = current_date.getFullYear();
            const current_month = current_date.getMonth() + 1;
            let energy_total = 0;
            let current_month_amount = null;
            let prev_month_amount = null;
            sqlRes.forEach(bill => {
                energy_total += bill.amount;
                if (bill.month == current_month && bill.year == current_year) {
                    current_month_amount = bill.amount;
                }
                else if (bill.month == (current_month - 1) && bill.year == current_year) {
                    prev_month_amount = bill.amount;
                }
            });
            let response = {
                average: energy_total/(sqlRes.length),
                current_amount: current_month_amount,
                prev_amount: prev_month_amount
            }
            res.status(200).send(JSON.stringify(response));
        }
    });
});

app.get("/API/v1/usage/bills", (req, res) => { // http://mincasa.khademsam.com/API/v1/usage/bills/?username=sam -> [{"bill_id":1,"username":"sam","month":1,"year":2022,"amount":100},{"bill_id":2,"username":"sam","month":2,"year":2022,"amount":80},{"bill_id":3,"username":"sam","month":3,"year":2022,"amount":95},{"bill_id":4,"username":"sam","month":4,"year":2022,"amount":95}]
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='get-bills'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

    const q = url.parse(req.url, true);
    const username = q.query.username;
    const sqlQuery = `SELECT * FROM bill 
                      WHERE username='${username}' 
                      ORDER BY year DESC, month DESC`;
    connection.query(sqlQuery, (sqlErr, sqlRes) => {
        if (sqlErr) {
            if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                res.status(400).send(sqlErr.message);
            } else {
                res.status(404).send(sqlErr.message);
            }
        } else {
            res.status(200).send(JSON.stringify(sqlRes));
        }
    });
});

app.post("/API/v1/usage/addbill", (req, res) => {
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='add-bill'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

    let body = "";
    req.on('data', function (chunk) {
        if (chunk != null) { // Data may come in multiple chunks
            body += chunk;
        }
    });

    req.on('end', async function () {
        const parsedObj = JSON.parse(body);
        let points_to_add = 0;
        // Calculating points user gets for this month's bill.
        if (parsedObj.amount <= 50) {  // under 50 -> 150 points
            points_to_add = 150;
        } else if (parsedObj.amount <= 100) {  // For every $ extra between 50 to 100, lose 1 points
            points_to_add = 150 - (parsedObj.amount - 50);
        } else if (parsedObj.amount <= 150) {  // For every $ extra between 100 to 150, lose 2 points
            points_to_add = 100 - ((parsedObj.amount - 100) * 2);
        }
        const sqlQueryGetPoints = `INSERT INTO bill (username, month, year, amount) 
                                   VALUES ('${parsedObj.username}', ${parsedObj.month}, ${parsedObj.year}, ${parsedObj.amount})`;
        connection.query(sqlQueryGetPoints, (sqlErr, sqlRes) => {
            if (sqlErr) {
                if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                    res.status(400).send(sqlErr.message);
                } else {
                    res.status(404).send(sqlErr.message);
                }
            } else {
                const sqlQueryUpdatePoints = `UPDATE user
                                              SET points=points + ${points_to_add}
                                              WHERE username='${parsedObj.username}'`
                connection.query(sqlQueryUpdatePoints, (sqlErr, sqlRes) => {
                    if (sqlErr) {
                        if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                            res.status(400).send(sqlErr.message);
                        } else {
                            res.status(404).send(sqlErr.message);
                        }
                    } else {
                        res.status(200).send(JSON.stringify(sqlRes));
                    }
                });
            }
        });
    });
});

app.get("/API/v1/user", (req, res) => { // http://mincasa.khademsam.com/API/v1/user/?username=sam -> [{"points":0}]
    connection.query(`UPDATE request
                      SET count=count+1
                      WHERE endpoint='get-user'`, 
                      (sqlErr, sqlRes) => {
                        if (sqlErr) {
                            console.log(sqlErr.message);
                        } else {
                            console.log(sqlRes.message);
                        }
    });

    const q = url.parse(req.url, true);
    const username = q.query.username;
    const sqlQuery = `SELECT points FROM user
                      WHERE username='${username}'`;
    connection.query(sqlQuery, (sqlErr, sqlRes) => {
        if (sqlErr) {
            if(sqlErr.code === 'ER_BAD_FIELD_ERROR') {
                res.status(400).send(sqlErr.message);
            } else {
                res.status(404).send(sqlErr.message);
            }
        } else {
            res.status(200).send(JSON.stringify(sqlRes));
        }
    });
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Listening to PORT: ", PORT);
})