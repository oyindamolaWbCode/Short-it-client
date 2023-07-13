import { ChangeEvent } from 'react';
import Logo from '../../assets/Real Logo.png';
import { TiSocialTwitter } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { auth } from '../../Firebase';
import { ACCOUNT } from '../Contents/Navigating';
import { AUTH } from "../Contents/Navigating";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';

type FormValues = {
    username: string;
    password: string;
    email: string;
};

function SignUp() {
    const submitButton = document.getElementById("submit");

    if (submitButton) {
        submitButton.addEventListener("click", function (event) {
          event.preventDefault();
        });
      }

    const [form, setForm] = useState({
        email: '',
        password: '',
        username: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setForm((oldForm) => ({
            ...oldForm,
            [event.target.name]: event.target.value,
        }));

    console.log(auth.currentUser);

     const navigate = useNavigate();

    const toUserDash = () =>{
        navigate(`/${ACCOUNT}`);
    };

    const toSignUp = () =>{
        navigate(`/${AUTH}`)
    }

    const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const { email, password } = form;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) =>{
            console.log(userCredentials);
            if(userCredentials){
                toUserDash();
            }else{
                toSignUp();
            }
        })
        .then((error) => {
            console.log(error)
            console.log('no account found')
        })
    }


    return (

        <div className="SignUp-page">

            <div className="login-details">
                <div className="login-option">
                    <p>Sign up</p>
                    <div className="login-buttons">
                        <button className="google"> <FcGoogle style={{ marginRight: "5px" }} />Google</button>
                        <button className="apple"> < BsApple style={{ marginRight: "5px" }} />Apple</button>
                    </div>
                    <div className="lines">
                        <p className="line">Or</p>
                    </div>
                    <form onSubmit={handleSubmitLogin}>
                        <div className="login-form">
                            <input
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                type="text"
                                placeholder="Username"
                                className="p-2 rounded-1 passFor"
                           
                            />
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                type="text"
                                placeholder="Email"
                                className="p-2 rounded-1 mb-3 passFor"
                           
                            />
                            <input
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="password"
                                className="p-2 rounded-1 passFor"
                            
                            />
                            <input
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="Retype password"
                                className="p-2 rounded-1 passFor"
                          
                            />

                            <div className="logSub">
                                <button type='submit'>
                                    Sign up with Email
                                </button>
                            </div>

                            <div className="sign">
                                <p>Already have an account?  <a href="/Login"><b>Log in</b></a></p>
                            </div>
                            < div className="terms">
                                <p>By signing in with  an account, you agree to <br /> Scissor's <b>Terms of Service,</b> <b>Privacy Policy</b> and <b>Acceptable Use Policy.</b> </p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="footer-content">
                <div className="row">
                    <div className="col-md-2">
                        <div className="socials">
                            <img src={Logo}
                                alt=""
                            />
                        </div>
                        <div className="social-logo d-flex">
                            <TiSocialTwitter className="m-3" />
                            <BsInstagram className="m-3" />
                            <BsLinkedin className="m-3" />
                            < FiFacebook className="m-3" />

                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="heads">Why Scissors</p>

                        <p>Scissor 101</p>
                        <p>Integrations & API</p>
                        <p>Pricing</p>

                        <p className="heads">Resources</p>

                        <p>Blog</p>
                        <p>Resource pbrary</p>
                        <p>Developers</p>
                        <p>App Connectors</p>
                        <p>Support</p>
                        <p>Trust Center</p>
                        <p>Browser Extension</p>
                        <p>Mobile App</p>

                    </div>
                    <div className="col-md-2">
                        <p className="heads">Solutions</p>

                        <p>Social Media</p>
                        <p>Digital Marketing</p>
                        <p>Customer Service</p>
                        <p>For Developers</p>

                        <p className="heads">Features</p>

                        <p>Branded Links</p>
                        <p>Mobile Links</p>
                        <p>Campaign</p>
                        <p>Management & Analytics</p>
                        <p>QR Code Generation</p>


                    </div>
                    <div className="col-md-2">
                        <p className="heads">Products</p>

                        <p>Link Management</p>
                        <p>QR Codes</p>
                        <p>Link-in-bio</p>

                        <p className="heads">Legal</p>

                        <p>Priavcy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Terms of Service</p>
                        <p>Acceptable Use Policy</p>
                        <p>Code of Conduct</p>
                    </div>
                    <div className="col-md-2">
                        <p className="heads">Company</p>

                        <p>About Scissors</p>
                        <p>Careers</p>
                        <p>Partners</p>
                        <p>Press</p>
                        <p>Contact</p>
                        <p>Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;