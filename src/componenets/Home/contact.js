export default function Contact ()  {

    return (
        <main className="py-14 ">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-indigo-600 font-semibold">
                        تواصل معنا
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        ابد رأيك
                    </p>
                    <p>
                       هل ساعتك المنصة في رحلتك ؟
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div >
                                <label className="font-medium">
                                    الاسم
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    اللقب
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                العنوان الالكتروني
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                      
                        <div>
                            <label className="font-medium">
                                رسالة
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            حفظ
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}