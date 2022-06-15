export interface PostItem {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}
