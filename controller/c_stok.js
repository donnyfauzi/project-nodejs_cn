const m_produk = require('../model/m_produk')
const m_stok    = require('../model/m_stok')

module.exports =
{

    form_stok_masuk: async function (req, res) {
        let dataview = {
            req: req,
            info_error: null,
            produk: await m_produk.get_semua_produk()
        }
        res.render('stok/form-stok-masuk', dataview)
    },

     proses_stok_masuk: async function(req,res) {
        try {
            let stok_terakhir   = await m_stok.ambil_stoksisa_terakhir(req.body.form_produk) // cek sisa di database
            let sisa_terakhir   = 0

            if (stok_terakhir.length > 0) {
                sisa_terakhir = stok_terakhir[0].sisa //ambil objek stok_sisa
            }
            
            let hasil_akhir     = sisa_terakhir + Number(req.body.form_jumlah) //jumlahkan dengan stok masuk yg diinput

            // cek jumlah yg masukkan tidak boleh dibawah 1
            if (req.body.form_jumlah < 1) {
                let isi_info = 'Jumlah yang dimasukkan minimal 1 !!!'
                return res.redirect(`/stok-masuk?note=info&pesan=${isi_info}`)
            }

            let insert          = await m_stok.input_stok_masuk(req, hasil_akhir)
            let isi_notif       = `berhasil input stok masuk`
            if (insert.affectedRows > 0) {
                res.redirect(`/stok-masuk?note=sukses&pesan=${isi_notif}`)
            }
        } catch (error) {
            console.log(error)
            let dataview = {
                req         : req,
                info_error  : error,
                produk      : await m_produk.get_semua_produk()
            }
            res.render('stok/form-stok-masuk', dataview)
        }
    },
     
     form_stok_keluar: async function(req,res) {
        let dataview = {
            req         : req,
            info_error  : null,
            produk      : await m_produk.get_semua_produk()
        }
        res.render('stok/form-stok-keluar', dataview)
    },

    proses_stok_keluar: async function(req,res) {
        try {
            let stok_terakhir   = await m_stok.ambil_stoksisa_terakhir(req.body.form_produk) // cek sisa di database
            let sisa_terakhir   = 0

            if (stok_terakhir.length > 0) {
                sisa_terakhir = stok_terakhir[0].sisa //ambil objek stok_sisa
            }
            
            let hasil_akhir     = sisa_terakhir - Number(req.body.form_jumlah) //jumlahkan dengan stok masuk yg diinput

            // cek apakah jumlah yg dikeluarkan mencukupi
            if (req.body.form_jumlah > sisa_terakhir) {
                let isi_info = `Jumlah yang dikeluarkan (${req.body.form_jumlah}) melebihi stok yang ada (${sisa_terakhir})`
                return res.redirect(`/stok-keluar?note=info&pesan=${isi_info}`)
            }
            // cek jumlah yg dikeluarkan tidak boleh dibawah 1
            if (req.body.form_jumlah < 1) {
                let isi_info = 'Jumlah yang dikeluarkan minimal 1 !!!'
                return res.redirect(`/stok-keluar?note=info&pesan=${isi_info}`)
            }

            let insert          = await m_stok.input_stok_keluar(req, hasil_akhir)
            let isi_notif       = `berhasil mengeluarkan stok`
            if (insert.affectedRows > 0) {
                res.redirect(`/stok-keluar?note=sukses&pesan=${isi_notif}`)
            }
        } catch (error) {
            console.log(error)
            let dataview = {
                req         : req,
                info_error  : error,
                produk      : await m_produk.get_semua_produk()
            }
            res.render('template/struktur', dataview)
        }
    },




}