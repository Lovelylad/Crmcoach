const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const blogs = sequelize.define(
    'blogs',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      content: {
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

  blogs.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.blogs.belongsTo(db.users, {
      as: 'author',
      foreignKey: {
        name: 'authorId',
      },
      constraints: false,
    });

    db.blogs.belongsTo(db.businesses, {
      as: 'businesse',
      foreignKey: {
        name: 'businesseId',
      },
      constraints: false,
    });

    db.blogs.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.blogs.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return blogs;
};
