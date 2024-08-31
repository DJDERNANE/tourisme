import { FaLocationDot } from "react-icons/fa6";
import antar from '../../assets/antar.jfif';
import meddad from '../../assets/meddad.jfif';
import hamam from '../../assets/hamam.jfif'
const posts = [
    {
        title: "حظيرة – عين عنتر – بوقايد",
        desc: "إن رحلة اكتشاف عاصمة الونشريس تقودك حتما إلى تسلق أعالي جبالها والوقوف عند أعلى قمة الونشريس – بسيدي اعمر – التي تبلغ علوها 1983 م .مع إكتشاف أشجار غابة الأرز بعين عنتر والتعرف على حكاية شجرتي الألفية ( سلطان وسلطانة ) الواقعة داخل إقليم الحظيرة الجهوية ببوقايد .",
        img: antar,
        href: "javascript:void(0)"
    },
    {
        title: "الحظيرة الوطنية للمداد: ثنية الحد",
        desc: "تقع الحظيرة الوطنية للمداد بثنية الحد على بعد 50 كلم عن مقر الولاية تيسمسيلت تتربع على مساحة 3425 هكتارا ، وتشكل همزة وصل بين جبال الونشريس وسهول السرسو تتميز بكثافة غابتها المشكلة من أشجار الأرز والبلوط والفلين التي تكسوها الثلوج طيلة موسم الشتاء  ",
        img: meddad,
       
        href: "javascript:void(0)"
    },
    {
        title: "حـمـام سيـدي سليمان المعدنـي",
        desc: "على بعد 60 كلم شمال مقر الولاية ، يتواجد الحمام المعدني – سيدي سليمان – بالبلدية التي تحمل اسمه ، تتدفق مياهه المعدنية من صخور جبال الونشريس مستغل منذ عام 1910 م تحيط به غابات كثيفة ومنتزهات طبيعيةمياه غنية بالتركيبات المعدنية ، درجات حرارتها تفوق 42 درج",
        img: hamam,
       
        href: "javascript:void(0)"
    },
]

export default function Places(){
    return (
        <section className="py-32">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">اكتشف الونشريس</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
                        <div className="relative">
                        <FaLocationDot  className="w-6 h-6 text-gray-400 absolute right-3 inset-y-0 my-auto"/>
                            <input
                                type="text"
                                placeholder="المنطقة"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                            />
                        </div>
                        <button className="block w-full mt-2 py-2 px-4 font-medium text-md text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                            بحث
                        </button>
                    </form>
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}