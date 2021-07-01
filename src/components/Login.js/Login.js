import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const handleSubmit = (data) => {
        data.preventDefault()
    }
    return (
        <section className="login-section">
            <div className="container login-container">
                <div className="login-boxed ">
                    <div className="row">
                        <div className="col-md-8 m-auto ">
                            <div className="login-box shadow">
                                <div className="info text-center pb-4">
                                    <h5>Welcome To Bazar</h5>
                                    <p>Log in with email & password</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="">Email</label>
                                    <input type="text" className="form-control" placeholder="example@gmail.com" />
                                    <label htmlFor="">Password</label>
                                    <input type="text" className="form-control" placeholder="*********" />
                                    <input type="text" className="btn btn-danger w-100" type="submit" value="Login" />
                                </form>
                                <div className="d-flex align-items-center justify-content-center">
                                    <hr className="w-25" />
                                    <span className="mx-1">or</span>
                                    <hr className="w-25" />
                                </div>
                                <div className="login-another-away text-center">
                                    <button className="btn  my-2 google-login"><i className="me-2 fab fa-google"></i> Continue with Google</button>
                                </div>
                                <div className="text-center mt-1">
                                    <span className="me-1 text-muted login-link">Don't Have Account</span><Link className="login-bottom-link" to="/signup">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Login;