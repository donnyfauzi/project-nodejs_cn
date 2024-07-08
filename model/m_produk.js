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

    get_semua_produk: function () {
        let sql = mysql.format(
            `SELECT * From produk;`
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
    
    tambah_produk: function (req) {
        let data = {
            nama_barang     : req.body.nama_barang,
            kategori        : req.body.kategori,
            harga_pokok     : req.body.harga_pokok,
            harga_jual      : req.body.harga_jual,
            kode            : req.body.kode,
        };

        let sql = mysql.format(`INSERT INTO produk SET ?`, [data]);

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

     get_satu_produk: function(id) {
        let sql = mysql.format(
            `SELECT * FROM produk WHERE produk.id = ?;`,
            [id]
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

     edit_produk: function(req) {
        let data = {
            nama_barang     : req.body.nama_barang,
            kategori        : req.body.kategori,
            harga_pokok     : req.body.harga_pokok,
            harga_jual      : req.body.harga_jual,
            kode            : req.body.kode,
        }
        let sql = mysql.format(
            `UPDATE produk SET ? WHERE id = ?`,
            [data, req.params.id_produk]
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
