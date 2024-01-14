export default function Services(){
    return(
        <div>
        <div className="bg-[#252525] rounded-[40px] 2xl:p-[100px] lg:p-[80px] p-[20px]">
            <p>Services</p>
            <div className="flex flex-col lg:flex-row md:gap-[50px] gap-[20px]">
                <h2 className="lg:w-[70%] w-full">Our complete range of DAO services</h2>
                <p className= "lg:w-[30%] text-[#D8CBCB]">You will get an experience team that can cover all your needs in a one-stop solution to take care of all your needs.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-[30px] md:mt-[90px] 2xl:gap-[130px] lg:gap-[50px] gap-[30px] justify-items-center">
                <div className="bg-[#673147] w-3/4 lg:w-full lg:h-[350px] py-[50px] px-[25px] flex flex-col rounded-[30px] text-center lg:gap-[50px] gap-[20px]">
                    <p className="font-bold text-[28px]">Consulting</p>
                    <p className="text-[#8C8C8C] text-[18px]">You will get an experience team that can cover all your needs in a one-stop solution to take care of all your needs.</p>
                </div>
                <div className="bg-[#673147] w-3/4 lg:w-full lg:h-[350px] py-[50px] px-[25px] flex flex-col rounded-[30px] text-center lg:gap-[50px] gap-[20px]">
                    <p className="font-bold text-[28px]">Consulting</p>
                    <p className="text-[#8C8C8C] text-[18px]">You will get an experience team that can cover all your needs in a one-stop solution to take care of all your needs.</p>
                </div>
                <div className="bg-[#673147] w-3/4 lg:w-full lg:h-[350px] py-[50px] px-[25px] flex flex-col rounded-[30px] text-center lg:gap-[50px] gap-[20px]">
                    <p className="font-bold text-[28px]">Consulting</p>
                    <p className="text-[#8C8C8C] text-[18px]">You will get an experience team that can cover all your needs in a one-stop solution to take care of all your needs.</p>
                </div>
            </div>
        </div>
            <div className="flex justify-center mt-[90px]">
                <p className="lg:px-[110px] lg:py-[20px] py-[10px] px-[20px] bg-[#EE6FA3] rounded-full text-black">View All Now</p>
            </div>
        </div>
    )
}