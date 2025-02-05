import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // API Endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage, account };
