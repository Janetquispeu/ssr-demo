
const initialState = {
  textNumber: 0
}

const reducerState = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(action.number, ",,,,,", action.number, 'switch');
    return {
        textNumber: action.number
      }
    case 'DECREMENT':
      return {
        textNumber: action.number
      }
    default:
      return state
  }
}

export default reducerState;