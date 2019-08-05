const initialState = {
  mainContent: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'MAINCONTENT':
      return {...state, mainContent: action.payload}
    default:
      return state
  }
}