// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../ActionTypes";

// data format: {[id]: {companyId: null, data: { name: null, address: null }}

const initialState = {};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.EMPLOYEE_ADD:
      // update the base state with new employee

      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
