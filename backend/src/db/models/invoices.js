const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const invoices = sequelize.define(
    'invoices',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      amount: {
        type: DataTypes.DECIMAL,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['pending', 'paid', 'overdue'],
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  invoices.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.invoices.belongsTo(db.users, {
      as: 'client',
      foreignKey: {
        name: 'clientId',
      },
      constraints: false,
    });

    db.invoices.belongsTo(db.businesses, {
      as: 'businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    db.invoices.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.invoices.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return invoices;
};
