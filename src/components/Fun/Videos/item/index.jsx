import {FaPlay} from "react-icons/fa";

const Item = ({desc, text, link, imageSrc}) => (
    <div className="h-full">
        <a
            href={link}
            target="_blank"
            className="block hover:no-underline relative group cursor-pointer"
        >
            <img src={imageSrc} alt="" className="object-cover"/>
            <div className="absolute w-full h-full z-10 top-0 right-0
             left-0 p-3 space-x-2 flex-center bg-gradient-to-b
             from-black/75 to-red-600/30 invisible group-hover:visible">
                <div className="flex-center rounded-full w-14 h-14 hover:text-red-700">
                    <FaPlay className="text-4xl text-white"/>
                </div>
            </div>
        </a>
        <div className="p-3 bg-neutral-200" style={{minHeight: '210px'}}>
            <p className="py-2 text-black font-semibold text-base secondary-font-family">{text}</p>
            <p className="text-black text-sm tracking-wide bg-neutral-200">{desc}</p>
        </div>
    </div>
)

export default Item;