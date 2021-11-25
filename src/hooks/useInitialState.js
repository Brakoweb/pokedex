import { useState } from "react";

const initialState = {
	pokemons: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const loadMore = (payload) => {
		setState({
			...state,
			pokemons: [...state.pokemons, payload]
		});
	};

	return {
		state,
		loadMore
	}
}

export default useInitialState;