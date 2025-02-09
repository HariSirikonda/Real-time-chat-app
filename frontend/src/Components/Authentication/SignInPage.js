'use-client'
import axios from 'axios';
import React, { useState } from 'react';


const SignInPage = ({ setIsSignedUp }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState(null);
    const [loading, setLoading] = useState(false);
    const [passwordHide, setPasswordHide] = useState(true);
    const [confirmPasswordHide, setConfirmPasswordHide] = useState(true);

    const handlePasswordHide = () => {
        setPasswordHide(!passwordHide);
    };

    const handleConfirmPasswordHide = () => {
        setConfirmPasswordHide(!confirmPasswordHide);
    };

    const uploadImage = async (file) => {
        if (file.type === "image/jpeg" || file.type === "image/png") {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "dm1r8lwjy");
            try {
                const res = await fetch("https://api.cloudinary.com/v1_1/dm1r8lwjy/image/upload", {
                    method: "POST",
                    body: data,
                });
                const result = await res.json();
                console.log("Uploaded Image URL:", result.secure_url);
                setPic(result.secure_url);
            } catch (error) {
                console.error("Image upload failed:", error);
            }
        } else {
            alert("Images of Jpeg or png only allowed..! Try again");
        }
    };

    const submitHandler = async () => {
        setLoading(true);
        if (!name || !email || !password || !ConfirmPassword) {
            alert("Please Fill all the fields")
            setLoading(false);
            return;
        }
        if (password !== ConfirmPassword) {
            alert("Passwords Do not match..!")
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "http://localhost:5000/api/user",
                { name, email, password, pic },
                config
            );
            console.log(data);
            alert("Registration Successful");
            localStorage.setItem("userInfo", JSON.stringify(data));
            setIsSignedUp(true);
            setLoading(false);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "An error occurred");
            setLoading(false);
        }
    };

    return (
        <div className='text-center p-1'>
            <div className='mb-3'>
                <h6 className='ms-1 text-start'>Name <span className='text-danger'>*</span></h6>
                <input
                    className='email-input mx-1 form-control rounded shadow-none'
                    type='text'
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <h6 className='ms-1 text-start'>Email Address <span className='text-danger'>*</span></h6>
                <input
                    className='email-input mx-1 form-control rounded shadow-none'
                    type='email'
                    placeholder='Enter your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3 text-start'>
                <h6 className='mx-1'>Password <span className='text-danger'>*</span></h6>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='password-input me-1'>
                        <input
                            className='form-control rounded shadow-none'
                            type={`${passwordHide === true ? "password" : "text"}`}
                            placeholder='Enter your Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='hide-button me-1'>
                        <button className='btn bg-light shadow-none' onClick={handlePasswordHide}>
                            <b>{`${passwordHide === true ? "Show" : "Hide"}`}</b>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mb-3 text-start'>
                <h6 className='mx-1'>Confirm Password <span className='text-danger'>*</span></h6>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='password-input me-1'>
                        <input
                            className='form-control rounded shadow-none'
                            type={`${confirmPasswordHide === true ? "password" : "text"}`}
                            placeholder='Confirm your Password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className='hide-button me-1'>
                        <button className='btn bg-light shadow-none' onClick={handleConfirmPasswordHide}>
                            <b>{`${confirmPasswordHide === true ? "Show" : "Hide"}`}</b>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-3 text-start">
                <h6 className='mx-1'>Upload your Profile <span className='text-danger'>*</span></h6>
                <input
                    className="form-control form-control-sm shadow-none"
                    id="formFileSm"
                    type="file"
                    onChange={(e) => uploadImage(e.target.files[0])}
                />
            </div>
            <div className='p-1'>
                <button
                    className='btn btn-primary text-white w-100 shadow-none'
                    id='ImageName'
                    disabled={loading}
                    onClick={submitHandler}
                ><b>
                        {loading ? "Loading..." : "Sign Up"}
                    </b>
                </button>
            </div>
        </div>
    );
}

export default SignInPage;
