"use client";

import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const SemiCircleChart = () => {
  const data: any = {
    datasets: [
      {
        data: [23, 20, 23, 25, 9],
        backgroundColor: [
          "#FF4040",
          "#FF6A6A",
          "#FDB600",
          "#5C9B29",
          "#DDF1FF",
        ],
        display: true,
        border: "none",
        borderRadius: "8",
        cutout: "90%",
      },
    ],
  };
  return (
    <>
      <div className="relative">
        {/* <Image
          alt="logo"
          src="/images/degree.png"
          width={80}
          height={100}
          className="absolute w-full h-[50%] top-12"
        /> */}
        <Doughnut
          data={data}
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
            position: "relative",
            height: "420vh",
            width: "90%",
            top: "50%",
            margin: "10px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "15%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <span className="text-[#444444] font-bold">970</span>
          <div className="text-[#888888]"> عملکرد حال حاضر</div>
        </div>
      </div>
    </>
  );
};

export default SemiCircleChart;
