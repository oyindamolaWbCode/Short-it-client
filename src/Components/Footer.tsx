import vector from "../assets/Vector.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";
import vector4 from "../assets/Vector4.png";
import vector5 from "../assets/Vector5.png";
import vector6 from "../assets/Vector6.png";
import Logo from "../assets/Real Logo.png";
import { TiSocialTwitter } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
    return (

        <div className="Footer">
            <div className="footer-header">
                <div className="vectors">
                    <img src={vector}
                        alt=""
                        className="vector"
                    />
                    <img src={vector2}
                        alt=""
                        className="vector2"
                    />
                    <img src={vector3}
                        alt=""
                        className="vector3"
                    />
                </div>
                <div className="header-content">
                    <h5>Revolutionizing Link Optimization</h5>
                    <div className="footer-button">
                        <button>Get Started</button></div>

                    <div className="vector-two">
                        <img src={vector4}
                            alt=""
                            className="vector4"
                        />
                        <img src={vector5}
                            alt=""
                            className="vector5"
                        />
                        <img src={vector6}
                            alt=""
                            className="vector6"
                        />
                    </div>
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

export default Footer;