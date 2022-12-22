import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function PieChart(props){
   return  <Pie
  data={props.data}
/>
}

export default PieChart;
