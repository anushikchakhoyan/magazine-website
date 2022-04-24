import {Tooltip} from "@mui/material";
import {FaHeart, FaShare} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const Item = ({image}) => {
    const {t} = useTranslation();

    return (
        <figure className="relative group cursor-pointer">
            <img src={image} alt=""/>
            <div className="absolute w-full h-full z-10 top-0 p-3 space-x-2 flex items-start justify-end
                            bg-gradient-to-b from-black/50 to-trueGray-600/0 invisible group-hover:visible">
                <Tooltip title={t('tooltips.share')}>
                    <button
                        className="bg-white rounded p-2 hover:text-red-700"
                    >
                        <FaShare />
                    </button>
                </Tooltip>
                <Tooltip title={t('tooltips.save')}>
                    <button
                        className="bg-white rounded p-2 hover:text-red-700"
                    >
                        <FaHeart />
                    </button>
                </Tooltip>
            </div>
        </figure>
    )
}

export default Item;