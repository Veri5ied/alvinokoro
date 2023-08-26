import TopNavigation from "@/components/navigation/TopNavigation";
import Footer from "@/components/navigation/Footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="applayout">
      <TopNavigation />
      <div className="applayout__container">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
