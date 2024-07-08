const m_produk  = require('../model/m_produk')
const m_laporan    = require('../model/m_laporan')
const moment    = require('moment')
moment.locale('id')

module.exports =
{

    allstok: async function(req,res) {
        let dataview = {
            req         : req,
            info_error  : null,
            produk      : await m_produk.get_semua_produk(),
            datalaporan : await m_laporan.getAll_by_produk(req.query.namaproduk),
            moment      : moment,
        }
        res.render('laporan/allstok', dataview)
    }

}