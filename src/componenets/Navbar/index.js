import { useState } from 'react';
import './style.css';
import './responsive.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.PNG'
export default function Navbar() {
    const [active, setActive] = useState(false);
    return (
        <div className='navbar px-2 shadow '>
            <div className='container'>

                <div className='logo'>
                 
                    <img src={logo} alt='logo' />
                    <div className={`listbtn ${active ? 'active' : ''}`} id="btnlist" onClick={() => setActive(!active)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <ul className={` ${active ? 'active' : ''} navigation  m-0 p-0`} id="btnlist" onClick={() => setActive(!active)}>

                    <li className='m-0 p-0'>
                        <Link to="/">الرئيسية</Link>
                    </li>
                    <li className='m-0 p-0'>
                        <Link to="/hotels">فنادق</Link>
                    </li>
                    <li className='m-0 p-0'>
                        <Link to="/places">اماكن سياحية</Link>
                    </li>
                    <li className='m-0 p-0'>
                        <Link to="/">تواصل معنا</Link>
                    </li>

                    <li className='m-0 p-0 login-btn' >
                    <Link to="/login">تسجيل الدخول</Link>
                     </li>
                  
                </ul>


            </div>


        </div>
    )


}