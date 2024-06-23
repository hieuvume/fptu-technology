import Content from "@/components/layouts/Content";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const HomeLayout = ({ children }) => {
  return (
    <section>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </section>
  );
}

export default HomeLayout