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
          <h3>You will see bar, pie, and bubble charts.</h3>
          <h3>Please insert the what percent the smaller marked bar/slice/bubble is of the bigger marked
            bar/slice/bubble.</h3>
          <h3>Thank You!</h3>
          <Button onClick={this.saveAndContinue}>Start</Button>
        </div>
    );
  }
}

export default Description;
