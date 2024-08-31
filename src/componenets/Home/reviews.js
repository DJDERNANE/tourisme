import { useState } from "react"

export default function Reviews() {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "احمد",
            title: "الجزائر",
            quote: "منصة رائعة للسياحة! سهّلت عليّ العثور على أفضل الوجهات السياحية وحجز الفنادق بكل سهولة. تجربة المستخدم ممتازة والمعلومات المتوفرة دقيقة وشاملة. أوصي بها لكل من يحب السفر والاستكشاف"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "محمد",
            title: "وهران",
            quote:"تجربة لا تُنسى مع هذه المنصة! كل شيء منظم بشكل مثالي، من البحث عن الأماكن السياحية إلى حجز التذاكر والإقامة. خدمة العملاء متاحة دائمًا ومستعدة للمساعدة في أي وقت."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "علي",
            title: "ادرار",
            quote: "موقع ممتاز للتخطيط للعطلات. توفر المنصة معلومات مفيدة عن الأنشطة المحلية والمعالم السياحية، مما جعل رحلتنا أكثر متعة وإثارة. شكراً على الخدمة الرائعة!"
        },
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-indigo-600 font-semibold pb-6">آراء السياح</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}