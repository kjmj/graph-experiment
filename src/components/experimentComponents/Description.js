import React from 'react';
import {Button} from "react-bootstrap";

class Description extends React.Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
        <div className="Description">
          <h2>Welcome to our Experiment!</h2>
          <h4>You will see bar, pie, and stacked bar charts.</h4>
          <h4>Please enter what percent the smaller marked bar/slice is of the bigger marked
            bar/slice into the text box as an integer.</h4>
          <h4>Note it is possible that the bar/slices can be the same size. In this case,
            100 is an appropriate answer.</h4>
          <h4>Thank You!</h4>
          <Button onClick={this.saveAndContinue}>Start</Button>
        </div>
    );
  }
}

export default Description;
