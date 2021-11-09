import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ProfileOutlined, UserOutlined} from "@ant-design/icons";

const Sidebar = () => {
    const {t} = useTranslation();

    return (
        <div className="m-3 lg:m-0 lg:w-48 bg-white content-wrapper flex lg:block">
            <NavLink
                to="/"
                exact
                activeClassName="border-green-600 lg:bg-gray-200 hover:border-green-600"
                className="group flex items-center mr-4 lg:mr-0 py-3 px-6 border-b-4 lg:border-b-0 lg:border-r-4 border-white hover:bg-gray-200 hover:text-green-600 hover:border-gray-200"
            >
                <UserOutlined className="text-xl"/>
                <p className="text-md ml-4 lg:ml-8">{t('users')}</p>
            </NavLink>
            <NavLink
                to="/posts"
                exact
                activeClassName="border-green-600 bg-gray-200 hover:border-green-600"
                className="group flex items-center py-3 px-6 border-b-4 lg:border-b-0 lg:border-r-4 border-white hover:bg-gray-200 hover:text-green-600 hover:border-gray-200"
            >
                <ProfileOutlined className="text-xl"/>
                <p className="text-md ml-4 lg:ml-8">{t('posts')}</p>
            </NavLink>
        </div>
    )
}

export default Sidebar;