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
      stacked: false,
      height: 450,
      id: "bar",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    xaxis: {
      labels: {
        rotate: -30,
        show: true,
        offsetX: -10,
        offsetY: 25,
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
      padding: {
        bottom: 20,
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
        borderRadius: 5,
        columnWidth: "30%",
      },
    },
    axisTicks: {
      show: false,
    },

    colors: ["#80BCFF"],
    responsive: [
      {
        breakpoint: undefined,
        options: {},
      },
    ],
  };
  return (
    <>
      <ApexChart
        type="bar"
        options={options}
        series={options.series}
        height={280}
        width={350}
        style={{ paddingBottom: "3px" }}
      />
    </>
  );
}

export default ColumnChart;
