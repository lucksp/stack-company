// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../ActionTypes";

// data format: {[id]: { name: null, address: null, revenue: null, phone: null, count: null } }

const initialState = {};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.COMPANY_ADD:
      // update the base state with new company
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.UPDATE_EMPLOYEE_COUNT:
      const id = action.payload;

      // update the existing state by adding 1
      let newState = { ...state };

      newState[id].count++;

      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
}
