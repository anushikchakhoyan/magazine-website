import {FiMenu} from "react-icons/fi";
import Logo from "../Logo";
import Menu from "../../Menu";

const AppHeader = ({isSmallSize}) => (
    <>
        <div className="flex p-3 bg-white mx-auto max-w-screen-xl justify-between
                        items-center w-full"
        >
            <Logo />
            {isSmallSize && (
                <button
                    className="text-lg text-black p-2"
                >
                    <FiMenu />
                </button>
            )}
            <p>Search</p>
        </div>
        <div className="h-px bg-gray-200 my-2"/>
        <Menu />
    </>
)

export default AppHeader;