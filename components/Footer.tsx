export default function Footer(){
    return(
        <div className="bg-black py-[75px] 2xl:px-[130px] xl:px-[50px] px-[20px] flex flex-col gap-[50px]">
            <div>
                <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] font-bold">Mugen DAO</p>
            </div>
            <div className="flex flex-col xl:flex-row justify-between gap-[50px] md:gap-[100px]">
                <div className="flex flex-col md:flex-row xl:w-1/2 gap-[50px] md:gap-[100px]">
                    <div className="w-1/2 flex flex-col space-y-[15px] justify-end">
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] text-[#D4D4D4]">Email Us</p>
                        <p className="font-[DM Sans] text-[16px] sm:text-[32px] font-bold  underline-offset-1">hello@mugendao.com</p>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-[15px] justify-end">
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] text-[#D4D4D4]">Connect With Us</p>
                        <div className="flex space-x-[30px]">
                            <img src="/Facebook.png"></img>
                            <img src="/X.png"></img>
                            <img src="/Instagram.png"></img>
                            <img src="/LinkedIn.png"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  md:space-x-[75px] xl:justify-end xl:pr-[80px]">
                    <div className="flex flex-col space-y-[40px]">
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] md:text-[28px] font-bold underline-offset-1">Home</p>
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] md:text-[28px] font-bold underline-offset-1">Who We Are</p>
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] md:text-[28px] font-bold underline-offset-1">Services</p>
                    </div>
                    <div className="flex flex-col space-y-[40px]">
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] md:text-[28px] font-bold underline-offset-1">News</p>
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] md:text-[28px] font-bold underline-offset-1">Portfolio</p>
                        <p className="uppercase font-[DM Sans] text-[16px] sm:text-[18px] md:text-[28px] font-bold underline-offset-1">Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}