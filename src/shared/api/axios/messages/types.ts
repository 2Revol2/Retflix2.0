export interface Message {
  id: string;
  text: string;
  authorId: string;
  createAt: number;
  author: {
    username: string;
  };
}
// export interface MessageResponse {
//   messages: Message[];
//   hasMore: boolean;
//   page: number;
//   limit: number;
// }
