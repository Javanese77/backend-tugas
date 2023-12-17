// berfungsi untuk mengimpor modul atau file dari direktori satu level di atas direktori saat ini dengan nama 'models'.
const models = require("../models");
// berfungsi untuk mendestruksi objek yang diimpor dari modul 'models'.
const { Produsen, Produk } = models;

// untuk mengekspor sebuah objek
module.exports = {
  // untuk mencari data menggunakan model produsen dan mengambil data model produk yang terkait dengan setiap entri produsen.
  produsenA: async (req, res) => {
    const data = await Produsen.findAll({ include: Produk });
    res.status(200).json({
      message: "success",
      data: data,
    });
  },

  // digunakan mencari data dari model produsen berdasarkan id .
  produsenB: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Produsen.findOne({
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

  // digunakan untuk membuat entri baru di model produsen menggunakan nilai 'brandName' dan 'kategori' yang diterima dari request.
  produsenC: async (req, res) => {
    try {
      const { brandName, kategori } = req.body;
      const add = await Produsen.create({ brandName, kategori });
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

  // digunakan untuk menghapus data dari model 'produsen' berdasar 'id' yang diterima dari req.params.id .
  produsenD: async (req, res) => {
    try {
      const id = req.params.id;
      await Produsen.destroy({
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

  //digunakan untuk mengupdate data dari model 'produsen' berdasar 'id' dari req.params.id .
  produsenE: async (req, res) => {
    try {
      const id = req.params.id;
      const { brandName, kategori } = req.body;
      const produsen = await Produsen.findOne({
        where: {
          id: id,
        },
      });
      await Produsen.update(
        { brandName, kategori },
        {
          where: {
            id: produsen.id,
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
