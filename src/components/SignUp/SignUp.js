import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const handleSubmit = (data) => {
        data.preventDefault()
    }
    return (
        <section className="signup-section">
            <div className="container signup-container">
                <div className="signup-boxed ">
                    <div className="row">
                        <div className="col-md-8 m-auto ">
                            <div className="signup-box shadow">
                                <div className="info text-center pb-4">
                                    <h5>Create Your Account</h5>
                                    <p>Please fill all forms to continued</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="">Full Name</label>
                                    <input type="email" className="form-control" placeholder="Shihab Milky " />
                                    <label htmlFor="">Email</label>
                                    <input type="text" className="form-control" placeholder="example@gmail.com" />
                                    <label htmlFor="">Password</label>
                                    <input type="text" className="form-control" placeholder="*********" />
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="text" className="form-control" placeholder="*********" />
                                    <input type="text" className="btn btn-danger w-100" type="submit" value="Create Account" />
                                </form>
                                <div className="d-flex align-items-center justify-content-center">
                                    <hr className="w-25" />
                                    <span className="mx-1">or</span>
                                    <hr className="w-25" />
                                </div>
                                <div className="signup-another-away">
                                    <button className="btn  my-2 google-login"><i className="me-2 fab fa-google"></i> Continue with Google</button>
                                    <button className="btn  my-2 facebook-login"><i className="me-2 fab fa-facebook"></i> Continue with Facebook</button>
                                </div>
                                <div className="text-center mt-1">
                                    <span className="me-1 text-muted login-link">Already have account</span><Link className="login-bottom-link" to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignUp;