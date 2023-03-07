import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

const isValidId = (input : string) => {
	const numberParsed = parseInt(input);
	if (isNaN(numberParsed)) {
		return false;
	}
	return true;
}

export async function browsePosts() {
	clear();

	const desiredPostId = await prompt("Enter Post ID");

	if (isValidId(desiredPostId)) {
		print(`📨 Fetching post "${desiredPostId}...`);

		const result = await fetchPost(desiredPostId);
	
		if (result.postFound) {
			print(`🥳 Received post:`);
	
			console.log(result);
		} else {
			print("No post found");
		}

		printNewLine();
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
	
		return result;
	} else {
		print("Post ID's must be numeric - no post found");

		printNewLine();
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
	}
}
