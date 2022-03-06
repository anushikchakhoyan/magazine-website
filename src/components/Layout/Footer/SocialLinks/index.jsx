import {useTranslation} from "react-i18next";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { GrFacebook } from "@react-icons/all-files/gr/GrFacebook";
import { ImLinkedin } from "@react-icons/all-files/im/ImLinkedin";

const SocialLinks = () => {
    const {t} = useTranslation();

    return (
        <ul className="flex items-center gap-3">
            <li>
                <a href="#" className="text-gray-500 hover:text-red-600">
                    <GrFacebook/>
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-500 hover:text-red-600">
                    <GrInstagram/>
                </a>
            </li>
            <li>
                <a href="#" className="text-gray-500 hover:text-red-600">
                    <ImLinkedin/>
                </a>
            </li>
        </ul>
    )
}

export default SocialLinks;