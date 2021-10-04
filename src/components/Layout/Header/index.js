import {useHistory} from "react-router";
import {useTranslation} from "react-i18next";
import {removeToken, removeUser} from "../../../helpers/storage.helper";

const Header = () => {
    const {t} = useTranslation();
    const history = useHistory();

    return (
        <header className="bg-white shadow-lg px-8 py-4 flex items-center justify-between">
           <div>
               dd
           </div>
            <a onClick={() => {
                removeUser();
                removeToken();
                history.replace('/login');
            }}>{t('logout')}</a>
        </header>
    )
}

export default Header;