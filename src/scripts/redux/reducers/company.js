// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../ActionTypes";

const initialState = {
  companyData: []
};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
