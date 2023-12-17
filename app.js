//digunakan untuk mengimpor modul express.
const express = require("express");
//digunakan untuk membuat aplikasi dengan memanggil express dan menyimpannya dalam var app.
const app = express();
//Menyimpan nomor port yang akan digunakan untuk server dalam variabel port.
const port = 3000;
//digunakan untuk mengimpor file atau modul dari routes
const Route = require("./routes");

//digunakan untuk memungkinkan aplikasi Express untuk memahami dan menguraikan data yang dikirim sebagai JSON dalam permintaan HTTP.
app.use(express.json());

//digunakan untuk menggunakan rute-rute yang telah diimpor dari routes.
app.use(Route);

//digunakan untuk mendengarkan permintaan di port 3000.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
