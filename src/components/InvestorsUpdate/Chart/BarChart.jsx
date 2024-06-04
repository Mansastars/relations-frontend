import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [mrrData, setMrrData] = useState([]);
  const getMRRValues = () => {
    const savedData = localStorage.getItem("InvestorsUpdate");
    const parsedData = savedData ? JSON.parse(savedData) : {};

    // Default MRR values set to 0 if they don't exist in local storage
    const mrrValues = {
      januaryMRR: parsedData.januaryMRR || 0,
      februaryMRR: parsedData.februaryMRR || 0,
      marchMRR: parsedData.marchMRR || 0,
      aprilMRR: parsedData.aprilMRR || 0,
      mayMRR: parsedData.mayMRR || 0,
      juneMRR: parsedData.juneMRR || 0,
      julyMRR: parsedData.julyMRR || 0,
      augustMRR: parsedData.augustMRR || 0,
      septemberMRR: parsedData.septemberMRR || 0,
      octoberMRR: parsedData.octoberMRR || 0,
      novemberMRR: parsedData.novemberMRR || 0,
      decemberMRR: parsedData.decemberMRR || 0,
    };

    return Object.values(mrrValues);
  };

  useEffect(() => {
    // Update MRR data from local storage when component mounts
    setMrrData(getMRRValues());
  }, []);

  const barChartData = {
    labels: [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ],
    datasets: [
      {
        label: "$MRR per Month",
        backgroundColor: "rgb(22, 22, 255)",
        borderColor: "rgb(22, 22, 255)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(22, 22, 255,0.7)",
        hoverBorderColor: "rgba(22, 22, 255,1)",
        data: mrrData,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return <Bar options={options} data={barChartData} />;
};

export default BarChart;
