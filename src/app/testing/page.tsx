import PerformanceChart from "@/components/template/home/PerformanceChart";
import { ThePerformanceOfTheStations } from "@/components/template/home/ThePerformanceOfTheStations";
import { InProgressProjects } from "@/components/template/home/inProgressProjects";
import { NavBar } from "@/components/template/home/navBar";
import { OrdersList } from "@/components/template/home/ordersList";
import Sidebar from "@/components/template/home/sidebar";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-[#FEFEFE] h-screen min-h-32 sticky top-0 rounded-l-3xl shadow-sm z-20 p-4">
        <Sidebar />
      </div>
      <div className="col-span-10 bg-[#F8F9FE] block">
        <NavBar />
        <div className="flex justify-between gap-2 p-4 pt-8">
          <PerformanceChart />
          <InProgressProjects />
        </div>
        <div className="flex justify-between gap-2 p-4">
          <ThePerformanceOfTheStations />
          <OrdersList />
        </div>
      </div>
    </div>
  );
};

export default Home;
