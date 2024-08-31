import Footer from '../Footer';
import Navbar from '../Navbar';
import './style.css';
import {Container} from 'react-bootstrap'
export default function Template({children}) {
    return (
        <div className='template'>
            <Navbar/>
            <div className='container'>
               

                {children}
            </div>
    
            <Footer/>
        </div>
    )


}