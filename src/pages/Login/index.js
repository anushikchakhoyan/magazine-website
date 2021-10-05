import {useTranslation} from "react-i18next";
import {useState} from "react";

const Login = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState('');
    const [submitLoading, setSubmitLoading] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleChange = e => {
        setValue(e.target.value);
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex max-w-7xl w-full min-h-screen md:min-h-800 shadow-lg">
                <div className="w-1/2 rounded-tl-md rounded-bl-md  bg-cover hidden md:block auth-background">
                    <h1 className="text-green-600 pt-16 text-4xl text-black text-center">{t('appName')}</h1>
                </div>
                <div className="flex justify-center items-center flex-col flex-none w-full md:flex-1 bg-white rounded-tr-md rounded-br-md">
                    <p className="text-xl pb-8">{t('login')}</p>
                    <form onSubmit={handleSubmit} className="px-2 lg:px-8 w-4/5">
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block" htmlFor="username">
                                <input type="text"
                                       id="username"
                                       name="username"
                                       className="mt-1 block w-full rounded-md bg-gray-100 focus:outline-none p-2"
                                       placeholder={t('auth.username')}/>
                            </label>
                            <label className="block" htmlFor="password">
                                <input type="password"
                                       id="password"
                                       name="password"
                                       className="mt-1 block w-full rounded-md bg-gray-100 focus:outline-none p-2"
                                       placeholder={t('auth.password')}/>
                            </label>
                        </div>
                        <div className="text-center mt-8">
                            <button
                                type="submit"
                                className="bg-green-600 text-white text-md py-3 px-8 md:px-16 lg:px-32 font-bold focus:outline-none rounded"
                            >
                                {submitLoading ? t('auth.wait') : t('auth.submit')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;