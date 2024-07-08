const bcrypt    = require('bcryptjs')
const mysql = require("mysql2")
const db = mysql.createConnection
({
    
  host      : "localhost",
  user      : "root",
  password  : "",
  database  : "inventory_db",
  
})

db.connect();

module.exports =
{
    
  tambah: function (req) {
    let data = {
      username        : req.body.form_username,
      password        : bcrypt.hashSync (req.body.form_password) ,
      nama_lengkap    : req.body.nama_lengkap,
   
    };

    let sql = mysql.format(`INSERT INTO user SET ?`, [data]);

    return new Promise((resolve, reject) => {
      db.query(sql, function (errorSql, hasil) {
        if (errorSql) {
          reject(errorSql);
        } else {
          resolve(hasil);
        }
      });
    });
  },
}