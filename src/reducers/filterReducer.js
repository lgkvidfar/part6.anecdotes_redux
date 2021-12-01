const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.filter
      default:
        return state
    }
  }


  //action creators
export const filterChange = (filter) => {
    return {
      'type': 'SET_FILTER',
      filter,
    }
  }
  
export default filterReducer