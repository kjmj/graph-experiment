import React from 'react';
import Description from "../experimentComponents/Description"
import Graph1 from "../experimentComponents/Graph1"
import Graph3 from "../experimentComponents/Graph3"
import Graph4 from "../experimentComponents/Graph4"
import Refresh from "../experimentComponents/Refresh"
import Completion from "../experimentComponents/Completion"

class Experiment extends React.Component {
  state = {
    step: 0,
    participantID: '_' + Math.random().toString(36).substr(2, 9),
    data: [],
    graphs: this.shuffle([Graph1, Graph1, Graph3, Graph3, Graph4, Graph4]),
    active: ''
  };
  numGraphs = this.state.graphs.length;

  // go to the next step, and change the active component
  nextStep = async () => {
    const {step} = this.state;

    // react was being weird and not re-rendering certain widgets if they were repeated
    // my solution is to force react to re-render an empty div, then render the new active graph
    await this.setState({
      active: Refresh
    });

    // no pick a new graph to show
    this.setState({
      step: step + 1,
      active: this.state.graphs.pop()
    })
  };

  // add data to the data object
  addData = (json) => {
    this.setState({
          data: this.state.data.concat(json)
        }
    )
  };

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // determine which component to show
  render() {
    const {step, participantID, data} = this.state;
    const values = {step, participantID, data};
    const numGraphs = this.numGraphs;

    // depending on which step they are in the experiment, show a component
    let component;
    if(step === 0) {
      component = <Description nextStep={this.nextStep}/>;
    } else if (numGraphs + 1 === step) {
      component = <Completion values={values}/>;
    } else {
      component = <this.state.active
          width={1280}
          height={720}
          nextStep={this.nextStep}
          addData={this.addData}
          values={values}
      />;
    }


    return <div>
      <p>Step {step} / {numGraphs + 1}</p>
      {component}
    </div>
  }
}

export default Experiment;
