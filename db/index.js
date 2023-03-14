//using the config, we would have to create a connection and export that connection
import config from "../config/index.js";
import mysql from "mysql";

const connection = mysql.createPool(config.mysql);

export default connection;
