const mongoose = require("mongoose");

const mgDb = () => {
  mongoose
    .connect(process.env.DBURI)
    .then(() => {
      console.log("connection succesfully mongoDB");
    })
    .catch((err) => {
      console.log("connection not connected it's error " + err);
    });
};

module.exports = mgDb;
