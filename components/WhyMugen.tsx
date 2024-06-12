import Link from "next/link";

export default function WhyMugen(){


    return(
        <div>


            <div className="rounded-[40px] mt-[100px]">
    <p>Why Mugen ?</p>
    <div className="flex flex-col lg:flex-row md:gap-[50px] gap-[20px]">
        <h2 className="lg:w-[70%] w-full">Consistently delivering unmatched services</h2>
       {/*  <p className= "lg:w-[30%] text-[#D8CBCB]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur</p> */}
        <p className= "lg:w-[30%] text-[#D8CBCB]">Our experienced crypto-native team can cover all of your DAO's needs with our one-stop solution for DAO management services.</p>
    </div>

    <section className="2xl:px-[130px] lg:px-[50px] px-[20px] lg:mt-[300px] mt-[200px]">
                <div className="flex flex-col md:space-y-[180px] space-y-[70px]">
                    <div className="flex flex-col space-y-[30px]">
                        <h2 className="text-center">What we care about</h2>
                        <p className="text-center">Our team is composed of sophisticated, crypto-native operators who believe in building decentralized, transparent, permissionless, and censorship-resistant tools for the future. We put your community in control and provide your DAO with the support it needs so builders can focus on building without administrative headaches.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center justify-items-center gap-[50px]">
                        <div className="flex flex-col items-center md:justify-between justify-around h-[150px]">
                            <img src="/Decentralization.png"></img>
                            <p className="md:text-[26px]">Decentralizaion</p>
                        </div>
                        <div className="flex flex-col items-center md:justify-between justify-around h-[150px]">
                            <img src="/Transparency.png"></img>
                            <p className="md:text-[26px]">Transparency</p>
                        </div>
                        <div className="flex flex-col items-center md:justify-between justify-around h-[150px]">
                            <img src="/Scalability.png"></img>
                            <p className="md:text-[26px]">Scalability</p>
                        </div>
                    </div>
                </div>
            </section>
</div>
    <div className="flex justify-center mt-[90px]">
        <Link href="/about"><p className="lg:px-[110px] lg:py-[20px] py-[10px] px-[20px] bg-[#EE6FA3] rounded-full text-white">Learn More</p></Link>
    </div>
        </div> 





        
    )
}
