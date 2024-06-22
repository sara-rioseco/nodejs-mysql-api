import { Sequelize } from "sequelize";

export const db = () => {
  const sequelize = new Sequelize('nodejs_api', process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    host: 'localhost',
    dialect: 'mysql'
  })
  return sequelize
}

