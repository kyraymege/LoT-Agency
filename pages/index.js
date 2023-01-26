import AboutUs from "../components/AboutUs";
import Announcements from "../components/Announcements";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      <Header />
      <div className="snap-y snap-mandatory h-screen w-screen overflow-auto scrollbar-hide">
        <div className="snap-start h-screen">
          <Hero />
        </div>
        <div className="snap-start h-screen bg-primary">
          <AboutUs />
        </div>
        <div className="snap-start h-screen bg-yellow-500">
          <Services />
        </div>
        <div className="snap-start h-screen bg-primary">
          <Partners />
        </div>
        <div className="snap-start h-screen bg-primary">
          <Contact />
        </div>
      </div>
    </>
  )
}
