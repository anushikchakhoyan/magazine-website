import LiveNews from "../LiveNews";
import Title from "../Tilte";

const Hero = ({bg, link, desc, fromBusiness}) => (
    <div className="max-w-layout flex flex-col space-y-8 lg:space-y-0 lg:flex-row">
        <div className="flex-grow max-w-3xl relative group cursor-pointer">
            <img src={bg} alt="Sport" className="w-full h-full object-cover"/>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="bg-black/40 text-white absolute bottom-0 pb-5 group-hover:underline underline-offset-4"
            >
                <Title title={desc} classnames="p-3 text-white text-xl xl:text-3xl"/>
            </a>
        </div>
        <div className={fromBusiness ? 'hidden lg:block' : ''}>
            <LiveNews/>
        </div>
    </div>
)

export default Hero;