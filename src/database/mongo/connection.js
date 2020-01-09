import mongoose from 'mongoose';
import {
  DB_HOST,
  DB_PORT,
  DB_NAME,
} from '@config/database';

export const ConnectDB = () => {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { useNewUrlParser: true },
    () => {
      console.log(`connected to ${DB_NAME}`);
    });
};
