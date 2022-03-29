import {FiMenu} from "react-icons/fi";

const AppHeader = ({toggleSidebar, isSmallSize}) => (
    <div className={`flex px-4 py-3 bg-white justify-between  items-center w-full
                    ${isSmallSize ? '' : 'shadow-md'}`}>
        {!isSmallSize && (
            <button
                onClick={toggleSidebar}
                className="text-lg text-black p-2"
            >
                <FiMenu />
            </button>
        )}
        <h1>ddeded</h1>
        <p>Search</p>
    </div>
)

export default AppHeader;