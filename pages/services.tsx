import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";

export default function Services() {
const capabilities = [
{
    title: "Community Support",
    topics: [
    "Operations Management",
    "Governance and Voting Services",
    "Treasury Management",
    "Proposal Management Services",
    "Ecosystem Grants Program Management",
    "Community Outreach and Social Media Account Administration",
    ],
},
{
    title: "DAO governance",
    topics: [
    "Strategy, Growth and Scalability Advisory Services",
    "Strategy, Growth and Scalability Advisory Services",
    "Compliance and Risk Advisory Services",
    ],
},
{
    title: "Strategic Advisory",
    topics: [
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    "Lorem ipsum dolor sit amet ",
    ],
},
];

const titleRef = useRef<HTMLObjectElement>(null)
const ref = useRef<HTMLElement>(null)
const [scrollOffset, setScrollOffset] = useState(0);
const [lastScrollTop, setLastScrollTop] = useState(0);



useEffect(() => {
    const handleScroll = () => {
        if (ref.current && titleRef.current) {
            const textRect =  titleRef.current.getBoundingClientRect()
            const rect = ref.current.getBoundingClientRect();
            const currentScrollTop = rect.top
            
            if(rect.top < 0 && rect.bottom > textRect.bottom ){
                setScrollOffset(-rect.top);
                setLastScrollTop(currentScrollTop);
            }
            else if(currentScrollTop > lastScrollTop && rect.top < textRect.top){
                setScrollOffset(-rect.top);
            }
        }
    };

    // Adiciona um ouvinte de evento de rolagem
    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, lastScrollTop, titleRef]);



return (
<div>
    <section className="2xl:px-[130px] lg:px-[50px] px-[20px]">
    <Navbar></Navbar>
    </section>
    <section className="2xl:mx-[130px] lg:mx-[50px] mx-[20px] pb-[300px] border-b-[1px]  border-[#D9D9D9] mt-[150px]">
    <div className="flex flex-col space-y-[50px] items-center">
        <h1 className="text-center">
        Builders should{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#673147] from-[-30%] to-[#FFFFFF] to-[400%]">
        focus on building.
        </span>
        <br></br>We'll take care of the rest.
        </h1>
        <p className="text-center w-3/4 2xl:w-1/2">
        Our best-in-class suite of DAO management services are designed to let core teams focus on building decentralized protocols while we take care of the necessary administrative tasks communities require.
        </p>
    </div>
    </section>
    <section ref={ref} className="2xl:px-[130px] lg:px-[50px] px-[20px] pt-[70px] mb-[150px] relative">
    <div className="flex flex-col lg:flex-row lg:space-x-[120px] ">
        <div className="lg:w-1/3">
        <h2 ref={titleRef} className={`lg:absolute static text-[40px] top-[70px]`} style={{ top: `${scrollOffset}px`  }}>SERVICES</h2>
       
        </div>
        <div className="flex flex-col w-full">
        {capabilities.map((capability, index) => (
            <div
            key={index}
            className="mt-[70px] flex flex-col space-y-[70px] border-b-[1px] border-[#D9D9D9] w-full pb-[115px]"
            >
            <h2 className="text-[40px]">{capability.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] ">
                {capability.topics.map((topic, topicIndex) => (
                <p
                    key={topicIndex}
                    className="ml-[30px]"
                >
                    {topic}
                </p>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>

    <section className="2xl:px-[130px] lg:px-[50px] px-[20px] mb-[130px] mt-[250px] relative">
    <img
            src="/mugen_koi.png"
            className="absolute hidden lg:block right-0 2xl:-top-[30%] -top-[60%]"
            ></img>
    <div className="flex flex-col lg:flex-row  px-[20px] py-[20px] lg:px-[50px] 2xl:px-[150px] lg:py-[90px] space-y-[100px] lg:space-y-[0] items-center justify-between rounded-[30px]">
        <div className="flex flex-col space-y-[30px] lg:w-1/2 ">
        <h1>Optimize Your DAO</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        </div>
        <div>
        <p className="text-black px-[80px] py-[20px] font-bold bg-[#EE6FA3] rounded-full ">
            Let's Chat
        </p>
        </div>
    </div>
    </section>
    <Footer></Footer>
</div>
);
}
