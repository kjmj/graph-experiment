import React from 'react';
import * as d3 from 'd3';

class Graph1 extends React.Component {
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

      }

    }


    var barloc = 300;

    const height1 = getRandomInt(30, 50);
    const height2 = getRandomInt(30, 50);
    const height3 = getRandomInt(30, 50);
    const height4 = getRandomInt(30, 50);
    const height5 = getRandomInt(30, 50);
    const height6 = getRandomInt(30, 50);
    const height7 = getRandomInt(30, 50);
    const height8 = getRandomInt(30, 50);
    const height9 = getRandomInt(30, 50);
    const height10 = getRandomInt(30, 50);


    const bar1 = svg.append("rect").attr("x", 770).attr("y", barloc).attr("width", 50).attr("height", height1).attr("fill", "white").attr("stroke", "black");
    const bar2 = svg.append("rect").attr("x", 770).attr("y", barloc + height1).attr("width", 50).attr("height", height2).attr("fill", "white").attr("stroke", "black");
    const bar3 = svg.append("rect").attr("x", 770).attr("y", barloc + height2).attr("width", 50).attr("height", height3).attr("fill", "white").attr("stroke", "black");
    const bar4 = svg.append("rect").attr("x", 770).attr("y", barloc + height3).attr("width", 50).attr("height", height4).attr("fill", "white").attr("stroke", "black");
    const bar5 = svg.append("rect").attr("x", 770).attr("y", barloc + height4).attr("width", 50).attr("height", height5).attr("fill", "white").attr("stroke", "black");
    const bar6 = svg.append("rect").attr("x", 770).attr("y", barloc + height5).attr("width", 50).attr("height", height6).attr("fill", "white").attr("stroke", "black");
    const bar7 = svg.append("rect").attr("x", 770).attr("y", barloc + height6).attr("width", 50).attr("height", height7).attr("fill", "white").attr("stroke", "black");
    const bar8 = svg.append("rect").attr("x", 770).attr("y", barloc + height7).attr("width", 50).attr("height", height8).attr("fill", "white").attr("stroke", "black");
    const bar9 = svg.append("rect").attr("x", 770).attr("y", barloc + height8).attr("width", 50).attr("height", height9).attr("fill", "white").attr("stroke", "black");
    const bar10 = svg.append("rect").attr("x", 770).attr("y", barloc + height9).attr("width", 50).attr("height",height10).attr("fill", "white").attr("stroke", "black");

    var dotloc = getRandomInt(0, 7);

    const dot1 = svg.append("circle").attr("cx", 795).attr("cy", barloc + (dotloc * getHeight(dotloc)) + (getHeight(dotloc) / 2)).attr("r", 4).attr("fill", "black").attr("stroke", "black");
    const dot2 = svg.append("circle").attr("cx", 795).attr("cy", barloc + ((dotloc + 2) * getHeight(dotloc)) + (getHeight(dotloc) / 2)).attr("r", 4).attr("fill", "black").attr("stroke", "black");
  }

  render() {
    return (
        <div ref={this.divRef}>
          <p>Stacked Bar Graph</p>
        </div>
    )
  }
}

export default Graph1;
