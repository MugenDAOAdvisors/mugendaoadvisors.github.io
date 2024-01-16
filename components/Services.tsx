import Link from "next/link";
import WhyMugen from "./WhyMugen";

export default function Services(){
    return(
        <div>
        <div className="bg-[#252525] rounded-[40px] 2xl:p-[100px] lg:p-[80px] p-[20px]">
            <p>Services</p>
            <div className="flex flex-col lg:flex-row md:gap-[50px] gap-[20px]">
                <h2 className="lg:w-[70%] w-full">Our complete range of DAO services</h2>
                {/* <p className= "lg:w-[30%] text-[#D8CBCB]">Our experienced team can cover all of your DAO's needs with our one-stop solution for DAO managemet servies.</p> */}
                
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-[30px] md:mt-[90px] 2xl:gap-[130px] lg:gap-[50px] gap-[30px] justify-items-center">
                <div className="bg-[#673147] w-3/4 lg:w-full  py-[50px] px-[25px] flex flex-col rounded-[30px] text-center lg:gap-[50px] gap-[20px]">
                    <p className="font-bold text-[28px] text-white">Community Support</p>
                    <p className=" text-[18px]">Manage communications between the DAO and its community members, moderate DAO's discussion forums (e.g., Twitter, Discord, Discourse, etc.), attend to inbound media inquiries.</p>
                </div>
                <div className="bg-[#673147] w-3/4 lg:w-full  py-[50px] px-[25px] flex flex-col rounded-[30px] text-center lg:gap-[50px] gap-[20px]">
                    <p className="font-bold text-[28px] text-white">DAO Governance</p>
                    <p className=" text-[18px]">Manage, monitor and record the results of the governance process, voting and results, ecosystem grants program management services, and more.</p>
                </div>
                <div className="bg-[#673147] w-3/4 lg:w-full  py-[50px] px-[25px] flex flex-col rounded-[30px] text-center lg:gap-[50px] gap-[20px]">
                    <p className="font-bold text-[28px] text-white">Treasury Management</p>
                    <p className="text-[18px]">
                        Design bespoke treasury monitoring dashboard for DAO communities,
                        consult Foundation Company directors on management of treasury capital and diversification of assets,
                        support multisig signers managed by third party custody providers, and more.
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-[90px]">
                <Link href="/services"><p className="lg:px-[110px] lg:py-[20px] py-[10px] px-[20px] bg-[#EE6FA3] rounded-full text-white">View All Now</p></Link>
            </div>
        </div>
            
        </div>
    )
}