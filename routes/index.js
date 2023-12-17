//Mengimpor modul Express.js.
const express = require("express");
//digunakan untuk membuat instance dari router Express.
const router = express.Router();
//mengimpor router yang berisi definisi rute-rute terkait produk dari file ./produk.route
const produkRouter = require("./produk.route");
//mengimpor router yang berisi definisi rute-rute terkait produk dari file ./produsen.route
const produsenRouter = require("./produsen.route");
//semua rute yang ditentukan di dalam produkRouter akan ditambahkan di bawah awalan URL /produk dalam aplikasi.
router.use("/produk", produkRouter);
//semua rute yang ditentukan di dalam produsenRouter akan ditambahkan di bawah awalan URL /produk dalam aplikasi.
router.use("/produsen", produsenRouter);

//digunakan untuk mengekspor objek  router dari suatu file dalam node.js
module.exports = router;
