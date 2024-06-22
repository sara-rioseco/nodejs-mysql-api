import { Sequelize } from 'sequelize';
import { config } from './config.js'

const { database, username, password, host, dialect} = config

export const db = () => {
  const sequelize = new Sequelize(database, username, password, {
    host,
    dialect
  })
  return sequelize
}

