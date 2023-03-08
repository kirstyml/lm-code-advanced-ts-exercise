import { User } from "../../../server/src/types/posts.types";
import { baseUrl } from "./base_url";

export async function sendUserToServer(userName : string) {
	try {
		const result = await fetch(baseUrl + "/api/users/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ name: userName }),
		});

		const json : User = await result.json();

		return json;
	} catch (e) {
		console.error(e);
		return undefined;
	}
}