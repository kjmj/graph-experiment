import React from 'react';
import Description from "../experimentComponents/Description"
import Graph1 from "../experimentComponents/Graph1"
import Graph3 from "../experimentComponents/Graph3"
import Graph4 from "../experimentComponents/Graph4"
import Completion from "../experimentComponents/Completion"

class Experiment extends React.Component {
  state = {
    step: 0,
    participantID: '_' + Math.random().toString(36).substr(2, 9),
    data: [],
    graphs: this.shuffle([Graph1, Graph1, Graph3, Graph3, Graph4, Graph4]),
    active: ''
  };
  graphWidth = 1900;
  graphHeight = 720;
  numGraphs = this.state.graphs.length;


  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1,
      active: this.state.graphs.pop()
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
    const numGraphs = this.numGraphs;

    let component;
    if(step === 0) {
      component = <Description nextStep={this.nextStep}/>;
    } else if (numGraphs + 1 === step) {
      component = <Completion values={values}/>;
    } else {
      component = <this.state.active
          width={this.graphWidth}
          height={this.graphHeight}
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
