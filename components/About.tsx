export default function About(){
    return(
        <div className="flex flex-col">
            <div>
                <p>About Us</p>
                <h2>Our hands-on approach</h2>
            </div>
            <div className="flex flex-col xl:flex-row mt-[15px]">
                <p className="xl:w-1/2">Mugen DAO Advisors provides a full suite of solutions for projects who want to achieve maximum decentralization, transparency and scalability. It provides a professional service performing all functions required to run DAOs and its related entities.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start 2xl:gap-[60px] md:gap-[60px] gap-[30px] mt-[50px]">
                <div>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#673147] from-[-30%] to-[#FFFFFF] to-[150%]">100yrs+</h1>
                    <p className="text-[#B0B0B0]">Collective Experience</p>
                </div>
                <div>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#673147] from-[-30%] to-[#FFFFFF] to-[150%]">70+</h1>
                    <p className="text-[#B0B0B0]">International Clients</p>
                </div>
            </div>
        </div>
    )
}