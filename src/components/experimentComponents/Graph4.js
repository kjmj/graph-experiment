import React from 'react';
import * as d3 from 'd3';
import {Button, Form} from "react-bootstrap";

class Graph4 extends React.Component {
  graphType = "Pie";

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
    this.drawBarChart()
  }

  drawBarChart() {
// set the dimensions and margins of the graph
    var width = this.props.width/2
    var height = this.props.height/2
    var margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
    const svg = d3.select(this.divRef.current).append("svg").attr("width", this.props.width).attr("height", this.props.height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
    var data = {a:9, b:20, c:30, d:8, e:12, f:3, g:11, h:22, i:23, j:35}

// set the color scale
    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"])

// Compute the position of each group on the pie:
    var pie = d3.pie()
        .value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(0)
            .outerRadius(radius)
        )
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
  }

  render() {
    return (
        <div>
          <div ref={this.divRef}>
            <p>Pie Chart</p>
          </div>
          <Form.Control type="text" placeholder="Answer" ref={node => this.textField = node}/>
          <Button onClick={this.saveAndContinue}>Next</Button>
        </div>
    )
  }
}

export default Graph4;
