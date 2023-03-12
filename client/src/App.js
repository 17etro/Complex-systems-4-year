import ReactEcharts from "echarts-for-react";

import './App.css';

function App() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['1 Потік', '6 Потоків']
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
        name: '1 Потік',
        data: [11.18, 17.721, 32.385, 47.966, 67.778, 94.018, 125.54, 159.82, 200.86, 245.788],
        type: 'line'
      },
      {
        name: '6 Потоків',
        data: [1.471, 1.921, 8.111, 8.662, 21.55, 16.418, 16.11, 18.953, 22.915, 36.778],
        type: 'line'
      }
    ]
  }; 

  return (
    <ReactEcharts option={option} />
  );
}

export default App;
