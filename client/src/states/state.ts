import { states, state } from "./states";

export class State {
	#state : state = states.MENU;

	get() {
		return this.#state;
	}

	set(newState : state) {
		this.#state = newState;
	}
}
