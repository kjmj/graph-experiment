import React from 'react';
import * as d3 from 'd3';

class Graph1 extends React.Component {
  static graphType = "Bar 1";

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

    //Returns an array of random points in a pre-defined area
    function randPoints(numofpoints) {
      const result = [];
      for (let i = 0; i < numofpoints; i++) {
        let temp = [getRandomInt(1400, 1700), getRandomInt(200, 400)];
        result.push(temp);
      }
      return result;
    }

    var barwidth = 50;
    var barloc = 570;

    const bar1 = svg.append("rect").attr("x", barloc + (0 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", getRandomInt(50, 100)).attr("fill", "white").attr("stroke", "black");
    const bar2 = svg.append("rect").attr("x", barloc + (1 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", getRandomInt(50, 100)).attr("fill", "white").attr("stroke", "black");
    const bar3 = svg.append("rect").attr("x", barloc + (2 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", getRandomInt(50, 100)).attr("fill", "white").attr("stroke", "black");
    const bar4 = svg.append("rect").attr("x", barloc + (3 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", getRandomInt(50, 100)).attr("fill", "white").attr("stroke", "black");
    const bar5 = svg.append("rect").attr("x", barloc + (4 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", getRandomInt(50, 100)).attr("fill", "white").attr("stroke", "black");
    const bar6 = svg.append("rect").attr("x", barloc + (5 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", getRandomInt(50, 100)).attr("fill", "white").attr("stroke", "black");
    const bar7 = svg.append("rect").attr("x", barloc + (6 * barwidth)).attr("y", 375).attr("width", barwidth).attr("height", getRandomInt(50, 100)).attr("fill", "white").attr("stroke", "black");

    var dotloc = getRandomInt(0, 4);

    const dot1 = svg.append("circle").attr("cx", barloc + (dotloc * barwidth) + (barwidth / 2)).attr("cy", 400).attr("r", 4).attr("fill", "black").attr("stroke", "black");
    const dot2 = svg.append("circle").attr("cx", barloc + ((dotloc + 2) * barwidth) + (barwidth / 2)).attr("cy", 400).attr("r", 4).attr("fill", "black").attr("stroke", "black");
  }

  render() {
    return (
        <div ref={this.divRef}>
          <p>Here is the other graph, transferred over. You might have to scroll to find the "next" button</p>
        </div>
    )
  }
}

export default Graph1;
