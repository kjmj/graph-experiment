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
    vizType: '',
    reportedPercent: 0,
    truePercent: 0
  };
  graphs = [];
  graphWidth = 1900;
  graphHeight = 920;


  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step : step + 1
    })
  };

  handleChange = input => event => {
    this.setState({ [input] : event.target.value })
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

  componentDidMount() {
    const { vizType, reportedPercent, truePercent } = this.state;
    const values = { vizType, reportedPercent, truePercent };

    let graphs = [
      <Graph1
          width={this.graphWidth}
          height={this.graphHeight}
          nextStep={this.nextStep}
          handleChange = {this.handleChange}
          values={values}
      />,
      <Graph2
          width={this.graphWidth}
          height={this.graphHeight}
          nextStep={this.nextStep}
          handleChange = {this.handleChange}
          values={values}
      />,
      <Graph3
          width={this.graphWidth}
          height={this.graphHeight}
          nextStep={this.nextStep}
          handleChange = {this.handleChange}
          values={values}
      />,
      <Graph4
          width={this.graphWidth}
          height={this.graphHeight}
          nextStep={this.nextStep}
          handleChange = {this.handleChange}
          values={values}
      />
    ];
    this.shuffle(graphs);
    this.graphs = graphs;
  }
  
  render() {
    const {step} = this.state;
    const { vizType, reportedPercent, truePercent } = this.state;
    const values = { vizType, reportedPercent, truePercent };

    const description = <Description nextStep={this.nextStep}/>;
    const confirmation = <Completion values={values}/>;

    switch(step) {
      case 0:
        return description;
      case 1:
        return this.graphs[0];
      case 2:
        return this.graphs[1];
      case 3:
        return this.graphs[2];
      case 4:
        return this.graphs[3];
      case 5:
        return confirmation;
    }
  }
}

export default Experiment;
