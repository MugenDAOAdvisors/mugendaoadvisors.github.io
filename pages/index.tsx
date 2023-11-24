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
    <section className=" px-[20px] lg:pr-0 2xl:pl-[130px] lg:pl-[50px] mt-[130px]">
      <Home></Home>
    </section>
   <section className="px-[20px] 2xl:px-[130px] lg:px-[50px] mt-[260px]">
      <About></About>
    </section>
     <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mt-[175px]">
      <Services></Services>
    </section>
   <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mt-[150px]">
      <WhyMugen></WhyMugen>
    </section>
  <section className="mt-[200px]">
      <Partners></Partners>
    </section> 
    <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mt-[200px]">
      <Optimize></Optimize>
    </section>
      <Footer></Footer>
  </div>
  )
}
