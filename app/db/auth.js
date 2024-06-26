import { db } from './connection.js';

export const auth = async () => {  
  try {
    await db().authenticate();
    await db().sync();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};