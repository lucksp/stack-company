// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../ActionTypes";

// data format: { id: null, name: null, address: null, revenue: null, phone: null }

const initialState = {
  companyData: []
};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.COMPANY_ADD:
      return {
        ...state,
        companyData: [...state.companyData, action.payload]
      };
    default:
      return state;
  }
}
