export default function selectedFlatReducer(state, action) {
	if (state === undefined) {
		return null;
	} 

	if (state === 'SELECT_FLAT') {
		return action.payload;
	} else {
	    return state;		
	}

}