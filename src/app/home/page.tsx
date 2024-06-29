import PerformanceChart from "@/components/template/home/PerformanceChart";
import { ThePerformanceOfTheStations } from "@/components/template/home/ThePerformanceOfTheStations";
import { InProgressProjects } from "@/components/template/home/inProgressProjects";
import { NavBar } from "@/components/template/home/navBar";
import { OrdersList } from "@/components/template/home/ordersList";
import Sidebar from "@/components/template/home/sidebar";

function Test() {
  return (
    <div className="bg-[#F8F9FE] text-black">
      <div className="flex">
        <Sidebar />
        <section className="h-screen flex-1">
          <NavBar />
          <main className="p-10">
            <h1 className="text-2xl font-semibold ">Home Page</h1>
            <div className="grid grid-cols-12 gap-2">
              <PerformanceChart />
              <InProgressProjects />
              <ThePerformanceOfTheStations />
              <OrdersList />
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}

export default Test;
