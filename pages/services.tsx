import Footer from "@/components/Footer";

export default function Services (){
    return (
        <div>
            <section className="mx-[130px] pb-[300px] border-b-[1px]  border-[#D9D9D9]">
                <div className="flex flex-col space-y-[80px]">
                    <h1 className="text-center">TAKE AIM AT SUCCESS WITH OUR PRECISION <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#673147] from-[-30%] to-[#FFFFFF] to-[400%]">DAO SOLUTIONS</span></h1>
                    <p className="text-center">Our expertise in crafting unique and innovative designs allows us to deliver comprehensive end-to-end projects that build lasting connections.</p>
                </div>
            </section>
            <section className="mx-[130px] mt-[70px] mb-[150px]">
                <div className="flex space-x-[120px]">
                    <div className="w-1/3">
                        <h2 className="text-[40px]">
                            CAPABILITIES IN OUR SERVICES
                        </h2>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className=" mt-[70px] flex flex-col space-y-[70px] border-b-[1px] border-[#D9D9D9] w-full pb-[115px]">
                            <h2 className="text-[40px]">
                                Community Support
                            </h2>
                            <div className="flex flex-col space-y-[50px]">
                                <div className="flex space-x-[100px]">
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="flex space-x-[100px]">
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div> 

                        <div className=" mt-[70px] flex flex-col space-y-[70px] border-b-[1px] border-[#D9D9D9] w-full pb-[115px]">
                            <h2 className="text-[40px]">
                                DAO governance 
                            </h2>
                            <div className="flex flex-col space-y-[50px]">
                                <div className="flex space-x-[100px]">
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="flex space-x-[100px]">
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div> 

                        <div className=" mt-[70px] flex flex-col space-y-[70px] border-b-[1px] border-[#D9D9D9] w-full pb-[115px]">
                            <h2 className="text-[40px]">
                                Strategic Advisory
                            </h2>
                            <div className="flex flex-col space-y-[50px]">
                                <div className="flex space-x-[100px]">
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="flex space-x-[100px]">
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                    <p className="list-item list-disc ml-[30px]">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                </div>
            </section>
            <section className="mx-[130px]">
                <div className="bg-[#673147] px-[150px] py-[90px] rounded-[30px] relative">
                    <img src="/mugen_koi.png" className="absolute right-0 -top-[30%]"></img>
                    <h2 className="text-[40px] text-center mb-[100px]">
                        OUR PROCESS
                    </h2>
                    <div className="flex justify-between">
                        <div className="flex flex-col space-y-[25px] items-center text-center w-1/3">
                            <h3 className="text-[54px]">
                                01
                            </h3>
                            <h3 className="text-[32px]">
                                Strategy
                            </h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>

                        <div className="flex flex-col space-y-[25px] items-center text-center w-1/3">
                            <h3 className="text-[54px]">
                                02
                            </h3>
                            <h3 className="text-[32px]">
                                System Creation
                            </h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>

                        <div className="flex flex-col space-y-[25px] items-center text-center w-1/3">
                            <h3 className="text-[54px]">
                                03
                            </h3>
                            <h3 className="text-[32px]">
                                Implementation
                            </h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-[130px] my-[130px]">
                <div className="flex space-x-[230px] items-center justify-evenly">
                        <div className="w-1/2 flex flex-col space-y-[20px]">
                            <h1 className="w-1/2">Optimize Your DAO</h1>
                            <p className="w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
            
                        <div className="flex">
                            <p className="text-black px-[80px] py-[20px] font-bold bg-[#EE6FA3] rounded-full ">Let's Chat</p>
                        </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}