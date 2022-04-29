const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = 4000;

// PW 암호화를 위해 생성
const bcrypt = require("bcrypt");
const saltRounds = 10;

const connection = mysql.createConnection({
  host: "localhost",
  user: "kidscafe",
  password: "kidscafe",
  database: "kidscafe",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    "Server Response Success \n /user /cafe /cafe/#/menu cafe/#/comment"
  );
});

app.get("/hello", (req, res) => {
  res.send({ hello: "Hello React" });
});

app.get("/user", (req, res) => {
  const sql = `SELECT * FROM USER`;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

app.post("/createuser", (req, res) => {
  const userid = req.body.userid;
  const userpw = req.body.userpassword;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(userpw, salt, (err, hash) => {
      console.log(hash);
      const sql = `insert into user (user_ID, user_PW) values ('${userid}', '${hash}')`;
      connection.query(sql, (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send("Successfully Create User");
        }
      });
    });
  });
});

app.post("/login", (req, res) => {
  const userid = req.body.userid;
  const userpw = req.body.userpassword;
  const sql = `select user_PW from user where user_ID='${userid}'`;
  connection.query(sql, (err, hash) => {
    const hashPW = hash[0].user_PW;
    if (err) {
      return res.send(err);
    } else {
      bcrypt.compare(userpw, hashPW, function (err, result) {
        if (result === true) {
          return res.send("LOGIN Success!!");
        } else {
          return res.send("LOGIN Failed");
        }
      });
    }
  });
});

app.get("/cafe/:cafeid/menu", (req, res) => {
  const sql = `select * from menu where cafe_id=${req.params.cafeid}`;
  connection.query(sql, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
