import Title from "../../Tilte";
import {useTranslation} from "react-i18next";

const BlogItems = () => {
    const {t} = useTranslation();

    const posts = [
        {
            title: "What is SaaS? Software as a Service Explained",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "A Quick Guide to WordPress Hosting",
            desc: "According to him, Ã¢â‚¬Å“I'm still surprised that this has happened. But we are surprised because we are so surprised.Ã¢â‚¬ÂMore revelations about Whittington will be featured in the film",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
        {
            title: "7 Promising VS Code Extensions Introduced in 2022",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
            date: "Thursday, December 9th 2021",
            href: "javascript:void(0)"
        },
    ]

    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
            <>
                <Title
                    title={t('blog.title')}
                    classnames="text-red-600"
                />
               <p className="px-4">{t('blog.subTitle')}</p>
            </>
            <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
                {
                    posts.map((item, idx) => (
                        <article className="mt-5 pt-8 md:pt-0" key={idx}>
                            <a href={item.href}>
                                <span className="block text-gray-400 text-sm">
                                    {item.date}
                                </span>
                                <div className="mt-2">
                                    <h3 className="text-xl text-gray-900 font-semibold
                                                   hover:no-underline secondary-font-family">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <button
                                    className="mt-2 outline-none font-medium flex items-center text-[14px]
                                               text-black decoration-blue-600 hover:no-underline hover:text-red-500">
                                    READ MORE
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default BlogItems;
