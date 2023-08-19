import HeroPC from "./components/HeroPC";
import HeroDevices from "./components/HeroDevices";
import Header from "./components/Header";
import HeroLogos from "./components/HeroLogos";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <HeroPC />
      <HeroDevices />
      <HeroLogos />
      <Footer />
    </>
  );
}
