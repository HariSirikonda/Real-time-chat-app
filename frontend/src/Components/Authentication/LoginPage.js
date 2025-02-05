import React, { useState } from 'react'

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [hide, setHide] = useState(true);
    const handleHideClick = () => {
        setHide(!hide);
    };
    const handleLoginClick = () => {
        if (email === "" || password === "") {
            alert("Enter proper Credentials");
        }
        else {
            console.log("Entered Email : ", email);
            console.log("Entered Password : ", password);
        }
    };
    return (
        <div className='text-center p-1'>
            <div className='mb-3'>
                <h6 className='ms-1 text-start'>Email Address <span className='text-danger'>*</span></h6>
                <input
                    className='email-input mx-1 form-control rounded shadow-none'
                    placeholder='Enter your Email'
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
                <button className='btn btn-primary text-white w-100 shadow-none' onClick={handleLoginClick}><b>Login</b></button>
            </div>
            <div className='p-1'>
                <button className='btn btn-danger text-white w-100 shadow-none' ><b>Get Guest User Credentials</b></button>
            </div>
        </div>
    )
}

export default LoginPage
