import { AvgHousePrice } from './data/Data';
import { useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import './App.css';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';

function App() {
  const [price, setPrice] = useState({
    labels: AvgHousePrice.map((data)=>data.year),
    datasets: [{
        label: "Avg House Prices",
        data: AvgHousePrice.map((data)=>data.price),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)'
      ]
    }]
    });
  return (
    <div className="App">
    {/* Bar chart */}
      <div className="chart">
        <div className="chart-body">
          <BarChart  data={price}></BarChart>
        </div>
        <hr className='hr'/>
        <div className='chart-text'>
          <h5>Bar Chart</h5>
        </div>
      </div>
      
      {/* Line Chart */}
      <div className="chart">
        <div className="chart-body">
        <LineChart data={price}></LineChart>
        </div>
        <hr className='hr'/>
        <div className='chart-text'>
          <h5>Line Chart</h5>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="chart">
        <div className="chart-body">
        <PieChart data={price}></PieChart>
        </div>
        <hr className='hr'/>
        <div className='chart-text'>
          <h5>Pie Chart</h5>
        </div>
      </div>
      
      {/* Doughnut Chart */}
      <div className="chart">
        <div className="chart-body">
        
        <DoughnutChart data={price}></DoughnutChart>
        </div>
        <hr className='hr'/>
        <div className='chart-text'>
          <h5>Doughnut Chart</h5>
        </div>
      </div>

    </div>
  );
}

export default App;
