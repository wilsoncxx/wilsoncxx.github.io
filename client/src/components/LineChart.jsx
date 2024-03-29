import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <Line
      data={chartData}
      options={{
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 20,
          },
        },
      }}
    />
  );
}

export default LineChart;
