import Footer from "@/components/Footer"
import Form from "@/components/Form"
import Navbar from "@/components/Navbar"
import Head from "next/head"

export default function Contact (){
    return (
        <div>
            <Head>
      <title>Mugen DAO</title>
    </Head>
        <div className="">
            <Navbar></Navbar>
            <div className="flex flex-col lg:flex-row space-y-[50px] lg:space-y-0 lg:space-x-[50px]">
                <div className="lg:w-1/2 flex-col space-y-[250px]">
                    <div className="2xl:pl-[130px] lg:pl-[50px] lg:pr-0 px-[20px]">
                        <h1>How can we  <span className="text-[#EE6FA3]">help?</span></h1>
                        <p className="lg:w-2/3 mt-[50px]">Discussing a project or an idea with us is easy. Just fill in this form and we’ll contact you.</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/camelliabranch.png"></img>
                    </div>
                </div>
                <div className="lg:w-1/2 pb-[100px] 2xl:pr-[130px] lg:pr-[50px] lg:pl-0 px-[20px]">
                    <Form></Form>
                </div>
            </div>

        </div>
        <Footer></Footer>
        </div>
    )
}