
// Recibe el previous state, retorna el nuevo estado pasandole la action

const todo = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state['id'] !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state['completed']
      })
    default:
      return state
  }
}

const todos = (state: any = [], action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map((t:any) => todo(t, action))
    default:
      return state
  }
}

export default todos;