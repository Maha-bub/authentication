
// import dns from "node:dns";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
// dns.setServers(['8.8.8.8','8.8.4.4'])
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('created_users');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
        }
    },

    database: mongodbAdapter(db, {
        client,
    }),
});