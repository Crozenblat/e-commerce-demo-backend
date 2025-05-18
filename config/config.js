// Necessary for seeding to work properly. Sequelize needs a config file to read env variables from.
export default {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST, // docker-compose.yml db service name
    dialect: process.env.DB_DIALECT
  }
}