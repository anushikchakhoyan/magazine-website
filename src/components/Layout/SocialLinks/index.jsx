import {GrInstagram, GrFacebook} from "react-icons/gr";
import {ImLinkedin} from "react-icons/im";

const SocialLinks = () => (
    <div className="mt-6 sm:mt-0">
        <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void(0)">
                    <GrFacebook/>
                </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void(0)">
                    <GrInstagram/>
                </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void(0)">
                    <ImLinkedin/>
                </a>
            </li>
        </ul>
    </div>
)

export default SocialLinks;