const { Model, DataTypes } = require("sequelize");

class Admins extends Model {
  static initModel(sequelize) {
    Admins.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName: {
          type: DataTypes.STRING,
        },
        lastName: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "admin",
        tableName: "admins",
      }
    );
    return Admins;
  }
}

module.exports = Admins;
