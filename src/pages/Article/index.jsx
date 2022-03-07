import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

const Article = () => {
    const {t} = useTranslation();

    return (
        <div className="h-96">
            <div className="pb-14">
                <Title title={t('menu.article')} />
            </div>
        </div>
    );
}

export default Article;
