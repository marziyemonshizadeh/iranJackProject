import NavBar from "../module/navBar";
import Sidebar from "../module/sidebar";

interface Props {
  children: React.ReactNode;
}

const HomePageLayout = ({ children }: Props) => {
  return (
    <div className="bg-[#F8F9FE] text-black overflow-hidden">
      <div className="flex">
        <Sidebar />
        <section className="flex-1 min-h-screen">
          <NavBar />
          <main className="px-6 pb-36">{children}</main>
        </section>
      </div>
    </div>
  );
};

export default HomePageLayout;
