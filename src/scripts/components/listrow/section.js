import React, { Component } from "react";

import StyledSection from "./Section.css";

class Section extends Component {
  state = {
    isOpen: true
  };
  handleClick = () => {
    if (this.state.open) {
      this.setState({
        open: false
      });
    } else {
      this.setState({
        open: true
      });
    }
  };

  render() {
    return (
      <StyledSection className="section" isOpen={this.state.isOpen}>
        <div className="head" onClick={this.handleClick}>
          {this.props.sectionTitle}
        </div>
        <div className="wrapper">
          {this.state.isOpen && (
            <div className="content">
              {Object.keys(this.props.data).map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="item-title">{[item]}</div>
                    <div className="item-content">{this.props.data[item]}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </StyledSection>
    );
  }
}

export default Section;
