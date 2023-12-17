// berfungsi untuk mengimpor modul atau file dari direktori satu level di atas direktori saat ini dengan nama 'models'.
const models = require("../models");
// berfungsi untuk mendestruksi objek yang diimpor dari modul 'models'.
const { Produk, Produsen } = models;

// untuk mengekspor sebuah objek
module.exports = {
  // untuk mencari data menggunakan model produk dan mengambil data model produsen pada setiap entri produk.
  produkA: async (req, res) => {
    const data = await Produk.findAll({ include: Produsen });
    res.status(200).json({
      message: "success",
      data: data,
    });
  },

  // mencari data dari model Produk berdasarkan id yang diterima dari permintaan.
  produkB: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Produk.findOne({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {}
  },

  // digunakan untuk membuat entri baru di model produk menggunakan nilai 'name' dan 'stock' yang diterima dari request.
  produkC: async (req, res) => {
    try {
      const { name, stok } = req.body;
      const add = await Produk.create({ name, stok });
      res.status(200).json({
        message: "success",
        data: add,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  // digunakan untuk menghapus data dari model 'produk' berdasar 'id' yang diterima dari req.params.id .
  produkD: async (req, res) => {
    try {
      const id = req.params.id;
      await Produk.destroy({
        where: { id },
      });
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  //digunakan untuk mengupdate data dari model 'produk' berdasar 'id' dari req.params.id .
  produkE: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, stok } = req.body;
      const produk = await Produk.findOne({
        where: {
          id: id,
        },
      });
      const data = await Produk.update(
        { name, stok },
        {
          where: {
            id: produk.id,
          },
        }
      );
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
