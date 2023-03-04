import User from "./user";

export default interface Tweet {
  id: number;
  content: string;
  Likers: Partial<User>[];
  Images: Array<{ src: string }>;
  RetweetId?: number;
  Retweet?: Tweet;
  User: Partial<User> & { id: number };
  createdAt: string;
  Comments: Comment[];
}
