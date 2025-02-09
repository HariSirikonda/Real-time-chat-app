import React, { useState } from 'react'
import axios from 'axios';

const LoginPage = ({ setIsSignedUp }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hide, setHide] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleHideClick = () => {
        setHide(!hide);
    };
    const handleLoginClick = async () => {
        setLoading(true)
        if (!email || !password) {
            alert("Enter All Fields");
            setLoading(false)
            return
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "http://localhost:5000/api/user/login",
                { email, password },
                config
            );
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            setIsSignedUp(true);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "An error occurred");
            setLoading(false);
        }
    };
    return (
        <div className='text-center p-1'>
            <div className='mb-3'>
                <h6 className='ms-1 text-start'>Email Address <span className='text-danger'>*</span></h6>
                <input
                    className='email-input mx-1 form-control rounded shadow-none'
                    placeholder='Enter your Email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div className='mb-1 text-start'>
                <h6 className='mx-1'>Password <span className='text-danger'>*</span></h6>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='password-input me-1'>
                        <input
                            className='form-control rounded shadow-none'
                            type={`${hide === true ? "text" : "password"}`}
                            placeholder='Enter your Password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                        />
                    </div>
                    <div className='hide-button me-1'>
                        <button className='btn bg-light shadow-none' onClick={handleHideClick}>
                            <b>{`${hide === true ? "Show" : "Hide"}`}</b>
                        </button>
                    </div>
                </div>
            </div>
            <div className='p-1'>
                <button
                    className='btn btn-primary text-white w-100 shadow-none'
                    onClick={handleLoginClick}
                    disabled={loading}
                >
                    <b>{loading ? "Loading..." : "Login"}</b>
                </button>
            </div>
            <div className='p-1'>
                <button
                    className='btn btn-danger text-white w-100 shadow-none'
                    onClick={() => { setEmail("guest@gmail.com"); setPassword("123456"); }}
                >
                    <b>Get Guest User Credentials</b>
                </button>
            </div>
        </div>
    )
}

export default LoginPage
