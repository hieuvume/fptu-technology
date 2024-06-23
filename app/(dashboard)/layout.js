import Content from "@/components/layouts/Content";
import DashboardHeader from "@/components/layouts/DashboardHeader";
import Footer from "@/components/layouts/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <section>
      <DashboardHeader />
      <Content>{children}</Content>
      <Footer />
    </section>
  );
}

export default DashboardLayout