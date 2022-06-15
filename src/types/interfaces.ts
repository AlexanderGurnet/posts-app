export interface PostItem {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

export interface PostsJSON {
  limit: number;
  posts: PostItem[] | [];
  skip: string;
  total: number;
}
