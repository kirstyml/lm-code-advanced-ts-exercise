import { baseUrl } from "./base_url";
import { Post } from "../../../server/src/types/posts.types";

export async function fetchAllPosts() {
	try {
		const result = await fetch(baseUrl + "/api/posts/all");
		const posts = await result.json();
		return posts as Post[];
	} catch {
		return [];
	}
}
