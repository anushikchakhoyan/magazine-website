import {useTranslation} from "react-i18next";

const TableLayoutWrapper = ({title, button, children}) => {
    const {t} = useTranslation();

    return (
        <div className="w-full bg-white rounded-lg">
            <div className="py-3 px-5 flex justify-between items-center">
                <p className="text-xl font-bold">{title}</p>
                {button}
            </div>
            <div className="px-4">
                {children}
            </div>
        </div>
    );
}

export default TableLayoutWrapper;