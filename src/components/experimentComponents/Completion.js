import React from 'react';
import {Button} from "react-bootstrap";

class Completion extends React.Component {
  render() {
    return (
        <div className="Completion">
          <p>Thanks for completing our experiment!</p>
          <Button onClick={() => alert("do something with data here")}>Submit</Button>
        </div>
    );
  }
}

export default Completion;
