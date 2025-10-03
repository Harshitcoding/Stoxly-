import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not set in your .env file");
  process.exit(1);
}

const start = Date.now();

try {
  const conn = await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  });

  const time = Date.now() - start;
  console.log(
    `✅ OK: Connected to MongoDB [db="${conn.connection.name}", host="${conn.connection.host}", time=${time}ms]`
  );

  await mongoose.disconnect();
  process.exit(0);
} catch (err) {
  console.error("❌ Failed to connect to MongoDB", err);
  process.exit(1);
}
