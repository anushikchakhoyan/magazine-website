import {Space} from "antd";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {getUser, removeToken, removeUser} from "../../../helpers/storage.helper";

const Header = () => {
    const user = getUser();
    const {t} = useTranslation();
    const history = useHistory();

    const logout = () => {
        removeUser();
        removeToken();
        history.replace('/login');
    }

    return (
        <header className="bg-white shadow-lg px-8 py-4 flex items-center justify-between">
            <h1 className="font-black text-xl text-green-600">{t('logo')}</h1>
            <Space>
                <p className="font-bold">{user.username}</p>
                <p onClick={logout} className="cursor-pointer ml-3 hover:text-green-600">{t('logout')}</p>
            </Space>
        </header>
    )
}

export default Header;