import { fetchPost } from "../../../api/fetch_post";
import { PostFound, PostNotFound, PostResponse } from "../../../types/response.types";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function browsePosts() {
	clear();

	const desiredPostId = await prompt("Enter Post ID");

	// TODO: should we validate this?!

	print(`📨 Fetching post "${desiredPostId}...`);

	const result : PostResponse<T extends PostFound | PostNotFound> = await fetchPost(desiredPostId);

	if (result.postFound) {
		print(`🥳 Received post:`);

		console.log(result);
	} else {
		print("No post found");
	}

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
}
