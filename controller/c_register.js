const m_register = require("../model/m_register");

module.exports = 
{
    form_register: function (req, res) {
        let dataview = {
            req: req,
        }
    res.render("auth/form_register", dataview)
    },

    tambah: async (req, res) => {
        res.render("auth/form_register", { info_error: null });
    },

    proses_simpan: async(req,res) => {
        try {
            let insert      = await m_register.tambah(req)
            let isi_notif   = `Succees, Please Sign in !`
            if (insert.affectedRows > 0) {
                res.redirect(`/register?note=sukses&pesan=${isi_notif}`)
            }
        } catch (error) {
            res.render("auth/form_register", { info_error: error })
        }
    },


}