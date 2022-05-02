import {GrInstagram, GrFacebook} from "react-icons/gr";
import {ImLinkedin} from "react-icons/im";

const SocialLinks = ({classname}) => (
    <ul className={`flex items-center text-gray-600 space-x-4 mt-6 sm:mt-0 ${classname}`}>
        <li className="group">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/"
                className=' group-hover:text-red-500'
            >
                <GrFacebook/>
            </a>
        </li>
        <li className="group">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
                className='group-hover:text-red-500'
            >
                <GrInstagram/>
            </a>
        </li>
        <li className="group">
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/"
                className='group-hover:text-red-500'
            >
                <ImLinkedin/>
            </a>
        </li>
    </ul>
)

export default SocialLinks;