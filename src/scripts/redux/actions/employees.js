// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "../ActionTypes";
import { randomId } from "../../helpers/common";

export const submitNewEmployee = values => {
  const id = randomId();
  let employeeWithId = {
    [id]: values
  };
  // typically, with server, would dispatch a "Send" action
  // followed by a fetch to POST data, which would then have a resolve of promise on success/error
  // which would then dispatch another action, for "succes"
  // this is when we would reset the form
  return function(dispatch) {
    dispatch({
      type: ActionTypes.EMPLOYEE_ADD,
      payload: employeeWithId
    });

    return Promise.resolve("success");
  };
};
