import React from 'react';
import {Button,} from 'react-bootstrap';
import _ from 'underscore';
import Description from "../experimentComponents/Description"
import Graph1 from "../experimentComponents/Graph1"
import Graph2 from "../experimentComponents/Graph2"
import Graph3 from "../experimentComponents/Graph3"
import Graph4 from "../experimentComponents/Graph4"
import Completion from "../experimentComponents/Completion"

class Experiment extends React.Component {
  constructor(props) {
    super(props);

    // List of components we want to display to user in random order
    const components = [Graph1, Graph2, Graph3, Graph4];
    this.state = {
      components: components,
      activeComponent: Description,
      onFirstPage: true,
      onCompletionPage: false,
      trialNum: 0
    };
  }

  // change the active component to a random component
  // also determines if they have completed the experiment or not
  handleButtonClick() {
    let components = this.state.components;
    const random = _.sample(components);

    // if we have iterated thru all components, alert them that they're done
    if (this.state.onCompletionPage) {
      alert("We should probably analyze data here")
    }

    // if we have seen all components, we are on the completion page
    if (components.length === 0) {
      this.setState({
        onCompletionPage: true
      })
    } else {
      // increment the trial number if we aren't on the completion page
      this.setState({
        trialNum: this.state.trialNum + 1
      });
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
          <p>Trial number: {this.state.trialNum}</p>
          <this.state.activeComponent width={1900} height={920}/>
          <Button onClick={() => this.handleButtonClick()}>{this.getButtonText()}</Button>
        </div>
    );
  }
}

export default Experiment;
