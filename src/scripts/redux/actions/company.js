// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "../ActionTypes";
import { randomId } from "../../helpers/common";

export const submitNewCompany = company => {
  const id = randomId();
  let companyWithId = {
    [id]: { details: company, count: 0 }
  };
  // typically, with server, would dispatch a "Send" action
  // followed by a fetch to POST data, which would then have a resolve of promise on success/error
  // which would then dispatch another action, for "succes"
  // this is when we would reset the form
  return function(dispatch) {
    dispatch({
      type: ActionTypes.COMPANY_ADD,
      payload: companyWithId
    });

    return Promise.resolve("success");
  };
};

export const getEmployeeCount = id => {
  return function(dispatch, state) {
    const employeeState = state().company.companyData.find(company);
    let count = 0;

    return {
      type: ActionTypes.COMPANY_COUNT,
      id
    };
  };
};
