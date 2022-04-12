import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

const Music = () => {
    const {t} = useTranslation();

    return (
        <div className="h-96 max-w-layout">
            <div className="pb-14">
                <Title title={t('menu.music')} />
            </div>
        </div>
    );
}

export default Music;
