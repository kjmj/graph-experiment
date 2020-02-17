import React from 'react';
import { CSVLink } from "react-csv";

class Completion extends React.Component {
  render() {
    const {values: { data }} = this.props;
    console.log(data);

    return (
        <div className="Completion">
          <p>Thanks for completing our experiment!</p>
          <CSVLink data={data} filename='experiment.csv'>
            Download your data
          </CSVLink>
        </div>
    );
  }
}

export default Completion;
