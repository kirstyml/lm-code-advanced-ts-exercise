import { PostFound, PostNotFound } from "../types/response.types";
import { baseUrl } from "./base_url";

export async function fetchPost(id : string) {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post as PostFound | PostNotFound;
	} catch {
		return {
			postFound: false
		} as PostNotFound;
	}
}
