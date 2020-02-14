import React from 'react';
import Description from "../experimentComponents/Description"
import Graph1 from "../experimentComponents/Graph1"
import Graph2 from "../experimentComponents/Graph2"
import Graph3 from "../experimentComponents/Graph3"
import Graph4 from "../experimentComponents/Graph4"
import Completion from "../experimentComponents/Completion"

class Experiment extends React.Component {
  state = {
    step: 0,
    participantID: 0, // TODO randomly generate this
    data: [],
    graphKeys: [1, 2, 3, 4],
  };
  graphWidth = 1900;
  graphHeight = 920;


  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    })
  };

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

  render() {
    const {step, participantID, data} = this.state;
    const values = {step, participantID, data};

    switch (step) {
      case 0:
        return <Description nextStep={this.nextStep}/>;
      case 5:
        return <Completion values={values}/>;
    }

    // choose a random graph to display next
    // for each graph added to this switch statement, make sure to add a corresponding number to this.state.graphKeys
    const graphKeys = this.shuffle(this.state.graphKeys);
    const rand = graphKeys.pop();
    switch (rand) {
      case 1:
        return <Graph1
            width={this.graphWidth}
            height={this.graphHeight}
            nextStep={this.nextStep}
            addData={this.addData}
            values={values}
        />;
      case 2:
        return <Graph2
            width={this.graphWidth}
            height={this.graphHeight}
            nextStep={this.nextStep}
            addData={this.addData}
            values={values}
        />;
      case 3:
        return <Graph3
            width={this.graphWidth}
            height={this.graphHeight}
            nextStep={this.nextStep}
            addData={this.addData}
            values={values}
        />;
      case 4:
        return <Graph4
            width={this.graphWidth}
            height={this.graphHeight}
            nextStep={this.nextStep}
            addData={this.addData}
            values={values}
        />;
    }
  }
}

export default Experiment;
