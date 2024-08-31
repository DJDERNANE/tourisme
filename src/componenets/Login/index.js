import { useEffect, useState } from 'react'
import './style.css'
import './responsive.css'
import Button from '../Button'
import axios from 'axios'


export default function Login() {
    const [message, setMessage] = useState('')
    const [hascontentEmail, setHascontentEmail] = useState(false);
    const [hascontentUsername, setHascontentUsername] = useState(false);
    const [email, setEmail] = useState('')
    const [hascontentPassword, setHascontentPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState(false);

    useEffect(() => {
        if (email !== '') {
            setHascontentEmail(true)
        } else {
            setHascontentEmail(false)
        }
    }, [email])
    useEffect(() => {
        if (password !== '') {
            setHascontentPassword(true)
        } else {
            setHascontentPassword(false)
        }
    }, [password])
    useEffect(() => {
        if (username !== '') {
            setHascontentUsername(true)
        } else {
            setHascontentUsername(false)
        }
    }, [username])

    const handleRegister = async (e) => {
        e.preventDefault()

        const response = await axios({
            method: 'post',
            
            data: {
                username: username,
                email: email,
                password: password
            }
        });
        if (response.data.auth) {
            localStorage.setItem('token', response.data.access_token);
        } else {
            setMessage(response.data.message)
        }

    }

const handleLogin = async (e) => {
    e.preventDefault()
    const response = await axios({
        method: 'post',
      
        data: {
            email: email,
            password: password
        }
    });

    const { auth, access_token, message } = response.data
    if (auth) {
        localStorage.setItem('token', access_token);
      
    } else {
        setMessage(message)
    }


}

const handleLoginGoogle = async (response) => {
    const res = await axios({
        method: 'post',
        
        data: {
            token: response.credential
        }
    });
    if (res.data.auth) {
        localStorage.setItem('token', res.data.access_token);
      
    } else {
        setMessage(res.data.message)
    }
};
const responseMessage = async (response) => {
    console.log("Encoded JWT ID token: " + response.credential);

    const res = await axios({
        method: 'post',
       
        data: {
            token: response.credential
        }
    });
    if (res.data.auth) {
        localStorage.setItem('token', res.data.access_token);
   
    } else {
        setMessage(res.data.message)
    }
};
return (

    <div className='formulaire w-xs-75 w-75 mx-auto bg-white rounded-4 p-4 m-md-4 my-4 shadow'>
      {
                login ?
                    (
                        <div className={`form-section my-5`}>
                          
                            {
                                message ? (
                                    <div class="alert alert-danger col-10" role="alert">
                                        {message}
                                    </div>
                                ) : (
                                    ''
                                )
                            }

                            <form className='my-5' onSubmit={(e) => (handleLogin(e))}>
                                <div className="login-input input-effect">
                                    <input className={`${hascontentEmail ? 'has-content' : ''}  effect-17 px-2`} type="text" placeholder="" onChange={(event) => setEmail(event.target.value)} />
                                    <label>البريد الالكتروني</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="login-input input-effect">
                                    <input className={`${hascontentPassword ? 'has-content' : ''}  effect-17 p-2`} type="password" placeholder="" onChange={(event) => setPassword(event.target.value)} />
                                    <label>كلمة المرور</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="login-input input-effect">
                                    <Button text={`تسجيل الدخول`} login={true} />
                                    

                                    <p className='mt-3 signup-link'>
                                        <button className='border-0 bg-transparent' onClick={(event) => { event.preventDefault(); setLogin(false) }}>لا تمتلك حساب <span> سجل الان </span></button>
                                    </p>
                                </div>

                            </form>
                        </div>
                    ) :
                    (
                        <div className='form-section my-5'>
                            
                            {
                                message ? (
                                    <div class="alert alert-danger col-10" role="alert">
                                        {message}
                                    </div>
                                ) : (
                                    ''
                                )
                            }
                            <form onSubmit={(e) => handleRegister(e)}>
                                <div className="login-input input-effect ">
                                    <input className={`${hascontentUsername ? 'has-content' : ''}  effect-17 p-2`} type="text" placeholder="" onChange={(event) => setUsername(event.target.value)} />
                                    <label>اسم المستخدم</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="login-input input-effect">
                                    <input className={`${hascontentEmail ? 'has-content' : ''}  effect-17 p-2`} type="text" placeholder="" onChange={(event) => setEmail(event.target.value)} />
                                    <label>البريد الالكتروني</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="login-input input-effect">
                                    <input className={`${hascontentPassword ? 'has-content' : ''}  effect-17 p-2`} type="password" placeholder="" onChange={(event) => setPassword(event.target.value)} />
                                    <label>كلمة المرور</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="login-input input-effect">
                                    <Button text={`انشاء حساب`} login={true} />

                                  

                                    <p className='mt-3 signup-link'>
                                        <button className='border-0 bg-transparent' onClick={(event) => { event.preventDefault(); setLogin(true) }}>لديك حساب? <span> سجل الدخول </span></button>
                                    </p>
                                </div>

                            </form>
                        </div>
                    )
  }  )

    </div>

)


}