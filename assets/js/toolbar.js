openFormAddData = () => {
    $("#form-add-data").addClass("active")
    $("#product_name").focus()
}

closeFormAddData = () => {
  $("#form-add-data").removeClass("active")
};


const element = document.getElementById("harga-produk")
const maskOptions = {
  mask: "+{7}(000)000-00-00"
};
const mask = IMask(element, maskOptions);

// var rupiah = document.getElementById("rupiah")
// rupiah.addEventListener("keyup", function (e) {
//   rupiah.value = formatRupiah(this.value, "Rp. ")
// })

// function formatRupiah(angka, prefix) {
//   var number_string = angka.replace(/[^,\d]/g, "").toString(),
//     split = number_string.split(","),
//     sisa = split[0].length % 3,
//     rupiah = split[0].substr(0, sisa),
//     ribuan = split[0].substr(sisa).match(/\d{3}/gi)
//       if (ribuan) {
//         separator = sisa ? "." : ""
//         rupiah += separator + ribuan.join(".")
//   }
//   rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah
//   return prefix == undefined ? rupiah : (rupiah ? "Rp. " + rupiah : "")
    
// }