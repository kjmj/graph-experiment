import React from 'react';
import * as d3 from 'd3';
import {Button, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {isGoodInput, badInputAlert} from './Util'

class Graph4 extends React.Component {
  graphType = "Pie";
  truePercent = 0;

  saveAndContinue = (e) => {
    e.preventDefault();

    if(isGoodInput(this.textField.value)) {
      const json = {
        'vizType': this.graphType,
        'participantID': this.props.values.participantID,
        'trialNumber': this.props.values.step,
        'truePercent': this.truePercent,
        'reportedPercent': parseInt(this.textField.value)
      };
      this.props.addData(json);
      this.props.nextStep();
    } else {
      badInputAlert();
    }
  };

  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  componentDidMount() {
    this.drawBarChart()
  }

  drawBarChart() {


    //Returns a random int between min and max
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }


    function getRandomFloat(min, max) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(1));
    }


// set the dimensions and margins of the graph
    const width = this.props.width/2;
    const height = this.props.height/2;

// append the svg object to the div called 'my_dataviz'
    const svg = d3.select(this.divRef.current).append("svg").attr("width", this.props.width).attr("height", this.props.height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create an arc generator with configuration
    var arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(100);

    const radius1 = getRandomFloat(0.2, 0.6);
    const radius2 = getRandomFloat(radius1 + 0.2, radius1 + 1);
    const radius3 = getRandomFloat(radius2 + 0.2, radius2 + 1);
    const radius4 = getRandomFloat(radius3 + 0.2, radius3 + 1);
    const radius5 = getRandomFloat(radius4 + 0.2, radius4 + 1);
    const radius6 = getRandomFloat(radius5 + 0.2, radius5 + 1);
    const radius7 = getRandomFloat(radius6 + 0.2, radius6 + 1);
    const radius8 = getRandomFloat(radius7 + 0.2, radius7 + 1);
    const radius9 = getRandomFloat(radius8 + 0.2, 6);

    var arcData = [
      {label: '1', startAngle: 0, endAngle: radius1},
      {label: '2', startAngle: radius1, endAngle: radius2},
      {label: '3', startAngle: radius2, endAngle: radius3},
      {label: '4', startAngle: radius3, endAngle: radius4},
      {label: '5', startAngle: radius4, endAngle: radius5},
      {label: '6', startAngle: radius5, endAngle: radius6},
      {label: '7', startAngle: radius6, endAngle: radius7},
      {label: '8', startAngle: radius7, endAngle: radius8},
      {label: '9', startAngle: radius8, endAngle: radius9},
      {label: '10', startAngle: radius9, endAngle: 2* Math.PI}
    ];

    const dotloc = getRandomInt(1, 8);
    let count = 0;
    let dot1percent = 0;
    let dot2percent = 0;

// Create a path element and set its d attribute
    d3.select('g')
        .selectAll('path')
        .data(arcData)
        .enter()
        .append('path')
        .attr('d', arcGenerator)
        .attr("fill", "white")
        .attr("stroke", "black");

// Add labels, using .centroid() to position
    d3.select('g')
        .selectAll('text')
        .data(arcData)
        .enter()
        .append('text')
        .each(function(d) {
          var centroid = arcGenerator.centroid(d);
          d3.select(this)
              .attr('x', centroid[0])
              .attr('y', centroid[1])
              .attr('dy', '0.33em')
              if(parseInt(d.label) === dotloc || parseInt(d.label) === dotloc + 2) {
                svg.append("circle").attr("cx", centroid[0]).attr("cy", centroid[1]).attr("r", 4).attr("fill", "black").attr("stroke", "black");
                if (count === 1) {
                  dot2percent = d.endAngle - d.startAngle;
                }
                else {
                  dot1percent = d.endAngle - d.startAngle;
                }

                count++;
              }
        });

    if (dot1percent < dot2percent) {
      this.truePercent = Math.round((dot1percent/dot2percent) * 100);
    }
    else {
      this.truePercent = Math.round((dot2percent/dot1percent) * 100);
    }


  }

  render() {
    return (
        <div>
          <div ref={this.divRef}>
            <p>Pie Chart</p>
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

export default Graph4;
