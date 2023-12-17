'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produsen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Produk, { foreignKey: 'produsenId'})
    }
  }
  Produsen.init({
    brandName: DataTypes.STRING,
    kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produsen',
  });
  return Produsen;
};