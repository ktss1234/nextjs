"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from "@mui/material";

function getRamdomBetween0And1000() {
  const randomNumber = Math.random();

  // คูณด้วย 1000 
  const randomNumberBetween0And1000 = randomNumber * 1000;

  // ปัดเศษลงเป็นจำนวนเต็ม
  const randomNumberInt = Math.floor(randomNumberBetween0And1000);
  return randomNumberInt
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRamdomBetween0And1000()),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => getRamdomBetween0And1000()),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Report() {
  return <Box className="h-[300px]">
    <Bar options={options} data={data} />
  </Box>

}
