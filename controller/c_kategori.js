const m_kategori = require("../model/m_kategori")

module.exports =
{
    list_kategori: async function (req, res) {
        let dataview = {
            req: req,
            semua_kategori: await m_kategori.get_semua_kategori(),
        }
        res.render("kategori/main", dataview)

    },

    tambah_kategori: async (req, res) => {
        res.render("/kategori/main", { info_error: null });
    },
    proses_simpan: async (req, res) => {
        try {
            let insert      = await m_kategori.tambah_kategori(req)
            let isi_notif   = `Berhasil Menambahkan kategori Baru...`
        if (insert.affectedRows > 0) {
            res.redirect(`/kategori?note=sukses&pesan=${isi_notif}`)
        }
        } catch (error) {
            res.render("/kategori/main", { info_error: error });
            
        }
    },

        
}