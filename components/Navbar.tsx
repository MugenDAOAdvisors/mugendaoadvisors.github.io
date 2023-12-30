import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
const navigation = [
{
    name: "Home",
    href: "/",
},
{
    name: "About",
    href: "/about",
},
{
    name: "Services",
    href: "/services",
},
{
    name: "Contact",
    href: "/contact",
},
];

const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleMenuToggle = () => {
setIsMenuOpen(!isMenuOpen);
};

return (
<nav>
    <div className="lg:flex hidden justify-between py-[30px] px-[20px] 2xl:px-[130px] lg:px-[50px]">
    <div className="flex items-center space-x-[20px]">
        <img className="w-[30px] h-[30px]" src="/mugenLogo.png"></img>
        <p className="uppercase font-[DM Sans] text-[20px] text-white font-bold">
        Mugen
        </p>
    </div>
    <div className="flex lg:space-x-[100px] md:space-x-[50px] space-x-[20px] items-center">
        <div className="flex 2xl:space-x-[100px] md:space-x-[50px] space-x-[20px] items-center">
        {navigation.map((nav) => (
            <p className="text-white font-medium md:text-[20px]">
            <Link href={nav.href}>{nav.name}</Link>
            </p>
        ))}
        <p className="uppercase font-medium bg-[#EE6FA3] px-[40px] py-[15px] text-[20px] rounded-full text-[#1B1B1B]">
            Let's Talk
        </p>
        </div>
    </div>
    </div>

    {/* MOBILE */}
    <div className="block lg:hidden">
    <button onClick={handleMenuToggle}>
        <img src="/Menu.svg" alt="menu" className="w-[50px] h-[50px] m-[10px]"></img>
    </button>
    <div
        className={`${
        isMenuOpen ? "w-screen h-screen" : "w-0 h-0"
        } transition-all duration-250`}
    >
        <div
        className={`${
            isMenuOpen ? "flex items-center justify-center" : "hidden"
        }`}
        >
        <div className="flex flex-col items-center justify-center space-y-[50px] px-[10px] mt-[50px] ">
            <div className="flex items-center space-x-[20px]">
            <img className="w-[30px] h-[30px]" src="/mugenLogo.png"></img>
            <p className="uppercase font-[DM Sans] text-[20px] text-white font-bold">
                Mugen
            </p>
            </div>
            {navigation.map((nav) => (
            <p className="text-white font-medium md:text-[20px]">
                <Link href={nav.href}>{nav.name}</Link>
            </p>
            ))}
            <p className="uppercase font-medium bg-[#EE6FA3] px-[40px] py-[15px] text-[20px] rounded-full text-[#1B1B1B]">
            Let's Talk
            </p>
        </div>
        </div>
    </div>
    </div>
</nav>
);
}
