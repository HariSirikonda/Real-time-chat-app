import React, { useState } from 'react'
import LoginPage from '../Components/Authentication/LoginPage';
import SignInPage from '../Components/Authentication/SignInPage';

function HomePage() {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <div>
            <div className='container heading-div p-1 text-center mt-3 rounded'>
                <h3>Welcome to Live Chat App</h3>
            </div>
            <div className='authentication-div bg-white mt-3 rounded container'>
                <div className='d-flex m-1 rounded'>
                    <div className='w-50'>
                        <button
                            onClick={() => setActiveTab("login")}
                            className={`btn button w-100 shadow-none rounded ${activeTab === "login" ? "btn-primary" : "btn-white"}`}

                        >
                            <b>Login</b>
                        </button>
                    </div>
                    <div className='w-50'>
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`btn button w-100 shadow-none rounded ${activeTab === "signup" ? "btn-primary" : "btn-white"}`}
                        >
                            <b>Sign Up</b>
                        </button>
                    </div>
                </div>
                <div className='mt-3 p-1 rounded'>
                    {activeTab === "login" ? <LoginPage /> : <SignInPage />}
                </div>
            </div>
        </div>
    )
}

export default HomePage
