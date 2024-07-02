"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function ColumnChart() {
  var options = {
    series: [
      {
        name: "عملکرد دوخت",
        data: [48, 63, 27, 63, 39, 78, 23, 8],
      },
    ],
    chart: {
      height: 350,
      id: "bar",
    },
    xaxis: {
      labels: {
        rotate: -40,
      },
      categories: [
        "چیدمان",
        "برش",
        "چاپ",
        "گلدوزی",
        "دوخت",
        "کنترل کیفیت",
        "شست وشو",
        "بسته بندی",
      ],
      tickPlacement: "on",
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    colors: ["#80BCFF"],
  };
  return (
    <>
      <ApexChart
        type="bar"
        options={options}
        series={options.series}
        height={280}
        width={460}
      />
    </>
  );
}

export default ColumnChart;
