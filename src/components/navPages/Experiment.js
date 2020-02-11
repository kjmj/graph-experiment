import React from 'react';
import {Button,} from 'react-bootstrap';
import _ from 'underscore';
import Description from "../experimentComponents/Description"
import Graph1 from "../experimentComponents/Graph1"
import Graph2 from "../experimentComponents/Graph2"
import Completion from "../experimentComponents/Completion"

class Experiment extends React.Component {
  constructor(props) {
    super(props);

    // List of components we want to display to user in random order
    const components = [Graph1, Graph2];
    this.state = {
      components: components,
      activeComponent: Description,
      onFirstPage: true,
      onCompletionPage: false
    };
  }

  // change the active component to a random component
  // also determines if they have completed the experiment or not
  handleButtonClick() {
    let components = this.state.components;
    const random = _.sample(components);

    // if we have iterated thru all components, alert them that they're done
    if (this.state.onCompletionPage) {
      alert("You're done!")
    }

    // if we have seen all components, we are on the completion page
    if (components.length === 0) {
      this.setState({
        onCompletionPage: true
      })
    }

    // show a random component unless we are on the completion page
    this.setState({
      activeComponent: components.length === 0 ? Completion : random,
      onFirstPage: false
    });

    // remove it from the array since we have seen it
    components = _.reject(components, function (d) {
      return d === random;
    });
    this.setState({
      components: components
    })
  }

  // Change the text of the button based on which component is active
  getButtonText() {
    let text;

    if (this.state.onCompletionPage) {
      text = "Submit"
    } else if (this.state.onFirstPage) {
      text = "Agree"
    } else {
      text = "Next"
    }

    return text
  }

  render() {
    return (
        <div className="Experiment">
          <this.state.activeComponent/>
          <Button onClick={() => this.handleButtonClick()}>{this.getButtonText()}</Button>
        </div>
    );
  }
}

export default Experiment;
