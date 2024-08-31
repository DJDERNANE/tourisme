import Navbar from "../componenets/Navbar";
import Login from "../componenets/Login";
import Footer from "../componenets/Footer"
import Template from "../componenets/Template";

export default function LoginPage() {
    return (
        <Template>
            <div className='login p-md-5 p-3 py-5'>
               

                <Login />

            </div>
        </Template>
    )
}