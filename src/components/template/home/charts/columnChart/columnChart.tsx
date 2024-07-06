"use client";

import { ColumnChartOptions } from "@/data/ColumnChartOptions";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function ColumnChart() {
  return (
    <ApexChart
      type="bar"
      options={ColumnChartOptions}
      series={ColumnChartOptions.series}
      height={340}
      width={360}
      style={{ paddingBottom: "3px" }}
    />
  );
}

export default ColumnChart;
