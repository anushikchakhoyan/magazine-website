const CallToAction = () => {
    return (
        <section className="my-8 py-4 px-4 sm:px-8 bg-gray-100 max-w-screen-xl mx-auto">
            <div className="max-w-xl">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        build your websites with <span className="text-red-600">high performance</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                        Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor
                        posuere
                        feugiat. Duis sodales nisi id porta lacinia.
                    </p>
                </div>
                <a
                    className="cta-pr-btn px-4 py-2 text-red-600 font-medium bg-black-50 rounded-full inline-flex items-center"
                    href="/">
                    Try it out
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default CallToAction;