import Sidebar from "../module/sidebar";
import NavBar from "../template/home/navBar";

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
          <main className="px-6 pb-36">{children}</main>
        </section>
      </div>
    </div>
  );
};

export default HomePageLayout;
