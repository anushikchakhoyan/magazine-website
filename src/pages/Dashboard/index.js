import {useTranslation} from "react-i18next";

const Dashboard = () => {
    const {t} = useTranslation();

    return (
        <>
            <p className="text-red-700">{t('dashboard')}</p>
            <p className="text-red-300">{t('dashboard')}</p>
        </>
    )
}

export default Dashboard;