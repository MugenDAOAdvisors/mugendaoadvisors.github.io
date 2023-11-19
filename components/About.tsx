export default function About(){
    return(
        <div className="flex flex-col space-y-[50px]">
            <div>
                <p>About Us</p>
                <h2>Our hands-on approach</h2>
            </div>
            <div className="flex space-x-[100px]">
                <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
            <div className="flex space-x-[200px]">
                <div>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#673147] from-[-30%] to-[#FFFFFF] to-[150%]">30yrs+</h1>
                    <p className="text-[#B0B0B0]">Collective Experience</p>
                </div>
                <div>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#673147] from-[-30%] to-[#FFFFFF] to-[150%]">70+</h1>
                    <p className="text-[#B0B0B0]">International Clients</p>
                </div>
                <div>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#673147] from-[-30%] to-[#FFFFFF] to-[150%]">1000+</h1>
                    <p className="text-[#B0B0B0]">Coffee Drinks</p>
                </div>
            </div>
        </div>
    )
}