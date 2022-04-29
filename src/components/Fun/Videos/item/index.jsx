import {Tooltip} from "@mui/material";
import {FaPlay} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const Item = ({image}) => {
    const {t} = useTranslation();

    return (
        <a href="https://unsplash.com/" target="_blank" className="hover:no-underline relative group cursor-pointer max-h-72">
                <img src={image} alt="" className="object-cover"/>
                <div className="absolute w-full h-full z-10 top-0 right-0 left-0 p-3 space-x-2 flex-center
                            bg-gradient-to-b from-black/75 to-red-600/30 invisible group-hover:visible">
                    <Tooltip title={t('tooltips.share')}>
                        <div
                            className="bg-white flex-center rounded-full w-14 h-14 hover:text-red-700"
                        >
                            <FaPlay className="text-2xl text-black"/>
                        </div>
                    </Tooltip>
                </div>
        </a>
    )
}

export default Item;