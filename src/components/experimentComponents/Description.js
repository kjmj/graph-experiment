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
          <h1>Welcome to our Experiment!</h1>
          <h3>You will bar, pie, and stacked bar charts.</h3>
          <h3>Please enter what percent the smaller marked bar/slice is of the bigger marked
            bar/slice into the text box as an integer.</h3>
            <h3>Note it is possible that the bar/slices can be the same size. In this case,
                100 is an appropriate answer.</h3>
          <h3>Thank You!</h3>
          <Button onClick={this.saveAndContinue}>Start</Button>
        </div>
    );
  }
}

export default Description;
