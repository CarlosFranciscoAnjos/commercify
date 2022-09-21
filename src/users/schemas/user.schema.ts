import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserSchema {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  uuid?: string;
  @Column({ unique: true})
  email: string;
  @Column()
  hash: string;
  @Column()
  role: string;
}
