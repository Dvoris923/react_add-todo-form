import { User } from './user';

export type Todo = {
  id: number;
  title: string;
  comleted: boolean;
  userId: number;
  user: User | null;
};
