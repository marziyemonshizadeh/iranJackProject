"use client";

import { SemiCircleChartData } from "@/data/SemiCircleChartData";
import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const SemiCircleChart = () => {
  return (
    <>
      <div className="relative h-[278px] flex justify-center items-center">
        {/* <Image
          alt="logo"
          src="/images/degree.png"
          width={80}
          height={100}
          className="absolute w-full h-[50%] top-12"
        /> */}
        <Doughnut
          data={SemiCircleChartData}
          options={{
            aspectRatio: 1,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            rotation: -90,
            circumference: 180,
            cutout: "60%",
            // onResize
            maintainAspectRatio: true,
            responsive: true,
          }}
          style={{
            position: "absolute",
            height: "300vh",
            width: "300px",
            top: "20%",
            marginBottom: "80px",
          }}
        />
        {/* style={{
              position: "relative",
              height: "320vh",
              width: "80%",
              top: "50%",
              margin: "10px",
            }} */}
        <div
          className="absolute top-[80%] right-[35%] text-center"
          // style={{
          //   position: "absolute",
          //   top: "80%",
          //   right: "25%",
          //   transform: "translate(-50%, -50%)",
          //   textAlign: "center",
          // }}
        >
          <span className="text-[#444444] font-bold">970</span>
          <div className="text-[#888888]"> عملکرد حال حاضر</div>
        </div>
      </div>
    </>
  );
};

export default SemiCircleChart;
