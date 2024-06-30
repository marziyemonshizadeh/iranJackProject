import { NavBar } from "../template/home/navBar";
import Sidebar from "../template/home/sidebar";

interface Props {
  children: React.ReactNode;
}

const HomePageLayout = ({ children }: Props) => {
  return (
    <div className="bg-[#F8F9FE] text-black">
      <div className="flex">
        <Sidebar />
        <section className="h-screen flex-1">
          <NavBar />
          <main className="p-10">
            <div className="grid grid-cols-12 gap-2">{children}</div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default HomePageLayout;
