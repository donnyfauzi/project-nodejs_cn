const m_user = require("../model/m_user")

module.exports = {
    main: async function (req, res) {
        let dataview = {
            req: req,
            semua_user: await m_user.get_semua_user(),
        }
       res.render("dashboard/user/main", dataview)
        
    },

    edit: async (req,res)=>{
        const id = req.params.id_user
        let dataview = {
            req       : req,
            semua_user: await m_user.get_satu_user(id),
            info_error: null
        }
        res.render("dashboard/user/form-edit-user", dataview)
    },

    proses_update: async (req, res) => {
        try {
            let update      = await m_user.edit_user(req)
            let isi_notif   = `Berhasil update data user...`
            if (update.affectedRows > 0) {
                res.redirect(`/user?note=sukses&pesan=${isi_notif}`)
            }
        } catch (error) {
            console.log(error)
             res.render("dashboard/user/form-edit-user", { info_error: error });
        }
    },

    // proses_hapus: async (req, res) => {
    //     try {
    //         let update      = await m_user.hapus_user(req)
    //         let isi_notif   = `Berhasil hapus data user...`
    //         if (update.affectedRows > 0) {
    //             res.redirect(`/user?note=sukses&pesan=${isi_notif}`)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //          res.render("user/main", { info_error: error });
    //     }
    // },


    
}