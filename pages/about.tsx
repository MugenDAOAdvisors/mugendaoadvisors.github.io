import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About(){
    return(
        <div>
            <section>
                <Navbar></Navbar>
            </section>

            <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mt-[200px]">
                <div className="lg:w-1/2 flex flex-col gap-[15px]">
                    <h1 className="uppercase">Who <span className="underlinedGradientText">we</span> are</h1>
                    <p>We are a bespoke Web3 consulting firm that provides a full suite of solutions for projects who want to achieve maximum decentralization, transparency and scalability. We provide a professional service by those coming from the top blockchain industry projects performing all functions required to run DAOs and Foundation Companies in any jurisdiction.</p>
                </div>
            </section>

            <section className="2xl:px-[130px] lg:px-[50px] px-[20px] lg:mt-[500px] mt-[200px]">
                <div className="flex lg:space-x-[250px]">
                    <div className="w-1/2 hidden lg:block">
                        <img src="/mugen_maple.png"></img>
                    </div>
                    <div className="lg:w-1/2 flex flex-col">
                        <h3>We believe bespoke is best when building your community infrastructure.</h3>
                        <p className="mt-[15px]">We do not believe in one-size-fits all configurations to accommodate your DAO's needs. We will work with your community to provide the DAO with the tools it needs to focus on its mission.</p>
                        <div className="flex mt-[50px]">
                            <p className="text-black px-[50px] py-[20px] text-center bg-[#EE6FA3] rounded-full font-medium">Explore Now</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="2xl:pl-[130px] lg:pl-[50px] lg:pr-0 px-[20px] lg:mt-[500px] mt-[200px]">
                <div className="flex lg:space-x-[250px]">
                    <div className="lg:w-1/2 flex flex-col">
                        <h3>Comprehensive or a la carte service offerings available at rates that work for you.</h3>
                        <p className="mt-[15px]">Pricing is available upon request and depends on the functions required and activities by the DAO, Foundation or Operating Company. <br></br> <br></br>Competitive fees payable in fiat and/or native tokens.</p>
                        <div className="flex mt-[50px]">
                            <p className="text-black px-[50px] py-[20px] text-center bg-[#EE6FA3] rounded-full ">Explore Now</p>
                        </div>
                    </div>
                    <div className="w-1/2 hidden lg:block justify-end">
                        <img src="/maple_branch.png"></img>
                    </div>
                </div>
            </section>
            
            <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mb-[130px] mt-[250px]">
                <div className="flex flex-col lg:flex-row bg-[#673147] px-[20px] py-[20px] lg:px-[50px] 2xl:px-[150px] lg:py-[90px] space-y-[100px] lg:space-y-[0] items-center justify-between rounded-[30px]">
                    <div className="flex flex-col space-y-[30px] lg:w-1/2 2xl:w-1/3 ">
                        <h1>Optimize Your DAO</h1>
                        <p>Schedule an introductory call with our crypto-native team to learn more about how Mugen can support your community.</p>
                    </div>
                    <div>
                        <p className="text-black px-[80px] py-[20px] font-bold bg-white rounded-full ">Let's Chat</p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}