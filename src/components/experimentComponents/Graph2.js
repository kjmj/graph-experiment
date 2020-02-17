import React from 'react';
import * as d3 from 'd3';
import {Button, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Graph2 extends React.Component {
  graphType = "Bar 2";

  saveAndContinue = (e) => {
    e.preventDefault();

    const textFieldVal = this.textField.value; // what the user typed into the text field
    const json = {
      'vizType': this.graphType,
      'participantID': this.props.values.participantID,
      'trialNumber': this.props.values.step,
      'truePercent': 0, // TODO calculate true percent
      'reportedPercent': 0 // TODO calculate true percent
    };
    this.props.addData(json);
    this.props.nextStep();
  };

  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  componentDidMount() {
    const data = [2, 4, 2, 6, 8];
    this.drawBarChart(data)
  }

  drawBarChart(data) {
    const scale = 60;

    const svgCanvas = d3.select(this.divRef.current)
        .append("svg")
        .attr("width", this.props.width)
        .attr("height", this.props.height)
        .style("border", "1px solid black");
    svgCanvas.selectAll("rect")
        .data(data).enter().append("rect")
        .attr("width", 40)
        .attr("height", (datapoint) => datapoint * scale)
        .attr("fill", "orange")
        .attr("x", (datapoint, iteration) => iteration * 45)
        .attr("y", (datapoint) => this.props.height - datapoint * scale);
  }

  render() {
    return (
        <div>
          <div ref={this.divRef}>
            <p>This is a quick graph I created</p>
          </div>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Answer" ref={node => this.textField = node}/>
            </Col>
            <Col>
              <Button onClick={this.saveAndContinue}>Next</Button>
            </Col>
          </Row>
        </div>
    )
  }
}

export default Graph2;
