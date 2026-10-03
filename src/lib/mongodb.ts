import mongoose from "mongoose";

interface MongooseConnectionCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseConnectionCache | undefined;
}

// Global cached connection for serverless/edge environments
const cached: MongooseConnectionCache = global.mongooseCache || {
  conn: null,
  promise: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

/**
 * Connects to MongoDB Atlas using Mongoose with connection pooling and caching.
 * Reuses existing connection in serverless (e.g., Vercel) warm starts.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  const mongodbUri = process.env.MONGODB_URI;

  if (!mongodbUri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local or your deployment configuration."
    );
  }

  // If already connected and active, return cached connection
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // If connection is in progress or needs to be initiated
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose
      .connect(mongodbUri, opts)
      .then((mongooseInstance) => {
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        cached.conn = null;
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    cached.conn = null;
    throw error;
  }

  return cached.conn;
}
