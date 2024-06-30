import HomePageLayout from "@/components/layout/homePageLayout";
import PerformanceChart from "@/components/template/home/PerformanceChart";
import { ThePerformanceOfTheStations } from "@/components/template/home/ThePerformanceOfTheStations";
import { InProgressProjects } from "@/components/template/home/inProgressProjects";
import { OrdersList } from "@/components/template/home/ordersList";

function Test() {
  return (
    <HomePageLayout>
      <PerformanceChart />
      <InProgressProjects />
      <ThePerformanceOfTheStations />
      <OrdersList />
    </HomePageLayout>
  );
}

export default Test;
