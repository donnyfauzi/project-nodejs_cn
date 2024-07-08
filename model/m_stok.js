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

     ambil_stoksisa_terakhir: function(nama_produk) {
        let sql = mysql.format(
            `SELECT * FROM stok
            WHERE nama_produk = ?
            ORDER BY id DESC
            LIMIT 1`,
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

    input_stok_masuk: function (req, hasil_akhir) {
        let data    = {
            nama_produk     : req.body.form_produk,
            kategori_produk : req.body.kategori,
            stok_masuk      : req.body.form_jumlah,
            stok_keluar     : 0,
            sisa            : hasil_akhir,
            keterangan      : req.body.form_keterangan,
            diinput_oleh    : req.session.user.id,
            waktu_input     : moment().format('YYYY-MM-DD HH:mm:ss')
        }
        let sql = mysql.format(
            `INSERT INTO stok SET ?`,
            [data]
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

    input_stok_keluar: function(req, hasil_akhir) {
        let data    = {
            nama_produk     : req.body.form_produk,
            kategori_produk : req.body.kategori,
            stok_masuk      : 0,
            stok_keluar     : -req.body.form_jumlah,
            sisa            : hasil_akhir,
            keterangan      : req.body.form_keterangan,
            diinput_oleh    : req.session.user.id,
            waktu_input     : moment().format('YYYY-MM-DD HH:mm:ss')
        }
        let sql = mysql.format(
            `INSERT INTO stok SET ?`,
            [data]
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
