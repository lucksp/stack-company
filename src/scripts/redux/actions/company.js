// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "../ActionTypes";
import { randomId } from "../../helpers/common";

export const submitNewCompany = company => {
  const id = randomId();
  let companyWithId = {
    ...company,
    id
  };
  return function(dispatch, getState) {
    dispatch({
      type: ActionTypes.COMPANY_ADD,
      payload: companyWithId
    });

    return Promise.resolve("success");
  };
};
