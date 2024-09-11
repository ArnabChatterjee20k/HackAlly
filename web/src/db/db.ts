import mongoose from "mongoose";
export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection
    connection.on("connected", () => {
      console.log("DB connected");
    });
    mongoose.connection.on("error", () => {
      console.log("DB error");
      process.exit(1);
    });
  } catch (error) {
    console.log("DB error");
    process.exit(1);
  }
}