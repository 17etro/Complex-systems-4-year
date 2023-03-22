import ReactEcharts from "echarts-for-react";

import './App.css';

function App() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['1 Потік (TSX-ON)', '6 Потоків (TSX-ON)', '1 Потік (TSX-OFF)', '6 Потоків (TSX-OFF)']
    },
    xAxis: {
      type: 'category',
      data: ['100', '200', '300', '400', '500', '600', '700', "800", "900", "1000"],
      name: "Вибірка (length)",
    },
    yAxis: {
      type: 'value',
      name: "Час виконанння (ms)",
    },
    series: [
      {
        name: '1 Потік (TSX-ON)',
        data: [12.07, 19.692, 36.732, 53.892, 75.25, 101.888, 133.857, 170.418, 217.805, 264.231],
        type: 'line'
      },
      {
        name: '6 Потоків (TSX-ON)',
        data: [17.661, 29.885, 30.537, 41.819, 63.399, 25.276, 56.511, 35.935, 61.513, 76.79],
        type: 'line'
      },
      {
        name: '1 Потік (TSX-OFF)',
        data: [12.163, 19.37, 34.033, 52.815, 74.533, 132.703, 134.406, 175.307, 217.515, 266.984],
        type: 'line'
      },
      {
        name: '6 Потоків (TSX-OFF)',
        data: [7.118, 12.755, 23.631, 29.511, 44.297, 51.767, 62.67, 56.009, 58.094, 90.063],
        type: 'line'
      }
    ]
  }; 

  return (
    <ReactEcharts option={option} />
  );
}

export default App;
