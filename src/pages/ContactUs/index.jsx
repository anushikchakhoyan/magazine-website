import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

const ContactUs = () => {
    const {t} = useTranslation();

    return (
        <div className="flex justify-between flex-col lg:flex-row my-10">
            <div className="hidden lg:block w-full lg:w-1/2" style={{maxHeight: "30rem"}}>
                <img
                    className="w-full h-full object-cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Riga_Old_Town_OSM_street_map.png"
                    alt=""
                />
            </div>
            <div className="w-full lg:w-1/2 py-12 px-10 bg-neutral-100">
                <div className="py-10 text-center space-y-2">
                    <Title title={t('contact.desc')} classnames="p-0"/>
                    <div className="w-48 h-0.5 bg-red-600 mx-auto"/>
                </div>
                <h2 className="pb-3 px-5 text-black text-xl font-semibold">{t('contact.working')}</h2>
                <p className="px-5 text-black">{t('contact.days')}</p>
                <p className="px-5 text-black">{t('contact.noneWork')}</p>
                <h2 className="pt-8 pb-3 px-5 text-black text-xl font-semibold">{t('contact.call')}</h2>
                <p className="px-5 text-black">012700700</p>
                <p className="px-5 text-black">info@magazine.am</p>
            </div>
        </div>
    )
}

export default ContactUs;
