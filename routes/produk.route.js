//digunakan untuk mengimpor modul express.js
const express = require("express");
//digunakan untuk membuat instance dari router Express.
const router = express.Router();

//digunakan untuk mengimpor file dari ../controllers/produkController
const {
  produkA,
  produkB,
  produkC,
  produkD,
  produkE,
} = require("../controllers/produkController");

//Menangani permintaan GET ke /, yang kemungkinan akan mengambil semua entitas produsen.
router.get("/", produkA);
//Menangani permintaan GET ke /:id, di mana :id adalah parameter dinamis yang mewakili ID dari produsen tertentu.
router.get("/:id", produkB);
//Menangani permintaan POST ke /, yang kemungkinan akan membuat entitas produsen baru.
router.post("/", produkC);
//Menangani permintaan DELETE ke /:id, di mana :id adalah parameter dinamis yang mewakili ID dari produsen yang akan dihapus.
router.delete("/:id", produkD);
//Menangani permintaan PATCH ke /:id, di mana :id adalah parameter dinamis yang mewakili ID dari produsen yang akan diubah
router.patch("/:id", produkE);

//digunakan untuk mengekspor objek  router dari suatu file dalam node.js
module.exports = router;
