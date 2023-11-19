export default function Footer(){
    return(
        <div className="bg-black py-[75px] px-[130px] flex flex-col">
            <div>
                <p className="uppercase font-[DM Sans] text-[18px] font-bold">Mugen DAO</p>
            </div>
            <div className="flex justify-between">
                <div className="flex w-1/2 ">
                    <div className="w-1/2 flex flex-col space-y-[15px] justify-end">
                        <p className="uppercase font-[DM Sans] text-[18px] text-[#D4D4D4]">Email Us</p>
                        <p className="font-[DM Sans] text-[32px] font-bold  underline-offset-1">hello@mugendao.com</p>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-[15px] justify-end">
                        <p className="uppercase font-[DM Sans] text-[18px] text-[#D4D4D4]">Connect With Us</p>
                        <div className="flex space-x-[30px]">
                            <img src="/Facebook.png"></img>
                            <img src="/X.png"></img>
                            <img src="/Instagram.png"></img>
                            <img src="/LinkedIn.png"></img>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2 space-x-[75px] justify-end pr-[80px]">
                    <div className="flex flex-col space-y-[40px]">
                        <p className="uppercase font-[DM Sans] text-[28px] font-bold underline-offset-1">Home</p>
                        <p className="uppercase font-[DM Sans] text-[28px] font-bold underline-offset-1">Who We Are</p>
                        <p className="uppercase font-[DM Sans] text-[28px] font-bold underline-offset-1">Services</p>
                    </div>
                    <div className="flex flex-col space-y-[40px]">
                        <p className="uppercase font-[DM Sans] text-[28px] font-bold underline-offset-1">News</p>
                        <p className="uppercase font-[DM Sans] text-[28px] font-bold underline-offset-1">Portfolio</p>
                        <p className="uppercase font-[DM Sans] text-[28px] font-bold underline-offset-1">Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}