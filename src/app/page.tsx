import Image from "next/image";
import Navbar from "./component/Navbar";
import HomeSection from "./component/Home";
import About from "./component/About";
import Manu from "./Manu";
import Deserts from "./Desert";
import ContactForm from "./Contact"


export default function Home() {
  return (
  <>
  <Navbar/>
  <HomeSection/>
  <About/>
  <Manu/>
<Deserts/>
<ContactForm/>
  </>
  );
}
