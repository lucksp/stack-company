// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "../ActionTypes";
import { randomId } from "../../helpers/common";

function convertToValidPhoneNumber(text) {
  return (text = text
    .replace(/\D+/g, "")
    .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
}

export const submitNewCompany = company => {
  const id = randomId();
  let copy = { ...company };

  copy.revenue = `$${copy.revenue}`;
  copy.phone = convertToValidPhoneNumber(copy.phone);

  let companyWithId = {
    [id]: { details: copy, count: 0 }
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

export const addEmployeeToCompany = id => {
  return {
    type: ActionTypes.UPDATE_EMPLOYEE_COUNT,
    payload: id
  };
};
