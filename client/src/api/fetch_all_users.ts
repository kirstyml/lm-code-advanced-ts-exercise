import { baseUrl } from "./base_url";
import { User } from "../../../server/src/types/posts.types";

export async function fetchAllUsers() {
	try {
		const result = await fetch(baseUrl + "/api/users/all");
		const users = await result.json();
		return users as User[];
	} catch {
		return [];
	}
}
