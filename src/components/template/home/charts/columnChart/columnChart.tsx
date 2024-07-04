"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function ColumnChart() {
  var options: any = {
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
      lines: {
        show: true,
      },
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
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    grid: {
      border: 1,
      borderColor: "#EAEAEA",
      strokArray: 1,
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
        barHeight: 80,
      },
      distributed: true,
      isFunnel: true,
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
