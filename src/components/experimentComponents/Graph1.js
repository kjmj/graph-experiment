import React from 'react';
import * as d3 from 'd3';
import {Button, Form} from "react-bootstrap";

class Graph1 extends React.Component {
  graphType = "Bar";
  truePercent = 0;

  saveAndContinue = (e) => {
    e.preventDefault();

    const json = {
      'vizType': this.graphType,
      'participantID': this.props.values.participantID,
      'trialNumber': this.props.values.step,
      'truePercent': this.truePercent,
      'reportedPercent': parseInt(this.textField.value)
    };
    this.props.addData(json);
    this.props.nextStep();
  };

  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  componentDidMount() {
    this.drawBarChart()
  }

  drawBarChart() {
    // Add an SVG
    const svg = d3.select(this.divRef.current).append("svg").attr("width", this.props.width).attr("height", this.props.height);

    //Returns a random int between min and max
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const height1 = getRandomInt(50, 100);
    const height2 = getRandomInt(50, 100);
    const height3 = getRandomInt(50, 100);
    const height4 = getRandomInt(50, 100);
    const height5 = getRandomInt(50, 100);
    const height6 = getRandomInt(50, 100);
    const height7 = getRandomInt(50, 100);
    const height8 = getRandomInt(50, 100);
    const height9 = getRandomInt(50, 100);
    const height10 = getRandomInt(50, 100);

    function getHeight(num) {
      switch (num) {
        case 0:
          return height1;
        case 1:
          return height2;
        case 2:
          return height3;
        case 3:
          return height4;
        case 4:
          return height5;
        case 5:
          return height6;
        case 6:
          return height7;
        case 7:
          return height8;
        case 8:
          return height9;
        case 9:
          return height10;
        default:
          return;
      }
    }

    var barwidth = 50;
    var barloc = 540;

    svg.append("rect").attr("x", barloc + (0 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height1).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (1 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height2).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (2 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height3).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (3 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height4).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (4 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height5).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (5 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height6).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (6 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height7).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (7 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height8).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (8 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", height9).attr("fill", "white").attr("stroke", "black");
    svg.append("rect").attr("x", barloc + (9 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height",height10).attr("fill", "white").attr("stroke", "black");

    var dotloc = getRandomInt(0, 7);

    svg.append("circle").attr("cx", barloc + (dotloc * barwidth) + (barwidth / 2)).attr("cy", 400).attr("r", 4).attr("fill", "black").attr("stroke", "black");
    svg.append("circle").attr("cx", barloc + ((dotloc + 2) * barwidth) + (barwidth / 2)).attr("cy", 400).attr("r", 4).attr("fill", "black").attr("stroke", "black");

    const size1 = getHeight(dotloc);
    const size2 = getHeight(dotloc + 2);

    if (size1 < size2) {
      this.truePercent = Math.round((size1/size2) * 100);
    }
    else {
      this.truePercent = Math.round((size2/size1) * 100);
    }
  }


  render() {
    return (
        <div>
          <div ref={this.divRef}>
            <p>Here is the other graph, transferred over. You might have to scroll to find the "next" button</p>
          </div>
          <Form.Control type="text" placeholder="Answer" ref={node => this.textField = node}/>
          <Button onClick={this.saveAndContinue}>Next</Button>
        </div>
    )
  }
}

export default Graph1;
