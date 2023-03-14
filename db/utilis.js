//will import the connection and use it in the query function that will return a promise that will resolve/reject the result of the query from the database

import connection from "./index.js";

const query = (qryStr, values) => {
  return new Promise((resolve, reject) => {
    connection.query(qryStr, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export default query;
