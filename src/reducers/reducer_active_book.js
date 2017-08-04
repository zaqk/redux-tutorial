// State argument is not application state, only the state
// this reducer is responsible for


// state = null is a piece of es6 that clarifies that if state 
// is undefined return null
export default function (state = null, action) {

	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}