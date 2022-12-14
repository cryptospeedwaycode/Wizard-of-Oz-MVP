import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "./home/Banner";
import About from "./home/About";
import MintForm from "./home/MintForm";
import TimeLine from "./home/Timeline";
import Team from "./home/Team";
import Faq from "./home/Faq";

export default function Index() {
  return (
    <>
      <Header />
      <Banner />
      <MintForm />
      <About />
      <TimeLine />
      {/* <Team /> */}
      <Faq />
      <Footer />
    </>
  );
}
