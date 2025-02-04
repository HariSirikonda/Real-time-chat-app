import React from 'react'

function SignInPage() {
    return (
        <div className='text-center p-1'>
            <div className='mb-3'>
                <h6 className='ms-1 text-start'>Name <span className='text-danger'>*</span></h6>
                <input className='email-input mx-1 form-control rounded shadow-none' type='text' />
            </div>
            <div className='mb-3'>
                <h6 className='ms-1 text-start'>Email Address <span className='text-danger'>*</span></h6>
                <input className='email-input mx-1 form-control rounded shadow-none' type='email' />
            </div>
            <div className='mb-3 text-start'>
                <h6 className='mx-1'>Password <span className='text-danger'>*</span></h6>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='password-input me-1'>
                        <input className='form-control rounded shadow-none' type='password' />
                    </div>
                    <div className='hide-button me-1'>
                        <button className='btn bg-light shadow-none' >Hide</button>
                    </div>
                </div>
            </div>
            <div className='mb-3 text-start'>
                <h6 className='mx-1'>Confirm Password <span className='text-danger'>*</span></h6>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='password-input me-1'>
                        <input className='form-control rounded shadow-none' type='password' />
                    </div>
                    <div className='hide-button me-1'>
                        <button className='btn bg-light shadow-none' >Hide</button>
                    </div>
                </div>
            </div>
            <div class="mb-3 text-start">
                <h6 className='mx-1'>Upload your Profile <span className='text-danger'>*</span></h6>
                <input class="form-control form-control-sm shadow-none" id="formFileSm" type="file" />
            </div>
            <div className='p-1'>
                <button className='btn btn-primary text-white w-100 shadow-none' ><b>Sign Up</b></button>
            </div>
        </div>
    )
}

export default SignInPage
