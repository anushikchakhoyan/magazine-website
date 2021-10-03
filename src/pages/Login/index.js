import {useTranslation} from "react-i18next";

const Login = () => {
    const {t} = useTranslation();

    return (
        <>
            <p className="text-red-600">{t('login')}</p>
        </>
    )
}
export default Login;