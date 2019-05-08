import React from "react";

export default class HideableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }

  toggleIsHidden() {
    this.setState(currentState => ({
      isHidden: !currentState.isHidden
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleIsHidden()}>Toggle</button>
        <div>{!this.state.isHidden && this.props.text}</div>
      </div>
    );
  }
}
