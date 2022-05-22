
import Chart from "react-apexcharts";
import {Component} from 'react'
class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
        <Chart options={this.state.options}  labels={this.state.labels} series={this.state.series} type="donut" width="380" />
    );
  }
}

export default Donut;