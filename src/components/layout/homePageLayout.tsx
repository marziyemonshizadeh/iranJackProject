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
        <section className="h-full flex-1">
          <NavBar />
          <main className="px-10">{children}</main>
        </section>
      </div>
    </div>
  );
};

export default HomePageLayout;
