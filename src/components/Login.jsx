import { useRef, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from '../api/fetch.js';
const LOGIN_URL = 'api/users/login';

const Login = () => {
    const { setToken } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), 
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            
            }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            setToken(user, pwd, accessToken);
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (error) {
            if (!error?.response) {
                setErrMsg("Network Error");
            } else if (error?.response?.status === 401) {
                setErrMsg("Unauthorized Entry");
            } else if (error?.response?.status === 400) {
                setErrMsg("Missing Entry");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
        
    }

    return (
        <>
        {success ? (
            <section>
                <h1>Success</h1>
                <p>Sign in successful</p>
                <a href="#">Continue</a>
            </section>
        ) : (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>    
            </form>
            <p>
                {/* put router link here */}
                <a href="#">Sign Up</a>
            </p>
        </section>
        )}
        </>
    )
}

export default Login;