import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function LineChart(props){
   return  <Line
  data={props.data}
/>
}

export default LineChart;
