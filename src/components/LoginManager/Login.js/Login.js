import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleGoogleSignIn = () => {
        const loading = toast.loading('Please Wait')

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const user = res.user;
                toast.dismiss(loading);
                handleResponse(res)
            }).catch((error) => {
                const errorMessage = error.message;
                toast.dismiss(loading);
                toast.error(errorMessage)
            });
    }
    const handleResponse = (res) => {
        toast.success('Login Success')
    }
    const onSubmit = data => {
        const { email, password } = data
        const loading = toast.loading('Please wait...');
        if (email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((res) => {
                    const user = res.user;
                    toast.dismiss(loading)
                    handleResponse(res)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    toast.dismiss(loading)
                    toast.error(errorMessage)
                });

        }
    };
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="example@gmail.com"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <p>This field is required</p>}
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="*********"
                                        name="password"
                                        {...register("password", { required: true })}
                                    />
                                    {errors.password && <p>This field is required</p>}
                                    <input
                                        type="text"
                                        className="btn btn-danger w-100"
                                        type="submit"
                                        value="Login" />
                                </form>
                                <div className="d-flex align-items-center justify-content-center">
                                    <hr className="w-25" />
                                    <span className="mx-1">or</span>
                                    <hr className="w-25" />
                                </div>
                                <div className="login-another-away text-center">
                                    <button onClick={handleGoogleSignIn} className="btn  my-2 google-login"><i className="me-2 fab fa-google"></i> Continue with Google</button>
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