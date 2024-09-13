import mongoose from "mongoose";

export default async function connectToDB() {
  if (!process.env.MONGO_URI) {
    console.log("MONGO_URI is not defined.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI,{dbName:"hackathons"});
    console.log("DB connected successfully");

    mongoose.connection.on("error", (err) => {
      console.error("DB connection error: ", err);
      process.exit(1);
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    process.exit(1);
  }
}