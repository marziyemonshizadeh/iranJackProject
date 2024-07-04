// https://github.com/apexcharts/apexcharts.js/issues/1350
var totalChart = new ApexCharts(document.querySelector("#totalChart"), {
  series: [
    {
      name: "Contrats",
      data: $("#totalChart").data("stats").split(","),
    },
  ],
  chart: {
    type: "bar",
    height: "170px",
    toolbar: { show: false },
    foreColor: "#657a8e",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
      distributed: true,
      colors: {
        backgroundBarColors: ["#F2F4F6"],
      },
    },
  },
  legend: { show: false },
  xaxis: {
    axisBorder: { show: false },
    categories: ["Cadre", "MPDV", "Groupement", "Indirect"],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: { show: false },
  colors: ["#007BFF"],
  grid: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        return val;
      },
    },
  },
});
