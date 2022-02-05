// import Gallery from 'react-grid-gallery';
import {useTranslation} from "react-i18next";

import Title from "../../components/Tilte";

const News = () => {
    const {t} = useTranslation();

    return (
        <>
            <Title title={t('titles.Trending')} />
        </>
    );
}

export default News;
