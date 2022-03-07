import {useEffect, useRef, useState} from "react"
import ApiService from "../../services/api";

const FaqsItem = (props) => {
    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            onClick={handleOpenAnswer}
            className="space-y-3 mt-5 overflow-hidden border-b"
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.title}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQ = () => {
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
        <section className="leading-relaxed bg-white max-w-screen-xl m-2 py-12 px-4 lg:px-8 rounded-md">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {items.map((item, index) => <FaqsItem key={index} faqsList={item}/>)}
            </div>
        </section>
    )
}

export default FAQ;
