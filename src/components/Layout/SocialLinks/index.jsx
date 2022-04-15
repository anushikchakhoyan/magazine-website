import {GrInstagram, GrFacebook} from "react-icons/gr";
import {ImLinkedin} from "react-icons/im";

const SocialLinks = () => (
    <ul className="flex items-center space-x-4 mt-6 sm:mt-0">
        <li className="group">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/"
                className="text-gray-600 group-hover:text-red-600"
            >
                <GrFacebook/>
            </a>
        </li>
        <li className="group">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
                className="text-gray-600 group-hover:text-red-600"
            >
                <GrInstagram/>
            </a>
        </li>
        <li className="group">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/"
                className="text-gray-600 group-hover:text-red-600"
            >
                <ImLinkedin/>
            </a>
        </li>
    </ul>
)

export default SocialLinks;