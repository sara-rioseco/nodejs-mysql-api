import { DataTypes } from 'sequelize';

import { db } from '../db/connection.js'

export const User = db().define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(20),
      defaultValue: 'user'
    }
  },
  {
    // Other model options go here
    //timestamps are true by default
  }
);