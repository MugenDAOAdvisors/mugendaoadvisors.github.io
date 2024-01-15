export default function WhyMugen(){

    const services = [
        {
            name: "Strategy, Growth and Scalability Advisory Services"
        },
        {
            name: "Operations Management"
        },
        {
            name: "Treasury Management"
        },
        {
            name: "Ecosystem Grants Program Management"
        },
        {
            name: "Governance and Voting Services"
        },
        {
            name: "Proposal Management Services"
        },
        {
            name: "Compliance and Risk Advisory Services"
        },
        {
            name: "Finance and Accounting Services"
        },
        {
            name: "Bank Account Opening Services"
        },
        {
            name: "Community Outreach and Social Media Account Administration"
        },

    ]

    return(
        <div>
        <div className="rounded-[40px] 2xl:p-[100px] lg:p-[80px] p-[20px]">
            <p>Why Mugen</p>
            <div className="flex flex-col lg:flex-row md:gap-[50px] gap-[20px]">
                <h2 className="lg:w-[70%] w-full">Consistently delivering unmatched services</h2>
                <p className= "lg:w-[30%] text-[#D8CBCB]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-[30px] md:mt-[90px] 2xl:gap-[130px] lg:gap-[50px] gap-[30px] justify-items-center ">
                {services.map((service) => (
                    <div className="flex items-center justify-center w-full sm:w-2/3 lg:w-full h-[250px] bg-gradient-to-b from-[#673147] to-[#EE6FA3] to-[300%] py-[50px] px-[25px] rounded-[30px] text-center">
                        <h2 className="text-[24px]">{service.name}</h2>
                    </div>
                ))}

            </div>
        </div>
            <div className="flex justify-center mt-[90px]">
                <p className="lg:px-[110px] lg:py-[20px] py-[10px] px-[20px] bg-[#EE6FA3] rounded-full text-black">View All Now</p>
            </div>
        </div>


        
    )
}