export interface Post {
  id: number;
  content: string;
  rating: number;
  burger_name: string;
  restaurant: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  user_id: string;
}

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: Post;
        Insert: Omit<Post, "id" | "created_at" | "updated_at" | "user_id">;
        Update: Partial<
          Omit<Post, "id" | "created_at" | "updated_at" | "user_id">
        >;
      };
    };
  };
}
