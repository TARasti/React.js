import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function DoughnutChart(props){
   return  <Doughnut
  data={props.data}
/>
}

export default DoughnutChart;
