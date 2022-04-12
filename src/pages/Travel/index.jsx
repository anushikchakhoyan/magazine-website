import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

const Travel = () => {
    const {t} = useTranslation();

    return (
        <div className="h-96 max-w-layout">
            <div className="pb-14">
                <Title title={t('menu.travel')} />
            </div>
        </div>
    );
}

export default Travel;
