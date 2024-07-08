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
    get_semua_kategori: function () {
        let sql = mysql.format(
            `SELECT * From kategori;`
        );

        return new Promise((resolve, reject) => {
            db.query(sql, function (errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            });
        });
    }, 
    
    tambah_kategori: function (req) {
        let data = {
            nama_kategori   : req.body.nama_kategori,
            keterangan      : req.body.keterangan,
        };

        let sql = mysql.format(`INSERT INTO kategori SET ?`, [data]);

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
