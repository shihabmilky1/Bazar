import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { ApplicationProvider } from '../../../App';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(user)
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
    const onSubmit = data => {
        const { name, email, password, confirmPassword } = data
        const loading = toast.loading('Please wait...');
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((res) => {
                        const user = res.user;
                        updateName(name)
                        toast.dismiss(loading)
                        handleResponse(res)
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        toast.dismiss(loading)
                        toast.error(errorMessage)
                    });
            }
            if (password !== confirmPassword) {
                toast.dismiss(loading)
                toast.error('Password and Confirm Password Not Match')
            }
        }
    };
    const updateName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
    }
    const handleResponse = (res) => {
        setUser(res.user)
        toast.success('Login Success')
        history.replace(from);

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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label htmlFor="">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Shihab Milky"
                                        name="name"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <p>This field is required</p>}
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
                                    <label htmlFor="">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="*********"
                                        name="passwordConfirm"
                                        {...register("confirmPassword", { required: true })}
                                    />
                                    {errors.confirmPassword && <p>This field is required</p>}

                                    <input
                                        type="text"
                                        className="btn btn-danger w-100"
                                        type="submit"
                                        value="Create Account" />
                                </form>

                                <div className="d-flex align-items-center justify-content-center">
                                    <hr className="w-25" />
                                    <span className="mx-1">or</span>
                                    <hr className="w-25" />
                                </div>
                                <div className="signup-another-away">
                                    <button onClick={handleGoogleSignIn} className="btn  my-2 google-login"><i className="me-2 fab fa-google"></i> Continue with Google</button>
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