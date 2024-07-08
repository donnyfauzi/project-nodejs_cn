const mysql = require("mysql2")
const bcrypt  = require("bcryptjs")
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

    get_semua_user: function () {
        let sql = mysql.format(
            `SELECT * From user;`
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

    get_satu_user: function(id) {
        let sql = mysql.format(
            `SELECT * FROM user WHERE user.id = ?;`,
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

    edit_user: function(req) {
        let data = {
            username        : req.body.username,
            password        : bcrypt.hashSync (req.body.password),
            nama_lengkap    : req.body.nama_lengkap,
        }
        let sql = mysql.format(
            `UPDATE user SET ? WHERE id = ?`,
            [data, req.params.id_user]
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

    // hapus_user: function () {
    //     let sql = mysql.format(
    //         `DELETE FROM user WHERE user.id = ?;`
    //         [id]
    //     );

    //     return new Promise((resolve, reject) => {
    //         db.query(sql, function (errorSql, hasil) {
    //             if (errorSql) {
    //                 reject(errorSql)
    //             } else {
    //                 resolve(hasil)
    //             }
    //         });
    //     });
    // },
}