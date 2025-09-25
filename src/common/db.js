import { MongoClient } from "mongodb";

const uri = "mongodb+srv://eva3_express:CoQf5MXKTsh1uDLL@cluster-express.swg5rbm.mongodb.net/?retryWrites=true&w=majority&appName=cluster-express"; 
const client = new MongoClient(uri);

export const dbName = "cine-db";
export let db;

export async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("Conexión exitosa");
    return true;
  } catch (error) {
    console.error("Error al conectar", error);
    return false;
  }
}