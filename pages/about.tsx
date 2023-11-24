import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About(){
    return(
        <div>
            <section className="2xl:px-[130px] lg:px-[50px] px-[20px]">
                <Navbar></Navbar>
            </section>

            <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mt-[200px]">
                <div className="lg:w-1/2 flex flex-col space-y-[50px]">
                    <h1 className="uppercase">Who <span className="underlinedGradientText">we</span> are</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </section>
            <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mt-[500px]">
                <div className="flex lg:space-x-[250px]">
                    <div className="w-1/2 hidden lg:block">
                        <img src="/mugen_maple.png"></img>
                    </div>
                    <div className="lg:w-1/2 flex flex-col space-y-[30px]">
                        <h3>We believe bespoke is best when building your community infrastructure clients will fall in love with.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <div className="flex">
                            <p className="text-black px-[50px] py-[20px] text-center bg-[#EE6FA3] rounded-full ">Explore Now</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="2xl:pl-[130px] lg:pl-[50px] lg:pr-0 px-[20px] mt-[500px]">
                <div className="flex lg:space-x-[250px]">
                    <div className="lg:w-1/2 flex flex-col space-y-[30px]">
                        <h3>We believe bespoke is best when building your community infrastructure clients will fall in love with.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <div className="flex">
                            <p className="text-black px-[50px] py-[20px] text-center bg-[#EE6FA3] rounded-full ">Explore Now</p>
                        </div>
                    </div>
                    <div className="w-1/2 hidden lg:block justify-end">
                        <img src="/maple_branch.png"></img>
                    </div>
                </div>
            </section>
            <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mt-[300px]">
                <div className="flex flex-col space-y-[180px]">
                    <div className="flex flex-col space-y-[30px]">
                        <h2 className="text-center">What we care about</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 justify-around gap-[50px]">
                        <div className="flex flex-col items-center">
                            <img src="/trust.png" className="md:w-auto w-[50%]"></img>
                            <p className="md:text-[34px]">Trust</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/competence.png" className="md:w-auto w-[50%]"></img>
                            <p className="md:text-[34px]">Other</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/competence.png" className="md:w-auto w-[50%]"></img>
                            <p className="md:text-[34px]">Competence</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/integrity.png" className="md:w-auto w-[50%]"></img>
                            <p className="md:text-[34px]">Integrity</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mb-[130px] mt-[250px]">
                <div className="flex flex-col lg:flex-row bg-[#673147] px-[20px] py-[20px] lg:px-[50px] 2xl:px-[150px] lg:py-[90px] space-y-[100px] lg:space-y-[0] items-center justify-between rounded-[30px]">
                    <div className="flex flex-col space-y-[30px] lg:w-1/2 2xl:w-1/3 ">
                        <h1>Optimize Your DAO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
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