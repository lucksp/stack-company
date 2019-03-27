import company, { initialState } from "./company";
import ActionTypes from "../ActionTypes";

describe("Company reducer", () => {
  it("COMPANY_ADD adds new company", () => {
    const expected = {
      "123abc": {
        details: {
          name: "test company",
          address: "123 main",
          revenue: "$100",
          phone: "(720) 201-0040"
        },
        count: 0
      }
    };

    const action = {
      type: ActionTypes.COMPANY_ADD,
      payload: {
        "123abc": {
          details: {
            name: "test company",
            address: "123 main",
            revenue: "$100",
            phone: "(720) 201-0040"
          },
          count: 0
        }
      }
    };
    const state = company(initialState, action);
    expect(state).toEqual(expected);
  });

  it("UPDATE_EMPLOYEE_COUNT, adds 1 to company count", () => {
    const actionAddCount = {
      type: ActionTypes.UPDATE_EMPLOYEE_COUNT,
      payload: "123abc"
    };
    const newState = {
      "123abc": {
        details: {
          name: "test company",
          address: "123 main",
          revenue: "$100",
          phone: "(720) 201-0040"
        },
        count: 0
      }
    };

    const state = company(newState, actionAddCount);

    expect(state[actionAddCount.payload].count).toEqual(1);
  });
});
