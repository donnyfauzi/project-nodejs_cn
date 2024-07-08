const express         = require("express")
const app             = express()
const port            = 3000
const passport        = require("passport")
const cookieParser    = require("cookie-parser")
const session         = require("express-session")

const c_main          = require("./controller/c_main")
const c_auth          = require("./controller/c_auth")
const c_register      = require("./controller/c_register")
const c_dashboard     = require("./controller/c_dashboard")
const c_dataProduk    = require("./controller/c_data-produk")
const c_user          = require("./controller/c_user")
const c_kategori      = require("./controller/c_kategori")
const c_laporan       = require("./controller/c_laporan")
const c_stok          = require("./controller/c_stok")

const cek_login       = c_auth.cek_login

app.use(cookieParser("secret"))
app.use
(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
    },
  })
)

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }))
app.use(express.static("assets"))

app.set("view engine", "ejs")
app.set("views", "./view-ejs")

app.get("/", c_main.main)

app.get("/login", c_auth.form_login)
app.post("/proses-login", c_auth.proses_login)

app.get("/register", c_register.form_register)
app.get("/register/tambah", c_register.tambah)
app.post("/register/proses-simpan", c_register.proses_simpan)

app.get("/dashboard", cek_login, c_dashboard.main)

app.get("/data-produk", cek_login, c_dataProduk.main)
app.get("/data-produk/tambah", cek_login, c_dataProduk.tambah)
app.post("/data-produk/proses-simpan", cek_login, c_dataProduk.proses_simpan)

app.get("/data-produk/edit/:id_produk", cek_login, c_dataProduk.edit)
app.post("/data-produk/proses-update/:id_produk", cek_login, c_dataProduk.proses_update)

app.get("/user", cek_login, c_user.main)
app.get("/user/edit/:id_user", cek_login, c_user.edit)
app.post("/user/proses-update/:id_user", cek_login, c_user.proses_update)

// app.post("user/hapus/:id_user", cek_login, c_user.proses_hapus)
// app.post("/user/hapus/:id_user", cek_login, c_user.proses_hapus)

app.get("/kategori", cek_login, c_kategori.list_kategori)
app.get("/kategori/tambah", cek_login, c_kategori.tambah_kategori)
app.post("/kategori/proses-simpan", cek_login, c_kategori.proses_simpan)

app.get("/stok-masuk", cek_login, c_stok.form_stok_masuk)
app.post("/stok-masuk/proses-simpan", cek_login, c_stok.proses_stok_masuk)

app.get("/stok-keluar", cek_login, c_stok.form_stok_keluar)
app.post("/stok-keluar/proses-simpan", cek_login, c_stok.proses_stok_keluar)


app.get('/laporan', cek_login, c_laporan.allstok)






app.listen(port, () => {
    console.log(`App Siap..!!!, Buka http://localhost:${port}`)
})









