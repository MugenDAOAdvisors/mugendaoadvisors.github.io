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
            <div className="grid grid-cols-1 xl:grid-cols-3 mt-[30px] md:mt-[90px] 2xl:gap-[130px] lg:gap-[50px] gap-[30px] justify-items-center">
                <div className="bg-[#673147]  w-full py-[50px] px-[25px] flex flex-col rounded-[30px] text-center xl:gap-0 gap-[20px]">
                    <p className="font-bold md:text-[28px] text-[20px] xl:h-[200px] text-white">Ecosystem & Grants Program Management</p>
                    <p className=" md:text-[18px] h-full flex items-start">Establish bespoke policies and procedures for disbursing funds to grant recipients; establish competitive bid system for DAO proposals; and manage grants program in accordance with the DAO’s policies and procedures.</p>
                </div>
                <div className="bg-[#673147] w-full py-[50px] px-[25px] flex flex-col rounded-[30px] text-center xl:gap-0 gap-[20px] ">
                    <p className="font-bold md:text-[28px] text-[20px] xl:h-[200px] text-white">DAO Governance</p>
                    <p className=" md:text-[18px] h-full flex items-start">Manage, monitor and record the results of the governance process, voting and results, ecosystem grants program management services, and more.</p>
                </div>
                <div className="bg-[#673147] w-full py-[50px] px-[25px] flex flex-col rounded-[30px] text-center xl:gap-0 gap-[20px]">
                    <p className="font-bold md:text-[28px] text-[20px] xl:h-[200px] text-white">Treasury Management</p>
                    <p className="md:text-[18px] h-full flex items-start">
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