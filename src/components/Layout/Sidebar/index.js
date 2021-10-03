import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ProfileOutlined, UserOutlined} from "@ant-design/icons";

const Sidebar = () => {
    const {t} = useTranslation();

    return (
        <div className="w-48 bg-white content-wrapper">
            <NavLink
                to="/users"
                exact
                activeClassName="border-green-600 bg-gray-200 hover:border-green-600"
                className="group flex items-center text-black py-3 px-6 border-r-4 border-white hover:bg-gray-200 hover:text-black hover:border-gray-200"
            >
                <UserOutlined className="text-xl"/>
                <p className="text-md ml-8">{t('users')}</p>
            </NavLink>
            <NavLink
                to="/posts"
                exact
                activeClassName="border-green-600 bg-gray-200 hover:border-green-600"
                className="group flex items-center text-black py-3 px-6 border-r-4 border-white hover:bg-gray-200 hover:text-black hover:border-gray-200"
            >
                <ProfileOutlined className="text-xl"/>
                <p className="text-md ml-8">{t('posts')}</p>
            </NavLink>
        </div>
    )
}

export default Sidebar;