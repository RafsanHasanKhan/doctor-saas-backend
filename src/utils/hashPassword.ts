import bcrypt from 'bcrypt';
import config from '../config';
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(config.bcrypt_salt_rounds);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};