// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../ActionTypes";

// data format: {id: null, companyId: null, data: { name: null, address: null }

const initialState = {
  employeeData: []
};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.EMPLOYEE_ADD:
      return {
        ...state,
        employeeData: []
      };

    default:
      return state;
  }
}
