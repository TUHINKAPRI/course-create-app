import mongoose from 'mongoose';


export const db_connection = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connection is successfully");
    })
    .catch((err) => {
      console.log("connection error");
      console.error(err);
    });
};