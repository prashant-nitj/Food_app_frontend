import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/login.css';

function Login() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            // You can add validation or display an error message here
            return;
        }

        try {
            setLoading(true);
            await login(email, password);
            setLoading(false);
            navigate('/');
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>LOGIN</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input
                            className="email input"
                            type="email"
                            name="Email"
                            placeholder="Your Email"
                            required=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input
                            className="password input"
                            type="password"
                            name="Password"
                            placeholder="**********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="loginBtn form-button"
                        type="button"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    <div className='otherOption'>
                        <button className="otherbtns form-button" type="button">
                            <Link to="/signup" className="otherbtns">Sign Up</Link>
                        </button>
                        <button className="otherbtns form-button" type="button">
                            <Link to="/forgetPassword" className="otherbtns">Forget Password</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
