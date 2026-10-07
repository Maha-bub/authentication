
// import dns from "node:dns";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
// dns.setServers(['8.8.8.8','8.8.4.4'])
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('Created Users');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client,
    }),
});