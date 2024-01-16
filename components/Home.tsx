
export default function Home(){
    return(
    <div className="w-full flex">
        <div className="flex flex-col w-2/3">
            <h1 className="">DECENTRALIZED AND TRANSPARENT DAO MANAGEMENT SERVICES</h1>
            <p className="lg:w-[65%] 2xl:w-[65%] mt-[15px]">The leading all-in-one solutions platform to launch, manage, and scale your DAO or Foundation in the Cayman Islands and BVI.</p>
            <div className="flex mt-[50px]">
                <p className="text-white text-[16px] lg:text-[22px] font-medium lg:py-[20px] lg:px-[40px] py-[10px] px-[20px] bg-[#EE6FA3] rounded-full">Explore Now</p>
            </div>
        </div>
        <div className="hidden lg:block relative w-1/3">
            <img src="mugen_cherry.png"></img>
        </div>
    </div>
    )
}