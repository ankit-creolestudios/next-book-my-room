const mongoose = require("mongoose");
const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
    })
    .then((res) => console.log("mongodb"));
};

module.exports = dbConnect;
