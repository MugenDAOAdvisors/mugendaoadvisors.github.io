import Link from "next/link";

export default function Optimize(){
    return (
            <div className="bg-[#252525] rounded-t-[40px] 2xl:p-[100px] p-[20px] flex justify-between items-center">
                <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">                
                    <h2>Optimize your DAO</h2>
                    <p className="text-[#7E7E7E] mt-[15px]">Schedule an introductory call with our crypto-native team to learn more about how Mugen can support your community.</p>
                    <div className="flex mt-[50px]">
                        <Link href="/contact"><p className="text-white lg:px-[70px] lg:py-[20px] py-[10px] px-[20px] text-center bg-[#EE6FA3] rounded-full font-medium">Get In Touch</p></Link>
                    </div>
                </div>
                    <div className="w-1/2 lg:2/3 hidden md:flex">
                        <img className="w-[70%]" src="/mugen_fan.png" ></img>
                    </div>
                </div>
    )
}