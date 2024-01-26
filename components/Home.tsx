
export default function Home(){
    return(
    <div className="w-full flex relative">
        <div className="flex flex-col lg:w-3/4 w-full">
            <h1 className="">DECENTRALIZED <br></br> TRANSPARENT <br></br> DAO MANAGEMENT SERVICES</h1>
            <p className="lg:w-[65%] 2xl:w-[65%] mt-[15px]">The leading all-in-one solutions platform to launch, manage, and scale your DAO and its related entities in any jurisidction.</p>
            <div className="flex mt-[50px]">
                <p className="text-white text-[16px] lg:text-[22px] font-medium lg:py-[20px] lg:px-[40px] py-[10px] px-[20px] bg-[#EE6FA3] rounded-full">Explore Now</p>
            </div>
        </div>
        <div className="hidden lg:block absolute right-0 w-1/3">
            <img src="mugen_cherry.png" className="w-full"></img>
        </div>
    </div>
    )
}