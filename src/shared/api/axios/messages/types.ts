export interface Message {
  id: string;
  text: string;
  authorId: string;
  createAt: number;
  author: {
    username: string;
  };
}
