import Link from "next/link"

export default function Navbar(){

    const navigation=[
        {
            name: "Home",
            href:"/"
        },
        {
            name: "About",
            href:"/about"
        },
        {
            name: "Services",
            href:"/services"
        },
        {
            name: "Contact",
            href:"/"
        },
]

    return(
        <nav className="flex justify-between py-[30px]">
            <div className="flex items-center">
                <img src="/mugenLogo.png"></img>
                <p className="uppercase font-[DM Sans] text-[20px] font-bold">Mugen</p>
            </div>
            <div className="flex space-x-[100px] items-center">
                <div className="flex space-x-[100px] items-center">
                    {navigation.map((nav) =>(
                            <p className="text-white font-medium text-[20px]"><Link href={nav.href}>{nav.name}</Link></p>
                        ))}
                        <p className="uppercase font-medium bg-[#EE6FA3] px-[40px] py-[15px] text-[20px] rounded-full">Let's Talk</p>
                </div>
            </div>
        </nav>
    )
}