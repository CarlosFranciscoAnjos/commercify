import * as bcrypt from 'bcrypt';

export class CryptService {
  static async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  static async verify(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
