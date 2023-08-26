import TopNavigation from "@/components/navigation/TopNavigation";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="applayout">
      <TopNavigation />
      <div className="applayout__container">{children}</div>
    </div>
  );
};

export default AppLayout;
