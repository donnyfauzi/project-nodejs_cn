const mysql = require("mysql2")
const moment= require('moment')
moment.locale('id')

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
    getAll_by_produk: function(nama_produk) {
        let sql = mysql.format(
            `SELECT * FROM stok WHERE nama_produk = ?`,
            [nama_produk]
        )

        return new Promise( (resolve,reject)=>{
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

}