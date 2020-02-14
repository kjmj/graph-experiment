import React from 'react';
import {Button} from "react-bootstrap";

class Completion extends React.Component {
  render() {
    const {values: { data }} = this.props;
    console.log(data);

    return (
        <div className="Completion">
          <p>Thanks for completing our experiment!</p>
          <Button onClick={() => alert("check the console.log for the data array")}>Submit</Button>
        </div>
    );
  }
}

export default Completion;
