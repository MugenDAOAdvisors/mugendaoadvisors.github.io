import Navbar from "@/components/Navbar";
import Home from "@/components/Home"
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Optimize from "@/components/Optimize";
import WhyMugen from "@/components/WhyMugen";
import Footer from "@/components/Footer";

export default function Index() {
  return (
   <div>
      <Navbar></Navbar>
    <section className="pl-[130px]">
      <Home></Home>
    </section>
    <section className="px-[130px]">
      <About></About>
    </section>
    <section className="px-[130px]">
      <Services></Services>
    </section>
    <section className="px-[130px]">
      <WhyMugen></WhyMugen>
    </section>
    <section>
      <Partners></Partners>
    </section>
    <section className="px-[130px]">
      <Optimize></Optimize>
    </section>
    <Footer></Footer>
  </div>
  )
}
