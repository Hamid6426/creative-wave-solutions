import { MongoClient } from "mongodb";

let client;
let clientPromise;

const uri = process.env.MONGODB_URI; // Add this in your .env file
const options = {};

// Ensure client is a singleton to prevent multiple connections in development
if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Use a global variable so it's not re-created in development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, use a regular client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
