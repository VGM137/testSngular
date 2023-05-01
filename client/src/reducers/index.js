const reducer = (state, action) => {

  switch(action.type){

    case 'SERIES_VALUE':
      return{
        ...state,
        seriesValue: action.payload
      };
    
    default:
    return state;
  }
}

export default reducer;