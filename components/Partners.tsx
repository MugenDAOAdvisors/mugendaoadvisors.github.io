import Marquee from "react-fast-marquee"

export default function Partners (){
    return(
        <div>
            <p className="text-center md:mb-[70px] mb-[20px]">Trusted Partners</p>
            <Marquee
            autoFill>
                <img className="md:w-[150px] w-[70px] ml-[50px] mr-[50px]" src="/Glassmarket.svg"></img>
                <img className="md:w-[150px] w-[70px] ml-[50px] mr-[50px]" src="/Hedgey.png"></img>
                <img className="md:w-[150px] w-[70px] ml-[50px] mr-[50px]" src="/Groomlake.png"></img>
            </Marquee>

        </div>
    )
}