import { ThePerformanceOfTheStations } from "@/components/template/home/ThePerformanceOfTheStations";
import { InProgressProjects } from "@/components/template/home/inProgressProjects";
import { OrdersList } from "@/components/template/home/ordersList";
import PerformanceAtAGlance from "@/components/template/home/performanceAtAGlance";

function Home() {
  return (
      <div className="grid grid-cols-12 lg:gap-5 gap-6 md:gap-2 py-5">
        <PerformanceAtAGlance />
        <InProgressProjects />
        <OrdersList />
        <ThePerformanceOfTheStations />
      </div>
  );
}

export default Home;
