import AboutUs from './aboutUs'
import Contact from './contact'
import FirstSection from './firstSection'
import Reviews from './reviews'
import Services from './services'
import './style.css'

export default function Home(){
    return (
        <div>
            <FirstSection/>
            <AboutUs/>
            <Services/>
            <Reviews/>
            <Contact/>
        </div>
    )
}