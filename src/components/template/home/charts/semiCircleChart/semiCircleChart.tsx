"use client";

import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const SemiCircleChart = () => {
  const data = {
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
        cutout: "90%",
      },
    ],
  };
  return (
    <>
      <div className="relative">
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
            maintainAspectRatio: true,
            responsive: true,
          }}
          className="lg:mx-5 md:mx-10 mx-12"
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "13%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <span className="text-[#444444]">970</span>
          <div className="text-[#888888]"> عملکرد حال حاضر</div>
        </div>
      </div>
    </>
  );
};

export default SemiCircleChart;
