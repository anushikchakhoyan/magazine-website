import {useEffect, useRef, useState} from "react"
import {useTranslation} from "react-i18next";
import {BiPlus, BiMinus} from "react-icons/bi";

import ApiService from "../../services/api";
import Title from "../../components/Tilte";

const FaqsItem = (props) => {
    const { faqsList } = props;
    const answerElRef = useRef();
    const [state, setState] = useState(false);
    const [answerH, setAnswerH] = useState('0px');

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
    }

    return (
        <div
            onClick={handleOpenAnswer}
            className="space-y-3 mt-5 overflow-hidden border-b"
        >
            <h4 className="py-2 flex items-center justify-between text-lg text-gray-700 font-medium cursor-pointer">
                {faqsList.title}
                {state ? <BiMinus/> : <BiPlus/>}
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <p className="text-gray-500">
                    {faqsList.desc}
                </p>
            </div>
        </div>
    )
}

const FAQ = () => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const getList = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            ApiService.getFaqs()
                .then(res => {
                    const data = res.data.map(item => ({
                        ...item,
                        key: item.id
                    }));
                    if (isMounted) {
                        setItems(data);
                    }
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
        return () => {
            isMounted = false;
        };
    }

    useEffect(() => {
        getList();
    },[])

    return (
        <section className="leading-relaxed py-12 px-4 max-w-layout">
            <div className="space-y-3 text-center">
                <Title
                    note={t('faq.desc')}
                    title={t('faq.title')}
                    classnames="text-red-600"
                />
            </div>
            <div className="my-14 max-w-4xl mx-auto">
                {items.map((item, index) => <FaqsItem key={index} faqsList={item}/>)}
            </div>
        </section>
    )
}

export default FAQ;
