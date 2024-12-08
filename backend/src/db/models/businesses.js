const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const businesses = sequelize.define(
    'businesses',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
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

  businesses.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.businesses.hasMany(db.users, {
      as: 'users_businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    db.businesses.hasMany(db.appointments, {
      as: 'appointments_businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    db.businesses.hasMany(db.blogs, {
      as: 'blogs_businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    db.businesses.hasMany(db.contacts, {
      as: 'contacts_businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    db.businesses.hasMany(db.invoices, {
      as: 'invoices_businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    db.businesses.hasMany(db.leads, {
      as: 'leads_businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    //end loop

    db.businesses.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.businesses.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return businesses;
};
