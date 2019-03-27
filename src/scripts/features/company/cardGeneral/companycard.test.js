import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { CompanyCard } from ".";
import Card from "../../../components/card";
import { Link } from "react-router-dom";

const props = {
  data: {
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
let wrapper;

describe("<CompanyCard />", () => {
  beforeEach(() => {
    wrapper = shallow(<CompanyCard {...props} />)
      .find(Card)
      .renderProp("renderWith")();
  });
  it("has a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("has a link", () => {
    expect(wrapper.find(Link).props().to).toEqual({ pathname: "123abc" });
  });
});
