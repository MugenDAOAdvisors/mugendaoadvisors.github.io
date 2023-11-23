export default function Home(){
    return(
    <div className="relative w-full">
        <div className="flex flex-col space-y-[50px]">
            <h1 className="2xl:w-2/3">Elevator & innovative solutions</h1>
            <p className="lg:w-[65%] 2xl:w-[35%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            <div className="flex">
            <p className="text-black text-[22px] font-medium py-[20px] px-[40px] bg-[#EE6FA3] rounded-full">Explore Now</p>
            </div>
        </div>
        <img src="/mugen_cherry.png" className="absolute 2xl:top-0 top-20 right-0 w-[30%] hidden lg:block"></img>
    </div>
    )
}