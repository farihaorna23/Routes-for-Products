import dotenv from "dotenv";

// ensures that env variables are loaded
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// exports env variables for use
//config exports several environment variables, including env variables needed to make a connection with a mysql database: username, password, database, host.
//mysql package when we create a connection expects those four values to be passed when making a connection
export default {
  mysql: {
    host: process.env.DB_HOST, //mysql.host, mysql.user
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
  },
  port: parseInt(process.env.PORT)
};
