import { db } from "./connection.js";

export const dbauth = async () => {
  
  try {
    await db().authenticate();
    await db().sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};