const Newsletter = () => {
    return (
        <section className="mt-12 max-w-screen-xl mx-auto">
            <div className="mx-4 p-8 rounded-lg bg-gradient-to-tr from-[#4e54c8] to-[#8f94fb] sm:mx-8">
                <div className="max-w-xl mx-auto">
                    <div className="space-y-4 text-center">

                        <h1 className="text-3xl text-white font-semibold">
                            Subscribe to our newsletter
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                        </p>
                    </div>
                    <div className="mt-5">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="max-w-md mx-auto flex items-center justify-center bg-white rounded-md p-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-300">
                            No spam ever, we are care about the protection of your data.
                            Read our <a className="underline" href="javascript:void(0)"> Privacy Policy </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;
