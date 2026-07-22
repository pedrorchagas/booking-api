const { DataTypes, Model } = require('sequelize');

class seat extends Model {}

function Seat(sequelize) {
  seat.init(
    {
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Seat',
    },
  );
}

module.exports = Seat;
