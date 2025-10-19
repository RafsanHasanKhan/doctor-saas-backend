import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV || 'developement',
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  jwt: {
    secret: process.env.JWT_SECRET as string,
    expires_in: process.env.JWT_EXPIRES_IN || '7d',
  },
  super_admin_name: process.env.SUPER_ADMIN_NAME,
  super_admin_email: process.env.SUPER_ADMIN_EMAIL,
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
};
