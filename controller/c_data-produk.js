const m_produk = require("../model/m_produk")

module.exports =
{

    main: async function (req, res) {
        let dataview = {
            req: req,
            semua_produk: await m_produk.get_semua_produk(),
        }
        res.render("dashboard/data-produk/main", dataview)
    },

    tambah: async (req, res) => {
        res.render("dashboard/data-produk/main", { info_error: null });
    },
    proses_simpan: async (req, res) => {
        try {
            let insert      = await m_produk.tambah_produk(req)
            let isi_notif   = `Berhasil Menambahkan Data Baru...`
        if (insert.affectedRows > 0) {
            res.redirect(`/data-produk?note=sukses&pesan=${isi_notif}`)
        }
        } catch (error) {
            res.render("dashboard/data-produk/main", { info_error: error });
            
        }
    },

    edit: async (req,res)=>{
        const id = req.params.id_produk
        let dataview = {
            req: req,
            semua_produk: await m_produk.get_satu_produk(id),
            info_error: null
        }
        res.render("dashboard/data-produk/form-edit", dataview)
    },

    proses_update: async (req, res) => {
        try {
            let update      = await m_produk.edit_produk(req)
            let isi_notif   = `Berhasil update data...`
            if (update.affectedRows > 0) {
                res.redirect(`/data-produk?note=sukses&pesan=${isi_notif}`)
            }
        } catch (error) {
            console.log(error)
             res.render("dashboard/data-produk/form-edit", { info_error: error });
        }
    },
  
        
}