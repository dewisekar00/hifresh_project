import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Header from "./sections/MainSection";
import ProductSection from "./sections/ProductSection";
import ValueSection from "./sections/ValueSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
function App() {
  return (
    <>
      <div className="m-4 lg:m-8">
        <Navbar />
        <div className=" pt-8 lg:pt-16 px-2 ">
          <Header />
        </div>
      </div>
      <WhyChooseUsSection />
      <ProductSection />
      <ValueSection />
      <Footer />
    </>
  );
}

export default App;
