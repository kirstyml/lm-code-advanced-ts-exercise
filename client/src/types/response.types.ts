import { Post } from "../../../server/src/types/posts.types";

export type PostNotFound = { postFound: false };

export interface PostFound extends Post {
	postFound: boolean
};

// export type PostResponse<T extends Post | PostNotFound> = T extends Post
// 	? PostFound
// 	: PostNotFound;

