import { combineReducers } from 'redux';

const dates = (state = [], action) => {
    switch (action.type) {
        case "SET_DATA":
          return action.payload;
        default: 
          return state;
    }
};

const apiData = (state = [], action) => {
  switch (action.type) {
      case "SET_API_DATA":
        return action.payload;
      default: 
        return state;
  }
};

export default combineReducers({
  dates,
  apiData
});
