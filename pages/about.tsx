import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About(){
    return(
        <div>
            <section className="px-[130px]">
                <Navbar></Navbar>
            </section>

            <section className="px-[130px]">
                <div className="w-1/2 flex flex-col space-y-[50px]">
                    <h1 className="uppercase">Who <span className="underlinedGradientText">we</span> are</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </section>
            <section className="px-[130px]">
                <div className="flex space-x-[250px]">
                    <div className="w-1/2">
                        <img src="/mugen_maple.png"></img>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-[30px]">
                        <h3>We believe bespoke is best when building your community infrastructure clients will fall in love with.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <div className="flex">
                            <p className="text-black px-[50px] py-[20px] text-center bg-[#EE6FA3] rounded-full ">Explore Now</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pl-[130px]">
                <div className="flex space-x-[250px]">
                    <div className="w-1/2 flex flex-col space-y-[30px]">
                        <h3>We believe bespoke is best when building your community infrastructure clients will fall in love with.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <div className="flex">
                            <p className="text-black px-[50px] py-[20px] text-center bg-[#EE6FA3] rounded-full ">Explore Now</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <div>
                        <img src="/maple_branch.png"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-[130px]">
                <div className="flex flex-col space-y-[180px]">
                    <div className="flex flex-col space-y-[30px]">
                        <h2 className="text-center">What we care about</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="flex justify-around">
                        <div className="flex flex-col items-center">
                            <img src="/trust.png"></img>
                            <p className="text-[34px]">Trust</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/competence.png"></img>
                            <p className="text-[34px]">Other</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/competence.png"></img>
                            <p className="text-[34px]">Competence</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/integrity.png"></img>
                            <p className="text-[34px]">Integrity</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-[130px] mb-[130px]">
                <div className="flex bg-[#673147] px-[150px] py-[90px] items-center justify-between rounded-[30px]">
                    <div className="flex flex-col space-y-[30px] w-1/3">
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